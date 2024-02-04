//Import necessary libraries
const faker = require('faker');

Function to generate random email 
const generateRandomEmail = () => {
  return faker.internet.email();
}


describe('Yuzee Sign Up, () => {
  it('should sign up with random email and validate', () => {
    cy.visit('https://dev.yuzzee.click')
  })
})