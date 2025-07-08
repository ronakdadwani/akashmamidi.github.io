import React from "react";

export default function DesignImg(props) {
  const { imagePath, alt, style } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        ...style,
      }}
    >
      <img
        src={require(`../../assests/images/${imagePath}`)}
        alt={alt || "Skill"}
        style={{
          width: 260,
          height: 260,
          objectFit: "contain",
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      />
    </div>
  );
}
