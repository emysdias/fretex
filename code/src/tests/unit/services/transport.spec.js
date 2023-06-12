import transport from "../../../services/trasport";
import http from "../../../services/api";

jest.mock("../../../services/api.js");

describe("transport", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("should fetch all transports from the server", async () => {
    const mockResponse = {
      data: [
        {
          city: "Destination 1",
          cost_transport_light: "R$ 10",
          cost_transport_heavy: "R$ 20",
          lead_time: "4h",
        },
        {
          city: "Destination 2",
          cost_transport_light: "R$ 15",
          cost_transport_heavy: "R$ 25",
          lead_time: "2h",
        },
      ],
    };

    http.get.mockResolvedValue(mockResponse);

    const response = await transport.getAllTransports();

    expect(http.get).toHaveBeenCalledWith("transport");
    expect(response).toEqual(mockResponse);
  });

  it("should calculate cheapest and fastest freight based on weight and destination", async () => {
    const mockResponse = {
      data: [
        {
          city: "Destination 1",
          cost_transport_light: "R$ 10",
          cost_transport_heavy: "R$ 20",
          lead_time: "4h",
        },
        {
          city: "Destination 1",
          cost_transport_light: "R$ 15",
          cost_transport_heavy: "R$ 25",
          lead_time: "2h",
        },
      ],
    };

    http.get.mockResolvedValue(mockResponse);

    const weight = 50;
    const destination = "Destination 1";

    const response = await transport.getTransportValue(weight, destination);

    expect(http.get).toHaveBeenCalledWith("transport");
    expect(response.cheapestFreight).toEqual({
      city: "Destination 1",
      cost_transport_light: "R$ 10",
      cost_transport_heavy: "R$ 20",
      lead_time: "4h",
      total_cost: 500,
    });
    expect(response.fastestFreight).toEqual({
      city: "Destination 1",
      cost_transport_light: "R$ 15",
      cost_transport_heavy: "R$ 25",
      lead_time: "2h",
      total_cost: 750,
    });
  });

  it("should throw an error if an error occurs during the API request", async () => {
    const errorMessage = "Network Error";
    http.get.mockRejectedValue(new Error(errorMessage));

    await expect(transport.getAllTransports()).rejects.toThrowError(
      errorMessage
    );

    const weight = 50;
    const destination = "Destination 1";

    await expect(
      transport.getTransportValue(weight, destination)
    ).rejects.toThrowError(errorMessage);
  });
});
