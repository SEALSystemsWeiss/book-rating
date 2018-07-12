import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Book Rating', () => {
    page.navigateTo();
    browser.sleep(3000);

    expect(page.getParagraphText()).toEqual('Book Rating');
  });
});
