import { useId } from "react";

type TopProps = { hairColor: string; hatColor: string };

export function NoHair({ hairColor: _hairColor, hatColor: _hatColor }: TopProps) {
  const id = useId();
  const path1 = `nohair-p-${id}`;
  const mask1 = `nohair-m-${id}`;
  const filter1 = `nohair-f-${id}`;
  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <filter
          x="-0.8%"
          y="-2.0%"
          width="101.5%"
          height="108.0%"
          filterUnits="objectBoundingBox"
          id={filter1}>
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
            type="matrix"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={`#${path1}`} />
      </mask>
      <g id="Top/No-Hair" />
    </g>
  );
}

export function Eyepatch({ hairColor: _hairColor, hatColor: _hatColor }: TopProps) {
  const id = useId();
  const path1 = `eyepatch-p1-${id}`;
  const path2 = `eyepatch-p2-${id}`;
  const mask1 = `eyepatch-m1-${id}`;
  const filter1 = `eyepatch-f1-${id}`;
  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <path
          d="M160.395307,39.7810237 C157.318088,36.6927979 154.11865,33.7600979 150.806,30.9908979 C146.654769,27.5378979 142.429913,24.2038979 137.934325,21.1258979 C135.577432,19.5128979 132.57955,17.5558979 129.86465,18.3398979 C127.701512,18.9628979 126.449294,21.1258979 125.402413,22.9898979 C122.041763,28.9578979 118.824425,35.0128979 115.759638,41.1278979 C113.232488,46.1748979 110.706,51.2218979 108.389175,56.3668979 C107.283094,58.8308979 106.149125,61.5968979 107.518069,64.1618979 C108.758794,66.4908979 111.648513,67.8498979 114.184944,68.2788979 C117.382688,68.8198979 120.595988,68.1288979 123.690719,67.1508979 C128.108419,65.7138979 132.361488,63.7998979 136.395688,61.5258979 C143.483738,57.5348979 150.063769,52.5738979 155.470975,46.5188979 C156.333938,45.5578979 157.173613,44.5658979 157.924988,43.5078979 C158.9479,42.0538979 161.474388,41.5308979 160.395307,39.7810237 Z"
          id={path2}
        />
        <filter
          x="-0.8%"
          y="-2.0%"
          width="101.5%"
          height="108.0%"
          filterUnits="objectBoundingBox"
          id={filter1}>
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
            type="matrix"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={`#${path1}`} />
      </mask>
      <g id="Top/Eyepatch">
        <g transform="translate(-1.000000, 0.000000)">
          <g
            id="Eyepatch"
            strokeWidth="1"
            fillRule="evenodd"
            transform="translate(1.000000, 0.000000)">
            <use fillOpacity="0.599999964" fill="#000000" fillRule="evenodd" xlinkHref={`#${path2}`} />
            <path
              d="M160.395307,39.7810237 C157.318088,36.6927979 154.11865,33.7600979 150.806,30.9908979 C146.654769,27.5378979 142.429913,24.2038979 137.934325,21.1258979 C135.577432,19.5128979 132.57955,17.5558979 129.86465,18.3398979 C127.701512,18.9628979 126.449294,21.1258979 125.402413,22.9898979 C122.041763,28.9578979 118.824425,35.0128979 115.759638,41.1278979 C113.232488,46.1748979 110.706,51.2218979 108.389175,56.3668979 C107.283094,58.8308979 106.149125,61.5968979 107.518069,64.1618979 C108.758794,66.4908979 111.648513,67.8498979 114.184944,68.2788979 C117.382688,68.8198979 120.595988,68.1288979 123.690719,67.1508979 C128.108419,65.7138979 132.361488,63.7998979 136.395688,61.5258979 C143.483738,57.5348979 150.063769,52.5738979 155.470975,46.5188979 C156.333938,45.5578979 157.173613,44.5658979 157.924988,43.5078979 C158.9479,42.0538979 161.474388,41.5308979 160.395307,39.7810237 Z"
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
            />
          </g>
          <path
            d="M69,68 L12,34 L22,18 L79,52 L69,68 Z M136.905965,16.5 L164,38.5 L157.924988,43.5078979 C157.173613,44.5658979 156.333938,45.5578979 155.470975,46.5188979 C152.496882,49.8949979 149.2626,53.0048979 145.857538,55.8878979 L143.057538,55.7998979 L136.905965,16.5 Z"
            fill="#28354B"
          />
          <path
            d="M69,68 C65.7726,68.8828 25,44 25,44 L32,28 L79,52 L69,68 Z M136.905965,16.5 L166.5,41 L157.924988,43.5078979 C157.173613,44.5658979 156.333938,45.5578979 155.470975,46.5188979 C152.496882,49.8949979 149.2626,53.0048979 145.857538,55.8878979 L143.057538,55.7998979 L136.905965,16.5 Z"
            id="Shadow"
            fillOpacity="0.16"
            fill="#000000"
          />
        </g>
      </g>
    </g>
  );
}

