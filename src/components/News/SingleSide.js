import React from 'react';
import { Media, Button } from 'reactstrap';

const SingleSide = ({ item }) => (
    <div>
        <Media>
            <Media body className="newsData">
                <Media href={item.url} heading className="newstitle">
                    {item.source.name}
                </Media>
                <div className="divider" />
                <Media href={item.url} heading className="newsSummary">
                    {item.description}
                </Media>
            </Media>
        </Media>
        <br />
    </div>
);

export default SingleSide;
