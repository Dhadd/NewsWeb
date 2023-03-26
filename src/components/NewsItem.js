import React from "react";

const NewsItem = (props) => {
  
    let { title, description, imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
        <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>
              {source}</span></h5>
          <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/22/03/samsung-galaxy-book2-pre-orders/-952x498w6/gsmarena_000.jpg": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By{!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read Me </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
