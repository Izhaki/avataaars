import { useId } from "react";

export function NoHair({ hairColor, hatColor }: { hairColor: string; hatColor: string }) {
  const id = useId();
  const path1 = `nohair-path1-${id}`;
  const mask1 = `nohair-mask1-${id}`;
  const filter1 = `nohair-filter1-${id}`;
  return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path1}`} />
        </mask>
        <g id='Mask' />
        <g id='Top/No-Hair' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'></g>
        </g>
      </g>
  );
}

export function Eyepatch({ hairColor, hatColor }: { hairColor: string; hatColor: string }) {
  const id = useId();
  const path1 = `eyepatch-path1-${id}`;
  const mask1 = `eyepatch-mask1-${id}`;
  return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path1}`} />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Eyepatch' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'><path
              d='M160.395307,39.7810237 C157.318088,36.6927979 154.11865,43.6386608 152.623361,45.4281124 C149.013122,49.7486528 145.540256,54.182935 141.868413,58.4518947 C134.616309,66.8823544 127.439316,75.3743141 120.233991,83.8401528 C119.140279,85.1257012 119.27271,85.2649028 117.837048,85.3885641 C116.88598,85.4708947 115.563312,84.9802173 114.5737,84.9256608 C111.823607,84.774556 109.112057,85.2348141 106.435756,85.8227012 C101.091389,86.9961608 95.4264863,88.9291124 90.7890799,91.898306 C89.5718308,92.677306 88.7874545,93.5971608 87.4670933,93.841177 C86.3183659,94.0534512 84.794416,93.6295641 83.622299,93.5194592 C81.5412806,93.3237173 78.5378542,92.4726366 76.4953793,92.9137173 C73.9027538,93.4738302 72.9174244,96.6109915 75.5604528,98.0003624 C77.570314,99.0564431 81.5706,98.4761608 83.8235816,98.6447899 C86.3971,98.8372253 85.6120649,98.704306 85.2473843,101.164306 C84.7239177,104.69758 85.5985582,108.646475 87.0885766,111.878201 C90.5482655,119.383185 100.122861,127.335201 108.8551,126.603153 C116.142123,125.992451 122.526834,119.413274 125.519389,113.099935 C127.050916,109.868871 127.954546,106.192096 128.250376,102.628403 C128.438811,100.36183 128.333722,97.9580399 127.684083,95.7632173 C127.362888,94.6783705 126.853916,93.5554995 126.308378,92.5695157 C125.866281,91.7710076 123.908799,89.9203866 123.788886,89.1165882 C123.556307,87.5602415 127.973324,83.3874995 128.816339,82.3443141 C132.788953,77.4276205 136.780344,72.5320882 140.721662,67.5889431 C144.603353,62.7201931 148.506456,57.8640076 152.489612,53.0785802 C154.294237,50.9098786 163.318023,42.7148382 160.395307,39.7810237'
              id='Badass-Eyepatch'
              fill='#28354B'
              fillRule='evenodd'
            />
          </g>
        </g>
      </g>
  );
}

export function Hat({ hairColor, hatColor }: { hairColor: string; hatColor: string }) {
  const id = useId();
  const path1 = `hat-path1-${id}`;
  const path2 = `hat-path2-${id}`;
  const mask1 = `hat-mask1-${id}`;
  const mask2 = `hat-mask2-${id}`;
  const filter1 = `hat-filter1-${id}`;
  return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path2} x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,84.0546578 186.345324,76.495786 183.361772,69.6491845 C173.434911,53 89.3126235,53.8033992 80.7098777,69.4854816 C77.6811789,76.3752214 76,83.9912805 76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'
            id={path1}
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path2}`} />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Hat' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <g
              id='Hat'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={`#${path1}`} />
              </mask>
              <g id='Mask-Hair' />
              <path
                d='M123.182388,2 L141.817612,2 L141.817612,2 C160.609055,2 176.866947,15.0804442 180.890118,33.4361631 L190,75 L75,75 L84.1098821,33.4361631 L84.1098821,33.4361631 C88.1330533,15.0804442 104.390945,2 123.182388,2 Z'
                fill='#1F333C'
                mask={`url(#${mask2})`}
              />
              <ellipse
                id='Hipster'
                fill='#1F333C'
                mask={`url(#${mask2})`}
                cx='132'
                cy='87.5'
                rx='122'
                ry='57.5'
              />
              <ellipse
                id='Very'
                fill='#15232A'
                mask={`url(#${mask2})`}
                cx='132'
                cy='82'
                rx='62'
                ry='25'
              />
            </g></g>
        </g>
      </g>
  );
}

