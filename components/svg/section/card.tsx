import React from 'react';
import type { SVGProps } from 'react';

export function CarbonNotebookReference(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 20v2h3.586L2 27.586L3.414 29L9 23.414V27h2v-7zm15-10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"
      ></path>
      <path
        fill="currentColor"
        d="M28 5H4a2 2 0 0 0-2 2v10h2V7h11v20h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M17 25V7h11l.002 18Z"
      ></path>
    </svg>
  );
}
