import PropTypes from 'prop-types';
import * as React from 'react';
import SortBar from './SortBar';
import SearchBar from './SearchBar';

const productStyle = {
  padding: '5px',
  border: '1px solid black',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
};

function Product({ product }) {
  return (
    <div key={product.id} style={productStyle}>
      <p>Id - {product.id}</p>
      <p>Name - {product.name}</p>
      <p>Price - {product.price}</p>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

class GridList extends React.Component {
  constructor(props) {
    super(props);

    this.initialData = this.props.data;

    this.state = {
      data: this.initialData,
    };

    this.setDataBound = this.setData.bind(this);
  }

  updateData(config) {
    this.setState(config);
  }

  setData(data) {
    this.setState({
      data,
    });
  }

  render() {
    const { sortProps, searchProps } = this.props;

    return (
      <div>
        <SearchBar
          initialData={this.initialData}
          update={this.setDataBound}
          searchProps={searchProps}
        />
        <SortBar
          data={this.state.data}
          update={this.setDataBound}
          sortProps={sortProps}
        />
        <div style={gridStyle}>
          {this.state.data.map((item) => (
            <this.props.itemComponent product={item} />
          ))}
        </div>
        <div>1, 2, 3</div>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

GridList.propTypes = {
  data: PropTypes.array.isRequired,
  sortProps: PropTypes.object.isRequired,
  searchProps: PropTypes.array.isRequired,
  // itemComponent: PropTypes.elementType.isRequired,
};

export { GridList, Product };
