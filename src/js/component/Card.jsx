import React from 'react';

function Card(item) {
    return (
        <div className="card col-md-3">
            <img src={item.img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;