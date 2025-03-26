import { Box, Typography } from "@mui/material";

const ShutdownPower = () => {
    return <Box sx={{
        width: "900px"
    }}>
        <Typography
            component="h1"
            align="center"
            fontSize={32}
            color="red"
            sx={{
                fontWeight: 700
            }}
        >
            Выключение PowerShell
        </Typography>
    </Box>
}

export default ShutdownPower;