export function Hat({ hairColor: _hairColor, hatColor }: TopProps) {
  const id = useId();
  const path1 = `hat-p1-${id}`;
  const path2 = `hat-p2-${id}`;
  const mask1 = `hat-m1-${id}`;
  const mask2 = `hat-m2-${id}`;
  const filter1 = `hat-f1-${id}`;
  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <path
          d="M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z"
          id={path2}
        />
        <filter
          x="-0.8%"
          y="-2.0%"
          width="101.5%"
          height="108.0%"
          filterUnits="objectBoundingBox"
          id={filter1}>
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
            type="matrix"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={`#${path1}`} />
      </mask>
      <g id="Top/Accessories/Hat">
        <mask id={mask2} fill="white">
          <use xlinkHref={`#${path2}`} />
        </mask>
        <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
          <rect x="0" y="0" width="264" height="280" />
        </g>
        <g
          transform="translate(22.000000, 12.000000)"
          filter={`url(#${filter1})`}>
          <path
            d="M116.372573,18.7733158 C111.737774,18.0649498 107.101223,15.8498513 103.18,12.4157234 C101.372519,10.8329498 99.486853,9.51990763 97.5279,8.52642104 C93.9335853,6.7121498 90.2702255,6.44649498 87.4470814,8.14546624 C84.3502704,10.0023602 82.7629024,14.1115513 83.3932023,18.7733158 L83.3932023,18.7733158 L37.5,18.7733158 C36.1192881,18.7733158 35,19.8926039 35,21.2733158 L35,21.2733158 L35,39 C35,40.3807119 36.1192881,41.5 37.5,41.5 L37.5,41.5 L181.5,41.5 C182.880712,41.5 184,40.3807119 184,39 L184,39 L184,21.2733158 C184,19.8926039 182.880712,18.7733158 181.5,18.7733158 L181.5,18.7733158 L116.372573,18.7733158 Z"
            fill="#1B4057"
            fillRule="evenodd"
          />
          <ellipse
            fill="#1B4057"
            fillRule="evenodd"
            cx="110"
            cy="12.3933158"
            rx="63"
            ry="11.3933158"
          />
          <rect
            fill="#1B4057"
            fillRule="evenodd"
            x="47"
            y="6"
            width="126"
            height="18"
            rx="5"
          />
        </g>
      </g>
    </g>
  );
}

