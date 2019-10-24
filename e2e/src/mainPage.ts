import { browser, element, by } from 'protractor';

export class MainPage {
    async submitForm(arg0: { name: string; lastname: string; mail: string; }) {
        await element(by.id('name')).sendKeys(arg0.name);
        await element(by.id('lastname')).sendKeys(arg0.lastname);
        await element(by.id('mail')).sendKeys(arg0.mail);
        await element(by.css('.blueButton')).click();
    }
    async countPeople() {
        return await element.all(by.css('tbody tr')).count();
    }
    async submitButtonEnabled() {
        return await element(by.css('.blueButton')).isEnabled();
    }
    async load() {
        await browser.get('http://localhost:4200');
    }
}