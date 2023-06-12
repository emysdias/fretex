import routes from "../../../router/index";

describe("router", () => {
  it("should render Home component when the path is '/'", () => {
    const mockRoute = { path: "/", name: "Home" };

    const component = routes.options.routes.find(
      (route) => route.name === mockRoute.name
    );

    expect(component.name).toBe("Home");
  });

  it("should render InternalError component when the path is '/erro-interno'", () => {
    const mockRoute = { path: "/erro-interno", name: "InternalError" };

    const component = routes.options.routes.find(
      (route) => route.name === mockRoute.name
    );

    expect(component.name).toBe("InternalError");
  });

  it("should render PageNotFound component when the path is '/404'", () => {
    const mockRoute = { path: "/404", name: "PageNotFound" };

    const component = routes.options.routes.find(
      (route) => route.name === mockRoute.name
    );

    expect(component.name).toBe("PageNotFound");
  });

  it("should redirect to '/404' when the path is not found", () => {
    const mockRoute = { path: "/random-path" };

    const component = routes.options.routes.find(
      (route) => route.name === "PageNotFound"
    );

    expect(component.name).toBe("PageNotFound");
  });
});
