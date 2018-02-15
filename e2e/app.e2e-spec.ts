import { Angular2RecipeBoxPage } from './app.po';

describe('angular2-recipe-box App', function() {
  let page: Angular2RecipeBoxPage;

  beforeEach(() => {
    page = new Angular2RecipeBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
