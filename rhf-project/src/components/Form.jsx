import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Form = ({ setUsers, setToggle, selectedUser, setSelectedUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: selectedUser || {
      name: '',
      email: '',
      contact: '',
      image: '',
    },
  })

  useEffect(() => {
    if (selectedUser) {
      reset(selectedUser)
    } else {
      reset({
        name: '',
        email: '',
        contact: '',
        image: '',
      })
    }
  }, [selectedUser, reset])

  const onSubmit = (data) => {
    if (selectedUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.email === selectedUser.email ? { ...user, ...data } : user,
        ),
      )
    } else {
      setUsers((prevUsers) => [...prevUsers, data])
    }

    setSelectedUser(null)
    reset({
      name: '',
      email: '',
      contact: '',
      image: '',
    })
    setToggle(true)
  }

  return (
    <div>
      <h1>{selectedUser ? 'Update User' : 'Create User'}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 p-4 bg-gray-200 rounded-lg shadow-md'>
        <input
          type='text'
          placeholder='Name'
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <input
          type='email'
          placeholder='Email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          type='text'
          placeholder='Contact'
          {...register('contact', {
            required: 'Contact is required',
            minLength: {
              value: 10,
              message: 'Contact must be at least 10 characters',
            },
            maxLength: {
              value: 10,
              message: 'Contact must be at most 10 characters',
            },
          })}
        />
        {errors.contact && <span>{errors.contact.message}</span>}

        <input type='url' placeholder='Image' {...register('image')} />

        <button type='submit' className='cursor-pointer bg-blue-500 text-white px-4 py-2 rounded'>
          {selectedUser ? 'Update User' : 'Add User'}
        </button>
      </form>
    </div>
  )
}

export default Form
