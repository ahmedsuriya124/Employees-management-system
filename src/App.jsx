import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData , setUserData] = useContext(AuthContext)

  useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role);
        setLoggedInUserData(userData.data) 
    } 
  }, [])
  useEffect(() => {
    setLocalStorage();
  }, [])
  
  const handleLogin = (email, password) => {
    if (userData) {
      const admin = userData.admin.find((d) => email == d.email && password == d.password);
      const employee = userData.employees.find((e) => email == e.email && password == e.password);
      if(admin){
        setUser('admin');
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
      }
      else if(employee){
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' , data : employee}));
      }else {
        alert("Invalid Credentials");
      }
    } 
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard data={loggedInUserData} changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : null)}
    </>
  )
}

export default App