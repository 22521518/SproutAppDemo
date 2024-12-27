export const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Format with leading zeros if necessary
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = secs.toString().padStart(2, '0');

  return `${
    formattedHours !== '00' ? formattedHours + ':' : ''
  }${formattedMinutes}:${formattedSeconds}`;
};

export const GetToday = () => {
  // Get the current date
  const now = new Date();

  // Get the day of the week (short format: "Mon", "Tue", etc.)
  const dayOfWeek = now.toLocaleString('en-US', { weekday: 'short' });

  // Get the day of the month (e.g., "8")
  const date = now.getDate();
  return `${dayOfWeek} ${date}`;
};
