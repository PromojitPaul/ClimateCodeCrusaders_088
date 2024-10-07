describe('template spec', () => {
  
  it('EditAccountInfo', function() {
    
    cy.visit('https://tutorialsninja.com/demo/');

    cy.get('.dropdown > .dropdown-toggle > .fa').click();
    cy.get('.dropdown-menu > :nth-child(2) > a').click();
    cy.get('#input-email').clear('vasosor427q@scarden.com');
    cy.get('#input-email').type('vasosor427q@scarden.com');
    cy.get('#input-password').clear('a');
    cy.get('#input-password').type('asdflkjhg');
    cy.get('form > .btn').click();
    cy.get('.list-group > [href="https://tutorialsninja.com/demo/index.php?route=account/edit"]').click();
    cy.get('fieldset > :nth-child(2)').click();
    cy.get('#input-firstname').clear();
    cy.get('#input-firstname').type('Batman');
    cy.get(':nth-child(3) > .col-sm-10').click();
    cy.get('#input-lastname').clear();
    cy.get('#input-lastname').type('Robert Pattinson');
    cy.get('#input-email').click();
    cy.get('#input-email').clear('vasosor427q@scarden.com');
    cy.get('#input-email').type('vasosor427q@scarden.com');
    cy.get('#input-telephone').clear('5');
    cy.get('#input-telephone').type('54521320236548');
    cy.get('.pull-right > .btn').click();
    cy.get('#content > :nth-child(2) > :nth-child(2) > a').click();
    cy.get('#input-password').clear('a');
    cy.get('#input-password').type('asdflkjhg');
    cy.get('#input-confirm').clear('a');
    cy.get('#input-confirm').type('asdflkjhg');
    cy.get('.pull-right > .btn').click();
    cy.get('.dropdown > .dropdown-toggle > .fa').click();
    cy.get('.dropdown-menu > :nth-child(5) > a').click();
    cy.get('.pull-right > .btn').click();
    
  });
})
