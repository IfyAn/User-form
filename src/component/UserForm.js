import React, { Component } from 'react'
import moment from 'moment'

class UserForm extends Component {
    state={  
        firstName: 'Anyam',
        lastName: 'Ifeanyi',
        birthhday:'6 6th 44',
        age: '27',
        hobby: 'Travelling, Programming'   
      }
    
    handleChange = event => {  
          if (event.target.name === "firstName")      
          this.setState({ firstName: event.target.value });    
        if (event.target.name === "lastName")      
        this.setState({ lastName: event.target.value });  
        if (event.target.name === "age")      
        this.setState({ age: event.target.value });  
        if (event.target.name === "birthday")      
        this.setState({ birthday: event.target.value });  
        if (event.target.name=== "hobby")      
        this.setState({ hobby : event.target.value });  
    }

    handleSubmit =(e)=> {   
         e.preventDefault();  
         let newState= Object.assign({}, this.state.newState);
         this.setState({
                    state: newState
                  });
        };
        // handleSubmit(e) {
        //     const {firstName, lastName, age, birthhday, hobby} = e.target.value;
        //     let user = Object.assign({}, this.state.user);
        //     [firstName, lastName, age, birthhday, hobby] = user;
        //     return this.setState({user});
        //    }
    // handleClick=e=>{
    //     let newState=this.state
    //     newState({ 
    //       firstName: ' ',
    //       lastName: ' ',
    //       birthhday:' ',
    //       age: ' ',
    //       hobby: ' '
    //     });
    //     this.setState({
    //         state: newState
    //       });
    // }    
    render() {
        const { firstName, lastName, birthhday, age, hobby }=this.state;
        const value ={ firstName, lastName, birthhday, age, hobby }
        // const {value:{ firstName, lastName, birthhday, age, hobby }}=this.state
        return (
            <form className='form user-form'>
                <h1>User Form</h1>
                <table>
                    <thead className='heading'>User Details</thead>
                    <tbody>
                        <tr>
                       <td> First Name: 
                        <input type="text" 
                        name="firstName" 
                        placeholder="firstName" 
                        value={firstName}
                        onChange={ this.handleChange }
                        /> </td> |
                       <td> {value.firstName}</td>
                       </tr>
                        <tr><td>
                        Last Name: 
                        <input type="text" 
                        name="lastName" 
                        placeholder="lastName" 
                        value={lastName}
                        onChange={ this.handleChange }
                        /> </td> |
                        <td>{value.lastName}</td> </tr>
                        <tr> <td> Age: 
                        <input type="number" 
                        name="age" 
                        placeholder="age" 
                        value={age}
                        onChange={ this.handleChange }
                        /> </td> |
                        <td>{value.age}</td></tr>
                        <tr><td> Hobby: 
                        <input type="text" 
                        name="hobby" 
                        placeholder="hobby" 
                        value={hobby}
                        onChange={ this.handleChange }
                        /> </td> |
                        <td> {value.hobby}</td></tr>
                        <tr> <td>
                        Birthhday: 
                        <input type="text" 
                        name="birthday" 
                        placeholder="birthday" 
                        value={birthhday}
                        onChange={ this.handleChange }
                        /> </td> |
                        <td>{moment(value.birthhday).calendar()}</td></tr>
                        <br/>
                        <button onSubmit={ this.handleSubmit } className='btn form-submit'>Submit</button>
                    </tbody>   
                </table>
            </form>
        )
    }
}

export default UserForm
