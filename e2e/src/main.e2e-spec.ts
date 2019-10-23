import {MainPage} from './mainPage';

describe('Main page', () => {
    let page = new MainPage();
    beforeEach(async()=> {
        await page.load();
    })
    it('should add a new person', async () => {
        let rowCountBefore: number = await page.countPeople();
        await page.submitForm({name: "Franz", lastname: "von Assissi", mail:"franz@god.it"});

        expect(await page.countPeople()).toBe(rowCountBefore + 1);
    })
    it('button should initially be disabled', async () => {
        expect(await page.submitButtonEnabled()).toBe(false);
    })
})