export function Hijab({ hairColor, hatColor }: { hairColor: string; hatColor: string }) {
  const id = useId();
  const path1 = `hijab-path1-${id}`;
  const path2 = `hijab-path2-${id}`;
  const mask1 = `hijab-mask1-${id}`;
  const mask2 = `hijab-mask2-${id}`;
  const filter1 = `hijab-filter1-${id}`;
  return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path
            d='M66.0421575,77.0749852 C71.6795257,45.2058307 99.5129755,21 133,21 L133,21 L133,21 C170.555363,21 201,51.444637 201,89 L201,119.751022 C201.875211,129.554379 202.693946,136.422143 203.456205,140.354314 C204.833317,147.458254 209.150269,145.115419 209.150269,155.220201 C209.150269,165.324983 204.822005,168.720206 204.803237,177.705482 C204.784469,186.690758 220.200444,193.836185 220.200444,205.242606 C220.200444,216.649027 213.126079,270.475928 142.577598,270.475928 C127.507235,270.475928 114.670509,266.188589 104.06742,257.613911 C104.750275,264.103957 105.394468,271.565987 106,280 L59,280 C59.9324304,256.228591 51.7156549,242.936205 51.7156549,216.44564 C51.7156549,189.955074 65.3525844,151.427541 65,142 C65.019981,141.417741 65.0406721,140.728417 65.0620734,139.932027 C65.0208303,138.959828 65,137.982347 65,137 L65,89 L65,89 C65,85.0240875 65.3412247,81.1278723 65.9959868,77.3390417 C65.9973236,77.2261704 65.9986613,77.1131564 66,77 C66.0140661,77.0249783 66.0281186,77.0499734 66.0421575,77.0749852 Z M132.5,53 L132.5,53 C102.400481,53 78,77.4004811 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,107.5 C188,77.4004811 163.599519,53 133.5,53 L133.5,53 L132.5,53 Z'
            id={path2}
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path1}`} />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Hijab' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'>
            <mask id={mask2} fill='white'>
              <use xlinkHref={`#${path2}`} />
            </mask>
            <use
              id='Hijab-Mask'
              stroke='none'
              fill='#3B6BAD'
              fillRule='evenodd'
              xlinkHref={`#${path2}`}
            />
            <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
              <rect x="0" y="0" width="264" height="280" />
            </g>
            <path
              d='M72.0744416,104.959767 C71.3690172,101.246903 71,97.4161983 71,93.5 C71,59.5344879 98.7583455,32 133,32 C167.241654,32 195,59.5344879 195,93.5 C195,97.4161983 194.630983,101.246903 193.925558,104.959767 C192.341315,72.6827942 165.669927,47 133,47 C100.330073,47 73.6586845,72.6827942 72.0744428,104.959774 Z'
              id='Band'
              stroke='none'
              fillOpacity='0.5'
              fill='#FFFFFF'
              fillRule='evenodd'
              mask={`url(#${mask2})`}
            />
            <path
              d='M187.929085,104.69543 C188.631457,108.187732 189,111.800827 189,115.5 L189,138.5 C189,168.599519 164.599519,193 134.5,193 L131.5,193 C101.400481,193 77,168.599519 77,138.5 L77,115.5 L77,115.5 C77,111.800827 77.3685433,108.187732 78.0709154,104.69543 C78.0238287,105.624341 78,106.559388 78,107.5 L78,107.5 L78,130.5 C78,160.599519 102.400481,185 132.5,185 L133.5,185 C163.599519,185 188,160.599519 188,130.5 L188,130.5 L188,107.5 C188,106.559388 187.976171,105.624341 187.929085,104.69543 Z M114.16682,206.995462 C120.651206,211.981028 135.663493,213.708321 152.404574,210.756416 C169.145655,207.804512 182.661822,201.046883 187.049987,194.144193 C187.118291,194.396526 187.175421,194.652296 187.221114,194.911435 C188.930607,204.606451 173.985409,215.345413 153.84008,218.897578 C133.694752,222.449742 115.977919,217.469978 114.268426,207.774963 C114.222732,207.515823 114.188938,207.255938 114.166824,206.995464 Z M126.034638,235.921439 C134.227056,241.574977 150.421729,241.843835 167.103682,235.772101 C183.785635,229.700366 196.018656,219.084674 198.660388,209.487828 C198.803116,209.80837 198.935124,210.134883 199.056117,210.46731 C203.582768,222.904181 190.979008,238.909268 170.904831,246.215671 C150.830654,253.522074 130.887742,249.363007 126.361091,236.926135 C126.240098,236.593709 126.131343,236.258733 126.034643,235.921442 Z'
              id='Shadows'
              stroke='none'
              fillOpacity='0.16'
              fill='#000000'
              fillRule='evenodd'
              opacity='0.899999976'
              mask={`url(#${mask2})`}
            /></g>
        </g>
      </g>
  );
}

