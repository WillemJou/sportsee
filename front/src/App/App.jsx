import { LeftNavBar } from "../container/leftNavBar/leftNavBar"
import { TopNavBar } from "../container/topNavBar/topNavBar"
import { Dashboard } from "../pages/dashboard"
import "./App.css"

export function App () {
    return (
        <>
        <TopNavBar />
        <div className="wrapper">
        <LeftNavBar />
        <Dashboard />
        </div>
        </>
        
    )
}