export function Hijab({ hairColor: _hairColor, hatColor }: TopProps) {
  const id = useId();
  const path1 = `hijab-p1-${id}`;
  const path2 = `hijab-p2-${id}`;
  const mask1 = `hijab-m1-${id}`;
  const mask2 = `hijab-m2-${id}`;
  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <path
          d="M66.0421575,77.0722547 C66.0144362,77.3820932 66,77.6952498 66,78.0117228 L66,113 C66,119.018625 70.4308707,124.002364 76.2085808,124.867187 C77.9518066,145.114792 90.4692178,162.282984 108,170.610951 L108,189 L104,189 L104,189 C64.235498,189 32,221.235498 32,261 L32,270 L232,270 L232,261 C232,221.235498 199.764502,189 160,189 L156,189 L156,170.610951 C173.530782,162.282984 186.048193,145.114792 187.791419,124.867187 C193.569129,124.002364 198,119.018625 198,113 L198,100 C198,97.0796498 196.72451,94.4412288 194.710041,92.5839793 C194.153,83.2671498 175.144248,62 132.04925,62 C88.3896,62 68.1345142,82.5822227 66.2173384,92.1921498 C66.1061725,92.42498 66.0144362,92.6568184 65.9440446,92.8865498 L65.8932023,92.8865498 C65.1269982,96.0498084 65.510506,98.7346354 66.9440446,99.5684044 L66.9440446,99.5684044 L66.9440446,100 L66,100 L66,78.0117228 C66,77.6952498 66.0144362,77.3820932 66.0421575,77.0722547 Z M66.0421575,77.0722547 C67.3089547,63.3498006 78.9625445,52.3141538 93.0396955,52.0055323 L93.0396955,52.0055323 C93.0396955,52.0055323 89.4396955,42.0055323 132.04925,42.0055323 C174.658805,42.0055323 170.46925,52.0055323 170.46925,52.0055323 C184.546401,52.3141538 196.199991,63.3498006 197.466788,77.0722547 L197.466788,77.0722547 C197.489509,77.3820932 197.503945,77.6952498 197.503945,78.0117228 L197.503945,82 L198,82 L198,78.0117228 C198,63.2685267 186.105526,51.2849498 171.634943,50.1231942 C170.730713,42.807498 163.133814,32 132,32 C100.866186,32 93.2692865,42.807498 92.3650568,50.1231942 C77.8944742,51.2849498 66,63.2685267 66,78.0117228 L66,82 L66.0421575,82 L66.0421575,77.0722547 Z"
          id={path2}
        />
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={`#${path1}`} />
      </mask>
      <g id="Top/Accessories/Hijab">
        <g transform="translate(0.000000, 10.000000)">
          <mask id={mask2} fill="white">
            <use xlinkHref={`#${path2}`} />
          </mask>
          <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
            <rect x="0" y="0" width="264" height="280" />
          </g>
          <path
            d="M197.466788,67.0722547 C196.199991,53.3498006 184.546401,42.3141538 170.46925,42.0055323 C170.46925,42.0055323 174.658805,32.0055323 132.04925,32.0055323 C89.4396955,32.0055323 93.0396955,42.0055323 93.0396955,42.0055323 C78.9625445,42.3141538 67.3089547,53.3498006 66.0421575,67.0722547 L66.0421575,72 L66,72 L66,68.0117228 C66,53.2685267 77.8944742,41.2849498 92.3650568,40.1231942 C93.2692865,32.807498 100.866186,22 132,22 C163.133814,22 170.730713,32.807498 171.634943,40.1231942 C186.105526,41.2849498 198,53.2685267 198,68.0117228 L198,72 L197.466788,72 L197.466788,67.0722547 Z"
            fill="#FFFFFF"
            fillOpacity="0.3"
          />
        </g>
      </g>
    </g>
  );
}

