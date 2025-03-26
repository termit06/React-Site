import React from "react";

import { getMenuGuides } from "../helpers/MenuDate";

import { Box } from "@mui/material";

import MenuTabs from "../components/MenuTabs";
import TabPanel from "../components/TabPanel";


const Guides = () => {
    const [itemMenu, setItemMenu] = React.useState<number>(0);

    const changeItemMenu = (value: number) => {
        setItemMenu(value);
    }

    return <Box
        sx={{
            width: 1200,
            m: "0 auto",
            display: "flex",
            justifyContent: "space-between"
        }}
    >
        <MenuTabs
            value={itemMenu}
            tabMenu={getMenuGuides()}
            onChangeTabPanel={changeItemMenu}
        />

        {getMenuGuides().map((elementTabs, key) => (
            <TabPanel
                children={<elementTabs.childrenComponent />}
                index={elementTabs.index}
                value={itemMenu}
                key={key}
            />
        ))}
    </Box>
}

export default Guides;