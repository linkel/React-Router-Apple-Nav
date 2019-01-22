import React from 'react';
import SubNav from './SubNav';
import iphonexr from '../img/iphonexr_dark_large.svg';
import iphonexs from '../img/iphonexs_dark_large.svg';
import iphone8 from '../img/iphone8_dark_large.svg';
import ios from '../img/ios_dark_large.svg';
import airpods from '../img/airpods_dark_large.svg';
import accessories from '../img/accessories_dark_large.svg';
import compare from '../img/compare_dark_large.svg';
import styled from 'styled-components';

const image_object = [
    {
        image: iphonexs,
        text: "iPhone Xs",
    },
    {
        image: iphonexr,
        text: "iPhone Xr",
    },
    {
        image: iphone8,
        text: "iPhone 8",
    },
    {
        image: iphone8,
        text: "iPhone 7",
    },
    {
        image: ios,
        text: "iOS 12",
    },
    {
        image: airpods,
        text: "AirPods",
    },
    {
        image: accessories,
        text: "Accessories",
    },
    {
        image: compare,
        text: "Compare",
    },
]

const Content = styled.div`
    font-size: 36px;
    color: white;
    left: 100px;
    margin: 100px auto;
    text-align: center;
`

const Mac = (props) => {
    return (
        <div>
            <SubNav images={image_object}></SubNav>
            <Content>Get a Mac. Or a Linux.</Content>
        </div>
    )
}

export default Mac;