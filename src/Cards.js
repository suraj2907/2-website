import React from "react";

const Cards = ({title = "My title", Button = "My Button", SomeText ="Hello This Is Suraj's Card"}) => {
    return (
<div className="card" style={{width: "15rem"}}>
              <img
                src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-text">
                  {SomeText}
                </p>
                <a href="#" className="btn btn-success"> {Button}</a>
              </div>
            </div>
    )
}

export default Cards