import ApplicationOverTime from "../components/ApplicationOverTime.js"
import SummaryCard from "../components/SummaryCard.js"

const Home: React.FC = () => {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-1/2 bg-amber-300 rounded overflow-hidden">
          <img
            src="https://dotcommagazine.com/wp-content/uploads/2023/06/Programming-696x446.jpg"
            className="object-contain w-full"
          />
        </div>
        <div className="w-1/2 grid grid-cols-4 gap-4 rounded">
          <div className="col-span-2">
            <SummaryCard count={99} label="总投递数" bgColor="lightgray" />
          </div>
          <SummaryCard count={99} label="今日投递数" bgColor="lightyellow" />
          <SummaryCard count={99} label="等待中" bgColor="skyblue" />
          <SummaryCard count={99} label="被拒绝" bgColor="#ff1200" />
          <SummaryCard count={99} label="面试中" bgColor="orange" />
          <div className="col-span-2">
            <SummaryCard count={99} label="成功" bgColor="lightgreen" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <ApplicationOverTime />
      </div>
    </>
  )
}

export default Home
