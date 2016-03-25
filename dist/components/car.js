'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Car = function (_React$Component) {
  _inherits(Car, _React$Component);

  function Car() {
    _classCallCheck(this, Car);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Car).apply(this, arguments));
  }

  _createClass(Car, [{
    key: 'changeHandler',
    value: function changeHandler(section) {
      var index = this.props.index;


      var value = _reactDom2.default.findDOMNode(this.refs[section]).value;

      this.props.updateHandler(section, value, index);
    }

    //----------------------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var car = _props.car;
      var active = _props.active;


      var style = {};

      if (!active) {
        style.display = 'none';
      }

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'model', className: 'col-xs-2 control-label' },
            'Model'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'model',
              placeholder: 'Car\'s model',
              className: 'form-control',
              ref: 'model',
              onChange: this.changeHandler.bind(this, 'model'),
              defaultValue: car.model
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'year', className: 'col-xs-2 control-label' },
            'Year'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'number',
              max: '2016',
              name: 'year',
              ref: 'year',
              placeholder: 'Year',
              className: 'form-control',
              onChange: this.changeHandler.bind(this, 'year'),
              defaultValue: car.year
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'license_plate', className: 'col-xs-2 control-label' },
            'License plate'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'license_plate',
              placeholder: 'License plate',
              className: 'form-control',
              onChange: this.changeHandler.bind(this, 'license_plate'),
              defaultValue: car.license_plate,
              ref: 'license_plate'
            })
          )
        )
      );
    }
  }]);

  return Car;
}(_react2.default.Component);

exports.default = Car;