import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { http } from "../utils/http"
import DOMPurify from 'dompurify';
import "./particulars.css"
import { NavBar, Space, Toast, Tag, Divider } from 'antd-mobile'
export default function Particulars(props) {
    const { id } = useParams()
    const navigator = useNavigate()
    const [contentInfo, setInfo] = useState(null)
    // 获取文章详情
    const getArticles = async () => {
        let { data: { data } } = await http(`/articles/${id}`)
        console.log(data);
        setInfo(data)
    }
    useEffect(() => {
        getArticles()
    }, [])
    const back = () => {
        navigator('/home')
    }
    return <div style={{
        width: '100%',
        height: '100%', boxSizing: 'border-box'
    }}>
        <NavBar style={{ position: 'fixed', top: '0', left: '0', backgroundColor: '#fff', width: '100%' }} onBack={back}>文章详情</NavBar>
        <Divider></Divider>
        <div className="particulars-container" >
            <p style={{ fontSize: '1.5rem', marginTop: 0 }}>{contentInfo?.title}</p>
            <p style={{ marginTop: '1.4rem' }}><span style={{ color: '#999' }}>{contentInfo?.pubdate}&nbsp;|{contentInfo?.read_count}&nbsp;阅读&nbsp;|&nbsp;{contentInfo?.comm_count}&nbsp;评论</span></p>
            <div className="particulars-info">
                <img style={{ width: '2rem', height: '2rem', borderRadius: '50%' }} src={contentInfo?.aut_photo} alt="" />
                <p>{contentInfo?.aut_name}</p>
                <Tag style={{ float: 'right' }}>+关注</Tag>
            </div>
            <Divider></Divider>
            <div className="particulars-content">
                <p>
                    <div
                        className="content-html dg-html"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(contentInfo?.content),
                        }}
                    />;
                </p>
            </div>
        </div>
    </div>
}