'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _car = require('./car');

var _car2 = _interopRequireDefault(_car);

var _car3 = require('../../data/car.json');

var _car4 = _interopRequireDefault(_car3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cars = function (_React$Component) {
  _inherits(Cars, _React$Component);

  //----------------------------------------------------------------------------

  function Cars(props) {
    _classCallCheck(this, Cars);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cars).call(this, props));

    _this.state = {
      // cars
      cars: [],

      // current car
      car: 0
    };


    _this.state.cars = _this.props.cars;
    return _this;
  }

  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------

  _createClass(Cars, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({ cars: props.cars });
    }

    // Add a new car

  }, {
    key: 'addCar',
    value: function addCar() {
      var cars = this.state.cars;


      cars.push(Object.assign({}, _car4.default));

      this.setState({ cars: cars, car: cars.length - 1 });
    }

    //----------------------------------------------------------------------------

  }, {
    key: 'viewCar',
    value: function viewCar(car, e) {
      e.preventDefault();

      this.setState({ car: car });
    }

    //----------------------------------------------------------------------------

  }, {
    key: 'updateHandler',
    value: function updateHandler(section, value, index) {
      this.props.onChange('cars', section, value, index);
    }

    //----------------------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var breadcrumb = this.state.cars.map(function (car, index) {
        if (index === _this2.state.car) {
          return _react2.default.createElement(
            'li',
            { key: index, className: 'active' },
            'Car #',
            index + 1
          );
        } else {
          return _react2.default.createElement(
            'li',
            { key: index },
            _react2.default.createElement(
              'a',
              {
                href: '#',
                onClick: _this2.viewCar.bind(_this2, index)
              },
              'Car #',
              index + 1
            )
          );
        }
      });

      var cars = this.state.cars.map(function (car, index) {
        return _react2.default.createElement(_car2.default, {
          car: car,
          persons: _this2.props.persons,
          active: index === _this2.state.car,
          key: index,
          updateHandler: _this2.updateHandler.bind(_this2),
          index: index
        });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ol',
          { className: 'breadcrumb' },
          breadcrumb,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'span',
              {
                className: 'badge',
                onClick: this.addCar.bind(this),
                style: { cursor: 'pointer' }
              },
              '+'
            )
          )
        ),
        _react2.default.createElement(
          'form',
          { className: 'form-horizontal' },
          cars
        )
      );
    }
  }]);

  return Cars;
}(_react2.default.Component);

exports.default = Cars;