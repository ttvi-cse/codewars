function formatDuration (seconds) {

  const SECONDS_IN_MIUTE = 60;
  const SECONS_IN_HOUR = SECONDS_IN_MIUTE*60;
  const SECONDS_IN_DAY = SECONS_IN_HOUR*24;
  const SECONDS_IN_YEAR = SECONDS_IN_DAY*365;

  var years = 0;
  var days = 0;
  var hours = 0;
  var minutes = 0;

  years = Math.floor(seconds/(SECONDS_IN_YEAR));
  days = Math.floor(seconds/(SECONDS_IN_DAY));
  hours = Math.floor(seconds/(SECONS_IN_HOUR));
  minutes = Math.floor(seconds/SECONDS_IN_MIUTE);
  seconds = seconds % 60;

  if (minutes > 0) {
    seconds = seconds % 60;
    if (hours > 0) {
        minutes = minutes % 60;
        if (days > 0) {
          hours = hours % 24; 
          if (years > 0) {
            days = days % 365;
          }
        }
    }
  }

  // console.log(years, days, hours, minutes, seconds);

  var s = '';

  if (years > 0) {
    s += (years == 1) ?  '1 year ' : years + ' years ';
  }

  if (days > 0) {
    s += (days == 1)? '1 day ' : days + ' days ';
  }

  if (hours > 0) {
    s += (hours == 1)? '1 hour ' : hours + ' hours ';
  }


  if (minutes > 0) {
    s += (minutes == 1)? '1 minute'   : minutes + ' minutes ';
  }

  if (seconds > 0) {
    s += (seconds == 1)? 'and 1 second' : ' and ' + seconds + ' seconds';
  }

  // console.log(s);

}


formatDuration(3662);