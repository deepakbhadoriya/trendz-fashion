import styles from './style.module.scss';

export default function Logo({ container }) {
  return (
    <svg
      viewBox="0 0 223 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles[container]}
    >
      <path
        className={styles.T}
        d="M8.73926 9.68555C7.5332 9.94531 6.41992 10.1772 5.39941 10.3813C4.9541 10.4741 4.50879 10.5576 4.06348 10.6318C3.63672 10.7061 3.22852 10.7803 2.83887 10.8545C2.44922 10.9102 2.09668 10.9565 1.78125 10.9937C1.48438 11.0308 1.26172 11.0493 1.11328 11.0493C0.797852 11.0493 0.528809 10.9937 0.306152 10.8823C0.102051 10.7524 0 10.502 0 10.1309V7.01367C0 6.66113 0.148438 6.3457 0.445312 6.06738C0.742188 5.77051 1.20605 5.62207 1.83691 5.62207H36.3765C37.0073 5.62207 37.4712 5.77051 37.7681 6.06738C38.0649 6.3457 38.2134 6.66113 38.2134 7.01367V10.1309C38.2134 10.502 38.1021 10.7524 37.8794 10.8823C37.6753 10.9937 37.4155 11.0493 37.1001 11.0493C36.9331 11.0493 36.7012 11.0308 36.4043 10.9937C36.1074 10.9565 35.7642 10.9102 35.3745 10.8545C34.9849 10.7803 34.5674 10.7061 34.1221 10.6318C33.6953 10.5576 33.2593 10.4741 32.814 10.3813C31.7935 10.1772 30.6802 9.94531 29.4741 9.68555V41.7759C29.4741 42.4067 29.4185 42.9634 29.3071 43.4458C29.1958 43.9097 28.9824 44.3086 28.667 44.6426C28.3701 44.958 27.9526 45.1992 27.4146 45.3662C26.8765 45.5146 26.1899 45.5889 25.355 45.5889H12.9419C12.0698 45.5889 11.3555 45.5054 10.7988 45.3384C10.2607 45.1714 9.83398 44.9302 9.51855 44.6147C9.22168 44.2993 9.01758 43.9004 8.90625 43.418C8.79492 42.9355 8.73926 42.3696 8.73926 41.7202V9.68555Z"
      />
      <path
        className={styles.R}
        d="M39.9668 20.9575C39.9668 20.3267 40.0225 19.77 40.1338 19.2876C40.2451 18.7866 40.4585 18.3784 40.7739 18.063C41.0894 17.7476 41.5254 17.5063 42.082 17.3394C42.6387 17.1724 43.3623 17.0889 44.2529 17.0889H56.4434C57.2969 17.0889 57.9834 17.1724 58.5029 17.3394C59.0225 17.5063 59.4307 17.7568 59.7275 18.0908C60.0244 18.4248 60.2192 18.8423 60.312 19.3433C60.4233 19.8442 60.479 20.4287 60.479 21.0967V23.1562L66.6577 17.1445C67.0659 16.7549 67.4463 16.5601 67.7988 16.5601C68.0029 16.5601 68.1792 16.6064 68.3276 16.6992C68.4946 16.7734 68.6338 16.8662 68.7451 16.9775L69.9976 18.2856C70.2759 18.564 70.415 18.8701 70.415 19.2041C70.415 19.4082 70.3501 19.6216 70.2202 19.8442C70.1089 20.0483 69.9233 20.2524 69.6636 20.4565L60.479 27.5815V41.6646C60.479 42.314 60.4326 42.8892 60.3398 43.3901C60.2471 43.8726 60.043 44.2808 59.7275 44.6147C59.4121 44.9302 58.9575 45.1714 58.3638 45.3384C57.77 45.5054 56.9629 45.5889 55.9424 45.5889H44.2529C43.3623 45.5889 42.6387 45.5054 42.082 45.3384C41.5254 45.1714 41.0894 44.9302 40.7739 44.6147C40.4585 44.2993 40.2451 43.9004 40.1338 43.418C40.0225 42.9355 39.9668 42.3696 39.9668 41.7202V20.9575Z"
      />
      <path
        className={styles.E}
        d="M96.1318 40.9688C96.6328 40.9688 97.0874 40.9038 97.4956 40.7739C97.9038 40.6255 98.2656 40.4678 98.5811 40.3008C98.915 40.1338 99.1841 39.9854 99.3882 39.8555C99.6108 39.707 99.7778 39.6328 99.8892 39.6328C100.056 39.6328 100.167 39.6606 100.223 39.7163C100.297 39.772 100.381 39.874 100.474 40.0225L101.448 41.5254C101.541 41.6738 101.587 41.8037 101.587 41.915C101.587 42.0449 101.55 42.147 101.476 42.2212C101.401 42.2954 101.327 42.3604 101.253 42.416C100.641 42.8428 99.8892 43.3066 98.9985 43.8076C98.1079 44.29 97.0688 44.7354 95.8813 45.1436C94.7124 45.5518 93.3857 45.8857 91.9014 46.1455C90.417 46.4238 88.7842 46.563 87.0029 46.563C85.6113 46.563 84.2197 46.4517 82.8281 46.229C81.4365 46.0063 80.1006 45.6538 78.8203 45.1714C77.5586 44.689 76.3804 44.0581 75.2856 43.2788C74.1909 42.4995 73.2354 41.5439 72.4189 40.4121C71.6211 39.2803 70.9902 37.9722 70.5264 36.4878C70.0625 34.9849 69.8306 33.2686 69.8306 31.3389C69.8306 29.4463 70.0625 27.7578 70.5264 26.2734C70.9902 24.7705 71.6211 23.4531 72.4189 22.3213C73.2354 21.1895 74.1909 20.2339 75.2856 19.4546C76.3804 18.6567 77.5586 18.0166 78.8203 17.5342C80.1006 17.0332 81.4365 16.6714 82.8281 16.4487C84.2197 16.2261 85.6113 16.1147 87.0029 16.1147C89.3223 16.1147 91.4746 16.3745 93.46 16.894C95.4639 17.4136 97.1987 18.2671 98.6646 19.4546C100.13 20.6421 101.281 22.2007 102.116 24.1304C102.951 26.0601 103.368 28.4258 103.368 31.2275V32.7861C103.368 33.1201 103.285 33.3799 103.118 33.5654C102.951 33.751 102.672 33.8438 102.283 33.8438H90.7603C90.9087 35.2168 91.1685 36.3672 91.5396 37.2949C91.9292 38.2041 92.3652 38.937 92.8477 39.4937C93.3486 40.0317 93.8867 40.4121 94.4619 40.6348C95.0371 40.8574 95.5938 40.9688 96.1318 40.9688ZM99.416 30.4204C99.416 28.936 99.2954 27.7114 99.0542 26.7466C98.8315 25.7632 98.5254 24.9839 98.1357 24.4087C97.7461 23.8149 97.2822 23.3975 96.7441 23.1562C96.2246 22.915 95.6772 22.7944 95.1021 22.7944C94.6753 22.7944 94.2114 22.8779 93.7104 23.0449C93.2095 23.2119 92.7363 23.5645 92.291 24.1025C91.8643 24.6406 91.4932 25.4106 91.1777 26.4126C90.8809 27.4146 90.7046 28.7505 90.6489 30.4204H99.416Z"
      />
      <path
        className={styles.N}
        d="M107.432 20.9575C107.432 20.3267 107.487 19.77 107.599 19.2876C107.71 18.7866 107.923 18.3784 108.239 18.063C108.554 17.7476 108.99 17.5063 109.547 17.3394C110.104 17.1724 110.827 17.0889 111.718 17.0889H123.101C123.936 17.0889 124.65 17.1724 125.244 17.3394C125.856 17.5063 126.292 17.7939 126.552 18.2021C126.793 18.0352 127.081 17.8589 127.415 17.6733C127.768 17.4692 128.148 17.2837 128.556 17.1167C128.964 16.9497 129.4 16.8105 129.864 16.6992C130.328 16.5879 130.811 16.5322 131.312 16.5322C133.093 16.5322 134.475 17.1445 135.458 18.3691C136.46 19.5938 136.961 21.3936 136.961 23.7686V44.2808C136.961 44.5962 136.915 44.8467 136.822 45.0322C136.748 45.1992 136.646 45.3291 136.516 45.4219C136.405 45.4961 136.266 45.5425 136.099 45.561C135.932 45.5796 135.765 45.5889 135.598 45.5889H133.816C133.334 45.5889 133.019 45.4497 132.87 45.1714C132.74 44.8931 132.675 44.5962 132.675 44.2808V23.4902C132.675 22.4326 132.48 21.6255 132.091 21.0688C131.72 20.5122 131.117 20.2339 130.282 20.2339C129.855 20.2339 129.419 20.3545 128.974 20.5957C128.547 20.8184 128.204 21.0596 127.944 21.3193V41.6924C127.944 42.3418 127.888 42.9077 127.777 43.3901C127.666 43.8726 127.452 44.2808 127.137 44.6147C126.821 44.9302 126.385 45.1714 125.829 45.3384C125.272 45.5054 124.548 45.5889 123.658 45.5889H111.718C110.827 45.5889 110.104 45.5054 109.547 45.3384C108.99 45.1714 108.554 44.9302 108.239 44.6147C107.923 44.2993 107.71 43.9004 107.599 43.418C107.487 42.9355 107.432 42.3696 107.432 41.7202V20.9575Z"
      />
      <path
        className={styles.D}
        d="M173.7 41.7202C173.7 42.3696 173.644 42.9355 173.533 43.418C173.421 43.9004 173.208 44.2993 172.893 44.6147C172.577 44.9302 172.141 45.1714 171.584 45.3384C171.028 45.5054 170.304 45.5889 169.414 45.5889H157.251C155.896 45.5518 154.551 45.4312 153.215 45.2271C151.898 45.0044 150.636 44.6704 149.43 44.2251C148.243 43.7612 147.129 43.1675 146.09 42.4438C145.07 41.7017 144.179 40.811 143.418 39.772C142.676 38.7144 142.092 37.4805 141.665 36.0703C141.238 34.6416 141.025 33.0088 141.025 31.1719C141.025 28.8896 141.35 26.9321 141.999 25.2993C142.648 23.6479 143.53 22.2656 144.643 21.1523C145.756 20.0391 147.046 19.1577 148.512 18.5083C149.996 17.8589 151.555 17.3857 153.188 17.0889V3.89648C153.188 3.24707 153.234 2.68115 153.327 2.19873C153.419 1.69775 153.614 1.28955 153.911 0.974121C154.208 0.640137 154.616 0.398926 155.136 0.250488C155.655 0.0834961 156.351 0 157.223 0H169.414C170.304 0 171.028 0.0834961 171.584 0.250488C172.141 0.41748 172.577 0.658691 172.893 0.974121C173.208 1.28955 173.421 1.69775 173.533 2.19873C173.644 2.68115 173.7 3.23779 173.7 3.86865V41.7202ZM144.977 31.1997C144.977 32.5728 145.135 33.8623 145.45 35.0684C145.766 36.2559 146.248 37.3135 146.897 38.2412C147.565 39.1504 148.419 39.9019 149.458 40.4956C150.497 41.0894 151.74 41.4697 153.188 41.6367V20.6514C151.74 20.8184 150.497 21.208 149.458 21.8203C148.419 22.4141 147.565 23.1748 146.897 24.1025C146.248 25.0303 145.766 26.0972 145.45 27.3032C145.135 28.5093 144.977 29.8081 144.977 31.1997Z"
      />
      <path
        className={styles.Z}
        d="M200.015 34.2734L203.152 32.375H219.869C220.393 32.375 220.818 32.8 220.818 33.3242V33.3242C220.818 33.8485 220.393 34.2734 219.869 34.2734H200.015ZM193.792 38.0703L196.982 36.1719H219.869C220.393 36.1719 220.818 36.5969 220.818 37.1211V37.1211C220.818 37.6453 220.393 38.0703 219.869 38.0703H193.792ZM187.49 41.8672L190.707 39.9688H219.869C220.393 39.9688 220.818 40.3937 220.818 40.918V40.918C220.818 41.4422 220.393 41.8672 219.869 41.8672H187.49ZM199.804 13.3906L196.666 15.2891H179.949C179.425 15.2891 179 14.8641 179 14.3398V14.3398C179 13.8156 179.425 13.3906 179.949 13.3906H199.804ZM206.026 9.59375L202.836 11.4922H179.949C179.425 11.4922 179 11.0672 179 10.543V10.543C179 10.0187 179.425 9.59375 179.949 9.59375H206.026ZM212.328 5.79688L209.111 7.69531H179.949C179.425 7.69531 179 7.27033 179 6.74609V6.74609C179 6.22185 179.425 5.79688 179.949 5.79688H212.328ZM219.387 7.41842C219.997 7.00805 220.818 7.44558 220.818 8.18124V8.18124C220.818 8.48731 220.666 8.77331 220.412 8.94405L180.432 35.816C179.821 36.2263 179 35.7888 179 35.0531V35.0531C179 34.7471 179.152 34.4611 179.406 34.2903L219.387 7.41842ZM219.369 11.9107C219.987 11.4959 220.818 11.939 220.818 12.6836V12.6836C220.818 12.9937 220.664 13.2834 220.407 13.4562L180.466 40.2764C179.841 40.6963 179 40.2482 179 39.4951V39.4951C179 39.1814 179.156 38.8883 179.417 38.7135L219.369 11.9107ZM219.386 16.3545C219.997 15.9448 220.818 16.3828 220.818 17.1187V17.1187C220.818 17.4254 220.666 17.7119 220.411 17.8827L181.821 43.7656H219.869C220.393 43.7656 220.818 44.1906 220.818 44.7148V44.7148C220.818 45.2391 220.393 45.6641 219.869 45.6641H180.461C179.654 45.6641 179 45.5182 179 44.7111V44.7111C179 44.2238 179.243 43.26 179.648 42.9887L219.386 16.3545ZM217.997 3.89844H179.949C179.425 3.89844 179 3.47346 179 2.94922V2.94922C179 2.42498 179.425 2 179.949 2H219.34C220.156 2 220.818 2.14753 220.818 2.96414V2.96414C220.818 3.45722 220.573 4.43232 220.163 4.70684L180.416 31.3472C179.811 31.7521 179 31.3191 179 30.5919V30.5919C179 30.2891 179.151 30.0061 179.402 29.8372L217.997 3.89844Z"
      />
    </svg>
  );
}
