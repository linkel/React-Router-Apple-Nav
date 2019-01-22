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
        text: "MacBook",
    },
    {
        text: "MacBook Air",
    },
    {
        text: "MacBook Pro",
    },
    {
        text: "iMac",
    },
    {
        text: "iMac Pro",
    },
    {
        text: "Mac Pro",
    },
    {
        text: "Mac mini",
    },
    {
        text: "Accessories",
    },
    {
        text: "Mojave",
    },
    {
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

const Ipad = (props) => {
    return (
        <div>
            <SubNav images={image_object}></SubNav>
            <Content>Start from a blank slate. Our iPads.</Content>
        </div>
    )
}

export default Ipad;