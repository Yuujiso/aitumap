import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const FirstFloor = () => {
  const { height, width } = useWindowDimensions();

  return (
    <TransformWrapper defaultScale={1}>
      {({ zoomIn, zoomOut, resetTransform, positionX, positionY, ...rest }) => (
        <TransformComponent>
          <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 916.09 341.35">
            <defs>
              <style>
                {`
                    .room-map-group{
                        fill:#4da2ff;
                    }
                    .room-map-group.tech{
                        fill:#bfbfbf;
                        pointer-events: none;
                    }
                    .room-map-group.stairs{
                        fill:none;
                        pointer-events: none;
                    }
                    .room-map-group.another{
                        fill:#ac7ab6;
                        pointer-events: none;
                    }
                    
                    
                    .room-map-group .map-element-wall,
                    .room-map-group polyline,
                    .room-map-group line, 
                    .room-map-group polygon {
                        stroke:#7f7f7f;
                    }
                    path.map-noway-wall,
                    polyline.map-noway-wall,
                    line.map-noway-wall{
                        stroke:#7f7f7f;
                        fill:none;
                    }
                    .room-map-group path.map-element-label{
                        stroke:#ffffff;
                        stroke-width: 0.1;
                        fill: #ffffff;
                    }
                    .room-map-group text.map-element-label,
                    .room-map-group tspan.map-element-label  {
                        color: #ffffff;
                        fill: #ffffff;
                        font: 11px sans-serif;
                        text-rendering: optimizeSpeed;
                    }
                    .room-map-group:hover{
                        fill:#62cf6b;
                    }
                `}
              </style>
            </defs>
            <g id="BG" stroke="#7f7f7f" fill="#7f7f7f">
              <path
                d="M516.43,211.06v3c47.29,0,93,2.77,132.51,8l-2.66,22.66-.34,2.94,2.93.38,20.55,2.67,2.89.38.46-2.88L676.3,226c139.87,29.13,174.62,40.48,272.24,79.53,8.55,3.42,14.28,8.85,17,16.15,3.3,8.74,2.12,20.17-3.13,30.54-17.48,33.24-34.81,66.9-51.56,99.46-16.34,31.73-33.21,64.52-50.24,96.93-34.2-15.17-52.15-22.36-83.68-32.24l2.2-7.27.9-2.94-3-.82L711,487.26l-3-.84-.67,3.09c-.67,3.08-1.76,7.86-2.48,10.95-9.54-2.49-40-10.21-66.17-14l2.81-19.77.43-3-3-.37L620.15,461l-2.9-.36-.43,2.88c-.07.45-.3,1.8-.6,3.51-1.52,8.83-2.35,13.9-2.73,16.91-28.77-3.51-37.93-4.33-66.21-5.11l.22-9.88.08-3.13-3.13.06-66.18,1.32-3.14.07.2,3.13c.15,2.26.23,4.14.32,6.13.05,1.1.09,2.22.15,3.42-30.86.94-38.27,1.66-67.91,5.66l-2.79-19-.43-3-3,.46-19.95,3.05-2.94.46.43,2.94c.26,1.82.85,6.38,1.43,10.8.36,2.83.74,5.73,1,7.94-31,4.79-33.27,5.16-62.09,12.11l-1.86-8.74-.67-3.15-3.09.89-73.31,21-3,.86,1,3,2.84,8.51c-24.82,8.84-36.45,13.4-70,28.17L59.78,350.74c-5.57-11.28-6.74-20.63-3.6-28.57,3.75-9.5,13.61-17,31-23.5a1482,1482,0,0,1,186.3-56.58c36.71-8.42,61.4-12.28,69.52-13.45l3.25,22.25.43,2.94,2.94-.4L371,250.56l3-.41-.39-3c-.33-2.46-1.14-7.49-2-12.81-.66-4.16-1.35-8.41-1.8-11.46,45.49-5.8,96.13-8.86,146.67-8.86v-3m0,0c-52.18,0-104.36,3.3-150.07,9.27.65,5.11,3.53,22.14,4.21,27.25l-21.33,2.88-3.69-25.2s-107.16,13.48-259.4,70.6c-24.69,9.26-44.91,24.14-29,56.28l113,203.62c36.4-16,47.91-20.51,73.44-29.59a8.91,8.91,0,0,1,1.69-.44l-3.81-11.45,73.3-21L317.3,505c32.5-7.85,33.08-7.87,67.76-13.24-.53-3.69-2.34-18-2.87-21.68L402.14,467,405.35,489c32.8-4.46,39.19-5.11,73.63-6.14-.31-4.82-.35-8-.65-12.65l66.18-1.32-.3,12.87c32.09.84,40.18,1.64,72.07,5.55-.62-.07,3.16-21.08,3.5-23.33l18.72,2.29L635.27,489c32.06,4.39,71.79,15.2,71.79,15.2s2.11-9.09,3.18-14l66.06,18.13-3.06,10.11c33.91,10.53,52,17.79,88.76,34.14,35-66.46,68.16-132.42,103.11-198.88,8.22-16.24,9.54-40.87-15.46-50.87-99.78-39.91-134.74-51-275.82-80.31l-4,25.27-20.54-2.67,3-25.59c-42.12-5.76-89-8.42-135.83-8.42Z"
                transform="translate(-51.48 -211.06)"
              />
              <path d="M816.61,395.52" transform="translate(-51.48 -211.06)" />
              <path d="M723.87,369.24" transform="translate(-51.48 -211.06)" />
            </g>
            <g id="MAIN">
              <g
                id="_2.GARDEROB"
                data-name="2.GARDEROB"
                className="room-map-group">
                <polyline points="499.06 188.97 497.96 213.97 517.33 214.88 522.13 136.98 501.39 136.07 499.41 181.14" />
              </g>
              <line x1="420.04" y1="190.23" x2="422.23" y2="235.43" />
              <g
                id="_2.COWORKING"
                data-name="2.COWORKING"
                className="room-map-group">
                <path
                  className="map-element-wall"
                  d="M426,286.48l-.08-.63c-.61-4.86-5.48-8.2-10.36-7.72h0a7.33,7.33,0,0,1-8-6.15l-2.65-19.46a13.05,13.05,0,0,1,11.8-14.76l22.37-2a11,11,0,0,1,11.72,8.88h0a3.83,3.83,0,0,0,1.6,3.39h0"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M473.63,250.67l-13.25.17h0c3.9-.21,8.44-2.59,8.23-6.49h0c-.28-5.12,4-9.19,9.13-9.29l11.74-.17.24,15.58-12.73.16"
                  transform="translate(-51.48 -211.06)"
                />
                <polyline points="497.69 39.71 499.63 39.77 500.3 24.12 478.98 23.54 478.98 39.09 494.37 39.6" />
                <polyline points="514.74 24.68 500.3 24.12 499.63 39.77 531.57 41.34 534.99 41.51 537.48 41.63 538.17 25.59 518.31 24.82" />
                <polyline points="559.44 43.34 562.23 43.59 563.7 26.96 547.07 25.59 545.6 42.12 555.83 43.02" />
                <polyline points="556.24 102.87 556.4 101.11 540.61 100.08 538.83 120.24 554.59 121.38 555.95 106.1" />
                <polyline points="542.21 81.9 542.35 80.34 558.16 81.4 556.4 101.11 540.61 100.08 541.9 85.39" />
                <polyline points="558.28 80.08 558.16 81.4 542.35 80.34 542.96 73.38 558.79 74.34 558.6 76.56" />
                <polyline points="560.29 57.62 558.79 74.34 542.96 73.38 544.96 50.68 560.8 51.85 560.59 54.26" />
                <polyline points="572.6 47.29 573.58 38.5 593.77 40.56 591.78 56.08 571.82 54.25 572.22 50.68" />
                <polyline points="579.72 39.13 593.77 40.56 598.03 10.17 576.81 7.2 573.58 38.5 575.81 38.73" />
                <path
                  className="map-element-wall"
                  d="M429.62,320.05l-.11-1a9,9,0,0,0-9.79-8.06h0a7.77,7.77,0,0,1-8.42-6.88h0L414,334.41l17-1.76-.93-9"
                  transform="translate(-51.48 -211.06)"
                />
                <line x1="359.82" y1="93.02" x2="362.47" y2="123.35" />
                <path
                  className="map-element-wall"
                  d="M428.29,302l-.44-6.17-10.21.67a6.82,6.82,0,0,0-6.34,7.62h0a7.77,7.77,0,0,0,8.42,6.88h0a9,9,0,0,1,9.79,8.06l-.93-13"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M440.89,284.85l1-.06a15,15,0,0,0,14-15.86h0l.91,14.94Z"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M409.57,276h0c.91-16.77,16.71-35.65,33.41-39.8h0"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M414.25,278.14c.69-19.05,17.61-36.11,34.07-38.57"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M419,278.43c1.37-18.36,15.43-32.09,31.67-34.19"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M423.66,281.19c.6-18.45,13.71-30.06,28.74-33.19"
                  transform="translate(-51.48 -211.06)"
                />
                <line x1="333.81" y1="121.98" x2="362.07" y2="118.7" />
                <line x1="407.86" y1="114.55" x2="378.93" y2="116.76" />
                <line x1="510.72" y1="114.18" x2="539.24" y2="115.65" />
                <line x1="555" y1="116.76" x2="583.29" y2="119.12" />
                <polygon points="489.26 56.75 514.17 57.51 514.57 52.1 489.43 51.42 489.26 56.75" />
                <line x1="426.78" y1="2.05" x2="427.49" y2="23.83" />
                <line x1="490.21" y1="2.05" x2="489.64" y2="23.54" />
                <rect x="452.13" y="37.59" width="13.26" height="2.8" />
                <rect x="452.13" y="22.2" width="13.26" height="2.5" />
              </g>
              <g
                id="_1.MEDIATEKAS"
                data-name="1.MEDIATEKAS"
                className="room-map-group tech">
                <polyline
                  id="_1.MEDIA"
                  data-name="1.MEDIA"
                  points="270.28 195.95 268.64 189.08 242.21 195.02 245.73 209.2 271.95 202.95 276.44 201.93 271.95 202.95 271.11 199.41"
                />
                <polyline
                  id="_1.MEDIA-2"
                  data-name="1.MEDIA"
                  points="285.38 196.33 286.1 199.75 286.1 199.75 281.77 200.71 307.07 195.13 304.82 180.94 283.15 185.81 284.62 192.75"
                />
              </g>
              <g
                id="_1.STORAGE"
                data-name="1.STORAGE"
                className="room-map-group tech">
                <polygon points="236.16 140.3 268.43 132.81 265.69 120.31 233.14 127.52 236.16 140.3" />
                <polyline points="265.32 118.39 265.69 120.31 233.14 127.52 229.84 113.6 254.65 108.05 262.95 106.2 264.79 115.7" />
                <polyline points="255.18 107.94 262.95 106.2 260.08 91.72 226.41 99.13 229.84 113.6 251.84 108.68" />
              </g>
              <g
                id="_1.BIBLIO.UNKNOWN"
                data-name="1.BIBLIO.UNKNOWN"
                className="room-map-group tech">
                <polygon
                  className="map-element-wall"
                  points="41.41 84.48 83.67 170.37 122.6 155.45 128.72 171.01 135.36 168.71 117.43 114.54 141.72 106.94 124.56 55.72 41.41 84.48"
                />
              </g>
              <g
                id="_1.BEHIND.TECH.MAN"
                data-name="1.BEHIND.TECH.MAN"
                className="room-map-group tech">
                <polygon
                  className="map-element-wall"
                  points="151.95 62.57 162.99 100.77 141.72 106.94 129.14 69.45 151.95 62.57"
                />
              </g>
              <g id="FULLGYM" className="room-map-group">
                <polygon
                  className="map-element-wall"
                  points="620.08 147.61 606.72 145.35 587.28 276.61 638.54 286.79 639.71 281.31 636.67 280.55 643.04 250.98 660.97 254.89 656.12 276.56 731.35 297.12 771.19 186.61 672.39 158.18 620.08 147.61"
                />
                <polygon
                  className="map-element-wall"
                  points="615.71 168.55 613.74 178.33 623.88 180.29 625.76 170.44 615.71 168.55"
                />
                <polyline
                  className="map-element-wall"
                  points="625.4 258.46 627.63 247.29 643.04 250.98 636.67 280.55 639.71 281.31 638.54 286.79 620.54 282.77 624.75 261.74"
                />
                <polygon
                  className="map-element-wall"
                  points="719.86 288.55 749.47 187.98 694.82 172.94 665.47 273.68 703.84 284.16 719.86 288.55"
                />
                <polygon
                  className="map-element-wall"
                  points="705.71 261.29 692.67 257.83 681.97 278.19 703.84 284.16 705.71 261.29"
                />
                <polygon
                  className="map-element-wall"
                  points="714.45 267.48 681.65 258.74 688.05 236.81 700.63 193.78 733.3 202.85 714.45 267.48"
                />
                <polygon
                  className="map-element-wall"
                  points="711.2 177.45 709.51 199.92 722.65 203.57 733.01 183.45 711.2 177.45"
                />
                <path
                  className="map-element-wall"
                  d="M750.54,385.17l-2.18,8h0c-4.14,28.7,35.12,38.61,45.88,12.13h0l2.17-7.51Z"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M744.15,468.89h0c3.62-8,14.81-5.61,13.05,3.46h0"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M744.15,468.89"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M744,471.73a8.53,8.53,0,0,1,0-1.35"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M744.9,474.33a6.49,6.49,0,0,1-.58-1.28"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M746.86,476.29a5.87,5.87,0,0,1-1.2-1"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M749.52,477.18a6.51,6.51,0,0,1-1.39-.31"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M752.48,476.84a6.71,6.71,0,0,1-1.56.34"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M755.12,475.27a7.5,7.5,0,0,1-1.13.86"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M756.59,473.49a8.51,8.51,0,0,1-.68.95"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M757.2,472.35"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M774.13,414.63c-3.62,8-14.88,5.49-13.12-3.58"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M774.18,411.67a7.48,7.48,0,0,1,.05,1.35"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M773.3,409.07a5.77,5.77,0,0,1,.59,1.28"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M771.35,407.11a5.81,5.81,0,0,1,1.19,1"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M768.69,406.22a6.5,6.5,0,0,1,1.39.3"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M765.73,406.55a7,7,0,0,1,1.55-.33"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M763.09,408.13a7.5,7.5,0,0,1,1.13-.86"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M761.62,409.91a8.51,8.51,0,0,1,.68-1"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M767.18,498.56l2.18-8h0c4.14-28.7-35.12-38.61-45.88-12.13h0l-2.17,7.51Z"
                  transform="translate(-51.48 -211.06)"
                />
                <line
                  className="map-element-wall"
                  x1="680.17"
                  y1="223.21"
                  x2="734.74"
                  y2="238.02"
                />
                <line
                  className="map-element-wall"
                  x1="694.37"
                  y1="215.2"
                  x2="727.05"
                  y2="224.3"
                />
                <line
                  className="map-element-wall"
                  x1="688.05"
                  y1="236.81"
                  x2="720.75"
                  y2="245.88"
                />
                <path
                  className="map-element-wall"
                  d="M752.38,439.9h0c-1.61,9,10.62,11.58,13.57,3.68h0"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M766,443.61c2.13-9.33-10.66-12.21-13.58-3.68"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M748.37,438.81h0c-2.8,14.56,16.06,19.65,21.63,5.87h0"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  className="map-element-wall"
                  d="M770,444.76c3-15.13-16.21-19.76-21.63-5.87"
                  transform="translate(-51.48 -211.06)"
                />
                <line
                  className="map-element-wall"
                  x1="671.02"
                  y1="213.34"
                  x2="683.59"
                  y2="161.4"
                />
                <line
                  className="map-element-wall"
                  x1="662.08"
                  y1="208.39"
                  x2="671.78"
                  y2="210.23"
                />
                <line
                  className="map-element-wall"
                  x1="660.97"
                  y1="254.89"
                  x2="669.54"
                  y2="219.46"
                />
              </g>
              <g
                id="_3.UNKNOWN"
                data-name="3.UNKNOWN"
                className="room-map-group tech">
                <polyline
                  className="map-element-wall"
                  points="757.87 87.26 754.79 97.57 775.18 103.8 790.95 54.85 760.69 45.94 756.9 58.17 765.78 60.68 758.96 83.58"
                />
              </g>
              <g id="_1.142" data-name="1.142" className="room-map-group">
                <polyline points="273 90.62 272.73 89.24 302.21 84.02 308.41 125.24 280.63 130.59 273.65 94.05" />
                <text
                  transform="translate(281.6 110.85)"
                  className="map-element-label">
                  142
                </text>
              </g>
              <g id="_1.141" data-name="1.141" className="room-map-group">
                <polyline points="272.43 87.66 272.73 89.24 302.21 84.02 297.45 51.97 266.6 57.68 271.84 84.62" />
                <text
                  transform="translate(276 75.42)"
                  className="map-element-label">
                  141
                </text>
              </g>
              <g id="_1.143" data-name="1.143" className="room-map-group">
                <polyline points="256.11 72.43 253.54 59.98 219.05 67.62 226.41 99.13 260.08 91.72 257.4 78.69" />
                <text
                  transform="translate(229.84 83.14)"
                  className="map-element-label">
                  143
                </text>
              </g>
              <g id="_1.139" data-name="1.139" className="room-map-group">
                <polyline points="275.2 45.04 282.26 43.85 277.43 18.29 259.56 21.55 264.52 46.85 272.01 45.58" />
                <text
                  transform="translate(265.76 24.9) rotate(79.64)"
                  className="map-element-label">
                  139
                </text>
              </g>
              <g id="_1.140" data-name="1.140" className="room-map-group">
                <polyline points="283.55 43.64 282.26 43.85 277.43 18.29 292.09 16.1 295.91 41.65 286.67 43.14" />
                <text
                  transform="translate(281.58 21.51) rotate(80.39)"
                  className="map-element-label">
                  140
                </text>
              </g>
              <g id="_1.155" data-name="1.155" className="room-map-group">
                <polyline points="292.13 259.29 297.32 285.02 331.46 279.07 325.77 241.4 289.88 248.14 291.42 255.81" />
                <text
                  transform="translate(301.17 266.75)"
                  className="map-element-label">
                  155
                </text>
              </g>
              <g id="_1.165" data-name="1.165" className="room-map-group">
                <polyline points="272.58 233.92 278.6 232.46 271.95 202.95 245.73 209.2 252.71 238.76 269.42 234.69" />
                <text
                  transform="translate(252.52 224.35)"
                  className="map-element-label">
                  165
                </text>
              </g>
              <g id="_1.168" data-name="1.168" className="room-map-group">
                <polyline points="271.95 188.33 242.21 195.02 234.56 164.03 300.04 150.69 304.82 180.94 277.21 187.15" />
                <text
                  transform="translate(259.33 176.91)"
                  className="map-element-label">
                  168
                </text>
              </g>
              <g id="_1.156" data-name="1.156" className="room-map-group">
                <polyline points="295.96 217.27 301.86 245.89 289.88 248.14 282.26 209.73 293.9 207.25 295.27 213.94" />
                <text
                  transform="translate(286.67 218.88) rotate(79.58)"
                  className="map-element-label">
                  156
                </text>
              </g>
              <g id="_2.124K" data-name="2.124K" className="room-map-group">
                <polyline points="378.49 146.8 381.1 172.94 341.7 177.53 336.86 144.57 377.8 139.95 378.12 143.17" />
                <text
                  transform="translate(347.08 162.33)"
                  className="map-element-label">
                  124K
                </text>
              </g>
              <g id="_2.123K" data-name="2.123K" className="room-map-group">
                <polyline points="381.76 179.51 384.36 205.48 346.48 210 341.7 177.53 381.1 172.94 381.41 175.95" />
                <text
                  transform="translate(351.04 195.61)"
                  className="map-element-label">
                  123K
                </text>
              </g>
              <g id="_2.122K" data-name="2.122K" className="room-map-group">
                <polyline points="384.64 208.23 384.36 205.48 346.48 210 351.14 242.85 387.63 238.14 384.99 211.7" />
                <text
                  transform="translate(355.84 227.24)"
                  className="map-element-label">
                  122K
                </text>
              </g>
              <g id="_2.121K" data-name="2.121K" className="room-map-group">
                <polyline points="388.27 244.51 390.99 271.63 356.02 276.02 351.14 242.85 387.63 238.14 387.92 241" />
                <text
                  transform="translate(358.86 261.29)"
                  className="map-element-label">
                  121K
                </text>
              </g>
              <g id="_2.129" data-name="2.129" className="room-map-group">
                <polyline
                  class="cls-2"
                  points="399.62 189.67 396.13 138.17 417.45 136.85 422.23 235.43 402.78 237.28 399.86 193.14"
                />{" "}
                <text
                  transform="translate(405.58 179.62) rotate(85.57)"
                  className="map-element-label">
                  129
                </text>
              </g>
              <g id="_2.139" data-name="2.139" className="room-map-group">
                <polyline points="537.43 168.93 537.23 171.08 576.52 174.77 580.91 141.67 540.26 138.17 537.74 165.54" />
                <text
                  transform="translate(549.13 160.5)"
                  className="map-element-label">
                  139
                </text>
              </g>
              <g id="_2.138L" data-name="2.138L" className="room-map-group">
                <polyline points="534.69 198.15 537.23 171.08 576.52 174.77 572.41 206.9 534.19 203.5 534.39 201.37" />
                <text
                  transform="translate(544.33 193.07)"
                  className="map-element-label">
                  138L
                </text>
              </g>
              <g id="_2.137P" data-name="2.137P" className="room-map-group">
                <polyline points="531.45 234.06 531.21 236.67 568.15 239.65 572.41 206.9 534.19 203.5 531.73 230.93" />
                <text
                  transform="translate(538.56 225.68)"
                  className="map-element-label">
                  137P
                </text>
              </g>
              <g id="_2.135" data-name="2.135" className="room-map-group">
                <polyline points="529.2 258.62 528.13 270.29 563.74 273.55 565.94 256.58 529.61 254.11 529.49 255.38" />
                <text
                  transform="translate(536.47 267.04)"
                  className="map-element-label">
                  135
                </text>
              </g>
              <g id="_2.136" data-name="2.136" className="room-map-group">
                <polyline points="531.09 237.98 531.21 236.67 568.15 239.65 565.94 256.58 529.61 254.11 530.78 241.39" />
                <text
                  transform="translate(538.01 250.98)"
                  className="map-element-label">
                  136
                </text>
              </g>
              <g id="_2.133" data-name="2.133" className="room-map-group">
                <polyline points="497.2 230.95 497.04 234.55 516.07 235.43 517.33 214.88 497.96 213.97 497.38 226.91" />
                <text
                  transform="translate(497.96 228.42)"
                  className="map-element-label">
                  133
                </text>
              </g>
              <g id="_3.188" data-name="3.188" className="room-map-group">
                <polyline
                  id="_3.188-2"
                  data-name="3.188"
                  points="619.58 150.01 620.08 147.61 672.39 158.18 667.04 183.42 640.02 178.33 642.42 166.13 640.02 178.33 624.78 175.46 625.76 170.44 628.44 157.15 643.75 160.32 628.44 157.15 625.76 170.44 615.71 168.55 618.48 155.23 623.18 156.16 618.48 155.23 619.01 152.72"
                />
                <text
                  transform="translate(633.83 171.08)"
                  className="map-element-label">
                  188
                </text>
              </g>
              <g id="_3.187" data-name="3.187" className="room-map-group">
                <polyline points="610.53 196.5 610.04 199.28 662.08 208.39 667.04 183.42 640.02 178.33 637.79 189.79 640.02 178.33 624.78 175.46 621.45 193.34 636.83 196.15 616.72 192.48 621.45 193.34 623.88 180.29 613.74 178.33 610.98 193.94" />
                <text
                  transform="translate(630.13 194.63)"
                  className="map-element-label">
                  187
                </text>
              </g>
              <g id="_3.130" data-name="3.130" className="room-map-group">
                <polyline points="724.86 60.28 724.14 63.06 711.75 59.9 718.05 34.66 730.66 37.83 725.69 57.05" />
                <text
                  transform="translate(722.56 60.37) rotate(-76.23)"
                  className="map-element-label">
                  130
                </text>
              </g>
              <g id="_3.121" data-name="3.121" className="room-map-group">
                <polyline points="670.16 77.17 693.94 82.06 688.76 103.8 655.87 97.57 660.47 75.19 666.94 76.51" />
                <text
                  transform="translate(665.15 93.48)"
                  className="map-element-label">
                  121
                </text>
              </g>
              <g id="_3.129" data-name="3.129" className="room-map-group">
                <polyline points="701.48 53.79 700.69 57.16 711.75 59.9 718.05 34.66 706.56 31.98 702.4 49.82" />
                <text
                  transform="matrix(0.23, -0.97, 0.97, 0.23, 710.41, 57.51)"
                  className="map-element-label">
                  129
                </text>
              </g>
              <g id="_3.126" data-name="3.126" className="room-map-group">
                <polyline
                  id="AREA"
                  points="664.67 54.15 662.22 66.68 618.42 59.3 624.5 14.12 670.67 23.52 665.37 50.59"
                />
                <text
                  transform="translate(633.83 47.29)"
                  className="map-element-label">
                  126
                </text>
              </g>
              <g id="_3.125" data-name="3.125" className="room-map-group">
                <polygon
                  id="AREA-2"
                  data-name="AREA"
                  points="701.12 74.89 662.22 66.68 670.67 23.52 706.56 31.98 700.69 57.16 705.03 57.87 701.12 74.89"
                />
                <polyline
                  id="DOORS"
                  points="701.93 71.37 701.05 75.19 672.04 68.83"
                />
                <polyline
                  id="DOORS-2"
                  data-name="DOORS"
                  points="701.53 53.56 700.69 57.16 704.96 58.17 702.89 67.18"
                />
                <polyline
                  id="DOORS-3"
                  data-name="DOORS"
                  points="665.37 50.59 670.67 23.52 706.56 31.98 702.4 49.82"
                />
                <polyline
                  id="DOORS-4"
                  data-name="DOORS"
                  points="668.52 68.06 662.22 66.68 664.67 54.15"
                />
                <text
                  transform="translate(674.7 54.85)"
                  className="map-element-label">
                  125
                </text>
              </g>
              <g id="_1.163" data-name="1.163" className="room-map-group">
                <polyline points="306.4 235.93 308.18 244.7 325.77 241.4 323.34 225.12 304.76 227.8 305.82 233.04" />
                <text
                  transform="translate(305.42 238.76)"
                  className="map-element-label">
                  163
                </text>
              </g>
              <g id="_1.164" data-name="1.164" className="room-map-group">
                <polyline points="303.9 223.56 304.76 227.8 323.34 225.12 319.95 202.45 300.35 205.98 303.21 220.11" />
                <text
                  transform="translate(302.65 220.15)"
                  className="map-element-label">
                  164
                </text>
              </g>
              <g id="_3.128" data-name="3.128" className="room-map-group">
                <polyline points="701.93 71.37 701.05 75.19 719.83 80.18 724.14 63.06 704.96 58.17 702.89 67.18" />
                <text
                  transform="translate(702.83 73.52)"
                  className="map-element-label">
                  128
                </text>
              </g>
              <g id="UNKNOWN" className="room-map-group tech">
                <polyline points="661.61 69.63 662.22 66.68 618.42 59.3 609.7 123.41 649.17 130.13 680.89 136.77 688.76 103.8 655.87 97.57 661.13 71.98" />
              </g>
              <g
                id="_3.KITCHEN"
                data-name="3.KITCHEN"
                className="room-map-group tech">
                <path
                  className="map-element-wall"
                  d="M842.43,265.91l-15.76,48.95,22.13,6.76L831.44,374.4l14.1,4.68L837,403l82.56,34.72,46.58-89.14a32.13,32.13,0,0,0-19.32-45.62l-33.59-13.07L881.7,278.39Z"
                  transform="translate(-51.48 -211.06)"
                />
              </g>
            </g>
            <g id="INFO">
              <g id="_1.ACTZAL" data-name="1.ACTZAL" className="room-map-group">
                <polygon points="186.96 302.27 180.61 283.46 183.78 282.35 150.25 187.78 166.12 183.31 187.17 254.41 166.12 183.31 220.81 167.91 240.98 238.76 220.81 167.91 234.56 164.03 258 260.18 261.91 259.07 266.88 279.45 186.96 302.27" />
                <text
                  transform="translate(176.47 227.98) rotate(-16.04)"
                  className="map-element-label">
                  А
                  <tspan x="9.25" y="0" className="map-element-label">
                    К
                  </tspan>
                  <tspan x="17.88" y="0" className="map-element-label">
                    Т
                  </tspan>
                  <tspan x="24.86" y="0" className="map-element-label">
                    ОВЫЙ
                  </tspan>
                  <tspan x="19.26" y="18.14" className="map-element-label">
                    З
                  </tspan>
                  <tspan x="26.69" y="18.14" className="map-element-label">
                    А
                  </tspan>
                  <tspan x="36.46" y="18.14" className="map-element-label">
                    Л
                  </tspan>
                </text>
              </g>
              <g id="_1.BIBLIO" data-name="1.BIBLIO" className="room-map-group">
                <path
                  className="map-element-wall"
                  d="M198.71,391.49l36.55,101.92-17.35,5.81,11.31,30.34-57.68,23.85L56,349.7h0a33.19,33.19,0,0,1,16.65-45.56l20.27-8.6,42.26,85.89,38.94-14.92,6.12,15.56,13.52-4.46,2.68,7.47"
                  transform="translate(-51.48 -211.06)"
                />
                <text
                  transform="matrix(0.94, -0.35, 0.35, 0.94, 82.12, 237.21)"
                  className="map-element-label">
                  <tspan className="map-element-label">Б</tspan>
                  <tspan x="9.85" y="0" className="map-element-label">
                    И
                  </tspan>
                  <tspan x="21.78" y="0" className="map-element-label">
                    Б
                  </tspan>
                  <tspan x="31.77" y="0" className="map-element-label">
                    ЛИО
                  </tspan>
                </text>
              </g>
              <g id="_2.ATRIUM" data-name="2.ATRIUM" className="room-map-group">
                <polyline
                  fill="none"
                  points="475.17 137.7 501.39 138.17 499.45 181.14"
                />
                <line x1="452.77" y1="137.7" x2="466.16" y2="137.7" />
                <polyline
                  fill="none"
                  points="443.87 138.15 417.45 139.07 419.65 182.11"
                />
                <polyline
                  fill="none"
                  points="478 242.41 496.69 242.18 497.2 230.93 496.69 242.18 495.42 268.39"
                />
                <polyline
                  fill="none"
                  points="441.42 243.55 422.58 243.37 420.04 190.32 422.58 243.37 424.3 270.25"
                />
                <text
                  transform="translate(433.3 195.61)"
                  className="map-element-label">
                  <tspan className="map-element-label">А</tspan>
                  <tspan x="8.61" y="0" className="map-element-label">
                    ТРИ
                  </tspan>
                  <tspan x="34.19" y="0" className="map-element-label">
                    У
                  </tspan>
                  <tspan x="41.95" y="0" className="map-element-label">
                    М
                  </tspan>
                </text>
              </g>
              <g
                id="_3.CANTEEN"
                data-name="3.CANTEEN"
                className="room-map-group">
                <polyline
                  id="_3.CANTEEN-2"
                  data-name="3.CANTEEN"
                  points="769.43 176.57 766.59 185.29 771.19 186.61 738.51 277.25 751.23 282.09 741.26 311.05 809.15 339.02 868.04 226.61 785.47 191.89 794.06 168.02 774.31 161.57 771.42 170.45"
                />
                <text
                  transform="matrix(0.94, 0.35, -0.35, 0.94, 764.55, 250.48)"
                  className="map-element-label">
                  <tspan className="map-element-label">А</tspan>
                  <tspan x="10.44" y="0" className="map-element-label">
                    С
                  </tspan>
                  <tspan x="20.71" y="0" className="map-element-label">
                    Х
                  </tspan>
                  <tspan x="30.61" y="0" className="map-element-label">
                    АНА
                  </tspan>
                </text>
              </g>
              <g id="TECH.WC.MANS" className="room-map-group tech">
                <polyline
                  id="_1.TECH"
                  data-name="1.TECH"
                  points="150.64 163.91 135.36 168.71 117.43 114.54 149.27 104.75 151.71 113.05 151.71 113.05 136.15 117.38 147.33 155.45"
                />
                <polyline
                  id="_2.TECH.MAN"
                  data-name="2.TECH.MAN"
                  points="495.07 113.47 510.71 114.18 514.17 57.51 480.84 56.5 480.75 66.04 495.32 66.38 495.13 104.58"
                />
                <polyline
                  id="_3.TECH.MAN"
                  data-name="3.TECH.MAN"
                  points="767.86 150.22 777.75 113.63 766 110.04 768.39 101.72 797.32 110.55 779.96 163.34 765.19 158.73"
                />
              </g>
              <g id="TECH.WOMANS" className="room-map-group tech">
                <polyline points="215.79 145.44 236.16 140.3 223.2 85.55 177.87 96.84 181.19 108.9 182 111.9 181.19 108.9 190.39 106.56 199.65 140.69 190.69 143.39 189.62 139.82 190.69 143.39 192.85 151.22 209.89 146.93" />
                <polyline points="701.87 142.09 680.89 136.77 693.94 82.06 739.93 93.61 736.57 105.66 735.76 108.65 736.57 105.66 727.38 103.28 718.03 137.39 726.98 140.12 728.06 136.55 726.98 140.12 724.79 147.94 707.77 143.6" />
                <polyline
                  id="_2.TECH.WOMAN"
                  data-name="2.TECH.WOMAN"
                  points="424.37 113.79 407.86 114.55 404.41 57.87 451.43 56.44 451.75 71.92 451.69 68.93 442.3 69.19 442.69 104.49 451.99 104.3 451.94 101.18 452.13 112.51 435.65 113.24 452.13 112.51 451.99 104.3 442.69 104.49 431.83 104.66 431.05 74.5 413.08 74.99 414.26 105.32 423.97 104.99"
                />
                <g>
                  <path
                    fill="#007aff"
                    d="M505.66,287.67l-13.81.05a1.59,1.59,0,0,0-1.59,1.6l.05,13.81a1.6,1.6,0,0,0,1.6,1.59l13.81-.05a1.6,1.6,0,0,0,1.59-1.6l-.05-13.82A1.59,1.59,0,0,0,505.66,287.67Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M502.49,292.46l0,7.44-7.44,0,0-7.43Zm0-1.06-7.43,0a1.08,1.08,0,0,0-1.06,1.07l0,7.44a1.07,1.07,0,0,0,1.06,1.06l7.44,0a1.07,1.07,0,0,0,1.06-1.07l0-7.43A1.06,1.06,0,0,0,502.48,291.4Zm-4.75,8v-2.12h.54v-1.33a1.06,1.06,0,0,0-1.07-1.06h-.53a1.07,1.07,0,0,0-1.06,1.07v1.33h.53v2.13Zm-.81-5a.67.67,0,1,0-.67-.66A.67.67,0,0,0,496.92,294.34Zm5.05,1.31-1.34-2.12-1.32,2.13Zm-2.65,1.07,1.33,2.12,1.32-2.13Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#007aff"
                    d="M775.08,320.15l13.79.83a1.6,1.6,0,0,1,1.5,1.69l-.83,13.78a1.6,1.6,0,0,1-1.69,1.5l-13.78-.83a1.59,1.59,0,0,1-1.5-1.68l.83-13.79A1.59,1.59,0,0,1,775.08,320.15Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M785.4,325.56,785,333l-7.43-.45.45-7.42Zm-8.48-.51-.45,7.43a1.07,1.07,0,0,0,1,1.12l7.42.45a1.08,1.08,0,0,0,1.13-1l.44-7.43a1.06,1.06,0,0,0-1-1.12l-7.43-.44A1.05,1.05,0,0,0,776.92,325.05Zm7,7.34.13-2.12.53,0,.08-1.32a1.08,1.08,0,0,0-1-1.13l-.53,0a1.07,1.07,0,0,0-1.13,1l-.08,1.32.53,0-.12,2.12Zm.21-5.71a.67.67,0,0,0-1.33-.08.67.67,0,1,0,1.33.08ZM781,328.49l-1.2-2.2-1.45,2Zm-2.72.9,1.2,2.2,1.46-2Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#007aff"
                    d="M245.64,323.44l-13.79.78a1.6,1.6,0,0,0-1.5,1.69l.79,13.79a1.59,1.59,0,0,0,1.68,1.5l13.79-.79a1.59,1.59,0,0,0,1.5-1.68l-.79-13.79A1.59,1.59,0,0,0,245.64,323.44Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M242.73,328.39l.43,7.43-7.43.42-.42-7.42Zm-.06-1.06-7.42.43a1,1,0,0,0-1,1.12l.42,7.42a1.06,1.06,0,0,0,1.12,1l7.43-.42a1.08,1.08,0,0,0,1-1.12l-.43-7.43A1.07,1.07,0,0,0,242.67,327.33Zm-4.32,8.23-.12-2.12.53,0-.07-1.33a1.08,1.08,0,0,0-1.13-1l-.53,0a1.08,1.08,0,0,0-1,1.12l.08,1.33.53,0,.12,2.12Zm-1.08-5a.67.67,0,1,0-.7-.63A.67.67,0,0,0,237.27,330.57Zm5.11,1-1.44-2-1.21,2.2Zm-2.59,1.22,1.45,2,1.2-2.19Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
              </g>
              <g
                id="_1.MEDIKER"
                data-name="1.MEDIKER"
                className="room-map-group">
                <polyline
                  id="_1.MEDIKER-2"
                  data-name="1.MEDIKER"
                  points="192.89 66.76 185.46 38.49 245.77 24.22 253.54 59.98 219.05 67.62 223.2 85.55 199.39 91.48 194.07 71.24"
                />
                <path
                  fill="#DF0C00"
                  d="M262.84,265.55H249.72a1.52,1.52,0,0,0-1.52,1.52v13.12a1.52,1.52,0,0,0,1.52,1.52h13.12a1.51,1.51,0,0,0,1.51-1.52V267.07A1.51,1.51,0,0,0,262.84,265.55Z"
                  transform="translate(-51.48 -211.06)"
                />
                <path
                  fill="#fff"
                  d="M250.22,267.58a1.42,1.42,0,0,0,.09.37c.29.68,1.37,1.49,3.25,2.45a4.69,4.69,0,0,1,1.78,1.3,2.49,2.49,0,0,1,.59,1.49v.11h-2.88l0,.07a.68.68,0,0,0,.18.33,4.17,4.17,0,0,0,1,.56,3.6,3.6,0,0,1,1.42.91c.08.1.17.24.21.3a1.65,1.65,0,0,1,.15.51l0,.09-.11.06a1.07,1.07,0,0,0-.25,1.47,1.08,1.08,0,0,0,.33.32s0,0,0,.89v.88l.08,0a.83.83,0,0,0,.54-.5,1.13,1.13,0,0,0,.11-.55,1.22,1.22,0,0,0-.22-.76l-.08-.12v-.64c0-.35,0-.64,0-.64l1.06-.26a11,11,0,0,0,1.35-.46,2.71,2.71,0,0,0,1.69-2,3.42,3.42,0,0,0,0-1,2.19,2.19,0,0,0-.48-1,1.33,1.33,0,0,0-1-.49,1.44,1.44,0,0,0-1.28.66,2.28,2.28,0,0,0-.31.75v.06h.24a1.26,1.26,0,0,0,1-.45,1.22,1.22,0,0,0,.22-.32c.08-.15.08-.15.15-.15a1.08,1.08,0,0,1,.94.7,1.79,1.79,0,0,1,.14.75,1.65,1.65,0,0,1-.46,1.19,4.38,4.38,0,0,1-2.1,1.12c-.3.09-1,.28-1.07.28a.92.92,0,0,1,.07-.3,1.94,1.94,0,0,1,.59-.75,5.79,5.79,0,0,1,.88-.51,8.42,8.42,0,0,0,1-.51.79.79,0,0,0,.39-.51v-.05h-2.85v-.09a3.25,3.25,0,0,1,.09-.59,2.84,2.84,0,0,1,.79-1.24,5.49,5.49,0,0,1,1.65-1.07c1.92-1,3.08-1.93,3.16-2.63v-.11h-1.1c-.66,0-1.18,0-1.27,0a1.9,1.9,0,0,0-1.16.65,5.66,5.66,0,0,0-.63.94,4,4,0,0,1-.73,1.07,1.24,1.24,0,0,1-.24.19,1.14,1.14,0,0,1-.43.14h-.06v-.22a1.15,1.15,0,0,0-.29-.9c-.15-.18-.14-.18-.29,0a1.17,1.17,0,0,0-.26.48,1.09,1.09,0,0,0,0,.41v.27h-.1a1.14,1.14,0,0,1-.47-.2,2.38,2.38,0,0,1-.54-.61l-.35-.6-.34-.58a2.07,2.07,0,0,0-1.39-1,8.55,8.55,0,0,0-1.31,0Z"
                  transform="translate(-51.48 -211.06)"
                />
              </g>
              <g
                id="_12.STAIRS"
                data-name="12.STAIRS"
                className="room-map-group stairs">
                <polyline points="310.31 138 323.34 225.12 329.89 224.27 326.72 199.72 338.31 198.01 341.9 222.83 348.24 222 348.24 222 335.32 134.12" />
                <polyline points="292.09 16.1 308.75 127.52 316 126.45 312.25 102.28 324.06 100.69 327.65 124.73 333.81 123.82 317.34 11.8" />
                <g>
                  <path
                    fill="#007aff"
                    d="M392.71,414.11h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,392.71,414.11Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M389.71,418.61v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,389.71,417.61Zm-.5,1.5H387v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67H388v-1.67h1.21Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#007aff"
                    d="M378.23,315.38h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,378.23,315.38Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M375.23,319.88v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,375.23,318.88Zm-.5,1.5h-2.21V322h-1.29v1.67h-1.29v1.67h-1.21v1h2.21v-1.67h1.29v-1.66h1.29v-1.67h1.21Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <polygon points="306.91 51.42 311.41 81.84 317.77 80.86 313.4 50.54 306.91 51.42" />
              </g>
              <g
                id="_23.STAIRS"
                data-name="23.STAIRS"
                className="room-map-group stairs">
                <polyline points="624.5 14.66 609.31 126.25 601.65 125.11 605.17 99.41 593.67 97.92 590.09 123.37 583.29 122.36 597.6 10.72" />
                <polyline points="581.98 132.55 570.74 220.29 577.74 221.18 581.73 194.11 592.3 195.55 588.69 222.32 595.2 223.11 607.96 136.18" />
                <g>
                  <path
                    fill="#007aff"
                    d="M642.64,411.1h-13a1.51,1.51,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,642.64,411.1Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M639.64,415.6v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,639.64,414.6Zm-.5,1.5h-2.21v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67h1.29V417.1h1.21Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#007aff"
                    d="M655.58,314.18h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,655.58,314.18Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M652.58,318.68v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,652.58,317.68Zm-.5,1.5h-2.21v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67h1.29v-1.67h1.21Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <polygon points="602.7 47.85 598.56 78.56 604.95 79.46 609.48 48.78 602.7 47.85" />
              </g>
              <g id="ESCAPES" className="room-map-group tech">
                <polyline points="514.51 260.37 516.07 235.43 501.98 234.78 500.11 264.58 502.01 264.66 501.74 269.09 511.37 269.58 511.56 264.94 514.21 265.09 514.29 263.83" />
                <polyline points="404.63 265.06 404.71 266.41 408.05 266.2 408.26 270.25 417.81 269.63 417.55 265.67 419.28 265.56 417.26 235.88 402.78 237.28 404.4 261.64" />
                <polygon points="269.73 291.15 261.91 259.07 276.13 255.81 283.17 287.89 269.73 291.15" />
                <polygon points="738.51 277.25 751.23 282.09 741.26 311.05 727.81 306.93 738.51 277.25" />
                <polygon points="190.82 313.72 180.61 283.46 166.43 288.15 177.73 318.5 190.82 313.72" />
                <polygon points="643.04 250.98 660.97 254.89 653.08 290.11 638.54 286.79 639.71 281.31 636.67 280.55 643.04 250.98" />
                <g>
                  <path
                    fill="#34C759"
                    d="M469.69,473.32h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,469.69,473.32Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M464.46,477.94a1,1,0,1,0-1-1A1,1,0,0,0,464.46,477.94Zm-1.8,6.95.5-2.2,1,1v3h1v-3.75l-1-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25.05-.4.05l-2.6,1.1v2.35h1V480l.9-.35-.8,4.05-2.45-.5-.2,1Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#34C759"
                    d="M563.77,472.64h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,563.77,472.64Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M558.55,477.27a1,1,0,1,0-1-1A1,1,0,0,0,558.55,477.27Zm-1.8,7,.5-2.2,1,1v3h1v-3.75l-1-1,.3-1.5A3.66,3.66,0,0,0,561.3,481v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25.05-.4.05l-2.6,1.1V481h1v-1.7l.9-.35-.8,4-2.45-.5-.2,1Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#34C759"
                    d="M332.86,491.23h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,332.86,491.23Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M327.64,495.85a1,1,0,1,0-1-1A1,1,0,0,0,327.64,495.85Zm-1.8,6.95.5-2.2,1.05,1v3h1v-3.75l-1.05-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25,0-.4,0l-2.6,1.1v2.35h1v-1.7l.9-.35-.8,4.05-2.45-.5-.2,1Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#34C759"
                    d="M792.72,510.73h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,792.72,510.73Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M787.5,515.35a1,1,0,1,0-1-1A1,1,0,0,0,787.5,515.35Zm-1.8,6.95.5-2.2,1,1v3h1v-3.75l-1-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25,0-.4,0l-2.6,1.1v2.35h1v-1.7l.9-.35-.8,4.05-2.45-.5-.2,1Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#34C759"
                    d="M241.76,518.73h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,241.76,518.73Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M236.54,523.35a1,1,0,1,0-1-1A1,1,0,0,0,236.54,523.35Zm-1.8,6.95.5-2.2,1,1v3h1v-3.75l-1-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25,0-.4,0l-2.6,1.1v2.35h1v-1.7l.9-.35-.8,4.05-2.45-.5-.2,1Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#34C759"
                    d="M701,487.23H688a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,701,487.23Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M695.8,491.85a1,1,0,1,0-1-1A1,1,0,0,0,695.8,491.85ZM694,498.8l.5-2.2,1,1v3h1v-3.75l-1-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25,0-.4,0l-2.6,1.1v2.35h1v-1.7l.9-.35-.8,4.05-2.45-.5-.2,1Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g
                  id="_2.ESC_NEW"
                  data-name="2.ESC_NEW"
                  className="room-map-group tech">
                  <polyline points="475.81 56.34 480.84 56.5 480.28 112.79 466.25 112.15 466.95 56.08 471.65 56.22" />
                </g>
                <polygon
                  id="_1.ESC_NEW"
                  data-name="1.ESC_NEW"
                  points="165.45 159.38 179.48 155.04 162.99 100.77 149.27 104.75 165.45 159.38"
                />
                <polygon
                  id="_3.ESC_NEW"
                  data-name="3.ESC_NEW"
                  points="768.39 101.72 755.76 146.98 741.96 143.09 739.44 152.02 754.23 156.42 739.44 152.02 754.79 97.57 768.39 101.72"
                />
              </g>
              <g id="WC.WOMANS" className="room-map-group another">
                <polyline points="212.49 137.79 209.09 138.64 201.53 110.53 220.22 105.65 226.9 134.46 217.38 136.81" />
                <polyline points="424.45 104.97 414.26 105.32 412.49 75.01 431.05 74.5 431.83 104.66 429.88 104.73" />
                <polyline points="699.43 131.29 689.52 128.84 696.35 99.81 714.63 104.25 706.73 133.03 704.38 132.44" />
                <g>
                  <path
                    fill="#007aff"
                    d="M272.61,326h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,272.61,326Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M267.11,339v-3h1.5l-1.27-3.81a1,1,0,0,0-.95-.69h-.06a1,1,0,0,0-.95.69L264.11,336h1.5v3Zm-.75-8a1,1,0,1,0-1-1A1,1,0,0,0,266.36,331Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#007aff"
                    d="M480.62,295.34h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,480.62,295.34Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M475.12,308.34v-3h1.5l-1.27-3.82a1,1,0,0,0-1-.68h-.06a1,1,0,0,0-.95.68l-1.27,3.82h1.5v3Zm-.75-8a1,1,0,0,0,0-2,1,1,0,0,0,0,2Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#007aff"
                    d="M757.81,324.47h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5V326A1.5,1.5,0,0,0,757.81,324.47Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M752.31,337.47v-3h1.5l-1.27-3.82a1,1,0,0,0-.95-.68h-.06a1,1,0,0,0-.95.68l-1.27,3.82h1.5v3Zm-.75-8a1,1,0,0,0,0-2,1,1,0,0,0,0,2Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
              </g>
              <g id="WC.MANS" className="room-map-group another">
                <polyline points="761.21 148.53 755.43 146.82 766 110.04 777.75 113.63 767.86 150.22 766.1 149.63" />
                <polyline points="486.81 104.47 480.28 104.14 480.75 66.04 495.32 66.38 495.13 104.58 493.07 104.58" />
                <polyline points="149.62 154.8 147.33 155.45 136.15 117.38 151.72 113.1 162.64 151.48 154.93 153.57" />
                <g>
                  <path
                    fill="#007aff"
                    d="M208.23,343h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,208.23,343Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M201,356v-3.75h-.75v-2.75a1,1,0,0,1,1-1h1.5a1,1,0,0,1,1,1v2.75H203V356Zm1-8a1,1,0,1,0-1-1A1,1,0,0,0,202,348Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#007aff"
                    d="M546.26,294.24h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,546.26,294.24Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M539,307.24v-3.75h-.75v-2.75a1,1,0,0,1,1-1h1.5a1,1,0,0,1,1,1v2.75H541v3.75Zm1-8a1,1,0,0,0,0-2,1,1,0,0,0,0,2Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
                <g>
                  <path
                    fill="#007aff"
                    d="M822.89,340.47h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5V342A1.5,1.5,0,0,0,822.89,340.47Z"
                    transform="translate(-51.48 -211.06)"
                  />
                  <path
                    fill="#fff"
                    d="M815.64,353.47v-3.75h-.75V347a1,1,0,0,1,1-1h1.5a1,1,0,0,1,1,1v2.75h-.75v3.75Zm1-8a1,1,0,1,0,0-2,1,1,0,0,0,0,2Z"
                    transform="translate(-51.48 -211.06)"
                  />
                </g>
              </g>
            </g>
          </svg>
        </TransformComponent>
      )}
    </TransformWrapper>
  );
};

export default FirstFloor;
