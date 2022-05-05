import { Divider } from 'antd-mobile'
export default function HomeItem(props) {
    // console.log('====================================');
    // console.log(props);
    // console.log('====================================');
    return <div>
        <div className="content-title">
            <p style={{ float: 'none' }}>    {props.content.title}</p>
            {
                props.content.cover.type == 0 ? <div></div> :
                    props.content.cover.images.map(item =>
                        <img style={{ width: '6rem', height: '5rem', padding: "0.3rem", borderRadius: '0.8rem' }} src={item} alt="" />
                    )
            }

            <Divider></Divider>
        </div>
    </div>
}