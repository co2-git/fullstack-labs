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

var HouseHold = function (_React$Component) {
  _inherits(HouseHold, _React$Component);

  function HouseHold() {
    _classCallCheck(this, HouseHold);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HouseHold).apply(this, arguments));
  }

  _createClass(HouseHold, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncView();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.syncView();
    }
  }, {
    key: 'syncView',
    value: function syncView() {
      var household = this.props.household;


      for (var section in household) {
        _reactDom2.default.findDOMNode(this.refs[section]).value = household[section];
      }
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(section) {
      var input = _reactDom2.default.findDOMNode(this.refs[section]);
      this.props.onChange('household', section, input.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var household = this.props.household;


      return _react2.default.createElement(
        'form',
        { className: 'form-horizontal' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'address', className: 'col-xs-2 control-label' },
            'Address'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'address',
              ref: 'address',
              placeholder: 'Your address',
              className: 'form-control',
              onChange: this.updateHandler.bind(this, 'address')
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'zip', className: 'col-xs-2 control-label' },
            'ZIP Code'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'zip',
              ref: 'zip',
              placeholder: 'Your ZIP code',
              className: 'form-control',
              onChange: this.updateHandler.bind(this, 'zip')
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'city', className: 'col-xs-2 control-label' },
            'City'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'city',
              ref: 'city',
              placeholder: 'Your city',
              className: 'form-control',
              onChange: this.updateHandler.bind(this, 'city')
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'state', className: 'col-xs-2 control-label' },
            'State'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'state',
              ref: 'state',
              placeholder: 'Your state',
              className: 'form-control',
              onChange: this.updateHandler.bind(this, 'state')
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            {
              htmlFor: 'number_of_bedrooms',
              className: 'col-xs-2 control-label'
            },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'number',
              name: 'number_of_bedrooms',
              ref: 'number_of_bedrooms',
              placeholder: 'Number of bedrooms',
              className: 'form-control',
              onChange: this.updateHandler.bind(this, 'number_of_bedrooms')
            })
          )
        )
      );
    }
  }]);

  return HouseHold;
}(_react2.default.Component);

exports.default = HouseHold;