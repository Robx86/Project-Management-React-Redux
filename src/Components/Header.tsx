import React, { useState } from "react";

export default function Index() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <nav
          id="Navigation"
          className={` ${
            show ? "hidden" : ""
          } flex justify-between bg-bestGray items-center md:py-8 lg:px-20 md:px-6 p-4`}
        >
          <ul className="hidden lg:flex justify-center items-center space-x-10 cursor-pointer text-gray-100 text-base leading-4">
            <li>
              <a className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellowComplement duration-200 font-semibold">
                Home
              </a>
            </li>
          </ul>
          <div className=" cursor-pointer">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="40.000000pt"
              height="40.000000pt"
              viewBox="0 0 500.000000 500.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                fill="#FFF"
                stroke="none"
              >
                <path
                  d="M1861 3820 c-57 -12 -124 -53 -152 -91 -50 -71 -49 -37 -49 -1314 0
-1359 -6 -1262 84 -1351 63 -63 108 -79 231 -78 133 1 212 44 267 145 l23 44
3 1225 c2 1111 1 1229 -14 1268 -39 104 -118 152 -258 157 -50 2 -111 0 -135
-5z m158 -154 c15 -8 32 -26 39 -41 9 -20 12 -311 12 -1199 0 -646 -3 -1187
-6 -1205 -11 -52 -46 -81 -98 -81 -50 0 -81 23 -94 70 -4 14 -7 559 -7 1211 0
1270 -2 1223 49 1247 30 15 73 14 105 -2z"
                />
                <path
                  d="M4157 3820 c-96 -25 -164 -85 -193 -172 -13 -41 -15 -95 -12 -376 4
-313 5 -331 30 -423 30 -110 71 -197 158 -330 177 -271 209 -410 217 -919 6
-352 1 -402 -38 -441 -26 -26 -102 -26 -128 0 -38 38 -41 82 -41 579 l0 482
-100 0 -101 0 3 -522 c3 -514 3 -524 25 -563 28 -54 100 -119 149 -136 50 -17
208 -17 258 0 49 17 121 82 149 136 21 39 22 51 25 475 2 285 -1 457 -8 500
-26 151 -79 276 -189 445 -176 269 -216 430 -209 852 3 186 5 204 24 229 39
52 119 52 158 0 20 -26 21 -41 24 -417 l3 -389 99 0 100 0 0 390 c0 365 -1
393 -20 443 -38 103 -127 157 -264 163 -45 2 -98 -1 -119 -6z"
                />
                <path
                  d="M490 2422 l0 -1392 100 0 100 0 0 695 0 695 55 0 c31 0 71 -6 89 -14
70 -29 66 11 66 -718 l0 -658 100 0 100 0 0 650 c0 565 -2 656 -15 688 -19 45
-51 81 -85 94 l-25 11 29 8 c15 4 37 16 48 26 47 42 48 50 48 606 l0 524 -23
44 c-28 53 -83 92 -151 108 -28 7 -138 15 -243 18 l-193 6 0 -1391z m363 1217
c14 -6 30 -22 36 -36 14 -31 16 -980 1 -1017 -13 -35 -59 -56 -132 -59 l-63
-2 -3 563 -2 562 69 0 c39 0 81 -5 94 -11z"
                />
                <path
                  d="M2830 2420 l0 -1393 203 6 c111 4 220 12 242 18 61 17 120 63 144
112 21 42 21 55 21 628 0 670 5 633 -87 680 l-53 28 34 11 c34 11 75 49 95 87
15 30 15 1012 0 1068 -6 21 -25 53 -43 71 -51 51 -112 64 -348 71 l-208 6 0
-1393z m363 1219 c14 -6 30 -22 36 -36 14 -31 15 -960 1 -997 -9 -25 -12 -26
-105 -26 l-95 0 0 535 0 535 70 0 c38 0 80 -5 93 -11z m31 -1241 c14 -20 16
-92 16 -580 0 -387 -3 -564 -11 -581 -16 -35 -49 -47 -129 -47 l-70 0 0 615 0
615 89 0 c82 0 91 -2 105 -22z"
                />
              </g>
            </svg>
          </div>
          <div className=" lg:hidden block">
            <button onClick={() => setShow(1)} className=" mr-6">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L15 15"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex space-x-10 justify-center items-center cursor-pointer text-gray-100 text-base leading-4">
            <li>
              <a className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellowComplement duration-200 font-semibold">
                About Me
              </a>
            </li>
            <li>
              <a className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellowComplement duration-200 font-semibold">
                Logout
              </a>
            </li>
          </ul>
        </nav>
        <ul
          id="DropMenu"
          className={` flex-col space-y-5 items-start text-gray-100  text-base leading-4 md:px-6 p-4 ${
            show2 ? "flex" : "hidden"
          } `}
        >
          <li className=" cursor-pointer hover:text-gray-100">
            <a className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellowComplement duration-200">
              Community
            </a>
          </li>
          <li className=" cursor-pointer hover:text-gray-100">
            <a className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellowComplement duration-200">
              Login
            </a>
          </li>
          <li className=" cursor-pointer hover:text-gray-100">
            <a className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-yellowComplement duration-200">
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
