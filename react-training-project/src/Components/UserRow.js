import React, { Component } from 'react';

class UserRow extends Component {
  constructor(props) {
    super(props)
  }

  removeItem = () => {
    const { id } = this.props.userItem
    this.props.onRemoveItem(id)
  }

  render() {
    const { userItem } = this.props 
    return (
      <tr key={userItem.id}>
        <td>{userItem.id}</td>
        <td>{userItem.email}</td>
        <td>{userItem.yourCountry}</td>
        <td>{userItem.gender === '0' ? 'Male' : 'Female'}</td>
        <td>{userItem.other}</td>
        <td>
          <button onClick={this.removeItem}>Remove</button>
        </td>
      </tr>
    );
  }
}

export default UserRow;