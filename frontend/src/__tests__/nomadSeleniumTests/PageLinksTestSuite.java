package nomadSeleniumTests;
import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class PageLinksTestSuite {
	
	static String website = "http://software-lab-travel-app.s3-website.us-east-2.amazonaws.com/";
	
	@Test 
	public void test_GoToLocationsModel() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website);
		
		String expected = wd.findElement(By.xpath("//a[@href='/locations']")).getText();
		wd.findElement(By.xpath("//a[@href='/locations']")).click();
		
		TimeUnit.SECONDS.sleep(2);
		
		String actual = wd.findElement(By.xpath("//h1")).getText();
		
		assertEquals(expected, actual);
		wd.quit();
	}
	
	@Test 
	public void test_GoToHotelsModel() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website);
		
		String expected = wd.findElement(By.xpath("//a[@href='/hotels']")).getText();
		wd.findElement(By.xpath("//a[@href='/hotels']")).click();
		
		TimeUnit.SECONDS.sleep(2);
		
		String actual = wd.findElement(By.xpath("//h1")).getText();
		
		assertEquals(expected, actual);
		wd.quit();
	}

	@Test 
	public void test_GoToRestaurantsModel() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website);
		
		String expected = wd.findElement(By.xpath("//a[@href='/restaurants']")).getText();
		wd.findElement(By.xpath("//a[@href='/restaurants']")).click();
		
		TimeUnit.SECONDS.sleep(2);
		
		String actual = wd.findElement(By.xpath("//h1")).getText();
		
		assertEquals(expected, actual);
		wd.quit();
	}
	
	@Test 
	public void test_GoToAboutPage() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website);
		
		String expected = wd.findElement(By.xpath("//a[@href='/about']")).getText();
		wd.findElement(By.xpath("//a[@href='/about']")).click();
		
		TimeUnit.SECONDS.sleep(2);
		
		String actual = wd.findElement(By.xpath("//h1")).getText();
		
		assertEquals(expected, actual);
		wd.quit();
	}
	
	@Test 
	public void test_GoToHomePage() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website);
		
		wd.findElement(By.xpath("//a[@href='/']")).click();
		
		TimeUnit.SECONDS.sleep(2);
		
		String actual = wd.findElement(By.xpath("//h3")).getText();
		
		assertEquals("Discover new places and experience cuisines from around the world", actual);
		wd.quit();
	}
	
	@Test 
	public void test_GoToLocationInstance() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "locations");
		
		TimeUnit.SECONDS.sleep(2);
		
		String expected = wd.findElement(By.xpath("//h4")).getText();
		expected = expected.substring(0, expected.indexOf(","));
		wd.findElement(By.xpath("//h4")).click();
		
		TimeUnit.SECONDS.sleep(2);
		
		String actual = wd.findElement(By.xpath("//h1")).getText();
		
		assertEquals(expected, actual);
		wd.quit();
	}
	
	@Test 
	public void test_GoToHotelInstance() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "hotels");
		
		TimeUnit.SECONDS.sleep(2);
		
		String expected = wd.findElement(By.xpath("//h4")).getText();
		wd.findElement(By.xpath("//h4")).click();
		
		TimeUnit.SECONDS.sleep(2);
		
		String actual = wd.findElement(By.xpath("//h1")).getText();
		
		assertEquals(expected, actual);
		wd.quit();
	}
	
	@Test 
	public void test_GoToRestaurantInstance() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);
		
		String expected = wd.findElement(By.xpath("//h4")).getText();
		wd.findElement(By.xpath("//h4")).click();
		
		TimeUnit.SECONDS.sleep(2);
		
		String actual = wd.findElement(By.xpath("//h1")).getText();
		
		assertEquals(expected, actual);
		wd.quit();
	}
	
	@Test 
	public void test_ChangePages() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website + "restaurants");
		
		TimeUnit.SECONDS.sleep(2);
		
		String expected = wd.findElement(By.xpath("//a[@href='#4']")).getText();
		expected = expected.substring(expected.length() - 1);
		wd.findElement(By.xpath("//a[@href='#4']")).click();
		
		String actual = wd.getCurrentUrl();
		actual = actual.substring(actual.length() - 1);
		
		assertEquals(expected, actual);
		wd.quit();
	}
	
	@Test 
	public void test_GoToSearchPage() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver","C:\\Users/alext/Downloads/geckodriver.exe");
		WebDriver wd = new FirefoxDriver(); // launch the browser
		wd.get(website);
		
		TimeUnit.SECONDS.sleep(2);
		
		wd.findElement(By.xpath("//button")).click();
		
		boolean actual = wd.getCurrentUrl().contains("search?q=");
		
		assert(actual);
		wd.quit();
	}
	
}
