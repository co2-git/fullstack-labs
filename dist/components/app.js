'use strict';

/*    App - Main Component + Store
 *
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _reactedLink = require('reacted-link');

var _reactedLink2 = _interopRequireDefault(_reactedLink);

var _topBar = require('./top-bar');

var _topBar2 = _interopRequireDefault(_topBar);

var _optIn = require('./opt-in');

var _optIn2 = _interopRequireDefault(_optIn);

var _stepBar = require('./step-bar');

var _stepBar2 = _interopRequireDefault(_stepBar);

var _household = require('./household');

var _household2 = _interopRequireDefault(_household);

var _persons = require('./persons');

var _persons2 = _interopRequireDefault(_persons);

var _cars = require('./cars');

var _cars2 = _interopRequireDefault(_cars);

var _summary = require('./summary');

var _summary2 = _interopRequireDefault(_summary);

var _household3 = require('../../data/household.json');

var _household4 = _interopRequireDefault(_household3);

var _person = require('../../data/person.json');

var _person2 = _interopRequireDefault(_person);

var _cars3 = require('../../data/cars.json');

var _cars4 = _interopRequireDefault(_cars3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// The steps

var steps = [{
  label: 'Your household',
  view: _household2.default
}, {
  label: 'People in your household',
  view: _persons2.default
}, {
  label: 'Your cars',
  view: _cars2.default
}, {
  label: 'Summary',
  view: _summary2.default
}];

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  // Constuctor

  // User data - handed by the socket server
  // Data is detached from state because we use uncontrolled elements

  function App(props) {
    _classCallCheck(this, App);

    // If step is declared in location, use that in state

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.data = {
      household: _household4.default,
      persons: [_person2.default]
    };
    _this.state = {
      // current step
      step: 0,
      // trigger state changes on data change
      changed: 0
    };
    var paths = _this.props.path.split(/\//);

    if (paths[2]) {
      _this.state.step = +paths[2];
    }
    return _this;
  }

  // Get user's data from sockets server

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.socket.emit('getData', function (data) {
        _this2.data = data;
        console.log('got data from be', data);
        _this2.setState({ changed: ++_this2.state.changed });
      });
    }

    // Move to next step

  }, {
    key: 'nextHandler',
    value: function nextHandler(e) {
      var step = this.state.step;

      var next = step + 1;

      if (steps[next]) {
        this.stepHandler(next);
      }
    }

    // Update state + location with new step

  }, {
    key: 'stepHandler',
    value: function stepHandler(step, e) {
      if (e) {
        e.preventDefault();
      }

      this.setState({ step: step });

      _reactedLink2.default.go('/step/' + step);
    }

    // Pass data changes to socket server

  }, {
    key: 'changeHandler',
    value: function changeHandler(domain, section, value, index) {
      window.socket.emit('changeData', domain, section, value, index);
    }

    // View

  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;

      // If user not logged in, go to opt-in page

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
              _react2.default.createElement(View, _extends({}, this.data, { onChange: this.changeHandler.bind(this) }))
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