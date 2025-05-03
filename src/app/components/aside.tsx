export const Aside = () => {
    return (
        <aside className="w-1/4 bg-gray-900 text-gray-300 p-6">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <nav className="space-y-4">
                    <a href="/admin/profile" className="block p-2 rounded-md hover:bg-gray-700">
                        Profile
                    </a>
                    <a href="/admin/orders" className="block p-2 rounded-md hover:bg-gray-700">
                        Orders
                    </a>
                    <a href="/admin/settings" className="block p-2 rounded-md hover:bg-gray-700">
                        Settings
                    </a>
                </nav>
            </aside>
    );
}