/**
 * Created by Dean Panayotov Local on 19.1.2015 г..
 */

function parseDate(str) {
    var mdy = str.split('/')
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function daydiff(first, second) {
    return (second-first)/(1000*60*60*24);
}

alert(daydiff(parseDate($('#first').val()), parseDate($('#second').val())));

