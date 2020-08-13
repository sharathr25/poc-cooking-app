import React from 'react';

const DishTitle = ({dish}) => {
    const { title, key } = dish;
    return <h1>{title}</h1>   
}

export default DishTitle;