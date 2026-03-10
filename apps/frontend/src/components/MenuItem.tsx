interface MenuItemProps {
  id: number
  href: string
  icon: string
  label: string
  className?: string
  badge?: number | string
}

function MenuItem({
  id,
  href,
  icon,
  label,
  className = "hover:bg-gray-100",
  badge,
}: MenuItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center space-x-2 p-2 rounded ${className}`}>
      <i className={`fa ${icon} w-6`}></i>
      <span>{label}</span>
      {badge !== undefined && (
        <span className="bg-accent text-white text-xs px-2 py-1 rounded-full ml-auto">
          {badge}
        </span>
      )}
    </a>
  )
}

export { MenuItem }
export type { MenuItemProps }
