import http from "../../../services/api";

describe("http", () => {
  it("should create an instance of axios with the correct baseURL", () => {
    expect(http.defaults.baseURL).toBe("http://localhost:3000/");
  });
});