export function Turban({ hairColor: _hairColor, hatColor }: TopProps) {
  const id = useId();
  const path1 = `turban-p1-${id}`;
  const path2 = `turban-p2-${id}`;
  const mask1 = `turban-m1-${id}`;
  const mask2 = `turban-m2-${id}`;
  const filter1 = `turban-f1-${id}`;
  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <path
          d="M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z"
          id={path2}
        />
        <filter
          x="-0.8%"
          y="-2.0%"
          width="101.5%"
          height="108.0%"
          filterUnits="objectBoundingBox"
          id={filter1}>
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
            type="matrix"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={`#${path1}`} />
      </mask>
      <g id="Top/Accessories/Turban">
        <mask id={mask2} fill="white">
          <use xlinkHref={`#${path2}`} />
        </mask>
        <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
          <rect x="0" y="0" width="264" height="280" />
        </g>
        <g
          transform="translate(50.000000, 17.000000)"
          filter={`url(#${filter1})`}>
          <path
            d="M83.2519606,18.1312825 C69.1233805,26.5390506 66,44.7212264 66,55.5 C66,68.5 58.5,75 58.5,75 L58.5,0 C58.5,0 115.5,0 115.5,25 C115.5,36.4387497 105.861688,41.5947498 96.2016807,37.088498 L96.2016807,37.088498 C93.939482,35.9764394 91.5348933,34.4520236 89.3327141,32.0720225 C87.0709342,29.6267819 85.0462723,27.8718498 83.2519606,26.8042498 C83.2519606,26.8042498 90,34 96.2016807,37.088498"
            fill="#EDECE3"
          />
          <path
            d="M53.5,6.14300199 C53.5,6.14300199 35,14.5 35,50 C35,71.9753081 30.09375,79 30.09375,79 C30.09375,79 22.5,69.5 22.5,51.5 C22.5,33.5 22.5,28 15.5,17 L15.5,0 L53.5,0 L53.5,6.14300199 Z"
            fill="#EDECE3"
          />
          <path
            d="M81.2320898,73 C82.7321947,72.0326587 83.2223471,70.058498 82.3289637,68.4877485 L82.3289637,68.4877485 C55.5396793,21.5877485 58.3546322,0 82.5,0 C82.5,0 4.57718161e-13,0 4.57718161e-13,55.5 C4.57718161e-13,71.0654498 4.67456689,79.6726698 9.07024489,81.9867058 C10.3193024,82.6443173 11.8390583,82.0855498 12.3891725,80.7871458 L12.3891725,80.7871458 C13.8948979,77.2329498 14.5,71 20.5,62.5 C30.5,48.5 33.5,45 38,39.5 C42.5,34 62,25 66.5,22.5 C63.3235172,30.8644301 64.5,35.5 68.5,43.5 C72.5,51.5 79.5,61 80.5,64 C81.1666667,66 80.6666667,68.5 79,71.5 C78.1159888,73.0977788 79.5234313,74.0768587 81.2320898,73 Z"
            fill="#EDECE3"
          />
        </g>
      </g>
    </g>
  );
}

export function WinterHat1({ hairColor: _hairColor, hatColor }: TopProps) {
  const id = useId();
  const path1 = `winterhat1-p1-${id}`;
  const path2 = `winterhat1-p2-${id}`;
  const mask1 = `winterhat1-m1-${id}`;
  const mask2 = `winterhat1-m2-${id}`;
  const filter1 = `winterhat1-f1-${id}`;
  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <path
          d="M120,54 L20,54 L20,155 C20,160.522847 24.4771525,165 30,165 L72,165 L72,165 C80.836556,165 88,157.836556 88,149 L88,119 C88,115.134007 90.6862915,112 94,112 L94,112 C97.3137085,112 100,115.134007 100,119 L100,149 C100,157.836556 107.163444,165 116,165 L116,165 C124.836556,165 132,157.836556 132,149 L132,119 C132,115.134007 134.686292,112 138,112 L138,112 C141.313708,112 144,115.134007 144,119 L144,149 C144,157.836556 151.163444,165 160,165 L160,165 C168.836556,165 176,157.836556 176,149 L176,119 C176,115.134007 178.686292,112 182,112 L182,112 C185.313708,112 188,115.134007 188,119 L188,149 C188,157.836556 195.163444,165 204,165 L234,165 C239.522847,165 244,160.522847 244,155 L244,54 L120,54 Z"
          id={path2}
        />
        <filter
          x="-0.8%"
          y="-2.0%"
          width="101.5%"
          height="108.0%"
          filterUnits="objectBoundingBox"
          id={filter1}>
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
            type="matrix"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={`#${path1}`} />
      </mask>
      <g id="Top/Accessories/Winter-Hat-1">
        <mask id={mask2} fill="white">
          <use xlinkHref={`#${path2}`} />
        </mask>
        <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
          <rect x="0" y="0" width="264" height="280" />
        </g>
        <g
          transform="translate(11.000000, 0.000000)"
          filter={`url(#${filter1})`}>
          <path
            d="M1,48 L241,48 C241,48 241,78 121,78 C1,78 1,48 1,48 Z"
            fill="#F4F4F4"
          />
          <path
            d="M119.679389,0.0390073498 C126.276154,0.437235498 140,6.797235498 140,30 C140,40.065847 130.045685,48 118,48 C105.954315,48 96,40.065847 96,30 C96,6.797235498 112.220856,-0.401236498 119.679389,0.0390073498 Z"
            fill="#F4F4F4"
          />
          <rect fill="#FF4F7B" x="0" y="48" width="242" height="6" rx="3" />
        </g>
      </g>
    </g>
  );
}

