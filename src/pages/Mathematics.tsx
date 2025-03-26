import React from "react";

import { getMenuMathematics } from "../helpers/MenuDate";

import {
    Box
} from "@mui/material";

import MenuTabs from "../components/MenuTabs";
import TabPanel from "../components/TabPanel";

const Mathematics = () => {
    const [itemMenu, setItemMenu] = React.useState<number>(0);

    const onChangeContent = (valueMenu: number) => {
        setItemMenu(valueMenu);
    }

    return <Box
        className='wrapper'
        sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
    >
        <Box
            component={'nav'}
            sx={{
                width: '300px',
                mr: 4
            }}
        >
            <MenuTabs
                value={itemMenu}
                tabMenu={getMenuMathematics()}
                onChangeTabPanel={onChangeContent}
            />
        </Box>


        <Box
            sx={{
                width: '100%'
            }}
        >
            {getMenuMathematics().map((itemComponent) => (
                <TabPanel
                    key={itemComponent.label}
                    value={itemMenu}
                    index={itemComponent.index}
                >
                    {<itemComponent.childrenComponent />}
                </TabPanel>
            ))}
        </Box>
    </Box>
}

export default Mathematics;