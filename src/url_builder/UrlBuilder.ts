export default abstract class UrlBuilder {

  private parameters;

  protected constructor(
      private baseUrl: string,
      parameters,
      private defaultParameters,
  ) {
    this.parameters = {...defaultParameters, ...parameters};
  };

  setParameters(parameters) {
    this.parameters = {...this.parameters, ...parameters};
    return this;
  }

  build(): URL {
    const url = new URL(this.baseUrl);
    for (const [key, value] of Object.entries(this.parameters)) {
      if (value) url.searchParams.set(key, value);
    }
    return url;
  };
}