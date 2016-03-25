'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopBar = function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar() {
    _classCallCheck(this, TopBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TopBar).apply(this, arguments));
  }

  _createClass(TopBar, [{
    key: 'signOutHandler',
    value: function signOutHandler(e) {
      e.preventDefault();

      _superagent2.default.get('/sign-out').end(function (err, res) {
        if (err) {
          console.warn(err.message);
        } else {
          location.href = '';
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;


      var signOut = void 0;

      if (user) {
        signOut = _react2.default.createElement(
          'div',
          { style: { 'float': 'right', padding: 10 } },
          _react2.default.createElement(
            'a',
            {
              href: '#',
              style: { color: '#fff' },
              onClick: this.signOutHandler.bind(this)
            },
            'Sign out'
          )
        );
      }

      return _react2.default.createElement(
        'header',
        { style: {
            background: '#222',
            padding: 10,
            color: '#fff',
            marginBottom: 20
          } },
        signOut,
        _react2.default.createElement(
          'h4',
          null,
          'FullStack Labs | Coding challenge'
        )
      );
    }
  }]);

  return TopBar;
}(_react2.default.Component);

exports.default = TopBar;