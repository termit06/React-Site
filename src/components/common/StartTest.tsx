import {
    Box,
    Button,
    Typography
} from "@mui/material";

interface StartTestProps {
    start: () => void;
}

const StartTest = (props: StartTestProps) => {
    return <Box
        component={'article'}
        sx={{
            width: '640px',
            alignSelf: 'center'
        }}
    >
        <Typography
            component={'h2'}
            textAlign='center'
            color="warning"
            sx={{
                fontSize: '30px',
                fontWeight: 400,
                fontStyle: 'italic'
            }}
        >
            Готовы ?
        </Typography>
        <Button
            variant='outlined'
            color='warning'
            onClick={props.start}
            sx={{
                fontSize: '36px',
                fontStyle: 'italic',
                m: '20px 27% !important'
            }}
        >
            Начать тест
        </Button>
    </Box>
}

export default StartTest;