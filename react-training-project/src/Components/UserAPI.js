import React, { useEffect, useState } from 'react';

const UserAPI = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [listNum, setListNum] = useState([])
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(req => {
        setUsers(req.data)
        setTotalPages(req.total_pages)
      })
  }, [page]);

  useEffect(() => {
    let arrayList = []
    for (let i = 1; i <= totalPages; i++) {
      arrayList.push(i)
    }
    setListNum(arrayList)
  }, [totalPages])

  const prevPage = (e) => {
    if(e === 0) {
      setPage(page - 1)
    }else {
      setPage(page + 1)
    }
  }

  const handleChange = (e) => {
    setPage(e)
  } 
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          { 
            users.map((item) =>
              <tr key={item.id}>
                <td><img className="avatar" src={item.avatar}/></td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            )}
        </tbody>
      </table>
      <ul className='display-flex'>
        <li>
          <button disabled={page === 1} onClick={() => prevPage(0)}>Prev</button>
        </li>
          {
            listNum.map((item) => 
              <li key={item}>
                <button onClick={() => handleChange(item)} className={item === page ? 'active' : ''}>{item}</button>
              </li>
            )
          }
        <li>
          <button disabled={page === totalPages} onClick={() => prevPage(1)} >Next</button>
          </li>
      </ul>
    </div>
  );
};

export default UserAPI;
