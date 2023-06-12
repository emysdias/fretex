import formatCurrency from "../../../utils/currencyFilter";

describe("formatCurrency", () => {
  it("should return the value unchanged if it is not a number", () => {
    const value = "100.00";
    const formattedValue = formatCurrency(value);
    expect(formattedValue).toBe(value);
  });

  it("should format the value as currency if it is a number", () => {
    const value = 1000.5;
    const formattedValue = formatCurrency(value);
    expect(formattedValue).toBe("R$ 1.000,50");
  });
});
