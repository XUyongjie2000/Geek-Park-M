import React from 'react'
import { NavBar, Divider, Toast } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import { useNavigate } from "react-router-dom"
export default function Video() {
    const naviagte = useNavigate()
    const back = () => {
        naviagte('/')
    }
    return <div style={{ height: '93vh', overflow: 'scroll' }}>
        <NavBar onBack={back}>视频</NavBar>
        <Divider></Divider>

        <div style={{ padding: '0.5rem' }}>

            <p style={{ marginTop: '0', fontSize: '1rem' }}>格力电器将继续发展手机业务，并将向全产业覆盖！</p>
            <video style={{ width: '100%' }} src="https://video19.ifeng.com/video09/2021/05/26/p6803231351488126976-102-8-161249.mp4?reqtype=tsl&vid=2c791e3b-444e-4578-83e3-f4808228ae3b&uid=0puFR4&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=&cat=&ptype=&platform=pc&sourceType=h5&dt=1622096387396&gid=6a4poXmsep1E&sign=39f76885daca6503ebf90acbfffc1ff1&tm=1622096387396&vkey=sIlyZDbW2A8fMvJ9a0JWrdgHqkojeOZzQ6%2F8YBbpF7U7%2BrdIasBZxvzXMLkaL6Z6%2Br65EphTeUIGc0DTSkEfJJMpVKEb6fHGf%2F0VZa%2F6%2B0BmLIeTaJZj7ZzCKlpGzNhPbcM36aUClLmvUBCVUWFAHlcACFn3NQf2OgTC8cmN153Bbqica1LZszPa8Wt%2FphtqQ3YGy2qQWi6n2paj4fGpAMIzPCrK50ucyZf4uUpZuSjDNnhOHi63FqB8G1yGnO%2F52BXAxcBdTx2cFGYhoZfU0F6cTw2dpt4K56Ztp1Tre%2FQ%3D"></video>
            <Divider></Divider>
        </div>
        <div style={{ padding: '0.5rem' }}>

            <p style={{ marginTop: '0', fontSize: '1rem' }}>格力电器将继续发展手机业务，并将向全产业覆盖！</p>
            <video style={{ width: '100%' }} src="https://ips.ifeng.com/video19.ifeng.com/video09/2021/05/26/p6803268684325330944-102-8-184104.mp4?reqtype=tsl&vid=ec74b1e4-d1fa-488b-aaf5-71984ca7d13e&uid=1Vun5L&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=&cat=&ptype=&platform=pc&sourceType=h5&dt=1622096310639&gid=fg3vsXmseXFv&sign=38e7c790561e1fd1b57e61a1cbd8031c&tm=1622096310639"></video>
            <Divider></Divider>
        </div>
    </div>
}