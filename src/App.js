import ExpenseItem from "./components/ExpenseItems";
// import logo from './logo.svg';
// import './App.css';

function App() {
  const expenses = [
    {
      title: "Expense items",
      name: "Biswa",
      item: "Food : Rs 10",
      location: "Location : Cuttack",
    },
    {
      title: "Expense items",
      name: "Amar",
      item: "Petrol : Rs 100",
      location: "Location : BBSR (Indian oil petrol pump)",
    },
    {
      title: "Expense items",
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
        item={expenses[0].item}
        location={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[1].name}
        title={expenses[1].title}
        item={expenses[1].item}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[2].name}
        title={expenses[2].title}
        item={expenses[2].item}
        location={expenses[2].location}
      ></ExpenseItem>
    </div>
  );
}

export default App;
