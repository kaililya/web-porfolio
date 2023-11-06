import styles from './skills.module.css';
import { SiTypescript, SiRedux, SiSass, SiReactrouter, SiCypress } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai'
import {MdHttp} from 'react-icons/md';
import {BiLogoPostgresql, BiLogoPython} from 'react-icons/bi'

function Skills() {
  return (
    <div className={styles.main_container}>
      <div className={styles.skills_container}>
        <h3 className={styles.title}>Работаю сейчас:</h3>
        <ul className={styles.icons_container}>
          <li className={styles.icons_container_item}>
            <SiTypescript size={'32px'} />
            TypeScript
          </li>
          <li className={styles.icons_container_item}>
            <FaReact size={'32px'} />
            React
          </li>
          <li className={styles.icons_container_item}>
            <SiRedux size={'32px'} />
            Redux Toolkit
          </li>
          <li className={styles.icons_container_item}>
            <SiReactrouter size={'32px'} />
            React Router 
          </li>
          <li className={styles.icons_container_item}>
            <SiSass size={'32px'} />
            SCSS
          </li>
          <li className={styles.icons_container_item}>
            <AiFillGithub size={'32px'} />
            GitHub
          </li>
          <li className={styles.icons_container_item}>
            <MdHttp size={'32px'} />
            Rest API
          </li>
          <li className={styles.icons_container_item}>
            <SiCypress size={'32px'} />
            Cypress / Jest
          </li>
        </ul>
      </div>
      <div className={styles.skills_container}>
        <h3 className={styles.title}>Работал ранее:</h3>
        <ul className={styles.icons_container}>
          <li className={styles.icons_container_item}>
            <BiLogoPython size={'32px'} />
            Python
          </li>
          <li className={styles.icons_container_item}>
            <BiLogoPostgresql size={'32px'} />
            SQL
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Skills