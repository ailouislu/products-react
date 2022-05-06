import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from "./common/Spinner";
import ColoredLine from "./common/ColoredLine";
import Button from 'react-bootstrap/Button'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { getPost } from "../services/postsService";
import { getComments } from "../services/commentsService";
import  "../styles/comments.css";

class Comments extends Component {
    state = {
      comments: [],
      post: [],
      totalCount: 0,
      isLoading: true
    };
  
    async componentDidMount() {
      const id = this.props.match.params.id;
      const { data: post } = await getPost(id);
      const { data: comments } = await getComments(id);
      this.setState({ comments, post, totalCount:comments.length, isLoading: false });
    }

    handelBackToPosts = () =>{
        window.history.back(-1);
    }

    render() {

        if (this.state.isLoading) return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={this.handelBackToPosts}>Posts</Breadcrumb.Item>
                    <Breadcrumb.Item active>Comments</Breadcrumb.Item>
                </Breadcrumb>
                <Spinner />
            </div>
        )

        const count = this.state.totalCount;
        if (count === 0) return <p><strong>There are no comments about this post:</strong></p>;

        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={this.handelBackToPosts}>Posts</Breadcrumb.Item>
                    <Breadcrumb.Item active>Comments</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col sm={3}>
                    </Col>
                    <Col sm={9}>
                        <div className="post_title">
                            <h5 className="post_textStyles">
                                <strong>Post: </strong>
                                <label className="post_textStyles">{this.state.post.title}</label>
                            </h5>
                            <p className="post_body post_textStyles">
                                {this.state.post.body}
                            </p>
                            <p className="post_userId">
                                <strong>UserId: </strong>
                                {this.state.post.userId}
                            </p>
                        </div>
                        <div>
                            <p className="totalCount"><strong>Showing {this.state.totalCount} comments about this post:</strong></p>
                        </div>
                        <ColoredLine color="black" />
                        <div>
                                {
                                    this.state.comments.map((cont, index) =>{
                                    return (
                                        <div key={cont.id} className="comment">
                                            <div className="comment_email">
                                                <strong>Email: </strong>
                                                <label className="comment_textStyles">{cont.email}</label>
                                            </div>
                                            <h5>
                                                <div className="comment_title comment_textStyles">{cont.name}</div>
                                            </h5>
                                            <label>
                                                <div className="comment_body comment_textStyles">{cont.body}</div>
                                            </label>
                                            <ColoredLine color="black" />
                                        </div>
                                    )})
                                }
                        </div>
                        <div className="comment_button">
                            <Button className="comment_button" variant="primary" onClick={this.handelBackToPosts}>Back</Button>{''}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Comments

