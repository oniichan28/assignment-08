import React, { useEffect, useState } from "react";

const LoadingSpinner = ({ mode = "fast" }) => {
  const [showText, setShowText] = useState(false);

  const settings = {
    slow: { textDelay: 500, spinnerSpeed: 2 },
    fast: { textDelay: 100, spinnerSpeed: 1 },
  };

  const { textDelay, spinnerSpeed } = settings[mode];

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), textDelay);
    return () => clearTimeout(timer1);
  }, [textDelay]);

  return (
    <div
      style={{
        position: "fixed", 
        inset: 0, 
        zIndex: 50, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          fontWeight: "bold",
          fontSize: showText ? "3rem" : "2rem",
          transition: "font-size 0.6s ease-in-out",
          color: "#6b46c1",
        }}
      >
        L
        <span
          style={{
            position: "relative",
            width: showText ? "48px" : "36px",
            height: showText ? "48px" : "36px",
            transition: "width 0.6s ease-in-out, height 0.6s ease-in-out",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "4px solid #6b46c1",
              borderBottom: "4px solid transparent",
              animation: `rotateO ${spinnerSpeed}s linear infinite`,
            }}
          ></span>
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "10px",
              height: "10px",
              backgroundColor: "#6b46c1",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              animation: `bounceDot ${spinnerSpeed * 0.6}s ease-in-out infinite`,
            }}
          ></span>
        </span>
        A D I N G
      </div>

      <style>
        {`
          @keyframes rotateO {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes bounceDot {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.5); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
