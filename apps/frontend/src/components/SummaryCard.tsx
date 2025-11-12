interface SummaryCardProps {
  count: number
  label: string
  bgColor: string
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  count,
  label,
  bgColor = "white",
}) => {
  return (
    <div
      className="w-full h-full rounded p-2 flex justify-between hover:opacity-90 cursor-pointer"
      style={{ backgroundColor: bgColor }}>
      <span className="font-light text-4xl">{count}</span>
      <span className="place-content-end">{label}</span>
    </div>
  )
}

export default SummaryCard
