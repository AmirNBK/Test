import {useState} from 'react'

const IpInfo = (props) => {

    const [showDetail, setShowDetail] = useState(false);
    const Show = () => {
        if (showDetail) {
            return(
                <div>
                    {props.response.country_id}
                </div>
            )
        }else return ' '
    }
    return(
        <div>
            <div onClick={() => setShowDetail((pre) => !pre)}>
                {props.response.probability}
            </div>
                {Show()}
            </div>
            )
}

export default IpInfo