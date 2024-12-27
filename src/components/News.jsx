import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country : "us",
    pageSize : 6, 
    category : "general"
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1 ,// Initialize the page state
      loading : false
    };

  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d41e69b974cb4aa38f5d0c4bb32c261d&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata);
    this.setState({ 
       articles: parsedata.articles,
       totalResults: parsedata.totalResults,
       loading : false
       })
  }

  handlePrev = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d41e69b974cb4aa38f5d0c4bb32c261d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata);
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      loading : false
    })

  }
  
  handleNext = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d41e69b974cb4aa38f5d0c4bb32c261d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedata = await data.json()
      console.log(parsedata);
      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles, 
        loading : false
      })
      console.log(publishedAt);
      
    }

  }
  

  render() {
    return (
      <>
        <div className="py-5 px-3">
          <h2 className='text-2xl font-semibold'>CRICKET NEWS</h2>
          {this.state.loading && <Spinner/>}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {!this.state.loading && this.state.articles?.map((item, i) =>
              <NewsItem key={i} imageUrl={item?.urlToImage} title={item?.title} author={item?.author} publishDate={item?.publishedAt} description={item?.description} newsUrl={item?.url} />
            )}
          </div>
          <div className="flex justify-center items-center gap-2 py-5">
            <button disabled={this.state.page <= 1} onClick={this.handlePrev} className="px-3 py-1 bg-red-700 text-white rounded-sm">Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNext} className="px-3 py-1 bg-red-700 text-white rounded-sm">Next</button>
          </div>
        </div>
      </>
    )
  }
}

export default News;

