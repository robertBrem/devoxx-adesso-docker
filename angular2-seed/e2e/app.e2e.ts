import { DevoxxAdessoPage } from './app.po';

describe('devoxx-adesso App', function() {
  let page: DevoxxAdessoPage;

  beforeEach(() => {
    page = new DevoxxAdessoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('devoxx-adesso works!');
  });
});
