@Smoke
Feature: Account Creation for a new customer

Background: 
      Given The user is on the main page login using credentials and click one desktop button


@Example
Scenario: Creating Order using Cucumber feature example 
      When the user enters the page purchase the product and add to the Cart
      | product            |
      | MacBook Air        |
      And then go to shopping cart check all product has been added and checkout from that page
      And add the deails in checkout options and account billing details
      And add the deails in delivery details and delivery methods
      And add the deails in payment method and confirm the opder
      Then adding all details check whether the order is getting confirmed


@Excel
Scenario: Creating order using Excel sheet 
      When the user enters the page purchase the product and add to the Cart using excel
      And then go to shopping cart check all product has been added and checkout from that page
      And add the deails in checkout options and account billing details
      And add the deails in delivery details and delivery methods
      And add the deails in payment method and confirm the opder
      Then adding all details check whether the order is getting confirmed


