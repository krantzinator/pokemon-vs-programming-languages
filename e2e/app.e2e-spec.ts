import { PokemonVsProgrammingLanguagesPage } from './app.po';

describe('pokemon-vs-programming-languages App', () => {
  let page: PokemonVsProgrammingLanguagesPage;

  beforeEach(() => {
    page = new PokemonVsProgrammingLanguagesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
