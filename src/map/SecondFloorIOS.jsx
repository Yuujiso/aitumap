import React, { useState } from "react";
import { Center, Input, useColorModeValue } from "@chakra-ui/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { isMobile } from "mobile-device-detect";

const SecondFloorIOS = () => {
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
          placeholder="Search room: e.g. type: 1.140"
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
                  .room-map-group{
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
                  .text-map-group .map-element-wall,
                  .text-map-group polyline,
                  .text-map-group line, 
                  .text-map-group polygon{
                    stroke:#7f7f7f;
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
                    color: #7f7f7f;
                    fill: #7f7f7f;
                    font-size: 11px !important;
                    font-family: sans-serif !important;
                    text-rendering: optimizeSpeed;
                  }
                  
                  .map-group map-element-label,
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
                    d="M516.64,214.09c47.31,0,93,2.75,132.27,8l-1.35,11.14-.36,2.94,2.93.4,21.31,2.93,3,.41.42-3L676.35,226c136.37,25.7,178.93,38.78,273.22,76.26,25,13,18.38,36.28,12.16,49.06-17.48,33.24-34.63,67.15-51.21,99.93-16.17,32-32.87,65-49.88,97.41-34.2-15.17-52.16-22.36-83.68-32.24l2.2-7.27.9-3-3-.8L712.7,488.12l-3-.81-.66,3.07c-.69,3.13-1.83,8.05-2.56,11.15-9.69-2-41.94-8.75-66.86-12.83L641.23,477l.42-3-3-.41-18.33-2.48-3.07-.41-.31,3.08c-.16,1.49-.87,7-1.34,10.38-27.89-3.41-38.87-4.55-68.34-5.38l.22-9.87.07-3.13-3.13.06-66.18,1.32-3.13.06.2,3.13c.14,2.27.23,4.14.31,6.13.05,1.1.1,2.22.16,3.42-30.87.95-38.28,1.66-67.92,5.67l-1.22-8.35-.43-2.94-3,.4-18.37,2.56-3,.41.43,3c.26,1.85.54,3.74.82,5.64l.39,2.67c-30.78,4.76-35,5.43-64,12.41l-1.87-8.75-.67-3.14-3.09.89-73.3,21-3,.87,1,3,2.8,8.4c-12.89,3.49-38.85,12.48-72.56,27.23l-109-200c-5.7-14.31-6.65-25.38-2.92-33.83,4.75-10.75,16.86-16.53,29.23-21.17a1461.91,1461.91,0,0,1,188.74-56.71c37.9-8.55,63.73-12.5,72.11-13.69l1.47,11.1.4,3,3-.47,15.94-2.44,2.76-.42-.22-2.78c-.21-2.62-.54-4.78-.86-6.87-.18-1.2-.36-2.37-.51-3.6,45.74-5.83,96.72-8.91,147.64-8.91m0-3c-52.52,0-105.08,3.32-150.93,9.31.4,5,1.27,8.28,1.67,13.3l-15.95,2.45-1.86-14.09s-112.5,14-264.49,71c-24.69,9.26-42.94,21.62-28,59.09L167.55,554.7c36.39-16,63.54-25.32,76-28.55l1.7-.44-3.82-11.44,73.31-21L317.29,505c32.5-7.85,35-8.16,69.65-13.53-.53-3.68-1.1-7.56-1.63-11.24l18.37-2.55,1.65,11.28c32.81-4.45,39.2-5.11,73.63-6.13-.31-4.82-.35-8-.65-12.65l66.18-1.32-.29,12.86c32.08.85,42,1.88,73.94,5.79h0c.08,0,1.56-11.15,1.79-13.4l18.33,2.48L636.2,491.2c30,4.76,72.49,13.87,72.49,13.87s2.17-9.14,3.24-14.05l64.36,17.24-3.07,10.12c33.92,10.53,52,17.79,88.77,34.14,35-66.46,67.47-133.4,102.42-199.86,6.67-13.7,13.54-39.19-13.6-53.15-93-37-135.57-50.48-277-77.06l-2,14-21.31-2.93,1.72-14.09c-42-5.74-88.77-8.38-135.61-8.38Z"
                    transform="translate(-51.69 -158.58)"
                  />
                </g>
                <g
                  id="_12.STAIRS"
                  data-name="12.STAIRS"
                  className="map-group stairs">
                  <polygon
                    className="map-element-wall"
                    points="348.03 274.48 335.12 186.6 312.63 190.08 324.9 277.37 330.81 276.61 327.23 252.09 338.1 250.49 341.7 275.31 348.03 274.48 348.03 274.48"
                  />
                  <polyline
                    className="map-element-wall"
                    points="295.16 65.74 311.16 179.61 317.72 178.64 314 154.5 323.86 153.17 327.44 177.21 333.6 176.3 317.14 64.28"
                  />
                  <g>
                    <path
                      fill="#007aff"
                      d="M392.71,414.11h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,392.71,414.11Z"
                      transform="translate(-51.69 -158.58)"
                    />
                    <path
                      fill="#fff"
                      d="M389.71,418.61v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,389.71,417.61Zm-.5,1.5H387v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67H388v-1.67h1.21Z"
                      transform="translate(-51.69 -158.58)"
                    />
                  </g>
                  <g>
                    <path
                      fill="#007aff"
                      d="M378.23,315.38h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,378.23,315.38Z"
                      transform="translate(-51.69 -158.58)"
                    />
                    <path
                      fill="#fff"
                      d="M375.23,319.88v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,375.23,318.88Zm-.5,1.5h-2.21V322h-1.29v1.67h-1.29v1.67h-1.21v1h2.21v-1.67h1.29v-1.66h1.29v-1.67h1.21Z"
                      transform="translate(-51.69 -158.58)"
                    />
                  </g>
                  <polyline
                    className="map-element-wall"
                    points="332.76 328.5 326.05 285.57 349.21 282.45 355.74 326.92"
                  />
                </g>
                <g
                  id="_23.STAIRS"
                  data-name="23.STAIRS"
                  className="map-group stairs">
                  <polyline
                    className="map-element-wall"
                    points="597.39 63.2 583.08 174.83 589.88 175.85 593.46 150.4 604.97 151.89 601.44 177.59 609.1 178.73 624.3 67.14"
                  />
                  <polygon
                    className="map-element-wall"
                    points="595.9 275.69 607.75 188.66 581.78 185.03 570.53 272.77 577.53 273.66 581.53 246.59 592.09 248.03 588.48 274.8 595.9 275.69"
                  />
                  <g>
                    <path
                      fill="#007aff"
                      d="M642.64,411.1h-13a1.51,1.51,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,642.64,411.1Z"
                      transform="translate(-51.69 -158.58)"
                    />
                    <path
                      fill="#fff"
                      d="M639.64,415.6v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,639.64,414.6Zm-.5,1.5h-2.21v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67h1.29V417.1h1.21Z"
                      transform="translate(-51.69 -158.58)"
                    />
                  </g>
                  <g>
                    <path
                      fill="#007aff"
                      d="M655.58,314.18h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,655.58,314.18Z"
                      transform="translate(-51.69 -158.58)"
                    />
                    <path
                      fill="#fff"
                      d="M652.58,318.68v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,652.58,317.68Zm-.5,1.5h-2.21v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67h1.29v-1.67h1.21Z"
                      transform="translate(-51.69 -158.58)"
                    />
                  </g>
                  <polyline
                    className="map-element-wall"
                    points="563.78 325.47 569.52 280.65 594.75 284.08 588.48 330.15"
                  />
                </g>
              </g>
              <g id="BLOCKS">
                <g id="C1.3">
                  <g id="TECHS">
                    <g
                      id="_3.TECH.WCMAN"
                      data-name="3.TECH.WCMAN"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="757.92 209.1 739.44 203.78 754.59 150.05 768.18 154.2 765.79 162.52 777.65 166.15 767.66 202.7 765.9 202.11 767.66 202.7 777.65 166.15 765.79 162.52 755.22 199.3 760.92 200.99 755.22 199.3 768.18 154.2 797.11 163.03 779.75 215.81 763.1 210.62"
                      />
                    </g>
                    <g
                      id="_3.TECH.WOMAN"
                      data-name="3.TECH.WOMAN"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="701.66 194.57 680.68 189.25 693.74 134.53 739.72 146.09 736.37 158.13 735.55 161.13 736.37 158.13 727.18 155.76 717.82 189.87 726.77 192.59 727.85 189.03 726.77 192.59 724.59 200.42 707.56 196.08"
                      />
                      <g>
                        <path
                          fill="#007aff"
                          d="M775.08,320.15l13.79.83a1.6,1.6,0,0,1,1.5,1.69l-.83,13.78a1.6,1.6,0,0,1-1.69,1.5l-13.78-.83a1.59,1.59,0,0,1-1.5-1.68l.83-13.79A1.59,1.59,0,0,1,775.08,320.15Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#fff"
                          d="M785.4,325.56,785,333l-7.43-.45.45-7.42Zm-8.48-.51-.45,7.43a1.07,1.07,0,0,0,1,1.12l7.42.45a1.08,1.08,0,0,0,1.13-1l.44-7.43a1.06,1.06,0,0,0-1-1.12l-7.43-.44A1.05,1.05,0,0,0,776.92,325.05Zm7,7.34.13-2.12.53,0,.08-1.32a1.08,1.08,0,0,0-1-1.13l-.53,0a1.07,1.07,0,0,0-1.13,1l-.08,1.32.53,0-.12,2.12Zm.21-5.71a.67.67,0,0,0-1.33-.08.67.67,0,1,0,1.33.08ZM781,328.49l-1.2-2.2-1.45,2Zm-2.72.9,1.2,2.2,1.46-2Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="ROOMS">
                    <g
                      id="_3.221K"
                      data-name="3.221K"
                      className="room-map-group">
                      <polyline points="625.71 109.08 618.72 108.14 624.3 67.14 644.14 70.5 638.04 110.94 629.76 109.65" />
                      <text transform="translate(633.75 104.3) rotate(-79.3)">
                        221K
                      </text>
                    </g>
                    <g
                      id="_3.222P"
                      data-name="3.222P"
                      className="room-map-group">
                      <polyline points="655.64 114.1 638.04 110.94 644.14 70.5 669.77 75.2 661.86 115.22 659.36 114.77" />
                      <text transform="translate(655.48 106.61) rotate(-79.84)">
                        222P
                      </text>
                    </g>
                    <g
                      id="_3.223P"
                      data-name="3.223P"
                      className="room-map-group">
                      <polyline points="679.22 118.47 661.86 115.22 669.8 75.23 692.82 79.63 684.41 119.45 682.14 119.02" />
                      <text transform="translate(678.68 111.05) rotate(-78.03)">
                        223P
                      </text>
                    </g>
                    <g
                      id="_3.224P"
                      data-name="3.224P"
                      className="room-map-group">
                      <polyline points="697.95 122.45 684.41 119.45 692.82 79.63 712.8 84.02 703.66 123.72 701.01 123.13" />
                      <text transform="translate(699.62 114.95) rotate(-78.55)">
                        224P
                      </text>
                    </g>
                    <g
                      id="_3.225P"
                      data-name="3.225P"
                      className="room-map-group">
                      <polyline points="724.32 128.69 726.24 129.2 736.29 89.68 712.8 84.02 703.66 123.72 720.86 127.86" />
                      <text transform="translate(720.04 121.17) rotate(-75.87)">
                        225P
                      </text>
                    </g>
                    <g
                      id="_3.226P"
                      data-name="3.226P"
                      className="room-map-group">
                      <polyline points="744.33 134.12 726.24 129.2 736.29 89.68 760.17 96.16 749.57 135.42 748.01 135" />
                      <text transform="translate(743.42 126.11) rotate(-75.45)">
                        226P
                      </text>
                    </g>
                    <g
                      id="_3.227P"
                      data-name="3.227P"
                      className="room-map-group">
                      <polyline points="769.83 141.5 771.91 142.15 783.52 102.9 760.17 96.16 749.57 135.42 766.3 140.46" />
                      <text transform="translate(767.58 133.38) rotate(-74.49)">
                        227P
                      </text>
                    </g>
                    <g
                      id="_3.228K"
                      data-name="3.228K"
                      className="room-map-group">
                      <polyline points="792.8 148.5 794.25 149.02 807.1 110.19 783.53 102.94 771.91 142.15 789.38 147.57" />
                      <text transform="translate(789.06 139.19) rotate(-72.41)">
                        228K
                      </text>
                    </g>
                    <g
                      id="_3.229P"
                      data-name="3.229P"
                      className="room-map-group">
                      <polyline points="821.73 158.33 823.37 158.92 837.36 120.17 807.1 110.19 794.25 149.02 818.35 157.02" />
                      <text transform="translate(815.81 147.87) rotate(-72.27)">
                        229P
                      </text>
                    </g>
                    <g
                      id="_3.230P"
                      data-name="3.230P"
                      className="room-map-group">
                      <polyline points="844.84 167.04 823.37 158.92 837.36 120.17 866.32 130.41 850.27 169.15 848.38 168.39" />
                      <text
                        fontSize="5px"
                        transform="translate(844.28 157.78) rotate(-68.49)">
                        230P
                      </text>
                    </g>
                    <g
                      id="_3.231P"
                      data-name="3.231P"
                      className="room-map-group">
                      <polyline points="877.05 179.68 878.8 180.43 893.13 146.77 895.52 147.48 897.15 143.57 866.32 130.41 850.27 169.15 873.44 178.37" />
                      <text transform="translate(870.25 168.45) rotate(-65.15)">
                        231P
                      </text>
                    </g>
                    <g id="_3.232P" data-name="3.232P">
                      <path
                        fill="#4da2ff"
                        stroke="#7f7f7f"
                        d="M931.41,339.32l-.92-.3,14.33-33.67,2.39.72,1.63-3.91c15.49,7.08,23.21,22.93,17.07,42l-2.68,7.8-27.87-11.24"
                        transform="translate(-51.69 -158.58)"
                      />
                      <text
                        color="#ffffff"
                        fill="#ffffff"
                        fontSize="11px"
                        fontFamily="sans-serif"
                        transform="translate(887.55 174.71)">
                        232P
                      </text>
                    </g>
                    <g
                      id="_3.252K"
                      data-name="3.252K"
                      className="room-map-group">
                      <polyline points="848.53 237.53 850.88 232.51 882.21 246.73 875.08 260.66 844.53 246.06 846.93 240.94" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 850.22, 244.86)">
                        252K
                      </text>
                    </g>
                    <g
                      id="_3.253K"
                      data-name="3.253K"
                      className="room-map-group">
                      <polyline points="841.93 251.6 844.61 245.88 875.08 260.66 867.95 274.56 837.68 260.66 840.21 255.28" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 844.18, 258.45)">
                        253K
                      </text>
                    </g>
                    <g
                      id="_3.251K"
                      data-name="3.251K"
                      className="room-map-group">
                      <polyline points="855.36 222.97 858.16 216.99 889.62 232.27 882.21 246.73 850.88 232.51 853.8 226.29" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 857.35, 230.68)">
                        251K
                      </text>
                    </g>
                    <g
                      id="_3.250K"
                      data-name="3.250K"
                      className="room-map-group">
                      <polyline points="862.29 208.15 864.56 203.42 897.18 217.59 889.62 232.27 858.16 216.99 860.59 211.8" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 864.52, 215.49)">
                        250K
                      </text>
                    </g>
                    <g
                      id="_3.249K"
                      data-name="3.249K"
                      className="room-map-group">
                      <polyline points="866.36 199.59 864.56 203.42 897.15 217.58 903.54 204.85 870.57 190.57 868.68 194.51" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 870.7, 202.7)">
                        249K
                      </text>
                    </g>
                    <g
                      id="_3.257P"
                      data-name="3.257P"
                      className="room-map-group">
                      <polyline points="835.08 266.42 837.68 260.66 867.99 274.46 860.69 288.74 830.86 275.22 833.37 269.86" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 836.23, 272.92)">
                        257P
                      </text>
                    </g>
                    <g
                      id="_3.258P"
                      data-name="3.258P"
                      className="room-map-group">
                      <polyline points="828.11 281.09 830.86 275.22 860.69 288.74 852.91 303.92 823.68 290.53 826.46 284.6" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 829.24, 287.79)">
                        258P
                      </text>
                    </g>
                    <g
                      id="_3.259P"
                      data-name="3.259P"
                      className="room-map-group">
                      <polyline points="821.1 296.04 823.68 290.53 852.91 303.92 845.93 317.55 817.23 304.28 819.19 300.11" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 822.26, 302.72)">
                        259P
                      </text>
                    </g>
                    <g
                      id="_3.260P"
                      data-name="3.260P"
                      className="room-map-group">
                      <polyline points="814.58 309.93 817.23 304.28 845.93 317.55 838.66 331.72 810.5 318.63 812.78 313.77" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 815.81, 316.76)">
                        260P
                      </text>
                    </g>
                    <g
                      id="_3.261P"
                      data-name="3.261P"
                      className="room-map-group">
                      <polyline points="808.01 323.94 810.5 318.63 838.66 331.72 831.04 346.6 803.57 333.74 805.51 329.27" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 808.76, 331.02)">
                        261P
                      </text>
                    </g>
                    <g
                      id="_3.262P"
                      data-name="3.262P"
                      className="room-map-group">
                      <polyline points="795.1 351.76 803.57 333.74 831.04 346.6 819.42 369.29 792.53 356.96 793.29 355.41" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 799.98, 349.43)">
                        262P
                      </text>
                    </g>
                    <g
                      id="_3.263P"
                      data-name="3.263P"
                      className="room-map-group">
                      <polyline points="787.62 354.89 819.42 369.29 808.84 389.92 774.45 375.31 783.5 353.02 784.83 353.63" />
                      <text transform="matrix(0.9, 0.44, -0.44, 0.9, 783.85, 369.35)">
                        263P
                      </text>
                    </g>
                    <g
                      id="_3.264L"
                      data-name="3.264L"
                      className="room-map-group">
                      <line x1="761.43" y1="325.71" x2="784.07" y2="334.16" />
                      <polyline points="787.44 335.42 790.22 336.46 774.45 375.31 742.48 363.2 755.63 323.55 758.33 324.56" />
                      <text transform="translate(754.29 353.27)">264L</text>
                    </g>
                    <g
                      id="_3.254L"
                      data-name="3.254L"
                      className="room-map-group">
                      <polyline points="792.77 243.9 795.68 244.86 777.59 292.94 749.66 283.21 765.26 235.01 768 235.86" />
                      <line x1="771.76" y1="236.93" x2="790.36" y2="243" />
                      <text transform="translate(760.5 268.8)">254L</text>
                    </g>
                    <g
                      id="_3.255L"
                      data-name="3.255L"
                      className="room-map-group">
                      <polyline points="821.99 254.92 824.07 255.71 804.27 303.07 777.59 292.94 795.68 244.86 798.71 246.02" />
                      <line x1="801.89" y1="247.23" x2="819.32" y2="253.89" />
                      <text transform="translate(787.56 279.76)">255L</text>
                    </g>
                    <g
                      id="_3.266P"
                      data-name="3.266P"
                      className="room-map-group">
                      <polyline points="763.06 313.14 742.03 305.81 749.66 283.21 777.59 292.94 769.45 315.13 766.45 314.19" />
                      <text transform="translate(746.97 303.92)">266P</text>
                    </g>
                    <g
                      id="_3.267P"
                      data-name="3.267P"
                      className="room-map-group">
                      <polyline points="772.06 316.11 769.45 315.13 777.59 292.94 804.27 303.07 795.05 324.75 775.61 317.55" />
                      <text transform="translate(774.45 312.43)">267P</text>
                    </g>
                    <g
                      id="_3.234K"
                      data-name="3.234K"
                      className="room-map-group">
                      <polyline points="790.36 219.46 813.05 227.25 832.45 175.03 797.11 163.03 779.75 215.81 786.99 218.3" />
                      <text transform="translate(792.59 200.16)">234K</text>
                    </g>
                    <g
                      id="_3.233P"
                      data-name="3.233P"
                      className="room-map-group">
                      <polyline points="839.51 177.82 859.63 185.77 845.82 215.81 820.9 206.12 832.45 175.03 836.22 176.52" />
                      <text transform="translate(826.84 200.16)">233P</text>
                    </g>
                    <g
                      id="_3.248P"
                      data-name="3.248P"
                      className="room-map-group">
                      <polyline points="819.32 229.76 835.79 236.33 845.82 215.81 820.9 206.12 813.05 227.25 815.88 228.38" />
                      <text transform="translate(817.38 224.66)">248P</text>
                    </g>
                    <g
                      id="_3.241P"
                      data-name="3.241P"
                      className="room-map-group">
                      <polyline points="642.9 235.37 648.57 204.85 682.88 212.29 675.31 248.81 641.79 241.37 642.34 238.39" />
                      <text transform="translate(648.68 230.68)">241P</text>
                    </g>
                    <g
                      id="_3.244P"
                      data-name="3.244P"
                      className="room-map-group">
                      <polyline points="636.93 271.24 641.79 241.37 675.31 248.81 667.44 285.71 635.66 279.07 636.4 274.51" />
                      <text transform="translate(642.83 267.44)">244P</text>
                    </g>
                    <g
                      id="_3.240P"
                      data-name="3.240P"
                      className="room-map-group">
                      <polyline points="634.35 211.24 629.63 239.78 601.44 234.97 606.44 198.27 636 202.69 635.27 206.87" />
                      <text transform="translate(606.36 223.39)">240P</text>
                    </g>
                    <g
                      id="_3.243P"
                      data-name="3.243P"
                      className="room-map-group">
                      <polyline points="628.55 246.23 623.4 276.72 596.33 272.55 601.45 234.89 629.63 239.78 629.22 242.12" />
                      <text transform="translate(601.44 258.89)">243P</text>
                    </g>
                    <g
                      id="_3.247P"
                      data-name="3.247P"
                      className="room-map-group">
                      <polyline points="617.82 291.16 620.54 291.57 613.08 334.33 588.48 330.15 594.28 287.55 614.89 290.71" />
                      <text transform="translate(591.57 313.84)">247P</text>
                    </g>
                    <g id="_3.246" data-name="3.246" className="room-map-group">
                      <polyline points="642.75 295.95 645.64 296.52 637.17 339.29 613.08 334.33 620.54 291.57 639.58 295.32" />
                      <text transform="translate(617.83 318.33)">246P</text>
                    </g>
                    <g
                      id="_3.235L"
                      data-name="3.235L"
                      className="room-map-group">
                      <polyline points="649.03 166.63 656.09 126.32 693.74 134.53 680.68 189.25 646.48 181.66 647.85 173.03" />
                      <text transform="translate(658.11 161.47)">235L</text>
                    </g>
                    <g
                      id="_3.236P"
                      data-name="3.236P"
                      className="room-map-group">
                      <polyline points="643.83 131.04 640.96 149.17 613.7 145.09 617.09 119.86 645 124.13 644.46 127.05" />
                      <text transform="translate(617.83 139.34)">236P</text>
                    </g>
                    <g
                      id="_3.237P"
                      data-name="3.237P"
                      className="room-map-group">
                      <polyline points="639.69 155.82 636 179.98 609.45 176.22 613.7 145.09 640.83 149.17 640.35 151.94" />
                      <text transform="translate(613.08 166.32)">237P</text>
                    </g>
                  </g>
                  <g id="ESCAPES">
                    <g
                      id="_3.ESC.1"
                      data-name="3.ESC.1"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="655.53 308.96 661.85 310.31 654.91 343.27 637.05 339.22 643.85 306.47 649.45 307.67"
                      />
                      <g>
                        <path
                          fill="#34C759"
                          d="M709.28,472h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,709.28,472Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#fff"
                          d="M706.28,476.54v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,706.28,475.54Zm-.5,1.5h-2.21v1.66h-1.29v1.67H701V482h-1.21v1H702v-1.67h1.29v-1.66h1.29V478h1.21Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                    <g
                      id="_3.ESC.2"
                      data-name="3.ESC.2"
                      className="map-group tech">
                      <polyline points="746.69 333.75 751.66 335.51 742.55 363.17 724.61 357.82 734.22 329.34 742.48 332.26" />
                      <g>
                        <path
                          fill="#34C759"
                          d="M799.07,495.27h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,799.07,495.27Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#fff"
                          d="M796.07,499.77v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,796.07,498.77Zm-.5,1.5h-2.21v1.66h-1.29v1.67h-1.29v1.67h-1.21v1h2.21V504.6h1.29v-1.66h1.29v-1.67h1.21Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="WCS">
                    <g
                      id="_3.WC.WOMAN"
                      data-name="3.WC.WOMAN"
                      className="map-group another">
                      <polyline
                        className="map-element-wall"
                        points="699.23 183.77 689.4 180.98 696.15 152.29 714.34 157.01 706.42 185.78 704.07 185.19"
                      />
                      <g>
                        <path
                          fill="#007aff"
                          d="M757.81,324.47h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5V326A1.5,1.5,0,0,0,757.81,324.47Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#fff"
                          d="M752.31,337.47v-3h1.5l-1.27-3.82a1,1,0,0,0-.95-.68h-.06a1,1,0,0,0-.95.68l-1.27,3.82h1.5v3Zm-.75-8a1,1,0,0,0,0-2,1,1,0,0,0,0,2Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                    <g
                      id="_3.WC.MAN"
                      data-name="3.WC.MAN"
                      className="map-group another">
                      <polyline points="761 201.01 755.22 199.3 765.79 162.52 777.54 166.11 767.66 202.7 765.9 202.11" />
                      <g>
                        <path
                          fill="#007aff"
                          d="M822.89,340.47h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5V342A1.5,1.5,0,0,0,822.89,340.47Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#fff"
                          d="M815.64,353.47v-3.75h-.75V347a1,1,0,0,1,1-1h1.5a1,1,0,0,1,1,1v2.75h-.75v3.75Zm1-8a1,1,0,1,0,0-2,1,1,0,0,0,0,2Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="WALLS">
                    <line
                      className="map-noway-wall"
                      x1="661.85"
                      y1="310.31"
                      x2="667.44"
                      y2="285.71"
                    />
                    <line
                      className="map-noway-wall"
                      x1="734.22"
                      y1="329.34"
                      x2="742.03"
                      y2="305.81"
                    />
                    <path
                      className="map-noway-wall"
                      d="M734.57,371.91c40.56,10.06,42.86,10.65,82.07,22.67"
                      transform="translate(-51.69 -158.58)"
                    />
                  </g>
                  <path
                    fill="#7f7f7f"
                    id="C1.3-2"
                    data-name="C1.3"
                    d="M813.38,214.1l-3.48-.92a11.25,11.25,0,0,0-.46-4,11.57,11.57,0,0,0-1.75-3.58,11.87,11.87,0,0,0-2.94-2.84,13,13,0,0,0-4-1.79,12.55,12.55,0,0,0-7.06.14,13.68,13.68,0,0,0-6.18,4.26,24,24,0,0,0-4.7,17.76,13.59,13.59,0,0,0,3.28,6.73,12.49,12.49,0,0,0,6.07,3.59,12.62,12.62,0,0,0,4.35.42,12.15,12.15,0,0,0,4-1,11.69,11.69,0,0,0,5.65-5.48l3.49.92a15.74,15.74,0,0,1-3,4.41,15,15,0,0,1-4.27,3.08,15.23,15.23,0,0,1-5.18,1.45,16.61,16.61,0,0,1-5.83-.53,15.88,15.88,0,0,1-7.86-4.64,16.93,16.93,0,0,1-4-8.33,27.4,27.4,0,0,1,5.47-20.65,16.75,16.75,0,0,1,7.61-5.22,15.7,15.7,0,0,1,9.12-.17,16.37,16.37,0,0,1,5.33,2.42,14.48,14.48,0,0,1,3.79,3.82,14.76,14.76,0,0,1,2.19,4.79A15.33,15.33,0,0,1,813.38,214.1Zm22.19-6.83-10.05,38-3.46-.92L831.14,210l-.22-.06-10.47,3.56.95-3.59L832,206.32Zm1.93,41.44a2.75,2.75,0,0,1-1.69-1.28,2.72,2.72,0,0,1-.27-2.1,2.64,2.64,0,0,1,1.27-1.68,2.72,2.72,0,0,1,2.1-.28,2.64,2.64,0,0,1,1.69,1.28,2.68,2.68,0,0,1,.28,2.09,2.57,2.57,0,0,1-.73,1.24,2.77,2.77,0,0,1-1.22.73A2.67,2.67,0,0,1,837.5,248.71Zm22,6.07a15.48,15.48,0,0,1-5.93-2.92,11.2,11.2,0,0,1-3.44-4.69,9.62,9.62,0,0,1-.33-5.66l3.51.92a6.45,6.45,0,0,0,.32,4,8.11,8.11,0,0,0,2.51,3.25,11.39,11.39,0,0,0,4.15,2,10.82,10.82,0,0,0,4.89.24,8.14,8.14,0,0,0,3.87-1.85,7.19,7.19,0,0,0,2.18-3.59,7.45,7.45,0,0,0-.1-4.37,7.91,7.91,0,0,0-2.63-3.63,12.87,12.87,0,0,0-4.93-2.36l-2.22-.59.82-3.11,2.22.59a10.58,10.58,0,0,0,4.6.26,7.53,7.53,0,0,0,3.67-1.75,6.91,6.91,0,0,0,2.11-3.54,7.33,7.33,0,0,0,0-3.94,6.85,6.85,0,0,0-2-3.21,8.52,8.52,0,0,0-3.74-2,9.73,9.73,0,0,0-4.27-.22,7.71,7.71,0,0,0-3.6,1.63,6.8,6.8,0,0,0-2.17,3.37l-3.35-.89a9.66,9.66,0,0,1,3-4.78,11.08,11.08,0,0,1,5.1-2.41,13.29,13.29,0,0,1,6.12.25,12.1,12.1,0,0,1,5.44,2.9,10.25,10.25,0,0,1,2.82,4.66,9.88,9.88,0,0,1,0,5.34,9.27,9.27,0,0,1-3.23,5.1,9.39,9.39,0,0,1-5.59,1.93l-.06.24a9.86,9.86,0,0,1,4.85,4.74,9.48,9.48,0,0,1,.49,6.65,10.12,10.12,0,0,1-3,5,11.66,11.66,0,0,1-5.39,2.66A14.42,14.42,0,0,1,859.49,254.78Z"
                    transform="translate(-51.69 -158.58)"
                  />
                  {/* <path
                  id="BG-2"
                  data-name="BG"
                  d="M640.17,488.73c30,4.77,68.24,12.66,68.24,12.66s1.35-4.86,2.51-10.62L778,507.2l-3.59,9.17c33.91,10.53,49.37,15.78,86.14,32.13,35-66.46,67.74-130.12,102.7-196.58,6.67-13.7,12.75-35.8-14.39-49.76-93-37-131.43-49.87-272.85-76.44Z"
                  transform="translate(-51.69 -158.58)"
                /> */}
                </g>
                <g id="C1.2">
                  <g id="ROOMS-2" data-name="ROOMS">
                    <g
                      id="_2.222P"
                      data-name="2.222P"
                      className="room-map-group">
                      <polyline points="365.86 100.64 368.66 100.37 364.35 59.94 339.31 62.16 344 102.7 362.46 100.96" />
                      <text transform="translate(348.94 70.17) rotate(83.95)">
                        222P
                      </text>
                    </g>
                    <g
                      id="_2.221P"
                      data-name="2.221P"
                      className="room-map-group">
                      <polyline points="341.2 103.02 344 102.7 339.31 62.16 317.23 64.88 323.16 105.24 337.48 103.44" />
                      <text transform="matrix(0.13, 0.99, -0.99, 0.13, 326.68, 73.08)">
                        221P
                      </text>
                    </g>
                    <g
                      id="_2.223K"
                      data-name="2.223K"
                      className="room-map-group">
                      <polyline points="373.68 100.02 386.27 99.15 383.27 58.37 364.35 59.94 368.66 100.37 370.22 100.26" />
                      <text transform="translate(370.78 67.78) rotate(83.37)">
                        223K
                      </text>
                    </g>
                    <g
                      id="_2.224P"
                      data-name="2.224P"
                      className="room-map-group">
                      <polyline points="408.11 97.69 410.92 97.5 408.57 57.07 383.27 58.37 386.27 99.15 404.46 97.94" />
                      <text transform="matrix(0.09, 1, -1, 0.09, 392.54, 66.67)">
                        224P
                      </text>
                    </g>
                    <g
                      id="_2.225P"
                      data-name="2.225P"
                      className="room-map-group">
                      <polyline points="432.31 97.04 435.05 96.98 433.35 56.16 408.57 57.07 410.92 97.5 428.72 97.12" />
                      <text transform="translate(417.18 65.06) rotate(85.57)">
                        225P
                      </text>
                    </g>
                    <g
                      id="_2.226P"
                      data-name="2.226P"
                      className="room-map-group">
                      <polyline points="456.63 96.4 459.44 96.33 458.27 55.37 433.35 56.16 435.05 96.98 453.11 96.5" />
                      <text transform="matrix(0.02, 1, -1, 0.02, 442.8, 64.95)">
                        226P
                      </text>
                    </g>
                    <g
                      id="_2.227P"
                      data-name="2.227P"
                      className="room-map-group">
                      <polyline points="479.46 96.44 482.4 96.46 482.92 55.5 458.27 55.37 459.44 96.33 476.2 96.42" />
                      <text transform="translate(467.46 63.6) rotate(90.35)">
                        227P
                      </text>
                    </g>
                    <g
                      id="_2.228P"
                      data-name="2.228P"
                      className="room-map-group">
                      <polyline points="503.33 96.69 506.14 96.72 507.83 56.29 482.92 55.5 482.4 96.46 499.94 96.65" />
                      <text transform="matrix(-0.02, 1, -1, -0.02, 492.05, 64.33)">
                        228P
                      </text>
                    </g>
                    <g
                      id="_2.229P"
                      data-name="2.229P"
                      className="room-map-group">
                      <polyline points="527.34 97.86 530.4 98.03 532.61 57.59 507.83 56.29 506.14 96.72 523.88 97.67" />
                      <text transform="translate(516.91 64.92) rotate(93.83)">
                        229P
                      </text>
                    </g>
                    <g
                      id="_2.230P"
                      data-name="2.230P"
                      className="room-map-group">
                      <polyline points="536.73 98.44 548.27 99.2 551.66 59.16 532.61 57.59 530.4 98.03 533.2 98.21" />
                      <text transform="translate(538.04 67.52) rotate(94.98)">
                        230P
                      </text>
                    </g>
                    <g
                      id="_2.231K"
                      data-name="2.231K"
                      className="room-map-group">
                      <polyline points="568.82 101.15 571.61 101.42 575.53 61.11 551.66 59.16 548.27 99.2 565.03 100.79" />
                      <text transform="translate(559.15 67.9) rotate(93.95)">
                        231K
                      </text>
                    </g>
                    <g
                      id="_2.232P"
                      data-name="2.232P"
                      className="room-map-group">
                      <polyline points="578.01 102.16 592.19 103.81 597.39 63.51 575.53 61.11 571.61 101.42 574.68 101.77" />
                      <text transform="translate(581.6 70.94) rotate(96)">
                        232P
                      </text>
                    </g>
                    <g
                      id="_2.237L"
                      data-name="2.237L"
                      className="room-map-group">
                      <polyline points="347.69 172.8 333.35 174.57 325.01 117.83 393.05 111.2 396.44 167.55 351.3 172.41" />
                      <text transform="translate(348.94 146.94)">237L</text>
                    </g>
                    <g
                      id="_2.233L"
                      data-name="2.233L"
                      className="room-map-group">
                      <polyline points="522.38 152.28 523.74 110.16 558.44 112.76 552.9 168.62 521.92 166.63 522.27 155.68" />
                      <text transform="translate(528.18 144.91)">233L</text>
                    </g>
                    <g
                      id="_2.240K"
                      data-name="2.240K"
                      className="room-map-group">
                      <polyline points="380.09 211.44 378.44 192.33 417.7 189.2 418.88 214.9 380.66 218.03 380.39 214.9" />
                      <text transform="translate(386.53 207.79)">240K</text>
                    </g>
                    <g
                      id="_2.242K"
                      data-name="2.242K"
                      className="room-map-group">
                      <polyline points="382.57 237 380.66 218.03 418.88 214.9 420.44 240.46 383.27 243.85 382.92 240.46" />
                      <text transform="translate(387.31 232.96)">242K</text>
                    </g>
                    <g
                      id="_2.243K"
                      data-name="2.243K"
                      className="room-map-group">
                      <polyline points="384.89 261.85 383.27 243.85 420.44 240.46 421.61 265.5 385.48 268.37 385.21 265.3" />
                      <text transform="translate(389.78 258)">243K</text>
                    </g>
                    <g
                      id="_2.248L"
                      data-name="2.248L"
                      className="room-map-group">
                      <polyline points="533.85 190.26 500.84 188.07 499.85 214.02 537.9 216.46 540.11 190.76 537.37 190.54" />
                      <text transform="translate(508.16 205.63)">248L</text>
                    </g>
                    <g
                      id="_2.250L"
                      data-name="2.250L"
                      className="room-map-group">
                      <polyline points="537.66 218.84 537.9 216.46 499.85 214.02 498.88 239.24 535.88 241.61 537.28 222.61" />
                      <text transform="translate(506.07 231.41)">250L</text>
                    </g>
                    <g
                      id="_2.252K"
                      data-name="2.252K"
                      className="room-map-group">
                      <polyline points="535.69 244.3 535.88 241.61 498.88 239.24 498.09 264.95 534.15 266.4 535.29 248.38" />
                      <text transform="translate(502.88 256.44)">252K</text>
                    </g>
                    <g
                      id="_2.249L"
                      data-name="2.249L"
                      className="room-map-group">
                      <polyline points="550.11 223.43 549.5 230.68 575.5 233.96 580.48 195.14 552.77 191.68 550.4 219.97" />
                      <text transform="translate(553.33 218.03)">249L</text>
                    </g>
                    <g
                      id="_2.251L"
                      data-name="2.251L"
                      className="room-map-group">
                      <polyline points="546.59 260.61 545.85 268.11 570.73 271.24 575.51 233.91 549.5 230.68 546.93 257.1" />
                      <text transform="translate(549.51 252.85)">251L</text>
                    </g>
                    <g id="_2.254" data-name="2.254" className="room-map-group">
                      <polyline points="530.99 278.93 541.74 279.72 538.13 322.55 516.11 320.68 517.42 277.92 527.14 278.64" />
                      <text transform="translate(519.46 304.11)">254</text>
                    </g>
                    <g id="_2.255" data-name="2.255" className="room-map-group">
                      <polyline points="553.44 281.02 569.25 282.78 563.78 325.47 538.13 322.55 541.74 279.72 549.68 280.6" />
                      <text transform="translate(544.22 304.83)">255</text>
                    </g>
                    <g
                      id="_2.239K"
                      data-name="2.239K"
                      className="room-map-group">
                      <polyline points="366.52 202.06 369.05 232.24 342.32 235.62 336.63 196.89 365.79 193.24 366.2 198.19" />
                      <text transform="translate(341.72 218.89)">239K</text>
                    </g>
                    <g
                      id="_2.241K"
                      data-name="2.241K"
                      className="room-map-group">
                      <polyline points="369.69 238.78 372.7 269.68 347.8 272.86 342.32 235.62 369.05 232.24 369.37 235.5" />
                      <text transform="translate(345.44 254.37)">241K</text>
                    </g>
                    <g id="_2.245" data-name="2.245" className="room-map-group">
                      <polyline points="379.09 281.87 368.92 282.98 373.61 324.72 405.7 321.85 402.44 279.33 382.74 281.48" />
                      <text transform="translate(378.44 306.74)">245</text>
                    </g>
                    <g id="_2.246" data-name="2.246" className="room-map-group">
                      <polyline points="357.71 284.31 349.62 285.28 355.74 326.92 373.61 324.72 368.92 282.98 361.36 283.88" />
                      <text transform="translate(357.22 295.6) rotate(81.23)">
                        246
                      </text>
                    </g>
                    <g
                      id="_2.234K"
                      data-name="2.234K"
                      className="room-map-group">
                      <polyline points="571.9 114.1 590.63 115.95 583.47 171.81 552.91 168.62 558.47 112.77 568.49 113.76" />
                      <text transform="translate(559.6 146.14)">234K</text>
                    </g>
                  </g>
                  <g id="TECHS-2" data-name="TECHS">
                    <g
                      id="_2.TECH.MAN"
                      data-name="2.TECH.MAN"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="487.76 165.63 510.51 166.66 512.26 109.94 466.75 108.55 466.05 164.63 483.12 165.41"
                      />
                    </g>
                    <g
                      id="_2.TECH.WOMAN"
                      data-name="2.TECH.WOMAN"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="430.2 165.99 407.66 167.03 404.2 110.35 451.22 108.92 451.55 124.6 451.48 121.52 442.09 121.67 442.48 156.97 451.78 156.78 451.73 153.1 451.92 164.99 434.85 165.77"
                      />
                      <g>
                        <path
                          fill="#007aff"
                          d="M505.66,287.67l-13.81.05a1.59,1.59,0,0,0-1.59,1.6l.05,13.81a1.6,1.6,0,0,0,1.6,1.59l13.81-.05a1.6,1.6,0,0,0,1.59-1.6l-.05-13.82A1.59,1.59,0,0,0,505.66,287.67Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#fff"
                          d="M502.49,292.46l0,7.44-7.44,0,0-7.43Zm0-1.06-7.43,0a1.08,1.08,0,0,0-1.06,1.07l0,7.44a1.07,1.07,0,0,0,1.06,1.06l7.44,0a1.07,1.07,0,0,0,1.06-1.07l0-7.43A1.06,1.06,0,0,0,502.48,291.4Zm-4.75,8v-2.12h.54v-1.33a1.06,1.06,0,0,0-1.07-1.06h-.53a1.07,1.07,0,0,0-1.06,1.07v1.33h.53v2.13Zm-.81-5a.67.67,0,1,0-.67-.66A.67.67,0,0,0,496.92,294.34Zm5.05,1.31-1.34-2.12-1.32,2.13Zm-2.65,1.07,1.33,2.12,1.32-2.13Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="WCS-2" data-name="WCS">
                    <g
                      id="_2.WC.WOMAN"
                      data-name="2.WC.WOMAN"
                      className="map-group another">
                      <polyline
                        className="map-element-wall"
                        points="424.19 157.21 414.02 157.21 412.25 126.98 430.84 126.98 431.63 157.21 429.67 157.21"
                      />
                      <path
                        fill="#007aff"
                        d="M480.62,295.34h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,480.62,295.34Z"
                        transform="translate(-51.69 -158.58)"
                      />
                      <path
                        fill="#fff"
                        d="M475.12,308.34v-3h1.5l-1.27-3.82a1,1,0,0,0-1-.68h-.06a1,1,0,0,0-.95.68l-1.27,3.82h1.5v3Zm-.75-8a1,1,0,0,0,0-2,1,1,0,0,0,0,2Z"
                        transform="translate(-51.69 -158.58)"
                      />
                    </g>
                    <g
                      id="_2.WC.MAN"
                      data-name="2.WC.MAN"
                      className="map-group another">
                      <polyline
                        className="map-element-wall"
                        points="488.27 157.21 480.93 157.21 480.54 118.52 495.11 118.52 495.6 156.53 493.55 156.62"
                      />
                      <path
                        fill="#007aff"
                        d="M546.26,294.24h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,546.26,294.24Z"
                        transform="translate(-51.69 -158.58)"
                      />
                      <path
                        fill="#fff"
                        d="M539,307.24v-3.75h-.75v-2.75a1,1,0,0,1,1-1h1.5a1,1,0,0,1,1,1v2.75H541v3.75Zm1-8a1,1,0,0,0,0-2,1,1,0,0,0,0,2Z"
                        transform="translate(-51.69 -158.58)"
                      />
                    </g>
                  </g>
                  <g id="ESCAPES-2" data-name="ESCAPES">
                    <g
                      id="_2.ESC.1"
                      data-name="2.ESC.1"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="410.2 288.94 403.35 289.57 405.7 321.85 424.09 321.07 422.63 287.81 415.88 288.42"
                      />
                      <g>
                        <path
                          fill="#34C759"
                          d="M471.91,451.89h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,471.91,451.89Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#ffffff"
                          d="M468.91,456.39v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,468.91,455.39Zm-.5,1.5H466.2v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67h1.29v-1.67h1.21Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                    <g
                      id="_2.ESC.2"
                      data-name="2.ESC.2"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="509.89 287.95 517.11 288.18 516.11 320.68 495.8 320.19 497.01 287.54 504.5 287.78"
                      />
                      <g>
                        <path
                          fill="#34C759"
                          d="M565.43,450.87h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,565.43,450.87Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#ffffff"
                          d="M562.43,455.37v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,562.43,454.37Zm-.5,1.5h-2.21v1.66h-1.29v1.67h-1.29v1.67h-1.21v1h2.21V460.2h1.29v-1.66h1.29v-1.67h1.21Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="WALLS-2" data-name="WALLS">
                    <line
                      className="map-noway-wall"
                      x1="421.61"
                      y1="265.5"
                      x2="422.62"
                      y2="287.81"
                    />
                    <path
                      className="map-noway-wall"
                      d="M547.49,478.77"
                      transform="translate(-51.69 -158.58)"
                    />
                    <path
                      className="map-noway-wall"
                      d="M552.54,346.22"
                      transform="translate(-51.69 -158.58)"
                    />
                    <line
                      className="map-noway-wall"
                      x1="498.09"
                      y1="264.95"
                      x2="497.01"
                      y2="287.54"
                    />
                    <path
                      className="map-noway-wall"
                      d="M469.48,349.73c39.56-1.07,44.06-1.16,82.06,0"
                      transform="translate(-51.69 -158.58)"
                    />
                  </g>
                  <path
                    id="C1.2-2"
                    data-name="C1.2"
                    fill="#7f7f7f"
                    d="M494.15,171.39h-3.6a11.33,11.33,0,0,0-1.46-3.72,11.54,11.54,0,0,0-2.61-3,12,12,0,0,0-3.57-2,12.82,12.82,0,0,0-4.31-.71,12.41,12.41,0,0,0-6.79,1.94,13.69,13.69,0,0,0-4.89,5.69,24.09,24.09,0,0,0,0,18.37,13.72,13.72,0,0,0,4.89,5.68,12.56,12.56,0,0,0,6.79,1.92,12.82,12.82,0,0,0,4.31-.71,12.41,12.41,0,0,0,3.57-2,11.75,11.75,0,0,0,4.07-6.75h3.6a15.81,15.81,0,0,1-1.8,5,15.14,15.14,0,0,1-8,6.79,16.44,16.44,0,0,1-5.77,1,15.81,15.81,0,0,1-8.78-2.47,16.87,16.87,0,0,1-6-7,27.37,27.37,0,0,1,0-21.36,16.69,16.69,0,0,1,6-7,15.67,15.67,0,0,1,8.78-2.5,16.44,16.44,0,0,1,5.77,1,14.63,14.63,0,0,1,4.64,2.72,15,15,0,0,1,3.34,4.07A15.64,15.64,0,0,1,494.15,171.39Zm19.7-12.27v39.27h-3.59V162.88H510l-9.2,6.12v-3.72l9.28-6.16Zm12.46,39.56a2.75,2.75,0,0,1-2.76-2.76,2.66,2.66,0,0,1,.81-2,2.79,2.79,0,0,1,3.91,0,2.66,2.66,0,0,1,.81,2,2.57,2.57,0,0,1-.39,1.38,2.84,2.84,0,0,1-1,1A2.69,2.69,0,0,1,526.31,198.68Zm11.65-.29v-2.62l12.83-14.42c1.67-1.9,3-3.51,4-4.86a16.21,16.21,0,0,0,2.23-3.72,9.17,9.17,0,0,0,.71-3.54,7.15,7.15,0,0,0-1.06-3.92,7.07,7.07,0,0,0-2.85-2.62,8.82,8.82,0,0,0-4.11-.94,8.45,8.45,0,0,0-4.24,1,7.25,7.25,0,0,0-2.79,2.84,8.35,8.35,0,0,0-1,4.14h-3.43a11,11,0,0,1,1.49-5.77,10.84,10.84,0,0,1,4.12-4,12.21,12.21,0,0,1,6-1.44,11.87,11.87,0,0,1,5.83,1.42,10.6,10.6,0,0,1,4,3.82,10.27,10.27,0,0,1,1.45,5.41,11.86,11.86,0,0,1-.76,4.2,19.16,19.16,0,0,1-2.59,4.52c-1.23,1.66-2.93,3.7-5.1,6.1L543,194.92v.25h19.42v3.22Z"
                    transform="translate(-51.69 -158.58)"
                  />
                  {/* <path
                  id="BG-3"
                  data-name="BG"
                  d="M649.08,222.1c-89-12.18-193.42-10-280.16,1.37l38.51,262c34-3.64,35.36-3.83,69.79-4.85-.31-4.82-.08-8.66-.38-13.3h69.55L546,479.55c33,1.32,38.71,1.58,69.43,4.51Z"
                  transform="translate(-51.69 -158.58)"
                /> */}
                </g>
                <g id="C1.1">
                  <g id="ROOMS-3" data-name="ROOMS">
                    <g id="_1.248" data-name="1.248">
                      <polyline
                        fill="#4da2ff"
                        stroke="#7f7f7f"
                        points="206.02 212.96 171.7 222.74 173.95 230.81 212.93 220.09 210.8 211.59 209.04 212.1"
                      />
                      <text
                        color="#ffffff"
                        fill="#ffffff"
                        fontSize="7px"
                        fontFamily="sans-serif"
                        transform="translate(188.25 224.83) rotate(-14.14)">
                        248
                      </text>
                    </g>
                    <g id="_1.250" data-name="1.250">
                      <polyline
                        fill="#4da2ff"
                        stroke="#7f7f7f"
                        points="144.19 231.43 142.43 231.96 144.76 239.44 165.37 233.07 163.44 225.68 147.4 230.47"
                      />
                      <text
                        color="#ffffff"
                        fill="#ffffff"
                        fontSize="7px"
                        fontFamily="sans-serif"
                        transform="translate(149.39 236.77) rotate(-16.43)">
                        250
                      </text>
                    </g>
                    <g className="room-map-group">
                      <polyline
                        id="_1.UNKNOWN"
                        data-name="1.UNKNOWN"
                        points="235.67 205.81 219.47 209.85 221.49 218.07 242.06 212.7 240.28 204.65 238.87 205.01"
                      />
                    </g>
                    <g id="_1.221P" data-name="1.221P">
                      <path
                        fill="#4da2ff"
                        stroke="#7f7f7f"
                        d="M102.66,333.34l2.58-.92-16-37.84-5.35,2.11c-28.29,11.95-33.29,21.08-27.38,46.77l2.66,7.8,40-16"
                        transform="translate(-51.69 -158.58)"
                      />
                      <text
                        color="#ffffff"
                        fill="#ffffff"
                        fontSize="11px"
                        fontFamily="sans-serif"
                        transform="translate(15.27 167.87)">
                        221P
                      </text>
                    </g>
                    <g
                      id="_1.222P"
                      data-name="1.222P"
                      className="room-map-group">
                      <polyline points="59.41 171.67 53.55 173.84 37.57 136 50.34 131.24 51.39 134.35 55.93 132.87 69.67 167.86 63.03 170.12" />
                      <text transform="matrix(0.36, 0.93, -0.93, 0.36, 46.47, 143.53)">
                        222P
                      </text>
                    </g>
                    <g
                      id="_1.223P"
                      data-name="1.223P"
                      className="room-map-group">
                      <polyline points="89.79 160.28 91.87 159.59 79.02 120.66 50.34 131.24 51.39 134.35 55.93 132.87 69.67 167.86 86.5 161.68" />
                      <text transform="translate(66.55 135.71) rotate(69.68)">
                        223P
                      </text>
                    </g>
                    <g
                      id="_1.224P"
                      data-name="1.224P"
                      className="room-map-group">
                      <polyline points="115.98 151.29 91.87 159.59 79.02 120.66 108.69 110.94 122.05 149.25 119.07 150.25" />
                      <text transform="translate(92.65 125.54) rotate(71.39)">
                        224P
                      </text>
                    </g>
                    <g
                      id="_1.225P"
                      data-name="1.225P"
                      className="room-map-group">
                      <polyline points="138.8 144.15 122.05 149.25 108.71 110.88 133.22 103.32 145.15 142.21 142.19 143.11" />
                      <text transform="translate(120.63 116.88) rotate(72.92)">
                        225P
                      </text>
                    </g>
                    <g
                      id="_1.226P"
                      data-name="1.226P"
                      className="room-map-group">
                      <polyline points="162.03 137.37 145.15 142.21 133.22 103.32 157.48 96.37 168.43 135.53 165.69 136.32" />
                      <text transform="matrix(0.28, 0.96, -0.96, 0.28, 144.16, 109.47)">
                        226P
                      </text>
                    </g>
                    <g
                      id="_1.227P"
                      data-name="1.227P"
                      className="room-map-group">
                      <polyline points="189.24 129.97 191.76 129.3 181.59 89.95 157.48 96.37 168.43 135.53 185.84 130.88" />
                      <text transform="translate(168.43 103.32) rotate(74.18)">
                        227P
                      </text>
                    </g>
                    <g
                      id="_1.228P"
                      data-name="1.228P"
                      className="room-map-group">
                      <polygon points="181.59 89.95 206.54 83.91 215.57 123.64 191.76 129.3 181.59 89.95" />
                      <text transform="translate(192.39 97.2) rotate(74.5)">
                        228P
                      </text>
                    </g>
                    <g
                      id="_1.232P"
                      data-name="1.232P"
                      className="room-map-group">
                      <line x1="291.76" y1="109.36" x2="263.76" y2="114.08" />
                      <polyline points="296.05 108.74 301.08 107.88 295.37 67.23 249.28 74.67 257.39 115.25 259.89 114.65" />
                      <text transform="translate(263.27 96)">232P</text>
                    </g>
                    <g
                      id="_1.229P"
                      data-name="1.229P"
                      className="room-map-group">
                      <polyline points="249.94 116.65 215.57 123.64 210.91 103.12 206.54 83.91 225.14 79.89 249.28 74.67 257.39 115.25 253.27 116.23" />
                      <polyline points="210.96 103.35 228.93 99.26 227.87 94.69" />
                      <line x1="224.69" y1="80.01" x2="227.28" y2="90.71" />
                      <line x1="233.62" y1="119.97" x2="230.79" y2="107.78" />
                      <line x1="228.91" y1="99.17" x2="230.14" y2="104.19" />
                      <text transform="translate(235.85 87.5) rotate(78.63)">
                        231P
                      </text>
                      <text
                        fontSize="4px"
                        transform="translate(215.79 108.73) rotate(42.48)">
                        229P
                      </text>
                      <text
                        id="_230"
                        data-name="230"
                        fontSize="4px"
                        transform="translate(211.91 89.34) rotate(44.07)">
                        230P
                      </text>
                    </g>
                    <g
                      id="_1.252L"
                      data-name="1.252L"
                      className="room-map-group">
                      <polyline points="104.03 229.39 108.41 227.71 88.85 173.85 59.42 185.25 81.91 237.85 100.4 230.77" />
                      <text transform="translate(72.22 209.44)">252L</text>
                    </g>
                    <g
                      id="_1.251L"
                      data-name="1.251L"
                      className="room-map-group">
                      <polyline points="110.95 226.82 108.41 227.71 88.85 173.85 119 163.6 136.94 217.77 114.81 225.48" />
                      <text transform="translate(101.32 199.24)">251L</text>
                    </g>
                    <g
                      id="_1.234P"
                      data-name="1.234P"
                      className="room-map-group">
                      <polyline points="246.78 132.67 246.28 129.99 224.77 134.61 237.73 189.36 256.48 185.63 247.43 136.25" />
                      <text transform="translate(235.16 149.83) rotate(78.63)">
                        234P
                      </text>
                    </g>
                    <g
                      id="_1.233P"
                      data-name="1.233P"
                      className="room-map-group">
                      <polyline points="262.11 126.88 258.66 127.62 263.25 152.84 306.45 146.11 302.81 120.23 265.49 126.33" />
                      <text transform="translate(270.19 141.12)">233P</text>
                    </g>
                    <g
                      id="_1.235P"
                      data-name="1.235P"
                      className="room-map-group">
                      <polyline points="264.44 159.63 268.87 183.26 310.67 176.09 306.45 146.11 263.27 152.97 263.76 155.57" />
                      <text transform="translate(275.18 168.27)">235P</text>
                    </g>
                    <g
                      id="_1.239K"
                      data-name="1.239K"
                      className="room-map-group">
                      <polyline points="276.67 228.34 277.11 230.74 317.44 224.28 313.92 199.25 272.73 205.91 276.09 224.34" />
                      <text transform="translate(281.95 219.94)">239K</text>
                    </g>
                    <g
                      id="_1.241K"
                      data-name="1.241K"
                      className="room-map-group">
                      <polyline points="280.99 252.27 281.59 255.38 320.8 248.21 317.44 224.28 277.11 230.76 280.33 248.11" />
                      <text transform="translate(285.86 243.85)">241K</text>
                    </g>
                    <g
                      id="_1.242K"
                      data-name="1.242K"
                      className="room-map-group">
                      <polyline points="286.08 278.03 286.74 281.03 324.55 274.89 320.8 248.21 281.59 255.39 285.29 274.14" />
                      <text transform="translate(291.06 269.28)">242K</text>
                    </g>
                    <g
                      id="_1.244K"
                      data-name="1.244K"
                      className="room-map-group">
                      <polyline points="276 296.04 273.1 296.6 281.46 339.39 305.56 334.5 298.22 291.72 279.17 295.42" />
                      <text transform="translate(277.11 318.62)">244K</text>
                    </g>
                    <g
                      id="_1.245K"
                      data-name="1.245K"
                      className="room-map-group">
                      <polyline points="300.94 291.31 298.22 291.72 305.56 334.5 333.1 330.61 326.32 287.5 303.87 290.87" />
                      <text transform="translate(302.88 315.46)">245K</text>
                    </g>
                    <g
                      id="_1.240K"
                      data-name="1.240K"
                      className="room-map-group">
                      <polyline points="267.9 250.96 267.2 247.18 243.65 252.42 251.94 288.34 273.85 283.5 268.57 254.64" />
                      <text transform="translate(247.11 270.49)">240K</text>
                    </g>
                    <g
                      id="_1.238K"
                      data-name="1.238K"
                      className="room-map-group">
                      <polyline points="261.32 214.85 260.1 208.19 234.99 214.55 243.65 252.42 267.2 247.18 261.96 218.36" />
                      <text transform="translate(239.57 235.62)">238K</text>
                    </g>
                    <g
                      id="_1.253L"
                      data-name="1.253L"
                      className="room-map-group">
                      <polyline points="126.84 245.44 123.93 246.4 135.04 277.33 161.96 268.09 151.77 237.28 129.87 244.45" />
                      <text transform="translate(131.69 260.62)">253L</text>
                    </g>
                    <g
                      id="_1.254L"
                      data-name="1.254L"
                      className="room-map-group">
                      <polyline points="117.71 248.75 95.95 257 109.15 287 135.04 277.33 123.93 246.4 120.89 247.55" />
                      <text transform="translate(104.69 269.59)">254L</text>
                    </g>
                    <g
                      id="_1.256P"
                      data-name="1.256P"
                      className="room-map-group">
                      <polyline points="146.74 319.81 149.8 318.62 135.04 277.33 109.15 287 126.42 327.71 143.83 320.94" />
                      <text transform="translate(117.6 305.12)">256P</text>
                    </g>
                    <g
                      id="_1.255P"
                      data-name="1.255P"
                      className="room-map-group">
                      <polyline points="155.85 316.49 175.55 309.54 161.96 268.09 135.04 277.33 149.8 318.62 152.41 317.7" />
                      <text transform="translate(143.58 296.22)">255P</text>
                    </g>
                    <g
                      id="_1.260P"
                      data-name="1.260P"
                      className="room-map-group">
                      <polygon points="130.91 339.58 146.82 376.49 144.85 377.18 145.97 380.12 175.16 369.3 161.76 328.13 130.91 339.58" />
                      <text transform="translate(140.14 355.82)">260P</text>
                    </g>
                    <g id="_1.261" data-name="1.261" className="room-map-group">
                      <polyline points="132.23 360.63 106.43 372.75 117.2 392.02 145.83 380.27 144.85 377.18 146.82 376.49 138.53 357.68 134.58 359.53" />
                      <text transform="translate(118.6 378.88)">261</text>
                    </g>
                    <g id="_1.262" data-name="1.262" className="room-map-group">
                      <polyline points="124 352.33 123.31 350.94 100.91 362.89 106.43 372.75 128.72 361.94 125.6 355.58" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 108.19, 369.82)">
                        262
                      </text>
                    </g>
                    <g id="_1.263" data-name="1.263" className="room-map-group">
                      <polyline points="119.22 342.63 116.54 337.18 93.07 348.62 100.91 362.89 123.31 350.94 120.8 345.82" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 101.77, 357.68)">
                        263
                      </text>
                    </g>
                    <g id="_1.264" data-name="1.264" className="room-map-group">
                      <polyline points="111.91 327.75 108.71 321.22 84.85 333.66 93.07 348.62 116.54 337.18 113.39 330.77" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 94.15, 342.76)">
                        264
                      </text>
                    </g>
                    <g id="_1.266" data-name="1.266" className="room-map-group">
                      <polyline points="97.28 297.99 94.65 292.63 69.35 305.18 76.92 319.02 101.77 307.11 98.96 301.41" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 79.2, 313.28)">
                        266
                      </text>
                    </g>
                    <g id="_1.267" data-name="1.267" className="room-map-group">
                      <polyline points="89.97 283.13 87 277.08 60.97 289.76 69.35 305.18 94.65 292.63 91.63 286.5" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 72.34, 298.88)">
                        267
                      </text>
                    </g>
                    <g id="_1.268" data-name="1.268" className="room-map-group">
                      <polyline points="82.55 267.81 80.2 263.24 53.43 275.83 60.97 289.76 87 277.08 84.76 272.61" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 64.57, 283.64)">
                        268
                      </text>
                    </g>
                    <g id="_1.269" data-name="1.269" className="room-map-group">
                      <polyline points="75.51 253.7 72.34 247.26 44.92 260.77 53.53 276 80.2 263.24 77.12 257" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 56.64, 268.97)">
                        269
                      </text>
                    </g>
                    <g id="_1.270" data-name="1.270" className="room-map-group">
                      <polyline points="68.17 238.78 65.45 233.25 37.17 246.68 44.92 260.77 72.34 247.26 69.73 241.95" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 48.95, 254.54)">
                        270
                      </text>
                    </g>
                    <g id="_1.271" data-name="1.271" className="room-map-group">
                      <polyline points="60.71 223.6 57.89 217.88 29.01 231.82 37.17 246.68 65.45 233.25 62.43 227.1" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 41.88, 239.88)">
                        271
                      </text>
                    </g>
                    <g id="_1.272" data-name="1.272" className="room-map-group">
                      <polyline points="53.5 208.96 50.81 203.47 21.04 217.32 29.01 231.82 57.89 217.88 55.14 212.28" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 33.23, 225.42)">
                        272
                      </text>
                    </g>
                    <g id="_1.273" data-name="1.273" className="room-map-group">
                      <polyline points="45.77 193.31 50.81 203.47 21.04 217.32 7.53 192.64 39.35 180.17 44.01 189.59" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 24.57, 207.22)">
                        273
                      </text>
                    </g>
                    <g id="_1.265" data-name="1.265" className="room-map-group">
                      <polyline points="103.5 310.63 101.77 307.11 76.92 319.02 84.85 333.66 108.71 321.22 106.63 317" />
                      <text transform="matrix(0.9, -0.44, 0.44, 0.9, 87, 327.71)">
                        265
                      </text>
                    </g>
                  </g>
                  <g id="TECHS-3" data-name="TECHS">
                    <g
                      id="_1.TECH.WOMAN"
                      data-name="1.TECH.WOMAN"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="217.37 194.5 237.73 189.36 224.77 134.61 179.44 145.9 182.76 157.96 183.57 160.96 182.76 157.96 191.96 155.62 201.22 189.75 192.27 192.45 191.19 188.88 192.27 192.45 194.43 200.28 211.46 195.99"
                      />
                      <g>
                        <path
                          fill="#007aff"
                          d="M247.42,320l-13.79.79a1.59,1.59,0,0,0-1.5,1.68l.79,13.79a1.59,1.59,0,0,0,1.68,1.5l13.79-.79a1.59,1.59,0,0,0,1.5-1.68l-.79-13.79A1.59,1.59,0,0,0,247.42,320Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#fff"
                          d="M244.51,325l.42,7.43-7.42.42-.43-7.42Zm-.06-1.06-7.43.43a1.06,1.06,0,0,0-1,1.12l.43,7.42a1.06,1.06,0,0,0,1.12,1l7.42-.42a1.06,1.06,0,0,0,1-1.12l-.42-7.43A1.07,1.07,0,0,0,244.45,323.91Zm-4.32,8.23L240,330l.53,0-.08-1.33a1.06,1.06,0,0,0-1.12-1l-.53,0a1.08,1.08,0,0,0-1,1.12l.08,1.33.53,0,.12,2.12Zm-1.08-5a.67.67,0,0,0-.08-1.33.65.65,0,0,0-.62.7A.66.66,0,0,0,239.05,327.15Zm5.11,1-1.45-2.05-1.2,2.2Zm-2.59,1.21,1.45,2,1.2-2.19Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                    <g
                      id="_1.TECH.MAN"
                      data-name="1.TECH.MAN"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="159.53 210.68 136.94 217.77 119 163.6 150.98 154 153.29 162.15 137.72 166.44 148.9 204.51 151.19 203.86 148.9 204.51 137.72 166.44 153.29 162.15 164.21 200.54 156.5 202.63 164.21 200.54 150.98 154 164.56 149.83 179.77 204.32 164.21 209.21"
                      />
                    </g>
                  </g>
                  <g id="WCS-3" data-name="WCS">
                    <g
                      id="_1.WC.MAN"
                      data-name="1.WC.MAN"
                      className="map-group another">
                      <polyline
                        className="map-element-wall"
                        points="151.19 203.86 148.9 204.51 137.72 166.44 153.29 162.16 164.21 200.54 156.5 202.63"
                      />
                      <g>
                        <path
                          fill="#007aff"
                          d="M210,339.62H197a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,210,339.62Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#fff"
                          d="M202.76,352.62v-3.75H202v-2.75a1,1,0,0,1,1-1h1.5a1,1,0,0,1,1,1v2.75h-.75v3.75Zm1-8a1,1,0,1,0-1-1A1,1,0,0,0,203.76,344.62Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                    <g
                      id="_1.WC.WOMAN"
                      data-name="1.WC.WOMAN"
                      className="map-group another">
                      <polyline
                        className="map-element-wall"
                        points="214.06 186.85 210.66 187.7 203.1 159.59 221.79 154.71 228.47 183.52 218.95 185.87"
                      />
                      <g>
                        <path
                          fill="#007aff"
                          d="M274.39,322.59h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,274.39,322.59Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#fff"
                          d="M268.89,335.59v-3h1.5l-1.27-3.81a1,1,0,0,0-.95-.69h-.06a1,1,0,0,0-.95.69l-1.27,3.81h1.5v3Zm-.75-8a1,1,0,1,0-1-1A1,1,0,0,0,268.14,327.59Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="ESCAPES-3" data-name="ESCAPES">
                    <g
                      id="_1.ESC.1"
                      data-name="1.ESC.1"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="174.63 338.26 179.96 336.59 189.22 364.76 174.97 369.28 165.94 340.98 170.16 339.66"
                      />
                      <g>
                        <path
                          fill="#34C759"
                          d="M233.74,501.19h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,233.74,501.19Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#ffffff"
                          d="M230.74,505.69v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,230.74,504.69Zm-.5,1.5H228v1.67h-1.29v1.66h-1.29v1.67h-1.21v1h2.21v-1.66h1.29v-1.67H229v-1.67h1.21Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                    <g
                      id="_1.ESC.2"
                      data-name="1.ESC.2"
                      className="map-group tech">
                      <polyline
                        className="map-element-wall"
                        points="266.66 312.39 261.99 313.45 268.18 342.62 281.47 339.29 275.61 310.36 270.21 311.58"
                      />
                      <g>
                        <path
                          fill="#34C759"
                          d="M328.18,474.05h-13a1.5,1.5,0,0,0-1.5,1.5v13a1.5,1.5,0,0,0,1.5,1.5h13a1.5,1.5,0,0,0,1.5-1.5v-13A1.5,1.5,0,0,0,328.18,474.05Z"
                          transform="translate(-51.69 -158.58)"
                        />
                        <path
                          fill="#ffffff"
                          d="M325.18,478.55v7h-7v-7Zm0-1h-7a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1v-7A1,1,0,0,0,325.18,477.55Zm-.5,1.5h-2.21v1.66h-1.29v1.67h-1.29v1.67h-1.21v1h2.21v-1.67h1.29v-1.66h1.29v-1.67h1.21Z"
                          transform="translate(-51.69 -158.58)"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="ASSEMBLYHALL-GROUP" className="text-map-group">
                    <g id="ASSEMBLYHALL" className="map-element-label">
                      <text transform="matrix(0.97, -0.26, 0.26, 0.97, 177.58, 287)">
                        ASSEMBLY
                      </text>
                      <text transform="matrix(0.97, -0.26, 0.26, 0.97, 199.88, 295.64)">
                        HALL
                      </text>
                      <polyline
                        className="map-noway-wall"
                        id="WALL"
                        points="179.96 336.59 184.12 335.23 175.55 309.54"
                      />
                      <polyline
                        className="map-noway-wall"
                        points="251.94 288.34 257.39 314.41 261.99 313.45"
                      />
                    </g>
                  </g>
                  <g className="map-group">
                    <path
                      fill="#7f7f7f"
                      id="C1.1-2"
                      data-name="C1.1"
                      d="M173.59,222.29l-3.47,1a11.05,11.05,0,0,0-2.41-3.2,11.71,11.71,0,0,0-7.29-3.15,12.89,12.89,0,0,0-4.35.47,12.46,12.46,0,0,0-6,3.7,13.67,13.67,0,0,0-3.18,6.8,24,24,0,0,0,5,17.69,13.6,13.6,0,0,0,6.23,4.15,13.17,13.17,0,0,0,11-1.82A12.21,12.21,0,0,0,172,245a11.68,11.68,0,0,0,2.09-7.59l3.48-1a15.93,15.93,0,0,1-.38,5.34,15.2,15.2,0,0,1-5.86,8.69A16.26,16.26,0,0,1,166,253a15.85,15.85,0,0,1-9.13,0,16.93,16.93,0,0,1-7.69-5.13,27.45,27.45,0,0,1-5.75-20.58,16.85,16.85,0,0,1,3.92-8.36,15.74,15.74,0,0,1,7.79-4.77,16.67,16.67,0,0,1,5.82-.61,14.46,14.46,0,0,1,5.2,1.38,15.07,15.07,0,0,1,4.31,3A15.65,15.65,0,0,1,173.59,222.29Zm15.67-17.12L199.83,243l-3.45,1-9.56-34.2-.22.06-7.22,8.37-1-3.58,7.28-8.43Zm22.65,34.75a2.75,2.75,0,0,1-3.4-1.92,2.66,2.66,0,0,1,.25-2.1,2.69,2.69,0,0,1,1.67-1.3,2.62,2.62,0,0,1,2.1.25,2.68,2.68,0,0,1,1.3,1.66,2.71,2.71,0,0,1,0,1.44,2.86,2.86,0,0,1-.68,1.24A2.63,2.63,0,0,1,211.91,239.92Zm7.82-43.26,10.57,37.82-3.45,1-9.56-34.2-.22.06-7.22,8.37-1-3.58,7.28-8.43Z"
                      transform="translate(-51.69 -158.58)"
                    />
                    {/* <path
                    id="BG-4"
                    data-name="BG"
                    d="M347.06,225.81S241.25,237.6,89.26,294.58c-24.69,9.26-45,19.21-30.07,56.68L168.89,550.6c36.39-16,60.36-22.79,72.87-26l1-.26-2.62-8.81,76.58-22.59,1.94,7.85c32.5-7.85,30.54-7,65.22-12.38Z"
                    transform="translate(-51.69 -158.58)"
                  /> */}
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

export default SecondFloorIOS;
