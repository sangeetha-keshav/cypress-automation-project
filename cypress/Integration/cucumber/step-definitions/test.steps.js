import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import TestPageObject from "../page-objects/test.po";

const testPO = new TestPageObject()

Given('google.com is opened in browser',()=>{
    cy.visit('www.google.com');
})

When('I type {string} in searchbox',(searchText) =>{
    testPO.getSearchBox().type(searchText + '{enter}');
})

Then('I should see google search for cypress.io',()=>{
    //cy.get('.LC20lb').contains('cypress');
    cy.get('.LC20lb').contains('cypressssssss'); // uncomment for checking failure scenario.
})