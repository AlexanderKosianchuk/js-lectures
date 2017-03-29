window.onload = function () {
    'use strict';
    console.log();
    debugger;

    $('<div>')
        .attr('id', 'some-id')
        .css({
            'background-color': 'blue'
        })
        .text('la-la-la')
        .appendTo($('#root'));

    $('#btn3').click(function(event) {
        $('.container').fadeOut(500);
    });
};
