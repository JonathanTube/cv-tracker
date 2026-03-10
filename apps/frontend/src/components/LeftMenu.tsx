export default function LeftMenu() {
    return (
        <aside className="w-full md:w-64 bg-white pixel-card p-4">
            <nav>
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 bg-primary text-white rounded">
                            <i className="fa fa-dashboard w-6"></i>
                            <span>仪表盘</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                            <i className="fa fa-briefcase w-6"></i>
                            <span>所有申请</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                            <i className="fa fa-calendar w-6"></i>
                            <span>面试安排</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                            <i className="fa fa-bell w-6"></i>
                            <span>提醒</span>
                            <span className="bg-accent text-white text-xs px-2 py-1 rounded-full ml-auto">3</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                            <i className="fa fa-line-chart w-6"></i>
                            <span>统计分析</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded crawl-jobs-menu">
                            <i className="fa fa-spider w-6"></i>
                            <span>爬取岗位</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                            <i className="fa fa-cog w-6"></i>
                            <span>设置</span>
                        </a>
                    </li>
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
                            <div className="bg-secondary h-full" style={{ width: "60%" }}></div>
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