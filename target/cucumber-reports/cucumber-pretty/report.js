$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RetailPagePractice.feature");
formatter.feature({
  "line": 2,
  "name": "Retail Page Features",
  "description": "",
  "id": "retail-page-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AllTest"
    }
  ]
});
formatter.before({
  "duration": 4203398400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username ‘userName’ and password \u0027password’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 10547654500,
  "status": "passed"
});
formatter.match({
  "location": "RetailPagePracticeStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 989816200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3922705500,
  "status": "passed"
});
formatter.match({
  "location": "RetailPagePracticeStepDefinition.user_enter_username_userName_and_password_password()"
});
formatter.result({
  "duration": 919539000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 393648700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3408964500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Register as an Affiliate user with Cheque Payment Method",
  "description": "",
  "id": "retail-page-features;register-as-an-affiliate-user-with-cheque-payment-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User click on ‘Register for an Affiliate Account’ link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User fill affiliate form with below information",
  "rows": [
    {
      "cells": [
        "company",
        "website",
        "taxID",
        "paymentMethod",
        "ChequePayeeName"
      ],
      "line": 15
    },
    {
      "cells": [
        "CostCo",
        "WWW.CostCo.com",
        "20000",
        "Cheque",
        "payment"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User check on About us check box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPagePracticeStepDefinition.user_click_on_Register_for_an_Affiliate_Account_link()"
});
formatter.result({
  "duration": 45031164300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(), \u0027Register for an affiliate account\u0027)]\"}\n  (Session info: chrome\u003d89.0.4389.114)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-8F92LBU\u0027, ip: \u002710.0.0.220\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.114, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62930}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 320ceaf7c724027ddd96b7bb25b467f4\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(), \u0027Register for an affiliate account\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat utilities.WebDriverUtility.clickOnElement(WebDriverUtility.java:23)\r\n\tat pageObjects.RetailPagePracticeObj.clickOnAffiliateLink(RetailPagePracticeObj.java:61)\r\n\tat stepDefinitions.RetailPagePracticeStepDefinition.user_click_on_Register_for_an_Affiliate_Account_link(RetailPagePracticeStepDefinition.java:36)\r\n\tat ✽.When User click on ‘Register for an Affiliate Account’ link(Features/RetailPagePractice.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RetailPagePracticeStepDefinition.user_fill_affiliate_form_with_below_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPagePracticeStepDefinition.user_check_on_About_us_check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "RetailPagePracticeStepDefinition.user_should_see_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1233792300,
  "status": "passed"
});
formatter.before({
  "duration": 2880622400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter username ‘userName’ and password \u0027password’",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 4425591800,
  "status": "passed"
});
formatter.match({
  "location": "RetailPagePracticeStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 1041396100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 6695168800,
  "status": "passed"
});
formatter.match({
  "location": "RetailPagePracticeStepDefinition.user_enter_username_userName_and_password_password()"
});
