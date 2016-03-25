'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

var _person3 = require('../../data/person.json');

var _person4 = _interopRequireDefault(_person3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Persons = function (_React$Component) {
  _inherits(Persons, _React$Component);

  //----------------------------------------------------------------------------

  function Persons(props) {
    _classCallCheck(this, Persons);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Persons).call(this, props));

    _this.state = {
      // persons
      persons: [],

      // current person
      person: 0
    };


    _this.state.persons = _this.props.persons;
    return _this;
  }

  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------

  _createClass(Persons, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({ persons: props.persons });
    }

    // Add a new person

  }, {
    key: 'addPerson',
    value: function addPerson() {
      var persons = this.state.persons;


      persons.push(Object.assign({}, _person4.default));

      this.setState({ persons: persons, person: persons.length - 1 });
    }

    //----------------------------------------------------------------------------

  }, {
    key: 'viewPerson',
    value: function viewPerson(person, e) {
      e.preventDefault();

      this.setState({ person: person });
    }

    //----------------------------------------------------------------------------

  }, {
    key: 'updateHandler',
    value: function updateHandler(section, value, index) {
      this.props.onChange('persons', section, value, index);
    }

    //----------------------------------------------------------------------------

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var breadcrumb = this.state.persons.map(function (person, index) {
        if (index === _this2.state.person) {
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
                onClick: _this2.viewPerson.bind(_this2, index)
              },
              'Person #',
              index + 1
            )
          );
        }
      });

      var persons = this.state.persons.map(function (person, index) {
        return _react2.default.createElement(_person2.default, {
          person: person,
          active: index === _this2.state.person,
          key: index,
          updateHandler: _this2.updateHandler.bind(_this2),
          index: index
        });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ol',
          { className: 'breadcrumb' },
          breadcrumb,
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

  return Persons;
}(_react2.default.Component);

exports.default = Persons;