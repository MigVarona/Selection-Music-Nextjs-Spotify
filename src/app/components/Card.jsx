


function Card() {
    return ( 
    <div className="flex items-center justify-center flex-wrap">
    <div className="card w-96 ml-20 mt-9 glass">
    <figure><img src="/2.jpg" alt="car!"/></figure>
    <div className="card-body">
      <h2 className="card-title">Life hack</h2>
      <p>How to park your car at your garage?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>

<div className="card w-96 ml-24 mt-9 glass">
<figure><img src="/3.jpg" alt="car!"/></figure>
<div className="card-body">
  <h2 className="card-title">Life hack</h2>
  <p>How to park your car at your garage?</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Learn now!</button>
  </div>
</div>
</div>
<div className="card w-96 ml-24 mt-9 glass">
    <figure><img src="4.png" alt="car!"/></figure>
    <div className="card-body">
      <h2 className="card-title">Life hack</h2>
      <p>How to park your car at your garage?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>
  
</div>

  
  
  
  );
}

export default Card;