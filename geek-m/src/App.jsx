import { TabBar } from 'antd-mobile'
import { useNavigate } from "react-router-dom"
import AppRouter from './router/appRouter'
import "./App.css"
import {
  AppOutline,
  MessageOutline,
  UserOutline,
  PlayOutline
} from 'antd-mobile-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

export default function App() {

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '问答',
      icon: <MessageOutline />,
    },
    {
      key: 'video',
      title: '视频',
      icon: <PlayOutline />,
    },
    {
      key: 'my',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const store = useSelector(state => state)
  const [isShowTabBa, setShowTabBar] = useState(true)
  function tabBarChange(value) {
    if (value === 'my') {

      if (!store.userReducer.token) {
        dispatch({ type: 'login/put' })
        return navigate('/login')
      }
    }

    navigate(`/${value}`)
  }
  return <div style={{ width: '100%', height: '100%' }}>
    <AppRouter />

    <div style={{ position: 'fixed', bottom: '0', width: '100%', backgroundColor: '#f7f8fa' }}>
      {
        !store.userReducer.isshowTab ?
          <TabBar onChange={tabBarChange}>
            {tabs.map(item => (
              <TabBar.Item
                key={item.key}
                icon={item.icon}
                title={item.title}
                badge={item.badge}
              />
            ))}
          </TabBar> : null
      }
    </div>
  </div >
}