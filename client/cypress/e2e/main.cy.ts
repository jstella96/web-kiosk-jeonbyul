describe('main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/main');
  });
  it('매장이용 버튼을 눌렀을때 메인화면으로 이동해야한다', () => {
    cy.getByData('dinein-button').click();
    cy.location('pathname').should('eq', '/main');
  });
  it('포장 버튼을 눌렀을때 메인화면으로 이동해야한다', () => {
    cy.getByData('takeout-button').click();
    cy.location('pathname').should('eq', '/main');
  });
});
