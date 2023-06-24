import React from "react";
import Cards from "./Cards";

const CardSection = () => {
    return (
<section className="contact bg-success " >
      <div claclassNamess="container " style={{ marginLeft: "7rem"}}>
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row" style={{ marginLeft: "5rem"}}>
          <div className="col-4">
            <Cards title="Suraj" Button="Click Me"  SomeText="Helloo , Suraj Here From Card 1"/>    
          </div>
          <div className="col-4">
            
            <Cards title="Suraj" Button="Click Me"  SomeText="Helloo , Suraj Here From Card 2" />   
          </div>
          <div className="col-4">
           <Cards  title="Suraj" Button="Click Me"  SomeText="Helloo , Suraj Here From Card 3"/>
          </div>
        </div>
      </div>
    </section>
    )
}

export default CardSection;