import * as React from 'react';
import { GridList, Product } from '../GridList/GridList';

const sortProps = {
  id: 'Default',
  name: 'Name',
  price: 'Price',
};

const searchProps = ['name'];

const filterConfig = [
  {
    propName: 'name',
    filterType: 1,
  },
];

function Main() {
  return (
    <GridList
      dataUrl="/api/products"
      // data={products}
      sortProps={sortProps}
      searchProps={searchProps}
      itemComponent={Product}
    />
  );
  // return <div>Main</div>;
}

export default Main;
