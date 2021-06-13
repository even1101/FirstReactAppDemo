import React , {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/serach-box/search-box.component'
class App  extends Component {

  constructor()
  {
    super();
    this.state = {
      monsters: [],
      serachField: '',
    };
    // es6 before 
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(users => {
      console.log(users)
      this.setState({monsters: users})
    });
  }
  // es6 before 
  // handleChange(e) {
  //   this.setState({ serachField: e.target.value });
  // }
  handleChange = (e) => {
    this.setState({ serachField: e.target.value });
  }

  render() {
    const { monsters, serachField } = this.state;
    const filterMonsters = monsters.filter(m => m.name.toLowerCase().includes(serachField.toLowerCase()))
    return(
      <div className="App">
        <h1>My base react project is Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
          />
        <CardList monsters={filterMonsters} />
    </div>

    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
