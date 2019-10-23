import {AppComponent} from './app.component';

describe('The App', () => {
    let app: AppComponent;
    beforeEach(() => {
        app = new AppComponent();
    })

    it('should have a working form', () => {
        app.form.value.name = "Franz";
        app.form.value.lastname = "von Assissi";
        app.form.value.mail = "franz@god.it";
        app.addPersonViaForm();

        expect(app.people.length).toBe(3)
        expect(app.people[2]).toEqual({name: "Franz", lastname: "von Assissi", mail:"franz@god.it"});
    })
})