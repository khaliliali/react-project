import React from 'react';
import { Media, Button } from 'reactstrap';

const NewsSingle = ({ item }) => (
    <div>
        <Media>
            <Media left href="#">
                <Media
                    className="newsImage"
                    src={item.urlToImage}
                    alt={item.title}
                />
            </Media>
            <Media body className="newsData">
                <Media heading className="newstitle">
                    {item.title}
                </Media>
                <Media heading className="newsSummary">
                    {item.description}
                </Media>
                <div>
                    <Button color="info" href={item.url}>
                        Full article
                    </Button>
                </div>
            </Media>
        </Media>
        <br />

        {/* <div className="col s4 m-7">
            <div className="card">
                <div className="card-image">
                    <img src={item.urlToImage} alt={item.title} />
                    <span className="card-title" />
                    {item.source.name}
                </div>
                <div className="card-content">
                    <p>{item.title}</p>
                </div>
                <div className="card-action">
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Full article
                    </a>
                </div>
            </div>
        </div> */}
    </div>
);

export default NewsSingle;
