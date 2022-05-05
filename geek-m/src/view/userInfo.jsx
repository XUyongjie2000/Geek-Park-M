import { NavBar, Divider } from 'antd-mobile'
import { useDispatch } from 'react-redux'
import { Router, useNavigate } from 'react-router-dom'
import { clearToken } from "../utils/auth"
export default function UserInfo() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function backUser() {
        navigate('/my')
        dispatch({ type: 'login/back' })
    }
    // 退出登陆
    function editLogin() {
        console.log(1232);
        // 清除本地token
        clearToken()
        dispatch({ type: 'login/put' })
        dispatch({ type: 'clearUserInfo' })
        navigate('/login')
    }
    return <div>
        <NavBar onBack={backUser}>个人信息</NavBar>
        <div>
            <div>
                <p>头像</p>
                <img src="" alt="" />
            </div>
            <Divider />
            <div>
                <p>昵称</p>
            </div>
            <Divider />

            <div>
                <p>简介</p>
            </div>
            <Divider />
        </div>
        <div>
            <div>
                <p>性别</p>
            </div>
            <Divider />

            <div>
                <p>生日</p>
                <Divider />

            </div>
        </div>
        <p style={{ position: 'fixed', textAlign: 'center', color: 'red', width: '100%', bottom: '1rem' }} onClick={editLogin}>退出登陆</p>
    </div >
}