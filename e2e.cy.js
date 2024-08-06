/// <reference types='cypress' />

const { should } = require("chai");

describe('Web Tables page', () => {
    
  beforeEach(() =>{
    cy.visit('https://www.demoblaze.com/');
    })
});


it('Should provide the registration successful', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').type('test189@gmail.com')
    cy.get('#sign-password').type('tesT189')
    cy.get('#btn btn-primary').click();

    cy.window().should('contain', 'Sign up successful');
  });

  it('Should provide the login successful', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type('test189@gmail.com');
    cy.get('#loginpassword').type('tesT189');
    cy.get('#btn btn-primary').click();

    cy.get('#nameofuser').should('contain', 'Sign up test189@gmail.com');
  });

  it('Should provide adding item to the cart', () => {
    cy.contains('.hrefch', 'Samsung galaxy s6').click();
    cy.get('.btn btn-success btn-lg').click();

    cy.window().should('contain', 'Product added');
    cy.window().click('contain', 'Product added');
  });