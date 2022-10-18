/// <reference types="cypress" />

Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('getByDataLike', (selector, ...args) => {
  return cy.get(`[data-test*=${selector}]`, ...args);
});

Cypress.Commands.add('clickFood', (categoryIndex, foodIndex) => {
  cy.getByData('food-list').eq(categoryIndex).find(`[data-test=food-item]`).eq(foodIndex).click();
});

Cypress.Commands.add('clickOption', ({ temperatureIndex, sizeIndex }) => {
  const temperatureOptionButtons = cy
    .getByData('option-button-box')
    .eq(0)
    .find('[data-test=option-button]');
  const sizrOptionButtons = cy
    .getByData('option-button-box')
    .eq(1)
    .find('[data-test=option-button]');

  if (temperatureIndex) {
    temperatureOptionButtons.eq(temperatureIndex).click();
  } else {
    temperatureOptionButtons.last().click();
  }

  if (sizeIndex) {
    sizrOptionButtons.eq(sizeIndex).click();
  } else {
    sizrOptionButtons.last().click();
  }
});
