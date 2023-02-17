import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {

  return (
    <div>
      <div className="expense-item">
        <h2>{props.title}</h2>
      </div>
      <div className="catagory">
        <ExpenseDate date={props.date} />
        <div>
          {props.name}
          <br></br>
          {props.item}
          <br></br>
          {props.location}
          <br></br>
        </div>
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
