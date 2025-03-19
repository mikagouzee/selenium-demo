const { By, Key, Builder } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

async function test_case() {
    let options = new firefox.Options();

    let driver = await new Builder().forBrowser('firefox')
    .setFirefoxOptions(options.addArguments('--headless'))
    .build()


    try {
        // Initialize the WebDriver session
        await driver.get("https://www.selenium.dev/selenium/web/web-form.html")
        await driver.manage().window().setRect({ width: 1025, height: 776 })
        await driver.findElement(By.name("my-textarea")).click()
        await driver.findElement(By.name("my-textarea")).sendKeys("hhh,sjuuubxsxuxbbxu")
        await driver.findElement(By.name("my-password")).click()
        await driver.findElement(By.name("my-password")).sendKeys("deqf")
        await driver.findElement(By.id("my-text-id")).click()
        await driver.findElement(By.id("my-text-id")).sendKeys("ffqc")
        console.log("success");
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Close the WebDriver session
        if (driver) {
            await driver.quit();
            console.log("WebDriver session closed.");
        }
    }
}
test_case();