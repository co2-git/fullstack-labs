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

var Person = function (_React$Component) {
  _inherits(Person, _React$Component);

  function Person() {
    _classCallCheck(this, Person);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Person).apply(this, arguments));
  }

  _createClass(Person, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var person = _props.person;
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
            { htmlFor: 'first_name', className: 'col-xs-2 control-label' },
            'First name'
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'first_name',
              placeholder: 'First name',
              className: 'form-control'
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
              placeholder: 'Last name',
              className: 'form-control'
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
              placeholder: 'Email',
              className: 'form-control'
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
              placeholder: 'Age',
              className: 'form-control'
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
                { type: 'button', className: 'btn btn-default' },
                'Male'
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-default' },
                'Female'
              ),
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-default' },
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

var People = function (_React$Component2) {
  _inherits(People, _React$Component2);

  function People(props) {
    _classCallCheck(this, People);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(People).call(this, props));

    _this2.state = {
      people: [],
      person: 0
    };


    console.log(_this2.props);

    _this2.state.people = _this2.props.persons;
    return _this2;
  }

  _createClass(People, [{
    key: 'addPerson',
    value: function addPerson() {
      var people = this.state.people;


      people.push(Object.assign({}, person));

      this.setState({ people: people, person: people.length - 1 });
    }
  }, {
    key: 'viewPerson',
    value: function viewPerson(person, e) {
      e.preventDefault();

      this.setState({ person: person });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var people = this.state.people.map(function (people, index) {
        if (index === _this3.state.person) {
          return _react2.default.createElement(
            'li',
            { key: index, className: 'active' },
            'Person #',
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
                onClick: _this3.viewPerson.bind(_this3, index)
              },
              'Person #',
              index + 1
            )
          );
        }
      });

      var persons = this.state.people.map(function (people, index) {
        return _react2.default.createElement(Person, {
          person: people,
          active: index === _this3.state.person,
          key: index
        });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ol',
          { className: 'breadcrumb' },
          people,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'span',
              {
                className: 'badge',
                onClick: this.addPerson.bind(this),
                style: { cursor: 'pointer' }
              },
              '+'
            )
          )
        ),
        _react2.default.createElement(
          'form',
          { className: 'form-horizontal' },
          persons
        )
      );
    }
  }]);

  return People;
}(_react2.default.Component);

exports.default = People;