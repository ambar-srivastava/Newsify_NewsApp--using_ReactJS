import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <>
                <div className="my-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2021/09/02/1600x900/aed1cb7af8c96e961b_1630580381773_1630580410340.jpeg":imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-success">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem;
