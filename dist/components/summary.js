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
      var _props = this.props;
      var household = _props.household;
      var persons = _props.persons;
      var cars = _props.cars;


      var personsPanel = persons.map(function (person, index) {
        return _react2.default.createElement(
          'div',
          { className: 'panel panel-default', key: index },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            'Person #',
            index + 1
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
                'First name'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                person.first_name
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'Last name'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                person.last_name
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'Email'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                person.email
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'Age'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                person.age
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'Gender'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                person.gender
              )
            )
          )
        );
      });

      var carsPanel = cars.map(function (car, index) {
        return _react2.default.createElement(
          'div',
          { className: 'panel panel-default', key: index },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            'Car #',
            index + 1
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
                'Model'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                car.model
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'Year'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                car.year
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4' },
                'License plate'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                car.license_plate
              )
            )
          )
        );
      });

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
                household.zip
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
                household.city
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
                household.state
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
                household.number_of_bedrooms
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
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            personsPanel
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
              '3'
            ),
            _react2.default.createElement(
              'span',
              null,
              ' Your cars'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            carsPanel
          )
        )
      );
    }
  }]);

  return Summary;
}(_react2.default.Component);

exports.default = Summary;