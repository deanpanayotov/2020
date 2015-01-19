/**
 * Created by Dean Panayotov Local on 19.1.2015 г..
 */

function daydiff(first, second) {
    return (second-first)/(1000*60*60*24);
}

alert(daydiff(new Date(), new Date(2020,1,1,0,0,0)));

