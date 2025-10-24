import api from "../../../../api";
import { Brand, ClothingSize, ClothingType, Product, ProductCreateDTO, Supplier } from "./types";

function productToBody(product: Omit<Product, 'id'>) {
  return {
    name: product.name,
    sale_price: product.sale_price,
    cost_price: product.cost_price,
    description: product.description,
    brand_id: (product as any).brand?.id ?? null,
    clothing_type_id: (product as any).clothing_type?.id ?? null,
    clothing_size_id: (product as any).clothing_size?.id ?? null,
  };
}

export const getProducts = async (): Promise<Array<Product>> => {
  try {
    const res = await api.get('/products');
    return (res.data || []) as Array<Product>;
  } catch (error: any) {
    throw error;
  }
};

export const createProduct = async (product: ProductCreateDTO) => {
  try {
    const res = await api.post('/products', product);
    return { success: true, product: res.data as Product };
  } catch (error: any) {
    return {
      success: false,
      error: error?.response?.data ?? error.message ?? error,
    };
  }
};

export const updateProduct = async (
  id: number,
  product: Omit<ProductCreateDTO, 'id'>
) => {
  try {
    const res = await api.put(`/products/${id}`, product);
    return { success: true, product: res.data as Product };
  } catch (error: any) {
    return {
      success: false,
      error: error?.response?.data ?? error.message ?? error,
    };
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const res = await api.delete(`/products/${id}`);
    if (res.status === 204 || res.status === 200) return { success: true };
    return { success: false, error: res.data ?? 'Unexpected response' };
  } catch (error: any) {
    return {
      success: false,
      error: error?.response?.data ?? error.message ?? error,
    };
  }
};

export const getProductById = async (id: number) => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data as Product;
  } catch (error: any) {
    if (error?.response?.status === 404) return null;
    throw error;
  }
};

export const getBrands = async (): Promise<
  Array<Brand>
> => {
  try {
    const res = await api.get('/brands');
    return (res.data || []) as Array<Brand>;
  } catch (error: any) {
    throw error;
  }
};

export const getClothingTypes = async (): Promise<
  Array<ClothingType>
> => {
  try {
    const res = await api.get('/clothing_types');
    const raw: Array<any> = res.data || [];
    return raw.map((r) => ({ id: r.id, type: r.types ?? r.type }));
  } catch (error: any) {
    throw error;
  }
};

export const getClothingSizes = async (): Promise<
  Array<ClothingSize>
> => {
  try {
    const res = await api.get('/clothing_sizes');
    return (res.data || []) as Array<ClothingSize>;
  } catch (error: any) {
    throw error;
  }
};

export const getSuppliers = async (): Promise<
  Array<Supplier>
> => {
  try {
    const res = await api.get('/suppliers');
    return (res.data || []) as Array<Supplier>;
  } catch (error: any) {
    throw error;
  }
};