import { useState, useEffect } from "react";
import './../index.css'; 

function ColorPicker() {
    const [color, setColor] = useState('#FFFFFF');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    // Add class to trigger pulse animation when the color changes
    useEffect(() => {
        const colorDisplay = document.querySelector('.color-display');
        colorDisplay.classList.add('pulsate');

        // Remove the pulsate class after animation
        setTimeout(() => {
            colorDisplay.classList.remove('pulsate');
        }, 1200); // Match pulse animation duration
    }, [color]);

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div
                className="color-display"
                style={{ backgroundColor: color }}
            >
                <p className="color-text">Selected Color: {color}</p>
            </div>

            <label htmlFor="color-input">Pick a color: </label>
            <input
                id="color-input"
                type="color"
                value={color}
                onChange={handleColorChange}
            />
        </div>
    );
}

export default ColorPicker;
