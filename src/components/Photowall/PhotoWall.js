import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function PhotoWall(props) {
    return (
        <div className="photoGrid">
            {props.posts.map((posts, index) => (
                <Photo
                    key={index}
                    posts={posts}
                    onRemovePhoto={props.onRemovePhoto}
                />
            ))}
        </div>
    );
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
};
export default PhotoWall;
