import Triangle from "../components/mathematics/Triangle";
import Quadrilateral from "../components/mathematics/Quadrilateral";

import ShoulderStraps from "../components/safety/ShoulderStraps";
import ShutdownPower from "../components/guides/ShutdownPower";

export const getPageRoute = () => {
    return [
        {
            namePage: 'Математика',
            path: '/mathematics'
        },
        {
            namePage: 'Программирование',
            path: '/'
        },
        {
            namePage: 'Психология',
            path: '/'
        },
        {
            namePage: 'ОБЖ',
            path: '/safety'
        },
        {
            namePage: 'Гайды',
            path: '/guides'
        },
        {
            namePage: 'Пчёлка',
            path: '/bee'
        },
        {
            namePage: 'Массивы',
            path: '/mass'
        },
        {
            namePage: 'Год',
            path: '/year'
        },
        {
            namePage: 'Пчёлка1',
            path: '/web'
        }
    ]
}

export const getMenuMathematics = () => {
    return [
        {
            label: 'Трёхугольники',
            index: 0,
            childrenComponent: Triangle
        },
        {
            label: 'Четырёхугольник',
            index: 1,
            childrenComponent: Quadrilateral
        }
    ]
}

export const getMenuSafety = () => {
    return [
        {
            label: 'Тест по погонам',
            index: 0,
            childrenComponent: ShoulderStraps
        }
    ]
}

export const getMenuGuides = () => {
    return [
        {
            label: 'Отключение PowerShell',
            index: 0,
            childrenComponent: ShutdownPower
        }
    ]
}