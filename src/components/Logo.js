import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/logo.css';

const images = {
  logo: {
    dark:
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='zigurous-logo-dark' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1792 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D.cls-2%7Bfill:gray;%7D.cls-3%7Bfill:url(%23linear-gradient);%7D.cls-4%7Bfill:url(%23linear-gradient-2);%7D%3C/style%3E%3ClinearGradient id='linear-gradient' x1='126.15' y1='372.61' x2='321.85' y2='139.39' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23001a4d'/%3E%3Cstop offset='0.14' stop-color='%23002c5f'/%3E%3Cstop offset='0.36' stop-color='%23047'/%3E%3Cstop offset='0.5' stop-color='%23004d80'/%3E%3Cstop offset='0.73' stop-color='%23005680'/%3E%3Cstop offset='1' stop-color='%23006680'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear-gradient-2' x1='130.8' y1='367.07' x2='319.83' y2='141.79' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23039'/%3E%3Cstop offset='0.11' stop-color='%230050b6'/%3E%3Cstop offset='0.28' stop-color='%230078de'/%3E%3Cstop offset='0.42' stop-color='%230090f6'/%3E%3Cstop offset='0.5' stop-color='%2309f'/%3E%3Cstop offset='0.64' stop-color='%2300a2ff'/%3E%3Cstop offset='0.86' stop-color='%2300baff'/%3E%3Cstop offset='1' stop-color='%230cf'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class='cls-1' d='M622,127.55v35.71L498,346.81H627v39.56H440V349.5L563.65,167.1H441.92V127.55Z'/%3E%3Cpath class='cls-1' d='M636.26,133.31a27.65,27.65,0,1,1,55.3,0,27.11,27.11,0,0,1-8.07,20,27.81,27.81,0,0,1-39.16,0A27.11,27.11,0,0,1,636.26,133.31Zm4.61,253.06V191.68H687V386.37Z'/%3E%3Cpath class='cls-1' d='M836,191.68H882.1v177q0,46.08-26.69,69.31t-67.78,23.24q-38.4,0-67.2-13.83V400.57Q746.55,419,783,419q53,0,53-50.69v-16.9q-17.67,28.8-55.3,28.8-32.64,0-55.87-24t-23.23-69.69q0-42.24,22.08-69.7t58.17-27.46q36.48,0,54.15,30.34ZM791.86,342.59q18.81,0,31.48-14.78T836,289.21q0-31.09-12.29-45.69t-31.11-14.59q-20,0-31.48,15.55t-11.52,42q0,27.27,11.9,41.66T791.86,342.59Z'/%3E%3Cpath class='cls-1' d='M1026.06,191.68h46.46V386.37h-46.46V354.49q-15.36,33.79-59.91,33.8-29.56,0-46.08-16.9t-16.51-48V191.68h46.08v121q0,18.44,9,28t24.76,9.6q20,0,31.3-13.44t11.33-40.71Z'/%3E%3Cpath class='cls-1' d='M1142.52,191.68v34.56q13.44-36.09,49.15-36.1a60.55,60.55,0,0,1,13.06,1.15v44.55a48.64,48.64,0,0,0-19.59-3.84q-18.81,0-30.72,15.36t-11.9,38.4V386.37h-46.46l.38-194.69Z'/%3E%3Cpath class='cls-1' d='M1291.36,389.44q-44.16,0-68.93-27.65t-24.77-70.66q0-44.53,25.73-73.53t68-29q44.92,0,69.5,28.22t24.58,71.62q0,44.16-24.77,72.57T1291.36,389.44Zm0-163.2q-21.88,0-33.6,18T1246,289.6q0,26.88,11.91,44.93t33.79,18q22.65,0,34.18-17.66T1337.44,290q0-28-11.14-45.89T1291.36,226.24Z'/%3E%3Cpath class='cls-1' d='M1520.68,191.68h46.46V386.37h-46.46V354.49q-15.36,33.79-59.91,33.8-29.57,0-46.08-16.9t-16.51-48V191.68h46.08v121q0,18.44,9,28t24.76,9.6q20,0,31.3-13.44t11.33-40.71Z'/%3E%3Cpath class='cls-1' d='M1706.49,197.82v40.71q-19.2-11.52-48-11.52-11.91,0-18.62,5.18a16,16,0,0,0-6.72,13.25,16.74,16.74,0,0,0,1,5.76,13.9,13.9,0,0,0,3.45,5.18c1.66,1.67,3.27,3.14,4.8,4.42a34.1,34.1,0,0,0,6.53,4l7.3,3.65q3.06,1.53,8.44,3.84c3.59,1.53,6.4,2.82,8.45,3.84q20.36,10,32.26,22.27t11.9,31.87q0,27.27-19.58,42.63t-52.23,15.36q-36.09,0-58.36-11.91V334.14q25.71,17.28,55.68,17.28,12.66,0,19.77-4.8a15.14,15.14,0,0,0,7.11-13.25,17.84,17.84,0,0,0-2.31-9q-2.29-4-8.83-7.87t-10.18-5.57q-3.64-1.73-14.4-6.34a7.56,7.56,0,0,1-1.72-.76,7.62,7.62,0,0,0-1.73-.77,13.37,13.37,0,0,1-1.92-.77q-42.63-19.2-42.63-55.3,0-26.86,20.36-42.24t51.07-15.36Q1686.91,189.37,1706.49,197.82Z'/%3E%3Cpolygon class='cls-2' points='80 192 216 64 216 144 144 208 80 248 80 192'/%3E%3Cpolygon class='cls-1' points='216 64 216 144 80 248 80 192 216 64'/%3E%3Cpolygon class='cls-2' points='368 320 232 448 232 368 304 304 368 264 368 320'/%3E%3Cpolygon class='cls-1' points='368 264 368 320 256 292 368 264'/%3E%3Cpolygon class='cls-1' points='232 448 232 368 368 264 368 320 232 448'/%3E%3Cpolygon class='cls-1' points='80 248 80 192 192 220 80 248'/%3E%3Cpolygon class='cls-3' points='80 320 216 448 216 368 144 304 368 248 368 192 232 64 232 144 304 208 80 264 80 320'/%3E%3Cpolygon class='cls-4' points='368 192 232 64 232 144 312.81 205.8 80 264 80 320 216 448 216 368 135.19 306.2 368 248 368 192'/%3E%3C/svg%3E",
    light:
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='zigurous-logo-light' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 1792 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23181818;%7D.cls-2%7Bfill:url(%23linear-gradient);%7D.cls-3%7Bfill:url(%23linear-gradient-2);%7D%3C/style%3E%3ClinearGradient id='linear-gradient' x1='126.15' y1='372.61' x2='321.85' y2='139.39' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23001a4d'/%3E%3Cstop offset='0.14' stop-color='%23002c5f'/%3E%3Cstop offset='0.36' stop-color='%23047'/%3E%3Cstop offset='0.5' stop-color='%23004d80'/%3E%3Cstop offset='0.73' stop-color='%23005680'/%3E%3Cstop offset='1' stop-color='%23006680'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear-gradient-2' x1='130.8' y1='367.07' x2='319.83' y2='141.79' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23039'/%3E%3Cstop offset='0.11' stop-color='%230050b6'/%3E%3Cstop offset='0.28' stop-color='%230078de'/%3E%3Cstop offset='0.42' stop-color='%230090f6'/%3E%3Cstop offset='0.5' stop-color='%2309f'/%3E%3Cstop offset='0.64' stop-color='%2300a2ff'/%3E%3Cstop offset='0.86' stop-color='%2300baff'/%3E%3Cstop offset='1' stop-color='%230cf'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class='cls-1' d='M622,127.55v35.71L498,346.81H627v39.56H440V349.5L563.65,167.1H441.92V127.55Z'/%3E%3Cpath class='cls-1' d='M636.26,133.31a27.65,27.65,0,1,1,55.3,0,27.11,27.11,0,0,1-8.07,20,27.81,27.81,0,0,1-39.16,0A27.11,27.11,0,0,1,636.26,133.31Zm4.61,253.06V191.68H687V386.37Z'/%3E%3Cpath class='cls-1' d='M836,191.68H882.1v177q0,46.08-26.69,69.31t-67.78,23.24q-38.4,0-67.2-13.83V400.57Q746.55,419,783,419q53,0,53-50.69v-16.9q-17.67,28.8-55.3,28.8-32.64,0-55.87-24t-23.23-69.69q0-42.24,22.08-69.7t58.17-27.46q36.48,0,54.15,30.34ZM791.86,342.59q18.81,0,31.48-14.78T836,289.21q0-31.09-12.29-45.69t-31.11-14.59q-20,0-31.48,15.55t-11.52,42q0,27.27,11.9,41.66T791.86,342.59Z'/%3E%3Cpath class='cls-1' d='M1026.06,191.68h46.46V386.37h-46.46V354.49q-15.36,33.79-59.91,33.8-29.56,0-46.08-16.9t-16.51-48V191.68h46.08v121q0,18.44,9,28t24.76,9.6q20,0,31.3-13.44t11.33-40.71Z'/%3E%3Cpath class='cls-1' d='M1142.52,191.68v34.56q13.44-36.09,49.15-36.1a60.55,60.55,0,0,1,13.06,1.15v44.55a48.64,48.64,0,0,0-19.59-3.84q-18.81,0-30.72,15.36t-11.9,38.4V386.37h-46.46l.38-194.69Z'/%3E%3Cpath class='cls-1' d='M1291.36,389.44q-44.16,0-68.93-27.65t-24.77-70.66q0-44.53,25.73-73.53t68-29q44.92,0,69.5,28.22t24.58,71.62q0,44.16-24.77,72.57T1291.36,389.44Zm0-163.2q-21.88,0-33.6,18T1246,289.6q0,26.88,11.91,44.93t33.79,18q22.65,0,34.18-17.66T1337.44,290q0-28-11.14-45.89T1291.36,226.24Z'/%3E%3Cpath class='cls-1' d='M1520.68,191.68h46.46V386.37h-46.46V354.49q-15.36,33.79-59.91,33.8-29.57,0-46.08-16.9t-16.51-48V191.68h46.08v121q0,18.44,9,28t24.76,9.6q20,0,31.3-13.44t11.33-40.71Z'/%3E%3Cpath class='cls-1' d='M1706.49,197.82v40.71q-19.2-11.52-48-11.52-11.91,0-18.62,5.18a16,16,0,0,0-6.72,13.25,16.74,16.74,0,0,0,1,5.76,13.9,13.9,0,0,0,3.45,5.18c1.66,1.67,3.27,3.14,4.8,4.42a34.1,34.1,0,0,0,6.53,4l7.3,3.65q3.06,1.53,8.44,3.84c3.59,1.53,6.4,2.82,8.45,3.84q20.36,10,32.26,22.27t11.9,31.87q0,27.27-19.58,42.63t-52.23,15.36q-36.09,0-58.36-11.91V334.14q25.71,17.28,55.68,17.28,12.66,0,19.77-4.8a15.14,15.14,0,0,0,7.11-13.25,17.84,17.84,0,0,0-2.31-9q-2.29-4-8.83-7.87t-10.18-5.57q-3.64-1.73-14.4-6.34a7.56,7.56,0,0,1-1.72-.76,7.62,7.62,0,0,0-1.73-.77,13.37,13.37,0,0,1-1.92-.77q-42.63-19.2-42.63-55.3,0-26.86,20.36-42.24t51.07-15.36Q1686.91,189.37,1706.49,197.82Z'/%3E%3Cpolygon points='80 192 216 64 216 144 144 208 80 248 80 192'/%3E%3Cpolygon class='cls-1' points='216 64 216 144 80 248 80 192 216 64'/%3E%3Cpolygon points='368 320 232 448 232 368 304 304 368 264 368 320'/%3E%3Cpolygon class='cls-1' points='368 264 368 320 256 292 368 264'/%3E%3Cpolygon class='cls-1' points='232 448 232 368 368 264 368 320 232 448'/%3E%3Cpolygon class='cls-1' points='80 248 80 192 192 220 80 248'/%3E%3Cpolygon class='cls-2' points='80 320 216 448 216 368 144 304 368 248 368 192 232 64 232 144 304 208 80 264 80 320'/%3E%3Cpolygon class='cls-3' points='368 192 232 64 232 144 312.81 205.8 80 264 80 320 216 448 216 368 135.19 306.2 368 248 368 192'/%3E%3C/svg%3E",
    'mono-black':
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='zigurous-logo-mono-black' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23181818;%7D%3C/style%3E%3C/defs%3E%3Cpolygon class='cls-1' points='80 192 216 64 216 144 144 208 80 248 80 192'/%3E%3Cpolygon class='cls-1' points='216 64 216 144 80 248 80 192 216 64'/%3E%3Cpolygon class='cls-1' points='368 320 232 448 232 368 304 304 368 264 368 320'/%3E%3Cpolygon class='cls-1' points='368 264 368 320 256 292 368 264'/%3E%3Cpolygon class='cls-1' points='232 448 232 368 368 264 368 320 232 448'/%3E%3Cpolygon class='cls-1' points='80 248 80 192 192 220 80 248'/%3E%3Cpolygon class='cls-1' points='80 320 216 448 216 368 144 304 368 248 368 192 232 64 232 144 304 208 80 264 80 320'/%3E%3Cpolygon class='cls-1' points='80 264 80 320 368 248 368 192 80 264'/%3E%3Cpolygon class='cls-1' points='232 64 232 144 368 248 368 192 232 64'/%3E%3Cpolygon class='cls-1' points='216 448 216 368 80 264 80 320 216 448'/%3E%3Cpath class='cls-1' d='M622,127.55v35.71L498,346.81H627v39.56H440V349.5L563.65,167.1H441.92V127.55Z'/%3E%3Cpath class='cls-1' d='M636.26,133.31a27.65,27.65,0,1,1,55.3,0,27.11,27.11,0,0,1-8.07,20,27.81,27.81,0,0,1-39.16,0A27.11,27.11,0,0,1,636.26,133.31Zm4.61,253.06V191.68H687V386.37Z'/%3E%3Cpath class='cls-1' d='M836,191.68H882.1v177q0,46.08-26.69,69.31t-67.78,23.24q-38.4,0-67.2-13.83V400.57Q746.55,419,783,419q53,0,53-50.69v-16.9q-17.67,28.8-55.3,28.8-32.64,0-55.87-24t-23.23-69.69q0-42.24,22.08-69.7t58.17-27.46q36.48,0,54.15,30.34ZM791.86,342.59q18.81,0,31.48-14.79T836,289.21q0-31.09-12.29-45.69t-31.11-14.59q-20,0-31.48,15.55t-11.52,42q0,27.27,11.9,41.66T791.86,342.59Z'/%3E%3Cpath class='cls-1' d='M1026.06,191.68h46.46V386.37h-46.46V354.49q-15.36,33.79-59.91,33.8-29.56,0-46.08-16.9t-16.51-48V191.68h46.08v121q0,18.44,9,28t24.76,9.6q20,0,31.3-13.44t11.33-40.71Z'/%3E%3Cpath class='cls-1' d='M1142.52,191.68v34.56q13.44-36.09,49.15-36.1a60.55,60.55,0,0,1,13.06,1.15v44.55a48.64,48.64,0,0,0-19.59-3.84q-18.81,0-30.72,15.36t-11.9,38.4V386.37h-46.46l.38-194.69Z'/%3E%3Cpath class='cls-1' d='M1291.36,389.44q-44.16,0-68.93-27.65t-24.77-70.66q0-44.53,25.73-73.53t68-29q44.92,0,69.5,28.22t24.58,71.62q0,44.16-24.77,72.57T1291.36,389.44Zm0-163.2q-21.88,0-33.6,18T1246,289.6q0,26.88,11.91,44.93t33.79,18q22.65,0,34.18-17.66T1337.44,290q0-28-11.14-45.89T1291.36,226.24Z'/%3E%3Cpath class='cls-1' d='M1520.68,191.68h46.46V386.37h-46.46V354.49q-15.36,33.79-59.91,33.8-29.57,0-46.08-16.9t-16.51-48V191.68h46.08v121q0,18.44,9,28t24.76,9.6q20,0,31.3-13.44t11.33-40.71Z'/%3E%3Cpath class='cls-1' d='M1706.49,197.82v40.71q-19.2-11.52-48-11.52-11.91,0-18.62,5.18a16,16,0,0,0-6.72,13.25,16.74,16.74,0,0,0,1,5.76,13.9,13.9,0,0,0,3.45,5.18c1.66,1.67,3.27,3.14,4.8,4.42a34.1,34.1,0,0,0,6.53,4l7.3,3.65q3.06,1.53,8.44,3.84c3.59,1.53,6.4,2.82,8.45,3.84q20.36,10,32.26,22.27t11.9,31.87q0,27.27-19.58,42.63t-52.23,15.36q-36.09,0-58.36-11.91V334.14q25.71,17.28,55.68,17.28,12.66,0,19.77-4.8a15.14,15.14,0,0,0,7.11-13.25,17.84,17.84,0,0,0-2.31-9q-2.29-4-8.83-7.87t-10.18-5.57q-3.64-1.73-14.4-6.34a7.1,7.1,0,0,1-1.72-.77,7.67,7.67,0,0,0-1.73-.76,13.37,13.37,0,0,1-1.92-.77q-42.63-19.2-42.63-55.3,0-26.86,20.36-42.24t51.07-15.36Q1686.91,189.37,1706.49,197.82Z'/%3E%3C/svg%3E",
    'mono-white':
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='zigurous-logo-mono-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1792 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpolygon class='cls-1' points='80 192 216 64 216 144 144 208 80 248 80 192'/%3E%3Cpolygon class='cls-1' points='216 64 216 144 80 248 80 192 216 64'/%3E%3Cpolygon class='cls-1' points='368 320 232 448 232 368 304 304 368 264 368 320'/%3E%3Cpolygon class='cls-1' points='368 264 368 320 256 292 368 264'/%3E%3Cpolygon class='cls-1' points='232 448 232 368 368 264 368 320 232 448'/%3E%3Cpolygon class='cls-1' points='80 248 80 192 192 220 80 248'/%3E%3Cpolygon class='cls-1' points='80 320 216 448 216 368 144 304 368 248 368 192 232 64 232 144 304 208 80 264 80 320'/%3E%3Cpolygon class='cls-1' points='80 264 80 320 368 248 368 192 80 264'/%3E%3Cpolygon class='cls-1' points='232 64 232 144 368 248 368 192 232 64'/%3E%3Cpolygon class='cls-1' points='216 448 216 368 80 264 80 320 216 448'/%3E%3Cpath class='cls-1' d='M622,127.55v35.71L498,346.81H627v39.56H440V349.5L563.65,167.1H441.92V127.55Z'/%3E%3Cpath class='cls-1' d='M636.26,133.31a27.65,27.65,0,1,1,55.3,0,27.11,27.11,0,0,1-8.07,20,27.81,27.81,0,0,1-39.16,0A27.11,27.11,0,0,1,636.26,133.31Zm4.61,253.06V191.68H687V386.37Z'/%3E%3Cpath class='cls-1' d='M836,191.68H882.1v177q0,46.08-26.69,69.31t-67.78,23.24q-38.4,0-67.2-13.83V400.57Q746.55,419,783,419q53,0,53-50.69v-16.9q-17.67,28.8-55.3,28.8-32.64,0-55.87-24t-23.23-69.69q0-42.24,22.08-69.7t58.17-27.46q36.48,0,54.15,30.34ZM791.86,342.59q18.81,0,31.48-14.79T836,289.21q0-31.09-12.29-45.69t-31.11-14.59q-20,0-31.48,15.55t-11.52,42q0,27.27,11.9,41.66T791.86,342.59Z'/%3E%3Cpath class='cls-1' d='M1026.06,191.68h46.46V386.37h-46.46V354.49q-15.36,33.79-59.91,33.8-29.56,0-46.08-16.9t-16.51-48V191.68h46.08v121q0,18.44,9,28t24.76,9.6q20,0,31.3-13.44t11.33-40.71Z'/%3E%3Cpath class='cls-1' d='M1142.52,191.68v34.56q13.44-36.09,49.15-36.1a60.55,60.55,0,0,1,13.06,1.15v44.55a48.64,48.64,0,0,0-19.59-3.84q-18.81,0-30.72,15.36t-11.9,38.4V386.37h-46.46l.38-194.69Z'/%3E%3Cpath class='cls-1' d='M1291.36,389.44q-44.16,0-68.93-27.65t-24.77-70.66q0-44.53,25.73-73.53t68-29q44.92,0,69.5,28.22t24.58,71.62q0,44.16-24.77,72.57T1291.36,389.44Zm0-163.2q-21.88,0-33.6,18T1246,289.6q0,26.88,11.91,44.93t33.79,18q22.65,0,34.18-17.66T1337.44,290q0-28-11.14-45.89T1291.36,226.24Z'/%3E%3Cpath class='cls-1' d='M1520.68,191.68h46.46V386.37h-46.46V354.49q-15.36,33.79-59.91,33.8-29.57,0-46.08-16.9t-16.51-48V191.68h46.08v121q0,18.44,9,28t24.76,9.6q20,0,31.3-13.44t11.33-40.71Z'/%3E%3Cpath class='cls-1' d='M1706.49,197.82v40.71q-19.2-11.52-48-11.52-11.91,0-18.62,5.18a16,16,0,0,0-6.72,13.25,16.74,16.74,0,0,0,1,5.76,13.9,13.9,0,0,0,3.45,5.18c1.66,1.67,3.27,3.14,4.8,4.42a34.1,34.1,0,0,0,6.53,4l7.3,3.65q3.06,1.53,8.44,3.84c3.59,1.53,6.4,2.82,8.45,3.84q20.36,10,32.26,22.27t11.9,31.87q0,27.27-19.58,42.63t-52.23,15.36q-36.09,0-58.36-11.91V334.14q25.71,17.28,55.68,17.28,12.66,0,19.77-4.8a15.14,15.14,0,0,0,7.11-13.25,17.84,17.84,0,0,0-2.31-9q-2.29-4-8.83-7.87t-10.18-5.57q-3.64-1.73-14.4-6.34a7.1,7.1,0,0,1-1.72-.77,7.67,7.67,0,0,0-1.73-.76,13.37,13.37,0,0,1-1.92-.77q-42.63-19.2-42.63-55.3,0-26.86,20.36-42.24t51.07-15.36Q1686.91,189.37,1706.49,197.82Z'/%3E%3C/svg%3E",
  },
  logomark: {
    dark:
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='zigurous-logomark-dark' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:gray;%7D.cls-2%7Bfill:%23fff;%7D.cls-3%7Bfill:url(%23linear-gradient);%7D.cls-4%7Bfill:url(%23linear-gradient-2);%7D%3C/style%3E%3ClinearGradient id='linear-gradient' x1='158.15' y1='372.61' x2='353.85' y2='139.39' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23001a4d'/%3E%3Cstop offset='0.14' stop-color='%23002c5f'/%3E%3Cstop offset='0.36' stop-color='%23047'/%3E%3Cstop offset='0.5' stop-color='%23004d80'/%3E%3Cstop offset='0.73' stop-color='%23005680'/%3E%3Cstop offset='1' stop-color='%23006680'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear-gradient-2' x1='162.8' y1='367.07' x2='351.83' y2='141.79' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23039'/%3E%3Cstop offset='0.11' stop-color='%230050b6'/%3E%3Cstop offset='0.28' stop-color='%230078de'/%3E%3Cstop offset='0.42' stop-color='%230090f6'/%3E%3Cstop offset='0.5' stop-color='%2309f'/%3E%3Cstop offset='0.64' stop-color='%2300a2ff'/%3E%3Cstop offset='0.86' stop-color='%2300baff'/%3E%3Cstop offset='1' stop-color='%230cf'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon class='cls-1' points='112 192 248 64 248 144 176 208 112 248 112 192'/%3E%3Cpolygon class='cls-2' points='248 64 248 144 112 248 112 192 248 64'/%3E%3Cpolygon class='cls-1' points='400 320 264 448 264 368 336 304 400 264 400 320'/%3E%3Cpolygon class='cls-2' points='400 264 400 320 288 292 400 264'/%3E%3Cpolygon class='cls-2' points='264 448 264 368 400 264 400 320 264 448'/%3E%3Cpolygon class='cls-2' points='112 248 112 192 224 220 112 248'/%3E%3Cpolygon class='cls-3' points='112 320 248 448 248 368 176 304 400 248 400 192 264 64 264 144 336 208 112 264 112 320'/%3E%3Cpolygon class='cls-4' points='400 192 264 64 264 144 344.81 205.8 112 264 112 320 248 448 248 368 167.19 306.2 400 248 400 192'/%3E%3C/svg%3E",
    light:
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='zigurous-logomark-light' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23181818;%7D.cls-2%7Bfill:url(%23linear-gradient);%7D.cls-3%7Bfill:url(%23linear-gradient-2);%7D%3C/style%3E%3ClinearGradient id='linear-gradient' x1='158.15' y1='372.61' x2='353.85' y2='139.39' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23001a4d'/%3E%3Cstop offset='0.14' stop-color='%23002c5f'/%3E%3Cstop offset='0.36' stop-color='%23047'/%3E%3Cstop offset='0.5' stop-color='%23004d80'/%3E%3Cstop offset='0.73' stop-color='%23005680'/%3E%3Cstop offset='1' stop-color='%23006680'/%3E%3C/linearGradient%3E%3ClinearGradient id='linear-gradient-2' x1='162.8' y1='367.07' x2='351.83' y2='141.79' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23039'/%3E%3Cstop offset='0.11' stop-color='%230050b6'/%3E%3Cstop offset='0.28' stop-color='%230078de'/%3E%3Cstop offset='0.42' stop-color='%230090f6'/%3E%3Cstop offset='0.5' stop-color='%2309f'/%3E%3Cstop offset='0.64' stop-color='%2300a2ff'/%3E%3Cstop offset='0.86' stop-color='%2300baff'/%3E%3Cstop offset='1' stop-color='%230cf'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='112 192 248 64 248 144 176 208 112 248 112 192'/%3E%3Cpolygon class='cls-1' points='248 64 248 144 112 248 112 192 248 64'/%3E%3Cpolygon points='400 320 264 448 264 368 336 304 400 264 400 320'/%3E%3Cpolygon class='cls-1' points='400 264 400 320 288 292 400 264'/%3E%3Cpolygon class='cls-1' points='264 448 264 368 400 264 400 320 264 448'/%3E%3Cpolygon class='cls-1' points='112 248 112 192 224 220 112 248'/%3E%3Cpolygon class='cls-2' points='112 320 248 448 248 368 176 304 400 248 400 192 264 64 264 144 336 208 112 264 112 320'/%3E%3Cpolygon class='cls-3' points='400 192 264 64 264 144 344.81 205.8 112 264 112 320 248 448 248 368 167.19 306.2 400 248 400 192'/%3E%3C/svg%3E",
    'mono-black':
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='zigurous-logomark-mono-black' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23181818;%7D%3C/style%3E%3C/defs%3E%3Cpolygon class='cls-1' points='112 192 248 64 248 144 176 208 112 248 112 192'/%3E%3Cpolygon class='cls-1' points='248 64 248 144 112 248 112 192 248 64'/%3E%3Cpolygon class='cls-1' points='400 320 264 448 264 368 336 304 400 264 400 320'/%3E%3Cpolygon class='cls-1' points='400 264 400 320 288 292 400 264'/%3E%3Cpolygon class='cls-1' points='264 448 264 368 400 264 400 320 264 448'/%3E%3Cpolygon class='cls-1' points='112 248 112 192 224 220 112 248'/%3E%3Cpolygon class='cls-1' points='112 320 248 448 248 368 176 304 400 248 400 192 264 64 264 144 336 208 112 264 112 320'/%3E%3Cpolygon class='cls-1' points='112 264 112 320 400 248 400 192 112 264'/%3E%3Cpolygon class='cls-1' points='264 64 264 144 400 248 400 192 264 64'/%3E%3Cpolygon class='cls-1' points='248 448 248 368 112 264 112 320 248 448'/%3E%3C/svg%3E",
    'mono-white':
      "data:image/svg+xml;charset=UTF-8,%3Csvg id='zigurous-logomark-mono-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpolygon class='cls-1' points='112 192 248 64 248 144 176 208 112 248 112 192'/%3E%3Cpolygon class='cls-1' points='248 64 248 144 112 248 112 192 248 64'/%3E%3Cpolygon class='cls-1' points='400 320 264 448 264 368 336 304 400 264 400 320'/%3E%3Cpolygon class='cls-1' points='400 264 400 320 288 292 400 264'/%3E%3Cpolygon class='cls-1' points='264 448 264 368 400 264 400 320 264 448'/%3E%3Cpolygon class='cls-1' points='112 248 112 192 224 220 112 248'/%3E%3Cpolygon class='cls-1' points='112 320 248 448 248 368 176 304 400 248 400 192 264 64 264 144 336 208 112 264 112 320'/%3E%3Cpolygon class='cls-1' points='112 264 112 320 400 248 400 192 112 264'/%3E%3Cpolygon class='cls-1' points='264 64 264 144 400 248 400 192 264 64'/%3E%3Cpolygon class='cls-1' points='248 448 248 368 112 264 112 320 248 448'/%3E%3C/svg%3E",
  },
};

