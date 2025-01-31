
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';

const ProductDisplay = ({ category }) => {

    const { all_products } = useContext(ShopContext);
  return (
    <div id='ProductDisplay' className='max-padd-container pt-8 pb-16 xl:pb-28'> 
        <h2 className='bold-32'>Our Great Products</h2>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-12'>
            {all_products.map((Product) => {
                if(category === "All" || category===Product.category){
                    return(
                        <div key={Product._id}>
                            <Item product={Product} />
                        </div>
                    );
                }
            })}
        </div>
    </div>
  );
};

export default ProductDisplay