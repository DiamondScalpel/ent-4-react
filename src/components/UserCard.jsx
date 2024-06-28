import React from 'react';
import './styles/userCard.css';

const UserCard = ({user, deleteUser, setUpdateUser}) => {

   // console.log(user);

   const handleDelete = () => {
        deleteUser('users', user.id);

   }

   const handleEdit = () => {
        setUpdateUser(user);

   }

  return (
    <section className='user'>
        <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
        <hr className='user__line' />
        <ul className='user__list'>
            <li className='user__item'><span>Email: </span><span><ion-icon name="mail-outline"></ion-icon> {user.email}</span></li>
            <li className='user__item'><span>Birthday: </span><span><ion-icon name="gift-outline"></ion-icon> {user.birthday}</span></li>
        </ul>
        <hr className='user__line' />
        <div className='user__buttons'>
            <button className='user__btn' onClick={handleDelete}>delete</button>
            <button className='user__btn' onClick={handleEdit}>edit</button>
        </div>
    </section>
  )
}

export default UserCard;