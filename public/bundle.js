(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const baseURL = "http://localhost:8088";
const API = {
  getEmployeesWithData: () => {
    return fetch(`${baseURL}/employees?_expand=computer&_expand=department`).then(response => response.json());
  }
};
var _default = API;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _htmlFactory = _interopRequireDefault(require("./htmlFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DOM = {
  appendEmployeesToDom: employeeArray => {
    const displayContainer = document.querySelector("#display-container");
    employeeArray.forEach(employee => displayContainer.appendChild(_htmlFactory.default.createHtmlForEmployee(employee)));
    return displayContainer;
  }
};
var _default = DOM;
exports.default = _default;

},{"./htmlFactory":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const htmlFactory = {
  createHtmlElement: (element, text, id, className) => {
    const newElement = document.createElement(element);

    if (text) {
      newElement.textContent = text;
    }

    if (id) {
      newElement.id = id;
    }

    if (className) {
      newElement.setAttribute("class", className);
    }

    return newElement;
  },
  createHtmlForEmployee: employeeObj => {
    const employeeFrag = document.createDocumentFragment();
    const employeeArticle = employeeFrag.appendChild(htmlFactory.createHtmlElement("article", undefined, `employee-article--${employeeObj.id}`, "employee"));
    const headerEl = employeeArticle.appendChild(htmlFactory.createHtmlElement("header", undefined, `employee-header--${employeeObj.id}`));
    headerEl.appendChild(htmlFactory.createHtmlElement("h1", employeeObj.name));
    employeeArticle.appendChild(htmlFactory.createHtmlElement("section", `Works in the ${employeeObj.department.branch} department.`, `employee-department-section--${employeeObj.id}`, "employee_department"));
    employeeArticle.appendChild(htmlFactory.createHtmlElement("section", `Currently using a ${employeeObj.computer.brand} computer.`));
    employeeFrag.appendChild(employeeArticle);
    return employeeFrag;
  }
};
var _default = htmlFactory;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _data = _interopRequireDefault(require("./data"));

var _domManager = _interopRequireDefault(require("./domManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_data.default.getEmployeesWithData().then(employeeArray => _domManager.default.appendEmployeesToDom(employeeArray));

},{"./data":1,"./domManager":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL2RvbU1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL2h0bWxGYWN0b3J5LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsTUFBTSxPQUFPLEdBQUcsdUJBQWhCO0FBRUEsTUFBTSxHQUFHLEdBQUc7QUFDUixFQUFBLG9CQUFvQixFQUFFLE1BQU07QUFDeEIsV0FBTyxLQUFLLENBQUUsR0FBRSxPQUFRLGdEQUFaLENBQUwsQ0FBa0UsSUFBbEUsQ0FBdUUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBQW5GLENBQVA7QUFDSDtBQUhPLENBQVo7ZUFNZSxHOzs7Ozs7Ozs7OztBQ1JmOzs7O0FBRUEsTUFBTSxHQUFHLEdBQUc7QUFDUixFQUFBLG9CQUFvQixFQUFHLGFBQUQsSUFBbUI7QUFDckMsVUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFDQSxJQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixxQkFBWSxxQkFBWixDQUFrQyxRQUFsQyxDQUE3QixDQUFsQztBQUVBLFdBQU8sZ0JBQVA7QUFDSDtBQU5PLENBQVo7ZUFTZSxHOzs7Ozs7Ozs7O0FDWGYsTUFBTSxXQUFXLEdBQUc7QUFFaEIsRUFBQSxpQkFBaUIsRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLEVBQWhCLEVBQW9CLFNBQXBCLEtBQWtDO0FBQ2pELFVBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLE9BQXZCLENBQW5COztBQUNBLFFBQUcsSUFBSCxFQUFRO0FBQ0wsTUFBQSxVQUFVLENBQUMsV0FBWCxHQUF5QixJQUF6QjtBQUNGOztBQUNELFFBQUcsRUFBSCxFQUFNO0FBQ0YsTUFBQSxVQUFVLENBQUMsRUFBWCxHQUFnQixFQUFoQjtBQUNIOztBQUNELFFBQUcsU0FBSCxFQUFhO0FBQ1QsTUFBQSxVQUFVLENBQUMsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxTQUFqQztBQUNIOztBQUNELFdBQU8sVUFBUDtBQUNILEdBZGU7QUFnQmhCLEVBQUEscUJBQXFCLEVBQUcsV0FBRCxJQUFpQjtBQUNwQyxVQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBckI7QUFDQSxVQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsV0FBYixDQUF5QixXQUFXLENBQUMsaUJBQVosQ0FBOEIsU0FBOUIsRUFBeUMsU0FBekMsRUFBb0QscUJBQW9CLFdBQVcsQ0FBQyxFQUFHLEVBQXZGLEVBQTBGLFVBQTFGLENBQXpCLENBQXhCO0FBQ0EsVUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLFdBQWhCLENBQTRCLFdBQVcsQ0FBQyxpQkFBWixDQUE4QixRQUE5QixFQUF3QyxTQUF4QyxFQUFvRCxvQkFBbUIsV0FBVyxDQUFDLEVBQUcsRUFBdEYsQ0FBNUIsQ0FBakI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxXQUFULENBQXFCLFdBQVcsQ0FBQyxpQkFBWixDQUE4QixJQUE5QixFQUFvQyxXQUFXLENBQUMsSUFBaEQsQ0FBckI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixXQUFXLENBQUMsaUJBQVosQ0FBOEIsU0FBOUIsRUFBeUMsZ0JBQWUsV0FBVyxDQUFDLFVBQVosQ0FBdUIsTUFBTyxjQUF0RixFQUFzRyxnQ0FBK0IsV0FBVyxDQUFDLEVBQUcsRUFBcEosRUFBdUoscUJBQXZKLENBQTVCO0FBQ0EsSUFBQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsV0FBVyxDQUFDLGlCQUFaLENBQThCLFNBQTlCLEVBQTBDLHFCQUFvQixXQUFXLENBQUMsUUFBWixDQUFxQixLQUFNLFlBQXpGLENBQTVCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixlQUF6QjtBQUVBLFdBQU8sWUFBUDtBQUNIO0FBMUJlLENBQXBCO2VBNkJlLFc7Ozs7OztBQzdCZjs7QUFDQTs7OztBQUdBLGNBQUksb0JBQUosR0FBMkIsSUFBM0IsQ0FBZ0MsYUFBYSxJQUFJLG9CQUFJLG9CQUFKLENBQXlCLGFBQXpCLENBQWpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgYmFzZVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4XCJcblxuY29uc3QgQVBJID0ge1xuICAgIGdldEVtcGxveWVlc1dpdGhEYXRhOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHtiYXNlVVJMfS9lbXBsb3llZXM/X2V4cGFuZD1jb21wdXRlciZfZXhwYW5kPWRlcGFydG1lbnRgKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7IiwiaW1wb3J0IGh0bWxGYWN0b3J5IGZyb20gXCIuL2h0bWxGYWN0b3J5XCJcblxuY29uc3QgRE9NID0ge1xuICAgIGFwcGVuZEVtcGxveWVlc1RvRG9tOiAoZW1wbG95ZWVBcnJheSkgPT4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgICAgICAgZW1wbG95ZWVBcnJheS5mb3JFYWNoKGVtcGxveWVlID0+IGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEZvckVtcGxveWVlKGVtcGxveWVlKSkpO1xuXG4gICAgICAgIHJldHVybiBkaXNwbGF5Q29udGFpbmVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NOyIsImNvbnN0IGh0bWxGYWN0b3J5ID0ge1xuXG4gICAgY3JlYXRlSHRtbEVsZW1lbnQ6IChlbGVtZW50LCB0ZXh0LCBpZCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBpZih0ZXh0KXtcbiAgICAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWQpe1xuICAgICAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNsYXNzTmFtZSl7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfSxcblxuICAgIGNyZWF0ZUh0bWxGb3JFbXBsb3llZTogKGVtcGxveWVlT2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtcGxveWVlRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgY29uc3QgZW1wbG95ZWVBcnRpY2xlID0gZW1wbG95ZWVGcmFnLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiYXJ0aWNsZVwiLCB1bmRlZmluZWQsYGVtcGxveWVlLWFydGljbGUtLSR7ZW1wbG95ZWVPYmouaWR9YCwgXCJlbXBsb3llZVwiKSk7XG4gICAgICAgIGNvbnN0IGhlYWRlckVsID0gZW1wbG95ZWVBcnRpY2xlLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiaGVhZGVyXCIsIHVuZGVmaW5lZCwgYGVtcGxveWVlLWhlYWRlci0tJHtlbXBsb3llZU9iai5pZH1gKSk7XG4gICAgICAgIGhlYWRlckVsLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiaDFcIiwgZW1wbG95ZWVPYmoubmFtZSkpO1xuICAgICAgICBlbXBsb3llZUFydGljbGUuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJzZWN0aW9uXCIsYFdvcmtzIGluIHRoZSAke2VtcGxveWVlT2JqLmRlcGFydG1lbnQuYnJhbmNofSBkZXBhcnRtZW50LmAsIGBlbXBsb3llZS1kZXBhcnRtZW50LXNlY3Rpb24tLSR7ZW1wbG95ZWVPYmouaWR9YCwgXCJlbXBsb3llZV9kZXBhcnRtZW50XCIpKTtcbiAgICAgICAgZW1wbG95ZWVBcnRpY2xlLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwic2VjdGlvblwiLCBgQ3VycmVudGx5IHVzaW5nIGEgJHtlbXBsb3llZU9iai5jb21wdXRlci5icmFuZH0gY29tcHV0ZXIuYCkpO1xuICAgICAgICBlbXBsb3llZUZyYWcuYXBwZW5kQ2hpbGQoZW1wbG95ZWVBcnRpY2xlKTtcblxuICAgICAgICByZXR1cm4gZW1wbG95ZWVGcmFnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaHRtbEZhY3Rvcnk7IiwiaW1wb3J0IEFQSSBmcm9tIFwiLi9kYXRhXCJcbmltcG9ydCBET00gZnJvbSBcIi4vZG9tTWFuYWdlclwiXG5cblxuQVBJLmdldEVtcGxveWVlc1dpdGhEYXRhKCkudGhlbihlbXBsb3llZUFycmF5ID0+IERPTS5hcHBlbmRFbXBsb3llZXNUb0RvbShlbXBsb3llZUFycmF5KSk7XG5cbiJdfQ==
