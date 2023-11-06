import styles from './navigate.module.css'
import { NavLink, Route, Routes } from 'react-router-dom';

import React from 'react'
import Contacts from '../contacts/contacts';
import Skills from '../skills/skills';
import Projects from '../projects/projects';



const ProfilePage = () => {

  const switchClassName = ({isActive}) => (isActive ? `${styles.link_active} text text_type_main-medium` : `${styles.link} text text_type_main-medium`);

  return (
    <section className={`${styles.profile_container}`}>
      <nav className={`${styles.navigation_section}`}>
        <ul className={`${styles.link_container}`}>
          <li className={``}>

            <NavLink
              to="/"
              className={switchClassName}
            >
              Проекты              
            </NavLink>
          </li>
          <li>
            <NavLink
              className={switchClassName}
              to='skills'
            >
              Навыки
            </NavLink>
          </li>
          <li>
            <NavLink
              className={switchClassName}
              to='contacts'
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Projects />}></Route>
        <Route path='skills' element={<Skills/>}></Route>
        <Route path='contacts' element={<Contacts />}></Route>
      </Routes >
    </section>
  )
}

export default ProfilePage