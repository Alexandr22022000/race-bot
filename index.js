const {Builder, By, Key, until} = require('selenium-webdriver');

const CONFIG = {
    LOGIN: '',
    PASSWORD: '',

    RACE: 'забег 5 Тари',
    HORSE: 3,
};

for (let key in process.env) {
    CONFIG[key] = process.env[key];
}

const raceScript = `
    let races = Array.from(document.getElementsByClassName('table__row'));

    races = races.map(element => {
        const button = element.getElementsByClassName('icon _type_normal _icon_channel');
        if (button.length === 0) return;

        const text = element.getElementsByClassName('table__match-title-text')[0].innerText;
        if (text !== '${CONFIG.RACE}') return;

        button[0].click();
    });
`;

const bookScript = `
    let horses = Array.from(document.getElementsByClassName('columns')[0].getElementsByClassName('text'));
    
    horses.forEach(element => {
        element = element.getElementsByClassName('name')[0].getElementsByTagName('span')[0];
        
        let number = element.innerText.substring(0, element.innerText.length - 1);
        if (+number !== ${CONFIG.HORSE}) return;
        
        element.click();
    });
`;

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.fonbet.ru/live/horse-racing/');

        await driver.findElement(By.className('header__item header__login')).findElement(By.className('header__link')).click();
        await (await driver.findElements(By.className('ui__field')))[0].sendKeys(CONFIG.LOGIN);
        await (await driver.findElements(By.className('ui__field')))[1].sendKeys(CONFIG.PASSWORD);
        await driver.findElement(By.className('login-form__buttons-wrap')).findElement(By.className('toolbar__btn-text')).click();

        await driver.sleep(4000);
        await driver.executeScript(raceScript);
        await driver.sleep(4000);

        driver.switchTo().frame(driver.findElement(By.className('line-mc__frame--1AID4')));

        await driver.sleep(4000);
        driver.executeScript(bookScript);
        await driver.sleep(4000);

        driver.switchTo().parentFrame();
        await driver.sleep(4000);

        await (await driver.findElement(By.className('sum-panel__input--2FGMZ _state_error--2ZJ0n'))).sendKeys('30');
        await driver.findElement(By.className('button--54u30 normal-bet--3r-PV')).click();

        await driver.wait(until.elementLocated(By.id('foo')), 5000000);
    } finally {
        await driver.quit();
    }
})();
