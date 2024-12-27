import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, publishDate, newsUrl, author } = this.props;
    return (
      <div>
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80">
          <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src={!imageUrl ? "https://i.insider.com/670fa446a70318649282b2f4?width=1000&format=jpeg" : imageUrl} alt="card-image" />
          </div>
          <div className="p-3">
            <h6 className="text-slate-800 text-xl font-semibold">
              {title}
            </h6>
            <span className="my-2 text-xs text-red-600">By <strong>{author ? author : "Unknown"}</strong> on {new Date(publishDate).toDateString()}</span>
            <p className="text-slate-600 leading-normal text-sm font-light">
              {description}
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2">
            <Link to={newsUrl} target='_blank'><button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Read more
            </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;