import React from 'react';
import PropTypes from 'prop-types';

function NewsList(props) {
  const newsItem = props.newsList.map((item, index) =>
    <div key={index} className="col-md-4 mb-3">
      <div className="card">
        <img src={item.urlToImage} className="card-img-top" alt="pic-news"></img>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text"><small className="text-muted">{item.author}</small></p>
          <a target="_blank" href={item.url} className="btn btn-primary">Go to news</a>
        </div>
      </div>
    </div>
  )
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
        {newsItem}
      </div>
    </div>
  )
}

NewsList.propTypes = {
  newsList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NewsList