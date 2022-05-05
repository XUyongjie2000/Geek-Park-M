import { useEffect, useState } from "react"
import { Tabs, Mask } from 'antd-mobile'
import "./Home.css"
import { SearchOutline, FileOutline } from 'antd-mobile-icons'
import { http } from "../utils/http"
import HomeItem from "../components/HomeItem"
import Model from "../components/Model"
import { useNavigate } from "react-router-dom"

export default function Home() {
    // 频道信息
    const [channelList, setChannel] = useState([])
    //未选频道信息
    const [otherList, setOtherList] = useState([])
    // 文章信息
    const [contentList, setContentList] = useState([])
    const navigator = useNavigate()
    // 获取频道数据
    let getChannelList = async () => {
        let { data: { data } } = await http.get('/channels')
        console.log(data.channels);
        setChannel(data.channels)
        console.log(channelList);
    }
    // 获取文章信息
    let getContent = async (value) => {
        let timer = new Date().valueOf()
        console.log('====================================');
        console.log(value, timer);
        console.log('====================================');
        let { data: { data } } = await http.get('/articles', { params: { channel_id: value, timestamp: timer } })
        console.log(data);
        setContentList(data.results)
    }
    useEffect(() => {
        getChannelList()
        getContent(0)
    }, [])
    // 切换面板
    const tabChange = (value) => {
        console.log(value);
        getContent(value)
    }
    // 遮罩层宽度
    const [modelWid, setModelwid] = useState(0)
    const [visible, setVisible] = useState(false)
    // 显示页面
    const showModel = () => {
        setModelwid(100)
        setVisible(true)
    }
    // 查看详情
    const particulars = (id) => {
        console.log(id);
        navigator(`/particulars/${id}`)
    }
    return <div>
        <div className="home-title" style={{ height: '7vh' }}>
            <Tabs defaultActiveKey='0' onChange={tabChange}>
                {
                    channelList.map(item =>
                        <Tabs.Tab title={item.name} key={item.id}>
                        </Tabs.Tab>
                    )
                }
            </Tabs>
            <div className="title-icon">
                <SearchOutline ></SearchOutline>
            </div>
            <div className="title-icon">
                <FileOutline onClick={showModel} />
            </div>
        </div>
        <div className="home-content">
            {
                contentList.map(item =>
                    <div key={item.art_id} onClick={() => particulars(item.art_id)}>
                        <HomeItem content={item} key={item.art_id}></HomeItem>
                    </div>
                )
            }
        </div>
        <Model otherList={otherList} setOtherList={setOtherList} setChannel={setChannel} channelList={channelList} width={modelWid} setModelwid={setModelwid} setVisible={setVisible}></Model>
        <Mask visible={visible} onMaskClick={() => setVisible(false)} />
    </div>
}