jest.dontMock('../Location.jsx');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Location = require('../Location.jsx');
var Geolocation = require('../../util/Geolocation');

describe('The Location component', function () {

  var location, input, image;

  beforeEach(function () {
    Geolocation.__disable();

    location = TestUtils.renderIntoDocument(<Location />);
    input = TestUtils.findRenderedDOMComponentWithTag(location, 'input');
    image = TestUtils.findRenderedDOMComponentWithTag(location, 'i');
  });

  it('displays a message when fetching geolocation data', function () {
    TestUtils.Simulate.click(image);
    expect(input.getDOMNode().value).toEqual('Fetching location...');
  });

  it('displays lat and lon when geolocation fetch succeeds', function () {
    Geolocation.__setLocation(34.73004, -86.585);
    TestUtils.Simulate.click(image);
    expect(input.getDOMNode().value).toEqual('34.7300, -86.5850');
  });

  describe('when fetching geolocation data fails', function () {

    beforeEach(function () {
      Geolocation.__enable();
      TestUtils.Simulate.click(image);
    });

    it('displays an error message', function () {
      var p = TestUtils.findRenderedDOMComponentWithTag(location, 'p');
      expect(p.getDOMNode().textContent).toEqual('Could not get your location');
    });

    it('resets the input field', function () {
      expect(input.getDOMNode().value).toBeNull();
    });

    it('clears the error when another fetch is attempted', function () {
      Geolocation.__disable();
      TestUtils.Simulate.click(image);

      var ps = TestUtils.scryRenderedDOMComponentsWithTag(location, 'p');
      expect(ps.length).toBe(0);
    });

  });

});
