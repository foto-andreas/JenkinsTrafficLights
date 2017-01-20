import { JenkinsTrafficLightsPage } from './app.po';

describe('jenkins-traffic-lights App', function() {
  let page: JenkinsTrafficLightsPage;

  beforeEach(() => {
    page = new JenkinsTrafficLightsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
