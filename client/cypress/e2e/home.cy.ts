import { TEMPERATURE_LABLE_MAP } from '../../src/constants/option';
import { OptionType } from '../../src/types/option';

describe('메인페이지 상품 장바구니 테스트', () => {
  beforeEach(() => {
    cy.intercept('GET', '/categories', { fixture: 'categories.json' }).as('getCategories');
    cy.intercept('GET', '/foods', { fixture: 'foods.json' }).as('getFoods');
    cy.intercept('GET', '/options*', { fixture: 'options.json' }).as('getOptions');
    cy.visit('http://localhost:3000/main');
  });

  it('상품 선택시 모달이 보이고, 닫기 클릭시 모달이 사라져야 한다', () => {
    cy.wait(['@getFoods', '@getCategories']);
    cy.getByData('option-modal').should('not.exist');
    cy.getByData('food-item').eq(0).click();
    cy.wait(['@getOptions']);
    cy.getByData('option-modal').should('exist');
    cy.getByData('option-modal-close').click();
    cy.getByData('option-modal').should('not.exist');
  });

  it('옵션에 값이 null인 상품은 표시가 되지 않아야 한다', () => {
    cy.getByData('food-list').eq(1).find(`[data-test=food-item]`).eq(0).click();
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

  //it('상품 옵션 선택 후 담기 버튼을 클릭하면 장바구니에 담겨야한다.', () => {});

  // it('같은 상품, 같은 옵션 선택시 장바구니에서 합쳐지는가', () => {});
});
