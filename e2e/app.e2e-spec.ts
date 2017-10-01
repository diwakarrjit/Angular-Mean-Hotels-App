import { AngularNodeAppPage } from './app.po';

describe('angular-node-app App', () => {
  let page: AngularNodeAppPage;

  beforeEach(() => {
    page = new AngularNodeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
