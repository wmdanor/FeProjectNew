import * as React from 'react';
import { GridList, Product } from '../GridList/GridList';

const sortProps = {
  id: 'Default',
  name: 'Name',
  price: 'Price',
};

const searchProps = ['name'];

// const filterConfig = [
//   {
//     propName: 'name',
//     filterType: 1,
//   },
// ];

function Main() {
  return (
    <GridList
      dataUrl="/api/products"
      sortProps={sortProps}
      searchProps={searchProps}
      itemComponent={Product}
    />
  );
}

export default Main;
