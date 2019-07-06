import React from 'react';

const Gif = props => (
    <div className="col s3">
        <div className="card">
            <div className="card-image">
                <li className="gif-wrap">
                    {<img src={props.url} alt="gifs" />}
                </li>
            </div>
        </div>
    </div>
);

export default Gif;
