describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should update display according to number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should update the display with the result of the arithmetical operation', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  });

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  });

  it('should output as expected for a range of numbers: positive', () => {
    cy.get('#number4').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  });

  it('should output as expected for a range of numbers: negative', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
  });

  it('should output as expected for a range of numbers: decimals', () => {
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.3')
  });

  it('should output as expected for a range of numbers: negative decimals', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6.7')
  });

  it('should output as expected for a range of numbers: large numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2541865828329')
  });
  
  it('should output as expected for a range of numbers: large negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-multiply').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1e+26')
  });

  // it('should output as expected in exceptional circumstances: dividing by zero', () => {
  //   cy.get('#number9').click();
  //   cy.get('#operator-divide').click();
  //   cy.get('#number0').click();
  //   cy.get('#operator-equals').click();
  //   cy.get('.display').should('contain', 'Infinity')
  // });

  it('should output as expected in exceptional circumstances: dividing by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '∞')
  });
  

  //Calculator does not output as expected when 0 is first typed input.
  it('should output as expected in exceptional circumstances: multiplying by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  });

});



// Do the number buttons update the display of the running total?
// Do the arithmetical operations update the display with the result of the operation?
// Can multiple operations be chained together?
// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// What does the code do in exceptional circumstances? 
// Specifically, if you divide by zero, what is the effect? 
// Write a test to describe what you'd prefer to happen, 
// and then correct the code to make that test pass 
// (you will need to modify the Calculator model to meet this requirement).