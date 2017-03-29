(function () {
    'use strict';

    console.log('start');

    var root = document.getElementById('root');
    var someClass = document.getElementsByClassName('some-class');
    var someNameEls = document.getElementsByName('some-name');
    var divs = document.getElementsByTagName('div');

    for(var index = 0; index < someNameEls.length; index++) {
        someNameEls[index].value = '1111';
    }

    root.style.backgroundColor = 'red';
    root.style.height = '200px';

    root.innerHTML = '<div id="sub-root"></div>';

    var subRoot = document.getElementById('sub-root');

    subRoot.style.backgroundColor = 'blue';
    subRoot.style.height = '100px';
})();
