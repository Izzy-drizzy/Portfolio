import { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Europe/London',
      timeZoneName: 'short'
    });
  };

  const isBusinessHours = () => {
    const hour = time.getHours();
    const day = time.getDay();
    if (day === 0) return false; // Sunday
    if (day === 6) return hour >= 10 && hour < 14; // Saturday 10-2
    return hour >= 9 && hour < 17 || (hour === 17 && time.getMinutes() <= 30); // Mon-Fri 9-5:30
  };

  const isOnline = isBusinessHours();

  return (
    <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
      <span className={isOnline ? "text-green-600" : "text-gray-400"}>
        ({isOnline ? 'Online' : 'Offline'})
      </span>
      <span>Now, {formatTime(time)}</span>
    </div>
  );
}
