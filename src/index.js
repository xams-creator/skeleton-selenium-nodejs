require('chromedriver');
const api = require('selenium-webdriver');

class App {

    async startup() {
        const driver = await new api.Builder()
            .forBrowser('chrome')
            .setChromeOptions()
            .build();
        await driver.manage().window().maximize();
        await driver.get('https://github.com/xams-creator/skeleton-selenium-nodejs');
        await driver.sleep(10000);
        await driver.quit();
    }

}

new App().startup();
