import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 * @param {integer} value
 * @param {string} label
 */
const renderTooltip = (value, label) => {
  label = value > 150 ? 'kCal' : 'kg'
  return [label, value]
}

/**
 * @param {string} value
 */
const renderColorfulLegendText = (value) => {
  return <span style={{ color: '#74798C', paddingLeft: '10px' }}>{value}</span>
}

/**
 * @param {Array} props
 * @param {String} props.day
 * @param {Integer} props.kg
 * @param {integer} props.kCal
 * @returns
 */
export function ActivityChart(props) {
  return (
    <ResponsiveContainer width="99%" height="100%">
      <BarChart
        data={props.activity}
        margin={{
          top: 112.5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <text x={32} y={44} fontWeight={500}>
          Activité quotidienne
        </text>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          fontWeight="500"
          fontSize="14px"
        />
        <YAxis
          dataKey="kg"
          domain={[0, 120]}
          orientation="right"
          axisLine={false}
          tickSize={0}
          allowDecimals={false}
          fontWeight="500"
          fontSize="14px"
          tickMargin={20}
        />
        <YAxis dataKey="kCal" domain={[0, 100]} hide={true} yAxisId="kCal" />
        <Tooltip
          offset={50}
          separator=" "
          itemStyle={{
            background: '#E60000',
            margin: 0,
            padding: 0,
            color: '#FFF',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '24px',
          }}
          wrapperStyle={{
            background: '#E60000',
            margin: 0,
            padding: 0,
          }}
          contentStyle={{
            background: '#E60000',
            margin: 0,
            padding: 10,
            border: 'none',
          }}
          labelStyle={{
            display: 'none',
          }}
          formatter={renderTooltip}
        />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{
            top: '30px',
            right: '24px',

            fontWeight: '500',
            fontSize: '14px',
          }}
          iconSize="8"
          formatter={renderColorfulLegendText}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kg"
          fill="#282D30"
          barSize={7}
          radius={[5, 5, 0, 0]}
          legendType="circle"
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="kCal"
          fill="#E60000"
          barSize={7}
          radius={[5, 5, 0, 0]}
          legendType="circle"
          yAxisId="kCal"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

ActivityChart.propTypes = {
  activity: PropTypes.array,
}
