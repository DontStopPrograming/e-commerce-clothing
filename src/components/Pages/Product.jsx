import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Breadcrums/Breadcrum';
import { DescriptionBox } from '../DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../RelatedProdructs/RelatedProdructs';
import { ProductDisplay } from '../ProductDisplay/ProductDisplay';

export const Product = () => {
    const { all_product } = useContext(ShopContext)
    const { productId } = useParams()
    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div className='' >
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
};
