import { useEffect, useState } from 'react';
import fireExtinguisher from '../../public/assets/img/fire-exingusher.png';
import sprinklerAlarm from '../../public/assets/img/sprinkler-alarm.png';
import amcCheck from '../../public/assets/img/amc-check.png';

const images = [
  fireExtinguisher,
  sprinklerAlarm,
  amcCheck,
];

export default function FireImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full h-96 rounded-2xl shadow-2xl">
    {images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt="Fire Safety"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          index === current ? 'opacity-100' : 'opacity-0'
        }`}
      />
    ))}
  </div>
  
  );
}
