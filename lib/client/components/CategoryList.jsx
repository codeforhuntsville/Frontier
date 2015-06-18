'use strict';

import React from 'react';
import CategoryButton from './CategoryButton.jsx';

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-xs-12">
        <h3>Categories</h3>

        <div id="categories" style={{ width: "100%" }}>{
          this.props.categories.map(c => {
            return <CategoryButton key={ c.iconClass } iconClass={ c.iconClass }/>
          })
        }
        </div>
      </div>
    );
  }
}

