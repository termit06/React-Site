import React from "react";

import {
    Box
} from "@mui/material";

import WatchStrapsBlock from "./sholder-straps/WatchStrapsBlock";
import ButtonSelectionStraps from "./sholder-straps/ButtonSelectionStpaps";
import StartTest from "../common/StartTest";
import OutcomeStrapsTest from "./sholder-straps/OutcomeStrapsTest";

/**
 * Рандом для теста от 0 до 18
 * @returns {Number} номер погона
 */
const randomImgShoulderStraps = () => {
    return Math.floor(Math.random() * 18);
}

const ShoulderStraps = () => {
    const [nameShoulderStraps, setNameShoulderStraps] = React.useState<number>(randomImgShoulderStraps); // номер погона по порядку
    const [rightAnswer, setRightAnswer] = React.useState<number>(0); // количество верных ответов
    const [attempts, setAttempts] = React.useState<number>(0); // количество попыток в тесте (по умолчанию 10)
    const [startTest, setStartTest] = React.useState<boolean>(false); // переключение между окнами (кнопка старта теста)
    const [resultTest, setResultTest] = React.useState<boolean>(false); // переключение между окнами (вывод результата)
    const [seconds, setSeconds] = React.useState<number>(0); // количество секунд при выполнении теста

    /**
     * Обнуление данных при запуске нового теста
     */
    const restartTest = () => {
        setResultTest(false);
        setStartTest(false);
        setAttempts(0);
        setRightAnswer(0);
        setSeconds(0);
    }

    /**
     * Логика работы теста на правильность + расчёт времени решения теста
     * @param answerPlayer ответ тестируемого
     */
    const checkVariantStrap = (answerPlayer: number) => {
        setAttempts(attempts + 1); // добавление попытки при нажатии на кнопку

        // если тестируемый нажмёт на кнопку в первый раз - начало отсчёта (таймер)
        if (attempts === 0) {
            setSeconds(new Date().getTime());
        }

        // если ответ верный - увеличение счётчика верных ответов
        if (answerPlayer === nameShoulderStraps) {
            setRightAnswer(rightAnswer + 1);
        }

        // если закончились попытки - выводим результаты и переключаемся на другое окно (результат теста)
        if (attempts === 9) { // (по умолчанию 10 - отсчёт с 0)
            setSeconds((new Date().getTime() - seconds) / 1000); // перевод в секунды - :1000
            setResultTest(true); // переключение на окно
        }

        setNameShoulderStraps(randomImgShoulderStraps); // рандом и измение изображения погона
    }

    return <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 6
        }}
    >
        {/* Картинка погона */}
        <WatchStrapsBlock
            variantStraps={nameShoulderStraps}
        />
        {/* Кнопки выбора погона */}
        {startTest ?
            resultTest ?
                <OutcomeStrapsTest 
                    timeTest={seconds}
                    rightAnswer={rightAnswer}
                    attempts={attempts}
                    endTest={restartTest}
                />
                :
                < ButtonSelectionStraps
                    variantStrapsBtn={checkVariantStrap}
                />
            :
            <StartTest
                start={() => setStartTest(true)}
            />
        }
    </Box>
}

export default ShoulderStraps;