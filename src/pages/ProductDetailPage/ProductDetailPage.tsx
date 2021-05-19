import * as Styled from './ProductDetailPage.styles';
import { useState } from 'react';
import Button from '../../components/commons/Button/Button';
import { COLORS, PATH } from '../../constants';
import Loading from '../../components/commons/Loading/Loading';
import NotFound from '../../components/commons/NotFound/NotFound';
import { getMoneyString } from '../../utils/format';
import Tooltip from '../../components/commons/Tooltip/Tooltip';
import { useHistory } from 'react-router';
import useProductDetail from '../../hooks/productDetail';
import { requestAddProductToCart } from '../../apis';
import { alert } from '../../utils/alert';

const ProductDetailPage = () => {
  const history = useHistory();
  const [isToolTipShown, setToolTipShown] = useState(false);
  const { product, loading, responseOK } = useProductDetail();

  const onCartButtonClick = async () => {
    try {
      await requestAddProductToCart(product.id);
      setToolTipShown(true);
    } catch (error) {
      alert('상품을 장바구니에 담지 못했습니다');
      console.error(error);
    }
  };

  const onTooltipButtonClick = () => {
    history.push(PATH.CART);
  };

  if (loading) {
    return (
      <Styled.ProductDetailPage>
        <Loading />
      </Styled.ProductDetailPage>
    );
  }

  if (!loading && !responseOK) {
    return (
      <Styled.ProductDetailPage>
        <NotFound message="상품을 찾을 수 없습니다." />
      </Styled.ProductDetailPage>
    );
  }

  return (
    <Styled.ProductDetailPage>
      <Styled.ProductWrapper>
        <Styled.ProductImage src={product.thumbnail} />
        <Styled.ProductNameWrapper>
          <Styled.ProductName>{product.name}</Styled.ProductName>
        </Styled.ProductNameWrapper>
        <Styled.ProductPriceWrapper>
          <Styled.PriceLabel>금액</Styled.PriceLabel>
          <Styled.ProductPrice>{getMoneyString(product.price)}원</Styled.ProductPrice>
        </Styled.ProductPriceWrapper>
        <Styled.ButtonWrapper>
          {isToolTipShown && (
            <Styled.TooltipWrapper>
              <Tooltip
                setTooltipShown={setToolTipShown}
                timeOut={3000}
                button={
                  <Button size="SM" onClick={onTooltipButtonClick}>
                    장바구니 가기
                  </Button>
                }
              >
                상품을 장바구니에 담았습니다.
              </Tooltip>
            </Styled.TooltipWrapper>
          )}
          <Button onClick={onCartButtonClick} size="LG" backgroundColor={COLORS.BROWN_500}>
            장바구니 담기
          </Button>
        </Styled.ButtonWrapper>
      </Styled.ProductWrapper>
    </Styled.ProductDetailPage>
  );
};

export default ProductDetailPage;