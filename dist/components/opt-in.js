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

var OptIn = function (_React$Component) {
  _inherits(OptIn, _React$Component);

  function OptIn() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, OptIn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(OptIn)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      formError: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OptIn, [{
    key: 'submitHandler',
    value: function submitHandler(e) {
      e.preventDefault();
    }
  }, {
    key: 'loginHandler',
    value: function loginHandler(e) {
      var _this2 = this;

      var email = document.querySelector('[name="email"]');
      var password = document.querySelector('[name="password"]');

      if (!email.value) {
        this.setState({ formError: 'Please enter your email' });
      } else if (!email.checkValidity()) {
        this.setState({ formError: 'Please enter a valid email' });
      } else if (!password.value) {
        this.setState({ formError: 'Please enter your password' });
      } else {
        _superagent2.default.post('/sign-in').send({ email: email.value, password: password.value }).end(function (err, res) {
          if (err) {
            _this2.setState({ formError: err.message });
          } else {
            location.href = '';
          }
        });
      }
    }
  }, {
    key: 'joinHandler',
    value: function joinHandler(e) {
      var _this3 = this;

      var email = document.querySelector('[name="email"]');
      var password = document.querySelector('[name="password"]');

      if (!email.value) {
        this.setState({ formError: 'Please enter your email' });
      } else if (!email.checkValidity()) {
        this.setState({ formError: 'Please enter a valid email' });
      } else if (!password.value) {
        this.setState({ formError: 'Please enter your password' });
      } else {
        _superagent2.default.post('/sign-up').send({ email: email.value, password: password.value }).end(function (err, res) {
          if (err) {
            _this3.setState({ formError: err.message });
          } else {
            location.href = '';
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var alert = void 0;

      if (this.state.formError) {
        alert = _react2.default.createElement(
          'div',
          { className: 'alert alert-danger', role: 'alert' },
          this.state.formError
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'jumbotron' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            { className: 'text-center' },
            'Coding challenge'
          ),
          _react2.default.createElement('hr', null),
          alert,
          _react2.default.createElement(
            'form',
            { className: 'form-horizontal', onSubmit: this.submitHandler.bind(this) },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'email', className: 'col-xs-2 control-label' },
                'Email'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-10' },
                _react2.default.createElement('input', {
                  type: 'email',
                  name: 'email',
                  placeholder: 'Your email',
                  className: 'form-control'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'password', className: 'col-xs-2 control-label' },
                'Password'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-10' },
                _react2.default.createElement('input', {
                  type: 'password',
                  name: 'password',
                  placeholder: 'Your password',
                  className: 'form-control'
                })
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'btn-group', role: 'group', style: { marginLeft: 200 } },
              _react2.default.createElement(
                'a',
                {
                  className: 'btn btn-info btn-lg',
                  href: '#',
                  role: 'button',
                  onClick: this.loginHandler.bind(this)
                },
                'Log in'
              ),
              _react2.default.createElement(
                'a',
                {
                  className: 'btn btn-primary btn-lg',
                  href: '#',
                  role: 'button',
                  onClick: this.joinHandler.bind(this)
                },
                'Join'
              )
            )
          )
        )
      );
    }
  }]);

  return OptIn;
}(_react2.default.Component);

exports.default = OptIn;