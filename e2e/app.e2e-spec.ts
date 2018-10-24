import { DimonPage } from './app.po';

describe('dimon App', () => {
  let page: DimonPage;

  beforeEach(() => {
    page = new DimonPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
