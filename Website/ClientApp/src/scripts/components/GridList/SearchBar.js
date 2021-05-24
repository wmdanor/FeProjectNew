import PropTypes from 'prop-types';
import * as React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  find(query) {
    this.setState({
      query,
    });

    const data = this.props.initialData;
    const { searchProps, update } = this.props;

    const filter = data.filter((item) => {
      for (let i = 0; i < searchProps.length; i += 1) {
        if (item[searchProps[i]].toLowerCase().startsWith(query)) {
          return true;
        }
      }
      return false;
    });

    update(filter);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          placeholder="Enter search query..."
          onChange={(e) => this.find(e.target.value)}
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
