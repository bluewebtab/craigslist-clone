webpackJsonp([0],{

/***/ 126:
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

var _reactRouterDom = __webpack_require__(41);

var _Header = __webpack_require__(146);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(149);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(150);

var _Listings2 = _interopRequireDefault(_Listings);

var _Category = __webpack_require__(147);

var _Category2 = _interopRequireDefault(_Category);

var _Details = __webpack_require__(148);

var _Details2 = _interopRequireDefault(_Details);

var _Gallery = __webpack_require__(76);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Ronny'
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
          _react2.default.createElement(_reactRouterDom.Route, { path: '/:city', component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:details', component: _Details2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(126);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

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

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedCityDropdown = function () {
      _this.setState({
        cityDropdown: !_this.state.cityDropdown
      });
    };

    _this.selectCity = function (city) {
      _this.setState({
        selectedCity: city
      }, function () {
        var city = _this.state.citiesData.filter(function (item) {
          return item.title == _this.state.selectedCity;
        });
        var _this$props = _this.props,
            match = _this$props.match,
            history = _this$props.history;

        history.push('/' + city[0].slug);
      });
    };

    _this.loopCities = function () {
      return _this.state.citiesData.map(function (item, i) {
        return _react2.default.createElement(
          'li',
          { key: i, onClick: _this.selectCity.bind(null, item.title) },
          item.title
        );
      });
    };

    _this.state = {
      cityDropdown: false,
      selectedCity: 'Los Angeles',
      citiesData: []
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('/api/cities').then(function (response) {
        var _self$props = self.props,
            match = _self$props.match,
            history = _self$props.history;

        var city = response.data.filter(function (item) {
          return item.slug == match.params.city;
        });
        self.setState({
          citiesData: response.data,
          selectedCity: city[0].title
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
      var _props = this.props,
          match = _props.match,
          history = _props.history;


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
              _reactRouterDom.Link,
              { className: 'logo', to: '/' + match.params.city },
              'Variety Vehicles'
            ),
            _react2.default.createElement(
              'div',
              { className: 'city-dropdown', onClick: this.clickedCityDropdown },
              this.state.selectedCity,
              _react2.default.createElement('i', { className: 'fas fa-caret-down ' + (this.state.cityDropdown ? 'fas fa-caret-up' : 'fas fa-caret-down') }),
              _react2.default.createElement(
                'div',
                { className: 'scroll-area ' + (this.state.cityDropdown ? 'active' : '') },
                _react2.default.createElement(
                  'ul',
                  null,
                  this.loopCities()
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-menu' },
            _react2.default.createElement(
              'div',
              { className: 'user-img' },
              _react2.default.createElement('i', { className: 'fas fa-user-circle' })
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

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(187);

var _queryString2 = _interopRequireDefault(_queryString);

var _reactRouterDom = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //This is categories for cars and trucks

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.loopItems = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      if (_this.state.itemsData != undefined) {
        return _this.state.itemsData.map(function (item, i) {
          return _react2.default.createElement(
            'div',
            { className: 'item', key: i },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: item.listing + '/' + item.title },
              _react2.default.createElement(
                'div',
                {

                  className: 'image', style: {
                    backgroundImage: 'url(\'' + item.images[0] + '\')'
                  } },
                _react2.default.createElement(
                  'div',
                  { className: 'price' },
                  '$',
                  item.price
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'h5',
                  null,
                  item.title,
                  _react2.default.createElement('i', { className: 'far fa-star' })
                ),
                _react2.default.createElement(
                  'h6',
                  null,
                  item.city
                )
              )
            )
          );
        });
      }
    };

    _this.showMakeModelDropdown = function () {
      var _this$props2 = _this.props,
          match = _this$props2.match,
          location = _this$props2.location,
          history = _this$props2.history;


      if (match.params.listings == 'cars-and-trucks') {

        return _react2.default.createElement(
          'div',
          { className: 'make-model-comp' },
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
              { name: 'make', className: 'make', onChange: _this.handleChange, value: _this.state.make },
              _react2.default.createElement(
                'option',
                { value: 'ford' },
                'ford'
              ),
              _react2.default.createElement(
                'option',
                { value: 'jeep' },
                'jeep'
              ),
              _react2.default.createElement(
                'option',
                { value: 'dodge' },
                'dodge'
              ),
              _react2.default.createElement(
                'option',
                { value: 'bmw' },
                'bmw'
              ),
              _react2.default.createElement(
                'option',
                { value: 'acura' },
                'acura'
              ),
              _react2.default.createElement(
                'option',
                { value: 'chevy' },
                'chevy'
              ),
              _react2.default.createElement(
                'option',
                { value: 'infiniti' },
                'infiniti'
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
              { name: 'model', className: 'model', onChange: _this.handleChange, value: _this.state.model },
              _react2.default.createElement(
                'option',
                { value: 'focus' },
                'focus'
              ),
              _react2.default.createElement(
                'option',
                { value: 'explorer' },
                'explorer'
              ),
              _react2.default.createElement(
                'option',
                { value: 'cherokee' },
                'cherokee'
              ),
              _react2.default.createElement(
                'option',
                { value: 'challenger' },
                'challenger'
              ),
              _react2.default.createElement(
                'option',
                { value: '328I' },
                '328I'
              ),
              _react2.default.createElement(
                'option',
                { value: 'cruz' },
                'cruz'
              ),
              _react2.default.createElement(
                'option',
                { value: 'MDX' },
                'MDX'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Q70' },
                'Q70'
              )
            )
          )
        );
      }
    };

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.submitFilters = function () {
      var self = _this;
      var _this$props3 = _this.props,
          match = _this$props3.match,
          location = _this$props3.location,
          history = _this$props3.history;
      var _this$state = _this.state,
          min_price = _this$state.min_price,
          max_price = _this$state.max_price,
          sort = _this$state.sort,
          select_view = _this$state.select_view,
          make = _this$state.make,
          model = _this$state.model;


      document.location.href = '/' + match.params.city + '/' + match.params.category + '/' + match.params.listings + '?min_price=' + min_price + '&max_price=' + max_price + '&sort=' + sort + '&select_view=' + select_view + '&make=' + make + '&model=' + model;

      var queryParams = _queryString2.default.parse(_this.props.location.search);
    };

    _this.state = {
      min_price: 0,
      max_price: 10000,
      sort: 'newest',
      select_view: 'gallery',
      make: 'ford',
      model: 'focus'
    };
    return _this;
  }

  _createClass(Category, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log(this.state);
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      console.log(match.params.category);
      var self = this;
      console.log(self.state.make);

      var queryParams = _queryString2.default.parse(this.props.location.search);
      var min_price = queryParams.min_price,
          max_price = queryParams.max_price,
          sort = queryParams.sort,
          select_view = queryParams.select_view,
          make = queryParams.make,
          model = queryParams.model;

      if (queryParams.min_price != undefined) {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '?min_price=' + min_price + '&max_price=' + max_price + '&sort=' + sort + '&select_view=' + select_view + '&make=' + make + '&model=' + model).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;


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
                  { name: 'min_price', className: 'min-price', onChange: this.handleChange, value: this.state.min_price },
                  _react2.default.createElement(
                    'option',
                    { value: '0' },
                    '0'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5000' },
                    '5000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '10000' },
                    '10000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '20000' },
                    '20000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '30000' },
                    '30000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '40000' },
                    '40000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '50000' },
                    '50000'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'max_price', className: 'max-price', onChange: this.handleChange, value: this.state.max_price },
                  _react2.default.createElement(
                    'option',
                    { value: '10000' },
                    '10000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '20000' },
                    '20000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '30000' },
                    '30000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '40000' },
                    '40000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '50000' },
                    '50000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '60000' },
                    '60000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '70000' },
                    '70000'
                  )
                )
              )
            ),
            this.showMakeModelDropdown(),
            _react2.default.createElement(
              'div',
              { className: 'form-group button' },
              _react2.default.createElement(
                'div',
                { className: 'primary-btn', onClick: this.submitFilters },
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
                    { name: 'select_view', className: 'select-view', onChange: this.handleChange, value: this.state.select_view },
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
                      'Thumb view'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group sort-dropdown' },
                  _react2.default.createElement(
                    'select',
                    { name: 'sort', className: 'sort-dropdown', onChange: this.handleChange, value: this.state.sort },
                    _react2.default.createElement(
                      'option',
                      { value: 'newest' },
                      'Newest'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'oldest' },
                      'Oldest'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                { className: 'all-items' },
                console.log(match.params),
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

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

var _Gallery = __webpack_require__(76);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //This is after you pick a car from categories.js


var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this));

    _this.getItem = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      if (_this.state.itemsData != undefined) {
        var carOne = _this.state.itemsData[0];
        var carTwo = _this.state.itemsData[1];
        var carThree = _this.state.itemsData[2];
        var carFour = _this.state.itemsData[3];

        if (match.params.details === carOne.title) {

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
                  console.log(match.params),
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
                    _react2.default.createElement(_Gallery2.default, { itemsPic: carOne })
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
                      carOne.title
                    ),
                    _react2.default.createElement(
                      'h4',
                      { className: 'price' },
                      carOne.price
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
                          carOne.extraDetails.vin
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
                          carOne.extraDetails.miles
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
                          carOne.extraDetails.transmission
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
        } else if (match.params.details === carTwo.title) {

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
                  console.log(match.params),
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
                    _react2.default.createElement(_Gallery2.default, { itemsPic: carTwo })
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
                      carTwo.title
                    ),
                    _react2.default.createElement(
                      'h4',
                      { className: 'price' },
                      carTwo.price
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
                          carTwo.extraDetails.vin
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
                          carTwo.extraDetails.miles
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
                          carTwo.extraDetails.transmission
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
        } else if (match.params.details === carThree.title) {

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
                  console.log(match.params),
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
                    _react2.default.createElement(_Gallery2.default, { itemsPic: carThree })
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
                      carThree.title
                    ),
                    _react2.default.createElement(
                      'h4',
                      { className: 'price' },
                      carThree.price
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
                          carThree.extraDetails.vin
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
                          carThree.extraDetails.miles
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
                          carThree.extraDetails.transmission
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
        } else {
          if (match.params.details === carFour.title) {

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
                    console.log(match.params),
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
                      _react2.default.createElement(_Gallery2.default, { itemsPic: carFour })
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
                        carFour.title
                      ),
                      _react2.default.createElement(
                        'h4',
                        { className: 'price' },
                        carFour.price
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
                            carFour.extraDetails.vin
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
                            carFour.extraDetails.miles
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
                            carFour.extraDetails.transmission
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
        }
      }
    };

    _this.state = {};
    return _this;
  }

  _createClass(Details, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;
      _axios2.default.get('/api/' + match.params.city + '/' + match.params.category).then(function (response) {
        self.setState({
          itemsData: response.data
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
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      var items = this.state.itemsData;
      return _react2.default.createElement(
        'div',
        { className: 'details-page' },
        this.getItem()
      );
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

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

var _reactRouterDom = __webpack_require__(41);

var _axios = __webpack_require__(26);

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

    _this.loopCategories = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;

      if (_this.state.categoriesData != '') {
        return _this.state.categoriesData.map(function (category, i) {
          var loopListings = function loopListings() {
            return category.listings.map(function (listing, index) {
              return _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' + match.params.city + '/' + category.title + '/' + listing.slug, key: index },
                listing.name
              );
            });
          };
          return _react2.default.createElement(
            'div',
            { className: 'categories', key: i },
            _react2.default.createElement(
              'a',
              { href: '/' + match.params.city + '/' + category.title, className: 'car-title' },
              category.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'car-link' },
              loopListings()
            )
          );
        });
      } else {
        return 'LOADING';
      }
    };

    _this.state = {
      name: 'Ronny',
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
      _axios2.default.get('/api/' + match.params.city).then(function (response) {
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
        console.log(this.props),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            null,
            'Buy Your Dream Car Here '
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
            _react2.default.createElement('div', { className: 'trending-tags' })
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 150:
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

/***/ 76:
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

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

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
      // const allImgs =['https://images.craigslist.org/00I0I_fA6pqL5Xh3h_600x450.jpg',
      // 'https://images.craigslist.org/00W0W_jM9u9Fg2HfB_600x450.jpg',
      // 'https://images.craigslist.org/00I0I_gg4oMQaH7zt_600x450.jpg',
      // 'https://images.craigslist.org/00x0x_hByB2A3KRP6_600x450.jpg',
      // 'https://images.craigslist.org/00s0s_aRlNEFmxDzY_600x450.jpg',
      // 'https://images.craigslist.org/00k0k_8rDbQqgbekx_600x450.jpg'
      // ]
      var allImgs = this.props.itemsPic.images;
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
          this.allImgsLoop(),
          console.log(this.props.itemsPic.images)
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ })

},[145]);