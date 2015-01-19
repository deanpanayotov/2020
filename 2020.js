/**
 * Created by Dean Panayotov Local on 19.1.2015 г..
 */

var YEAR = 365.25 //days
var MONTH = 30.416; //days
var WEEK = 7; //days

var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");
var days = document.getElementById("days");
var weeks = document.getElementById("weeks");
var months = document.getElementById("months");
var years = document.getElementById("years");

var timer = function(){
    var accum = (new Date(2020,0,0,0,0,0)) - (new Date());
    accum /= 1000;
    seconds.innerHTML = accum.toFixed(0);
    accum /= 60;
    minutes.innerHTML = accum.toFixed(2);
    accum /= 60;
    hours.innerHTML = accum.toFixed(2);
    accum /=24;
    days.innerHTML = accum.toFixed(2);
    weeks.innerHTML = (accum/WEEK).toFixed(2);
    months.innerHTML = (accum/MONTH).toFixed(2);
    years.innerHTML = (accum/YEAR).toFixed(2);
};

window.setInterval("timer()", 1000);