@AccountCreation
Feature: Account Creation for a new customer

Scenario Outline: Creating Account 
   Given user on the main page go to the Regiter page
   When user enters the Register Page Enter the personal details "<Firstname>" "<Lastname>" "<Email>" "<Telephone>"
   And after enter the details for your password "<Password>"
   And chekbox the newsletter and click on the submit button "<Subscrbe>"
   Then Log out from the application
   
   
Examples:
        | Firstname    | Lastname | Email                     | Telephone  | Password      | Subscrbe |
        | Akil         | Ganesh   | akilganesh00558@gamil.com | 9966337011 | Akilganesh9%  | Yes      |

