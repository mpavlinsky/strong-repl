const repl = require('repl');
const _ = require('lodash');
const BN = require('bignumber.js');

const context = repl.start({ prompt: '> ' }).context;

_.assign(context, {
  _,
  moment: require('moment'),
  BN,
  test: true,
});
