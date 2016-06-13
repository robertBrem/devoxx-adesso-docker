export class DevoxxAdessoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('devoxx-adesso-app h1')).getText();
  }
}
