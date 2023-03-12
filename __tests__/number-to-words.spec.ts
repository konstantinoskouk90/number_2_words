import { expect } from 'chai';
import toWords from '../src/index';

describe('toWords', () => {  
  it('Expect to throw an error when the number is less than 1', () => {
    expect(() => toWords(-1)).to.throw('Please enter a number between 1 and 1000!');
  });

  it('Expect to throw an error when the number is greater than 1000', () => {
    expect(() => toWords(2222)).to.throw('Please enter a number between 1 and 1000!');
  });

  it('Expect to successfully return twenty-five', () => {
    expect(toWords(25)).to.equal('twenty-five');
  });

  it('Expect to successfully return twenty-five point eight', () => {
    expect(toWords(25.8)).to.equal('twenty-five point eight');
  });

  it('Expect to successfully return twenty-five point eighty-seven', () => {
    expect(toWords(25.87)).to.equal('twenty-five point eighty-seven');
  });

  it('Expect to successfully return twenty-five point eight hundred and seventy-eight, despite the input having 4 decimals, as we strip the last one', () => {
    expect(toWords(25.8789)).to.equal('twenty-five point eight hundred and seventy-eight');
  });

  it('Expect to successfully return four hundred', () => {
    expect(toWords(400)).to.equal('four hundred');
  });

  it('Expect to successfully return one thousand', () => {
    expect(toWords(1000)).to.equal('one thousand');
  });
});