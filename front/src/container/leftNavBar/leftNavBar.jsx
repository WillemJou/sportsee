import yoga from "../../assets/yoga.svg"
import dumbbell from "../../assets/dumbbell.svg"
import swim from "../../assets/swim.svg"
import bike from "../../assets/bike.svg"
import copyright from "../../assets/copyright.svg"
import "./leftNavBar.css"

export function LeftNavBar () {
    return (
        <>
        <div className="left-bar">
        <div className="nav">
            <div className="logo-container">
            <img className="nav-logo" src={yoga} alt="" />
            </div>
            <div className="logo-container">
            <img className="nav-logo" src={swim} alt="" />
            </div>
            <div className="logo-container">
            <img className="nav-logo" src={bike} alt="" />
            </div>
            <div className="logo-container">
            <img className="nav-logo" src={dumbbell} alt="" />
            </div>
            <img className="copyright" src={copyright} alt="copyright" />
            </div>
            </div>



            
            </>
    )
}