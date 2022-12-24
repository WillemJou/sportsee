import './dashboard.css'
import { NutritionBox } from '../components/nutritionBox/nutritionBox'
import { DashboardHeader } from '../components/dashboardHeader/dashboardHeader'
import calories from '../assets/calories.svg'
import protein from '../assets/protein.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'
import { ScoreChart } from '../components/charts/score'
import { AverageChart } from '../components/charts/average'
import { ActivityChart } from '../components/charts/activity'
import { PerfChart } from '../components/charts/radar'

/**
 * @param {Object} props - all formatted data
 * @param {Array} props.activity - weight and calories burned per day data
 * @param {Array} props.average - duration of session data
 * @param {Boolean} props.isLoading - loader display
 * @param {String} props.name
 * @param {Object} props.nutriments - nutriments count data
 * @param {Array} props.performance - performance data
 * @param {Integer} props.rest
 * @param {Integer} props.score
 */
export function Dashboard(props) {
  return (
    <section className="main-container">
      <DashboardHeader name={props.name} />
      <div className="data-main-container">
        <div className="activity-container data-container">
          <ActivityChart activity={props.activity} />
        </div>
        <div className="average-container data-container">
          <AverageChart average={props.average} />
        </div>
        <div className="perf-container data-container">
          <PerfChart performance={props.performance} />
        </div>
        <div className="score-container data-container">
          <ScoreChart score={props.score} rest={props.rest} />
        </div>
        <div className="all-nutritions-container">
          <NutritionBox
            logo={calories}
            nutriments={props.nutriments?.calorieCount}
            unit={'kCal'}
            type="calories"
            className="calories-box"
          />
          <NutritionBox
            logo={protein}
            nutriments={props.nutriments?.proteinCount}
            unit={'g'}
            type="protéines"
            className="proteins-box"
          />
          <NutritionBox
            logo={apple}
            nutriments={props.nutriments?.carbohydrateCount}
            unit={'g'}
            type="glucides"
            className="glucides-box"
          />
          <NutritionBox
            logo={cheeseburger}
            nutriments={props.nutriments?.lipidCount}
            unit={'g'}
            type="lipides"
            className="lipides-box"
          />
        </div>
      </div>
    </section>
  )
}
