'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DB = function () {
  function DB() {
    _classCallCheck(this, DB);
  }

  _createClass(DB, null, [{
    key: 'find',
    value: function find() {
      var _this = this;

      var getter = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return new Promise(function (pass, fail) {
        var source = '';

        _fs2.default.createReadStream(_this.name + '.json').on('error', function (error) {
          if (error.code === 'ENOENT') {
            var stream = _fs2.default.createWriteStream(_this.name + '.json').on('error', fail).on('finish', function () {
              _this.find(getter).then(pass, fail);
            });

            stream.write('[]');

            stream.end();
          } else {
            fail(error);
          }
        }).on('data', function (data) {
          source += data.toString();
        }).on('end', function () {
          var documents = JSON.parse(source);

          if (Object.keys(getter).length) {
            var _loop = function _loop(field) {
              documents = documents.filter(function (document) {
                return document[field] === getter[field];
              });
            };

            for (var field in getter) {
              _loop(field);
            }
          }

          pass(documents);
        });
      });
    }
  }, {
    key: 'insert',
    value: function insert() {
      var _this2 = this;

      var document = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return new Promise(function (pass, fail) {
        _this2.find().then(function (documents) {

          if (!_this2.validate(document, documents)) {
            return fail(new Error('Validation failed: ' + _this2.name));
          }

          documents.push(document);

          var stream = _fs2.default.createWriteStream(_this2.name + '.json').on('error', fail).on('finish', pass);

          stream.write(JSON.stringify(documents, null, 2));

          stream.end();
        }).catch(fail);
      });
    }
  }]);

  return DB;
}();

exports.default = DB;