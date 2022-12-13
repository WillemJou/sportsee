import './dashboard.css'
import { NutritionBox } from '../components/nutritionBox/nutritionBox'
import { DashboardHeader } from '../components/nutritionBox/dashboardHeader'
import calories from '../assets/calories.svg'
import protein from '../assets/protein.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'
import { Score } from '../components/charts/score'

export function Dashboard({name, data, score, rest}) {
  return (
    <section className="main-container">
      <DashboardHeader name={name} />
      <div className="data-main-container">
        <div className="activity-container data-container"></div>
        <div className="average-container data-container"></div>
        <div className="perf-container data-container"></div>
        <Score score={score} rest={rest} className="score-container data-container"/>
        <div className="all-nutritions-container">
          <NutritionBox logo={calories} data={data?.calorieCount} unit={"kCal"} nutriments= "calories" className="calories-box" />
          <NutritionBox logo={protein} data={data?.proteinCount} unit={"g"} nutriments= "protéines" className="proteins-box"  />
          <NutritionBox logo={apple} data={data?.carbohydrateCount} unit={"g"} nutriments= "glucides" className="glucides-box" />
          <NutritionBox logo={cheeseburger} data={data?.lipidCount} unit={"g"} nutriments= "lipides" className="lipides-box" />
        </div>
      </div>
    </section>
  )
}
