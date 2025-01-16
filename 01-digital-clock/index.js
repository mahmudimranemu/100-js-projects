setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  am_pm = "AM";
  if (h >= 12) {
    if (h >= 12) h -= 12;
    am_pm = "PM";
  } else if (h == 0) {
    h = 12;
    am_pm = "AM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let currentTime = h + ":" + m + ":" + s + am_pm;

  document.getElementById("time").innerHTML = currentTime;
}

showTime();

function showDate() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  let day = today.getDay();
  let weekday = weekdays[day];
  let month = months[today.getMonth()];
  let year = today.getFullYear();

  day = day < 10 ? "0" + day : day;

  document.getElementById("date").innerHTML =
    weekday + ", " + month + " " + day + ", " + year;
  console.log(month);
}

showDate();
