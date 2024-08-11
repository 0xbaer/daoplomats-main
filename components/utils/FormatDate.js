"use client";

import { useState, useEffect } from "react";

const FormatDateComponent = ({ timestamp }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const date = new Date(timestamp * 1000);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");

  const year = date.getFullYear();

  return (
    <span>{isMobile ? `${day}/${month}` : `${day}-${month}-${year}`}</span>
  );
};

export default FormatDateComponent;
