import _ from "lodash";
import React, { Component } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { getAllProductsNZD, getAllProductsUSD, getAllProductsEuro } from "../services/fakeProductService";
import { getTypes } from "../services/fakeTypeService";
import { paginate } from "../utils/paginate";
import ProductsTable from "./ProductsTable";
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
import SearchBox from "./SearchBox";

class Products extends Component {
  state = {
    products: [],
    types: "",
    exchange: "NZD",
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    selectedType: null,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const types = [{ id: "", name: "All Types" }, ...getTypes()];
    this.setState({ types });
    this.handleCurrency();
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleCurrency = () => {
    const param = this.props.match.params.exchange;
    let selectedExchange = param == null ? this.state.exchange: param;
    let products;
    if(selectedExchange === "NZD"){
      products = getAllProductsNZD();
    }
    else if(selectedExchange === "USD"){
      products = getAllProductsUSD();
    }
    else if(selectedExchange === "Euro"){
      products = getAllProductsEuro();
    }

    this.setState({ products, exchange: selectedExchange });
  };

  handleTypeSelect = type => {
    this.setState({ selectedType: type, searchQuery: "", currentPage: 1 });
  };


  handleSearch = query => {
    this.setState({ searchQuery: query, selectedType: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedType,
      searchQuery,
      products: allProducts
    } = this.state;

    let filtered = allProducts;
    if (searchQuery)
      filtered = allProducts.filter(m =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedType && selectedType.name !== "All Types")
      filtered = allProducts.filter(m => m.type === selectedType.name);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const products = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: products };
  };

  render() {

    const { length: count } = this.state.products;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no products in the database.</p>;

    const { totalCount, data: products } = this.getPagedData();

    return (
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item active>Products ({this.state.exchange})</Breadcrumb.Item>
        </Breadcrumb>
      <div className="row">
        <div className="col-sm-4">
          <ListGroup
            items={this.state.types}
            selectedItem={this.state.selectedType}
            onItemSelect={this.handleTypeSelect}
          />
        </div>
        
        <div className="col-sm-8">
          <p>Showing {totalCount} products in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <ProductsTable
            products={products}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
      </div>
    );
  }
}

export default Products;