export function Turban({ hairColor, hatColor }: { hairColor: string; hatColor: string }) {
  const id = useId();
  const path1 = `turban-path1-${id}`;
  const path2 = `turban-path2-${id}`;
  const path3 = `turban-path3-${id}`;
  const mask1 = `turban-mask1-${id}`;
  const mask2 = `turban-mask2-${id}`;
  const mask3 = `turban-mask3-${id}`;
  const filter1 = `turban-filter1-${id}`;
  return (
      <g id='Top' strokeWidth='1' fillRule='evenodd'>
        <defs>
          <rect id={path1} x='0' y='0' width='264' height='280' />
          <path
            d='M156,180.610951 C173.530782,172.282984 186.048193,155.114792 187.791419,134.867187 C193.569129,134.002364 198,129.018625 198,123 L198,110 C198,104.054007 193.675427,99.1180731 188,98.1659169 L188,92 C188,61.072054 162.927946,36 132,36 C101.072054,36 76,61.072054 76,92 L76,92 L76,98.1659169 C70.3245733,99.1180731 66,104.054007 66,110 L66,123 C66,129.018625 70.4308707,134.002364 76.2085808,134.867187 C77.9518066,155.114792 90.4692178,172.282984 108,180.610951 L108,199 L104,199 L104,199 C64.235498,199 32,231.235498 32,271 L32,280 L232,280 L232,271 C232,231.235498 199.764502,199 160,199 L156,199 L156,180.610951 Z M0,5.68434189e-14 L264,5.68434189e-14 L264,280 L0,280 L0,5.68434189e-14 Z'
            id={path2}
          />
          <path
            d='M83.9715543,55.8170792 C107.404232,69.414362 145.114919,82.1112884 139,138 C158.377483,132.360101 168.044149,116.801277 168,91.3235294 C167.918252,44.1482824 115.850571,6.80154462e-15 86,0 C85.3259486,0 84.6559706,0.0296343787 83.9916946,0.0880669528 C83.3328225,0.0296343217 82.6684563,0 82.0002187,0 C52.0737254,6.80154462e-15 0.0804892181,44.1482783 0.00021866091,91.3235294 C-0.0442202163,117.440393 9.62244645,132.999216 29.0002187,138 C22.8618971,82.1112789 60.5101967,69.4143577 83.9715662,55.8170722 Z'
            id={path3}
          />
          <filter
            x='-0.8%'
            y='-2.0%'
            width='101.5%'
            height='108.0%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
              type='matrix'
              in='shadowOffsetOuter1'
              result='shadowMatrixOuter1'
            />
            <feMerge>
              <feMergeNode in='shadowMatrixOuter1' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path1}`} />
        </mask>
        <g id='Mask' />
        <g id='Top/Accesories/Turban' mask={`url(#${mask1})`}>
          <g transform='translate(-1.000000, 0.000000)'><g
              id='Behind'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <mask id={mask2} fill='white'>
                <use xlinkHref={`#${path2}`} />
              </mask>
              <g id='Mask-Hair' />
            </g>
            <g
              id='Turban'
              strokeWidth='1'
              fillRule='evenodd'
              transform='translate(1.000000, 0.000000)'>
              <path
                d='M74.5304294,97.5 C73.529284,95.0905557 73,92.5798498 73,90 C73,71.7746033 99.4151998,57 132,57 C164.5848,57 191,71.7746033 191,90 C191,92.5798498 190.470716,95.0905557 189.469571,97.5 C183.398106,82.8878805 159.972341,72 132,72 C104.027659,72 80.6018941,82.8878805 74.5304294,97.5 Z'
                id='Band'
                fill='#EDECE3'
              />
              <g transform='translate(48.000000, 3.000000)'>
                <mask id={mask3} fill='white'>
                  <use xlinkHref={`#${path3}`} />
                </mask>
                <use id='Turban-Mask' fill='#124C74' xlinkHref={`#${path3}`} />
                <g mask={`url(#${mask3})`} fillRule="evenodd" fill={hatColor}>
              <rect x="0" y="0" width="264" height="280" />
            </g>
              </g>
              <path
                d='M48.0110963,96.0123559 C48.3807929,121.112082 58.0438337,136.107963 77.0002187,141 C57.6224465,136.289117 47.9557798,121.632254 48.0002187,97.0294118 C48.0008313,96.6902213 48.0044682,96.351197 48.0110963,96.0123559 Z M152.645822,30.4681115 C153.39011,36.1953086 152.126202,42.8891982 148.000219,50.135763 C136.847465,71.5667661 76.561434,72.0039826 76.3339794,129.679698 C76.1051437,67.7612631 136.805324,67.3799133 148.000219,44.5441176 C150.669864,39.5668152 152.141299,34.8351296 152.645822,30.4681115 Z'
                id='Shadow'
                fillOpacity='0.16'
                fill='#000000'
              />
            </g></g>
        </g>
      </g>
  );
}

