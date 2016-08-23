'use strict';

describe('Service: ToolService', function () {

  // load the service's module
  beforeEach(module('mqttMapApp'));

  // instantiate service
  var ToolService;
  beforeEach(inject(function (_ToolService_) {
    ToolService = _ToolService_;
  }));

  it('should do something', function () {
    expect(!!ToolService).toBe(true);
  });

});
