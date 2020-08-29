import React from "react";
import Svg, { Defs, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
    <Svg width={20.632} height={35.242} viewBox="0 0 20.632 35.242" {...props}>
            <Defs></Defs>
            <Path
                className="a"
                d="M10.315 35.243l-7.346-6.1L0 8.265 10.315 0l10.316 8.265-2.97 20.879zm0 0"
                transform="translate(.001)"
            />
            <Path
                className="b"
                d="M10.315 35.242V0l10.316 8.265-2.969 20.879zm0 0"
                transform="translate(.001)"
            />
            <Path
                className="b"
                d="M10.315 35.243l-3-6.1L6.106 8.265 10.315 0l4.208 8.265-1.211 20.879zm0 0"
                transform="translate(.001)"
            />
            <Path
                className="a"
                d="M10.315 35.242V0l4.208 8.265-1.212 20.879zm0 0"
                transform="translate(.001)"
            />
            <Path
                className="b"
                d="M20.631 8.265L10.315 0-.001 8.265 6.238 10.5h8.161zm0 0M2.993 29.164l7.322 6.078 7.322-6.078-4.236-1.457-6.168-.048zm0 0"
                transform="translate(.001)"
            />
            <Path
                d="M20.631 8.265L10.315 0v10.5h4.083zm0 0M10.315 35.242l7.322-6.078-4.237-1.457-3.085-.026zm0 0"
                transform="translate(.001)"
                fill="#919191"
            />
            <Path
                className="a"
                d="M14.401 10.5L10.315 0 6.238 10.5zm0 0M7.232 27.659l3.083 7.583 3.081-7.538zm0 0"
                transform="translate(.001)"
            />
            <Path
                className="b"
                d="M4.083 10.5L0 0v10.5zm0 0M0 27.682v7.56l3.085-7.535zm0 0"
                transform="translate(.001) translate(10.315)"
            />
    </Svg>
);

export default SvgComponent;
