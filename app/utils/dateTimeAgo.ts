export default function dateTimeAgo(dateTimeString: string | Date): string {
  const currentDate = new Date();
  const providedDate = new Date(dateTimeString);

  const timeDifferenceInSeconds = Math.floor(
    (currentDate.getTime() - providedDate.getTime()) / 1000,
  );

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  const timeAgo = Object.entries(intervals)
    .map(([unit, secondsInUnit]) => {
      const intervalCount = Math.floor(timeDifferenceInSeconds / secondsInUnit);

      if (intervalCount >= 1) {
        return `${intervalCount} ${unit}${intervalCount > 1 ? 's' : ''} ago`;
      }
      return null;
    })
    .filter(Boolean)[0];

  return timeAgo || 'Just now';
}
