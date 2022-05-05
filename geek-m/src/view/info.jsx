import { Divider } from 'antd-mobile'
export default function Info() {
    return <div>
        <Divider></Divider>
        <div style={{
            width: '100%', display: 'flex', padding: '0.4rem', boxSizing: 'border-box'
        }}>
            < div >
                <p>作为 IT 行业的过来人，你有什么话想对后辈说的？</p>
                <span style={{ color: '#999', fontSize: 'calc(11rem / 64)' }}>赞同1000+&nbsp;&nbsp;&nbsp;评论500+&nbsp;&nbsp;&nbsp;1小时前</span>
            </div>
            <img style={{ width: '8rem', borderRadius: '0.4rem' }} src={require('../assets/logo.jpg')} alt="" />
        </ div>
    </div>
}