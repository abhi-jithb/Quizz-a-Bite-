import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full py-4 text-center bg-gray-900 text-white fixed bottom-0 left-0">
      <p className="text-sm">
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/abhi-jithb" 
          target="_blank"
          rel="noopener noreferrer"
          className={`transition duration-500 ${
            glow ? "text-violet-400 drop-shadow-glow" : "text-white"
          }`}
        >
          Abhijith
        </a>
      </p>
    </footer>
  );
};

export default Footer;
