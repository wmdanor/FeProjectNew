import PropTypes from 'prop-types';
import * as React from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { CartActions } from '../../actions';
import { GridList } from '../GridList/GridList';

function AppGridList({
  cartProducts,
  dataUrl,
  incrementProduct,
  itemComponent,
  searchProps,
  sortProps,
}) {
  return (
    <GridList
      dataUrl={dataUrl}
      sortProps={sortProps}
      searchProps={searchProps}
      cartProducts={cartProducts}
      incrementProduct={incrementProduct}
      itemComponent={itemComponent}
    />
  );
}

AppGridList.propTypes = {
  dataUrl: PropTypes.string.isRequired,
  // data: PropTypes.array.isRequired,
  sortProps: PropTypes.object.isRequired,
  searchProps: PropTypes.array.isRequired,
  itemComponent: PropTypes.elementType.isRequired,
  cartProducts: PropTypes.instanceOf(Immutable.List),
  incrementProduct: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cartProducts: state.cart,
});

const usedActions = {
  incrementProduct: CartActions.increase,
};

export default connect(mapStateToProps, usedActions)(AppGridList);
