import './api.css'
import {useState, useEffect} from "react"
import axios from "axios"

const Data = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            console.log(res);
            setData(res.data)
        })
            .catch((err) => {
                console.log(err);
            });
    }

    return(
        <div>
            {data.map((info) => (
                <div className="container">
                    <div className="name">
                    {info.name}
                    </div>
                    <div className="email">
                    {info.email}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Data