const Logo = ({
  altText = 'Logo',
  ariaHidden = false,
  autoAdjustMargin = false,
  className,
  onClick,
  size = 'medium',
  shadowed = false,
  theme = 'dark',
  variant = 'logo',
}) => (
  <div
    className={classNames(
      'logo',
      { 'logo--shadowed': shadowed },
      { 'logo--adjust-margin': autoAdjustMargin },
      { logomark: variant === 'logomark' },
      size,
      className
    )}
  >
    {onClick ? (
      <button
        className="logo-button"
        onClick={(event) => {
          event.target.blur();
          onClick();
        }}
      >
        <img
          alt={altText}
          aria-hidden={ariaHidden}
          className="logo-image"
          src={images[variant][theme]}
        />
      </button>
    ) : (
      <img
        alt={altText}
        aria-hidden={ariaHidden}
        className="logo-image"
        src={images[variant][theme]}
      />
    )}
  </div>
);

export const logoSizes = [
  'xs',
  'extraSmall',
  'sm',
  'small',
  'md',
  'medium',
  'lg',
  'large',
  'xl',
  'extraLarge',
];

export const logoThemes = {
  undefined: 'light',
  white: 'light',
  light: 'light',
  'light-1': 'light',
  'light-2': 'light',
  'light-3': 'light',
  black: 'dark',
  dark: 'dark',
  'dark-1': 'dark',
  'dark-2': 'dark',
  'dark-3': 'dark',
  blue: 'mono-white',
};

Logo.propTypes = {
  altText: PropTypes.string,
  ariaHidden: PropTypes.bool,
  autoAdjustMargin: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(logoSizes),
  shadowed: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light', 'mono-black', 'mono-white']),
  variant: PropTypes.oneOf(['logo', 'logomark']),
};

export default Logo;
