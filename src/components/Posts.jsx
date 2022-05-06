import React, { Component } from "react";
import _ from "lodash";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pagination from "./common/Pagination";
import Spinner from "./common/Spinner";
import PostsTable from "./PostsTable";
import SearchBox from "./SearchBox";
import { getPosts } from "../services/postsService";
import { paginate } from "../utils/paginate";
import  "../styles/posts.css";

class Posts extends Component {
  state = {
    posts: [],
    currentPage: 1,
    pageSize: 20,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
    isLoading: true
  };

  async componentDidMount() {
    const { data: posts } = await getPosts();
    this.setState({ posts, isLoading: false });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      posts: allPosts,
    } = this.state;

    let filtered = allPosts;
    if (searchQuery)
      filtered = allPosts.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const posts = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: posts };
  };

  render() {

    const isLoading = this.state.isLoading;
    if (isLoading) return (
      <div>
          <Breadcrumb>
            <Breadcrumb.Item active>Posts</Breadcrumb.Item>
          </Breadcrumb>
          <Spinner/>
      </div>
    )

    const { length: count } = this.state.posts;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>There are no posts in the database</p>;
    const { totalCount, data: posts } = this.getPagedData();

    return (
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item active>Posts</Breadcrumb.Item>
        </Breadcrumb>
        <div className="row">
          <div className="col-sm-12">
            <p className="totalCount">Showing {totalCount} posts in the database</p>
            <div className="row newPost-search">
                <div className="search">
                    <SearchBox value={searchQuery} onChange={this.handleSearch} />
                </div>
            </div>
            <PostsTable
              posts={posts}
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

export default Posts;
