describe('TutorialsNinja', () => {
  it('registrationPage', () => {

    cy.visit('https://tutorialsninja.com/demo/')
  
    cy.get('.dropdown > .dropdown-toggle > .fa').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();
    cy.get('#content').click();
    cy.get('#input-firstname').clear('P');
    cy.get('#input-firstname').type('Promojit');
    cy.get('#input-lastname').clear('P');
    cy.get('#input-lastname').type('Paul');
    cy.get('#input-email').clear('t');
    cy.get('#input-email').type('test165165156156@gmail.com');
    cy.get('#input-telephone').clear('6');
    cy.get('#input-telephone').type('69696996654');
    cy.get('#input-password').clear('a');
    cy.get('#input-password').type('asdflkjhg');
    cy.get('#input-confirm').clear('a');
    cy.get('#input-confirm').type('asdflkjhg');
    cy.get('[type="checkbox"]').check();
    cy.get('.pull-right > .btn').click();
    cy.get('#content').click();
    cy.get('.pull-right > .btn').click();
    
  })

  
  it('loginPage', function() {
  
    cy.visit('https://tutorialsninja.com/demo/');

    cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(2) > a').click();
    cy.get('#input-email').clear('test1651651561561@gmail.com');
    cy.get('#input-email').type('test1651651561561@gmail.com');
    cy.get('#input-password').clear('a');
    cy.get('#input-password').type('asdflkjhg');
    cy.get('form > .btn').click();
    
  });


  it('homePage', function() {
    
    cy.visit('https://tutorialsninja.com/demo/');


    cy.get('.dropdown > .dropdown-toggle > .fa').click();
    cy.get('.dropdown-menu > :nth-child(2) > a').click();
    cy.get('#input-email').clear('test1651651561561@gmail.com');
    cy.get('#input-email').type('test1651651561561@gmail.com');
    cy.get('#input-password').clear('a');
    cy.get('#input-password').type('asdflkjhg');
    cy.get('form > .btn').click();
    cy.get('h1 > a').click();
    cy.get('.form-control').clear('m');
    cy.get('.form-control').type('MacBook ');
    cy.get('.input-group-btn > .btn > .fa').click();
    cy.get('[onclick="cart.add(\'44\', \'1\');"] > .fa').click();
    cy.get('.alert').click();
    cy.get('.alert').click();
    cy.get('.alert > [href="https://tutorialsninja.com/demo/index.php?route=checkout/cart"]').click();
    cy.get(':nth-child(1) > :nth-child(4) > .input-group > .input-group-btn > .btn-danger > .fa').click();
    cy.get('.pull-right > .btn').click();
    cy.get('.pull-right > .btn').click();
    cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(4) > a').click();
    cy.get('#content').click();
    cy.get('#cart-total').click();
    cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(4) > a').click();
    cy.get('h1 > a').click();
    cy.get('.dropdown > .dropdown-toggle > .fa').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();
    cy.get('.list-group > [href="https://tutorialsninja.com/demo/index.php?route=account/transaction"]').click();
    cy.get('.list-group > [href="https://tutorialsninja.com/demo/index.php?route=account/order"]').click();

  });



  it('editAccount', function() {
    
    cy.visit('https://tutorialsninja.com/demo/');


    cy.get('.dropdown > .dropdown-toggle > .fa').click();
    cy.get('.dropdown-menu > :nth-child(2) > a').click();
    cy.get('#input-email').click();
    cy.get('#input-email').clear('test1bg@gmail.com');
    cy.get('#input-email').type('test1bg@gmail.com');
    cy.get('#input-password').clear('q');
    cy.get('#input-password').type('qwertpoiuy');
    cy.get('form > .btn').click();
    cy.get('#input-firstname').type('Batman');
    cy.get(':nth-child(3) > .col-sm-10').click();
    cy.get(':nth-child(3) > .col-sm-10').click();
    cy.get(':nth-child(3) > .col-sm-10').click();
    cy.get('#input-lastname').clear();
    cy.get('#input-lastname').type('Robert Pattinson ');
    cy.get('#input-email').click();
    cy.get('#input-email').clear('testbg@gmail.com');
    cy.get('#input-email').type('test2bg@gmail.com');
    cy.get('#input-telephone').clear('9876543210');
    cy.get('#input-telephone').type('9876543210');
    cy.get('.pull-right > .btn').click();
    cy.get('#content > :nth-child(2) > :nth-child(2) > a').click();
    cy.get('#input-password').clear('a');
    cy.get('#input-password').type('asdflkjhg');
    cy.get('#input-confirm').clear('a');
    cy.get('#input-confirm').type('asdflkjhg');
    cy.get('.pull-right > .btn').click();
    cy.get('.alert').click();
    cy.get('.alert').click();
    cy.get('.alert').click();
    cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(5) > a').click();
    
  });
});