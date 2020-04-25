package nomadSeleniumTests;
import static org.junit.jupiter.api.Assertions.*;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SortQueriesTestSuite {
	static String website = "http://software-lab-travel-app.s3-website.us-east-2.amazonaws.com/";
	
	private boolean sortChoice(WebDriver wd, String dir, String value, String expected) {
		wd.findElement(By.xpath("//button[@id='filter-btn']")).click();
		wd.findElement(By.xpath("//input[@value='" + value + "'][@data-dir='" + dir + "']")).click();
		wd.findElement(By.xpath("//button[@id='filter-save-btn']")).click();
		
		return wd.getCurrentUrl().contains(expected);
	}
	
	@Test 
	public void test_Sort_NameAscending() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "locations");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = sortChoice(wd, "1", "name", "?sort=1&sortBy=name");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_Sort_NameDescending() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "locations");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = sortChoice(wd, "-1", "name", "?sort=-1&sortBy=name");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_Sort_PriceAscending() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = sortChoice(wd, "1", "price", "?sort=1&sortBy=price");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_Sort_PriceDescending() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = sortChoice(wd, "-1", "price", "?sort=-1&sortBy=price");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_Sort_StarsAscending() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = sortChoice(wd, "1", "stars", "?sort=1&sortBy=stars");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_Sort_StarsDescending() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = sortChoice(wd, "-1", "stars", "?sort=-1&sortBy=stars");
		
		assert(actual);
		wd.quit();
	}

}
