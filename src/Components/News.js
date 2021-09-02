import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("I'm a constructor from news component");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c8365f61d1dd4087a536a64e213a6982";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Newsify - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0, 30):""} description={element.description?element.description.slice(0, 60):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>   
            </div>
        )
    }
}

export default News
     