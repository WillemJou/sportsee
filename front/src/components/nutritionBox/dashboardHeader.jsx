

export function DashboardHeader({name}) {
  
    return (
        <div className="dash-header">    
        <span id="name"> Bonjour {name}</span>
        <span> Félicitation ! Vous avez explosé vos objectifs hier 👏 </span>
      </div>
    )
}