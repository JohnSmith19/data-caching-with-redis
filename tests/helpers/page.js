const puppeteer = require('puppeteer');

class CustomPage {
    static build() {
        const browser = await puppeteer.launch({
            headless: false
        });

        const page = await browser.newPage();
        const CustomPage = new CustomPage(page);

        return new Proxy(customPage, {
            get: function(target, property) {
                return customPage[property] || page[property] || browser[property];
            }
        });
    }

    constructor() {
        this.page = page;
    }
}

module.exports = CustomPage;
