import "./my.css"
import { BellOutline, SmileOutline, PieOutline, TextOutline, HeartOutline, ExclamationCircleOutline } from "antd-mobile-icons"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserInfo } from "../store/actions/user"
import { Toast } from "antd-mobile"
import { useNavigate } from "react-router-dom"
export default function My() {
    const dispatch = useDispatch()
    // 用户用户信息
    const getuserInfo = async () => {
        try {
            await dispatch(getUserInfo())
        }
        catch {
            Toast.show({
                icon: 'success',
                content: '信息获取失败',
            })
        }
    }
    const store = useSelector(state => state)
    const navigate = useNavigate()
    console.log(store);
    useEffect(() => {
        getuserInfo()
    }, [])
    // 进入个人中心
    const userInfo = () => {
        navigate('/userInfo')
        dispatch({ type: 'login/put' })
    }
    return <div style={{ height: '100%', backgroundColor: '#f8f8f8' }}>
        <div className="title">
            <div className="title-img">
                <img src={store.userReducer.photo} alt="" />
            </div>
            <p >{store.userReducer.mobile}</p>
            <span onClick={() => userInfo()} style={{ float: 'right', marginRight: '20px', marginTop: '1rem' }}>个人信息</span>
            <div className="title-content">
                <div>
                    <div>8</div>
                    <div>动态</div>

                </div>
                <div>
                    <div>8</div>
                    <div>关注</div>
                </div>
                <div>
                    <div>8</div>
                    <div>粉丝</div>

                </div>
                <div>
                    <div>8</div>
                    <div>被赞</div>
                </div>
            </div>
        </div>
        <div className="content-item">

            <div className="item">
                <BellOutline style={{ fontSize: 'calc(40rem/32)' }} />
                <p>消息通知</p>
            </div>
            <div className="item">

                <HeartOutline style={{ fontSize: 'calc(40rem/32)' }} />
                <p>我的收藏</p>
            </div>  <div className="item">
                <PieOutline style={{ fontSize: 'calc(40rem/32)' }} />
                <p>阅读历史</p>
            </div>
            <div className="item">
                <TextOutline style={{ fontSize: 'calc(40rem/32)' }} />
                <p>我的作品</p>
            </div>
        </div>
        <div className="footer">
            <p>更多服务</p>
            <div className="footer-item">
                <div >
                    <SmileOutline style={{ fontSize: 'calc(40rem/32)' }} />
                    <p>用户反馈</p>
                </div>
                <div>
                    <ExclamationCircleOutline style={{ fontSize: 'calc(40rem/32)', color: '#fc6627' }} />
                    <p>小智同学</p>
                </div>
            </div>
        </div>
    </div >
}