'use strict';

var
  request = require('request');

function endpoint (hostname, endpoint) {
  return hostname + (endpoint || '/');
}

module.exports = {
  endpoint: endpoint
}
