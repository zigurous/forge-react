import React from 'react';

export default function ZigurousLogomark({
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...rest}>
      <polygon points="368.46 177.61 256 112.68 143.54 177.61 256 242.54 368.46 177.61" />
      <polygon points="128 334.39 240.46 399.32 240.46 269.46 128 204.53 128 334.39" />
      <polygon points="384 204.53 271.54 269.46 271.54 399.32 384 334.39 384 204.53" />
    </svg>
  );
}
