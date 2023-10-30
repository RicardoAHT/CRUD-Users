import React from 'react'

const userCard = ({user, deleteUser, setInfoUpdate, setCloseForm}) => {
  const handleDelete = () => {
    deleteUser("/users", user.id)
  }
  const handleEdit = () => {
    setInfoUpdate(user)
    setCloseForm(false)
  }

  return (
    <article className='userCard'>
      <h3 className='userCard__h3'>#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      <ul className='userCard__ul'>
        <li className='userCard__ul__li'><span className='userCard__ul__li__span1'>Email: </span><span className='userCard__ul__li__span2'>{user.email}</span></li>
        <li className='userCard__ul__li'><span className='userCard__ul__li__span1'>Birthday: </span><span className='userCard__ul__li__span2'>{user.birthday}</span></li>
      </ul>
      <div className='userCard__div'>
        <button className='userCard__button' onClick={handleDelete}>Delete</button>
        <button className='userCard__button' onClick={handleEdit}>Edit</button>
      </div>
    </article>  
  )
}

export default userCard
