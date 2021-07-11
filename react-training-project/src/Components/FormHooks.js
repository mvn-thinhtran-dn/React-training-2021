import {React, useState } from "react";

const FormHooks = () => {
  const [id, setId] = useState(1)
  const [form, setForm] = useState(
    {
      email: '',
      password: '',
      yourCountry: '',
      gender: '0',
      other: ''
    }
  );
  const [listUser, setListUser] = useState([]);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
        ...form,
        [name]: value
    });
  }

  const handleRegister = (e) => {
    e.preventDefault();
    setId(id + 1);
    const user = {...form, id}
    setListUser([
      ...listUser,
      user
    ]);
  }
  
  const handleRemove = (id) => {
    const newListUser = listUser.filter(item => item.id !== id)
    setListUser(newListUser);
  }
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
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            name="password" 
            className="form-control" 
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Your country</label>
          <div className="form-select">
            <select name="yourCountry" value={form.yourCountry} onChange={handleChange}>
              <option value="">Please choose</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
        <label className="form-label">Gender</label>
          <div className="form-radio" >
            <input 
                type="radio"
                name="gender"
                id="male"
                value="0" 
                checked={form.gender === '0'} 
                onChange={handleChange}/>
            <label htmlFor="male">Male</label>
          </div>
          <div className="form-radio">
            <input 
                type="radio"
                name="gender"
                id="female"
                value="1" 
                checked={form.gender === '1'} 
                onChange={handleChange}/>
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Other information</label>
          <textarea name="other" onChange={handleChange}></textarea>
        </div>
        <div className="btn-set">
          <button className="btn-default" onClick={handleRegister}>Submit</button>
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
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.yourCountry}</td>
                <td>{item.gender === '0' ? 'Male' : 'Female'}</td>
                <td>{item.other}</td>
                <td>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </td>
              </tr>
            ): <tr><td>Ahihi!!!!</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default FormHooks;