package nomadSeleniumTests;
import static org.junit.jupiter.api.Assertions.*;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class SearchQueriesTestSuite {

	static String website = "http://software-lab-travel-app.s3-website.us-east-2.amazonaws.com/";
	
	private boolean searchAustin(WebDriver wd, String expected) {
		wd.findElement(By.xpath("//input")).sendKeys("austin");
		wd.findElement(By.xpath("//button")).click();
		
		return wd.getCurrentUrl().contains(expected);
	}
	
	@Test 
	public void test_SearchFromHome() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website);
		
		TimeUnit.SECONDS.sleep(2);

		boolean actual = searchAustin(wd, "search?q=austin");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_SearchLocation() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "locations");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = searchAustin(wd, "locations?q=austin");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_SearchRestaurant() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = searchAustin(wd, "restaurants?q=austin");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_SearchHotel() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "hotels");
		
		TimeUnit.SECONDS.sleep(2);
		
		boolean actual = searchAustin(wd, "hotels?q=austin");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_SearchChangeToAll() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "locations");
		
		TimeUnit.SECONDS.sleep(2);

		wd.findElement(By.xpath("//button[@id='search-toggle']")).click();
		wd.findElement(By.xpath("//a[text()='All']")).click();
		
		boolean actual = searchAustin(wd, "search?q=austin");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_SearchChangeToRestaurant() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "locations");
		
		TimeUnit.SECONDS.sleep(2);

		wd.findElement(By.xpath("//button[@id='search-toggle']")).click();
		wd.findElement(By.xpath("//a[text()='Restaurant']")).click();
		
		boolean actual = searchAustin(wd, "restaurants?q=austin");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_SearchChangeToHotel() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "locations");
		
		TimeUnit.SECONDS.sleep(2);

		wd.findElement(By.xpath("//button[@id='search-toggle']")).click();
		wd.findElement(By.xpath("//a[text()='Hotel']")).click();
		
		boolean actual = searchAustin(wd, "hotels?q=austin");
		
		assert(actual);
		wd.quit();
	}
	
	@Test 
	public void test_SearchChangeToLocation() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "hotels");
		
		TimeUnit.SECONDS.sleep(2);

		wd.findElement(By.xpath("//button[@id='search-toggle']")).click();
		wd.findElement(By.xpath("//a[text()='Location']")).click();
		
		boolean actual = searchAustin(wd, "locations?q=austin");
		
		assert(actual);
		wd.quit();
	}

}
