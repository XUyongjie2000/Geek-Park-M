import "./model.css"
import { Tag, } from 'antd-mobile'
import { CloseOutline, CloseCircleOutline } from 'antd-mobile-icons'
import { useState } from "react";
function Model(props) {
    // 隐藏
    const modelHidden = () => {
        props.setModelwid(0)
        props.setVisible(false)
    }
    const [showEdit, setEdit] = useState(false)
    const showClose = () => {
        if (showEdit) {
            props.setModelwid(0)
            props.setVisible(false)
            setEdit(false)
        } else {
            return setEdit(true)

        }
    }
    // 删除频道
    const deleteChannel = (id) => {
        let arr = props.channelList.filter(item => {
            if (item.id === id) props.setOtherList([...props.otherList, item])
            return item.id !== id
        })
        props.setChannel(arr)
    }
    // 添加频道
    const additem = (id) => {
        let arr = props.otherList.filter(item => {
            if (item.id === id) props.setChannel([...props.channelList, item])
            return item.id !== id
        })
        props.setOtherList(arr)
    }
    return <div style={{ width: `${props.width}%`, overflow: 'hidden' }} className='model-content'>
        <div style={{ padding: '1rem' }}>
            <div >
                <CloseOutline onClick={modelHidden} style={{ fontSize: '1.5rem', color: '#999', float: "right" }} />
            </div>
            {/* 我的频道 */}
            <div >
                <div className="my-title">
                    <p style={{ margin: '0' }}>我的频道：<span style={{ color: '#999' }}>点击进入频道</span></p>
                    <Tag onClick={showClose} style={{ width: '2.5rem', textAlign: 'center' }} round color="#ff8f1f" fill='outline'>{!showEdit ? '编辑' : '完成'}</Tag>
                </div>
                <div className="my-container">
                    {
                        props.channelList.map(item =>
                            <div style={{ position: 'relative' }} key={item.id}>
                                <CloseCircleOutline onClick={() => deleteChannel(item.id)} style={showEdit ? { display: 'block' } : null} className="close" />
                                <p>{item.name}</p></div>
                        )
                    }
                </div>
            </div>
            {/* 可选频道 */}
            <div >
                <div className="my-title">
                    <p style={{ margin: '0' }}>我的频道：<span style={{ color: '#999' }}>可选频道</span></p>

                </div>
                <div className="my-container">
                    {
                        props.otherList.map(item =>
                            <div key={item.id} onClick={() => additem(item.id)} style={{ position: 'relative' }}>
                                <p>+{item.name}</p></div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
}
export default Model