import "./ExpenseItems.css";

function ExpenseItem(props) {

  return (
    <div>
      <div className="expense-item">
        <h2>{props.title}</h2>
      </div>
      <div className="catagory">
        <div>{props.name}<br></br>{props.item}<br></br>{props.location}</div>
      </div>
      {/* <div className="catagory2">
        <div>{props.item}------{props.location}</div>
      </div>
      <div className="catagory3">
        <div>{props.item}------{props.location}</div>
      </div> */}
    </div>
  );
}

export default ExpenseItem;
