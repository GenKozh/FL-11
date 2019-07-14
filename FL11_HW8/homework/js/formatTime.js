function formatTime(a) {
  const minutesInDay = 24 * 60;
  const minutesInHour = 60;

  let days = Math.floor(a / minutesInDay);
  let hours = Math.floor((a % minutesInDay) / minutesInHour);
  let minutes = a - days * minutesInDay - hours * minutesInHour;

  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
}

formatTime(120); //=> 0 day(s) 2 hour(s) 0 minute(s).
formatTime(59); //=> 0 day(s) 0 hour(s) 59 minute(s).
formatTime(3601); //=> 1 day(s) 0 hour(s) 1 minute(s).
