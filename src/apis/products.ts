import axios from 'axios';
import { STATUS_CODE, URL } from '../constants';
import { ProductData } from '../type';

export const requestAddProductToCart = async (productId: string) => {
  const response = await axios.post(URL.CART, {
    product_id: productId,
  });
  if (response.status !== STATUS_CODE.POST_SUCCESS) {
    throw { status: response.status };
  }

  return response;
};

export const requestGetProduct = async (productId: string) => {
  const response = await axios.get<ProductData>(`${URL.PRODUCTS}/${productId}`);
  if (response.status !== STATUS_CODE.GET_SUCCESS) {
    throw { status: response.status };
  }

  return response;
};

export const requestGetProducts = async () => {
  const response = await axios.get<ProductData[]>(URL.PRODUCTS);
  if (response.status !== STATUS_CODE.GET_SUCCESS) {
    throw { status: response.status };
  }

  return response;
};