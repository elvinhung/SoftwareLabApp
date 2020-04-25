package nomadSeleniumTests;
import static org.junit.jupiter.api.Assertions.*;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FilterQueriesTestSuite {
	static String website = "http://software-lab-travel-app.s3-website.us-east-2.amazonaws.com/";
	
	private boolean filterChoice(WebDriver wd, String value, String expected) {
		wd.findElement(By.xpath("//button[@id='filter-btn']")).click();
		wd.findElement(By.xpath("//input[@value='" + value + "']")).click();
		wd.findElement(By.xpath("//button[@id='filter-save-btn']")).click();
		
		return wd.getCurrentUrl().contains(expected);
	}
	
	@Test 
	public void test_FilterLocations_Country() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "locations");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = filterChoice(wd, "BRA", "locations?country=BRA");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_FilterHotels_Rating() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "hotels");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = filterChoice(wd, "5", "hotels?stars=5");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_FilterHotels_Amenities() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "hotels");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = filterChoice(wd, "true", "hotels?swimming_pool=true");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_FilterHotels_Cities() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "hotels");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = filterChoice(wd, "ABQ", "hotels?location_id=ABQ");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_FilterRestaurants_Price() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = filterChoice(wd, "1", "restaurants?price=1");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_FilterRestaurants_Rating() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = filterChoice(wd, "5", "restaurants?stars=5");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_FilterRestaurants_Cities() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);

		boolean actual = filterChoice(wd, "ABQ", "restaurants?location_id=ABQ");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_CancelFilter() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants?location_id=ABQ&price=1&stars=4");
		
		TimeUnit.SECONDS.sleep(2);
		
		wd.findElement(By.xpath("//button[@id='filter-btn']")).click();
		wd.findElement(By.xpath("//button[@id='filter-cancel-btn']")).click();
		
		boolean actual = wd.getCurrentUrl().contains("restaurants?location_id=ABQ&price=1&stars=4");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_ClearFilter() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants?location_id=ABQ&price=1&stars=4");
		
		TimeUnit.SECONDS.sleep(2);
		
		wd.findElement(By.xpath("//button[@id='filter-btn']")).click();
		wd.findElement(By.xpath("//button[@id='filter-clear-btn']")).click();
		wd.findElement(By.xpath("//button[@id='filter-save-btn']")).click();
		
		boolean actual = wd.getCurrentUrl().contains("?");
		
		assertFalse(actual);
		wd.quit();
	}
}
