webpackJsonp([0],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(272);

var _Header = __webpack_require__(144);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(147);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(148);

var _Listings2 = _interopRequireDefault(_Listings);

var _Category = __webpack_require__(145);

var _Category2 = _interopRequireDefault(_Category);

var _Details = __webpack_require__(146);

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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(123);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

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

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

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

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Gallery = __webpack_require__(149);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Details, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'details-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'white-box' },
            _react2.default.createElement(
              'section',
              { className: 'submenu' },
              _react2.default.createElement(
                'div',
                { className: 'direction' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'prev' },
                  'Prev'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'next' },
                  'Next'
                )
              ),
              _react2.default.createElement(
                'nav',
                { className: 'sub-links' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'More Ads by User'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Print'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Share'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Contact Seller'
                )
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'content-area' },
              _react2.default.createElement(
                'div',
                { className: 'media-column' },
                _react2.default.createElement(_Gallery2.default, null)
              ),
              _react2.default.createElement(
                'div',
                { className: 'details-column' },
                _react2.default.createElement(
                  'div',
                  { className: 'date' },
                  'Posted: June 6th'
                ),
                _react2.default.createElement(
                  'h3',
                  { className: 'title' },
                  ' Dodge Challenger'
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'price' },
                  ' $20,000'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'more-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'VIN'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      'WYYUHK756GHBB89CHJ'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Mileage'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      '4567'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Transmission'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      'Manual'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'VIN'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      'WYYUHK756GHBB89CHJ'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Mileage'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      '4567'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Transmission'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      'Manual'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Description'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor amet vHS neutra unicorn marfa lomo crucifix tousled selfies palo santo. Banjo ugh health goth master cleanse put a bird on it paleo poke actually ennui franzen jean shorts pitchfork vice pop-up yr. Raclette blue bottle man bun biodiesel edison bulb. Distillery vexillologist franzen pug pop-up, blog mumblecore adaptogen meggings glossier ethical unicorn. Cliche godard coloring book hella, hell of seitan keffiyeh pok pok gluten-free butcher hammock echo park food truck blue bottle. Direct trade ennui cloud bread pour-over, offal kogi ramps humblebrag. Vexillologist everyday carry tumeric chicharrones narwhal dreamcatcher, farm-to-table migas artisan poutine kitsch hexagon gluten-free wolf keffiyeh.'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(125);

var _axios2 = _interopRequireDefault(_axios);

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
      if (_this.state.categoriesData != '') {
        return _this.state.categoriesData.map(function (category, i) {
          var loopListings = function loopListings() {
            return category.listings.map(function (listing, index) {
              return _react2.default.createElement(
                'a',
                { href: category.title + '/' + listing.slug, className: 'link', key: index },
                listing.name
              );
            });
          };
          return _react2.default.createElement(
            'div',
            { className: 'categories', key: i },
            _react2.default.createElement(
              'div',
              { className: 'title' },
              category.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'group-links ' + (category.title == 'for-sale' || category.title == 'jobs' || category.title == 'housing' ? 'single-col' : '') },
              loopListings()
            )
          );
        });
      } else {
        return 'LOADING';
      }
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
      name: 'Joe',
      categoriesData: ''
    };

    return _this;
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      if (match.params.city == undefined) {
        history.push('/los-angeles');
      }

      var self = this;
      _axios2.default.get('/api/' + match.params.city + '/categories').then(function (response) {
        self.setState({
          categoriesData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
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

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

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

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.allImgsLoop = function () {
      return _this.state.allImgs.map(function (item, i) {
        return _react2.default.createElement('div', { key: i, onClick: _this.clickedThumb.bind(null, i), className: 'thumb-img', style: {
            "backgroundImage": 'url(' + item + ')' } });
      });
    };

    _this.nextBtn = function () {
      if (_this.state.currentIndex != _this.state.allImgs.length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      }
    };

    _this.prevBtn = function () {
      if (_this.state.currentIndex != 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }
    };

    _this.clickedThumb = function (index) {

      _this.setState({
        currentIndex: index
      });
    };

    _this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var allImgs = ['https://images.craigslist.org/00I0I_fA6pqL5Xh3h_600x450.jpg', 'https://images.craigslist.org/00W0W_jM9u9Fg2HfB_600x450.jpg', 'https://images.craigslist.org/00I0I_gg4oMQaH7zt_600x450.jpg', 'https://images.craigslist.org/00x0x_hByB2A3KRP6_600x450.jpg', 'https://images.craigslist.org/00s0s_aRlNEFmxDzY_600x450.jpg', 'https://images.craigslist.org/00k0k_8rDbQqgbekx_600x450.jpg'];
      this.setState({
        allImgs: allImgs,
        currentImg: allImgs[this.state.currentIndex]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'gallery' },
        _react2.default.createElement(
          'div',
          { className: 'slider' },
          _react2.default.createElement(
            'div',
            { className: 'main-image' },
            _react2.default.createElement(
              'div',
              { className: 'arrows left-arrow', onClick: this.prevBtn },
              _react2.default.createElement('i', { className: 'fas fa-chevron-left' })
            ),
            _react2.default.createElement(
              'div',
              { className: ' arrows right-arrow', onClick: this.nextBtn },
              _react2.default.createElement('i', { className: 'fas fa-chevron-right' })
            ),
            _react2.default.createElement('div', { className: 'image-1', style: {
                "backgroundImage": 'url(\'' + this.state.allImgs[this.state.currentIndex] + '\')' } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'thumbnails' },
          this.allImgsLoop()
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ })

},[143]);