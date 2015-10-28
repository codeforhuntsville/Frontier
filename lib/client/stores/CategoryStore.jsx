'use strict';

import alt from '../alt.js';
import CategoryActions from '../actions/CategoryActions.jsx';

class CategoryStore {

  constructor() {
    this.categories = [
      { category: 'restaurants', iconClass: 'fa-cutlery', selected: false },
      { category: 'wifi', iconClass: 'fa-wifi', selected: false },
      { category: 'hotels', iconClass: 'fa-hotel', selected: false },
      { category: 'bars', iconClass: 'fa-beer', selected: false }
    ];

    this.bindListeners({
      handleCategoryUpdate: CategoryActions.UPDATE_CATEGORY
    });

    this.exportPublicMethods({
      getAllCategories: this.getAllCategories
    })
  }

  handleCategoryUpdate(updated) {
    let category = this.categories.find(c => c.category === updated.category);

    if (category) {
      category.selected = updated.selected;
    }
  }

  getAllCategories() {
    return this.getState().categories;
  }
}

export default alt.createStore(CategoryStore, 'CategoryStore');
