import './dashboard.css'
import { NutritionBox } from '../components/nutritionBox/nutritionBox'
import calories from '../assets/calories.svg'
import protein from '../assets/protein.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'

export function Dashboard() {
  let user = <span style={{ color: '#FF0101' }}>?</span>
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
        <div className="all-nutritions-container">
          <NutritionBox logo={calories} nutriments= "calories" style={{backgroundColor: "hsla(0, 100%, 50%, 0.299)"}} />
          <NutritionBox logo={protein} nutriments= "protéines" style={{backgroundColor: "#4AB8FF1A"}} />
          <NutritionBox logo={apple} nutriments= "glucides" style={{backgroundColor: "#f9ce2358"}}/>
          <NutritionBox logo={cheeseburger} nutriments= "lipides" style={{backgroundColor: "#FD51811A"}} />
        </div>
      </div>
    </section>
  )
}