export function WinterHat2({ hairColor: _hairColor, hatColor }: TopProps) {
  const id = useId();
  const path1 = `winterhat2-p1-${id}`;
  const path2 = `winterhat2-p2-${id}`;
  const mask1 = `winterhat2-m1-${id}`;
  const mask2 = `winterhat2-m2-${id}`;
  const filter1 = `winterhat2-f1-${id}`;
  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <path
          d="M72,21 C126,21 192,76 192,76 L192,165 L72,165 L72,21 Z M0,78 L264,78 L264,118 L0,118 L0,78 Z"
          id={path2}
        />
        <filter
          x="-0.8%"
          y="-2.0%"
          width="101.5%"
          height="108.0%"
          filterUnits="objectBoundingBox"
          id={filter1}>
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
            type="matrix"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={`#${path1}`} />
      </mask>
      <g id="Top/Accessories/Winter-Hat-2">
        <mask id={mask2} fill="white">
          <use xlinkHref={`#${path2}`} />
        </mask>
        <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
          <rect x="0" y="0" width="264" height="280" />
        </g>
        <g
          transform="translate(11.000000, 0.000000)"
          filter={`url(#${filter1})`}>
          <path
            d="M1,78 L241,78 L241,118 L1,118 L1,78 Z"
            fill="#F4F4F4"
          />
          <rect fill="#FF4F7B" x="0" y="78" width="242" height="6" rx="3" />
          <rect fill="#FF4F7B" x="0" y="112" width="242" height="6" rx="3" />
        </g>
      </g>
    </g>
  );
}

export function WinterHat3({ hairColor: _hairColor, hatColor }: TopProps) {
  const id = useId();
  const path1 = `winterhat3-p1-${id}`;
  const path2 = `winterhat3-p2-${id}`;
  const mask1 = `winterhat3-m1-${id}`;
  const mask2 = `winterhat3-m2-${id}`;
  const filter1 = `winterhat3-f1-${id}`;
  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <path
          d="M50.3146539,86.4313082 L55.2530875,58.3794085 C56.4518694,51.6010369 62.3220058,46.6578947 69.2006555,46.6578947 L194.799345,46.6578947 C201.677994,46.6578947 207.548131,51.6010369 208.746912,58.3794085 L213.685346,86.4313082 C215.920973,87.4361498 217.5,89.6755498 217.5,92.2826946 L217.5,100.300813 C217.5,103.787158 214.674702,106.614035 211.185046,106.614035 L52.8149545,106.614035 C49.3252981,106.614035 46.5,103.787158 46.5,100.300813 L46.5,92.2826946 C46.5,89.6755498 48.0790267,87.4361498 50.3146539,86.4313082 Z"
          id={path2}
        />
        <filter
          x="-0.8%"
          y="-2.0%"
          width="101.5%"
          height="108.0%"
          filterUnits="objectBoundingBox"
          id={filter1}>
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
            type="matrix"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={`#${path1}`} />
      </mask>
      <g id="Top/Accessories/Winter-Hat-3">
        <mask id={mask2} fill="white">
          <use xlinkHref={`#${path2}`} />
        </mask>
        <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
          <rect x="0" y="0" width="264" height="280" />
        </g>
        <g
          transform="translate(47.000000, 2.000000)"
          filter={`url(#${filter1})`}>
          <path
            d="M83.7522561,9.37981298 C80.7546357,4.23903421 75.0498658,1 68.8508901,1 L101.149097,1 C94.9501138,1 89.2453539,4.23903421 86.2477335,9.37981298 L86.2477335,9.37981298 L118.451717,64.3798766 C119.117578,65.5221498 118.708621,66.9705566 117.540547,67.6420498 C117.107831,67.8918498 116.613572,68.0243193 116.109481,68.0243193 L53.8904984,68.0243193 C52.5700009,68.0243193 51.5,66.9543193 51.5,65.633811 C51.5,65.1181498 51.6354573,64.6124498 51.8924527,64.1699498 L83.7522561,9.37981298 Z"
            fill="#F4F4F4"
          />
          <ellipse
            fill="#F4F4F4"
            cx="85"
            cy="1.5"
            rx="20"
            ry="1.5"
          />
        </g>
      </g>
    </g>
  );
}

