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

  function App(props) {
    _classCallCheck(this, App);

    // If step is declared in location, use that in state

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      // current step
      step: 0,
      data: null
    };
    var paths = _this.props.path.split(/\//);

    if (paths[2]) {
      _this.state.step = +paths[2];
    }
    return _this;
  }

  //----------------------------------------------------------------------------

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.socket

      // Get data

      .emit('getData', function (data) {
        _this2.setState({ data: data });
      })

      // Push changes

      .on('changedData', function (data) {
        _this2.setState({ data: data });
      });
    }

    /** Next Handler - Move to next step
     *
     *  @arg {Event} e
     */

  }, {
    key: 'nextHandler',
    value: function nextHandler(e) {
      var step = this.state.step;

      var next = step + 1;

      if (steps[next]) {
        this.stepHandler(next);
      }
    }

    /** Step Handler - Update state + location with new step
     *
     *  @arg {Number} step
     *  @arg {Event} e
     */

  }, {
    key: 'stepHandler',
    value: function stepHandler(step, e) {
      if (e) {
        e.preventDefault();
      }

      this.setState({ step: step });

      _reactedLink2.default.go('/step/' + step);
    }

    /** Change Handler - Pass data changes to socket server
     *
     *  @arg {String} domain
     *  @arg {String} section
     *  @arg mixed value
     *  @arg {Number} index
     */

  }, {
    key: 'changeHandler',
    value: function changeHandler(domain, section, value, index) {
      window.socket.emit('changeData', domain, section, value, index);
    }

    // Save final changes

  }, {
    key: 'save',
    value: function save() {
      window.alert('Thank you!');
    }

    // View

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

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

      // if no data retrieved from back end, don't show nothing

      if (!this.state.data) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_topBar2.default, { user: this.props.user }),
          _react2.default.createElement(
            'div',
            { className: 'container' },
            'Loading data...'
          )
        );
      }

      var step = this.state.step;


      var next = step + 1;

      var View = steps[step].view;

      var footer = void 0;

      // If next step, display link to next step

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

      // if no next step, show percentage of fields filled
      // if all fields filled, offer option to save changes

      else {
          (function () {
            var total = 14;

            total += (_this3.state.data.persons.length - 1) * 5;
            total += (_this3.state.data.cars.length - 1) * 4;

            var done = 0;

            if (_this3.state.data.household.address) {
              done++;
            }

            if (_this3.state.data.household.zip) {
              done++;
            }

            if (_this3.state.data.household.city) {
              done++;
            }

            if (_this3.state.data.household.state) {
              done++;
            }

            if (_this3.state.data.household.number_of_bedrooms) {
              done++;
            }

            _this3.state.data.persons.forEach(function (person) {
              if (person.first_name) {
                done++;
              }

              if (person.last_name) {
                done++;
              }

              if (person.email) {
                done++;
              }

              if (person.age) {
                done++;
              }

              if (person.gender) {
                done++;
              }
            });

            _this3.state.data.cars.forEach(function (car) {
              if (car.model) {
                done++;
              }

              if (car.year) {
                done++;
              }

              if (car.license_plate) {
                done++;
              }

              if (car.owner) {
                done++;
              }
            });

            var percentage = done / total * 100;

            if (percentage === 100) {
              footer = _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-primary',
                  onClick: _this3.save.bind(_this3)
                },
                'Save changes'
              );
            } else {
              footer = _react2.default.createElement(
                'div',
                null,
                Math.floor(percentage),
                '% done'
              );
            }
          })();
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
              _react2.default.createElement(View, _extends({}, this.state.data, { onChange: this.changeHandler.bind(this) }))
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