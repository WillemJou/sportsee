import './nutritionBox.css'

export function NutritionBox ({logo, nutriments, className}) {
    return (
        <div className= "nutrition-box data-container">
            <div className={`${className} nutrition-logo-container`}>
              <img className="nutrition-logo" src={logo} alt="calories" />
            </div>
            <div className="data-nutrition">
              <span className="charts-police">{nutriments}</span>
            </div>
          </div>
    )
}