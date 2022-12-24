import './loader.css'

export function Loader() {
  return (
  <div className="loading">
    <div className="lds-dual-ring"></div>
    <h1 className="loading-title">Patientez svp</h1>
  </div>
  )
}
