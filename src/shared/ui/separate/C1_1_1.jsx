import { LayoutMinimap } from "../layout";
import WALLPAPER_C1_1 from "../general/minimap/WALLPAPER_C1_1";
import ICONS_C1_1 from "../general/minimap/ICONS_C1_1";

const FirstFloorFirstBlock = () => {
  return (
    <LayoutMinimap>
      <WALLPAPER_C1_1 />
      <g id="BLOCKS">
        <g id="C1">
          <g>
            <g className="map-groups-techs">
              <g>
                <polygon points="41.12 91.95 84.63 180.37 123.9 165.32 130.07 181.01 136.77 178.69 118.68 124.05 143.18 116.39 125.46 63.48 41.12 91.95" />
                <polygon points="153.5 71.63 164.64 110.16 143.18 116.39 130.5 78.57 153.5 71.63" />
              </g>
            </g>
            <g className="map-groups-rooms">
              <g data-name="ASSEMBLYHALL|АКТОВЫЙ ЗАЛ">
                <polygon points="191.05 312.38 151.89 197.9 167.79 193.42 189.03 265.13 167.79 193.42 222.96 177.88 243.3 249.35 222.96 177.88 236.82 173.97 264.45 291.31 191.05 312.38" />
                <path
                  d="M229.49,448l-1.48.41.76-10.16,1.61-.44,5.89,8.31-1.48.41-4.71-6.83-.07,0Zm-.75-3.69,4.79-1.33.33,1.17-4.8,1.33Zm11.93-6.75a1.32,1.32,0,0,0-.87-.82,2.33,2.33,0,0,0-1.41,0,2.53,2.53,0,0,0-.93.46,1.45,1.45,0,0,0-.51.66,1.19,1.19,0,0,0,0,.77,1.15,1.15,0,0,0,.32.52,1.32,1.32,0,0,0,.52.29,3.22,3.22,0,0,0,.62.11c.22,0,.42,0,.61,0l1,0a6.77,6.77,0,0,1,1,0,3.79,3.79,0,0,1,1,.25,2.45,2.45,0,0,1,.85.57,2.3,2.3,0,0,1,.55,1,2.67,2.67,0,0,1,0,1.51,2.84,2.84,0,0,1-.91,1.28,4.43,4.43,0,0,1-1.74.86,4.51,4.51,0,0,1-1.89.17,2.88,2.88,0,0,1-1.44-.6,2.85,2.85,0,0,1-.88-1.31l1.4-.39a1.47,1.47,0,0,0,.56.74,1.7,1.7,0,0,0,.87.29,3.12,3.12,0,0,0,1-.12,2.73,2.73,0,0,0,1-.47,1.81,1.81,0,0,0,.58-.73,1.21,1.21,0,0,0,.05-.86,1,1,0,0,0-.42-.61,2,2,0,0,0-.75-.26,5.87,5.87,0,0,0-1-.05h-1.17a4.34,4.34,0,0,1-2-.4,2.09,2.09,0,0,1-1.07-1.37,2.43,2.43,0,0,1,0-1.51,2.94,2.94,0,0,1,.92-1.25,4.14,4.14,0,0,1,1.58-.8,4.21,4.21,0,0,1,1.74-.13,3,3,0,0,1,1.39.59,2.44,2.44,0,0,1,.8,1.2Zm8.18-2.26a1.37,1.37,0,0,0-.88-.83,2.34,2.34,0,0,0-1.41,0,2.38,2.38,0,0,0-.93.45,1.47,1.47,0,0,0-.51.67,1.1,1.1,0,0,0,0,.76,1,1,0,0,0,.31.52,1.4,1.4,0,0,0,.52.29,2.6,2.6,0,0,0,.62.11c.22,0,.42,0,.61,0l1,0a6.84,6.84,0,0,1,1,.05,3.77,3.77,0,0,1,1,.24,2.45,2.45,0,0,1,.85.57,2.36,2.36,0,0,1,.55,1,2.67,2.67,0,0,1,0,1.51,2.84,2.84,0,0,1-.9,1.28,4.56,4.56,0,0,1-1.75.87,4.68,4.68,0,0,1-1.89.17,2.84,2.84,0,0,1-1.44-.61,2.8,2.8,0,0,1-.88-1.31l1.4-.39a1.5,1.5,0,0,0,.56.75,1.79,1.79,0,0,0,.87.28,2.86,2.86,0,0,0,1-.11,2.91,2.91,0,0,0,1-.48,1.9,1.9,0,0,0,.59-.72,1.3,1.3,0,0,0,0-.87,1,1,0,0,0-.42-.6,1.67,1.67,0,0,0-.75-.26,7.1,7.1,0,0,0-1-.06H246.8a4.5,4.5,0,0,1-2-.4,2.11,2.11,0,0,1-1.07-1.38,2.36,2.36,0,0,1,.05-1.51,2.89,2.89,0,0,1,.91-1.25,4.12,4.12,0,0,1,1.58-.79,3.9,3.9,0,0,1,1.74-.13,2.82,2.82,0,0,1,1.39.59,2.36,2.36,0,0,1,.8,1.19Zm5,5.93L251.31,432l5.79-1.61.33,1.2-4.4,1.22.78,2.82,4.1-1.14.33,1.19-4.1,1.14.79,2.83,4.45-1.24.33,1.2ZM259,429.91l1.69-.47,4.93,6.36.11,0,.95-8,1.69-.47,2.56,9.23-1.33.37-1.85-6.68-.09,0-.87,7.43-1.1.3-4.57-5.92-.09,0,1.85,6.68-1.32.37Zm14,6.07-2.56-9.23,3.38-.94a3.75,3.75,0,0,1,1.72-.13,2.35,2.35,0,0,1,1.21.6,2.6,2.6,0,0,1,.66,1.14,2.09,2.09,0,0,1,.06,1,1.8,1.8,0,0,1-.4.79,2.45,2.45,0,0,1-.68.55l0,.09a1.94,1.94,0,0,1,1,.05,2.21,2.21,0,0,1,.94.57,2.43,2.43,0,0,1,.63,1.14,2.52,2.52,0,0,1,0,1.36,2.31,2.31,0,0,1-.77,1.17,4.25,4.25,0,0,1-1.68.82ZM274,434.4l2-.56a2.17,2.17,0,0,0,1.32-.79,1.29,1.29,0,0,0,.17-1.08,1.56,1.56,0,0,0-.45-.75,1.65,1.65,0,0,0-.79-.4,2.11,2.11,0,0,0-1,.05l-2.07.57Zm-1.13-4,1.87-.51a2,2,0,0,0,.79-.42,1.45,1.45,0,0,0,.46-.67,1.34,1.34,0,0,0,0-.84,1.35,1.35,0,0,0-.66-.85,1.78,1.78,0,0,0-1.34,0l-1.91.52Zm8.37,3.32-2.56-9.23,1.39-.39,2.23,8,4.19-1.16.33,1.2Zm3.21-10.83,1.58-.44,3.58,3.53.1,0,1.25-4.87,1.58-.44-1.79,6.54,1,3.63-1.39.38-1-3.62ZM251.12,461l-2.56-9.24,1.4-.38,1.11,4,4.6-1.28-1.11-4,1.4-.39,2.56,9.24-1.4.38-1.12-4-4.6,1.27,1.12,4Zm10.21-2.83-1.48.41.76-10.16,1.61-.45,5.88,8.32-1.48.41-4.7-6.84-.07,0Zm-.76-3.69,4.8-1.33.32,1.17-4.79,1.33Zm8.87,1.44-2.56-9.24,1.39-.38,2.23,8,4.18-1.16.33,1.2Zm7.16-2L274,444.71l1.4-.38,2.22,8,4.19-1.16.33,1.2Z"
                  transform="translate(-50.14 -199.88)"
                />
              </g>

              <g data-name="LIBRARY|BIBLIOTEKA|БИБЛИОТЕКА|МЕДИАТЕКА|MEDIATEKA|KITAPHANA|КІТАПХАНА">
                <polyline points="149.8 191.93 184.64 293.65 168.11 299.17 179.31 329.26 119.83 353.84 5.48 147.46 1 131.46 3.55 117.7 12.36 106.63 26.52 97.83 41.12 91.95 84.63 180.37 123.9 165.32 130.07 181.01 144.44 176.27 146.8 183.13" />
                <path
                  d="M132.32,448.45,127.86,437l1.73-.67,3.88,10,5.21-2,.57,1.49Zm6.19-15.61L143,444.32l-1.73.67-4.46-11.48Zm7,10.5L141,431.86l4.21-1.64a4.9,4.9,0,0,1,2.18-.38,3.05,3.05,0,0,1,1.62.62,3.19,3.19,0,0,1,1,1.38,2.75,2.75,0,0,1,.21,1.31,2.33,2.33,0,0,1-.41,1.06,3.33,3.33,0,0,1-.79.8l0,.11a2.42,2.42,0,0,1,1.26-.06,2.83,2.83,0,0,1,1.28.6,3.33,3.33,0,0,1,.95,1.38,3.29,3.29,0,0,1,.19,1.74,3.06,3.06,0,0,1-.83,1.6,5.52,5.52,0,0,1-2,1.25Zm1.15-2.16,2.5-1a2.83,2.83,0,0,0,1.6-1.17,1.64,1.64,0,0,0,.07-1.42,2,2,0,0,0-.66-.89,2.16,2.16,0,0,0-1.07-.42,2.68,2.68,0,0,0-1.3.2l-2.56,1Zm-1.95-5,2.32-.9a2.51,2.51,0,0,0,1-.63,2,2,0,0,0,.51-.92,1.74,1.74,0,0,0-.1-1.07,1.67,1.67,0,0,0-1-1,2.29,2.29,0,0,0-1.72.11l-2.36.92Zm11.13,3.18-4.46-11.48,4.1-1.59a5,5,0,0,1,2.39-.4,3.21,3.21,0,0,1,1.82.76,4.08,4.08,0,0,1,1.16,1.69,4.19,4.19,0,0,1,.28,2,3.23,3.23,0,0,1-.85,1.76,5.32,5.32,0,0,1-2,1.3l-3.1,1.2-.58-1.49,3-1.14a3.68,3.68,0,0,0,1.27-.77,1.78,1.78,0,0,0,.51-1,2.63,2.63,0,0,0-.18-1.2,2.59,2.59,0,0,0-.69-1,1.79,1.79,0,0,0-1.07-.42,3.22,3.22,0,0,0-1.48.28l-2.18.84,3.88,10Zm3.66-7.38,4.85,4.08-2,.77-4.79-4.11ZM167,435l-1.84.72-.33-13.09,2-.78,8.59,9.88-1.84.72-6.9-8.14-.09,0Zm-1.44-4.61,6-2.32.56,1.46-6,2.32Zm11.53.7L172.6,419.6l4.09-1.58a5,5,0,0,1,2.4-.4,3.24,3.24,0,0,1,1.81.75,4.3,4.3,0,0,1,1.17,1.7,4.07,4.07,0,0,1,.27,2,3.12,3.12,0,0,1-.84,1.75,5.22,5.22,0,0,1-2,1.31l-3.1,1.2-.58-1.49,2.94-1.14A3.59,3.59,0,0,0,180,423a1.68,1.68,0,0,0,.5-1,2.38,2.38,0,0,0-.18-1.2,2.59,2.59,0,0,0-.69-1,1.77,1.77,0,0,0-1.06-.43,3.55,3.55,0,0,0-1.49.28l-2.17.85,3.88,10Zm3.65-7.38,4.85,4.08-2,.76-4.79-4.1Zm.76-7.55,2-.76,5,4.05.12-.05,1-6.38,2-.77-1.45,8.6,1.75,4.51-1.73.67-1.75-4.51Z"
                  transform="translate(-50.14 -199.88)"
                />
              </g>
            </g>
            <g data-name="MEDIKER|МЕДИКЕР" fill="#e0706a">
              <polyline
                stroke="#7f7f7f"
                points="194.8 75.86 186.93 45.91 248.21 31.67 255.97 69.02 221.19 76.72 225.37 94.81 201.35 100.79 195.99 80.38"
              />
              <path
                fill="#DF0C00"
                d="M263.56,263.37H250.33a1.52,1.52,0,0,0-1.53,1.52v13.24a1.53,1.53,0,0,0,1.53,1.53h13.23a1.53,1.53,0,0,0,1.53-1.53V264.89A1.52,1.52,0,0,0,263.56,263.37Z"
                transform="translate(-50.14 -199.88)"
              />
              <path
                fill="#fff"
                d="M250.84,265.41a1.59,1.59,0,0,0,.09.38c.29.68,1.37,1.49,3.27,2.46a4.69,4.69,0,0,1,1.8,1.32,2.44,2.44,0,0,1,.59,1.5v.11h-2.9l0,.07a.68.68,0,0,0,.18.33,3.69,3.69,0,0,0,1,.57,3.68,3.68,0,0,1,1.43.92,2.44,2.44,0,0,1,.21.3,2,2,0,0,1,.16.51v.1l-.11,0a1.07,1.07,0,0,0-.24,1.48,1,1,0,0,0,.33.33s0,0,0,.9v.88h.08a.88.88,0,0,0,.55-.51,1.3,1.3,0,0,0,.11-.56,1.22,1.22,0,0,0-.23-.76l-.08-.12V275c0-.35,0-.64,0-.64l1.07-.27a9.74,9.74,0,0,0,1.36-.46,2.71,2.71,0,0,0,1.7-2,2.87,2.87,0,0,0,0-1,2.29,2.29,0,0,0-.48-1,1.38,1.38,0,0,0-1-.49,1.45,1.45,0,0,0-1.3.67,2.25,2.25,0,0,0-.31.76v.06h.24a1.27,1.27,0,0,0,1-.46,1.53,1.53,0,0,0,.22-.32c.08-.15.08-.15.16-.15a1,1,0,0,1,.47.15,1.07,1.07,0,0,1,.47.55,1.84,1.84,0,0,1,.14.76,1.67,1.67,0,0,1-.46,1.2,4.38,4.38,0,0,1-2.13,1.13l-1.07.29a.74.74,0,0,1,.07-.31,2.08,2.08,0,0,1,.6-.76,6.31,6.31,0,0,1,.89-.52c.32-.14.87-.41,1-.5s.4-.37.4-.52v-.05H257.3v-.09a2.78,2.78,0,0,1,.1-.6,2.83,2.83,0,0,1,.79-1.25,5.75,5.75,0,0,1,1.66-1.08c1.94-1,3.11-1.94,3.19-2.65v-.11h-1.11c-.67,0-1.19,0-1.28,0a1.86,1.86,0,0,0-1.17.66,5,5,0,0,0-.64.95,4,4,0,0,1-.73,1.07,1.24,1.24,0,0,1-.24.19,1.28,1.28,0,0,1-.44.15h-.06v-.23a1.15,1.15,0,0,0-.29-.9c-.16-.19-.14-.19-.29,0a1.22,1.22,0,0,0-.27.49,1.35,1.35,0,0,0,0,.41v.27h-.1a1.1,1.1,0,0,1-.48-.2,2.37,2.37,0,0,1-.53-.61c-.07-.1-.23-.38-.36-.6s-.29-.49-.35-.59a2,2,0,0,0-1.39-1,8.84,8.84,0,0,0-1.32,0Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g className="map-groups-techs">
              <g>
                <polygon points="238.44 150.03 270.99 142.48 268.23 129.88 235.39 137.14 238.44 150.03" />
                <polyline points="267.85 127.93 268.23 129.88 235.39 137.14 232.07 123.1 257.09 117.51 265.47 115.64 267.32 125.22" />
                <polyline points="257.62 117.39 265.47 115.64 262.57 101.03 228.61 108.5 232.07 123.1 254.26 118.14" />
              </g>
            </g>
          </g>
          <g className="map-groups-rooms">
            <g id="C1.1.168" data-name="C1.1.168">
              <polyline points="274.54 198.48 244.23 205.42 236.82 173.97 302.88 160.51 307.7 191.02 279.84 197.29" />
              <path
                d="M318.11,379.7v7.05h-1.06v-6h0l-1.69,1.1v-1l1.76-1.15Zm4.37,7.14a2.69,2.69,0,0,1-.93-.17,2.19,2.19,0,0,1-.83-.55,2.87,2.87,0,0,1-.59-1,5,5,0,0,1-.22-1.62,6.66,6.66,0,0,1,.18-1.63,3.63,3.63,0,0,1,.53-1.21,2.39,2.39,0,0,1,.84-.75,2.27,2.27,0,0,1,1.11-.26,2.45,2.45,0,0,1,1.11.24,2.12,2.12,0,0,1,.79.69,2.15,2.15,0,0,1,.39,1h-1.05a1.38,1.38,0,0,0-.42-.72,1.21,1.21,0,0,0-.82-.27,1.36,1.36,0,0,0-1.21.67,3.43,3.43,0,0,0-.43,1.87H321a2,2,0,0,1,.44-.51,1.93,1.93,0,0,1,.6-.32,2.16,2.16,0,0,1,1.81.18,2.25,2.25,0,0,1,.8.82,2.48,2.48,0,0,1,.29,1.2,2.53,2.53,0,0,1-.3,1.22,2.29,2.29,0,0,1-.86.86A2.41,2.41,0,0,1,322.48,386.84Zm0-.89a1.36,1.36,0,0,0,1.23-.74,1.44,1.44,0,0,0,.19-.75,1.53,1.53,0,0,0-.18-.74,1.41,1.41,0,0,0-.5-.53,1.31,1.31,0,0,0-.71-.2,1.32,1.32,0,0,0-.57.12,1.6,1.6,0,0,0-.45.32,1.52,1.52,0,0,0-.31.48,1.33,1.33,0,0,0-.11.56,1.52,1.52,0,0,0,.18.73,1.47,1.47,0,0,0,.5.55A1.4,1.4,0,0,0,322.47,386Zm6.08.89a3.14,3.14,0,0,1-1.3-.25,2.25,2.25,0,0,1-.89-.7,1.66,1.66,0,0,1-.31-1,1.73,1.73,0,0,1,.18-.82,1.77,1.77,0,0,1,.51-.63,1.69,1.69,0,0,1,.72-.33v0a1.39,1.39,0,0,1-.84-.56,1.79,1.79,0,0,1,0-2,2.06,2.06,0,0,1,.81-.67,2.88,2.88,0,0,1,2.3,0,2,2,0,0,1,.8.68,1.6,1.6,0,0,1,.3,1,1.69,1.69,0,0,1-.32,1,1.42,1.42,0,0,1-.84.56v0a1.71,1.71,0,0,1,1.22,1,1.78,1.78,0,0,1-.12,1.84,2.25,2.25,0,0,1-.89.7A3.14,3.14,0,0,1,328.55,386.84Zm0-.87a1.91,1.91,0,0,0,.76-.14,1.27,1.27,0,0,0,.5-.41,1.15,1.15,0,0,0,.17-.62,1.11,1.11,0,0,0-.19-.65,1.19,1.19,0,0,0-.5-.44,1.61,1.61,0,0,0-.74-.17,1.64,1.64,0,0,0-.74.17,1.19,1.19,0,0,0-.5.44,1.11,1.11,0,0,0-.19.65,1.15,1.15,0,0,0,.17.62,1.27,1.27,0,0,0,.5.41A2,2,0,0,0,328.55,386Zm0-3.27a1.28,1.28,0,0,0,.63-.15,1,1,0,0,0,.42-.39,1.16,1.16,0,0,0,0-1.16,1,1,0,0,0-.43-.39,1.39,1.39,0,0,0-.63-.13,1.47,1.47,0,0,0-.64.13,1,1,0,0,0-.42.39,1.05,1.05,0,0,0-.15.57,1.13,1.13,0,0,0,.15.59,1.08,1.08,0,0,0,.43.39A1.3,1.3,0,0,0,328.55,382.7Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.168.2" data-name="C1.1.168.2">
              <polyline points="288.09 206.55 288.82 210 288.82 210 284.45 210.97 310.05 205.85 307.7 191.02 285.84 195.94 287.32 202.94" />
            </g>
            <g id="C1.1.168.1" data-name="C1.1.168.1">
              <polyline points="272.86 206.16 271.21 199.23 244.23 205.42 247.58 219.65 274.54 213.23 279.07 212.19 274.54 213.23 273.69 209.65" />
            </g>
            <g id="C1.1.165" data-name="C1.1.165">
              <polyline points="275.18 244.47 280.6 243.15 274.54 213.23 247.58 219.65 254.6 249.48 271.99 245.24" />
              <path
                d="M309.54,427.65v7h-1.06v-6h0l-1.69,1.1v-1l1.76-1.15Zm4.37,7.14a2.69,2.69,0,0,1-.93-.17,2.32,2.32,0,0,1-.83-.55,2.87,2.87,0,0,1-.59-1,5,5,0,0,1-.22-1.62,6.8,6.8,0,0,1,.18-1.64,3.59,3.59,0,0,1,.54-1.2,2.49,2.49,0,0,1,.83-.76,2.39,2.39,0,0,1,1.11-.25,2.52,2.52,0,0,1,1.12.24,2.28,2.28,0,0,1,.79.69,2.25,2.25,0,0,1,.38,1h-1a1.4,1.4,0,0,0-.43-.72,1.21,1.21,0,0,0-.82-.28,1.37,1.37,0,0,0-1.21.68,3.43,3.43,0,0,0-.43,1.87h.05a1.84,1.84,0,0,1,.45-.51,1.88,1.88,0,0,1,.59-.32,2.12,2.12,0,0,1,.71-.12,2.09,2.09,0,0,1,1.1.3,2.17,2.17,0,0,1,.8.82,2.44,2.44,0,0,1,.29,1.19,2.48,2.48,0,0,1-.3,1.22,2.18,2.18,0,0,1-.86.87A2.5,2.5,0,0,1,313.91,434.79Zm0-.89a1.34,1.34,0,0,0,.72-.2,1.47,1.47,0,0,0,.69-1.29,1.53,1.53,0,0,0-.18-.74,1.34,1.34,0,0,0-.5-.53,1.28,1.28,0,0,0-.71-.2,1.39,1.39,0,0,0-.57.12,1.6,1.6,0,0,0-.45.32,1.52,1.52,0,0,0-.31.48,1.3,1.3,0,0,0-.11.56,1.52,1.52,0,0,0,.18.73,1.39,1.39,0,0,0,.51.54A1.28,1.28,0,0,0,313.91,433.9Zm6,.89a2.57,2.57,0,0,1-1.16-.25,2,2,0,0,1-.82-.69,1.89,1.89,0,0,1-.33-1h1a1,1,0,0,0,.41.74,1.31,1.31,0,0,0,.87.3,1.43,1.43,0,0,0,.72-.19,1.29,1.29,0,0,0,.49-.52,1.44,1.44,0,0,0,.19-.75,1.63,1.63,0,0,0-.19-.77,1.37,1.37,0,0,0-.51-.53,1.41,1.41,0,0,0-.74-.19,1.85,1.85,0,0,0-.65.11,1.6,1.6,0,0,0-.52.28l-1-.14.39-3.55H322v.91h-3l-.23,2h0a1.71,1.71,0,0,1,.55-.33,2,2,0,0,1,.74-.13,2.16,2.16,0,0,1,1.14.3,2.23,2.23,0,0,1,.8.84,2.69,2.69,0,0,1,0,2.43,2.24,2.24,0,0,1-.86.84A2.5,2.5,0,0,1,319.93,434.79Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.164" data-name="C1.1.164">
              <polyline points="307.31 233.83 308.1 238.22 326.66 235.55 323.3 212.89 304.12 216.12 306.65 230.17" />
              <path
                d="M361.4,422.84v5.63h-.86v-4.78h0l-1.35.88v-.81l1.41-.92Zm3.49,5.71a2.21,2.21,0,0,1-.75-.14,1.63,1.63,0,0,1-.66-.44,2.3,2.3,0,0,1-.47-.82,4,4,0,0,1-.18-1.3,5.19,5.19,0,0,1,.15-1.31,3.09,3.09,0,0,1,.42-1,1.94,1.94,0,0,1,.68-.6,1.82,1.82,0,0,1,.88-.21,2,2,0,0,1,.89.2,1.79,1.79,0,0,1,.64.55,2,2,0,0,1,.31.79H366a1.11,1.11,0,0,0-.34-.57,1,1,0,0,0-.66-.22,1.1,1.1,0,0,0-1,.54,2.78,2.78,0,0,0-.34,1.5h0a1.42,1.42,0,0,1,.36-.41,1.45,1.45,0,0,1,.47-.26,1.56,1.56,0,0,1,.57-.1,1.66,1.66,0,0,1,.88.24,1.76,1.76,0,0,1,.64.66,2.1,2.1,0,0,1,0,1.93,1.8,1.8,0,0,1-.68.69A1.94,1.94,0,0,1,364.89,428.55Zm0-.71a1.09,1.09,0,0,0,1-.59,1.28,1.28,0,0,0,0-1.2,1.08,1.08,0,0,0-1-.58,1,1,0,0,0-.45.1,1,1,0,0,0-.36.26,1.09,1.09,0,0,0-.25.38,1.12,1.12,0,0,0-.09.44,1.2,1.2,0,0,0,.15.59,1.18,1.18,0,0,0,.4.43A1.06,1.06,0,0,0,364.88,427.84Zm2.85-.47v-.68l2.43-3.85h.54v1h-.34l-1.74,2.76v0H372v.72Zm2.67,1.1v-5.63h.81v5.63Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.163" data-name="C1.1.163">
              <polyline points="309.59 246.49 311.24 255.66 329.19 252.62 326.66 235.55 308.1 238.22 309.05 243.46" />
              <path
                d="M364.29,442.31V448h-.85v-4.79h0l-1.34.88v-.81l1.4-.92Zm3.49,5.71a2.11,2.11,0,0,1-.74-.14,1.51,1.51,0,0,1-.66-.44,2.17,2.17,0,0,1-.48-.82,4,4,0,0,1-.18-1.3,5.19,5.19,0,0,1,.15-1.31,3,3,0,0,1,.43-1,1.91,1.91,0,0,1,.67-.6,1.82,1.82,0,0,1,.88-.21,2,2,0,0,1,.9.2,1.68,1.68,0,0,1,.63.55,2,2,0,0,1,.31.79h-.84a1.11,1.11,0,0,0-.34-.57,1,1,0,0,0-.66-.22,1.08,1.08,0,0,0-1,.54,2.77,2.77,0,0,0-.35,1.5h0a1.59,1.59,0,0,1,.36-.41,1.4,1.4,0,0,1,.48-.26,1.47,1.47,0,0,1,.56-.1,1.66,1.66,0,0,1,.88.24,1.76,1.76,0,0,1,.64.66,1.89,1.89,0,0,1,.24,1,2,2,0,0,1-.25,1,1.8,1.8,0,0,1-.68.69A1.92,1.92,0,0,1,367.78,448Zm0-.71a1.15,1.15,0,0,0,.58-.16,1.18,1.18,0,0,0,.4-.43,1.27,1.27,0,0,0,0-1.2,1.08,1.08,0,0,0-1-.58,1.15,1.15,0,0,0-.46.1,1,1,0,0,0-.36.26,1.09,1.09,0,0,0-.25.38,1.12,1.12,0,0,0-.09.44,1.21,1.21,0,0,0,.55,1A1.1,1.1,0,0,0,367.78,447.31Zm4.92.71a2.46,2.46,0,0,1-1-.19,1.67,1.67,0,0,1-.7-.54,1.39,1.39,0,0,1-.28-.81h.86a.74.74,0,0,0,.17.43,1,1,0,0,0,.4.28,1.42,1.42,0,0,0,.55.1,1.51,1.51,0,0,0,.59-.11,1,1,0,0,0,.41-.33.87.87,0,0,0,.14-.48.94.94,0,0,0-.14-.5,1.11,1.11,0,0,0-.42-.34,1.71,1.71,0,0,0-.67-.12h-.48v-.69h.48a1.2,1.2,0,0,0,.55-.12.85.85,0,0,0,.51-.79.84.84,0,0,0-.12-.45.9.9,0,0,0-.33-.31,1.12,1.12,0,0,0-.5-.11,1.26,1.26,0,0,0-.51.11.93.93,0,0,0-.39.28.74.74,0,0,0-.16.44h-.82a1.4,1.4,0,0,1,.27-.8,1.74,1.74,0,0,1,.68-.54,2.23,2.23,0,0,1,.94-.2,1.89,1.89,0,0,1,.94.22,1.63,1.63,0,0,1,.61.55,1.49,1.49,0,0,1,.21.77,1.22,1.22,0,0,1-.26.8,1.32,1.32,0,0,1-.71.45v0a1.32,1.32,0,0,1,.87.45,1.29,1.29,0,0,1,.31.89,1.34,1.34,0,0,1-.26.83,1.74,1.74,0,0,1-.7.58A2.43,2.43,0,0,1,372.7,448Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.156" data-name="C1.1.156">
              <polyline points="299.04 227.67 304.29 256.83 293.39 258.67 286.38 219.75 297.23 217.66 298.41 224.17" />
              <path
                d="M347.6,433.7l-5.56.92-.14-.85,4.72-.77v0l-1.09-1.19.81-.13,1.13,1.24ZM342.51,438a2.15,2.15,0,0,1,0-1,1.78,1.78,0,0,1,.44-.74,1.35,1.35,0,0,1,.75-.38l.13.81a.86.86,0,0,0-.54.41,1.07,1.07,0,0,0-.11.73,1,1,0,0,0,.24.54,1.06,1.06,0,0,0,.47.33,1.38,1.38,0,0,0,1.2-.2,1.14,1.14,0,0,0,.35-.47,1.28,1.28,0,0,0,.06-.62,1.91,1.91,0,0,0-.17-.49,1.15,1.15,0,0,0-.3-.37v-.79l2.85-.15.51,3.06-.72.11-.39-2.35-1.59.08v0a1.31,1.31,0,0,1,.33.39,1.5,1.5,0,0,1,.2.56,1.65,1.65,0,0,1-.09.94,1.76,1.76,0,0,1-.55.74,2.15,2.15,0,0,1-1.93.3,1.84,1.84,0,0,1-.78-.57A2.09,2.09,0,0,1,342.51,438Zm.8,4.84a2.1,2.1,0,0,1,0-.75,1.74,1.74,0,0,1,.33-.72,2.3,2.3,0,0,1,.74-.61,4,4,0,0,1,1.25-.38,5.07,5.07,0,0,1,1.32-.07,2.83,2.83,0,0,1,1,.26,1.87,1.87,0,0,1,.7.57,1.77,1.77,0,0,1,.35.84,2,2,0,0,1,0,.91,1.68,1.68,0,0,1-.44.71,1.81,1.81,0,0,1-.73.44l-.14-.83a1.08,1.08,0,0,0,.51-.43,1,1,0,0,0,.12-.68,1.1,1.1,0,0,0-.69-.87,2.81,2.81,0,0,0-1.54-.1v0a1.7,1.7,0,0,1,.46.29,1.54,1.54,0,0,1,.33.43,1.58,1.58,0,0,1,.19.54,1.65,1.65,0,0,1-.1.91,1.69,1.69,0,0,1-.54.73,1.84,1.84,0,0,1-.91.39,2,2,0,0,1-1-.08,1.77,1.77,0,0,1-.79-.56A1.94,1.94,0,0,1,343.31,442.81Zm.7-.12a1.12,1.12,0,0,0,.25.55,1.25,1.25,0,0,0,.49.33,1.18,1.18,0,0,0,.62.05,1.13,1.13,0,0,0,.56-.24,1.05,1.05,0,0,0,.35-.46,1.06,1.06,0,0,0,.07-.59,1.25,1.25,0,0,0-.17-.43,1.18,1.18,0,0,0-.31-.32,1.57,1.57,0,0,0-.42-.18,1.18,1.18,0,0,0-.46,0,1.36,1.36,0,0,0-.55.24,1.26,1.26,0,0,0-.36.47A1.11,1.11,0,0,0,344,442.69Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.155" data-name="C1.1.155">
              <polyline points="295.43 269.99 300.02 295.44 334.71 289.83 329.19 252.62 293.39 258.67 294.78 266.34" />
              <path
                d="M358.45,470.33v7h-1.07v-6h0l-1.69,1.1v-1l1.76-1.14Zm4.23,7.13a2.75,2.75,0,0,1-1.17-.24,2.21,2.21,0,0,1-.82-.69,1.8,1.8,0,0,1-.32-1h1a1.08,1.08,0,0,0,.4.75,1.41,1.41,0,0,0,.88.29,1.28,1.28,0,0,0,.71-.19,1.23,1.23,0,0,0,.5-.51,1.69,1.69,0,0,0,0-1.52,1.33,1.33,0,0,0-.52-.53,1.39,1.39,0,0,0-.74-.2,2.05,2.05,0,0,0-.64.11,1.36,1.36,0,0,0-.52.29l-1-.15.4-3.54h3.87v.91h-3l-.22,2h0a1.56,1.56,0,0,1,.55-.34,1.93,1.93,0,0,1,.73-.13,2.13,2.13,0,0,1,1.15.31,2.18,2.18,0,0,1,.79.83,2.41,2.41,0,0,1,.29,1.21,2.36,2.36,0,0,1-.31,1.22,2.26,2.26,0,0,1-.86.85A2.54,2.54,0,0,1,362.68,477.46Zm6,0a2.7,2.7,0,0,1-1.16-.24,2.14,2.14,0,0,1-.82-.69,1.89,1.89,0,0,1-.33-1h1a1.06,1.06,0,0,0,.41.75,1.36,1.36,0,0,0,.87.29,1.34,1.34,0,0,0,.72-.19,1.21,1.21,0,0,0,.49-.51,1.48,1.48,0,0,0,.19-.76,1.59,1.59,0,0,0-.19-.76,1.24,1.24,0,0,0-.51-.53,1.41,1.41,0,0,0-.74-.2,2.11,2.11,0,0,0-.65.11,1.44,1.44,0,0,0-.52.29l-1-.15.39-3.54h3.87v.91h-3l-.23,2h0a1.56,1.56,0,0,1,.55-.34,2,2,0,0,1,.74-.13,2.07,2.07,0,0,1,1.14.31,2.2,2.2,0,0,1,.8.83,2.4,2.4,0,0,1,.28,1.21,2.27,2.27,0,0,1-1.16,2.07A2.61,2.61,0,0,1,368.68,477.46Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.143" data-name="C1.1.143">
              <polyline points="258.56 81.58 255.97 69.02 221.19 76.72 228.61 108.5 262.57 101.03 259.86 87.89" />
              <path
                d="M286.82,285.13v7h-1.06v-6h0l-1.69,1.1v-1l1.76-1.15Zm1.76,5.66v-.86l3-4.8h.68v1.26h-.43l-2.17,3.45v.05h4.17v.9Zm3.34,1.38v-7h1v7Zm5.6.1a3.16,3.16,0,0,1-1.27-.25,2.15,2.15,0,0,1-.88-.68,1.82,1.82,0,0,1-.34-1h1.08a.91.91,0,0,0,.21.55,1.41,1.41,0,0,0,.5.35,2,2,0,0,0,1.43,0,1.19,1.19,0,0,0,.5-.41,1,1,0,0,0,.18-.6,1.1,1.1,0,0,0-.18-.62,1.22,1.22,0,0,0-.53-.43,2,2,0,0,0-.83-.15h-.59v-.87h.59a1.52,1.52,0,0,0,.69-.14,1.07,1.07,0,0,0,.47-.39,1.08,1.08,0,0,0,.17-.6,1,1,0,0,0-.15-.56.94.94,0,0,0-.41-.38,1.27,1.27,0,0,0-.63-.14,1.53,1.53,0,0,0-.64.13,1.15,1.15,0,0,0-.48.35.91.91,0,0,0-.2.56h-1a1.7,1.7,0,0,1,.34-1,2.21,2.21,0,0,1,.85-.68,2.78,2.78,0,0,1,1.17-.24,2.35,2.35,0,0,1,1.17.27,1.92,1.92,0,0,1,.77.69,1.69,1.69,0,0,1,.26,1,1.44,1.44,0,0,1-.33,1,1.6,1.6,0,0,1-.88.56v.05a1.72,1.72,0,0,1,1.09.56,1.64,1.64,0,0,1,.39,1.12,1.76,1.76,0,0,1-.33,1,2.09,2.09,0,0,1-.88.72A2.9,2.9,0,0,1,297.52,292.27Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.142" data-name="C1.1.142">
              <polyline points="275.6 99.93 275.33 98.53 305.56 93.18 311.72 134.77 283.29 140.24 276.26 103.39" />
              <path
                d="M338.42,313.17v7h-1.06v-6h0l-1.69,1.1v-1l1.76-1.15Zm1.76,5.66V318l3-4.8h.68v1.26h-.43l-2.18,3.45v.05h4.18v.9Zm3.34,1.38v-7h1v7Zm3.14,0v-.77l2.39-2.47c.25-.27.46-.5.63-.71a2.55,2.55,0,0,0,.37-.58,1.4,1.4,0,0,0,.12-.58,1.11,1.11,0,0,0-.16-.61,1.07,1.07,0,0,0-.45-.39,1.37,1.37,0,0,0-.64-.14,1.34,1.34,0,0,0-.66.15,1.1,1.1,0,0,0-.44.44,1.4,1.4,0,0,0-.15.66h-1a2.21,2.21,0,0,1,.29-1.13,2.07,2.07,0,0,1,.81-.74,2.53,2.53,0,0,1,1.18-.27,2.46,2.46,0,0,1,1.17.27,2,2,0,0,1,.79.71,1.87,1.87,0,0,1,.29,1,2,2,0,0,1-.15.76,3.62,3.62,0,0,1-.51.84,12.1,12.1,0,0,1-1,1.11l-1.4,1.47v.05h3.17v.91Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.141" data-name="C1.1.141">
              <polyline points="275.02 96.94 275.33 98.53 305.56 93.18 300.76 60.84 269.15 66.69 274.43 93.87" />
              <path
                d="M333.24,277.43v7h-1.07v-6h0l-1.69,1.1v-1l1.76-1.15ZM335,283.1v-.86l3.05-4.81h.67v1.26h-.43l-2.17,3.45v.06h4.17v.9Zm3.34,1.37v-7h1v7Zm5.72-7v7H343v-6h0l-1.69,1.1v-1l1.76-1.15Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.140" data-name="C1.1.140">
              <polyline points="286.24 52.54 284.94 52.75 280.3 25.62 295.21 23.34 299.22 50.45 289.39 52.03" />
              <path
                d="M342.5,231.53l-6.94,1.18-.18-1.05,5.89-1v0l-1.37-1.48,1-.17,1.43,1.54Zm-5.29,2.68.85-.14,5.25,2.19.11.67-1.25.21-.07-.42-3.76-1.57h-.06l.7,4.11-.89.15Zm-.8,3.52,1.62-.27.38-.06,4.95-.84.17,1-6.95,1.18Zm.82,5.54a2.37,2.37,0,0,1,.19-1.44,2.67,2.67,0,0,1,1.08-1.08,5.25,5.25,0,0,1,1.89-.63,5.53,5.53,0,0,1,2,0,2.65,2.65,0,0,1,1.36.67,2.23,2.23,0,0,1,.66,1.3,2.28,2.28,0,0,1-.19,1.43,2.67,2.67,0,0,1-1.08,1.08,5.14,5.14,0,0,1-1.87.63,5.58,5.58,0,0,1-2,0,2.63,2.63,0,0,1-1.37-.66A2.26,2.26,0,0,1,337.23,243.27Zm.91-.15a1.22,1.22,0,0,0,.87,1,4,4,0,0,0,2.06.06,4.75,4.75,0,0,0,1.43-.43,1.88,1.88,0,0,0,.82-.67,1.16,1.16,0,0,0,.18-.85,1.25,1.25,0,0,0-.88-1,4,4,0,0,0-2.06-.06,5.24,5.24,0,0,0-1.44.43,2.05,2.05,0,0,0-.81.67A1.17,1.17,0,0,0,338.14,243.12Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
            <g id="C1.1.139" data-name="C1.1.139">
              <polyline points="277.82 53.95 284.94 52.75 280.3 25.62 261.79 28.95 267.04 55.77 274.61 54.49" />
              <path
                d="M326,235.21l-6.92,1.34-.2-1.05,5.87-1.13v-.05l-1.4-1.44,1-.19,1.46,1.5Zm-6.18,5.63a3.11,3.11,0,0,1,0-1.29,2.1,2.1,0,0,1,.49-1,1.88,1.88,0,0,1,.93-.53l.21,1.06a1,1,0,0,0-.5.31,1.43,1.43,0,0,0-.25.56,2,2,0,0,0,.29,1.4,1.3,1.3,0,0,0,.49.42,1.12,1.12,0,0,0,.63.06,1.05,1.05,0,0,0,.58-.3A1.25,1.25,0,0,0,323,241a2.22,2.22,0,0,0,0-.85l-.11-.58.85-.17.11.59a1.55,1.55,0,0,0,.27.64,1.16,1.16,0,0,0,.47.39,1.08,1.08,0,0,0,.62.05,1,1,0,0,0,.53-.25,1,1,0,0,0,.29-.48,1.24,1.24,0,0,0,0-.64,1.64,1.64,0,0,0-.25-.61,1.13,1.13,0,0,0-.44-.4.94.94,0,0,0-.58-.09l-.2-1a1.7,1.7,0,0,1,1.05.14,2.17,2.17,0,0,1,.83.71,2.64,2.64,0,0,1,.46,1.11,2.37,2.37,0,0,1,0,1.19,2,2,0,0,1-.54.89,1.78,1.78,0,0,1-.89.44,1.55,1.55,0,0,1-1-.13,1.64,1.64,0,0,1-.71-.76h-.06a1.68,1.68,0,0,1-.34,1.17,1.6,1.6,0,0,1-1,.59,1.67,1.67,0,0,1-1.08-.12,2.13,2.13,0,0,1-.88-.73A2.87,2.87,0,0,1,319.82,240.84Zm8.26,4.65a2.7,2.7,0,0,1,0,.94,2.23,2.23,0,0,1-.38.92,2.77,2.77,0,0,1-.9.77,4.94,4.94,0,0,1-1.54.53,6.52,6.52,0,0,1-1.65.13,3.83,3.83,0,0,1-1.3-.29,2.33,2.33,0,0,1-.89-.68,2.26,2.26,0,0,1-.47-1,2.42,2.42,0,0,1,0-1.14,2.17,2.17,0,0,1,1.44-1.48l.2,1a1.39,1.39,0,0,0-.64.55,1.27,1.27,0,0,0-.12.87,1.36,1.36,0,0,0,.89,1.05,3.43,3.43,0,0,0,1.94.07v-.05a1.88,1.88,0,0,1-.58-.34,2.21,2.21,0,0,1-.44-.52,2.16,2.16,0,0,1-.25-.67,2.13,2.13,0,0,1,.09-1.15,2.22,2.22,0,0,1,.65-.93,2.55,2.55,0,0,1,2.36-.45,2.22,2.22,0,0,1,1,.67A2.46,2.46,0,0,1,328.08,245.49Zm-.87.17a1.43,1.43,0,0,0-.34-.67,1.36,1.36,0,0,0-.62-.4,1.49,1.49,0,0,0-.76,0,1.55,1.55,0,0,0-.7.32,1.42,1.42,0,0,0-.42.58,1.35,1.35,0,0,0-.05.75,1.39,1.39,0,0,0,.22.53,1.35,1.35,0,0,0,.4.39,1.73,1.73,0,0,0,.53.21,1.37,1.37,0,0,0,.57,0,1.44,1.44,0,0,0,.67-.32,1.48,1.48,0,0,0,.43-.59A1.3,1.3,0,0,0,327.21,245.66Z"
                transform="translate(-50.14 -199.88)"
              />
            </g>
          </g>
          <g className="map-groups-escapes">
            <polygon points="167.12 169.28 181.27 164.9 164.64 110.16 150.8 114.18 167.12 169.28" />
            <polygon points="266.96 303.06 259.76 271.43 276.37 267.72 283.27 299.13 266.96 303.06" />
            <polygon points="194.96 323.8 184.64 293.65 168.11 299.17 179.51 329.78 194.96 323.8" />
          </g>
          <g className="map-groups-techs">
            <polyline points="217.9 155.22 238.44 150.03 225.37 94.81 179.65 106.2 183 118.36 183.81 121.38 183 118.36 192.28 116 201.61 150.42 192.58 153.15 191.5 149.55 192.58 153.15 194.76 161.05 211.94 156.72" />
            <polyline points="152.18 173.85 136.77 178.69 118.68 124.05 150.8 114.18 153.26 122.54 153.26 122.54 137.57 126.91 148.84 165.32" />
          </g>
          <g className="map-groups-wcs">
            <polyline points="151.15 164.66 148.84 165.32 137.57 126.91 153.27 122.59 164.28 161.31 156.51 163.42" />
            <polyline points="214.56 147.5 211.14 148.36 203.51 120 222.36 115.08 229.1 144.14 219.5 146.52" />
          </g>
        </g>
      </g>
      <ICONS_C1_1 isFirst />
    </LayoutMinimap>
  );
};

export default FirstFloorFirstBlock;
