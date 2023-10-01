import './App.css'
import Footer from './components/Footer';
import FormUser from './components/FormUser';
import NavBar from './components/NavBar';
import UserCard from "./components/UserCard";
import useFetch from './hooks/useFetch';
import { useEffect, useState } from 'react';
import { Box, Pagination } from "@mui/material";

function App() {

  const baseUrl = "https://users-crud.academlo.tech" 
  const [closeForm, setCloseForm] = useState(true)
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl, setCloseForm)
  const [infoUpdate, setInfoUpdate] = useState()
  const [nightMode, setNightMode] = useState(false)

  //*! Pagination MaterialUI
  const usersArray = users
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = usersArray?.slice(itemOffset, endOffset); // En el map donde se itera el array principal se cambia por current items
  const pageCount = usersArray && Number.isFinite(usersArray.length) ? Math.ceil(usersArray.length / itemsPerPage) : 0;
  // Funcion para iterar por paginas
  const handleChangePage = (event, value) => {
    const value2 = value - 1;
    const newOffset = (value2 * itemsPerPage);    
    setItemOffset(newOffset);
  }
  //*! Pagination Material UI
  useEffect(() => {
    getUsers("/users")
  }, [])

  const handleNightMode = () =>{
    setNightMode(!nightMode)
  }
  
  return (
  <div className='app'>
    <NavBar
      setCloseForm={setCloseForm}
      nightMode={nightMode}
      setNightMode={setNightMode}
      handleNightMode={handleNightMode}
    />
    <main className={`app__main ${nightMode && "app__main__night"} `}>
      <FormUser
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className='userCard__container'>
        {
          currentItems?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setInfoUpdate={setInfoUpdate}
            setCloseForm={setCloseForm}
            />
          ))
        }
      </div>
      <div className='pagination__container'>
        <Box sx={{ width: "90%", display: "flex", justifyContent: "center" , overflow:"hidden" }}>
          <div className="pagination">
            <Pagination
              count={pageCount}
              onChange={handleChangePage}
              size="medium"
              color="primary"
            />
          </div>
        </Box>
      </div>
    </main>
    <Footer
      nightMode={nightMode}
    />
  </div>
  )
}

export default App;