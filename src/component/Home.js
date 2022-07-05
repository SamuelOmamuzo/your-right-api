import React from "react";
import styled from "styled-components";
import JusticePage from "./JusticePage"
import Legal from "./Legal"
import About from "./About"
import Total from "./Total"

const Home = () =>{
    return(
        <>
        <Container>
            <JusticePage/>
            <Legal/>
            <Total/>
            <About/>
        </Container>
        </>
    )
}
export default Home;

const Container = styled.div`
    width:100%;
    height:100%;
`