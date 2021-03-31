package stepDefinitions;

import core.Base;
import java.util.List;
import java.util.Map;
import org.junit.Assert;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.RetailPagePracticeObj;
import utilities.WebDriverUtility;

public class RetailPagePracticeStepDefinition extends Base {

	RetailPagePracticeObj retailPageObj = new RetailPagePracticeObj();

	@Given("^User click on MyAccount$")
	public void user_click_on_MyAccount() throws Throwable {
		retailPageObj.userClickOnMyAccount();
		logger.info("User click on MyAccount");
		WebDriverUtility.screenShot();
	}

	@When("^User enter username ‘userName’ and password 'password’$")
	public void user_enter_username_userName_and_password_password() throws Throwable {
		retailPageObj.enterUserName("qais@gmail.com");
		logger.info("User enter username");
		retailPageObj.enterPassword("123456789");
		logger.info("User enter password");
		WebDriverUtility.screenShot();
	}

	@When("^User click on ‘Register for an Affiliate Account’ link$")
	public void user_click_on_Register_for_an_Affiliate_Account_link() throws Throwable {
		retailPageObj.clickOnAffiliateLink();
		logger.info("User clicks on Registe Affiliate link");
		WebDriverUtility.screenShot();

	}

	@When("^User fill affiliate form with below information$")
	public void user_fill_affiliate_form_with_below_information(DataTable affiliateformInfo) throws Throwable {
		List<Map<String, String>> dataValues = affiliateformInfo.asMaps(String.class, String.class);
		retailPageObj.userFillCompanyField(dataValues.get(0).get("company"));
		retailPageObj.userFillWebsiteField(dataValues.get(0).get("website"));
		retailPageObj.userFillTaxIdField(dataValues.get(0).get("taxID"));
		retailPageObj.userFillpaymentField(dataValues.get(0).get("paymentMethod"));
		retailPageObj.filldChequePayeeName(dataValues.get(0).get("ChequePayeeName"));
		logger.info("User fill affiliate form with below information");
		WebDriverUtility.screenShot();
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
	}

	@When("^User check on About us check box$")
	public void user_check_on_About_us_check_box() throws Throwable {
		retailPageObj.userCheckOnCheckBox();
		logger.info("User check on About us check box");
		WebDriverUtility.screenShot();

	}

	@Then("^User should see a success message$")
	public void user_should_see_a_success_message() throws Throwable {
		retailPageObj.successMessageDisplayed();
		logger.info("User should see a success message");
		WebDriverUtility.screenShot();
	}

	@When("^User click on ‘Edit your affiliate informationlink$")
	public void user_click_on_Edit_your_affiliate_informationlink() throws Throwable {
		retailPageObj.userEditAffiliateInformationLink();
		logger.info("User click on Edit affiliate infolink");
		WebDriverUtility.screenShot();

	}

	@When("^user click on Bank Transfer radio button$")
	public void user_click_on_Bank_Transfer_radio_button() throws Throwable {
		retailPageObj.userClickOnBankTransferRadioButton();
		logger.info("user click on Bank Transfer radio button");
		WebDriverUtility.screenShot();
	}

	@When("^User fill Bank information with below information$")
	public void user_fill_Bank_information_with_below_information(DataTable fillBankInfo) throws Throwable {
		List<Map<String, String>> dataValues = fillBankInfo.asMaps(String.class, String.class);
		retailPageObj.userFillBankNameField(dataValues.get(0).get("bankName"));
		retailPageObj.userFillabaNumberField(dataValues.get(0).get("abaNumber"));
		retailPageObj.userFillSwiftCodeField(dataValues.get(0).get("swiftCode"));
		retailPageObj.userFillAccountNameField(dataValues.get(0).get("accountName"));
		retailPageObj.userFillAccountNumberField(dataValues.get(0).get("accountNumber"));
		logger.info("User fill Bank information with below inf");
		WebDriverUtility.screenShot();

	}

	@When("^User click on ‘Edit your account information’ link$")
	public void user_click_on_Edit_your_account_information_link() throws Throwable {
		retailPageObj.clickOnEditAccountInformation();
		logger.info("User click on Edit your account info link");
		WebDriverUtility.screenShot();
	}

	@When("^User modify below information$")
	public void user_modify_below_information(DataTable modifyBelowInf) throws Throwable {
		List<Map<String, String>> dataValues = modifyBelowInf.asMaps(String.class, String.class);
		retailPageObj.userEnterFirstNameField(dataValues.get(0).get("firstname"));
		retailPageObj.userEnterLastNameField(dataValues.get(0).get("lastName"));
		retailPageObj.userEnterEmailField(dataValues.get(0).get("email"));
		retailPageObj.userEnterTelephoneNumber(dataValues.get(0).get("telephone"));
		logger.info("User modify below information");
		WebDriverUtility.screenShot();
	}

	@When("^User click on continue button$")
	public void user_click_on_continue_button() throws Throwable {
		retailPageObj.userClickOnContinueButtonOfEditLink();
		logger.info("User click on continue button");
		WebDriverUtility.screenShot();
	}

	@Then("^User should see a message ‘Success: Your account has been successfully updated\\.’$")
	public void user_should_see_a_message_Success_Your_account_has_been_successfully_updated() throws Throwable {
		retailPageObj.editAccountSuccessMessage();
		logger.info("User should see a message ‘Success: Your account has been successfully updated");
		WebDriverUtility.screenShot();

	}
}
