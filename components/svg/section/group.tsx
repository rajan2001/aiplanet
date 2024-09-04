import React from 'react';
import type { SVGProps } from 'react';

export function LetsIconsGroupFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        cx={12}
        cy={9}
        r={4}
        fill="currentColor"
      ></circle>
      <circle
        cx={17}
        cy={9}
        r={3}
        fill="currentColor"
      ></circle>
      <circle
        cx={7}
        cy={9}
        r={3}
        fill="currentColor"
      ></circle>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.569 18h2.326c.592 0 1.045-.51.902-1.084C20.428 15.446 19.448 13 17 13c-.886 0-1.58.32-2.122.8c1.508.977 2.287 2.69 2.69 4.2m-8.446-4.2A3.1 3.1 0 0 0 7 13c-2.448 0-3.428 2.446-3.797 3.916c-.143.574.31 1.084.902 1.084h2.327c.403-1.51 1.182-3.223 2.69-4.2"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="M12 14c3.709 0 4.666 3.301 4.914 5.006c.08.547-.362.994-.914.994H8c-.552 0-.993-.447-.914-.994C7.334 17.301 8.291 14 12 14"
      ></path>
    </svg>
  );
}
