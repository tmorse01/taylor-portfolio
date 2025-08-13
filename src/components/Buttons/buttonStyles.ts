/**
 * Shared button styles for Button and LinkButton components
 */

export const baseStyles =
  "inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg shadow h-9 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 hover:scale-105";

export const primaryStyles =
  "text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] focus-visible:ring-blue-600 shadow hover:shadow-md dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:scale-105 dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:focus-visible:ring-blue-600";

export const basicStyles =
  "text-blue-600 bg-blue-50 border-2 border-blue-600 hover:bg-blue-100 hover:border-blue-700 hover:text-blue-700 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] focus-visible:ring-blue-600 dark:text-blue-400 dark:bg-blue-950 dark:border-blue-400 dark:hover:bg-blue-900 dark:hover:border-blue-300 dark:hover:text-blue-300 dark:hover:scale-105 dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:focus-visible:ring-blue-600";

export const ghostButtonStyles =
  "bg-transparent border border-white/20 backdrop-blur-sm text-white/70 hover:bg-white/10 hover:border-white/60 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300";
/**
 * Get the appropriate style based on variant
 */
export const getButtonStyles = (primary?: boolean, basic?: boolean): string => {
  return primary ? primaryStyles : basic ? basicStyles : "";
};