export function WinterHat4({ hairColor: _hairColor, hatColor }: TopProps) {
  const id = useId();
  const path1 = `winterhat4-p1-${id}`;
  const path2 = `winterhat4-p2-${id}`;
  const mask1 = `winterhat4-m1-${id}`;
  const mask2 = `winterhat4-m2-${id}`;
  const filter1 = `winterhat4-f1-${id}`;
  return (
    <g id="Top" strokeWidth="1" fillRule="evenodd">
      <defs>
        <rect id={path1} x="0" y="0" width="264" height="280" />
        <path
          d="M129.659138,38.3566287 C132.459581,38.1218487 135.30039,38 138.174573,38 C160.769585,38 181.37682,44.7494487 197.534783,55.4716687 C199.776795,56.9395987 200.700574,59.8498687 199.655657,62.3712387 C196.763748,69.3480887 191.396498,84.5305387 188.440727,92.6684687 C187.605137,95.0005487 185.474136,96.7026487 182.983823,96.8953487 L182.983823,97.0867487 C182.983823,97.0867487 157.318994,102 132,102 C106.681006,102 81.0161769,97.0867487 81.0161769,97.0867487 L81.0161769,96.8953487 C78.5258639,96.7026487 76.3948626,95.0005487 75.5592726,92.6684687 C72.6035018,84.5305387 67.2362523,69.3480887 64.344343,62.3712387 C63.2994261,59.8498687 64.2232055,56.9395987 66.4652167,55.4716687 C82.6231803,44.7494487 103.230415,38 125.825427,38 C127.108444,38 128.385897,38.0194387 129.659138,38.0569587 L129.659138,38.3566287 Z"
          id={path2}
        />
        <filter
          x="-0.8%"
          y="-2.0%"
          width="101.5%"
          height="108.0%"
          filterUnits="objectBoundingBox"
          id={filter1}>
          <feOffset
            dx="0"
            dy="2"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0"
            type="matrix"
            in="shadowOffsetOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill="white">
        <use xlinkHref={`#${path1}`} />
      </mask>
      <g id="Top/Accessories/Winter-Hat-4">
        <mask id={mask2} fill="white">
          <use xlinkHref={`#${path2}`} />
        </mask>
        <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
          <rect x="0" y="0" width="264" height="280" />
        </g>
        <g
          transform="translate(55.000000, 17.000000)"
          filter={`url(#${filter1})`}>
          <path
            d="M77.1904924,2.27284939 C77.5691498,0.93897 78.7917019,0 80.1778019,0 L80.1778019,0 C81.0303574,0 81.8312122,0.399784498 82.3451603,1.07216789 L82.3451603,1.07216789 L108.652057,35.7816993 C109.979057,37.5172693 109.53689,39.9587693 107.669645,41.1282693 L107.669645,41.1282693 C107.029645,41.5352693 106.282357,41.7502693 105.518245,41.7502693 L105.518245,41.7502693 L57.4817549,41.7502693 C55.4083549,41.7502693 53.727,40.0688693 53.727,37.9954693 L53.727,37.9954693 C53.727,37.2313693 53.942,36.4840693 54.349,35.8440693 L54.349,35.8440693 L77.1904924,2.27284939 Z"
            fill="#F4F4F4"
          />
          <rect fill="#FF4F7B" x="0" y="36" width="154" height="6" rx="3" />
        </g>
      </g>
    </g>
  );
}
