import React, { Component } from 'react';

class BlogLikes extends Component {
    state = {
        blogPosts: this.props.blogPosts
    };

    handleLikeClick = blogPosts => {
        const likedPost = { ...blogPosts };
        likedPost.like++;
        this.setState({ blogPosts: likedPost });
    };

    render() {
        const { blogPosts } = this.state;
        return (
            <div
                className="fa fa-heart float-right"
                style={{ color: 'purple', cursor: 'pointer' }}
                onClick={() => this.handleLikeClick(blogPosts)}
            >
                <span className="badge-primary badge-pill m-1">
                    {blogPosts.like}
                </span>
            </div>
        );
    }
}

export default BlogLikes;
