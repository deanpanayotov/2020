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
    var accum = (new Date(2020,1,1,0,0,0)) - (new Date());
    accum /= 1000;
    seconds.innerHTML = accum;
    accum /= 60;
    minutes.innerHTML = accum;
    accum /= 60;
    hours.innerHTML = accum;
    accum /=24;
    days.innerHTML = accum;
    weeks.innerHTML = accum/WEEK;
    months.innerHTML = accum/MONTH;
    years.innerHTML = accum/YEAR;
};

window.setInterval("timer()", 1000);