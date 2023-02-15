import "./ExpenseItems.css";

function ExpenseItem() {
    const expenseTitle = 'Expense items';
    const expenseItem1 = 'Food : Rs 10';
    const expenseItem2 = 'Petrol : Rs 100';
    const expenseItem3 = 'Movies : Rs 200';
    const LocationOfExpenditure1 = 'Cuttack';
    const LocationOfExpenditure2 = 'Bbsr';
    const LocationOfExpenditure3 = 'Puri';

  return (
    <div>
      <div className="expense-item">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="catagory">
        <div>{expenseItem1}------({LocationOfExpenditure1})</div>
        <div>{expenseItem2}------({LocationOfExpenditure2})</div>
        <div>{expenseItem3}------({LocationOfExpenditure3})</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
