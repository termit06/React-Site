import {
    Box,
    Button,
    Typography
} from "@mui/material";

interface OutcomeStrapsTestProps {
    timeTest: number, // время прохождения теста
    rightAnswer: number, // верные ответы
    attempts: number // количество попыток,
    endTest: () => void
}

const OutcomeStrapsTest = (props: OutcomeStrapsTestProps) => {
    return <Box
        component={'article'}
        sx={{
            width: '640px',
            alignSelf: 'center'
        }}
    >
        <Typography
            color="warning"
            component={'h3'}
            sx={{
                fontStyle: 'italic',
                textAlign: 'center',
                fontSize: '30px'
            }}
        >
            Результаты теста:
        </Typography>
        <Typography
            component={'h4'}
            color='secondary'
            sx={{
                fontStyle: 'italic',
                textAlign: 'center',
                fontSize: '28px'
            }}
        >
            Время: {props.timeTest}
        </Typography>
        <Typography
            component={'h4'}
            color="success"
            sx={{
                fontStyle: 'italic',
                textAlign: 'center',
                fontSize: '28px'
            }}
        >
            Правильных ответов: {props.rightAnswer} из {props.attempts}
        </Typography>
        <Button
            variant='outlined'
            color="secondary"
            onClick={props.endTest}
            sx={{
                marginTop: '20px',
                marginLeft: '67%'
            }}
        >
            К тесту
        </Button>
    </Box>
}

export default OutcomeStrapsTest;