import React from "react";
import styled from "styled-components";
import img from "../Images/attractive-male-executive-manager-in-formal-outft-D64RHTY.jpg"
import img2 from "../Images/confident-handsome-businessman-in-restaurant-RZHFMVN.jpg"
import img3 from "../Images/happy-experienced-female-lawyer-standing-in-front-2UK4DZR.jpg"
import img4 from "../Images/young-confident-businessman-or-lawyer-in-elegant-s-BYTZYFP.jpg"
import Img9 from "../Images/rear-view-of-a-small-statue-of-lady-justice-SNC459L.jpg"

const Profile = () =>{
    return(
        <Container>
            <Wrapper>
                <SubHead>
                   <Avater src={img2}/>
                    <Span2>Samuel Omamuzo</Span2>
                    <Tag>
                        <Button>add yourself as a lawyer</Button>
                        <Button>veiw your rates</Button>
                    </Tag>
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
                <Image src={img2}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
            <Card>
                <Image src={img3}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
            <Card>
                <Image src={img4}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
            <Card>
                <Image src={img3}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
            <Card>
                <Image src={img}/>
                <Span>ugoeihfidhfdfdfehh</Span>
            </Card>
        </Container>
    )
}
export default Profile;

const Tag = styled.div`
    display:flex;
`

const Button = styled.div`
    padding-left:5px;
    padding-right:5px;
    margin-left:10px;
    height:50px;
    font-size:15px;
    background-color:white;
    border-radius:5px;
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Span2 = styled.h3`
    margin-top:3px;
    margin-bottom:10px;
    font-size:25px;
`
const Avater = styled.img`
    width:250px;
    height:250px;
    background-color:white;
    border-radius:50%;
    object-fit: cover;
`

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
    width:52%;
    word-break:break-all;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    color:white;

    @media (min-width:60px) and (max-width:768px){
        font-size:18px;
        color:rgb(233,198,153,100%);
        width:85%;
    }
`

const Wrapper = styled.div`
    width:100%;
    height:80vh;
    background-image:url(${Img9});
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