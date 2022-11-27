describe('Тестирование staya', function () {

     it('search something', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link') .click();
        cy.get('.auth-form > form > [type="email"]') .click();
        cy.get('.auth-form > form > [type="email"]') .type('bozhcko.maksim1m@yandex.ru')
        cy.get('.auth-form > form > [type="password"]') .click();
        cy.get('.auth-form > form > [type="password"]') .type('89614539580qqqW')
        cy.get('.auth-form__submit > .s-button__content') .click();
        cy.get('.profile-orders__title') .contains('Мои заказы');
        cy.get('.layout_profile > header > #stickyHeader > .header-bottom > .header-bottom--container > .header-bottom__right > span > .header-bottom__right--link') .click();
        cy.get('button.profile__nav-link') .click();
        cy.get('.box__button_ok > .s-button__content') .click();
        cy.get('.header-bottom__right--link') .click();
        cy.get('.auth-form > form > [type="email"]') .click();
        cy.get('.auth-form > form > [type="email"]') .type('bozhcko.maksim1m@yandex.ru')
        cy.get('.auth-form > form > [type="password"]') .click();
        cy.get('.auth-form > form > [type="password"]') .type('89614539580qqq')
        cy.get('.auth-form__submit > .s-button__content') .click();
        cy.get('.error-label') .contains('Невозможно войти с предоставленными учетными данными.');
        })
})