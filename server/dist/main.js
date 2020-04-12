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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/movie-controller.js":
/*!*********************************************!*\
  !*** ./src/controllers/movie-controller.js ***!
  \*********************************************/
/*! exports provided: createMovie, updateMovie, deleteMovie, getMovies, getMovieById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMovie\", function() { return createMovie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateMovie\", function() { return updateMovie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteMovie\", function() { return deleteMovie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMovies\", function() { return getMovies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMovieById\", function() { return getMovieById; });\n/* harmony import */ var _models_movie_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/movie-model */ \"./src/models/movie-model.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar createMovie = function createMovie(req, res) {\n  // Use body-parser to parse the JSON request body element\n  var body = req.body;\n\n  if (!body) {\n    return res.status(400).json({\n      success: false,\n      error: 'You must provide a movie'\n    });\n  }\n\n  var movie = new _models_movie_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](body);\n\n  if (!movie) {\n    return res.status(400).json({\n      success: false,\n      error: 'Body has no movie or incorrect schema.'\n    });\n  }\n\n  movie.save().then(function () {\n    return res.status(201).json({\n      success: true,\n      id: movie._id,\n      message: 'Movie created!'\n    });\n  })[\"catch\"](function (error) {\n    return res.status(400).json({\n      error: error,\n      message: 'Movie not created!'\n    });\n  });\n};\n\nvar updateMovie = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n    var body;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            body = req.body;\n\n            if (body) {\n              _context.next = 3;\n              break;\n            }\n\n            return _context.abrupt(\"return\", res.status(400).json({\n              success: false,\n              error: 'You must provide a body to update'\n            }));\n\n          case 3:\n            _models_movie_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n              _id: req.params.id\n            }, function (err, movie) {\n              if (err) {\n                return res.status(404).json({\n                  err: err,\n                  message: 'Movie not found!'\n                });\n              }\n\n              movie.name = body.name;\n              movie.time = body.time;\n              movie.rating = body.rating;\n              movie.save().then(function () {\n                return res.status(200).json({\n                  success: true,\n                  id: movie._id,\n                  message: 'Movie updated!'\n                });\n              })[\"catch\"](function (error) {\n                return res.status(404).json({\n                  error: error,\n                  message: 'Movie not updated!'\n                });\n              });\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function updateMovie(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar deleteMovie = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _models_movie_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n              _id: req.params.id\n            }, function (err, movie) {\n              if (err) {\n                return res.status(400).json({\n                  success: false,\n                  error: err\n                });\n              }\n\n              if (!movie) {\n                return res.status(404).json({\n                  success: false,\n                  error: \"Movie not found\"\n                });\n              }\n\n              return res.status(200).json({\n                success: true,\n                data: movie\n              });\n            })[\"catch\"](function (err) {\n              return console.log(err);\n            });\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function deleteMovie(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar getMovieById = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return _models_movie_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n              _id: req.params.id\n            }, function (err, movie) {\n              if (err) {\n                return res.status(400).json({\n                  success: false,\n                  error: err\n                });\n              }\n\n              if (!movie) {\n                return res.status(404).json({\n                  success: false,\n                  error: \"Movie not found\"\n                });\n              }\n\n              return res.status(200).json({\n                success: true,\n                data: movie\n              });\n            })[\"catch\"](function (err) {\n              return console.log(err);\n            });\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function getMovieById(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar getMovies = /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return _models_movie_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}, function (err, movies) {\n              if (err) {\n                return res.status(400).json({\n                  success: false,\n                  error: err\n                });\n              }\n\n              if (!movies.length) {\n                return res.status(404).json({\n                  success: false,\n                  error: \"Movie not found\"\n                });\n              }\n\n              return res.status(200).json({\n                success: true,\n                data: movies\n              });\n            })[\"catch\"](function (err) {\n              return console.log(err);\n            });\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function getMovies(_x7, _x8) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlcnMvbW92aWUtY29udHJvbGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9tb3ZpZS1jb250cm9sbGVyLmpzPzI3ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllIGZyb20gJy4uL21vZGVscy9tb3ZpZS1tb2RlbCdcclxuXHJcbmNvbnN0IGNyZWF0ZU1vdmllID0gKHJlcSwgcmVzKSA9PiB7XHJcbiAgICAvLyBVc2UgYm9keS1wYXJzZXIgdG8gcGFyc2UgdGhlIEpTT04gcmVxdWVzdCBib2R5IGVsZW1lbnRcclxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxyXG5cclxuICAgIGlmICghYm9keSkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogJ1lvdSBtdXN0IHByb3ZpZGUgYSBtb3ZpZScsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtb3ZpZSA9IG5ldyBNb3ZpZShib2R5KVxyXG5cclxuICAgIGlmICghbW92aWUpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCb2R5IGhhcyBubyBtb3ZpZSBvciBpbmNvcnJlY3Qgc2NoZW1hLicgfSlcclxuICAgIH1cclxuXHJcbiAgICBtb3ZpZVxyXG4gICAgICAgIC5zYXZlKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG1vdmllLl9pZCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdNb3ZpZSBjcmVhdGVkIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTW92aWUgbm90IGNyZWF0ZWQhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVNb3ZpZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IHJlcS5ib2R5XHJcblxyXG4gICAgaWYgKCFib2R5KSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgICAgIGVycm9yOiAnWW91IG11c3QgcHJvdmlkZSBhIGJvZHkgdG8gdXBkYXRlJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIE1vdmllLmZpbmRPbmUoeyBfaWQ6IHJlcS5wYXJhbXMuaWQgfSwgKGVyciwgbW92aWUpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBlcnIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTW92aWUgbm90IGZvdW5kIScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vdmllLm5hbWUgPSBib2R5Lm5hbWVcclxuICAgICAgICBtb3ZpZS50aW1lID0gYm9keS50aW1lXHJcbiAgICAgICAgbW92aWUucmF0aW5nID0gYm9keS5yYXRpbmdcclxuICAgICAgICBtb3ZpZVxyXG4gICAgICAgICAgICAuc2F2ZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogbW92aWUuX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdNb3ZpZSB1cGRhdGVkIScsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTW92aWUgbm90IHVwZGF0ZWQhJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVNb3ZpZSA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgYXdhaXQgTW92aWUuZmluZE9uZUFuZERlbGV0ZSh7IF9pZDogcmVxLnBhcmFtcy5pZCB9LCAoZXJyLCBtb3ZpZSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnIgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbW92aWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAgICAgLnN0YXR1cyg0MDQpXHJcbiAgICAgICAgICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYE1vdmllIG5vdCBmb3VuZGAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG1vdmllIH0pXHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuY29uc3QgZ2V0TW92aWVCeUlkID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBhd2FpdCBNb3ZpZS5maW5kT25lKHsgX2lkOiByZXEucGFyYW1zLmlkIH0sIChlcnIsIG1vdmllKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVyciB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtb3ZpZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgICAgICAuc3RhdHVzKDQwNClcclxuICAgICAgICAgICAgICAgIC5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBgTW92aWUgbm90IGZvdW5kYCB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBtb3ZpZSB9KVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcbmNvbnN0IGdldE1vdmllcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgYXdhaXQgTW92aWUuZmluZCh7fSwgKGVyciwgbW92aWVzKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVyciB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW1vdmllcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgICAgICAgICAgICAgLnN0YXR1cyg0MDQpXHJcbiAgICAgICAgICAgICAgICAuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogYE1vdmllIG5vdCBmb3VuZGAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbW92aWVzIH0pXHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZU1vdmllLFxyXG4gICAgdXBkYXRlTW92aWUsXHJcbiAgICBkZWxldGVNb3ZpZSxcclxuICAgIGdldE1vdmllcyxcclxuICAgIGdldE1vdmllQnlJZCxcclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUxBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBcUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controllers/movie-controller.js\n");

