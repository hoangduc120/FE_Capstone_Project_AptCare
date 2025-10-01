import React from "react";

const FloatingImage = ({ src, alt, className, overlay = true }) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className={`rounded-lg shadow-strong object-cover animate-float ${className}`}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg"></div>
      )}
    </div>
  );
};

export default FloatingImage;
