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

var Person = function (_React$Component) {
  _inherits(Person, _React$Component);

  function Person() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Person);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Person)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      gender: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Person, [{
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
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({ gender: props.person.gender });
    }
  }, {
    key: 'syncView',
    value: function syncView() {
      var person = this.props.person;


      console.warn(person);

      for (var section in person) {
        if (section === 'gender') {} else {
          _reactDom2.default.findDOMNode(this.refs[section]).value = person[section];
        }
      }
    }
  }, {
    key: 'changeHandler',
    value: function changeHandler(section, value) {
      var index = this.props.index;


      if (!value) {
        value = _reactDom2.default.findDOMNode(this.refs[section]).value;
      }

      this.props.updateHandler(section, value, index);

      if (section === 'gender') {
        this.setState({ gender: value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var person = _props.person;
      var active = _props.active;


      var style = {};

      if (!active) {
        style.display = 'none';
      }

      var gender = {
        male: this.state.gender === 'male' ? 'primary' : 'default',
        female: this.state.gender === 'female' ? 'primary' : 'default',
        other: this.state.gender === 'other' ? 'primary' : 'default'
      };

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'first_name', className: 'col-xs-2 control-label' },
            'First name'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'first_name',
              ref: 'first_name',
              placeholder: 'First name',
              className: 'form-control',
              onChange: this.changeHandler.bind(this, 'first_name')
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'last_name', className: 'col-xs-2 control-label' },
            'Last name'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'last_name',
              ref: 'last_name',
              placeholder: 'Last name',
              className: 'form-control',
              onChange: this.changeHandler.bind(this, 'last_name')
            })
          )
        ),
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
              ref: 'email',
              placeholder: 'Email',
              className: 'form-control',
              onChange: this.changeHandler.bind(this, 'email')
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'age', className: 'col-xs-2 control-label' },
            'Age'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'number',
              name: 'age',
              ref: 'age',
              placeholder: 'Age',
              className: 'form-control',
              onChange: this.changeHandler.bind(this, 'age')
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'gender', className: 'col-xs-2 control-label' },
            'Gender'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement(
              'div',
              { className: 'btn-group', role: 'group', 'aria-label': '...' },
              _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'btn btn-' + gender.male,
                  onClick: this.changeHandler.bind(this, 'gender', 'male')
                },
                'Male'
              ),
              _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'btn btn-' + gender.female,
                  onClick: this.changeHandler.bind(this, 'gender', 'female')
                },
                'Female'
              ),
              _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'btn btn-' + gender.other,
                  onClick: this.changeHandler.bind(this, 'gender', 'other')
                },
                'Other'
              )
            )
          )
        )
      );
    }
  }]);

  return Person;
}(_react2.default.Component);

exports.default = Person;