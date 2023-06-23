import React, { useState } from 'react'
import styled from 'styled-components'
import {AiFillHome} from "react-icons/ai"
import {AiOutlinePlayCircle} from "react-icons/ai"
import {BsCollectionPlay} from "react-icons/bs"
import {GoHistory} from "react-icons/go"
import {BiTimeFive} from "react-icons/bi"
import {BiLike} from "react-icons/bi"
import {IoIosArrowDown} from 'react-icons/io'
import {LiaFireAltSolid} from 'react-icons/lia'
import {IoMdMusicalNote} from "react-icons/io"
import pics from "../../assets/unnamed (3).jpg"
import pics1 from "../../assets/unnamed (4).jpg"
import pics2 from "../../assets/unnamed (5).jpg"
import pics3 from "../../assets/unnamed (6).jpg"
import pics4 from "../../assets/unnamed (7).jpg"
import pics5 from "../../assets/unnamed (8).jpg"
import pics6 from "../../assets/unnamed (9).jpg"
import pics7 from "../../assets/channels4_profile (1).jpg"
import pics8 from "../../assets/channels4_profile (2).jpg"
import pics9 from "../../assets/channels4_profile (3).jpg"
import pics10 from "../../assets/channels4_profile (4).jpg"
import pics11 from "../../assets/channels4_profile (5).jpg"
import pics12 from "../../assets/channels4_profile (6).jpg"
import pics13 from "../../assets/channels4_profile (7).jpg"
import pics14 from "../../assets/channels4_profile (8).jpg"
import pics15 from "../../assets/channels4_profile (9).jpg"


const Data = [
    {image:pics, text: "Segun Ajayi" },
    {image:pics1, text: "Travis Godwin" },
    {image:pics2, text: "Ojebola Michael" },
    {image:pics3, text: "Williams Taylor" },
    {image:pics4, text: "Amidat Ogunbiyi" },
    {image:pics5, text: "Uche Austin" },
    {image:pics6, text: "Kenny Fash" },
    {image:pics7, text: "Peter Oti" },
    {image:pics8, text: "Okus Oti" },
]
const Data1 = [
    {image:pics9, text: "Segun Ajayi" },
    {image:pics10, text: "Travis Godwin" },
    {image:pics11, text: "Ojebola Michael" },
    {image:pics12, text: "Williams Taylor" },
    {image:pics13, text: "Amidat Ogunbiyi" },
    {image:pics14, text: "Uche Austin" },
    {image:pics15, text: "Kenny Fash" },
]

const Dashboard = () => {
    const [Down, setDown] = useState<boolean>(false)
    const onDown = ()=>{
        setDown(!Down)
    }
  return (
    <div>
        <Container>
            <Main>
                <Nav><Icon/>Home</Nav>
                <Nav><Icon1/>Shorts</Nav>
                <Nav><Icon2/>Subscription</Nav>
            

            </Main>
            <Main1>
            <Nav><Icon2/>Library</Nav>
                <Nav><Icon3/>History</Nav>
                <Nav><Icon4/>Subscription</Nav>
                <Nav><Icon5/>Subscription</Nav>

            </Main1>
            <Main2>
                <Nav bg='kk'>Subscriptions</Nav>
                <Div>
                    {
                        Data?.map((props, i)=>(
                            <Nav key={i}><Circle src={props.image}/>{props.text}</Nav>
                            
                            
                        ))
                    }
                    
                </Div>
                <Nav onClick={()=>{
                    onDown()
                }}><Arrow/>
               
                Show 6 More</Nav>
                {
                    Down ? 
                    <Div>
                   {
                    Data1.map((props, i)=>(
                        <Nav key={i}><Circle src={props.image}/>{props.text}</Nav>

                    ))
                   }
                    </Div>
                    : null
                }

             

            </Main2>
            <Main3>
                <Nav>Trending</Nav>
                <Nav>Music</Nav>
                <Nav>Gaming</Nav>
                <Nav>News</Nav>
                <Nav>Sports</Nav>

            </Main3>
            
        </Container>
    </div>
  )
}

export default Dashboard
const Main3 = styled.div`
    width: 100%;
margin-top: 10px;
`
const Arrow = styled(IoIosArrowDown)`
margin-right: 30px;
`
const Div = styled.div`
display: flex;
flex-direction: column;
`
const Circle = styled.img`
width: 20px;
height: 20px;
border-radius: 50%;
margin-right: 20px;
`
const Main2 = styled.div`
width: 100%;
margin-top: 10px;

`
const Main1 = styled.div`
width: 100%;
border-top: 1px solid silver;
border-bottom: 1px solid silver;
padding:  10px 0;
`
const Icon5 = styled(BiLike)`
font-size: 20px;
margin-right: 20px;
`
const Icon4 = styled(BiTimeFive)`
font-size: 20px;
margin-right: 20px;
`
const Icon3 = styled(GoHistory)`
font-size: 20px;
margin-right: 20px;
`
const Icon2 = styled(BsCollectionPlay)`
font-size: 20px;
margin-right: 20px;
`
const Icon1 = styled(AiOutlinePlayCircle)`
font-size: 20px;
margin-right: 20px;
`
const Icon = styled(AiFillHome)`
font-size: 20px;
margin-right: 20px;
`
const Nav = styled.div<{bg?:string}>`
padding: 10px 0px 10px 15px;
display: flex;
align-items: center;
border-radius: 8px;
font-size: 14px;
:hover{
    background-color: ${({bg})=> bg ? "" : "#F0F0F0"};
    cursor: pointer;
}
`
const Main = styled.div`
margin-bottom: 25px;

`
const Container = styled.div`
width:200px;
height: calc(100vh - 80px);
margin-left: 30px;
position: fixed;
overflow: hidden;
padding-bottom: 30px;
padding-right: 10px;


:hover{
    overflow: auto;
    ::-webkit-scrollbar{
    width: 7px;
    
}
::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;

}
}
display: flex;
flex-direction: column;
`