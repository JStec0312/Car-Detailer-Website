"use client";
import { useEffect, useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#FFDC00");
  const [primaryColor, setPrimaryColor] = useState("#0F0F0F");
  useEffect(() => {
    document.documentElement.style.setProperty("--color-secondary", color);
  }, [color]);
    useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", primaryColor);
  }, [primaryColor]);

  return (
    <div className="p-4 z-50 fixed bottom-0 right-0 bg-white shadow-lg rounded-lg flex items-center">
      <label htmlFor="colorPicker">Kolor przycisku:</label>
      <input
        id="colorPicker"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="ml-2"
      />
            <label htmlFor="colorPicker">Kolor Glowny</label>
                  <input
        id="colorPicker"
        type="color"
        value={primaryColor}
        onChange={(e) => setPrimaryColor(e.target.value)}
        className="ml-2"
      />

    </div>
  );
}
