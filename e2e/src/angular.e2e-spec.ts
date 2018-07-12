import { browser, element, by, $ } from 'protractor';
describe('angular book', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should just call it Angular', () => {

    browser.get('https://www.dpunkt.de/buecher/12400/9783864903571-angular.html');
    // const heading = element(by.tagName('h3'));
    const heading = $('h1');
    expect(heading.getText()).toEqual('Angular'); // Rot erwartet
  });

  afterAll(() => browser.waitForAngularEnabled(false));
});