/***/ }),

/***/ "./src/db/index.js":
/*!*************************!*\
  !*** ./src/db/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nObject(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])('mongodb://127.0.0.1:27017/cinema', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n})[\"catch\"](function (e) {\n  console.error('Connection error', e.message);\n});\nvar movieDb = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"connection\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (movieDb);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGIvaW5kZXguanM/ODE0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBjb25uZWN0aW9uIH0gZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25uZWN0KCdtb25nb2RiOi8vMTI3LjAuMC4xOjI3MDE3L2NpbmVtYScsIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlfSlcclxuICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdDb25uZWN0aW9uIGVycm9yJywgZS5tZXNzYWdlKVxyXG4gICAgfSlcclxuXHJcbmNvbnN0IG1vdmllRGIgPSBjb25uZWN0aW9uXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb3ZpZURiIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/db/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./db */ \"./src/db/index.js\");\n/* harmony import */ var _routes_movie_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/movie-router */ \"./src/routes/movie-router.js\");\n\n\n\n\n // Set the port to listen to api requests\n\nvar apiPort = 4242;\nvar printStr = \"Server is running on port \".concat(apiPort, \"...\"); // Configure the express server and middleware\n\nvar server = express__WEBPACK_IMPORTED_MODULE_0___default()();\nserver.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('dist'));\nserver.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\nserver.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\nserver.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json()); // Subscribe to database events\n\n_db__WEBPACK_IMPORTED_MODULE_3__[\"default\"].on('error', console.error.bind(console, 'MongoDB connection error:')); // Provide endpoint for root level GET request\n\nserver.get('/', function (req, res) {\n  res.send(printStr);\n}); // Provide endpoint for api requests\n\nserver.use('/api', _routes_movie_router__WEBPACK_IMPORTED_MODULE_4__[\"movieRouter\"]); // subscribe to requests at the specified reports and serve responses\n// Note: since this is server-side code, this console.log prints to the command \n// line console, not the browser console.\n\nserver.listen(apiPort, function () {\n  return console.log(printStr);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcclxuaW1wb3J0IGNvcnMgZnJvbSAnY29ycydcclxuXHJcbmltcG9ydCBtb3ZpZURiIGZyb20gJy4vZGInXHJcbmltcG9ydCB7IG1vdmllUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXMvbW92aWUtcm91dGVyJ1xyXG5cclxuLy8gU2V0IHRoZSBwb3J0IHRvIGxpc3RlbiB0byBhcGkgcmVxdWVzdHNcclxuY29uc3QgYXBpUG9ydCA9IDQyNDJcclxuY29uc3QgcHJpbnRTdHIgPSBgU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAke2FwaVBvcnR9Li4uYFxyXG5cclxuLy8gQ29uZmlndXJlIHRoZSBleHByZXNzIHNlcnZlciBhbmQgbWlkZGxld2FyZVxyXG5jb25zdCBzZXJ2ZXIgPSBleHByZXNzKClcclxuc2VydmVyLnVzZShleHByZXNzLnN0YXRpYygnZGlzdCcpKVxyXG5zZXJ2ZXIudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSlcclxuc2VydmVyLnVzZShjb3JzKCkpXHJcbnNlcnZlci51c2UoYm9keVBhcnNlci5qc29uKCkpXHJcblxyXG4vLyBTdWJzY3JpYmUgdG8gZGF0YWJhc2UgZXZlbnRzXHJcbm1vdmllRGIub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JykpXHJcblxyXG4vLyBQcm92aWRlIGVuZHBvaW50IGZvciByb290IGxldmVsIEdFVCByZXF1ZXN0XHJcbnNlcnZlci5nZXQoJy8nLCAocmVxLCByZXMpID0+IHtcclxuICByZXMuc2VuZChwcmludFN0cilcclxufSk7XHJcblxyXG4vLyBQcm92aWRlIGVuZHBvaW50IGZvciBhcGkgcmVxdWVzdHNcclxuc2VydmVyLnVzZSgnL2FwaScsIG1vdmllUm91dGVyKVxyXG5cclxuLy8gc3Vic2NyaWJlIHRvIHJlcXVlc3RzIGF0IHRoZSBzcGVjaWZpZWQgcmVwb3J0cyBhbmQgc2VydmUgcmVzcG9uc2VzXHJcbi8vIE5vdGU6IHNpbmNlIHRoaXMgaXMgc2VydmVyLXNpZGUgY29kZSwgdGhpcyBjb25zb2xlLmxvZyBwcmludHMgdG8gdGhlIGNvbW1hbmQgXHJcbi8vIGxpbmUgY29uc29sZSwgbm90IHRoZSBicm93c2VyIGNvbnNvbGUuXHJcbnNlcnZlci5saXN0ZW4oYXBpUG9ydCwgKCkgPT4gY29uc29sZS5sb2cocHJpbnRTdHIpKVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/models/movie-model.js":
