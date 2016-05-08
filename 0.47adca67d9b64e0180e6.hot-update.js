webpackHotUpdate(0,{

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react2 = __webpack_require__(3);

	var _react3 = _interopRequireDefault(_react2);

	var _reactTransformHmr3 = __webpack_require__(160);

	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _header = __webpack_require__(292);

	var _header2 = _interopRequireDefault(_header);

	var _drawing = __webpack_require__(293);

	var _drawing2 = _interopRequireDefault(_drawing);

	var _fileinput = __webpack_require__(294);

	var _fileinput2 = _interopRequireDefault(_fileinput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	  App: {
	    displayName: 'App'
	  }
	};

	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/blutarche/Project/dev.aikdanai.com/intensifier/components/app.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}

	var App = _wrapComponent('App')(function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

	    _this.state = { url: 'https://graph.facebook.com/1021235868/picture?width=500' };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'updatePicture',
	    value: function updatePicture(url) {
	      this.setState({ url: url });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: 'col-xs-12' },
	        _react3.default.createElement(_header2.default, null),
	        _react3.default.createElement(_drawing2.default, { url: this.state.url }),
	        _react3.default.createElement(_fileinput2.default, { updatePicture: this.updatePicture.bind(this) })
	      );
	    }
	  }]);

	  return App;
	}(_react3.default.Component));

	exports.default = App;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react2 = __webpack_require__(3);

	var _react3 = _interopRequireDefault(_react2);

	var _reactTransformHmr3 = __webpack_require__(160);

	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	  Drawing: {
	    displayName: 'Drawing'
	  }
	};

	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/blutarche/Project/dev.aikdanai.com/intensifier/components/drawing.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}

	var randomMax = 3;
	var shiftPosition = 0;
	var middleRange = 0;
	var img = new Image();

	var Drawing = _wrapComponent('Drawing')(function (_React$Component) {
	  _inherits(Drawing, _React$Component);

	  function Drawing() {
	    _classCallCheck(this, Drawing);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Drawing).call(this));

	    _this.state = { url: '' };
	    return _this;
	  }

	  _createClass(Drawing, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      img.src = this.state.url;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      middleRange = randomMax / 2;
	      setInterval(this.updatePosition.bind(this), 10);
	    }
	  }, {
	    key: 'drawingPicture',
	    value: function drawingPicture() {
	      this.setState({ url: this.props.url });
	      img.src = this.state.url;
	    }
	  }, {
	    key: 'updatePosition',
	    value: function updatePosition() {
	      this.drawingPicture();
	      var canvas = this.refs.canvas;
	      canvas.width = img.width - randomMax;
	      canvas.height = img.height - randomMax;
	      var ctx = canvas.getContext('2d');
	      var width = canvas.width;
	      var height = canvas.height;
	      var shiftPositionX = Math.floor(Math.random() * randomMax - middleRange);
	      var shiftPositionY = Math.floor(Math.random() * randomMax - middleRange);
	      var x = -middleRange + shiftPositionX;
	      var y = -middleRange + shiftPositionY;
	      var w = width - middleRange;
	      var h = height - middleRange;
	      ctx.clearRect(0, 0, width, height);
	      ctx.drawImage(img, x, y);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: 'text-center' },
	        _react3.default.createElement('canvas', { ref: 'canvas', width: 300, height: 300 })
	      );
	    }
	  }]);

	  return Drawing;
	}(_react3.default.Component));

	exports.default = Drawing;
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react2 = __webpack_require__(3);

	var _react3 = _interopRequireDefault(_react2);

	var _reactTransformHmr3 = __webpack_require__(160);

	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	  FileInput: {
	    displayName: 'FileInput'
	  }
	};

	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/Users/blutarche/Project/dev.aikdanai.com/intensifier/components/fileinput.js',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}

	var FileInput = _wrapComponent('FileInput')(function (_React$Component) {
	  _inherits(FileInput, _React$Component);

	  function FileInput() {
	    _classCallCheck(this, FileInput);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FileInput).call(this));

	    _this.state = {
	      imageDataURL: '',
	      imageName: '',
	      nameStyle: { display: "none" } };
	    _this.fileChange = _this.fileChange.bind(_this);
	    return _this;
	  }

	  _createClass(FileInput, [{
	    key: 'fileChange',
	    value: function fileChange(e) {
	      var _this2 = this;

	      var reader = new FileReader();
	      var file = e.target.files[0];
	      this.props.updatePicture(URL.createObjectURL(file));

	      console.log(file);
	      reader.onloadend = function () {
	        _this2.setState({
	          imageDataURL: reader.result,
	          imageName: file.name,
	          nameStyle: { display: "block" }
	        });
	      };

	      reader.readAsDataURL(file);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log("dafuq02");
	      return _react3.default.createElement(
	        'div',
	        { className: 'text-center' },
	        _react3.default.createElement(
	          'div',
	          { className: 'fileName', style: this.state.nameStyle },
	          _react3.default.createElement(
	            'b',
	            null,
	            'Current picture:'
	          ),
	          ' ',
	          _react3.default.createElement(
	            'span',
	            null,
	            this.state.imageName
	          )
	        ),
	        _react3.default.createElement(
	          'button',
	          { className: 'btn btn-hg btn-embossed btn-primary upload' },
	          _react3.default.createElement('i', { className: 'fa fa-picture-o', 'aria-hidden': 'true' }),
	          ' Upload your own photo',
	          _react3.default.createElement('input', { ref: 'photo', type: 'file', name: 'picture', accept: 'image/*', onChange: this.fileChange })
	        )
	      );
	    }
	  }]);

	  return FileInput;
	}(_react3.default.Component));

	exports.default = FileInput;
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }

})