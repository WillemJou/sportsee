import './nutritionBox.css'

export function NutritionBox ({logo, nutriments, data, unit, className}) {
    return (
        <div className= "nutrition-box data-container">
            <div className={`${className} nutrition-logo-container`}>
              <img className="nutrition-logo" src={logo} alt="calories" />
            </div>
            <div className="data-nutrition-box">
              <div className='data-nutrition'>{data + unit}</div>
              <div className="charts-police">{nutriments}</div>
            </div>
          </div>
    )
}