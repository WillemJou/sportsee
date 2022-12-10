import { useEffect, useState } from "react"
import { getDatas, useId } from "../API/APIService"
import { LeftNavBar } from "../container/leftNavBar/leftNavBar"
import { TopNavBar } from "../container/topNavBar/topNavBar"
import { Dashboard } from "../pages/dashboard"
import "./app.css"

export function App () {
    const id = useId()
    console.log(id);
    const [datas, setData] = useState([])
    const firstName = datas.userInfos?.firstName
    console.log(firstName);

    useEffect(() => {
        const getData = async () => {
                await getDatas(id).then((res) => setData(res))       
        }
        getData(id)
    }, []
    )

    return (
        <>
        <TopNavBar />
        <div className="wrapper">
        <LeftNavBar />
        <Dashboard name={firstName} />
        </div>
        </>
        
    )
}