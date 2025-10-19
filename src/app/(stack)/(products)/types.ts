export interface ClothingSize {
    id: number;
    size: string;
}

export interface ClothingType {
    id: number;
    type: string;
}

export interface Brand {
    id: number;
    name: string;
}

export interface ProductSupplier {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    sale_price: number;
    cost_price: number;
    description: string;
    suppliers: Array<ProductSupplier>;
    brand: Brand;
    clothing_type: ClothingType;
    clothing_size: ClothingSize;
}