export function WinterHat1({ hairColor, hatColor }: { hairColor: string; hatColor: string }) {
  const id = useId();
  const path1 = `winterha-path1-${id}`;
  const path2 = `winterha-path2-${id}`;
  const path3 = `winterha-path3-${id}`;
  const mask1 = `winterha-mask1-${id}`;
  const mask2 = `winterha-mask2-${id}`;
  const filter1 = `winterha-filter1-${id}`;
  return (
      <g id="Top">
        <defs>
          <rect id={path3} x="0" y="0" width="264" height="280" />
          <path
            d="M120,54 L20,54 L20,155 C20,160.522847 15.5228475,165 10,165 C4.4771525,165 6.76353751e-16,160.522847 0,155 L0,54 L0,44 C-2.9759565e-15,19.699471 19.699471,4.46393476e-15 44,0 L96,0 C120.300529,-4.46393476e-15 140,19.699471 140,44 L140,54 L140,155 C140,160.522847 135.522847,165 130,165 C124.477153,165 120,160.522847 120,155 L120,54 Z"
            id={path1}
          />
          <filter
            x="-0.8%"
            y="-2.8%"
            width="101.7%"
            height="111.1%"
            filterUnits="objectBoundingBox"
            id={filter1}>
            <feOffset
              dx="0"
              dy="2"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
              type="matrix"
              in="shadowOffsetOuter1"
            />
          </filter>
          <rect id={path2} x="74" y="50" width="118" height="36" rx="8" />
        </defs>
        <mask id={mask1} fill="white">
          <use xlinkHref={`#${path3}`} />
        </mask>
        <g id="Mask" />
        <g
          id="Top/Accessories/Winter-Hat-1"
          transform="translate(-1.000000, 0.000000)">
          <g
            id="hat"
            strokeWidth="1"
            fillRule="evenodd"
            transform="translate(63.000000, 20.000000)">
            <path
              d="M1,48 L23.6714286,48 L23.6714286,153.664286 C23.6714286,159.924828 18.5962564,165 12.3357143,165 C6.07517216,165 1,159.924828 1,153.664286 L1,48 Z M116.328571,48 L139,48 L139,153.664286 C139,159.924828 133.924828,165 127.664286,165 C121.403744,165 116.328571,159.924828 116.328571,153.664286 L116.328571,48 Z"
              id="inside"
              fill="#F4F4F4"
            />
            <mask id={mask2} fill="white">
              <use xlinkHref={`#${path1}`} />
            </mask>
            <use id="hat-mask" fill="#D8D8D8" xlinkHref={`#${path1}`} />
            <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
              <rect x="0" y="0" width="264" height="280" />
            </g>
          </g>
          <g id="hat-front">
            <use
              fill="black"
              fillOpacity="1"
              filter={`url(#${path2})`}
              xlinkHref={`#${path2}`}
            />
            <use fill="#F4F4F4" fillRule="evenodd" xlinkHref={`#${path2}`} />
          </g></g>
      </g>
  );
}

