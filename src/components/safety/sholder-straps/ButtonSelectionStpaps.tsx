import { straps } from "../../../helpers/ShoulderStrapsData";

import {
    Box,
    Button
} from "@mui/material";

interface ButtonSelectionStpapsProps {
    variantStrapsBtn: (strap: number) => void
}

const ButtonSelectionStraps = (props: ButtonSelectionStpapsProps) => {
    const nameStraps = (value: number) => {
        props.variantStrapsBtn(value);
    }

    return <Box
        sx={{
            width: '640px',
            textAlign: 'center',
            mt: 15
        }}
    >
        {straps.map((strap, key) => (
            <Button
                variant='outlined'
                color='inherit'
                onClick={() => nameStraps(key)}
                key={'strap-name-' + key + '-btn'}
                sx={{
                    width: '202px',
                    m: '5px'
                }}
            >
                {strap.name}
            </Button>
        ))}
    </Box>
}

export default ButtonSelectionStraps;