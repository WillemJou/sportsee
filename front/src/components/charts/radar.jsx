import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
  
/**
 * @param {Array} props 
 * @param {Integer} props.value
 * @param {String} props.kind
 */
  export function PerfChart(props) {
    return (
        <ResponsiveContainer width="99%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="70%"
          data={props.performance}
          fill="#FFF"
          style={{
            background: 'black',
            borderRadius: '5px',
            fontWeigth: '500',
            fontSize: '12px',
          }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind"
          tick={{
            fontSize: 12,
            fontWeight: 500,
        }} />
  
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            dataKey="value"
            fill="#ff0101"
            fillOpacity={0.7}
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    )
 }
  