import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/Table";

class PostsTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: post => <Link to={`/comments/${post.id}`}>{post.title}</Link>
    },
    { path: "userId", label: "UserId" },
    { path: "body", label: "Content" },
  ];

  render() {
    const { posts, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={posts}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default PostsTable;
