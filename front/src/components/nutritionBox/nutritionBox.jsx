import './nutritionBox.css'
import PropTypes from 'prop-types'

/**
 * @param {SVG} logo
 * @param {String} type
 * @param {Number} nutriments
 * @param {String} unit
 * @param {CssClass} className
 */
export function NutritionBox({ logo, type, nutriments, unit, className }) {
  console.log(typeof type)
  return (
    <div className="nutrition-box data-container">
      <div className={`${className} nutrition-logo-container`}>
        <img className="nutrition-logo" src={logo} alt="calories" />
      </div>
      <div className="data-nutrition-box">
        <div className="data-nutrition">{nutriments + unit}</div>
        <div className="charts-police">{type}</div>
      </div>
    </div>
  )
}
NutritionBox.propTypes = {
  logo: PropTypes.oneOf(['svg', 'img']),
  className: PropTypes.string,
  nutriments: PropTypes.number,
  type: PropTypes.string,
  unit: PropTypes.string,
}
