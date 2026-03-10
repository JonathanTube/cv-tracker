import { MenuItem, MenuItemProps } from "./MenuItem.js"

export default function Menu() {
  const menus: Array<MenuItemProps> = [
    {
      id: 1,
      href: "#",
      icon: "fa-dashboard",
      label: "仪表盘",
    },
    {
      id: 2,
      href: "#",
      icon: "fa-briefcase",
      label: "所有申请",
    },
    {
      id: 3,
      href: "#",
      icon: "fa-calendar",
      label: "面试安排",
    },
    {
      id: 4,
      href: "#",
      icon: "fa-bell",
      label: "提醒",
      badge: 3,
    },
    {
      id: 5,
      href: "#",
      icon: "fa-line-chart",
      label: "统计分析",
    },
    {
      id: 6,
      href: "#",
      icon: "fa-spider",
      label: "爬取岗位",
    },
    {
      id: 7,
      href: "#",
      icon: "fa-cog",
      label: "设置",
    },
  ]
  return (
    <aside className="w-full md:w-64 bg-white pixel-card p-4">
      <nav>
        <ul className="space-y-2">
          {menus.map((menu) => (
            <li key={menu.id}>
              <MenuItem {...menu} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">应用统计</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>已投递</span>
              <span>24</span>
            </div>
            <div className="w-full bg-gray-200 h-4 border-2 border-black">
              <div className="bg-primary h-full" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>已查看</span>
              <span>18</span>
            </div>
            <div className="w-full bg-gray-200 h-4 border-2 border-black">
              <div
                className="bg-secondary h-full"
                style={{ width: "60%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>面试邀请</span>
              <span>8</span>
            </div>
            <div className="w-full bg-gray-200 h-4 border-2 border-black">
              <div className="bg-warning h-full" style={{ width: "27%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>录用通知</span>
              <span>2</span>
            </div>
            <div className="w-full bg-gray-200 h-4 border-2 border-black">
              <div className="bg-success h-full" style={{ width: "7%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
