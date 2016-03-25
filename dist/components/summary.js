'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summary = function (_React$Component) {
  _inherits(Summary, _React$Component);

  function Summary() {
    _classCallCheck(this, Summary);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Summary).apply(this, arguments));
  }

  _createClass(Summary, [{
    key: 'render',
    value: function render() {
      var household = this.props.household;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'panel panel-default' },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            _react2.default.createElement(
              'span',
              { className: 'badge' },
              '1'
            ),
            _react2.default.createElement(
              'span',
              null,
              ' Your household'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'Address'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                household.address
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'ZIP code'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                '-ZIP code-'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'City'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                '-City-'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'State'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                '-State-'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'Bedrooms'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                '-Bedrooms-'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel panel-default' },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            _react2.default.createElement(
              'span',
              { className: 'badge' },
              '2'
            ),
            _react2.default.createElement(
              'span',
              null,
              ' People in your household'
            )
          ),
          _react2.default.createElement('div', { className: 'panel-body' })
        )
      );
    }
  }]);

  return Summary;
}(_react2.default.Component);

exports.default = Summary;