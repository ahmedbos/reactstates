import React, { Component, useState, useEffect } from 'react'


import './App.css';
export default class AppClass extends Component {
    constructor(props){
        super(props)
        this.state={
            fullName:"ahmed boss",
            bio:"mastermind" ,
            imgSrc:"" ,
            profession:"Hacker" ,
            show:false ,
            
        }
    }

    show=()=>{
        this.setState({show:!this.state.show})
        console.log(this.state.show)
       
    }
    App = () => {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
      }, []);
    
      return <h1>The component has been rendered for {count} seconds</h1>;
    };
    
    
  render() {
    return (
      <div className='main'>
      
       { this.state.show ? (<><this.App></this.App><div className='sts'><div className='st'><button onClick={this.show}>Exit</button>
       <img width={300} height={400} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYOeyGdS8oX3gtOqH8zzxuJOlZxRz6FNaaQ&usqp=CAU' alt='pic'/>
       <div><h1>{this.state.fullName}</h1><h1>{this.state.bio}</h1><h1>{this.state.profession}</h1></div></div>
       </div></>)  
       
       
       
       
       
       : (<><this.App></this.App><div  className='sec'><button onClick={this.show}>Click for a surprise!!</button></div></>) }
       
      </div>
    )
  }
}
