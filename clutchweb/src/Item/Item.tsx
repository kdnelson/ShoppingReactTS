import React from 'react';
import Button from '@material-ui/core/Button';
import { CartItemType } from '../App';
import { Wrapper } from './Item.style';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart}) => (
    <Wrapper>
        <img src={ item.image } alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        {/* Inline arrow function to call and wait for operation to complete
        You can create the same thing up in the component */}
        <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
);

export default Item;