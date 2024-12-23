import React from 'react';

export default function EmailIcon({ ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      role="img"
      viewBox="0 0 184 184"
      width="24px"
      height="24px"
      transform="scale(1.1)"
      {...rest}
    >
      <title>Email</title>
      <path d="M160.746,24.61H23.254C10.432,24.61,0,35.042,0,47.864v88.271c0,12.822,10.432,23.254,23.254,23.254h137.492c12.822,0,23.254-10.432,23.254-23.254V47.864C184,35.042,173.568,24.61,160.746,24.61z M157.113,39.61L92,89.909L26.887,39.61H157.113z M160.746,144.39H23.254c-4.551,0-8.254-3.703-8.254-8.254V49.382l72.415,55.94c1.35,1.043,2.968,1.564,4.585,1.564s3.235-0.521,4.585-1.564L169,49.382v86.753C169,140.687,165.297,144.39,160.746,144.39z" />
    </svg>
  );
}
