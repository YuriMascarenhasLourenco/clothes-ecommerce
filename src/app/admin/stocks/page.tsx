'use client';
import { api } from "@/app/services/api";
import { productType } from "@/types/productType";
import { useEffect, useState } from "react";

export default function Stocks() {
    const [products, setProducts] = useState<productType[]>([]);
    const [editingRow, setEditingRow] = useState<number | null>(null); 
    const [editedProduct, setEditedProduct] = useState<productType | null>(null); 
    const getStocks = async () => {
        try {
            const stocks = await api.get<productType[]>('/product');
            setProducts(stocks.data);
        } catch (err) {
            console.error('Erro ao buscar produtos:', err);
        }
    };

    const handleEdit = (product: productType) => {
        setEditingRow(product.id); // Define a linha sendo editada
        setEditedProduct({ ...product }); // Copia os dados do produto para edição
    };

    const handleConfirm = async () => {
        if (editedProduct) {
            try {
                // Atualiza o backend com os dados editados
                await api.put(`/product/${editedProduct.id}`, editedProduct);

                // Atualiza o estado local com os dados editados
                setProducts((prevProducts) =>
                    prevProducts.map((product) =>
                        product.id === editedProduct.id ? editedProduct : product
                    )
                );

                // Sai do modo de edição
                setEditingRow(null);
                setEditedProduct(null);
            } catch (err) {
                console.error('Erro ao atualizar produto:', err);
            }
        }
    };

    const handleInputChange = (field: keyof productType, value: string | number) => {
        if (editedProduct) {
            setEditedProduct({ ...editedProduct, [field]: value });
        }
    };

    useEffect(() => {
        getStocks();
    }, []);

    return (
        <div className="bg-white w-screen h-screen">
            <h1 className="text-2xl mb-4 text-center mt-3 font-bold">Stocks</h1>
            <div className="flex flex-col items-center">
                {/* Cabeçalho das colunas */}
                <div className="grid grid-cols-3 gap-4 w-2/5 text-center font-bold border-b mt-6 pb-2 bg-gray-200 text-black">
                    <div>Name</div>
                    <div>Price</div>
                    <div>Stock</div>
                </div>
                {/* Linhas dos produtos */}
                {products.map((item) => (
                    <div
                        key={item.id}
                        className={`grid grid-cols-3 gap-4 w-2/5 text-center py-2 border-b ${
                            editingRow === item.id ? 'bg-yellow-100' : ''
                        }`}
                    >
                        {editingRow === item.id ? (
                            <>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded px-2 py-1"
                                    value={editedProduct?.name || ''}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                />
                                <input
                                    type="number"
                                    className="border border-gray-300 rounded px-2 py-1"
                                    value={editedProduct?.price || ''}
                                    onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                                />
                                <input
                                    type="number"
                                    className="border border-gray-300 rounded px-2 py-1"
                                    value={editedProduct?.stock || ''}
                                    onChange={(e) => handleInputChange('stock', parseInt(e.target.value))}
                                />
                            </>
                        ) : (
                            <>
                                <div>{item.name}</div>
                                <div>${item.price}</div>
                                <div>{item.stock}</div>
                            </>
                        )}
                        <div className="col-span-3 flex justify-end gap-2 mt-2">
                            {editingRow === item.id ? (
                                <button
                                    onClick={handleConfirm}
                                    className="bg-green-500 text-white px-4 py-1 rounded"
                                >
                                    Confirm
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="bg-blue-500 text-white px-4 py-1 rounded"
                                >
                                    Edit
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}