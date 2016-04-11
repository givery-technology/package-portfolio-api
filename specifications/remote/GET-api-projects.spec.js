'use strict';

var
  assert = require('chai').assert,
  spec   = require('api-first-spec'),
  remote = require('./remote'),
  hostname = require('../../service.json').hostname;

var API = spec.define({
  "endpoint": "/api/projects",
  "method": spec.Method.GET,
  "request": {
    "contentType": spec.ContentType.URLENCODED,
  },
  "response": {
    "contentType": spec.ContentType.JSON,
    "data": "any"
  }
});

describe("GET /api/projects", function () {
  var host = spec.host(hostname);

  it("should succeed", function (done) {
    host.api(API).success(done);
  });

});
