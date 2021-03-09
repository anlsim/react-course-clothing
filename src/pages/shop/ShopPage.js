import React from 'react';
import SHOP_DATA from '../../redux/shop/ShopData';
import PreviewCollection from '../../components/preview-collection/preview-collection';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollections} from '../../redux/shop/shop.selector';

const ShopPage = ({collections})=> (
    
            <div className='shop-page'>
                    {
                       collections.map(({id, ...otherPreviewProps}) =>(
                          <PreviewCollection key={id} {...otherPreviewProps}/>
                       ))

                    }
            </div>
   
 
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
export default connect(mapStateToProps)(ShopPage);