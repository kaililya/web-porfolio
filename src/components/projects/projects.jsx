import styles from './projects.module.css'
import { BsClock } from 'react-icons/bs'
import { SiTypescript, SiRedux, SiSass, SiReactrouter, SiCypress } from 'react-icons/si';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi'
import {AiFillHtml5} from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className={styles.main_container}>
        <div className={styles.project_container}>
          <div className={`${styles.project_item} ${styles.project_item_stellar}`}>
            <h2 className={styles.project_name}>Stellar Burger</h2>
            <div className={`${styles.wrapper} ${styles.wrapper_stellar}`}>
              <ul className={styles.stuffs_container} >
                <li className={styles.stuff_item}>
                  <SiTypescript size={'28px'} color='black'/>
                </li>
                <li className={styles.stuff_item}>
                  <FaReact size={'28px'}  color='black'/>
                </li>
                <li className={styles.stuff_item}>
                  <SiRedux size={'28px'}  color='black'/>
                </li>
                <li className={styles.stuff_item}>
                  <SiReactrouter size={'28px'}  color='black'/>
                </li>
                <li className={styles.stuff_item}>
                  <SiCypress size={'28px'}  color='black'/>
                </li>
              </ul>
              <div className={styles.project_score}>
                <p className={styles.title}>Объем проекта:</p>
                <BsClock size={'26px'}color='black'/>
                <BsClock size={'26px'}color='black'/>
                <BsClock size={'26px'}color='black'/>
                <BsClock size={'26px'}color='black'/>
                <BsClock size={'26px'}color='black'/>
              </div>
            </div>
          </div>
          <div className={styles.links_container}>
            <Link 
              className={styles.link_item}
              to='https://github.com/kaililya/react-stellar-burger' 
              target="_blank"
            >GitHub</Link>
            <Link 
              to='https://kaililya.github.io/react-stellar-burger/' 
              target="_blank"
              className={styles.link_item}
            >Сайт</Link>
          </div>
          <p className={styles.description}>SPA бургерной Stellar. Создавай бургер перетаскиванием любых ингредиентов и отслеживай статус заказов с помощью WebSocket!</p>
          <h3 className={styles.feature_title}>Особенности</h3>
          <ul className={styles.features_container}>
            <li className={styles.feature_item}>Функционал Drag-and-drop реализован с применением библиотеки React DnD.</li>
            <li className={styles.feature_item}>Автоматическая JWT-авторизация (если пользователь авторизовался, то при повторном посещения сайта ему не нужно заново вводить идентификационные данные).</li>
            <li className={styles.feature_item}>Только десктоп верстка.</li>
            <li className={styles.feature_item}>Отсуствие хардкор данных, все приходит с backend.</li>
            <li className={styles.feature_item}>Клиентский роунтинг, который ограничивает функционал для не авторизованных пользователей.</li>
          </ul>
        </div>
        <div className={styles.project_container}>
          <div className={`${styles.project_item} ${styles.project_item_nayzak}`}>
            <h2 className={`${styles.project_name} ${styles.project_name_nayzak}`}>E-storer Nayzak</h2>
            <div className={`${styles.wrapper} ${styles.wrapper_nayzak}`}>
              <ul className={styles.stuffs_container} >
                <li className={`${styles.stuff_item} ${styles.stuff_item_nayzak}`}>
                  <SiTypescript size={'28px'} color='white'/>
                </li>
                <li className={`${styles.stuff_item} ${styles.stuff_item_nayzak}`}>
                  <FaReact size={'28px'}  color='white'/>
                </li>
                <li className={`${styles.stuff_item} ${styles.stuff_item_nayzak}`}>
                  <SiRedux size={'28px'}  color='white'/>
                </li>
                <li className={`${styles.stuff_item} ${styles.stuff_item_nayzak}`}>
                  <SiReactrouter size={'28px'}  color='white'/>
                </li>
              </ul>
              <div className={styles.project_score}>
                <p className={`${styles.title} ${styles.title_nayzak}`}>Объем проекта:</p>
                <BsClock size={'26px'}color='white'/>
                <BsClock size={'26px'}color='white'/>
                <BsClock size={'26px'}color='white'/>
                <BsClock size={'26px'}color='white'/>
                <BsClock size={'26px'}color='grey'/>
              </div>
            </div>
          </div>
          <div className={styles.links_container}>
            <Link 
              className={styles.link_item}
              to='https://github.com/kaililya/react-e-store' 
              target="_blank"
            >GitHub</Link>
            <Link 
              to='https://kaililya.github.io/react-e-store/' 
              target="_blank"
              className={styles.link_item}
            >Сайт</Link>
          </div>
          <p className={styles.description}>Магазин обуви Nazdak - это сайт с адаптивной версткой и автоматической авторизацией, на котором можно найти нужную обувь, зарегистрироваться, восстановить и сменить пароль... Вау! </p>
          <h3 className={styles.feature_title}>Особенности</h3>
          <ul className={styles.features_container}>
            <li className={styles.feature_item}>Автоматическая JWT-авторизация (если пользователь авторизовался, то при повторном посещения сайта ему не нужно заново вводить идентификационные данные).</li>
            <li className={styles.feature_item}>Адаптивная вертска (для дисплеев шириной от 320px).</li>
            <li className={styles.feature_item}>Сверстаны популярные решения: анимированные бургер меню, аккордион и т.д. (без сторонних библиотек)</li>
            <li className={styles.feature_item}>Отсуствие хардкор данных, все приходит с backend.</li>
            <li className={styles.feature_item}>Клиентский роунтинг, который ограничивает функционал для не авторизованных пользователей.</li>
          </ul>
        </div>
        <div className={styles.project_container}>
          <div className={`${styles.project_item} ${styles.project_item_mesto}`}>
            <h2 className={`${styles.project_name} ${styles.project_name_mesto}`}>Mesto</h2>
            <div className={`${styles.wrapper} ${styles.wrapper_mesto}`}>
              <ul className={styles.stuffs_container} >
                <li className={`${styles.stuff_item} ${styles.stuff_item_mesto}`}>
                  <BiLogoJavascript size={'28px'} color='white'/>
                </li>
              </ul>
              <div className={styles.project_score}>
                <p className={`${styles.title} ${styles.title_mesto}`}>Объем проекта:</p>
                <BsClock size={'26px'}color='white'/>
                <BsClock size={'26px'}color='white'/>
                <BsClock size={'26px'}color='white'/>
                <BsClock size={'26px'}color='grey'/>
                <BsClock size={'26px'}color='grey'/>
              </div>
            </div>
          </div>
          <div className={styles.links_container}>
            <Link 
              className={styles.link_item}
              to='https://github.com/kaililya/mesto-project-bootcamp' 
              target="_blank"
            >GitHub</Link>
            <Link 
              to='https://kaililya.github.io/mesto-project-bootcamp/' 
              target="_blank"
              className={styles.link_item}
            >Сайт</Link>
          </div>
          <p className={styles.description}>Одностраничный, адаптивный сайт, который создан с использованием в т.ч. Webpack и JavaScript.
