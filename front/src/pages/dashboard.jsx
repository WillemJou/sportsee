import './dashboard.css'
import { NutritionBox } from '../components/nutritionBox/nutritionBox'
import { DashboardHeader } from '../components/nutritionBox/dashboardHeader'
import calories from '../assets/calories.svg'
import protein from '../assets/protein.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'

export function Dashboard({name}) {
  return (
    <section className="main-container">
      <DashboardHeader name={name} />
      <div className="data-main-container">
        <div className="activity-container data-container"></div>
        <div className="average-container data-container"></div>
        <div className="perf-container data-container"></div>
        <div className="score-container data-container"></div>
        <div className="all-nutritions-container">
          <NutritionBox logo={calories} nutriments= "calories" className="calories-box" />
          <NutritionBox logo={protein} nutriments= "protéines" className="proteins-box"  />
          <NutritionBox logo={apple} nutriments= "glucides" className="glucides-box" />
          <NutritionBox logo={cheeseburger} nutriments= "lipides" className="lipides-box" />
        </div>
      </div>
    </section>
  )
}
