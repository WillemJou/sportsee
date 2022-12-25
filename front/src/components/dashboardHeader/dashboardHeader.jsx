import './dashboardHeader.css'
import PropTypes from 'prop-types'

/**
 * @param {String} name
 */
export function DashboardHeader({ name }) {
  return (
    <div className="dash-header">
      <h1 id="hello">
        {' '}
        Bonjour <span className="name">{name}</span>
      </h1>
      <span> Félicitation ! Vous avez explosé vos objectifs hier 👏 </span>
    </div>
  )
}

DashboardHeader.propTypes = {
  name: PropTypes.string,
}
