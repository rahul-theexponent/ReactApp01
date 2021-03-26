import React from 'react'
import axios from 'axios'

export default class ReactPost extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            message:"",
            password:""            
        }
    }
    handleAdd= async (e) => {
        this.setState({
          [e.target.name]:e.target.value
        })
    }
    handleSubmit= (e) => {
        e.preventDefault();
        let formData =new FormData();
        console.log(formData)
        formData.append("email",this.state.email);
        formData.append("message",this.state.message);
        formData.append("password",this.state.password);
        axios.post("http://localhost/task.php",formData).then(res=>alert(res.data)).catch(err=>console.log(err));
      }
    render(){
        return(
            <>
        <form className="formCenterAlign"> 
        <div className="form-group formCenterAlign">
            <label className="fontStyle" htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control inputWidth" onChange={this.handleAdd} name="email" placeholder="Enter email" required/>
        </div>
        <div className="form-group form-check">
            <label className="fontStyle" htmlFor="exampleCheck1">Message</label>
            <input type="text" className="form-control inputWidth" onChange={this.handleAdd} name="message" placeholder="Message" required/>
        </div>
        <div className="form-group">
            <label className="fontStyle" htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control inputWidth" onChange={this.handleAdd} name="password" placeholder="Password" required/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} >Submit</button>
        </form>
        </>
        )
    }
}