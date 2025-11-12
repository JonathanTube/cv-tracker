import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  {
    name: "Page A",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: "Page C",
    uv: 320,
    pv: 1398,
    amt: 2400,
  },
  {
    name: "Page D",
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: "Page E",
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: "Page F",
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
]

const ApplicationOverTime: React.FC = () => {
  return (
    <>
      <LineChart
        className="border rounded"
        style={{ width: "100%", aspectRatio: 5 }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 5,
          left: 0,
        }}>
        <CartesianGrid stroke="#aaa" strokeDasharray="2 2" />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="purple"
          strokeWidth={2}
          name="Applications Over Time"
        />
        <XAxis dataKey="name" />
        <YAxis
          width="auto"
          label={{ value: "", position: "insideLeft", angle: -90 }}
        />
        <Legend align="center" />
        <Tooltip />
      </LineChart>
    </>
  )
}

export default ApplicationOverTime
