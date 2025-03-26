import React from "react";

import { getMenuSafety } from "../helpers/MenuDate";

import {
    Box
} from "@mui/material";

import MenuTabs from "../components/MenuTabs";
import TabPanel from "../components/TabPanel";

const Safety = () => {
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
                tabMenu={getMenuSafety()}
                onChangeTabPanel={onChangeContent}
            />
        </Box>


        <Box
            sx={{
                width: '100%'
            }}
        >
            {getMenuSafety().map((itemComponent) => (
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

export default Safety;