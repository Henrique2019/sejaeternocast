import React from 'react'

interface LogoProps {
  onCLick?: () => void
}

const Logo: React.FC<LogoProps> = ({ onCLick}) => {
  return (
    <svg
      onClick={onCLick}
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
      width="163"
      height="40"
      fill="none"
      viewBox="0 0 163 40"
    >
     
      <g clipPath="url(#_clipPath_4na3m9KeTxJ2VowP4nTVJWPiLOJUvtbp)">
        <path
          fill="var(--text)"
          style={{transition: '.2s'}}
          d="M 63.615 27.078 C 62.688 27.078 61.885 26.921 61.205 26.608 C 60.518 26.295 59.988 25.858 59.615 25.298 C 59.248 24.731 59.065 24.065 59.065 23.298 L 61.765 23.298 C 61.765 23.745 61.935 24.095 62.275 24.348 C 62.615 24.608 63.078 24.738 63.665 24.738 C 64.232 24.738 64.675 24.611 64.995 24.358 C 65.308 24.105 65.465 23.758 65.465 23.318 C 65.465 22.931 65.345 22.601 65.105 22.328 C 64.865 22.048 64.532 21.861 64.105 21.768 L 62.765 21.458 C 61.652 21.198 60.785 20.711 60.165 19.998 C 59.552 19.285 59.245 18.411 59.245 17.378 C 59.245 16.611 59.422 15.941 59.775 15.368 C 60.128 14.801 60.628 14.361 61.275 14.048 C 61.922 13.735 62.688 13.578 63.575 13.578 C 64.922 13.578 65.988 13.911 66.775 14.578 C 67.562 15.245 67.955 16.141 67.955 17.268 L 65.255 17.268 C 65.255 16.848 65.108 16.518 64.815 16.278 C 64.522 16.038 64.098 15.918 63.545 15.918 C 63.025 15.918 62.628 16.035 62.355 16.268 C 62.082 16.501 61.945 16.835 61.945 17.268 C 61.945 17.655 62.055 17.981 62.275 18.248 C 62.495 18.521 62.808 18.705 63.215 18.798 L 64.625 19.118 C 65.785 19.385 66.665 19.861 67.265 20.548 C 67.865 21.241 68.165 22.121 68.165 23.188 C 68.165 23.955 67.978 24.635 67.605 25.228 C 67.225 25.815 66.695 26.268 66.015 26.588 C 65.342 26.915 64.542 27.078 63.615 27.078 ZM 73.235 27.078 C 72.355 27.078 71.588 26.911 70.935 26.578 C 70.282 26.251 69.778 25.791 69.425 25.198 C 69.072 24.605 68.895 23.911 68.895 23.118 L 68.895 20.778 C 68.895 19.985 69.072 19.291 69.425 18.698 C 69.778 18.105 70.282 17.641 70.935 17.308 C 71.588 16.981 72.355 16.818 73.235 16.818 C 74.108 16.818 74.868 16.981 75.515 17.308 C 76.155 17.641 76.652 18.105 77.005 18.698 C 77.358 19.291 77.535 19.985 77.535 20.778 L 77.535 22.578 L 71.465 22.578 L 71.465 23.118 C 71.465 23.745 71.615 24.215 71.915 24.528 C 72.215 24.848 72.665 25.008 73.265 25.008 C 73.685 25.008 74.025 24.935 74.285 24.788 C 74.545 24.648 74.715 24.451 74.795 24.198 L 77.445 24.198 C 77.232 25.065 76.742 25.761 75.975 26.288 C 75.215 26.815 74.302 27.078 73.235 27.078 Z M 75.145 21.008 L 74.965 21.188 L 74.965 20.738 C 74.965 20.131 74.822 19.665 74.535 19.338 C 74.255 19.011 73.822 18.848 73.235 18.848 C 72.648 18.848 72.208 19.018 71.915 19.358 C 71.615 19.691 71.465 20.165 71.465 20.778 L 71.465 21.048 L 75.145 21.008 ZM 81.935 30.138 L 78.855 30.138 L 78.855 27.618 L 81.735 27.618 C 82.228 27.618 82.605 27.485 82.865 27.218 C 83.132 26.945 83.265 26.568 83.265 26.088 L 83.265 19.518 L 79.395 19.518 L 79.395 16.998 L 85.965 16.998 L 85.965 26.178 C 85.965 27.405 85.605 28.371 84.885 29.078 C 84.165 29.785 83.182 30.138 81.935 30.138 Z M 84.525 15.428 C 84.032 15.428 83.638 15.305 83.345 15.058 C 83.052 14.805 82.905 14.461 82.905 14.028 C 82.905 13.595 83.052 13.251 83.345 12.998 C 83.638 12.751 84.032 12.628 84.525 12.628 C 85.018 12.628 85.412 12.751 85.705 12.998 C 85.998 13.251 86.145 13.595 86.145 14.028 C 86.145 14.461 85.998 14.805 85.705 15.058 C 85.412 15.305 85.018 15.428 84.525 15.428 ZM 91.135 27.078 C 90.142 27.078 89.355 26.808 88.775 26.268 C 88.188 25.728 87.895 24.995 87.895 24.068 C 87.895 23.075 88.242 22.311 88.935 21.778 C 89.622 21.245 90.615 20.978 91.915 20.978 L 93.965 20.978 L 93.965 20.238 C 93.965 19.851 93.828 19.545 93.555 19.318 C 93.288 19.091 92.925 18.978 92.465 18.978 C 92.045 18.978 91.698 19.075 91.425 19.268 C 91.152 19.461 90.985 19.725 90.925 20.058 L 88.315 20.058 C 88.422 19.065 88.855 18.275 89.615 17.688 C 90.375 17.108 91.355 16.818 92.555 16.818 C 93.815 16.818 94.815 17.128 95.555 17.748 C 96.295 18.361 96.665 19.191 96.665 20.238 L 96.665 26.898 L 94.055 26.898 L 94.055 25.278 L 93.625 25.278 L 94.075 24.648 C 94.075 25.395 93.808 25.985 93.275 26.418 C 92.735 26.858 92.022 27.078 91.135 27.078 Z M 92.145 25.098 C 92.672 25.098 93.108 24.958 93.455 24.678 C 93.795 24.391 93.965 24.021 93.965 23.568 L 93.965 22.508 L 91.965 22.508 C 91.558 22.508 91.228 22.625 90.975 22.858 C 90.722 23.091 90.595 23.401 90.595 23.788 C 90.595 24.195 90.735 24.515 91.015 24.748 C 91.288 24.981 91.665 25.098 92.145 25.098 ZM 112.055 26.898 L 103.955 26.898 L 103.955 13.758 L 112.055 13.758 L 112.055 16.058 L 106.605 16.058 L 106.605 19.018 L 111.425 19.018 L 111.425 21.318 L 106.605 21.318 L 106.605 24.598 L 112.055 24.598 L 112.055 26.898 ZM 121.565 26.898 L 118.595 26.898 C 117.588 26.898 116.795 26.611 116.215 26.038 C 115.642 25.458 115.355 24.665 115.355 23.658 L 115.355 19.428 L 112.745 19.428 L 112.745 16.998 L 115.355 16.998 L 115.355 14.208 L 118.055 14.208 L 118.055 16.998 L 121.745 16.998 L 121.745 19.428 L 118.055 19.428 L 118.055 23.658 C 118.055 24.198 118.325 24.468 118.865 24.468 L 121.565 24.468 L 121.565 26.898 ZM 127.135 27.078 C 126.255 27.078 125.488 26.911 124.835 26.578 C 124.182 26.251 123.678 25.791 123.325 25.198 C 122.972 24.605 122.795 23.911 122.795 23.118 L 122.795 20.778 C 122.795 19.985 122.972 19.291 123.325 18.698 C 123.678 18.105 124.182 17.641 124.835 17.308 C 125.488 16.981 126.255 16.818 127.135 16.818 C 128.008 16.818 128.768 16.981 129.415 17.308 C 130.055 17.641 130.552 18.105 130.905 18.698 C 131.258 19.291 131.435 19.985 131.435 20.778 L 131.435 22.578 L 125.365 22.578 L 125.365 23.118 C 125.365 23.745 125.515 24.215 125.815 24.528 C 126.115 24.848 126.565 25.008 127.165 25.008 C 127.585 25.008 127.925 24.935 128.185 24.788 C 128.445 24.648 128.615 24.451 128.695 24.198 L 131.345 24.198 C 131.132 25.065 130.642 25.761 129.875 26.288 C 129.115 26.815 128.202 27.078 127.135 27.078 Z M 129.045 21.008 L 128.865 21.188 L 128.865 20.738 C 128.865 20.131 128.722 19.665 128.435 19.338 C 128.155 19.011 127.722 18.848 127.135 18.848 C 126.548 18.848 126.108 19.018 125.815 19.358 C 125.515 19.691 125.365 20.165 125.365 20.778 L 125.365 21.048 L 129.045 21.008 ZM 135.495 26.898 L 132.795 26.898 L 132.795 16.998 L 135.315 16.998 L 135.315 18.888 L 135.995 18.888 L 135.225 20.038 C 135.225 18.971 135.468 18.168 135.955 17.628 C 136.448 17.088 137.168 16.818 138.115 16.818 C 139.208 16.818 140.058 17.148 140.665 17.808 C 141.272 18.468 141.575 19.398 141.575 20.598 L 141.575 21.408 L 138.695 21.408 L 138.695 20.778 C 138.695 20.238 138.548 19.818 138.255 19.518 C 137.962 19.218 137.568 19.068 137.075 19.068 C 136.562 19.068 136.168 19.218 135.895 19.518 C 135.628 19.818 135.495 20.238 135.495 20.778 L 135.495 26.898 ZM 144.805 26.898 L 142.105 26.898 L 142.105 16.998 L 144.715 16.998 L 144.715 18.888 L 145.505 18.888 L 144.715 19.518 C 144.715 18.678 144.955 18.018 145.435 17.538 C 145.915 17.058 146.562 16.818 147.375 16.818 C 148.335 16.818 149.108 17.155 149.695 17.828 C 150.275 18.501 150.565 19.395 150.565 20.508 L 150.565 26.898 L 147.865 26.898 L 147.865 20.778 C 147.865 20.265 147.728 19.865 147.455 19.578 C 147.188 19.298 146.808 19.158 146.315 19.158 C 145.835 19.158 145.462 19.298 145.195 19.578 C 144.935 19.865 144.805 20.265 144.805 20.778 L 144.805 26.898 ZM 155.915 27.078 C 155.042 27.078 154.278 26.911 153.625 26.578 C 152.978 26.251 152.478 25.791 152.125 25.198 C 151.772 24.605 151.595 23.911 151.595 23.118 L 151.595 20.778 C 151.595 19.985 151.772 19.291 152.125 18.698 C 152.478 18.105 152.978 17.641 153.625 17.308 C 154.278 16.981 155.042 16.818 155.915 16.818 C 156.802 16.818 157.568 16.981 158.215 17.308 C 158.855 17.641 159.352 18.105 159.705 18.698 C 160.058 19.291 160.235 19.985 160.235 20.778 L 160.235 23.118 C 160.235 23.911 160.058 24.605 159.705 25.198 C 159.352 25.791 158.855 26.251 158.215 26.578 C 157.568 26.911 156.802 27.078 155.915 27.078 Z M 155.915 24.738 C 156.442 24.738 156.845 24.598 157.125 24.318 C 157.398 24.031 157.535 23.631 157.535 23.118 L 157.535 20.778 C 157.535 20.251 157.398 19.848 157.125 19.568 C 156.845 19.295 156.442 19.158 155.915 19.158 C 155.402 19.158 155.002 19.295 154.715 19.568 C 154.435 19.848 154.295 20.251 154.295 20.778 L 154.295 23.118 C 154.295 23.631 154.435 24.031 154.715 24.318 C 155.002 24.598 155.402 24.738 155.915 24.738 Z"
        ></path>
        <path
          fill="#494D4B"
          d="M38.125 19.888a18.038 18.038 0 01-2.991 10.088 1.554 1.554 0 01-2.175.458 1.55 1.55 0 01-.671-1 1.548 1.548 0 01.239-1.181A15.001 15.001 0 0019.972 5c-5.21.01-9.83 2.745-12.515 6.832a14.909 14.909 0 00.016 16.421 1.566 1.566 0 01-.444 2.165 1.564 1.564 0 01-2.165-.444A18.127 18.127 0 0120.005 1.875a18.085 18.085 0 0118.12 18.013z"
        ></path>
        <path
          fill="#04D361"
          d="M9.066 22.794l2.832 14.088a1.561 1.561 0 103.062-.616l-2.832-14.087a1.562 1.562 0 10-3.062.615z"
        ></path>
        <path
          fill="#494D4B"
          d="M11.844 36.564l-.718.145A4.268 4.268 0 016.1 33.367l-1.029-5.111a4.271 4.271 0 013.342-5.027l.718-.145 1.259 6.257 1.454 7.223z"
        ></path>
        <path
          fill="#494D4B"
          d="M11.844 36.564l-.718.145a4.268 4.268 0 01-4.969-3.096 39.615 39.615 0 004.233-4.272l1.454 7.223zM36.148 27.088l-.371 1.838c-.202.358-.416.708-.643 1.05a1.546 1.546 0 01-.992.683 1.548 1.548 0 01-1.183-.225 1.55 1.55 0 01-.671-1 1.553 1.553 0 01.239-1.181 14.894 14.894 0 002.178-5.279 4.27 4.27 0 011.443 4.114z"
        ></path>
        <path
          fill="#8257E5"
          d="M34.2953 8.82971L32.0539 11.0711C30.6573 9.1825 28.836 7.64891 26.7371 6.59426C24.6383 5.53962 22.3208 4.99349 19.9719 5.00002C14.7617 5.01017 10.1422 7.74533 7.45703 11.832L5.18359 9.55861C6.82274 7.22938 8.98843 5.31984 11.5046 3.98527C14.0207 2.65069 16.8163 1.92875 19.6641 1.87814C19.7781 1.8758 19.8914 1.87502 20.0047 1.87502C22.7591 1.86885 25.4786 2.49223 27.9553 3.69756C30.4321 4.9029 32.6006 6.6583 34.2953 8.82971Z"
        ></path>
        <path
          fill="#04D361"
          d="M27.846 22.164l-2.831 14.087a1.561 1.561 0 103.062.616l2.832-14.088a1.562 1.562 0 00-3.063-.615z"
        ></path>
        <path
          fill="#494D4B"
          d="M34.929 28.256L33.9 33.367a4.265 4.265 0 01-5.026 3.342l-.718-.145.744-3.693 1.97-9.787.718.145a4.273 4.273 0 012.948 2.224c.446.862.584 1.851.393 2.803z"
        ></path>
        <path
          fill="#494D4B"
          d="M34.929 28.256L33.9 33.367a4.265 4.265 0 01-5.026 3.342l-.718-.145.744-3.693a43.214 43.214 0 005.636-7.418c.446.862.584 1.851.393 2.803z"
        ></path>
      </g>
    </svg>
  )
}

export default Logo