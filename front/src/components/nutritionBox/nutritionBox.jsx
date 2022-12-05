import './nutritionBox.css'

export function NutritionBox ({logo, nutriments, style}) {
    return (
        <div className="nutrition-box data-container">
            <div className="nutrition-logo-container" style={style}>
              <img className="nutrition-logo" src={logo} alt="calories" />
            </div>
            <div className="data-nutrition">
              <span className="charts-police">{nutriments}</span>
            </div>
          </div>
    )
}