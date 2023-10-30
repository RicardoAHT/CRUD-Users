import React, { useState } from 'react'
import {useForm } from "react-hook-form"
import { useEffect } from 'react'
import "./styles/FormUser.css"

const FormUser = ({createUser, infoUpdate, updateUser, setInfoUpdate, closeForm, setCloseForm}) => {

  const handleCloseForm = () => {
    setCloseForm(true)
  }
  const {handleSubmit, register, reset } = useForm()

  useEffect(() => {
    reset(infoUpdate)
  }, [infoUpdate])
    
  const submit = data => {
    if(infoUpdate){
      updateUser("/users", infoUpdate.id, data)
      setInfoUpdate()     
    }else{
      createUser("/users", data)}
      reset({
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        birthday:""
      })
  }

  return (
    <div className={`formUser__container ${closeForm && "close__form"}`} onClick={handleCloseForm}>
      <form className='formUser' onSubmit={handleSubmit(submit)} onClick={event => event.stopPropagation()} id='form'>
        <h2 className='formUser__h2'>{infoUpdate ? "Update User" :"New User"}</h2>
        <div className='formUser__close' onClick={handleCloseForm}>X</div>
        <div className='formUser__div'>
          <label className='formUser__div__label' htmlFor="email">Email: </label>
          <input className='formUser__div__input' {...register("email")} type="email" id='email' autoComplete='userEmail' />
        </div>
        <div className='formUser__div'>
          <label className='formUser__div__label' htmlFor="password">Password: </label>
          <input className='formUser__div__input' {...register("password")} type="password" id='password' />
        </div>
        <div className='formUser__div'>
          <label className='formUser__div__label' htmlFor="first_name">Name: </label>
          <input className='formUser__div__input' {...register("first_name")} type="text" id='first_name' autoComplete='userName' />
        </div>
        <div className='formUser__div'>
          <label className='formUser__div__label' htmlFor="last_name">LastName: </label>
          <input className='formUser__div__input' {...register("last_name")} type="text" id='last_name' />
        </div>
        <div className='formUser__div'>
          <label className='formUser__div__label' htmlFor="birthday">Birthday: </label>
          <input className='formUser__div__input' {...register("birthday")} type="date" id="birthday" />
        </div>
        <button className='formUser__button'>{infoUpdate ? "Update" :"Create"}</button>
      </form>
    </div>
    
  )
}

export default FormUser