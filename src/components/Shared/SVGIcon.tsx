import { CSSProperties } from "react";

interface SVGIconProps {
  src: string;
  alt: string;
  className?: string;
  size?: string | number;
  style?: CSSProperties;
  filter?: string;
  color?: string;
}

/**
 * SVGIcon Component
 * A component for displaying and styling SVG icons with various customization options
 */
const SVGIcon = ({
  src,
  alt,
  className = "",
  size,
  style = {},
  filter,
  color,
}: SVGIconProps) => {
  // Create style object with optional properties
  const iconStyle: CSSProperties = {
    ...style,
  };

  // Add size if provided
  if (size) {
    iconStyle.width = typeof size === "number" ? `${size}px` : size;
    iconStyle.height = typeof size === "number" ? `${size}px` : size;
  }

  // Build the filter string
  let filterString = "";
  if (filter) {
    filterString = filter;
  }
  // Add color adjustments if color is provided
  if (color) {
    // This is a technique to colorize SVGs using filters
    // We first make the image black and white with grayscale(1)
    // Then we use sepia and hue-rotate to shift to the desired color
    // Finally adjust saturation and brightness for better results
    filterString += filterString ? " " : "";
    // Different color treatment strategies based on the color
    if (color.startsWith("#")) {
      // For hex colors
      const hueValue = getHueFromHex(color);
      filterString += `grayscale(1) sepia(1) hue-rotate(${hueValue}) saturate(5)`;
    } else {
      // For named colors, just add a simple filter
      filterString += "grayscale(0.5) brightness(1.2)";

      // Use a background-color and mix-blend-mode for named colors
      iconStyle.backgroundColor = color;
      iconStyle.mixBlendMode = "color-burn";
      iconStyle.padding = "1px";
      iconStyle.borderRadius = "4px";
    }
  }

  if (filterString) {
    iconStyle.filter = filterString;
  }

  return <img src={src} alt={alt} className={className} style={iconStyle} />;
};

// Helper function to convert hex color to hue angle for filter
function getHueFromHex(hex: string): string {
  // Remove # if present
  hex = hex.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find the maximum and minimum values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Calculate hue
  let h = 0;
  if (max === min) {
    h = 0; // achromatic
  } else {
    const d = max - min;
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  // Convert to degrees and return
  return `${Math.round(h * 360)}deg`;
}

export default SVGIcon;
