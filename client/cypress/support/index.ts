declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;

    getByDataLike(dataTestPrefixAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;

    clickFood(categoryIndex: number, foodIndex: number): Chainable<JQuery<HTMLElement>>;
    clickOption({
      temperatureIndex,
      sizeIndex
    }: {
      temperatureIndex?: number;
      sizeIndex?: number;
    }): Chainable<JQuery<HTMLElement>>;
  }
}
