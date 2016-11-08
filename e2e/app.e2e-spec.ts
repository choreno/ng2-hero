import { Ng2HeroPage } from './app.po';

describe('ng2-hero App', function() {
  let page: Ng2HeroPage;

  beforeEach(() => {
    page = new Ng2HeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
