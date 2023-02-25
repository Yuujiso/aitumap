import React, { useState } from "react";
import { Center, Input, useColorModeValue } from "@chakra-ui/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { isMobile } from "mobile-device-detect";

const FirstFloorIOS = () => {
  const { height, width } = useWindowDimensions();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    const groups = document.querySelectorAll(
      `[data-name="${event.target.value.toUpperCase()}"]`
    );

    if (groups.length > 0) {
      groups.forEach((group) => {
        group.classList.add("room-map-group-search-target");
      });
    }

    const groupsToRemove = document.querySelectorAll(
      `[data-name]:not([data-name="${event.target.value.toUpperCase()}"])`
    );

    if (groupsToRemove.length > 0) {
      groupsToRemove.forEach((group) => {
        group.classList.remove("room-map-group-search-target");
      });
    }
  };

  let inputWidth = isMobile ? width : 400;

  return (
    <>
      <Center pos="absolute" w={width} zIndex={101}>
        <Input
          p={5}
          mt={2.5}
          w={inputWidth}
          bg={useColorModeValue("#242a36", "#edf2f7")}
          color={useColorModeValue("#edf2f7", "#242a36")}
          type="text"
          placeholder="Search room: e.g. type: 3.126"
          _placeholder={{ color: useColorModeValue("#edf2f7", "#242a36") }}
          value={searchTerm}
          onChange={handleSearch}
        />
      </Center>
      <TransformWrapper defaultScale={1}>
        {({
          zoomIn,
          zoomOut,
          resetTransform,
          positionX,
          positionY,
          ...rest
        }) => (
          <TransformComponent>
            <svg
              width={width}
              height={height}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 918.73 343.62">
              <defs>
                <style>
                  {`  
                  .map-group,
                  .text-map-group,
                  .room-map-group,
                  .gym-map-group{
                    fill:#4da2ff;
                  }

                  .map-group.tech{
                    fill:#bfbfbf;
                    pointer-events: none;
                  }

                  .map-group.stairs{
                    fill:none;
                    pointer-events: none;
                  }

                  .map-group.another{
                    fill:#ac7ab6;
                    pointer-events: none;
                  }

                  .map-group .map-element-wall,
                  .map-group polyline,
                  .map-group line,
                  .map-group polygon,
                  .room-map-group .map-element-wall,
                  .room-map-group polyline,
                  .room-map-group line, 
                  .room-map-group polygon,
                  .gym-map-group .map-element-wall,
                  .gym-map-group path,
                  .gym-map-group polyline,
                  .gym-map-group line, 
                  .gym-map-group polygon,
                  .text-map-group .map-element-wall,
                  .text-map-group polyline,
                  .text-map-group line, 
                  .text-map-group polygon{
                    stroke:#7f7f7f;
                  }

                  .pole-map-group path,
                  .pole-map-group line, 
                  .pole-map-group polygon{
                    stroke:#7f7f7f;
                    stroke-miterlimit:10;
                    stroke-width: 0.75;
                    fill:none;
                  }

                  path.map-noway-wall,
                  polyline.map-noway-wall,
                  line.map-noway-wall{
                    stroke:#7f7f7f;
                    fill:none;
                  }

                  .room-map-group path{
                    stroke:#ffffff !important;
                    stroke-width: 0.1 !important;
                    fill: #ffffff !important;
                  }

                  .text-map-group path{
                    stroke:#7f7f7f !important;
                    stroke-width: 0.1 !important;
                    fill: #7f7f7f !important;
                  }
                  
                  .room-map-group text,
                  .room-map-group tspan{
                    color: #ffffff;
                    fill: #ffffff;
                    font-size: 11px !important;
                    font-family: sans-serif !important;
                    text-rendering: optimizeSpeed;
                  }
                  
                  .text-map-group text,
                  .text-map-group tspan{
                    font-size: 14px !important;
                    font-family: sans-serif !important;
                    text-rendering: optimizeSpeed;
                  }
                  
                  .map-group map-element-label,
                  .room-map-group map-element-label,
                  .room-map-group text.map-element-label,
                  .room-map-group tspan.map-element-label  {
                    color: #ffffff !important;
                    fill: #ffffff !important;
                    font-size: 11px !important;
                    font-family: sans-serif !important;
                    text-rendering: optimizeSpeed !important;
                  }

                  .room-map-group:hover{
                    fill:#62cf6b;
                  }

                  .room-map-group-search-target{
                    fill:#62cf6b;
                  }
                `}
                </style>
              </defs>
              <g id="WALLPAPER">
                <g id="BG">
                  <path
                    stroke="#7f7f7f"
                    fill="#7f7f7f"
                    d="M516.43,211.06v3c47.29,0,93,2.77,132.51,8l-2.66,22.66-.34,2.94,2.93.38,20.55,2.67,2.89.38.46-2.88L676.3,226c139.87,29.13,174.62,40.48,272.24,79.53,8.55,3.42,14.28,8.85,17,16.15,3.3,8.74,2.12,20.17-3.13,30.54-17.48,33.24-34.81,66.9-51.56,99.46-16.34,31.73-33.21,64.52-50.24,96.93-33.61-14.92-49.54-21.54-81-31.42l2.52-7.46,1-3-3.09-.83L711,487.26l-3-.83-.67,3.08c-.67,3.08-1.76,7.86-2.48,10.95-9.54-2.49-40-10.21-66.17-14l2.81-19.77.43-3-3-.37L620.15,461l-2.9-.36-.43,2.88c-.07.45-.3,1.8-.6,3.51-1.52,8.83-2.35,13.9-2.73,16.91-28.77-3.51-37.93-4.33-66.21-5.11l.22-9.88.08-3.13-3.13.06-66.18,1.32-3.14.07.2,3.13c.15,2.26.23,4.14.32,6.13.05,1.1.09,2.22.15,3.42-30.86.94-38.27,1.66-67.91,5.66l-2.79-19-.43-3-3,.46-19.95,3.05-2.94.46.43,2.94c.26,1.82.85,6.38,1.43,10.8.36,2.83.74,5.73,1,7.94l-2.48.38c-28.59,4.42-30.6,4.73-58.61,11.49l-2.09-8.79-.73-3.06-3,.86L240.66,511.4l-3,.86,1,3,2.84,8.51c-24.82,8.84-36.45,13.4-70,28.17L59.78,350.74c-5.57-11.28-6.74-20.63-3.6-28.57,3.75-9.5,13.61-17,31-23.5a1482,1482,0,0,1,186.3-56.58c36.71-8.42,61.4-12.28,69.52-13.45l3.25,22.25.43,2.94,2.94-.4L371,250.56l3-.41-.39-3c-.33-2.46-1.14-7.49-2-12.81-.66-4.16-1.35-8.41-1.8-11.46,45.49-5.8,96.13-8.86,146.67-8.86v-3m0,0c-52.18,0-104.36,3.3-150.07,9.27.65,5.11,3.53,22.14,4.21,27.25l-21.33,2.88-3.69-25.2s-107.16,13.48-259.4,70.6c-24.69,9.26-44.91,24.14-29,56.28l113,203.62c36.4-16,47.91-20.51,73.44-29.59a8.91,8.91,0,0,1,1.69-.44l-3.81-11.45L315.58,493l2.78,11.72c32.5-7.85,32-7.61,66.7-13-.53-3.69-2.34-18-2.87-21.68L402.14,467,405.35,489c32.8-4.46,39.19-5.11,73.63-6.14-.31-4.82-.35-8-.65-12.65l66.18-1.32-.3,12.87c32.09.84,40.18,1.64,72.07,5.55-.62-.07,3.16-21.08,3.5-23.33l18.72,2.29L635.27,489c32.06,4.39,71.79,15.2,71.79,15.2s2.11-9.09,3.18-14l69,18.65-3.51,10.38c33.91,10.54,49.45,17,86.22,33.35,35-66.46,68.16-132.42,103.11-198.88,8.22-16.24,9.54-40.87-15.46-50.87-99.78-39.91-134.74-51-275.82-80.31l-4,25.27-20.54-2.67,3-25.59c-42.12-5.76-89-8.42-135.83-8.42Z"
                    transform="translate(-50.86 -160.27)"
                  />
                </g>
                <g
                  id="_23.STAIRS"
                  data-name="23.STAIRS"
                  className="map-group stairs">
                  <polyline
                    className="map-element-wall"
                    points="625.13 65.45 609.93 177.05 602.27 175.9 605.79 150.2 594.29 148.71 590.71 174.17 583.91 173.15 598.22 61.51"
                  />
                  <polyline
                    className="map-element-wall"
                    points="582.61 183.35 571.36 271.09 578.36 271.97 582.36 244.9 592.92 246.34 589.31 273.12 595.83 273.9 608.58 186.97"
                  />
                  <g>
                    <path
                      fill="#007aff"
                      d="M642.64,411.1h-13a1.51,1.51,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,642.64,411.1Z"
                      transform="translate(-50.86 -160.27)"
                    />
                    <path
                      fill="#fff"
                      d="M639.64,415.6v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,639.64,414.6Zm-.5,1.5h-2.21v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67h1.29V417.1h1.21Z"
                      transform="translate(-50.86 -160.27)"
                    />
                  </g>
                  <g>
                    <path
                      fill="#007aff"
                      d="M655.58,314.18h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,655.58,314.18Z"
                      transform="translate(-50.86 -160.27)"
                    />
                    <path
                      fill="#fff"
                      d="M652.58,318.68v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,652.58,317.68Zm-.5,1.5h-2.21v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67h1.29v-1.67h1.21Z"
                      transform="translate(-50.86 -160.27)"
                    />
                  </g>
                  <polygon
                    className="map-element-wall"
                    points="603.32 98.65 599.18 129.35 605.57 130.25 610.1 99.57 603.32 98.65"
                  />
                </g>
                <g
                  id="_12.STAIRS"
                  data-name="12.STAIRS"
                  className="map-group stairs">
                  <polyline
                    className="map-element-wall"
                    points="310.94 188.79 323.96 275.92 330.52 275.07 327.35 250.51 338.93 248.8 342.52 273.62 348.86 272.79 348.86 272.79 335.95 184.91"
                  />
                  <polyline
                    className="map-element-wall"
                    points="292.71 66.89 309.37 178.31 316.63 177.24 312.87 153.07 324.69 151.49 328.27 175.52 334.43 174.62 317.96 62.59"
                  />
                  <g>
                    <path
                      fill="#007aff"
                      d="M392.71,414.11h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,392.71,414.11Z"
                      transform="translate(-50.86 -160.27)"
                    />
                    <path
                      fill="#fff"
                      d="M389.71,418.61v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,389.71,417.61Zm-.5,1.5H387v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67H388v-1.67h1.21Z"
                      transform="translate(-50.86 -160.27)"
                    />
                  </g>
                  <g>
                    <path
                      fill="#007aff"
                      d="M378.23,315.38h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,378.23,315.38Z"
                      transform="translate(-50.86 -160.27)"
                    />
                    <path
                      fill="#fff"
                      d="M375.23,319.88v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,375.23,318.88Zm-.5,1.5h-2.21V322h-1.29v1.67h-1.29v1.67h-1.21v1h2.21v-1.67h1.29v-1.66h1.29v-1.67h1.21Z"
                      transform="translate(-50.86 -160.27)"
                    />
                  </g>
                  <polygon
                    className="map-element-wall"
                    points="307.53 102.21 312.03 132.63 318.39 131.65 314.02 101.33 307.53 102.21"
                  />
                </g>
              </g>
              <g id="BLOCKS">
                <g id="C1.3">
                  <path
                    id="C1.3"
                    fill="#7f7f7f"
                    d="M811.25,218l-3.48-.92a11.82,11.82,0,0,0-2.21-7.55,11.87,11.87,0,0,0-2.94-2.84,13,13,0,0,0-4-1.79,12.46,12.46,0,0,0-7.06.14,13.68,13.68,0,0,0-6.18,4.26,20.66,20.66,0,0,0-4.1,8.39,20.91,20.91,0,0,0-.6,9.37,13.63,13.63,0,0,0,3.28,6.73,12.49,12.49,0,0,0,6.07,3.59,12.62,12.62,0,0,0,4.35.42,12.15,12.15,0,0,0,4-1,11.62,11.62,0,0,0,3.29-2.24A11.35,11.35,0,0,0,804,231.3l3.49.92a15.74,15.74,0,0,1-3,4.41,15,15,0,0,1-4.27,3.08,15.17,15.17,0,0,1-5.18,1.45,16.63,16.63,0,0,1-5.83-.53,15.88,15.88,0,0,1-7.86-4.64,16.93,16.93,0,0,1-4-8.33A27.4,27.4,0,0,1,782.76,207a16.85,16.85,0,0,1,7.61-5.23,15.81,15.81,0,0,1,9.13-.16,16.57,16.57,0,0,1,5.33,2.42,14.64,14.64,0,0,1,3.79,3.82,15,15,0,0,1,2.18,4.78A15.38,15.38,0,0,1,811.25,218Zm22.19-6.83-10.05,38-3.46-.92L829,213.87l-.22-.06-10.47,3.56,1-3.59,10.54-3.58Zm1.93,41.44a2.71,2.71,0,0,1-1.68-1.28,2.68,2.68,0,0,1-.28-2.1,2.77,2.77,0,0,1,5.06-.68,2.68,2.68,0,0,1,.28,2.09,2.61,2.61,0,0,1-.73,1.24,2.77,2.77,0,0,1-1.22.73A2.67,2.67,0,0,1,835.37,252.59Zm22,6.07a15.48,15.48,0,0,1-5.93-2.92,11.2,11.2,0,0,1-3.44-4.69,9.73,9.73,0,0,1-.33-5.67l3.51.93a6.45,6.45,0,0,0,.32,4,8.2,8.2,0,0,0,2.51,3.25,11.39,11.39,0,0,0,4.15,2,10.82,10.82,0,0,0,4.89.24,8.14,8.14,0,0,0,3.87-1.85,7.19,7.19,0,0,0,2.18-3.59A7.45,7.45,0,0,0,869,246a7.91,7.91,0,0,0-2.63-3.63,12.8,12.8,0,0,0-4.93-2.36l-2.22-.59.82-3.11,2.23.59a10.52,10.52,0,0,0,4.59.26,7.49,7.49,0,0,0,3.67-1.75,6.91,6.91,0,0,0,2.11-3.54,7.33,7.33,0,0,0,0-3.94,6.85,6.85,0,0,0-2-3.21,8.64,8.64,0,0,0-3.74-2,9.86,9.86,0,0,0-4.27-.21,7.79,7.79,0,0,0-3.6,1.62,6.79,6.79,0,0,0-2.16,3.38l-3.36-.89a9.69,9.69,0,0,1,3-4.78,11,11,0,0,1,5.1-2.41,13.29,13.29,0,0,1,6.12.25,12.1,12.1,0,0,1,5.44,2.9,10.25,10.25,0,0,1,2.82,4.66,9.88,9.88,0,0,1,0,5.34,9.27,9.27,0,0,1-3.23,5.1,9.39,9.39,0,0,1-5.59,1.93l-.06.24a9.92,9.92,0,0,1,4.86,4.74,9.53,9.53,0,0,1,.48,6.65,10.12,10.12,0,0,1-3,5.05,11.66,11.66,0,0,1-5.39,2.66A14.42,14.42,0,0,1,857.36,258.66Z"
                    transform="translate(-50.86 -160.27)"
                  />
                  {/* <path
                  id="_3.BG"
                  data-name="3.BG"
                  
                  d="M638.76,487.67c32.58,5.38,66.83,13.71,66.83,13.71l3.09-13.48,73.07,20-3.53,10c34.79,12.55,45.06,17.41,81.83,33.76,35-66.47,70.1-131.56,105.05-198,8.22-16.24,9.55-40.87-15.45-50.87C849.86,262.87,817.07,254.5,676,225.18Z"
                  transform="translate(-50.86 -160.27)"
                /> */}
                  <g id="OTHERS">
                    <g id="FULLGYM" className="gym-map-group">
                      <polygon
                        className="map-element-wall"
                        points="620.7 198.4 607.34 196.14 587.9 327.4 639.16 337.58 640.34 332.1 637.29 331.34 643.66 301.77 661.6 305.69 656.74 327.35 731.97 347.91 771.81 237.4 673.01 208.97 620.7 198.4"
                      />
                      <polygon
                        className="map-element-wall"
                        points="616.34 219.34 614.36 229.12 624.5 231.09 626.38 221.23 616.34 219.34"
                      />
                      <polyline
                        className="map-element-wall"
                        points="626.02 309.25 628.26 298.09 643.66 301.77 637.29 331.34 640.34 332.1 639.16 337.58 621.16 333.57 625.37 312.54"
                      />
                      <line
                        className="map-element-wall"
                        x1="671.65"
                        y1="264.13"
                        x2="684.21"
                        y2="212.19"
                      />
                      <line
                        className="map-element-wall"
                        x1="662.7"
                        y1="259.18"
                        x2="672.4"
                        y2="261.02"
                      />
                      <line
                        className="map-element-wall"
                        x1="661.6"
                        y1="305.69"
                        x2="670.17"
                        y2="270.25"
                      />
                    </g>
                    <g id="POLE" className="pole-map-group">
                      <polygon points="720.49 339.34 750.1 238.77 695.44 223.73 666.1 324.47 704.46 334.96 720.49 339.34" />
                      <polygon points="706.34 312.08 693.29 308.62 682.59 328.98 704.46 334.96 706.34 312.08" />
                      <polygon points="715.07 318.27 682.27 309.54 688.68 287.61 701.25 244.58 733.92 253.64 715.07 318.27" />
                      <polygon points="711.82 228.24 710.13 250.71 723.27 254.37 733.63 234.24 711.82 228.24" />
                      <path
                        d="M750.54,385.17l-2.18,8h0c-4.14,28.7,35.12,38.61,45.88,12.13h0l2.17-7.51Z"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M744.15,468.89h0c3.62-8,14.81-5.61,13.05,3.46h0"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M744.15,468.89"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M744,471.73a8.53,8.53,0,0,1,0-1.35"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M744.9,474.33a6.49,6.49,0,0,1-.58-1.28"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M746.86,476.29a5.87,5.87,0,0,1-1.2-1"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M749.52,477.18a6.51,6.51,0,0,1-1.39-.31"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M752.48,476.84a6.71,6.71,0,0,1-1.56.34"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M755.12,475.27a7.5,7.5,0,0,1-1.13.86"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M756.59,473.49a8.51,8.51,0,0,1-.68.95"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M757.2,472.35"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M774.13,414.63c-3.62,8-14.88,5.49-13.12-3.58"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M774.18,411.67a7.48,7.48,0,0,1,.05,1.35"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M773.3,409.07a5.77,5.77,0,0,1,.59,1.28"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M771.35,407.11a5.81,5.81,0,0,1,1.19,1"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M768.69,406.22a6.5,6.5,0,0,1,1.39.3"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M765.73,406.55a7,7,0,0,1,1.55-.33"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M763.09,408.13a7.5,7.5,0,0,1,1.13-.86"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M761.62,409.91a8.51,8.51,0,0,1,.68-1"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M767.18,498.56l2.18-8h0c4.14-28.7-35.12-38.61-45.88-12.13h0l-2.17,7.51Z"
                        transform="translate(-50.86 -160.27)"
                      />
                      <line x1="680.8" y1="274.01" x2="735.36" y2="288.81" />
                      <line x1="694.99" y1="265.99" x2="727.67" y2="275.09" />
                      <line x1="688.68" y1="287.61" x2="721.37" y2="296.68" />
                      <path
                        d="M752.38,439.9h0c-1.61,9,10.62,11.58,13.57,3.68h0"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M766,443.61c2.13-9.33-10.66-12.21-13.58-3.68"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M748.37,438.81h0c-2.8,14.56,16.06,19.65,21.63,5.87h0"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        d="M770,444.76c3-15.13-16.21-19.76-21.63-5.87"
                        transform="translate(-50.86 -160.27)"
                      />
                    </g>
                    <g
                      id="_3.UNKNOWN"
                      data-name="3.UNKNOWN"
                      className="map-group tech">
                      <polyline points="758.49 138.05 755.42 148.37 775.81 154.59 791.57 105.64 761.31 96.73 757.52 108.96 766.4 111.47 759.58 134.38" />
                    </g>
                    <g
                      id="_3.UNKNOWN-2"
                      data-name="3.UNKNOWN"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="662.24 120.42 662.84 117.47 619.04 110.09 610.32 174.2 649.79 180.92 681.51 187.57 689.38 154.59 656.49 148.37 661.75 122.77"
                      />
                    </g>
                    <g id="KITCHEN" className="map-group tech">
                      <path
                        className="map-element-wall"
                        d="M842.43,265.91l-15.77,48.95,22.13,6.76L831.43,374.4l14.11,4.68L837,403l82.56,34.72,46.58-89.15a32.11,32.11,0,0,0-19.32-45.61l-33.59-13.08-31.49-11.45Z"
                        transform="translate(-50.86 -160.27)"
                      />
                    </g>
                    <g
                      id="_3.DININGHALL"
                      data-name="3.DININGHALL"
                      className="text-map-group">
                      <polyline
                        id="_3.DININGHALL-2"
                        data-name="3.DININGHALL"
                        points="770.05 227.36 767.21 236.08 771.81 237.4 739.13 328.04 751.86 332.88 741.88 361.84 809.77 389.82 868.66 277.4 786.1 242.68 794.68 218.81 774.93 212.37 772.04 221.24"
                      />
                      <text
                        color="#fff"
                        fill="#fff"
                        id="DINNING"
                        transform="translate(781.88 299.27) rotate(22.98)">
                        DINING
                      </text>
                      <text
                        color="#fff"
                        fill="#fff"
                        transform="translate(780.56 315.86) rotate(22.98)">
                        HALL
                      </text>
                    </g>
                  </g>
                  <g id="ROOMS">
                    <g id="_3.188" data-name="3.188" className="room-map-group">
                      <polyline
                        id="_3.188-2"
                        data-name="3.188"
                        points="620.2 200.81 620.7 198.4 673.01 208.97 667.66 234.21 640.64 229.12 643.04 216.93 640.64 229.12 625.4 226.25 626.38 221.23 629.07 207.94 644.38 211.12 629.07 207.94 626.38 221.23 616.34 219.34 619.11 206.02 623.8 206.95 619.11 206.02 619.63 203.51"
                      />
                      <text transform="translate(634.18 221.7)">188</text>
                    </g>
                    <g id="_3.187" data-name="3.187" className="room-map-group">
                      <polyline points="611.15 247.29 610.66 250.08 662.7 259.18 667.66 234.21 640.64 229.12 638.42 240.58 640.64 229.12 625.4 226.25 622.08 244.14 637.45 246.94 617.35 243.27 622.08 244.14 624.5 231.09 614.36 229.12 611.6 244.74" />
                      <text transform="translate(630.66 245.36)">187</text>
                    </g>
                    <g id="_3.168" data-name="3.168" className="room-map-group">
                      <polygon points="788.15 191.11 803.03 195.99 794.68 218.81 780.56 214.2 788.15 191.11" />
                      <text transform="translate(792.29 214.96) rotate(-70.89)">
                        168
                      </text>
                    </g>
                    <g id="_3.130" data-name="3.130" className="room-map-group">
                      <polyline points="725.48 111.07 724.76 113.85 712.37 110.69 718.68 85.45 731.28 88.63 726.31 107.84" />
                      <text transform="translate(723.27 110.64) rotate(-75.06)">
                        130
                      </text>
                    </g>
                    <g id="_3.129" data-name="3.129" className="room-map-group">
                      <polyline points="702.1 104.58 701.31 107.95 712.37 110.69 718.68 85.45 707.18 82.77 703.02 100.61" />
                      <text transform="translate(711.09 107.38) rotate(-75.33)">
                        129
                      </text>
                    </g>
                    <g id="_3.128" data-name="3.128" className="room-map-group">
                      <polyline points="702.55 122.16 701.67 125.98 720.45 130.97 724.76 113.85 705.68 109.03 703.51 117.98" />
                      <text transform="translate(703.72 124.06)">128</text>
                    </g>
                    <g id="_3.126" data-name="3.126" className="room-map-group">
                      <polyline
                        id="AREA"
                        points="665.3 104.94 662.84 117.47 619.04 110.09 625.13 64.91 671.29 74.32 665.99 101.38"
                      />
                      <text transform="translate(634.41 95.27)">126</text>
                    </g>
                    <g id="_3.125" data-name="3.125">
                      <polygon
                        id="AREA-2"
                        data-name="AREA"
                        fill="#4da2ff"
                        points="701.74 125.68 662.84 117.47 671.29 74.32 707.18 82.77 701.31 107.95 705.68 109.03 701.74 125.68"
                      />
                      <polyline
                        id="DOORS"
                        fill="#4da2ff"
                        stroke="#7f7f7f"
                        points="702.55 122.16 701.67 125.98 672.66 119.62"
                      />
                      <polyline
                        id="DOORS-2"
                        data-name="DOORS"
                        fill="#4da2ff"
                        stroke="#7f7f7f"
                        points="702.1 104.58 701.31 107.95 705.68 109.03 703.51 117.98"
                      />
                      <polyline
                        id="DOORS-3"
                        data-name="DOORS"
                        fill="#4da2ff"
                        stroke="#7f7f7f"
                        points="665.99 101.38 671.29 74.32 707.18 82.77 703.02 100.61"
                      />
                      <polyline
                        id="DOORS-4"
                        data-name="DOORS"
                        fill="#4da2ff"
                        stroke="#7f7f7f"
                        points="669.14 118.85 662.84 117.47 665.3 104.94"
                      />
                      <text
                        color="#ffffff"
                        fill="#ffffff"
                        fontSize="11px"
                        fontFamily="sans-serif"
                        transform="translate(675.28 104.71)">
                        125
                      </text>
                    </g>
                    <g id="_3.121" data-name="3.121" className="room-map-group">
                      <polyline points="670.78 127.97 694.57 132.85 689.38 154.59 656.49 148.37 661.09 125.98 667.56 127.31" />
                      <text transform="translate(665.38 145.05)">121</text>
                    </g>
                  </g>
                  <g id="ESCAPES">
                    <g
                      id="_3.ESC.2"
                      data-name="3.ESC.2"
                      className="map-group tech">
                      <polygon points="739.13 328.04 751.86 332.88 741.88 361.84 728.43 357.73 739.13 328.04" />
                      <g>
                        <path
                          fill="#34C759"
                          d="M792.72,510.73h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,792.72,510.73Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M787.5,515.35a1,1,0,1,0-1-1A1,1,0,0,0,787.5,515.35Zm-1.8,6.95.5-2.2,1,1v3h1v-3.75l-1-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25,0-.4,0l-2.6,1.1v2.35h1v-1.7l.9-.35-.8,4.05-2.45-.5-.2,1Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g
                      id="_3.ESC.1"
                      data-name="3.ESC.1"
                      className="map-group tech">
                      <polygon points="643.66 301.77 661.6 305.69 653.7 340.9 639.16 337.58 640.34 332.1 637.29 331.34 643.66 301.77" />
                      <g>
                        <path
                          fill="#34C759"
                          d="M703.24,488.64h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,703.24,488.64Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M698,493.27a1,1,0,1,0-1-1A1,1,0,0,0,698,493.27Zm-1.8,7,.5-2.2,1,1v3h1v-3.75l-1-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25.05-.4.05l-2.6,1.1V497h1v-1.7l.9-.35-.8,4-2.45-.5-.2,1Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g
                      id="_3.ESC.3"
                      data-name="3.ESC.3"
                      className="map-group tech">
                      <polygon
                        id="_3.ESC_NEW"
                        data-name="3.ESC_NEW"
                        points="769.01 152.52 756.39 197.77 742.58 193.88 740.06 202.81 754.86 207.21 740.06 202.81 755.42 148.37 769.01 152.52"
                      />
                    </g>
                  </g>
                  <g id="TECHS">
                    <g
                      id="_3.TECH.WOMAN"
                      data-name="3.TECH.WOMAN"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="702.49 192.89 681.51 187.57 694.57 132.85 740.55 144.4 737.2 156.45 736.38 159.44 737.2 156.45 728 154.08 718.65 188.18 727.6 190.91 728.68 187.34 727.6 190.91 725.42 198.74 708.39 194.39"
                      />
                      <g>
                        <path
                          fill="#007aff"
                          d="M775.08,320.15l13.79.83a1.6,1.6,0,0,1,1.5,1.69l-.83,13.78a1.6,1.6,0,0,1-1.69,1.5l-13.78-.83a1.59,1.59,0,0,1-1.5-1.68l.83-13.79A1.59,1.59,0,0,1,775.08,320.15Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M785.4,325.56,785,333l-7.43-.45.45-7.42Zm-8.48-.51-.45,7.43a1.07,1.07,0,0,0,1,1.12l7.42.45a1.08,1.08,0,0,0,1.13-1l.44-7.43a1.06,1.06,0,0,0-1-1.12l-7.43-.44A1.05,1.05,0,0,0,776.92,325.05Zm7,7.34.13-2.12.53,0,.08-1.32a1.08,1.08,0,0,0-1-1.13l-.53,0a1.07,1.07,0,0,0-1.13,1l-.08,1.32.53,0-.12,2.12Zm.21-5.71a.67.67,0,0,0-1.33-.08.67.67,0,1,0,1.33.08ZM781,328.49l-1.2-2.2-1.45,2Zm-2.72.9,1.2,2.2,1.46-2Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g className="map-group tech">
                      <polyline
                        id="_3.TECH.MAN"
                        data-name="3.TECH.MAN"
                        className="map-element-wall"
                        points="768.49 201.01 778.37 164.43 766.62 160.83 769.01 152.52 797.94 161.35 780.58 214.13 765.81 209.52"
                      />
                    </g>
                  </g>
                  <g id="WCS">
                    <g
                      id="_3.WC.WOMAN"
                      data-name="3.WC.WOMAN"
                      className="map-group another">
                      <polyline points="700.06 182.08 690.15 179.63 696.98 150.6 715.25 155.05 707.35 183.82 705 183.24" />
                      <g>
                        <path
                          fill="#007aff"
                          d="M757.81,324.47h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5V326A1.5,1.5,0,0,0,757.81,324.47Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M752.31,337.47v-3h1.5l-1.27-3.82a1,1,0,0,0-.95-.68h-.06a1,1,0,0,0-.95.68l-1.27,3.82h1.5v3Zm-.75-8a1,1,0,0,0,0-2,1,1,0,0,0,0,2Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g
                      id="_3.WC.MAN"
                      data-name="3.WC.MAN"
                      className="map-group another">
                      <polyline points="761.84 199.32 756.05 197.61 766.62 160.83 778.37 164.43 768.49 201.01 766.73 200.43" />
                      <g>
                        <path
                          fill="#007aff"
                          d="M822.89,340.47h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5V342A1.5,1.5,0,0,0,822.89,340.47Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M815.64,353.47v-3.75h-.75V347a1,1,0,0,1,1-1h1.5a1,1,0,0,1,1,1v2.75h-.75v3.75Zm1-8a1,1,0,1,0,0-2,1,1,0,0,0,0,2Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g id="C2">
                  {/* <path
                  id="_2.BG"
                  data-name="2.BG"
                  
                  d="M407.5,487.09c34-3.38,37-3.62,69.45-4.16l-.92-14h70.12l-.43,11.75c31.73.7,36.24.92,70.91,4l32.89-263.37c-89-12.18-194-11.06-280.76.28Z"
                  transform="translate(-50.86 -160.27)"
                /> */}
                  <path
                    id="C1.2"
                    fill="#7f7f7f"
                    d="M495.69,173.08h-3.6a11.78,11.78,0,0,0-4.07-6.73,12,12,0,0,0-3.57-2,12.82,12.82,0,0,0-4.31-.71,12.49,12.49,0,0,0-6.79,1.94,13.66,13.66,0,0,0-4.89,5.7,24.09,24.09,0,0,0,0,18.37,13.69,13.69,0,0,0,4.89,5.67,12.56,12.56,0,0,0,6.79,1.92,12.82,12.82,0,0,0,4.31-.71,12.15,12.15,0,0,0,3.57-2,11.75,11.75,0,0,0,4.07-6.75h3.6a15.81,15.81,0,0,1-1.8,5,15.14,15.14,0,0,1-8,6.79,16.44,16.44,0,0,1-5.77,1,15.81,15.81,0,0,1-8.78-2.48,16.9,16.9,0,0,1-6-7,27.48,27.48,0,0,1,0-21.36,16.78,16.78,0,0,1,6-7,15.74,15.74,0,0,1,8.78-2.49,16.44,16.44,0,0,1,5.77,1,14.45,14.45,0,0,1,4.64,2.72,14.87,14.87,0,0,1,3.34,4.07A15.48,15.48,0,0,1,495.69,173.08Zm19.7-12.27v39.27H511.8V164.56h-.23l-9.2,6.12V167l9.28-6.15Zm12.46,39.56a2.76,2.76,0,1,1,2.77-2.76,2.62,2.62,0,0,1-.39,1.38,2.69,2.69,0,0,1-1,1A2.55,2.55,0,0,1,527.85,200.37Zm11.65-.29v-2.63L552.33,183q2.5-2.84,4-4.85a16.21,16.21,0,0,0,2.23-3.72,9.22,9.22,0,0,0,.71-3.55,7.16,7.16,0,0,0-3.91-6.54,9,9,0,0,0-4.11-.94,8.46,8.46,0,0,0-4.24,1,7.35,7.35,0,0,0-2.8,2.84,8.45,8.45,0,0,0-1,4.14h-3.44a11,11,0,0,1,1.5-5.77,10.76,10.76,0,0,1,4.12-4,12.18,12.18,0,0,1,5.95-1.44,11.76,11.76,0,0,1,5.83,1.42,10.5,10.5,0,0,1,4,3.81,10.32,10.32,0,0,1,1.45,5.41,11.78,11.78,0,0,1-.76,4.2,19,19,0,0,1-2.59,4.53q-1.85,2.49-5.1,6.1l-9.75,10.87v.25h19.43v3.22Z"
                    transform="translate(-50.86 -160.27)"
                  />
                  <g id="ROOMS-2" data-name="ROOMS">
                    <g id="_2.139" data-name="2.139" className="room-map-group">
                      <polyline points="538.05 219.73 537.86 221.87 577.14 225.57 581.53 192.46 540.88 188.96 538.37 216.33" />
                      <text transform="translate(549.6 211.57)">139</text>
                    </g>
                    <g
                      id="_2.138L"
                      data-name="2.138L"
                      className="room-map-group">
                      <polyline points="535.32 248.94 537.86 221.87 577.14 225.57 573.04 257.7 534.81 254.3 535.01 252.17" />
                      <text transform="translate(544.38 243.67)">138L</text>
                    </g>
                    <g
                      id="_2.137P"
                      data-name="2.137P"
                      className="room-map-group">
                      <polyline points="532.07 284.85 531.84 287.46 568.77 290.44 573.04 257.7 534.81 254.3 532.35 281.72" />
                      <text transform="translate(539.36 276.18)">137P</text>
                    </g>
                    <g id="_2.136" data-name="2.136" className="room-map-group">
                      <polyline points="531.71 288.77 531.84 287.46 568.77 290.44 566.57 307.38 530.23 304.9 531.4 292.18" />
                      <text transform="translate(539.03 301.11)">136</text>
                    </g>
                    <g id="_2.135" data-name="2.135" className="room-map-group">
                      <polyline points="529.82 309.42 528.75 321.08 564.36 324.34 566.57 307.38 530.23 304.9 530.12 306.17" />
                      <text transform="translate(536.83 317.27)">135</text>
                    </g>
                    <g id="_2.133" data-name="2.133" className="room-map-group">
                      <polyline points="497.82 281.74 497.66 285.34 516.7 286.22 517.95 265.68 498.59 264.76 498 277.71" />
                      <text transform="translate(498.8 279.08)">133</text>
                    </g>
                    <g id="_2.129" data-name="2.129" className="room-map-group">
                      <polyline points="420.63 241.19 422.86 287.07 403.4 288.93 396.75 189.82 418.07 188.5 420.27 232.9" />
                      <text transform="translate(406.32 230.93) rotate(86.01)">
                        129
                      </text>
                    </g>
                    <g
                      id="_2.124K"
                      data-name="2.124K"
                      className="room-map-group">
                      <polyline points="379.11 197.59 381.73 223.73 342.33 228.32 337.48 195.37 378.42 190.75 378.75 193.97" />
                      <text transform="translate(348.27 213.14)">124K</text>
                    </g>
                    <g
                      id="_2.123K"
                      data-name="2.123K"
                      className="room-map-group">
                      <polyline points="382.38 230.3 384.99 256.28 347.1 260.79 342.33 228.32 381.73 223.73 382.03 226.75" />
                      <text transform="translate(352.09 245.45)">123K</text>
                    </g>
                    <g
                      id="_2.122K"
                      data-name="2.122K"
                      className="room-map-group">
                      <polyline points="385.26 259.02 384.99 256.28 347.1 260.79 351.77 293.64 388.26 288.94 385.61 262.5" />
                      <text transform="translate(354.96 278.17)">122K</text>
                    </g>
                    <g
                      id="_2.121K"
                      data-name="2.121K"
                      className="room-map-group">
                      <polyline points="388.9 295.31 391.61 322.42 356.64 326.82 351.77 293.64 388.26 288.94 388.54 291.79" />
                      <text transform="translate(360.06 309.97)">121K</text>
                    </g>
                  </g>
                  <g id="OTHERS-2" data-name="OTHERS">
                    <g id="GARDEROB" className="room-map-group">
                      <polyline points="499.69 239.76 498.59 264.76 517.95 265.68 522.75 187.77 502.01 186.86 500.03 231.93" />
                    </g>
                    <g id="COWORKING">
                      <path
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        d="M473.63,250.67l-13.25.17h0c3.9-.21,8.44-2.59,8.23-6.49h0c-.28-5.12,4-9.19,9.13-9.29l11.74-.17.24,15.58-12.73.16"
                        transform="translate(-50.86 -160.27)"
                      />
                      <polyline
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="498.32 90.5 500.25 90.57 500.92 74.92 479.61 74.33 479.61 89.88 494.99 90.39"
                      />
                      <polyline
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="515.36 75.47 500.92 74.92 500.25 90.57 532.19 92.14 535.61 92.3 538.11 92.43 538.79 76.38 518.93 75.61"
                      />
                      <polyline
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="560.06 94.14 562.86 94.38 564.32 77.75 547.69 76.38 546.23 92.92 556.45 93.82"
                      />
                      <polyline
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="556.86 153.67 557.02 151.91 541.23 150.87 539.46 171.03 555.21 172.17 556.58 156.9"
                      />
                      <polyline
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="542.83 132.69 542.97 131.13 558.78 132.2 557.02 151.91 541.23 150.87 542.52 136.18"
                      />
                      <polyline
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="558.9 130.88 558.78 132.2 542.97 131.13 543.58 124.17 559.42 125.13 559.22 127.35"
                      />
                      <polyline
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="560.91 108.42 559.42 125.13 543.58 124.17 545.58 101.47 561.43 102.65 561.21 105.05"
                      />
                      <polyline
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="573.22 98.08 574.2 89.3 594.39 91.36 592.41 106.87 572.44 105.05 572.84 101.47"
                      />
                      <polyline
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="580.34 89.92 594.39 91.36 598.66 60.97 577.43 57.99 574.2 89.3 576.43 89.52"
                      />
                      <path
                        stroke="#7f7f7f"
                        fill="#bfbfbf"
                        d="M429.62,320.05l-.11-1a9,9,0,0,0-9.79-8.06h0a7.77,7.77,0,0,1-8.42-6.88h0L414,334.41l17-1.76-.93-9"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        stroke="#7f7f7f"
                        fill="#bfbfbf"
                        d="M428.29,302l-.44-6.17-10.21.67a6.82,6.82,0,0,0-6.34,7.62h0a7.77,7.77,0,0,0,8.42,6.88h0a9,9,0,0,1,9.79,8.06l-.93-13"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        stroke="#7f7f7f"
                        fill="#bfbfbf"
                        d="M440.89,284.85l1-.06a15,15,0,0,0,14-15.86h0l.91,14.94Z"
                        transform="translate(-50.86 -160.27)"
                      />
                      <g id="ATAMEKEN">
                        <path
                          stroke="#7f7f7f"
                          fill="#bfbfbf"
                          d="M426,286.48l-.08-.63c-.61-4.86-5.48-8.2-10.36-7.72h0a7.33,7.33,0,0,1-8-6.15l-2.65-19.46a13.05,13.05,0,0,1,11.8-14.76l22.37-2a11,11,0,0,1,11.72,8.88h0a3.83,3.83,0,0,0,1.6,3.39h0"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#bfbfbf"
                          stroke="#7f7f7f"
                          className="map-element-wall"
                          d="M409.57,276h0c.91-16.77,16.71-35.65,33.41-39.8h0"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#bfbfbf"
                          stroke="#7f7f7f"
                          className="map-element-wall"
                          d="M414.25,278.14c.69-19.05,17.61-36.11,34.07-38.57"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#bfbfbf"
                          stroke="#7f7f7f"
                          className="map-element-wall"
                          d="M419,278.43c1.37-18.36,15.43-32.09,31.67-34.19"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#bfbfbf"
                          stroke="#7f7f7f"
                          className="map-element-wall"
                          d="M423.66,281.19c.6-18.45,13.71-30.06,28.74-33.19"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                      <polygon
                        fill="#bfbfbf"
                        stroke="#7f7f7f"
                        points="489.88 107.55 514.79 108.3 515.19 102.89 490.05 102.21 489.88 107.55"
                      />
                      <g id="WALLS">
                        <polyline
                          className="map-noway-wall"
                          points="351.36 57.8 317.9 61.51 334.43 172.77 362.69 169.49"
                        />
                        <line
                          className="map-noway-wall"
                          x1="408.49"
                          y1="165.34"
                          x2="379.56"
                          y2="167.55"
                        />
                        <line
                          className="map-noway-wall"
                          x1="511.34"
                          y1="164.98"
                          x2="539.86"
                          y2="166.45"
                        />
                        <polyline
                          className="map-noway-wall"
                          points="555.62 167.55 583.91 169.91 592.41 106.87"
                        />
                        <polyline
                          className="map-noway-wall"
                          points="364.84 56.52 395.38 54.27 427.4 52.84 428.12 74.62"
                        />
                        <polyline
                          className="map-noway-wall"
                          points="484.01 52.84 490.83 52.84 490.26 74.33"
                        />
                        <line
                          className="map-noway-wall"
                          x1="447.03"
                          y1="52.58"
                          x2="473.35"
                          y2="52.58"
                        />
                        <line
                          className="map-noway-wall"
                          x1="436.07"
                          y1="52.58"
                          x2="427.4"
                          y2="52.84"
                        />
                        <polyline
                          className="map-noway-wall"
                          points="490.83 52.84 523.43 53.88 554.44 55.84"
                        />
                        <line
                          className="map-noway-wall"
                          x1="565.4"
                          y1="56.92"
                          x2="577.43"
                          y2="57.99"
                        />
                        <rect
                          stroke="#7f7f7f"
                          x="452.75"
                          y="72.99"
                          width="13.26"
                          height="2.5"
                        />
                        <rect
                          stroke="#7f7f7f"
                          x="452.75"
                          y="88.38"
                          width="13.26"
                          height="2.8"
                        />
                      </g>
                    </g>
                    <g id="ATRIUM" className="text-map-group">
                      <polyline
                        fill="none"
                        points="475.79 188.49 502.01 188.96 500.07 231.93"
                      />
                      <line
                        fill="none"
                        x1="453.39"
                        y1="188.49"
                        x2="466.78"
                        y2="188.49"
                      />
                      <polyline
                        fill="none"
                        points="444.5 188.94 418.07 189.86 420.27 232.9"
                      />
                      <polyline
                        fill="none"
                        points="497.31 292.97 497.82 281.72 497.31 292.97 496.04 319.19"
                      />
                      <polyline
                        fill="none"
                        points="424.92 321.05 423.2 294.16 420.66 241.11 423.2 294.16"
                      />
                      <line
                        fill="none"
                        x1="464.05"
                        y1="295.23"
                        x2="470.8"
                        y2="295.23"
                      />
                      <line
                        fill="none"
                        x1="478.63"
                        y1="308.62"
                        x2="496.55"
                        y2="308.62"
                      />
                      <line
                        fill="none"
                        x1="464.05"
                        y1="308.62"
                        x2="470.8"
                        y2="308.62"
                      />
                      <line
                        fill="none"
                        x1="449.97"
                        y1="308.62"
                        x2="456.42"
                        y2="308.62"
                      />
                      <line
                        fill="none"
                        x1="441.65"
                        y1="308.62"
                        x2="424.13"
                        y2="308.62"
                      />
                      <line
                        fill="none"
                        x1="478.63"
                        y1="295.23"
                        x2="496.93"
                        y2="295.23"
                      />
                      <line
                        fill="none"
                        x1="449.97"
                        y1="295.23"
                        x2="456.42"
                        y2="295.23"
                      />
                      <line
                        fill="none"
                        x1="423.27"
                        y1="295.23"
                        x2="441.65"
                        y2="295.23"
                      />
                      <text
                        id="_2.ATRIUM"
                        data-name="2.ATRIUM"
                        fill="#7f7f7f"
                        color="#7f7f7f"
                        transform="translate(434.69 250.08)">
                        ATRIUM
                      </text>
                    </g>
                  </g>
                  <g id="ESCAPES-2" data-name="ESCAPES">
                    <g
                      id="_2.ESC.1"
                      data-name="2.ESC.1"
                      className="map-group tech">
                      <polyline points="405.25 315.86 405.34 317.2 408.67 317 408.88 321.05 418.43 320.42 418.17 316.46 419.9 316.35 417.94 287.54 403.4 288.93 405.02 312.44" />
                      <g>
                        <path
                          fill="#34C759"
                          d="M469.69,473.32h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,469.69,473.32Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M464.46,477.94a1,1,0,1,0-1-1A1,1,0,0,0,464.46,477.94Zm-1.8,6.95.5-2.2,1,1v3h1v-3.75l-1-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25.05-.4.05l-2.6,1.1v2.35h1V480l.9-.35-.8,4.05-2.45-.5-.2,1Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g
                      id="_2.ESC.2"
                      data-name="2.ESC.2"
                      className="map-group tech">
                      <polyline points="515.13 311.16 516.7 286.22 502.6 285.57 500.74 315.37 502.64 315.45 502.36 319.88 511.99 320.37 512.18 315.73 514.84 315.89 514.91 314.62" />
                      <g>
                        <path
                          fill="#34C759"
                          d="M565.17,472.64h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,565.17,472.64Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M559.94,477.27a1,1,0,1,0-1-1A1,1,0,0,0,559.94,477.27Zm-1.8,7,.5-2.2,1.05,1v3h1v-3.75l-1.05-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25.05-.4.05l-2.6,1.1V481h1v-1.7l.9-.35-.8,4-2.45-.5-.2,1Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g
                      id="_2.ESC.3"
                      data-name="2.ESC.3"
                      className="map-group tech">
                      <polyline points="476.43 107.14 481.46 107.29 480.9 163.59 466.88 162.94 467.58 106.87 472.27 107.01" />
                    </g>
                  </g>
                  <g id="TECHS-2" data-name="TECHS">
                    <g
                      id="_2.TECH.WOMAN"
                      data-name="2.TECH.WOMAN"
                      className="map-group tech">
                      <polyline
                        id="_2.TECH.WOMAN-2"
                        data-name="2.TECH.WOMAN"
                        points="424.99 164.58 408.49 165.34 405.03 108.67 452.05 107.23 452.37 122.72 452.31 119.72 442.92 119.98 443.31 155.28 452.62 155.1 452.56 151.97 452.75 163.3 436.27 164.03 452.75 163.3 452.62 155.1 443.31 155.28 432.45 155.45 431.67 125.3 413.7 125.78 414.88 156.11 424.6 155.78"
                      />
                      <g>
                        <path
                          fill="#007aff"
                          d="M505.66,287.67l-13.81.05a1.59,1.59,0,0,0-1.59,1.6l.05,13.81a1.6,1.6,0,0,0,1.6,1.59l13.81-.05a1.6,1.6,0,0,0,1.59-1.6l-.05-13.82A1.59,1.59,0,0,0,505.66,287.67Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M502.49,292.46l0,7.44-7.44,0,0-7.43Zm0-1.06-7.43,0a1.08,1.08,0,0,0-1.06,1.07l0,7.44a1.07,1.07,0,0,0,1.06,1.06l7.44,0a1.07,1.07,0,0,0,1.06-1.07l0-7.43A1.06,1.06,0,0,0,502.48,291.4Zm-4.75,8v-2.12h.54v-1.33a1.06,1.06,0,0,0-1.07-1.06h-.53a1.07,1.07,0,0,0-1.06,1.07v1.33h.53v2.13Zm-.81-5a.67.67,0,1,0-.67-.66A.67.67,0,0,0,496.92,294.34Zm5.05,1.31-1.34-2.12-1.32,2.13Zm-2.65,1.07,1.33,2.12,1.32-2.13Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g className="map-group tech">
                      <polyline
                        id="_2.TECH.MAN"
                        data-name="2.TECH.MAN"
                        points="495.69 164.26 511.34 164.98 514.79 108.3 481.46 107.29 481.37 116.84 495.94 117.18 495.75 155.38"
                      />
                    </g>
                  </g>
                  <g id="WCS-2" data-name="WCS">
                    <g
                      id="_2.WC.WOMAN"
                      data-name="2.WC.WOMAN"
                      className="map-group another">
                      <polyline points="425.07 155.77 414.88 156.11 413.11 125.8 431.67 125.3 432.45 155.45 430.5 155.52" />
                      <g>
                        <path
                          fill="#007aff"
                          d="M480.62,295.34h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,480.62,295.34Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M475.12,308.34v-3h1.5l-1.27-3.82a1,1,0,0,0-1-.68h-.06a1,1,0,0,0-.95.68l-1.27,3.82h1.5v3Zm-.75-8a1,1,0,0,0,0-2,1,1,0,0,0,0,2Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g
                      id="_2.WC.MAN"
                      data-name="2.WC.MAN"
                      className="map-group another">
                      <polyline points="487.43 155.26 480.9 154.94 481.37 116.84 495.94 117.18 495.75 155.38 493.69 155.38" />
                      <g>
                        <path
                          fill="#007aff"
                          d="M546.26,294.24h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,546.26,294.24Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M539,307.24v-3.75h-.75v-2.75a1,1,0,0,1,1-1h1.5a1,1,0,0,1,1,1v2.75H541v3.75Zm1-8a1,1,0,0,0,0-2,1,1,0,0,0,0,2Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g id="C1.1">
                  <path
                    id="C1.1"
                    fill="#7f7f7f"
                    d="M174.51,221.23l-3.47,1a11.29,11.29,0,0,0-2.4-3.19,11.78,11.78,0,0,0-3.32-2.2,12.1,12.1,0,0,0-4-1A13.12,13.12,0,0,0,151,220a13.67,13.67,0,0,0-3.18,6.8,24.15,24.15,0,0,0,4.95,17.7,13.66,13.66,0,0,0,6.24,4.15,12.61,12.61,0,0,0,7,0,12.83,12.83,0,0,0,4-1.85,12.13,12.13,0,0,0,2.9-2.86,11.66,11.66,0,0,0,1.7-3.6,11.44,11.44,0,0,0,.4-4l3.47-1a15.71,15.71,0,0,1-.38,5.35,15.14,15.14,0,0,1-5.86,8.68,16.49,16.49,0,0,1-5.29,2.5,15.85,15.85,0,0,1-9.13,0,16.92,16.92,0,0,1-7.68-5.14,27.3,27.3,0,0,1-5.75-20.57,16.71,16.71,0,0,1,3.91-8.36,15.78,15.78,0,0,1,7.79-4.77,16.44,16.44,0,0,1,5.82-.61,14.45,14.45,0,0,1,5.2,1.37,15,15,0,0,1,4.31,3A15.31,15.31,0,0,1,174.51,221.23Zm15.67-17.12,10.57,37.82-3.45,1-9.56-34.21-.22.07-7.22,8.36-1-3.58,7.28-8.43Zm22.66,34.74a2.67,2.67,0,0,1-2.1-.25,2.76,2.76,0,0,1,2.71-4.82,2.67,2.67,0,0,1,1.3,1.67,2.49,2.49,0,0,1,0,1.43,2.89,2.89,0,0,1-.68,1.25A2.63,2.63,0,0,1,212.84,238.85Zm7.81-43.26,10.58,37.82-3.46,1-9.56-34.2-.22.06-7.22,8.37-1-3.59,7.28-8.42Z"
                    transform="translate(-50.86 -160.27)"
                  />
                  {/* <path
                  id="_1.BG"
                  data-name="1.BG"
                  
                  d="M343.57,227.16s-98.44,11.26-250.68,68.38C68.2,304.81,41.23,320,57.11,352.13L171.54,553.41c30.19-12.48,37.35-15.44,72.06-27.24L239.69,513l77.66-22.17,3.49,13.39c31-8.63,31.56-8.7,62.11-14.06Z"
                  transform="translate(-50.86 -160.27)"
                /> */}
                  <g id="OTHERS-3" data-name="OTHERS">
                    <g
                      id="_1.STORAGE"
                      data-name="1.STORAGE"
                      className="map-group tech">
                      <polygon points="236.78 191.09 269.05 183.6 266.31 171.11 233.76 178.31 236.78 191.09" />
                      <polyline points="265.94 169.18 266.31 171.11 233.76 178.31 230.46 164.39 255.27 158.85 263.57 156.99 265.42 166.49" />
                      <polyline points="255.8 158.73 263.57 156.99 260.7 142.51 227.04 149.92 230.46 164.39 252.46 159.47" />
                    </g>
                    <g className="map-group tech">
                      <polygon
                        id="_1.LIBRARY.UNKNOWN"
                        data-name="1.LIBRARY.UNKNOWN"
                        points="42.03 135.27 84.29 221.16 123.23 206.24 129.34 221.8 135.99 219.5 118.05 165.33 142.34 157.74 125.18 106.51 42.03 135.27"
                      />
                      <polygon
                        id="_1.BEHIND.TECH.MAN"
                        data-name="1.BEHIND.TECH.MAN"
                        points="152.57 113.36 163.62 151.56 142.34 157.74 129.76 120.25 152.57 113.36"
                      />
                    </g>
                    <g
                      id="_1.ASSEMBLYHALL"
                      data-name="1.ASSEMBLYHALL"
                      className="room-map-group">
                      <polygon points="187.58 353.06 181.23 334.25 184.4 333.14 150.87 238.58 166.74 234.11 187.79 305.2 166.74 234.11 221.44 218.7 241.6 289.55 221.44 218.7 235.18 214.83 258.62 310.97 262.53 309.86 267.5 330.24 187.58 353.06" />
                      <text transform="matrix(0.97, -0.26, 0.26, 0.97, 177.22, 289.32)">
                        ASSEMBLY
                      </text>
                      <text transform="matrix(0.97, -0.26, 0.26, 0.97, 199.52, 297.96)">
                        HALL
                      </text>
                    </g>
                    <g id="_1.LIBRARY" data-name="1.LIBRARY">
                      <path
                        stroke="#7f7f7f"
                        fill="#4da2ff"
                        d="M198.71,391.49l36.55,101.92-17.35,5.81,11.31,30.34-57.68,23.85L56,349.7h0a33.19,33.19,0,0,1,16.65-45.56l20.27-8.6,42.26,85.89,38.94-14.92,6.12,15.56,13.52-4.46,2.68,7.47"
                        transform="translate(-50.86 -160.27)"
                      />
                      <text
                        color="#ffffff"
                        fill="#ffffff"
                        fontSize="14px"
                        fontFamily="sans-serif"
                        id="_1.LIBRARY-2"
                        data-name="1.LIBRARY"
                        transform="translate(83.87 286.71) rotate(-20.93)">
                        LIBRARY
                      </text>
                    </g>
                    <g id="_1.MEDIKER" data-name="1.MEDIKER" fill="#e0706a">
                      <polyline
                        id="_1.MEDIKER-2"
                        data-name="1.MEDIKER"
                        stroke="#7f7f7f"
                        points="193.51 117.56 186.08 89.28 246.39 75.01 254.16 110.78 219.68 118.41 223.82 136.34 200.01 142.28 194.69 122.04"
                      />
                      <path
                        fill="#DF0C00"
                        d="M262.84,265.55H249.72a1.52,1.52,0,0,0-1.52,1.52v13.12a1.52,1.52,0,0,0,1.52,1.52h13.12a1.51,1.51,0,0,0,1.51-1.52V267.07A1.51,1.51,0,0,0,262.84,265.55Z"
                        transform="translate(-50.86 -160.27)"
                      />
                      <path
                        fill="#fff"
                        d="M250.22,267.58a1.42,1.42,0,0,0,.09.37c.29.68,1.37,1.49,3.25,2.45a4.69,4.69,0,0,1,1.78,1.3,2.49,2.49,0,0,1,.59,1.49v.11h-2.88l0,.07a.68.68,0,0,0,.18.33,4.17,4.17,0,0,0,1,.56,3.6,3.6,0,0,1,1.42.91c.08.1.17.24.21.3a1.65,1.65,0,0,1,.15.51l0,.09-.11.06a1.07,1.07,0,0,0-.25,1.47,1.08,1.08,0,0,0,.33.32s0,0,0,.89v.88l.08,0a.83.83,0,0,0,.54-.5,1.13,1.13,0,0,0,.11-.55,1.22,1.22,0,0,0-.22-.76l-.08-.12v-.64c0-.35,0-.64,0-.64l1.06-.26a11,11,0,0,0,1.35-.46,2.71,2.71,0,0,0,1.69-2,3.42,3.42,0,0,0,0-1,2.19,2.19,0,0,0-.48-1,1.33,1.33,0,0,0-1-.49,1.44,1.44,0,0,0-1.28.66,2.28,2.28,0,0,0-.31.75v.06h.24a1.26,1.26,0,0,0,1-.45,1.22,1.22,0,0,0,.22-.32c.08-.15.08-.15.15-.15a1.08,1.08,0,0,1,.94.7,1.79,1.79,0,0,1,.14.75,1.65,1.65,0,0,1-.46,1.19,4.38,4.38,0,0,1-2.1,1.12c-.3.09-1,.28-1.07.28a.92.92,0,0,1,.07-.3,1.94,1.94,0,0,1,.59-.75,5.79,5.79,0,0,1,.88-.51,8.42,8.42,0,0,0,1-.51.79.79,0,0,0,.39-.51v-.05h-2.85v-.09a3.25,3.25,0,0,1,.09-.59,2.84,2.84,0,0,1,.79-1.24,5.49,5.49,0,0,1,1.65-1.07c1.92-1,3.08-1.93,3.16-2.63v-.11h-1.1c-.66,0-1.18,0-1.27,0a1.9,1.9,0,0,0-1.16.65,5.66,5.66,0,0,0-.63.94,4,4,0,0,1-.73,1.07,1.24,1.24,0,0,1-.24.19,1.14,1.14,0,0,1-.43.14h-.06v-.22a1.15,1.15,0,0,0-.29-.9c-.15-.18-.14-.18-.29,0a1.17,1.17,0,0,0-.26.48,1.09,1.09,0,0,0,0,.41v.27h-.1a1.14,1.14,0,0,1-.47-.2,2.38,2.38,0,0,1-.54-.61l-.35-.6-.34-.58a2.07,2.07,0,0,0-1.39-1,8.55,8.55,0,0,0-1.31,0Z"
                        transform="translate(-50.86 -160.27)"
                      />
                    </g>
                  </g>
                  <g id="ROOMS-3" data-name="ROOMS">
                    <g id="_1.168" data-name="1.168" className="room-map-group">
                      <polyline points="272.57 239.13 242.84 245.82 235.18 214.83 300.66 201.48 305.44 231.73 277.83 237.94" />
                      <text transform="translate(261.45 228.33)">168</text>
                    </g>
                    <g className="map-group tech">
                      <polyline
                        id="_1.168.2"
                        data-name="1.168.2"
                        points="270.9 246.74 269.27 239.87 242.84 245.82 246.36 259.99 272.57 253.74 277.06 252.72 272.57 253.74 271.73 250.2"
                      />
                      <polyline
                        id="_1.168.1"
                        data-name="1.168.1"
                        points="286 247.12 286.72 250.55 286.72 250.55 282.39 251.5 307.69 245.92 305.44 231.73 283.77 236.61 285.24 243.54"
                      />
                    </g>
                    <g id="_1.165" data-name="1.165" className="room-map-group">
                      <polyline points="273.2 284.71 279.23 283.25 272.57 253.74 246.36 259.99 253.34 289.55 270.04 285.48" />
                      <text transform="translate(253.14 275.14)">165</text>
                    </g>
                    <g id="_1.164" data-name="1.164" className="room-map-group">
                      <polyline points="304.52 274.35 305.38 278.59 323.96 275.92 320.57 253.25 300.98 256.77 303.83 270.91" />
                      <text transform="translate(302.63 270.26)">164</text>
                    </g>
                    <g id="_1.163" data-name="1.163" className="room-map-group">
                      <polyline points="307.02 286.72 308.8 295.5 326.4 292.19 323.96 275.92 305.38 278.59 306.44 283.83" />
                      <text transform="translate(306.3 289.35)">163</text>
                    </g>
                    <g id="_1.156" data-name="1.156" className="room-map-group">
                      <polyline points="296.58 268.06 302.48 296.69 290.5 298.94 282.88 260.52 294.52 258.05 295.9 264.74" />
                      <text transform="matrix(0.2, 0.98, -0.98, 0.2, 286.81, 269.68)">
                        156
                      </text>
                    </g>
                    <g id="_1.155" data-name="1.155" className="room-map-group">
                      <polyline points="292.75 310.08 297.94 335.82 332.08 329.86 326.4 292.19 290.5 298.94 292.05 306.6" />
                      <text transform="translate(301.52 317.51)">155</text>
                    </g>
                    <g id="_1.143" data-name="1.143" className="room-map-group">
                      <polyline points="256.73 123.23 254.16 110.78 219.68 118.41 227.04 149.92 260.7 142.51 258.02 129.48" />
                      <text transform="translate(230.52 134.89)">143</text>
                    </g>
                    <g id="_1.142" data-name="1.142" className="room-map-group">
                      <polyline points="273.62 141.42 273.36 140.03 302.83 134.82 309.03 176.03 281.25 181.38 274.27 144.85" />
                      <text transform="translate(282.19 161.82)">142</text>
                    </g>
                    <g id="_1.141" data-name="1.141" className="room-map-group">
                      <polyline points="273.05 138.45 273.36 140.03 302.83 134.82 298.07 102.76 267.23 108.47 272.46 135.41" />
                      <text transform="translate(276.02 125.98)">141</text>
                    </g>
                    <g id="_1.140" data-name="1.140" className="room-map-group">
                      <polyline points="284.17 94.44 282.88 94.64 278.05 69.08 292.71 66.89 296.53 92.44 287.29 93.93" />
                      <text transform="translate(282.02 72.51) rotate(81.26)">
                        140
                      </text>
                    </g>
                    <g id="_1.139" data-name="1.139" className="room-map-group">
                      <polyline points="275.83 95.84 282.88 94.64 278.05 69.08 260.18 72.34 265.14 97.64 272.63 96.38" />
                      <text transform="translate(266.55 75.25) rotate(79.82)">
                        139
                      </text>
                    </g>
                  </g>
                  <g
                    id="ESCAPES-3"
                    data-name="ESCAPES"
                    className="map-group tech">
                    <g
                      id="_1.ESC.3"
                      data-name="1.ESC.3"
                      className="map-group tech">
                      <polygon points="166.08 210.17 180.1 205.83 163.62 151.56 149.89 155.55 166.08 210.17" />
                    </g>
                    <g
                      id="_1.ESC.2"
                      data-name="1.ESC.2"
                      className="map-group tech">
                      <polygon points="270.36 341.95 262.53 309.86 276.75 306.6 283.79 338.69 270.36 341.95" />
                      <g>
                        <path
                          fill="#34C759"
                          d="M332.86,491.23h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,332.86,491.23Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M327.64,495.85a1,1,0,1,0-1-1A1,1,0,0,0,327.64,495.85Zm-1.8,6.95.5-2.2,1.05,1v3h1v-3.75l-1.05-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25,0-.4,0l-2.6,1.1v2.35h1v-1.7l.9-.35-.8,4.05-2.45-.5-.2,1Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g
                      id="_1.ESC.1"
                      data-name="1.ESC.1"
                      className="map-group tech">
                      <polygon points="191.44 364.51 181.23 334.25 167.05 338.95 178.35 369.29 191.44 364.51" />
                      <g>
                        <path
                          fill="#34C759"
                          d="M241.76,518.73h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,241.76,518.73Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M236.54,523.35a1,1,0,1,0-1-1A1,1,0,0,0,236.54,523.35Zm-1.8,6.95.5-2.2,1,1v3h1v-3.75l-1-1,.3-1.5a3.66,3.66,0,0,0,2.75,1.25v-1a2.46,2.46,0,0,1-2.15-1.2l-.5-.8a1,1,0,0,0-.85-.5c-.15,0-.25,0-.4,0l-2.6,1.1v2.35h1v-1.7l.9-.35-.8,4.05-2.45-.5-.2,1Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="TECHS-3" data-name="TECHS">
                    <g
                      id="_1.TECH.WOMAN"
                      data-name="1.TECH.WOMAN"
                      className="map-group tech">
                      <polyline points="216.42 196.23 236.78 191.09 223.82 136.34 178.49 147.64 181.82 159.69 182.62 162.69 181.82 159.69 191.01 157.35 200.27 191.48 191.32 194.18 190.24 190.61 191.32 194.18 193.48 202.02 210.51 197.72" />
                      <g>
                        <path
                          fill="#007aff"
                          d="M245.64,323.44l-13.79.78a1.6,1.6,0,0,0-1.5,1.69l.79,13.79a1.59,1.59,0,0,0,1.68,1.5l13.79-.79a1.59,1.59,0,0,0,1.5-1.68l-.79-13.79A1.59,1.59,0,0,0,245.64,323.44Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M242.73,328.39l.43,7.43-7.43.42-.42-7.42Zm-.06-1.06-7.42.43a1,1,0,0,0-1,1.12l.42,7.42a1.06,1.06,0,0,0,1.12,1l7.43-.42a1.08,1.08,0,0,0,1-1.12l-.43-7.43A1.07,1.07,0,0,0,242.67,327.33Zm-4.32,8.23-.12-2.12.53,0-.07-1.33a1.08,1.08,0,0,0-1.13-1l-.53,0a1.08,1.08,0,0,0-1,1.12l.08,1.33.53,0,.12,2.12Zm-1.08-5a.67.67,0,1,0-.7-.63A.67.67,0,0,0,237.27,330.57Zm5.11,1-1.44-2-1.21,2.2Zm-2.59,1.22,1.45,2,1.2-2.19Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g
                      id="_1.TECH"
                      data-name="1.TECH"
                      className="map-group tech">
                      <polyline points="151.26 214.71 135.99 219.5 118.05 165.33 149.89 155.55 152.33 163.84 152.33 163.84 136.77 168.17 147.96 206.24" />
                    </g>
                  </g>
                  <g id="WCS-3" data-name="WCS">
                    <g
                      id="_1.WC.WOMAN"
                      data-name="1.WC.WOMAN"
                      className="map-group another">
                      <polyline points="213.11 188.59 209.72 189.43 202.15 161.32 220.84 156.44 227.52 185.25 218 187.61" />
                      <g>
                        <path
                          fill="#007aff"
                          d="M272.61,326h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,272.61,326Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M267.11,339v-3h1.5l-1.27-3.81a1,1,0,0,0-.95-.69h-.06a1,1,0,0,0-.95.69L264.11,336h1.5v3Zm-.75-8a1,1,0,1,0-1-1A1,1,0,0,0,266.36,331Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                    <g
                      id="_1.WC.MAN"
                      data-name="1.WC.MAN"
                      className="map-group another">
                      <polyline points="150.24 205.59 147.96 206.24 136.77 168.17 152.35 163.89 163.26 202.27 155.56 204.37" />
                      <g>
                        <path
                          fill="#007aff"
                          d="M208.23,343h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,208.23,343Z"
                          transform="translate(-50.86 -160.27)"
                        />
                        <path
                          fill="#fff"
                          d="M201,356v-3.75h-.75v-2.75a1,1,0,0,1,1-1h1.5a1,1,0,0,1,1,1v2.75H203V356Zm1-8a1,1,0,1,0-1-1A1,1,0,0,0,202,348Z"
                          transform="translate(-50.86 -160.27)"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </TransformComponent>
        )}
      </TransformWrapper>
    </>
  );
};

export default FirstFloorIOS;
