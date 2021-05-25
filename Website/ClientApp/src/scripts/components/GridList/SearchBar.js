import PropTypes from 'prop-types';
import * as React from 'react';
import getHashCode from '../../getHashCode';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.hashCode = null;

    this.state = {
      query: '',
    };

    this.inputHandler = (e) => {
      const query = e.target.value;
      this.setState({
        query,
      });
      this.find(query);
    };
  }

  find(query) {
    const data = this.props.initialData;
    const { searchProps, update } = this.props;

    const filter = data.filter((item) => {
      for (let i = 0; i < searchProps.length; i += 1) {
        if (item[searchProps[i]].toLowerCase().includes(query)) {
          return true;
        }
      }
      return false;
    });

    const newHashCode = getHashCode(filter);
    if (this.hashCode === newHashCode) {
      return;
    }
    this.hashCode = newHashCode;

    // update(filter);
    update({
      afterSearch: filter,
    });
  }

  componentDidMount() {
    this.find(this.state.query);
  }

  componentDidUpdate() {
    this.find(this.state.query);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          placeholder="Enter search query..."
          onChange={this.inputHandler}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  initialData: PropTypes.array.isRequired,
  // data: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
  searchProps: PropTypes.array.isRequired,
};

export default SearchBar;
