enum Period {
  AM = "AM",
  PM = "PM",
}

export function formatTime(timeInSeconds: number) {
  const oneHourInSeconds = 3600;
  const twelveHours = 12;
  const hours = timeInSeconds / oneHourInSeconds;

  let formattedValue = "";

  if (hours > twelveHours) {
    formattedValue = `${hours - twelveHours} ${Period.PM}`;
  }

  if (hours === twelveHours) {
    formattedValue = `${hours} ${Period.PM}`;
  }

  if (hours < twelveHours) {
    formattedValue = `${hours} ${Period.AM}`;
  }

  return formattedValue;
}