Используется flexbox, grid CSS анимация, медиазапросы. Файловая структура организована по Nested БЭМ. </p>
          <h3 className={styles.feature_title}>Особенности</h3>
          <ul className={styles.features_container}>
            <li className={styles.feature_item}>Адаптивная вертска (для дисплеев шириной от 320px).</li>
            <li className={styles.feature_item}>Отсуствие хардкор данных, все приходит с backend.</li>
            <li className={styles.feature_item}>Валидация форм описана на JS</li>
          </ul>
          
        </div>
        <div className={styles.project_container}>
          <div className={`${styles.project_item} ${styles.project_item_smt}`}>
            <h2 className={`${styles.project_name} ${styles.project_name_smt}`}>Train Travel</h2>
            <div className={`${styles.wrapper} ${styles.wrapper_smt}`}>
              <ul className={styles.stuffs_container} >
                <li className={`${styles.stuff_item} ${styles.stuff_item_smt}`}>
                  <AiFillHtml5 size={'28px'} color='black'/>
                </li>
                <li className={`${styles.stuff_item} ${styles.stuff_item_smt}`}>
                  <FaCss3Alt size={'28px'} color='black'/>
                </li>
              </ul>
              <div className={styles.project_score}>
                <p className={`${styles.title} ${styles.title_smt}`}>Объем проектов:</p>
                <BsClock size={'26px'}color='black'/>
                <BsClock size={'26px'}color='black'/>
                <BsClock size={'26px'}color='black'/>
                <BsClock size={'26px'}color='grey'/>
                <BsClock size={'26px'}color='grey'/>
              </div>
            </div>
          </div>
          <div className={styles.links_container}>
            <Link 
              className={styles.link_item}
              to='https://github.com/kaililya/russian-travel-bootcamp' 
              target="_blank"
            >GitHub</Link>
            <Link 
              to='https://kaililya.github.io/russian-travel-bootcamp/' 
              target="_blank"
              className={styles.link_item}
            >Сайт</Link>
          </div>
          <p className={styles.description}>Тренировки на верстку одностраничного лендинга посвященного путешествию по России.</p>
          <h3 className={styles.feature_title}>Особенности</h3>
          <ul className={styles.features_container}>
            <li className={styles.feature_item}>Адаптивная вертска (для дисплеев шириной от 320px).</li>
            <li className={styles.feature_item}>Вышло неплохо :D</li>
          </ul>
        </div>
    </div>
  )
}

export default Projects