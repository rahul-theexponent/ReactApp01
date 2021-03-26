import React from 'react';
import "../index.css";

function CurrentTime(){
    var time = new Date().getHours();
    var Greetings = '';
    if(time>=1 && time<12){
    Greetings = `Good Morning ... It's ${time}AM`;
    }
    else if(time>=12 && time<19){
    Greetings = `Good AfterNoon ... It's ${time}PM`;
    }
    else{
    Greetings = `Good Night ... It's ${time}PM`;
    }
    return(
            <h1 style={{width:"500px",margin:"20px auto"}}>{Greetings}</h1>
    )
}

function Sampleform(){
    return(
        <>
        <form className="formCenterAlign"> 
        <div className="form-group formCenterAlign">
            <label className="fontStyle" htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control inputWidth" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group form-check">
            <label className="fontStyle" htmlFor="exampleCheck1">Message</label>
            <input type="text" className="form-control inputWidth" id="exampleCheck1" placeholder="Message"/>
        </div>
        <div className="form-group">
            <label className="fontStyle" htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control inputWidth" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}
export default CurrentTime;
export {Sampleform};