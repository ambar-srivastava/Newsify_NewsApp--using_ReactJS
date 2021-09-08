import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="my-3">
                    <div className="card">
                    <div>
                        <span className="badge rounded-pill bg-success" style={{position: "absolute", right: "0", top: "-7px",fontWeight: "400" ,fontSize: "8px"}}>
                            {source}
                        </span>
                        <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2021/09/02/1600x900/aed1cb7af8c96e961b_1630580381773_1630580410340.jpeg" : imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-success">Read More</a>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem;
