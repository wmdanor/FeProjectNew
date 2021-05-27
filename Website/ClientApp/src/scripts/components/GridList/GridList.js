import PropTypes from 'prop-types';
import * as React from 'react';
import SortBar from './SortBar';
import SearchBar from './SearchBar';
import Paginator from './Paginator';
import Product from './Product';

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
};

// const productStyle = {
//   padding: '5px',
//   border: '1px solid black',
// };
//
// function Product({ product }) {
//   return (
//     <div key={product.id} style={productStyle}>
//       <p>Id - {product.id}</p>
//       <p>Name - {product.name}</p>
//       <p>Price - {product.price}</p>
//     </div>
//   );
// }
//
// Product.propTypes = {
//   product: PropTypes.object.isRequired,
// };

class GridList extends React.Component {
  constructor(props) {
    super(props);

    this.initialData = [];

    this.state = {
      afterFilter: this.initialData,
      afterSearch: this.initialData,
      afterSort: this.initialData,
      afterPaginate: [],
    };

    this.setDataBound = this.setData.bind(this);
    this.updateDataBound = this.updateData.bind(this);
    this.setCurrentPageBound = this.setCurrentPage.bind(this);
  }

  componentDidMount() {
    fetch(this.props.dataUrl)
      .then((res) => res.json())
      .then((data) => {
        this.initialData = data.data;
        this.setState({
          afterFilter: this.initialData,
          afterSearch: this.initialData,
          afterSort: this.initialData,
          afterPaginate: [],
        });
      });
  }

  updateData(state) {
    this.setState(state);
  }

  setData(data) {
    this.setState({
      data,
    });
  }

  setCurrentPage(data) {
    this.setState({
      currentPage: data,
    });
  }

  createItemsList(items) {
    if (items.length) {
      return items.map((item) => <this.props.itemComponent product={item} />);
    }
    const style = {
      gridColumn: '1/5',
      border: '1px solid black',
      padding: '10px',
      margin: '5px',
    };
    return <div style={style}>Empty</div>;
  }

  render() {
    const { sortProps, searchProps } = this.props;
    const s = JSON.stringify(this.state, null, ' ');

    return (
      <div>
        <SearchBar
          initialData={this.state.afterFilter}
          update={this.updateDataBound}
          searchProps={searchProps}
        />
        <SortBar
          data={this.state.afterSearch}
          update={this.updateDataBound}
          sortProps={sortProps}
        />
        <div style={gridStyle}>
          {this.createItemsList(this.state.afterPaginate)}
        </div>
        <Paginator
          update={this.updateDataBound}
          data={this.state.afterSort}
          pageSize={2}
        />
        <div style={{ whiteSpace: 'pre-wrap' }}>{s}</div>
      </div>
    );
  }
}

GridList.propTypes = {
  dataUrl: PropTypes.string.isRequired,
  // data: PropTypes.array.isRequired,
  sortProps: PropTypes.object.isRequired,
  searchProps: PropTypes.array.isRequired,
  // itemComponent: PropTypes.elementType.isRequired,
};

export { GridList, Product };
