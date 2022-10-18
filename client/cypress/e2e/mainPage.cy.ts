import { TEMPERATURE_LABLE_MAP } from '../../src/constants/option';
import { OptionType } from '../../src/types/option';

describe('메인페이지 장바구니 기능 테스트', () => {
  beforeEach(() => {
    cy.intercept('GET', '/categories', { fixture: 'categories.json' }).as('getCategories');
    cy.intercept('GET', '/foods', { fixture: 'foods.json' }).as('getFoods');
    cy.intercept('GET', '/options*', { fixture: 'options.json' }).as('getOptions');
    cy.visit('http://localhost:3000/main');
  });

  it('상품 선택시 모달이 보이고, 닫기 클릭시 모달이 사라져야 한다', () => {
    cy.wait(['@getFoods', '@getCategories']);
    cy.getByData('option-modal').should('not.exist');
    cy.getByDataLike('food-item').eq(0).click();
    cy.wait(['@getOptions']);
    cy.getByData('option-modal').should('exist');
    cy.getByData('option-modal-close').click();
    cy.getByData('option-modal').should('not.exist');
  });

  it('옵션에 값이 null인 상품은 표시가 되지 않아야 한다', () => {
    cy.getByData('food-list').eq(1).find(`[data-test*=food-item]`).eq(0).click();

    cy.fixture('foods.json').then((foodsData) => {
      const { name, id } = foodsData[1].foods[0];
      cy.getByData('option-modal').contains(name);
      cy.getByData('option-button-box').should('exist').eq(0).find(`[data-test=option-button]`);

      cy.fixture('options.json').then((optionsData: OptionType) => {
        const { temperature } = optionsData;
        const tempOption = temperature[id];
        Object.keys(tempOption).forEach((key) => {
          const k = key === 'h' ? 'h' : 'c';
          if (tempOption[k] !== null) {
            const label = TEMPERATURE_LABLE_MAP[k];
            cy.getByData('option-modal').contains(label);
          } else {
            const label = TEMPERATURE_LABLE_MAP[k];
            cy.getByData('option-modal').contains(label).should('not.exist');
          }
        });
      });
    });
  });

  it('같은 상품, 같은 옵션 선택시 장바구니에서 합쳐져야 한다', () => {
    cy.getByData('cart-item').should('have.length', '0');
    let foodId = 1;
    for (let i = 0; i < 2; i++) {
      cy.getByData(`food-item-${foodId}`).click();
      cy.clickOption({});
      cy.getByData('option-modal-submit').click();
    }
    cy.getByData('cart-item')
      .should('exist')
      .find('[data-test=counter-value]')
      .should('have.text', '2');
    cy.getByData('cart-item').should('have.length', '1');

    foodId = 2;
    cy.getByData(`food-item-${foodId}`).click();
    cy.getByData('option-modal-submit').click();
  });

  it('장바구니에 상품이 없을때는 주문하기 버튼이 비활성화 되어야 한다.', () => {
    cy.getByData('cart-order-button').should('be.disabled');
  });

  it('장바구니에 상품이 있을때는 버튼을 누르면 다음페이지로 넘어가야 한다. ', () => {
    const foodId = 1;
    cy.getByData(`food-item-${foodId}`).click();
    cy.getByData('option-modal-submit').click();
    cy.getByData('cart-order-button').should('not.be.disabled');
    //cy.getByData('cart-item').should('have.length', '0');
  });
});
