import React from 'react'
import type { JSX } from 'react/jsx-runtime'


import images_6d28578a_62cb_4822_ab8a_2c991b855f0d_svg from '/images/6d28578a-62cb-4822-ab8a-2c991b855f0d.svg';

export const Img = ({ id }) => {
    switch (String(id)) {    case "0":
        return (
            <img src={images_6d28578a_62cb_4822_ab8a_2c991b855f0d_svg} alt={"Vollna"} width={"auto"} height={"32px"} className={"max-h-[32px] py-[3px]"}></img>
        );
    case "1":
        return (
            <img src="data:," draggable={"false"}></img>
        );
    default:
        return null;
    }
};

export default Img
