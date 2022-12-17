import './dashboard.css'
import { NutritionBox } from '../components/nutritionBox/nutritionBox'
import { DashboardHeader } from '../components/nutritionBox/dashboardHeader'
import calories from '../assets/calories.svg'
import protein from '../assets/protein.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'
import { ScoreChart } from '../components/charts/score'
import { AverageChart } from '../components/charts/average'
import { ActivityChart } from '../components/charts/activity'
import { PerfChart } from '../components/charts/radar'

export function Dashboard(props) {

  if(!props.isLoading) {
    return <h1 className='loading-title'>Patientez svp</h1>
  }
  return (
    <section className="main-container">
      <DashboardHeader name={props.name} />
      <div className="data-main-container">
        <div className="activity-container data-container" >
        <ActivityChart activity={props.activity} />
        </div>
        <div className="average-container data-container" >
        <AverageChart average={props.average} />
        </div>
        <div className="perf-container data-container" >
        <PerfChart performance={props.performance} />
        </div>
        <div className="score-container data-container">
        <ScoreChart score={props.score} rest={props.rest} />
        </div>
        <div className="all-nutritions-container">
          <NutritionBox logo={calories} nutriments={props.nutriments?.calorieCount} unit={"kCal"} type= "calories" className="calories-box" />
          <NutritionBox logo={protein} nutriments={props.nutriments?.proteinCount} unit={"g"} type= "protéines" className="proteins-box"  />
          <NutritionBox logo={apple} nutriments={props.nutriments?.carbohydrateCount} unit={"g"} type= "glucides" className="glucides-box" />
          <NutritionBox logo={cheeseburger} nutriments={props.nutriments?.lipidCount} unit={"g"} type= "lipides" className="lipides-box" />
        </div>
      </div>
    </section>
  )
}
