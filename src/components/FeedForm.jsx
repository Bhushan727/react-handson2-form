import React from "react";

class FeedForm extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            name : '',
            dept : '',
            rate : ''
        }
        const data = this.state
    }
    
    
           
    

    // const data = this.state;
    handleSubmit = (event) => {
        console.log(this.state.name);
        console.log(this.state.dept);
        console.log(this.state.rate);

        console.log(this.data.name);
        console.log(this.data.dept);
        console.log(this.data.rate);
        
        event.preventDefault();
        
    }

    handleNameChange = (event) => {
        this.setState({name:event.target.value})
    }
    handleDeptChange = (event) => {
        this.setState({dept:event.target.value})
    }
    handleRateChange = (event) => {
        this.setState({rate:event.target.value})
    }

    render(){

        return(
            <>
            <h1 className="feedHeading">EMPLOYEE FEEDBACK FORM</h1>
            <form>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label htmlFor="dept">Department : </label>
                    <input type="text" value={this.state.dept} onChange={this.handleDeptChange}/>
                </div>
                <div>
                    <label htmlFor="rate">Rating : </label>
                    <input type="text" value={this.state.rate} onChange={this.handleRateChange}/>
                </div>
                
                <button type="submit" onClick={this.handleSubmit}>submit</button>
            </form>
            <div>
                <h1>{this.state.name}</h1>
            </div>
            </>
        )
    }

}

export default FeedForm;