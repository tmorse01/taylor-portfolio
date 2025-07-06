/**
 * Shared button styles for Button and LinkButton components
 */

export const baseStyles =
  "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg shadow h-9 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:scale-105";

export const primaryStyles =
  "text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-[0_0_20px_rgba(56,224,231,0.6)] focus-visible:ring-purple-600";

export const basicStyles =
  "text-blue-500 border-2 border-blue-500 hover:border-purple-600 hover:text-purple-600 hover:shadow-[0_0_15px_rgba(56,224,231,0.5)] focus-visible:ring-purple-600";

export const ghostButtonStyles =
  "bg-transparent border border-white/20 backdrop-blur-sm text-white/70 hover:bg-white/10 hover:border-white/60 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300";
/**
 * Get the appropriate style based on variant
 */
export const getButtonStyles = (primary?: boolean, basic?: boolean): string => {
  return primary ? primaryStyles : basic ? basicStyles : "";
};
