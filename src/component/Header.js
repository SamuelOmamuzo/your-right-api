import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import img2 from "../Images/confident-handsome-businessman-in-restaurant-RZHFMVN.jpg"

const  Header = () =>{
    return(
        <Container>
            <Wrapper>
                <Logo to = "/">Logo</Logo>
                <Navigator>
                    <Nav to = "">
                    About
                    </Nav>
                    <Nav to = "AllLawyer">
                        All Lawyers
                    </Nav>
                    <Link to = "Profile">
                        <Avater src={img2}/>
                    </Link>
                </Navigator>
            </Wrapper>
        </Container>
    )
}
export default Header;

const Avater = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    margin-left:10px;
    object-fit: cover;
`

const Nav = styled(Link)`
    text-decoration:none;
    color:black;
    height:60%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:15px;
    padding-left:10px;
    padding-right:10px;
    border-radius:4px;
    font-weight:bold;
`

const Navigator = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Logo = styled(Link)`
    text-decoration:none;
    color:black;
    font-size:30px;
    font-weight:bold;
    color:white;
`

const Wrapper = styled.div`
    width:90%;
    height:95%;
    display:flex;
    align-items:center;
    justify-content:center;
    justify-content:space-between;
    
    @media (min-width:2560px){
        width:1440px;
    }
`

const Container = styled.div`
    width:100%;
    height:70px;
    backdrop-filter:blur(5px);
    background-color:rgb(233,198,153,50%);
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:10000;
`