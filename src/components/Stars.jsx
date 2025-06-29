import React, { useEffect, useState } from 'react';

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        size: Math.random() * 2 + 1
      };
      setStars((prev) => [...prev.slice(-100), newStar]);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
