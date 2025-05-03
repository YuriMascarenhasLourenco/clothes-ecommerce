import { Aside } from "@/app/components/aside";

export default function settings() {
    return (
        <div className="flex h-screen w-screen bg-gray-100">
            <Aside />
            <div className="flex flex-1 justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center flex-col w-1/4">
                    <h2 className="text-xl font-bold mb-4">Delete account</h2>
                    <p className="text-red-500 text-center">
                        Are you sure you want to delete your account? This action cannot be undone.
                    </p>
                    <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200 mt-4">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
}