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

// DTO de fornecedor
export interface Supplier {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    sale_price: number;
    cost_price: number;
    description: string;
    suppliers: Array<Supplier>;
    brand: Brand;
    clothing_type: ClothingType;
    clothing_size: ClothingSize;
    acquisition_date: string | Date | null;
}

export interface ProductCreateDTO {
    name: string;
    clothing_size_id: number;
    clothing_type_id: number;
    brand_id: number;
    supplier_id: number;
    description: string;
    acquisition_date: Date | string | null;
    sale_price: number;
    cost_price: number;
}



export const tableHeaders = [
    '#',
    'Nome',
    'Fornecedor',
    'Marca',
    'Tipo',
    'Ações',
];