(function () {
    'use strict';

    console.log('start');

    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var container = document.getElementById('container');

    btn1.onclick = function (event) {
        console.log(event);
        console.log(this);

        container.innerHTML = 'Home';
    }

    var button2Handler = function (event) {
        console.log(event);
        console.log(this);

        container.innerHTML = 'Page 2';
    }

    btn2.addEventListener('click', button2Handler, false);
})();
