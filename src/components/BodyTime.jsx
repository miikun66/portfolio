import React, { useEffect, useState } from "react";

function BodyTime() {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const dayTime = hour >= 5 && hour < 17;
      setIsDay(dayTime);

      
      document.body.style.backgroundColor = dayTime ? "oklch(89.4% 0.057 293.283)" : "oklch(27.4% 0.006 286.033)";
      document.body.style.color = dayTime ? "oklch(27.4% 0.006 286.033)" : "oklch(94.5% 0.129 101.54)";
    };

    checkTime(); 

    const interval = setInterval(checkTime, 60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default BodyTime;
