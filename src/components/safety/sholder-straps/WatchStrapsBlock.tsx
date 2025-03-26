import { straps } from '../../../helpers/ShoulderStrapsData';

import './WatchStrapsBlock.css';

import {
    Box
} from "@mui/material";

interface WatchStrapsBlockProps {
    variantStraps: number
}

const WatchStrapsBlock = (props: WatchStrapsBlockProps) => {
    return <Box
        component={'figure'}
        sx={{
            width: '240px',
            m: '0 auto'
        }}
    >
        {straps.map((strap, key) => (
            key === props.variantStraps ?
                <Box
                    className='private'
                    sx={{
                        position: 'relative'
                    }}
                    key={'strap-army-' + key}
                >
                    <Box className={strap.lineone} />
                    <Box className={strap.linetwo} />
                    <Box className={strap.ranglineone} />
                    <Box className={strap.ranglinetwo} />
                    <Box className={strap.ranglinethree} />
                    <Box className={strap.starone} />
                    <Box className={strap.startwo} />
                    <Box className={strap.starthree} />
                </Box>
                :
                null
        ))}
    </Box>
}

export default WatchStrapsBlock;