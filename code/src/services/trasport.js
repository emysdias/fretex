import http from "./api.js";

export default {
  getAllTransports: () => {
    return http.get("transport");
  },
  getTransportValue(weight, destination) {
    return http
      .get("transport")
      .then((response) => {
        const transports = response.data;

        const filteredTransports = transports.filter(
          (transport) => transport.city === destination
        );

        const transportsWithTotalCost = filteredTransports.map((transport) => {
          const lightCost = parseFloat(
            transport.cost_transport_light.replace("R$", "").trim()
          );
          const heavyCost = parseFloat(
            transport.cost_transport_heavy.replace("R$", "").trim()
          );
          const total_cost =
            weight <= 100 ? lightCost * weight : heavyCost * weight;
          return {
            ...transport,
            total_cost,
          };
        });

        const sortedTransports = transportsWithTotalCost.sort(
          (a, b) => a.totalCost - b.totalCost
        );

        const cheapestFreight = sortedTransports[0];

        const sortedByLeadTime = transportsWithTotalCost.sort((a, b) => {
          const timeA = parseInt(a.lead_time.replace("h", "").trim());
          const timeB = parseInt(b.lead_time.replace("h", "").trim());
          return timeA - timeB;
        });

        const fastestFreight = sortedByLeadTime[0];

        return {
          cheapestFreight,
          fastestFreight,
        };
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  },
};
