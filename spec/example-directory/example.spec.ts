import { browser } from "protractor";

describe('TODO', () => {
    const URL: string = "http://todomvc.com/examples/angularjs/#/";

    it('should go to a valid URL', () => {
        browser.get(URL);
        expect(browser.getCurrentUrl()).toContain(URL);
    });
});
