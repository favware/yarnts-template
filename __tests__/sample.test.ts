import defaultSample, { sampleFunc } from '../src';

describe('Named Import Sample', () => {
  test('should work with named import', () => {
    expect(sampleFunc('sample-named')).toBe('sample-named');
  });

  test('should match snapshot', () => {
    expect(sampleFunc).toMatchSnapshot();
  });
});

describe('Default Import Sample', () => {
  test('should work with default import', () => {
    expect(defaultSample('sample-default')).toBe('sample-default');
  });

  test('should match snapshot', () => {
    expect(defaultSample).toMatchSnapshot();
  });
});
