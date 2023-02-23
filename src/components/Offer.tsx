import React from "react";
type offerProps = {
  content: string;
};
const Offer = (props: offerProps) => {
  return (
    <section className="offer">
      <div>
        <p>{props.content}</p>
      </div>
      <div>
        <p>
          Explore <i className="bi bi-arrow-up-right"></i>
        </p>
      </div>
    </section>
  );
};

export default Offer;
