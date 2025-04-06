export function NewProduct() {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full text-gray-300">
        <div className="flex flex-col justify-center items-center w-80 bg-gray-900 p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">New Product</h1>
            <form className="flex flex-col space-y-4 w-full max-w-sm">
            <input
                type="text"
                placeholder="Product Name"
                className="p-2 rounded-md bg-gray-700 text-gray-300"
                required
            />
            <input
                type="text"
                placeholder="Product Price"
                className="p-2 rounded-md bg-gray-700 text-gray-300"
                required
            />
            <button
                type="submit"
                className="bg-teal-600 text-white p-2 rounded-md"
            >
                Add Product
            </button>
            </form>
        </div>
        </div>
    );
}