import React, { Component } from 'react';
import UserRow from './UserRow';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: [
        {
          email: '',
          password: '',
          yourCountry: '',
          gender: '0',
          other: ''
        }
      ],
      listUser :[],
    }
    this.id = 0;
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name
    this.setState(prev => ({
      form: {
        ...prev.form,
        [name]: value
      }
    }));
  }

  handleRegister = (e) => {
    e.preventDefault();
    this.id = this.id + 1;
    const user = {...this.state.form, id: this.id}
    this.setState(prev => ({
      listUser: [
        ...prev.listUser,
        user
      ]
    }));
  }
  
  handleRemove = (e) => {
    this.setState(prev => ({
      listUser: prev.listUser.filter(item => item.id !== e)
    }));
  }

  render() {
    const { form, listUser } = this.state
    return (
      <div className="container">
        <form className="resgister-form">
          <div className="heading">
            <h2>Register</h2>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="text" 
              name="email" 
              className="form-control" 
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-control" 
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Your country</label>
            <div className="form-select">
              <select name="yourCountry" value={form.yourCountry} onChange={this.handleChange}>
                <option value="">Please choose</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
              </select>
            </div>
          </div>
          <div className="form-group">
          <label className="form-label">Gender</label>
            <div className="form-radio">
              <input 
                  type="radio"
                  name="gender"
                  id="male"
                  value="0" 
                  checked={form.gender === '0'}
                  onChange={this.handleChange} />
              <label htmlFor="male">Male</label>
            </div>
            <div className="form-radio">
              <input 
                  type="radio"
                  name="gender"
                  id="female"
                  value="1" 
                  checked={form.gender === '1'}
                  onChange={this.handleChange} />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Other information</label>
            <textarea name="other" onChange={this.handleChange}></textarea>
          </div>
          <div className="btn-set">
            <button className="btn-default" onClick={this.handleRegister}>Submit</button>
          </div>
        </form>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Your country</th>
              <th>Gender</th>
              <th>Other</th>
              <th className="txt-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              listUser.length ? listUser.map((item) => 
                <UserRow key={item.id} userItem={item} onRemoveItem={this.handleRemove}/>
              ) : <tr><td >Ahihi!!!</td></tr>
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;