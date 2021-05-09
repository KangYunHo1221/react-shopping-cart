import { useEffect } from 'react';
import ProductList from '../../components/ProductList';
import ReactShoppingCartTemplate from '../../components/shared/ReactShoppingCartTemplate';
import useFetch from '../../hooks/useFetch';
import { requestProductList } from '../../service/request';
import { Product } from '../../types';

const ProductListPage = () => {
  const productList = useFetch(() => requestProductList());

  useEffect(() => {
    console.log(productList.data);
  }, [productList.data]);

  return (
    <ReactShoppingCartTemplate>
      {productList.isLoading ? (
        <div>로딩중...</div>
      ) : (
        <ProductList products={productList.data as Product[]} />
      )}
    </ReactShoppingCartTemplate>
  );
};

export default ProductListPage;
