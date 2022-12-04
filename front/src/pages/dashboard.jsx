import "./dashboard.css"

export function Dashboard () {
    let user = <span style={{color: "#FF0101" }}>?</span>
    return (
        <section className="main-container">
        <div className="dash-header">
        <span className="say-hello"> Bonjour {user}</span>
        <span> Félicitation ! Vous avez explosé vos objectifs hier 👏 </span>
        </div>
        <div className="data-main-container">
            <div className="activity-container data-container"></div>
            <div className="average-container data-container"></div>
            <div className="perf-container data-container"></div>
            <div className="score-container data-container"></div>
            <div className="nutrition-container data-container"></div>
        </div>
        </section>
    )
}