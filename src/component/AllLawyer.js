import React from "react";
import styled from "styled-components";
import img from "../Images/law-office-meeting-hokka-ink-pot-YL4GD2W-1536x1026.jpg"

const Home = () =>{
    return(
        <Container>
            <Wrapper>
                <SubHead>
                    we have the best lawyers and we have good attitude to work
                </SubHead>
                <Div>
                <Selector>
                    <Options>Family Law</Options>
                    <Options>Administrative Law</Options>
                    <Options>Estate Law</Options>
                </Selector>
                </Div>
            </Wrapper>
            <Card>
                <Image src={img}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
            <Card>
                <Image src={img}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
            <Card>
                <Image src={img}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
            <Card>
                <Image src={img}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
            <Card>
                <Image src={img}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
        </Container>
    )
}
export default Home;

const Span = styled.div`
    height:20%;
    // background-color:grey;
`

const Image = styled.img`
    width:100%;
    height:80%;
    object-fit: cover;
    // background-color:blue;
`

const Card = styled.div`
    width:250px;
    height:45vh;
    background-color:white;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    overflow:hidden;
    margin:10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

const Div = styled.div`
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Options = styled.option`
    width:50%;  
    height:50px;
    padding:5px;
`

const Selector = styled.select`
    width:50%;
    height:50px;
    outline:none;
    border:none;
    border-radius:10px;
    padding:5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    @media (min-width:60px) and (max-width:768px){
        font-size:15px;
        // color:rgb(233,198,153,100%);
        width:85%;
        border-radius7px;
    }
`

const SubHead = styled.h1`
    font-weight:bold;
    font-size:35px;
    width:55%;
    word-break:break-all;
    // color:rgb(233,198,153,100%);
    color:white;
    text-align:center;

    @media (min-width:60px) and (max-width:768px){
        font-size:18px;
        color:rgb(233,198,153,100%);
        width:85%;
    }
`

const Wrapper = styled.div`
    width:100%;
    height:70vh;
    background-image:url(${img});
    background-repeat:no-repeat;
    background-fit: cover;
    background-size:center;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    margin-bottom:20px;
`

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`