/*!***********************************!*\
  !*** ./src/models/movie-model.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Movie = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  name: {\n    type: String,\n    required: true\n  },\n  time: {\n    type: [String],\n    required: true\n  },\n  rating: {\n    type: Number,\n    required: true\n  }\n}, {\n  timestamps: true\n}); // Export a Mongoose Model\n\n/*\r\nNote: this package will be included using:\r\nimport Movie from './movie-model'\r\nwhich might create some ambiguity between the \r\nMongoose Movie object and the local Movie variable\r\nin this file.\r\n*/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])('movies', Movie));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL21vdmllLW1vZGVsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9tb3ZpZS1tb2RlbC5qcz82YTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwgYXMgbW9uZ29vc2VNb2RlbH0gZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBNb3ZpZSA9IG5ldyBTY2hlbWEoXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgICAgdGltZTogeyB0eXBlOiBbU3RyaW5nXSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgICByYXRpbmc6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgfSxcclxuICAgIHsgdGltZXN0YW1wczogdHJ1ZSB9LFxyXG4pXHJcblxyXG4vLyBFeHBvcnQgYSBNb25nb29zZSBNb2RlbFxyXG4vKlxyXG5Ob3RlOiB0aGlzIHBhY2thZ2Ugd2lsbCBiZSBpbmNsdWRlZCB1c2luZzpcclxuaW1wb3J0IE1vdmllIGZyb20gJy4vbW92aWUtbW9kZWwnXHJcbndoaWNoIG1pZ2h0IGNyZWF0ZSBzb21lIGFtYmlndWl0eSBiZXR3ZWVuIHRoZSBcclxuTW9uZ29vc2UgTW92aWUgb2JqZWN0IGFuZCB0aGUgbG9jYWwgTW92aWUgdmFyaWFibGVcclxuaW4gdGhpcyBmaWxlLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZU1vZGVsKCdtb3ZpZXMnLCBNb3ZpZSlcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7QUFPQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/models/movie-model.js\n");

