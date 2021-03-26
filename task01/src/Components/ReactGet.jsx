import React from 'react'
import axios from 'axios'
import '../index.css'

export default class ReactGet extends React.Component{
  
  constructor(){
    super()
    this.state={
      name:[],
    }
  }
    
  componentDidMount(){
    this.getData()
  }
    
  async getData(){
    let res = await axios.get("http://localhost/ReactGet.php")
    console.log(res)
    this.setState({name:res.data})
  }

  render(){
    return(<>
      {this.state.name.length>0?
        <div>
          {this.state.name.map((item)=>{
            return (<>
                      <div class="card manualCard">
                        <div class="card-body">
                          <h5 class="card-title fontStyle" >Id: {item.id}</h5>
                          <h6 class="card-subtitle mb-2 text-muted fontStyle">Email: {item.email}</h6>
                          <p class="card-text fontStyle">Message: {item.message}</p>
                        </div>
                      </div>
                    </>)
          })}
        </div>
      :<h1>Data is Loading...</h1>}
      </>
    )
  }
}