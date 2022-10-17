describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should be able to add numbers together', () => {
    cy.get('#number1').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '5')
  });

})

// calculator.add() - add 1 to 4 and get 5
// calculator.subtract() subtract 4 from 7 and get 3
// calculator.multiply() - multiply 3 by 5 and get 15
// calculator.divide() - divide 21 by 7 and get 3
// calculator.numberClick() - concatenate multiple number button clicks
// calculator.operatorClick() - chain multiple operations together
// calculator.clearClick() - clear the running total without affecting the calculation


// Do the number buttons update the display of the running total?
// Do the arithmetical operations update the display with the result of the operation?
// Can multiple operations be chained together?
// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
// What does the code do in exceptional circumstances? 
// Specifically, if you divide by zero, what is the effect? 
// Write a test to describe what you'd prefer to happen, 
// and then correct the code to make that test pass 
// (you will need to modify the Calculator model to meet this requirement).