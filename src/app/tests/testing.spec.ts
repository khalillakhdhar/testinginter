import { Testing } from './testing';

describe('Testing', () => { // suite des teste
  it('should create an instance', () => { // testCase
    expect(new Testing()).toBeTruthy();
  });
  it('doit verifier la parité', () => {
    expect(new Testing().paire(6)).toBeTruthy();
  })

});


