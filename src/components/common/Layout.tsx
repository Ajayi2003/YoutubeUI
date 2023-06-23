import React from 'react'
import Header from '../static/Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Dashboard from '../../pages/Landingscreen/Dashboard'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Main>
        <Dashboard/>
        <Outlet/>
        </Main>
      
    </div>
  )
}

export default Layout
const Main = styled.div`
    display: flex;
    width: 100%;
`
