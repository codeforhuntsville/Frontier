'use strict';

import React from 'react';
import { Component, PropTypes } from 'react';
import CategoryButton from './CategoryButton.jsx';

export default class CategoryList extends Component {

  constructor(...args) {
    super(...args);
  }

  render() {
    const { categories, categoryClick } = this.props;
    return (
      <div className="col-xs-12">
        <h3>Categories</h3>
        <div id="categories" style={{ width: "100%" }}>
        {
          categories.map(c => {
            return <CategoryButton
              key={ c.category }
              category={ c }
              onClick={ categoryClick }
            />
          })
        }
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryClick: PropTypes.func.isRequired
};
