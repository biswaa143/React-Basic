import ExpenseItem from "./components/ExpenseItems";
// import logo from './logo.svg';
// import './App.css';

function App() {
  const expenses = [
    {
      title: "Expense items",
      date: new Date(2023, 2, 16),
      name: "Biswa",
      item: "Food : Rs 10",
      location: "Location : Cuttack",
    },
    {
      title: "Expense items",
      date: new Date(2023, 2, 16),
      name: "Amar",
      item: "Petrol : Rs 100",
      location: "Location : BBSR (Indian oil petrol pump)",
    },
    {
      title: "Expense items",
      date: new Date(2023, 2, 16),
      name: "Manisha",
      item: "Movies : Rs 200",
      location: "Location : Puri (INOX)",
    },
  ];
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    <div>
      {/* <h2>Let's get started!</h2> */}
      <ExpenseItem
        name={expenses[0].name}
        title={expenses[0].title}
        date={expenses[0].date}
        item={expenses[0].item}
        location={expenses[0].location}
      />
      <ExpenseItem
        name={expenses[1].name}
        title={expenses[1].title}
        date={expenses[1].date}
        item={expenses[1].item}
        location={expenses[1].location}
      />
      <ExpenseItem
        name={expenses[2].name}
        title={expenses[2].title}
        date={expenses[2].date}
        item={expenses[2].item}
        location={expenses[2].location}
      />
    </div>
  );
}

export default App;
