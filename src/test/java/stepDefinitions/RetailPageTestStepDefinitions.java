package stepDefinitions;

import org.junit.Assert;

import core.Base;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.RetailPageObj;
import utilities.WebDriverUtility;

public class RetailPageTestStepDefinitions extends Base {

	RetailPageObj retailPage = new RetailPageObj();

	@When("^User search for '(.+)'$")
	public void user_search_for_iphone(String value) throws Throwable {

		retailPage.enterValueSearchBar(value);
		logger.info("User entered value in search bar");
		WebDriverUtility.screenShot();
	}

	@When("^User click on search button$")
	public void user_click_on_search_button() throws Throwable {

		retailPage.clickOnSearchBtn();
		logger.info("User click on search button");

	}

	@Then("^User should see Iphone image$")
	public void user_should_see_Iphone_image() throws Throwable {
		Assert.assertTrue(retailPage.iphoneImageIsDisplayed());
		WebDriverUtility.screenShot();
		logger.info("Iphone Image Displayed");

	}

}
