'use client';

export default function Dashboard() {
    return (
        <div className="flex h-screen w-full bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gray-900 text-gray-300 p-6">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <nav className="space-y-4">
                    <a href="/admin/profile" className="block p-2 rounded-md hover:bg-gray-700">
                        Profile
                    </a>
                    <a href="/admin/stocks" className="block p-2 rounded-md hover:bg-gray-700">
                        Stocks
                    </a>
                    <a href="/admin/orders" className="block p-2 rounded-md hover:bg-gray-700">
                        Orders
                    </a>
                    <a href="/admin/settings" className="block p-2 rounded-md hover:bg-gray-700">
                        Settings
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <h1 className="text-3xl font-bold mb-6">Profile</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Update Your Profile</h2>
                    <form className="flex flex-col space-y-4 w-full max-w-md">
                        <input
                            type="text"
                            placeholder="Username"
                            className="p-2 rounded-md bg-gray-100 border border-gray-300"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 rounded-md bg-gray-100 border border-gray-300"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2 rounded-md bg-gray-100 border border-gray-300"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}