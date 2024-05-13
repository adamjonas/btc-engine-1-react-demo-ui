import * as React from "react";
import { useTheme } from "@/context/Theme";

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1.75781 6H10.2431M6.00045 1.75736V10.2426' stroke={isDark ? "#1c1c1e" : "#FAFAFA"} stroke-width='2' stroke-linecap='round' />
    </svg>
  );
};

export default PlusIcon;
