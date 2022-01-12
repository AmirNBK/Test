import "./req.css"
import axios from "axios";
import {useState,useEffect} from "react"
import IpInfo from "./ip info";

const Req = () => {

    const [data,setData] = useState([])
    const [selectedData, setSelectedData] = useState('')

    const fetchData = () => {
        axios.get('https://api.nationalize.io/?name=michael').then((res) => {
            console.log(res.data);
            setData(res.data.country)
        })
            .catch((err) => {
                console.log(err);
            });
    }
    return(
        <div>
            <div className="container2">
            <div> Send your request </div>
            <input className="input" type="text"/>
                <button className="button" onClick={fetchData}> Send </button>
            </div>
            <div>
                {data.map(
                    (info) => (
                        <div className="ip" key={info.probability}>
                            <IpInfo response={info}/>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
export default Req