import React, { Component } from 'react';
import getPosts from '../../services/fakePosts';
import BlogLikes from './BlogLikes';
import Pagination from './Pagination';
import { paginate } from '../../utils/paginate';

class BlogPosts extends Component {
    state = {
        blogPosts: [],
        currentPage: 1,
        pageSize: 5
    };

    componentDidMount() {
        const blogPosts = getPosts();
        this.setState({ blogPosts });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    getPageData = () => {
        const { pageSize, currentPage, blogPosts: allBlogPosts } = this.state;
        const blogPosts = paginate(allBlogPosts, currentPage, pageSize);

        return {
            totalCount: allBlogPosts.length,
            data: blogPosts
        };
    };

    render() {
        const { pageSize, currentPage } = this.state;
        const { length: count } = this.state.blogPosts;

        if (count === 0)
            return <p className="card-header card-title">No Available Posts</p>;
        const { totalCount, data } = this.getPageData();
        return (
            <React.Fragment>
                {data.map(blogPosts => (
                    <div className="container-fluid" key={blogPosts.id}>
                        <div className="card shadow-lg bg-light m-2">
                            <article className="p-3">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <a href="/">{blogPosts.postTitle}</a>
                                    </h3>
                                    <span className="card-subtitle">
                                        <span className="fa fa-calendar m-2" />
                                        {blogPosts.postDate}
                                    </span>
                                    <img
                                        className="card-image"
                                        // src={blogPosts.postImageUrl}
                                        alt={blogPosts.postTitle}
                                    />
                                </div>
                                <div className="card-body">
                                    <p className="text">
                                        {blogPosts.postContent}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <ul className="list-inline ">
                                        <li className="list-inline-item">
                                            <span className="fa fa-link m-1">
                                                {'   '}
                                                labels:
                                            </span>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="/">{blogPosts.postTags}</a>
                                        </li>
                                    </ul>
                                    <BlogLikes blogPosts={blogPosts} />
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
                <Pagination
                    itemCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        );
    }
}

export default BlogPosts;
