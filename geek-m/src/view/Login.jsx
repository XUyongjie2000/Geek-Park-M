import { NavBar, Space, Toast, Form, Input, Button, } from 'antd-mobile'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { login } from '../store/actions/user'
export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const store = useSelector(state => state)
    const back = () => {
        navigate('/home')
        dispatch({ type: 'login/back' })
    }

    // 登陆
    const handlerLogin = async (value) => {
        console.log(value);
        try {
            await dispatch(login(value))
            navigate('/my')
            Toast.show({
                icon: 'success',
                content: '登陆成功',
            })
        }
        catch {
            Toast.show({
                icon: 'fail',
                content: '登陆失败',
            })
        }
        console.log(store);
    }

    return <div>
        <NavBar onBack={back} ></NavBar>
        <div style={{ padding: '30px' }}>
            <p style={{ fontSize: '25px', float: 'none' }}>短信登陆</p>
            <Form mode='card' onFinish={(e) => handlerLogin(e)} footer={
                <Button style={{ margin: '0 auto', display: 'block', backgroundColor: '#fe504c', color: '#fff', width: '90%' }} type="submit">登陆</Button>
            }>
                <Form.Item name='mobile' required rules={[{ required: true, message: '请输入手机号', }]}>
                    <Input placeholder='请输入手机号'></Input>
                </Form.Item>
                <Form.Item name='code' required rules={[{ required: true, message: '请输入验证码' }]}>
                    <Input placeholder='请输入验证码'></Input>
                </Form.Item>
            </Form>
        </div>

    </div >
}