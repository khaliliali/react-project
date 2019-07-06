import React from 'react';

const SingleSide = ({ item }) => (
    <div>
        <a href={item.url} target="_blank">
            <div className="section">
                <h5>{item.source.name}</h5>
                <div className="divider" />
                <p>{item.title}</p>
            </div>
        </a>
    </div>
);

export default SingleSide;
