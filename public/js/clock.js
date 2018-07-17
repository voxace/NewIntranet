var months_array = new Array();
months_array[0] = "January";
months_array[1] = "February";
months_array[2] = "March";
months_array[3] = "April";
months_array[4] = "May";
months_array[5] = "June";
months_array[6] = "July";
months_array[7] = "August";
months_array[8] = "September";
months_array[9] = "October";
months_array[10] = "November";
months_array[11] = "December";

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var termDates = {};
termDates[2] = "Holidays";
termDates[3] = "Holidays";
termDates[4] = "Holidays";
termDates[5] = "Week 1B";
termDates[6] = "Week 2A";
termDates[7] = "Week 3B";
termDates[8] = "Week 4A";
termDates[9] = "Week 5B";
termDates[10] = "Week 6A";
termDates[11] = "Week 7B";
termDates[12] = "Week 8A";
termDates[13] = "Week 9B";
termDates[14] = "Week 10A";
termDates[15] = "Week 11B";
termDates[16] = "Holidays";
termDates[17] = "Holidays";
termDates[18] = "Week 1A";
termDates[19] = "Week 2B";
termDates[20] = "Week 3A";
termDates[21] = "Week 4B";
termDates[22] = "Week 5A";
termDates[23] = "Week 6B";
termDates[24] = "Week 7A";
termDates[25] = "Week 8B";
termDates[26] = "Week 9A";
termDates[27] = "Week 10B";
termDates[28] = "Holidays";
termDates[29] = "Holidays";
termDates[30] = "Week 1A";
termDates[31] = "Week 2B";
termDates[32] = "Week 3A";
termDates[33] = "Week 4B";
termDates[34] = "Week 5A";
termDates[35] = "Week 6B";
termDates[36] = "Week 7A";
termDates[37] = "Week 8B";
termDates[38] = "Week 9A";
termDates[39] = "Week 10B";
termDates[40] = "Holidays";
termDates[41] = "Holidays";
termDates[42] = "Week 1A";
termDates[43] = "Week 2B";
termDates[44] = "Week 3A";
termDates[45] = "Week 4B";
termDates[46] = "Week 5A";
termDates[47] = "Week 6B";
termDates[48] = "Week 7A";
termDates[49] = "Week 8B";
termDates[50] = "Week 9A";
termDates[51] = "Week 10B";
termDates[52] = "Holidays";

function getWeekNumber() {
	var today = new Date();
	var d = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
	var dayNum = d.getUTCDay() || 7;
	d.setUTCDate(d.getUTCDate() + 4 - dayNum);
	var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
	return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
}

function calcWeek() {
	var thisWeek = getWeekNumber();	
	return termDates[thisWeek];		
}

function startTime() {
	var today = new Date();
	var D = today.getDate()
	var M = months_array[today.getMonth()]; 
	var d = weekday[today.getDay()]; 
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);
	d = checkTime(d);
	var ampm = checkAmPm(h);
	document.getElementById('datetime').innerHTML = D + " " + M + ", " + fixHours(h) + ":" + m + " " + ampm;
	document.getElementById('week').innerHTML = calcWeek();
	var t = setTimeout(startTime, 10000);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}
function fixHours(i) {
	if (i > 12) {i = i - 12};
	return i;
}
function checkAmPm(i) {
	if (i > 12) {i = "PM"} else {i = "AM"};
	return i;
}

startTime();
