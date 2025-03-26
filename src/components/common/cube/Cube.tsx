import "./Cube.css";

import {
    Box,
    Typography
} from "@mui/material";

const Cube = () => {
    return <Box
        component={'figure'}
        className="cube-loader"
    >
        <Box className="cube-top" />
        <Box className="cube-wrapper">
            <Typography
                component={'span'}
                style={{ '--i': '0' } as React.CSSProperties} className="cube-span"
            />
            <Typography
                component={'span'}
                style={{ '--i': '1' } as React.CSSProperties} className="cube-span"
            />
            <Typography
                component={'span'}
                style={{ '--i': '2' } as React.CSSProperties} className="cube-span"
            />
            <Typography
                component={'span'}
                style={{ '--i': '3' } as React.CSSProperties} className="cube-span"
            />
        </Box>
    </Box>
}

export default Cube;