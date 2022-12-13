import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchDatas } from "../API/APIService"
import { LeftNavBar } from "../container/leftNavBar/leftNavBar"
import { TopNavBar } from "../container/topNavBar/topNavBar"
import { Dashboard } from "../pages/dashboard"
import "./app.css"

export function App () {
    const { id } = useParams()
    const [datas, setData] = useState([])
    const firstName = datas.firstName
    const nutriments = datas.keyData
    const score = datas.percent 
    const rest = datas.rest

    useEffect(() => {
        const getDatas = async () => {
                await fetchDatas(id).then((res) => setData(res))       
        }
        getDatas(id)
    }, []
    )

    return (
        <>
        <TopNavBar />
        <div className="wrapper">
        <LeftNavBar />
        <Dashboard name={firstName} data={nutriments} score={score} rest={rest} />
        </div>
        </>
        
    )
}