export function WinterHat2({ hairColor, hatColor }: { hairColor: string; hatColor: string }) {
  const id = useId();
  const path1 = `winterha-path1-${id}`;
  const path2 = `winterha-path2-${id}`;
  const path3 = `winterha-path3-${id}`;
  const mask1 = `winterha-mask1-${id}`;
  const mask2 = `winterha-mask2-${id}`;
  return (
      <g id='Top'>
        <defs>
          <rect id={path3} x='0' y='0' width='264' height='280' />
          <path
            d='M72,21 C126.772655,21 144,68.8032255 144,103.04488 L144,176.910255 C144,196.404852 121.366901,196.446757 121.366901,165.988782 L121.366901,86.5347425 C121.366901,80.4596103 117.635097,77.5347425 111.551408,77.5347425 L72,77.5347425 L32.4485915,77.5347425 C26.3649028,77.5347425 22.6330986,80.4596103 22.6330986,86.5347425 L22.6330986,165.988782 C22.6330986,196.446757 -1.41137102e-14,196.404852 0,176.910255 L0,103.04488 C-7.11930515e-15,68.8032255 17.2273451,21 72,21 Z'
            id={path1}
          />
          <path
            d='M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26'
            id={path2}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path3}`} />
        </mask>
        <g id='Mask' />
        <g
          id='Top/Accessories/Winter-Hat-2'
          transform='translate(-1.000000, 0.000000)'
        >
          <g
            id='hat'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(61.000000, 0.000000)'
          >
            <g
              id='string'
              transform='translate(0.000000, 176.000000)'
              fill='#F4F4F4'
            >
              <circle id='puff' cx='9' cy='65' r='9' />
              <rect x='8' y='0' width='2' height='58' />
            </g>
            <g
              id='string'
              transform='translate(126.000000, 168.000000)'
              fill='#F4F4F4'
            >
              <circle id='puff' cx='9' cy='65' r='9' />
              <rect x='8' y='0' width='2' height='58' />
            </g>
            <circle id='puff' fill='#F4F4F4' cx='72' cy='20' r='20' />
            <mask id={mask2} fill='white'>
              <use xlinkHref={`#${path1}`} />
            </mask>
            <use id='Combined-Shape' fill='#F4F4F4' xlinkHref={`#${path1}`} />
            <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
              <rect x="0" y="0" width="264" height="280" />
            </g>
            <rect
              id='color-dark'
              fillOpacity='0.2'
              fill='#000000'
              x='-1'
              y='21'
              width='146'
              height='46'
              mask={`url(#${mask2})`}
            />
            <g
              id='light-triangles'
              transform='translate(29.000000, 32.000000)'
              fill='#FFFFFF'
              fillOpacity='0.5'
            >
              <polygon
                id='Triangle'
                transform='translate(12.500000, 9.000000) rotate(180.000000) translate(-12.500000, -9.000000) '
                points='12.5 0 25 18 0 18'
              />
              <polygon
                id='Triangle'
                transform='translate(43.500000, 9.000000) rotate(180.000000) translate(-43.500000, -9.000000) '
                points='43.5 0 56 18 31 18'
              />
              <polygon
                id='Triangle'
                transform='translate(74.500000, 9.000000) rotate(180.000000) translate(-74.500000, -9.000000) '
                points='74.5 0 87 18 62 18'
              />
            </g>
            <g
              id='dark-triangles'
              transform='translate(13.000000, 41.000000)'
              fill='#000000'
              fillOpacity='0.5'
            >
              <polygon id='Triangle' points='12.5 0 25 18 0 18' />
              <polygon id='Triangle' points='43.5 0 56 18 31 18' />
              <polygon id='Triangle' points='74.5 0 87 18 62 18' />
              <polygon id='Triangle' points='105.5 0 118 18 93 18' />
            </g>
          </g></g>
      </g>
  );
}