/***/ }),

/***/ "./src/routes/movie-router.js":
/*!************************************!*\
  !*** ./src/routes/movie-router.js ***!
  \************************************/
/*! exports provided: movieRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"movieRouter\", function() { return movieRouter; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_movie_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/movie-controller */ \"./src/controllers/movie-controller.js\");\n\n\nvar movieRouter = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nmovieRouter.post('/movie', _controllers_movie_controller__WEBPACK_IMPORTED_MODULE_1__[\"createMovie\"]);\nmovieRouter.put('/movie/:id', _controllers_movie_controller__WEBPACK_IMPORTED_MODULE_1__[\"updateMovie\"]);\nmovieRouter[\"delete\"]('/movie/:id', _controllers_movie_controller__WEBPACK_IMPORTED_MODULE_1__[\"deleteMovie\"]);\nmovieRouter.get('/movie/:id', _controllers_movie_controller__WEBPACK_IMPORTED_MODULE_1__[\"getMovieById\"]);\nmovieRouter.get('/movies', _controllers_movie_controller__WEBPACK_IMPORTED_MODULE_1__[\"getMovies\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzL21vdmllLXJvdXRlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbW92aWUtcm91dGVyLmpzP2MwNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcydcclxuXHJcbmltcG9ydCB7IGNyZWF0ZU1vdmllLCB1cGRhdGVNb3ZpZSwgZGVsZXRlTW92aWUsIGdldE1vdmllQnlJZCwgZ2V0TW92aWVzIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvbW92aWUtY29udHJvbGxlcidcclxuXHJcbmNvbnN0IG1vdmllUm91dGVyID0gUm91dGVyKClcclxuXHJcbm1vdmllUm91dGVyLnBvc3QoJy9tb3ZpZScsIGNyZWF0ZU1vdmllKVxyXG5tb3ZpZVJvdXRlci5wdXQoJy9tb3ZpZS86aWQnLCB1cGRhdGVNb3ZpZSlcclxubW92aWVSb3V0ZXIuZGVsZXRlKCcvbW92aWUvOmlkJywgZGVsZXRlTW92aWUpXHJcbm1vdmllUm91dGVyLmdldCgnL21vdmllLzppZCcsIGdldE1vdmllQnlJZClcclxubW92aWVSb3V0ZXIuZ2V0KCcvbW92aWVzJywgZ2V0TW92aWVzKVxyXG5cclxuZXhwb3J0IHsgbW92aWVSb3V0ZXIgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/movie-router.js\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIj83ZTllIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });