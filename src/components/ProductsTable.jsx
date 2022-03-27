import React, { Component } from "react";
import Table from "./common/Table";

class ProductsTable extends Component {
  columns = [
    { path: "name", label: "Name" },
    { path: "price", label: "Price" },
    { path: "type", label: "Type" },
  ];


  render() {
    const { products, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={products}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ProductsTable;