export function WinterHat3({ hairColor, hatColor }: { hairColor: string; hatColor: string }) {
  const id = useId();
  const path1 = `winterha-path1-${id}`;
  const path2 = `winterha-path2-${id}`;
  const path3 = `winterha-path3-${id}`;
  const mask1 = `winterha-mask1-${id}`;
  const mask2 = `winterha-mask2-${id}`;
  const filter1 = `winterha-filter1-${id}`;
  return (
      <g id='Top'>
        <defs>
          <rect id={path3} x='0' y='0' width='264' height='280' />
          <path
            d='M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z'
            id={path1}
          />
          <filter
            x='-0.7%'
            y='-1.7%'
            width='101.4%'
            height='106.8%'
            filterUnits='objectBoundingBox'
            id={filter1}
          >
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
          <path
            d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'
            id={path2}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path3}`} />
        </mask>
        <g id='Mask' />
        <g
          id='Top/Accessories/Winter-Hat-3'
          transform='translate(-1.000000, 0.000000)'
        >
          <g
            id='hat'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(67.000000, 12.000000)'
          >
            <circle id='puff' fill='#F4F4F4' cx='66' cy='8' r='20' />
            <mask id={mask2} fill='white'>
              <use xlinkHref={`#${path1}`} />
            </mask>
            <use id='hat-mask' fill='#D8D8D8' xlinkHref={`#${path1}`} />
            <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
              <rect x="0" y="0" width="264" height="280" />
            </g>
          </g>
          <g id='hat-front'>
            <use
              fill='black'
              fillOpacity='1'
              filter={`url(#${path2})`}
              xlinkHref={`#${path2}`}
            />
            <use fill='#F4F4F4' fillRule='evenodd' xlinkHref={`#${path2}`} />
          </g></g>
      </g>
  );
}

