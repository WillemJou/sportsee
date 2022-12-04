import logo from "../../assets/logo.svg"
import "./topNavBar.css"

export function TopNavBar () {
    return (
        <>
        <div className="top-nav">
            <img className="logo" src={logo} alt="logo" />
            <span className="nav-link" >Accueil</span>
            <span className="nav-link" >Profil</span>
            <span className="nav-link" >Réglage</span>
            <span className="nav-link" >Communauté</span>
        </div>
        </>
    )
}
