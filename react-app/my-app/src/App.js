import $ from 'jquery'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  data = [];
  componentDidMount() {
    // fetch('/view-feedbacks')
    // .then( (d) => console.log(d))
    // console.log(this.data);
    $.ajax({  
      url: "/view-feedbacks",  
      type: "GET",  
      dataType: 'json',  
      ContentType: 'application/json',  
      success: function(data) {    
        console.log(data)       
        this.setState({data1: data});   
          
      }.bind(this),  
      error: function(jqXHR) {  
        console.log(jqXHR);  
            
      }.bind(this)  
   });  
  }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div>
      <h1>Simple Form Submition:</h1>
    <form method="POST" action="/post-feedback">
        <label>Name:<input type="text" name="name" required></input></label>
        <br></br>
        <label>Email:<input type="text" name="email" required></input></label>
        <br></br>
        <label>Mobile No:<input type="number" name="mobile" required></input></label>
        {/* <label>Comment:<br><textarea name="comment"></textarea></label> */}
        <br></br>
        <input type="submit" value="Submit"></input>
    </form>
    </div>
    // <a href="/view-feedbacks">View feedbacks</a>
    );
  }
}

export default App;
