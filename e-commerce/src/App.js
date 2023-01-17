import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import DataFetching from './components/DataFetching';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""}
  }

  callApi(){
    fetch("http://localhost:9000/api/v1/products")
    .then(res =>res.json())
    .then(res => console.log(res))
    .then(res => this.setState(
      {apiResponse: res}
      )
    )
  }

  componentWillMount(){
    this.callApi();
  }


  render(){
    return (
      <div className='App'>
        <p>test</p>
        <DataFetching />
      </div>
    );
  }
}



export default App;
