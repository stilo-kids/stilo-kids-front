import api from "../../../../api";
import { Product } from "./types";

export const getProducts = async (): Promise<Array<Product>> => {
    // Temporário, substituir pelo fetch real
    const products: Array<Product> = [
        {
            id: 1,
            name: "Camiseta Infantil",
            sale_price: 100,
            cost_price: 80,
            description: "Camiseta Infantil",
            suppliers: [
                {
                    id: 1,
                    name: "Fornecedor A"
                }
            ],
            brand: {
                id: 1,
                name: "Marca A"
            },
            clothing_type: {
                id: 1,
                type: "Camiseta"
            },
            clothing_size: {
                id: 1,
                size: "M"
            }
        },
        {
            id: 2,
            name: "Calça Infantil",
            sale_price: 150,
            cost_price: 120,
            description: "Calça Infantil",
            suppliers: [
                {
                    id: 2,
                    name: "Fornecedor B"
                },
                {
                    id: 3,
                    name: "Fornecedor C"
                },
            ],
            brand: {
                id: 2,
                name: "Marca B"
            },
            clothing_type: {
                id: 2,
                type: "Calça"
            },
            clothing_size: {
                id: 2,
                size: "G"
            }
        }
    ];
    return products;
};

export const createProduct = async (product: Omit<Product, 'id'>) => {
    // Implementar chamada à API para criar produto
    return { success: true };
};

export const updateProduct = async (id: number, product: Omit<Product, 'id'>) => {
    // Implementar chamada à API para atualizar produto
    return { success: true };
};

export const deleteProduct = async (id: number) => {
    // Implementar chamada à API para deletar produto
    return { success: true };
};

export const getProductById = async (id: number) => {
    // Implementar chamada à API para obter produto por ID
    const product: Product = {
        id: 1,
        name: "Camiseta Infantil",
        sale_price: 100,
        cost_price: 80,
        description: "Camiseta Infantil",
        suppliers: [
            {
                id: 1,
                name: "Fornecedor A"
            }
        ],
        brand: {
            id: 1,
            name: "Marca A"
        },
        clothing_type: {
            id: 1,
            type: "Camiseta"
        },
        clothing_size: {
            id: 1,
            size: "M"
        }
    };
    return product;
};
