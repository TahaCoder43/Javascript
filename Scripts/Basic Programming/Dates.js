// Date methods

/*
Get Methods

getFullYear() 	Get the year as a four digit number (yyyy)
getMonth() 	Get the month as a number (0-11)
getDate() 	Get the day as a number (1-31)
getHours() 	Get the hour (0-23)
getMinutes() 	Get the minute (0-59)
getSeconds() 	Get the second (0-59)
getMilliseconds() 	Get the millisecond (0-999)
getTime() 	Get the time (milliseconds since January 1, 1970)
getDay() 	Get the weekday as a number (0-6)
Date.now() 	Get the time. ECMAScript 5.
*/

/*
Set Methods

setDate() 	Set the day as a number (1-31)
setFullYear() 	Set the year (optionally month and day)
setHours() 	Set the hour (0-23)
setMilliseconds() 	Set the milliseconds (0-999)
setMinutes() 	Set the minutes (0-59)
setMonth() 	Set the month (0-11)
setSeconds() 	Set the seconds (0-59)
setTime() 	Set the time (milliseconds since January 1, 1970)
*/

// Months start from 0 and end at 11, so this is march
const dt = new Date(2018, 2, 15, 12, 45, 30, 200);
const curTime = new Date();
const prevCentury = new Date(99, 7, 8);
const fromStr = new Date("Fri Dec 09 2020 11:32:04 GMT+0500");
const Milis = new Date(1000000000000);
const isodate = new Date('2020-05-25T12:34:12Z');
const shortDate = new Date("2022/04/23");
const longDate = new Date("Mar 12 2021");

let milis = Date.parse("2021/01/01");

console.log(curTime);
console.log(dt);
console.log(dt.getDate())
console.log(prevCentury);
console.log(fromStr);
console.log(Milis);
console.log(isodate);
console.log(shortDate);
console.log(longDate);
console.log(milis);
dt.setDate(12)
const dt2 = dt.toString();
const curTime2 = curTime.toUTCString();
const prevCentury2 = prevCentury.toDateString();
const fromStr2 = fromStr.toISOString();
console.log("Dates in other styles");
console.log(dt2);
console.log(curTime2);
console.log(prevCentury2);
console.log(fromStr2);