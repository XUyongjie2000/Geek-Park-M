import React from 'react'
import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom"
import Info from './info'
export default function Todo() {
    const naviagte = useNavigate()
    const back = () => {
        naviagte('/')
    }
    return <div style={{ height: '93vh', overflow: 'scroll' }}>
        <NavBar onBack={back}>问答</NavBar>
        <Info></Info>
        <Info></Info>
        <Info></Info>
        <Info></Info>
        <Info></Info>
    </div>
}