export function WinterHat4({ hairColor, hatColor }: { hairColor: string; hatColor: string }) {
  const id = useId();
  const path1 = `winterha-path1-${id}`;
  const path2 = `winterha-path2-${id}`;
  const path3 = `winterha-path3-${id}`;
  const path4 = `winterha-path4-${id}`;
  const path5 = `winterha-path5-${id}`;
  const mask1 = `winterha-mask1-${id}`;
  const mask2 = `winterha-mask2-${id}`;
  const mask3 = `winterha-mask3-${id}`;
  const mask4 = `winterha-mask4-${id}`;
  const filter1 = `winterha-filter1-${id}`;
  return (
      <g id='Top'>
        <defs>
          <rect id={path5} x='0' y='0' width='264' height='280' />
          <path
            d='M129.659138,38.3566287 C132.459581,45.3577056 134,52.9989608 134,61 L134,69 L2,69 L2,61 C2,52.9748603 3.54971254,45.3116754 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.141056,2.84355825 18.8342301,4.64979084 28.7156778,10.5389901 C38.4862647,3.88774159 50.289117,-4.77047603e-15 63,-7.10542736e-15 L73,-7.10542736e-15 C85.7221104,-9.44244112e-15 97.5345852,3.89461262 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'
            id={path1}
          />
          <path
            d='M28.7156857,10.5389848 C18.758718,17.3171083 10.9122881,26.9651756 6.36620203,38.2933809 C-0.0371821146,24.8304767 -1.28053094,13.7727805 2.63615554,5.12029235 C10.1410556,2.84355836 18.8342292,4.64979066 28.7156763,10.5389892 Z M129.659138,38.3566287 C125.120833,27.0109143 117.273404,17.34646 107.310208,10.5566215 C117.203883,4.65339747 125.906912,2.84128775 133.419297,5.12029235 C137.342115,13.7863263 136.088729,24.8651051 129.659138,38.3566287 Z'
            id={path2}
          />
          <path
            d='M21.8615933,15.9591438 C17.3889306,20.0465694 13.5271638,24.7913314 10.4291788,30.040544 C7.50356643,21.9322189 7.00287124,16.3214118 8.92709323,13.2081228 C11.5782173,12.0615989 15.8897174,12.9786059 21.8615933,15.9591438 Z M125.352616,29.6737564 C122.278044,24.5465519 118.471613,19.9084198 114.077736,15.903773 C119.880509,13.0520429 124.083178,12.1889392 126.68574,13.3144617 C128.572308,16.3668294 128.127934,21.8199276 125.352616,29.6737564 Z'
            id={path3}
          />
          <filter
            x='-0.7%'
            y='-1.7%'
            width='101.4%'
            height='106.8%'
            filterUnits='objectBoundingBox'
            id={filter1}
          >
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
          <path
            d='M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z'
            id={path4}
          />
        </defs>
        <mask id={mask1} fill='white'>
          <use xlinkHref={`#${path5}`} />
        </mask>
        <g id='Mask' />
        <g
          id='Top/Accessories/Winter-Hat-4'
          transform='translate(-1.000000, 0.000000)'
        >
          <g
            id='hat'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(65.000000, 4.000000)'
          >
            <mask id={mask2} fill='white'>
              <use xlinkHref={`#${path1}`} />
            </mask>
            <use id='hat-mask' fill='#D8D8D8' xlinkHref={`#${path1}`} />
            <g mask={`url(#${mask2})`} fillRule="evenodd" fill={hatColor}>
              <rect x="0" y="0" width="264" height="280" />
            </g>
            <mask id={mask3} fill='white'>
              <use xlinkHref={`#${path2}`} />
            </mask>
            <use
              id='shadow'
              fillOpacity='0.24'
              fill='#000000'
              xlinkHref={`#${path2}`}
            />
            <mask id={mask4} fill='white'>
              <use xlinkHref={`#${path3}`} />
            </mask>
            <use
              id='light'
              fillOpacity='0.300000012'
              fill='#FFFFFF'
              xlinkHref={`#${path3}`}
            />
          </g>
          <g id='hat-front'>
            <use
              fill='black'
              fillOpacity='1'
              filter={`url(#${path4})`}
              xlinkHref={`#${path4}`}
            />
            <use fill='#F4F4F4' fillRule='evenodd' xlinkHref={`#${path4}`} />
          </g></g>
      </g>
  );
}

