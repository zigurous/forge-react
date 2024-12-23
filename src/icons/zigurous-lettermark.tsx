import React from 'react';

export default function ZigurousLettermark({
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...rest}>
      <polygon points="382.81 331.67 382.81 384.03 311.24 384.03 347.9 331.67 382.81 331.67" />
      <polygon points="380.48 128.03 237.93 331.67 312.99 331.67 276.33 384.03 129.13 384.03 271.68 180.39 308.33 128.03 380.48 128.03" />
      <polygon points="272.26 128.03 235.6 180.39 150.08 180.39 150.08 128.03 272.26 128.03" />
    </svg>
  );
}
