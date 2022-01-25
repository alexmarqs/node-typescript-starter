import config from '../config';

describe('Main test', () => {
  it('Load env variables from config', () => {
    expect(config.welcomeMsg).toBe('Hello World');

    expect(config.author).toBe('Alexandre Marques');
  });
});
