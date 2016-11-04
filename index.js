function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list')
  var n = parseInt(n)
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (n + 1).toString()
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

//   2) index deepestChild() returns the most deeply nested child in #grand-node:
//      ReferenceError: deepestChild is not defined
//       at Context.it (test/index-test.js:17:19)
//
