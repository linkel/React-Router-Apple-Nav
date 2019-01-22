import React from 'react';
import styled from 'styled-components';


const Content = styled.div`
    font-size: 36px;
    color: white;
    left: 100px;
    margin: 40px auto;
    padding: 100px;
    text-align: center;
`

const Home = (props) => {
    return (
        <div>
            <Content>Welcome to Apple. <br></br> Part with your money here.</Content>
        </div>
    )
}

export default Home;