package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilities.WebDriverUtility;

public class RetailPageObj extends Base {
	
	public RetailPageObj() {
		
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//input[@name= 'search']")
	private WebElement searchBar;
	
	@FindBy(xpath="//button[@class= 'btn btn-default btn-lg']")
	private WebElement searchButton;
	
	@FindBy(xpath= "//img[@title='iPhone']")
	private WebElement iPhoneImage;
	
	public void enterValueSearchBar(String value) {
		WebDriverUtility.enterValue(searchBar, value);
		
	}
	
	public void clickOnSearchBtn() {
		
		WebDriverUtility.clickElementWithJS(searchButton);
	}
	
	public boolean iphoneImageIsDisplayed() {
		
		if(iPhoneImage.isDisplayed())
			return true;
		else
			return false;
	}
}
