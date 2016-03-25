'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _topBar = require('./top-bar');

var _topBar2 = _interopRequireDefault(_topBar);

var _optIn = require('./opt-in');

var _optIn2 = _interopRequireDefault(_optIn);

var _stepBar = require('./step-bar');

var _stepBar2 = _interopRequireDefault(_stepBar);

var _household = require('./household');

var _household2 = _interopRequireDefault(_household);

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _cars = require('./cars');

var _cars2 = _interopRequireDefault(_cars);

var _summary = require('./summary');

var _summary2 = _interopRequireDefault(_summary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var steps = [{
  label: 'Your household',
  view: _household2.default
}, {
  label: 'People in your household',
  view: _people2.default
}, {
  label: 'Your cars',
  view: _cars2.default
}, {
  label: 'Summary',
  view: _summary2.default
}];

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(App)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      step: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'nextHandler',
    value: function nextHandler(e) {
      var step = this.state.step;

      var next = step + 1;

      if (steps[next]) {
        this.setState({ step: next });
      }
    }
  }, {
    key: 'stepHandler',
    value: function stepHandler(step, e) {
      if (e) {
        e.preventDefault();
      }

      this.setState({ step: step });
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;


      if (!user) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_topBar2.default, { user: this.props.user }),
          _react2.default.createElement(_optIn2.default, { user: this.props.user })
        );
      }

      var step = this.state.step;


      var next = step + 1;

      var View = steps[step].view;

      var footer = void 0;

      if (steps[next]) {
        footer = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.nextHandler.bind(this) },
            _react2.default.createElement('span', {
              className: 'glyphicon glyphicon-menu-right',
              'aria-hidden': 'true'
            }),
            'Next step'
          ),
          _react2.default.createElement(
            'span',
            null,
            ' '
          ),
          _react2.default.createElement(
            'span',
            { className: 'label label-info' },
            steps[next].label
          )
        );
      } else {
        footer = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary' },
            'Submit'
          )
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_topBar2.default, { user: this.props.user }),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_stepBar2.default, {
            steps: steps,
            step: step,
            stepHandler: this.stepHandler.bind(this)
          }),
          _react2.default.createElement(
            'div',
            { className: 'panel panel-default', style: { margin: 80 } },
            _react2.default.createElement(
              'div',
              { className: 'panel-heading' },
              _react2.default.createElement(
                'span',
                { className: 'badge' },
                next
              ),
              ' ',
              steps[step].label
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel-body' },
              _react2.default.createElement(View, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'panel-footer text-right' },
              footer
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;