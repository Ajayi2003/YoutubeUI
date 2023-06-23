import React from 'react'
import styled from 'styled-components'
import {FaYoutube} from "react-icons/fa"
import {FiMenu} from "react-icons/fi"
import {HiMicrophone} from "react-icons/hi2"
import {BiVideoPlus} from "react-icons/bi"
import {IoMdNotificationsOutline} from "react-icons/io"
import {FiSearch} from "react-icons/fi"
import vid from "../../assets/unnamed (2).jpg"





const Header = () => {
  return (
    <div>   
        <Container>
            <Main>
                <Div>
                    <MenuIcon/>
                    <YoutubeHold>
                        <YouTubeIcon/>
                        <Text>YouTube</Text>
                        <Te2>NG</Te2>
                    </YoutubeHold>

                </Div>
                <Div1>
                    <SearchHold>
                        <SearchButton placeholder='Search'/>
                        <SearchIcon/>
                        
                    </SearchHold>
                    <MicroPhone/>
                </Div1>
                <Div2>
                    <VideoIcon/>
                    <Notification/>
                    <Circle src={vid}/>
                </Div2>
                
            </Main>
        </Container>
      
    </div>
  )
}

export default Header
const Circle = styled.img`
border-radius: 50%;
color: white;
width: 30px;
display: flex;
align-items: center;

`
const Notification = styled(IoMdNotificationsOutline)`
font-size: 25px;
margin-right: 20px; 
border-radius: 50%;
padding: 10px;
:hover{
    cursor: pointer;
    background-color: #F0F0F0;
}
`
const VideoIcon = styled(BiVideoPlus)`
font-size: 25px;
margin-right: 15px;
border-radius: 50%;
padding: 10px;
:hover{
    cursor: pointer;
    background-color: #F0F0F0;
}
`
const Div2 = styled.div`
display: flex;
align-items: center;
`
const MicroPhone = styled(HiMicrophone)`
font-size: 25px;
margin-left: 5px;
border-radius: 50%;
padding: 10px;
:hover{
    cursor: pointer;
    background-color: #F0F0F0;
}
`
const SearchButton = styled.input`
flex:1;
height: 90%;
border-radius: 50px;
border: 0;
outline: 0;
margin-left: 10px;
caret-color: red;
::placeholder{
    font-size: 17px;
}
`
const SearchIcon = styled(FiSearch)`
font-size: 25px;
padding: 8px 20px;
border-radius: 0 20px 20px 0px;
background-color: #F0F0F0;
`
const SearchHold = styled.div`
display: flex;
width: 550px;
height: 50%;
border-radius: 40px;
border: 1px solid #F0F0F0;
align-items: center;
`
const Div1 = styled.div`
display: flex;
height: 100%;
align-items: center;

`
const Te2 = styled.div`
font-size: 12px;
font-weight: 500;
position: absolute;
top: 0;
right: -23px;
`
const Text = styled.div`
font-size: 25px;
font-weight: 600;
letter-spacing: -0.11em;

`
const YouTubeIcon = styled(FaYoutube)`
font-size: 35px;
color: red;
margin-right: 3px;
`
const YoutubeHold = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
position: relative;
`
const MenuIcon = styled(FiMenu)`
font-size: 25px;
/* margin-right: 10px; */
border-radius: 50%;
padding: 10px;
:hover{
    cursor: pointer;
    background-color: #F0F0F0;
}
`
const Div = styled.div`
display: flex;
align-items: center;
`
const Main = styled.div`
display: flex;
width: 95%;
height: 100%;
align-items:center;
justify-content: space-between;
`
const Container = styled.div`
width: 100%;
height: 80px;
display: flex;
align-items:center;
justify-content: center;
`
