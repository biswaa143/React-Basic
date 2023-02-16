import './ExpenseDetails.css'

function ExpenseDetails(props) {
    const title = 'Expense Details';
    const amount = 'Rs 100';
    const date = new Date(2023, 2, 17);

    return (
        <div className='expense-item'>
            
			<ExpenseDate date ={props.date} />

			<ExpenseDetails amount={props.amount} />

		</div>
    );
}

export default ExpenseDetails;