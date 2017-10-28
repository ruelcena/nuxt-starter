require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(1);

var _require = __webpack_require__(2),
    Nuxt = _require.Nuxt,
    Builder = _require.Builder;

var Api = __webpack_require__(3);

var router = express.Router();
var app = express();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// Import API Routes
router = Api.Users(router);

app.use(router);

// Import and Set Nuxt.js options
var config = __webpack_require__(4);
config.dev = !("development" === 'production');

// Init Nuxt.js
var nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
  var builder = new Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  Users: function Users(router) {

    // Mock Users
    var users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

    /* GET users listing. */
    router.get('/api/users', function (req, res, next) {
      res.json(users);
    });

    /* GET user by ID. */
    router.get('/api/users/:id', function (req, res, next) {
      var id = parseInt(req.params.id);
      if (id >= 0 && id < users.length) {
        res.json(users[id]);
      } else {
        res.sendStatus(404);
      }
    });

    return router;
  }

};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Starter Template',
    titleTemplate: '%s - Project Ready',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }, { hid: 'description', name: 'description', content: '' }],
    script: [{ src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' }, { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js' }, { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' }, { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }]
  },
  /*
  ** Global CSS
  */
  css: ['@/assets/css/bootstrap.min.css', '@/assets/css/main.css'],
  /*
  ** Change loading color
  */
  loading: {
    color: '#8bc34a'
  },
  /**
   * Use lru-cache to allow cached components for better render performances
   * */
  render: {
    bundleRenderer: {
      cache: __webpack_require__(6)({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'vue-cookie'],
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    TOKEN_AUTH: '',
    API_DOMAIN: '',
    NODE_ENV: 'development',
    HOST: '127.0.0.1',
    PORT: '3000'
  }
};

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map