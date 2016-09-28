/* eslint-env jasmine */
'use strict';

const version = require('../index.js');

describe('Tests', () => {
  it('returns correct version', () => {
    expect(version).toEqual('0.0.2');
  });
});
