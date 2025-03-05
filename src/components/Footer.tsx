import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full py-4 text-center bg-gray-900 text-white fixed bottom-0 left-0 flex flex-col items-center">
      <p className="text-sm">
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/abhi-jithb"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition duration-500 ${
            glow ? "text-violet-400 drop-shadow-glow" : "text-white"
          } font-semibold`}
        >
          Abhijith
        </a>
      </p>
      <div className="flex gap-4 mt-2">
        <a
          href="https://github.com/abhi-jithb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300 text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhi-jithb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition duration-300 text-xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
