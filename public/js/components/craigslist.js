webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(245);

var _Header = __webpack_require__(119);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(122);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(123);

var _Listings2 = _interopRequireDefault(_Listings);

var _Category = __webpack_require__(120);

var _Category2 = _interopRequireDefault(_Category);

var _Details = __webpack_require__(121);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _Listings2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:details', component: _Details2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(116);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'left-menu' },
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              'Ronnyslist'
            ),
            _react2.default.createElement(
              'div',
              { className: 'city' },
              'Los Angeles',
              _react2.default.createElement('i', { className: 'fas fa-caret-down' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-menu' },
            _react2.default.createElement(
              'div',
              { className: 'user-img' },
              'img'
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-dropdown' },
              'my account',
              _react2.default.createElement('i', { className: 'fas fa-caret-down' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'post-btn' },
              'post to classifieds'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Category, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'category' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          'this category is ',
          match.params.category
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/ronny/Desktop/websitesone/craigslist-clone/assets/js/craigslist/pages/Details.js: Expected corresponding JSX closing tag for <div> (27:10)\n\n  25 | \n  26 |           <div className = \"sub-links\">\n> 27 |           </section>\n     |           ^\n  28 |         </div>\n  29 |       </div>\n  30 |     )\n");

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.loopCategories = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7];
      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { className: 'categories', key: i },
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'Community'
          ),
          _react2.default.createElement(
            'div',
            { className: 'group-links' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Community'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'General'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Activities'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Groups'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Artists'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Local News'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Child Care'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Lost & Found'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Classes'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Musician'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Events'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'link' },
              'Pets'
            )
          )
        );
      });
    };

    _this.loopTags = function () {
      var testTags = ['a', 'b', 'c', 'd', 'f', 'g', 'h'];
      return testTags.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { key: i, className: 'tag' },
          'Apple macbook'
        );
      });
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            null,
            'Connecting People ',
            _react2.default.createElement('br', null),
            ' Everywhere'
          ),
          _react2.default.createElement(
            'section',
            { className: 'links' },
            this.loopCategories()
          ),
          _react2.default.createElement(
            'section',
            { className: 'trending' },
            _react2.default.createElement('input', { type: 'text', name: 'search', className: 'search' }),
            _react2.default.createElement(
              'div',
              { className: 'title' },
              _react2.default.createElement('i', { className: 'far fa-clock' }),
              ' Trending Now'
            ),
            _react2.default.createElement(
              'div',
              { className: 'trending-tags' },
              this.loopTags()
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.loopItems = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7];
      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement(
              'div',
              { className: 'price' },
              '$9000'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement(
              'h5',
              null,
              'Dodge Challenger',
              _react2.default.createElement('i', { className: 'far fa-star' })
            ),
            _react2.default.createElement(
              'h6',
              null,
              'Beverly Hills'
            )
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'listings-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'section',
            { id: 'filter' },
            _react2.default.createElement(
              'div',
              { className: 'form-group price' },
              _react2.default.createElement(
                'label',
                null,
                'Price'
              ),
              _react2.default.createElement(
                'div',
                { className: 'min-max' },
                _react2.default.createElement(
                  'select',
                  { name: 'min-price', className: 'min-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '0' },
                    '0'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'max-price', className: 'max-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group make' },
              _react2.default.createElement(
                'label',
                null,
                'Make'
              ),
              _react2.default.createElement(
                'select',
                { name: 'make', className: 'make' },
                _react2.default.createElement(
                  'option',
                  { value: 'bmw' },
                  'bmw'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group model' },
              _react2.default.createElement(
                'label',
                null,
                'Model'
              ),
              _react2.default.createElement(
                'select',
                { name: 'model', className: 'model' },
                _react2.default.createElement(
                  'option',
                  { value: 'bmw' },
                  'bmw'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group button' },
              _react2.default.createElement(
                'div',
                { className: 'primary-btn' },
                'Update'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reset-btn' },
                'Reset'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'list-view' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'white-box' },
              _react2.default.createElement(
                'section',
                { className: 'change-view' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group view-dropdown' },
                  _react2.default.createElement(
                    'select',
                    { name: 'model', className: 'select-view' },
                    _react2.default.createElement(
                      'option',
                      { value: 'gallery' },
                      'Gallery view'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'list' },
                      'List view'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'thumb' },
                      'List view'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group sort-dropdown' },
                  _react2.default.createElement(
                    'select',
                    { name: 'model', className: 'sort-dropdown' },
                    _react2.default.createElement(
                      'option',
                      { value: 'gallery' },
                      'Newest'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                { className: 'all-items' },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[118]);