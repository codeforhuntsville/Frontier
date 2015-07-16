'use strict';
import React from 'react';
import Location from './Location.jsx';
import CategoryList from './CategoryList.jsx';
import Slider from './Slider.jsx';
import CategoryStore from '../stores/CategoryStore.jsx';
import CategoryActions from '../actions/CategoryActions.jsx';

export default class HomeView extends React.Component {

  static onCategoryClick(category) {
    category.selected = !category.selected;
    CategoryActions.updateCategory(category);
  }

  constructor(...args) {
    super(...args);

    this.state = {
      categories: CategoryStore.getAllCategories()
    };

    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.setState({
      categories: CategoryStore.getAllCategories()
    });
  }
  componentDidMount() {
    CategoryStore.listen(this._onChange);
  }

  componentWillUnmount() {
    CategoryStore.unlisten(this._onChange);
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h2>Frontier</h2>
            <p>Discover places and events nearby</p>
            <div className="row">
              <Location />
            </div>
            <div className="row">
              <CategoryList categories={ categories } categoryClick={ HomeView.onCategoryClick } />
            </div>
            <div className="row">
              <Slider minValue={ 0 } maxValue={ 20 } stepSize={ 5 } units="miles" />
            </div>
            <div className="row">
              <div className="col-xs-12">
                <button className="btn btn-primary btn-block">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
