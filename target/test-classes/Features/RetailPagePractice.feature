@AllTest
Feature: Retail Page Features
Background:
Given User is on Retail website
And User click on MyAccount
When User click on Login
And User enter username ‘userName’ and password 'password’
And User click on Login button
Then User should be logged in to MyAccount dashboard


Scenario: Register as an Affiliate user with Cheque Payment Method
When User click on ‘Register for an Affiliate Account’ link
And User fill affiliate form with below information
|company|website|taxID|paymentMethod|ChequePayeeName|
|CostCo|WWW.CostCo.com|20000|Cheque|payment|
And User check on About us check box
And User click on Continue button
Then User should see a success message


Scenario: Edit your affiliate information from Cheque payment method to Bank Transfer
When User click on ‘Edit your affiliate informationlink
And user click on Bank Transfer radio button
And User fill Bank information with below information
|bankName|abaNumber|swiftCode|accountName|accountNumber|
|welsfargo|26000|5000|Qais|123654789|
And User click on Continue button
Then User should see a success message


Scenario: Edit your account Information
When User click on ‘Edit your account information’ link
And User modify below information
|firstname|lastName|email|telephone|
|Qais|Sadat|Email |334466|
And User click on continue button
Then User should see a message ‘Success: Your account has been successfully updated.’