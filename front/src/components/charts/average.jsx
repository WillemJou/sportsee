import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, YAxis } from 'recharts'
 
/** 
 * @param {Integer} value 
 * @param {String} label 
 */ 
const customizeTooltip = (value, label) => {
  label = 'min'
  return [label, value]
}

/**
 * @param {Array} props 
 * @param {String} day
 * @param {Integer} duration  
 */
export function AverageChart(props) {
    return (
      <ResponsiveContainer position="relative" width="99%" height="100%">           
        <LineChart
          width="100%"
          height="100%"
          data={props.average}
          style={{ background: 'red', borderRadius: '5px' }}
          margin={{ top: 0, right: 12, left: 12, bottom: 0 }}
        >
           <text
           x="10%"
           y="10%"
           dominantBaseline="hanging"
          fontWeight={500}
          fontSize={'15px'}
          fill={'white'}
          opacity={0.5}
        >
          Durée moyenne des
        </text>
        <text
          x="10%"
          y="20%"
          dominantBaseline="hanging"
          fontWeight={500}
          fontSize={'15px'}
          fill={'white'}
          opacity={0.5}
        >
          sessions
        </text> 
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          <XAxis 
          dy={10}
          tickLine={false}
          axisLine={false}
          stroke={'#FFF'}
          dataKey="day"
          tick={{
                  fontSize: 12,
                  fontWeight: 500,}}
          />
          <YAxis
           domain={[22, 122]}
           hide={true} />
          <Tooltip
      
          separator=" "
          itemStyle={{
            margin: 0,
            padding: 0,
            background: '#FFF',
            color: '#000',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '24px',
          }}
          wrapperStyle={{ outline: "none" }}
          labelStyle={{
            display: 'none',
          }}
          formatter={customizeTooltip}
          cursor={{
            stroke: 'rgba(0, 0, 0, 0.1)',
            strokeWidth: 50,
        }}
        />
          <Line
            type="natural"
            dataKey="duration"
            stroke="rgba(255, 255, 255, 0.6)"
            activeDot={{
              stroke: 'rgba(255,255,255, 0.3)',
              strokeWidth: 10,
              r: 5,
            }}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    )
    }
    