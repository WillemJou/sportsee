import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts'
import PropTypes from 'prop-types'

/**
 * @param {Object} props
 * @param {Integer} props.rest
 * @param {Integer} props.score
 * @returns
 */
export function ScoreChart(props) {
  const score = props.score
  const rest = props.rest
  const datas = [
    { name: 'score', value: score },
    { name: 'rest', value: rest },
  ]

  return (
    <ResponsiveContainer width="99%" height="100%">
      <PieChart
        style={{
          background: '#FBFBFB',
          borderRadius: '5px',
        }}
      >
        <text
          x="20"
          y="20"
          textAnchor="start"
          dominantBaseline="hanging"
          style={{
            fill: '#20253A',
            fontWeight: 'bold',
            fontSize: '15px',
          }}
        >
          Score
        </text>
        <Pie
          data={datas}
          isAnimationActive={false}
          legendType="none"
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={70}
          fill="#fff"
        />
        <Pie
          data={datas}
          isAnimationActive={false}
          cx="50%"
          cy="50%"
          dataKey="value"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={-190 + (datas[0].value / 100) * 360}
          cornerRadius={5}
        >
          {datas.map((entry, index) => {
            // generate 2 circles cells, red for the score and grey for the rest
            if (index === 1) {
              return <Cell key={`cell-${index}`} stroke="none" fill="#FBFBFB" />
            }
            return <Cell key={`cell-${index}`} fill="red" />
          })}
        </Pie>
        <text
          x="52%"
          y="40%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontWeight={700}
          fontSize={'26px'}
        >
          {datas[0].value}%
        </text>
        <text
          x="50%"
          y="53%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontWeight={500}
          fontSize={'16px'}
          opacity="0.6"
        >
          de votre
        </text>
        <text
          x="50%"
          y="63%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontWeight={500}
          fontSize={'16px'}
          opacity="0.6"
        >
          objectif
        </text>
      </PieChart>
    </ResponsiveContainer>
  )
}

ScoreChart.propTypes = {
  score: PropTypes.number,
  rest: PropTypes.number,
}
