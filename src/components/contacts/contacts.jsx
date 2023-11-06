import styles from './contacts.module.css'
import { BsTelegram, BsPhone } from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'


function Contacts() {
  return (
    <div className={styles.main_container}>
      <div className={styles.skills_container}>
        <ul className={styles.icons_container}>
          <li>
            <a className={`${styles.icons_container_item} ${styles.icons_container_item_telegram}`} target="_blank" href="https://t.me/kail_ilya">
              <BsTelegram size={'32px'} />
              Telegram (@kail_ilya)
            </a>
          </li>
          <li>
            <a className={`${styles.icons_container_item} ${styles.icons_container_item_git}`} target="_blank" href="https://github.com/kaililya?tab=repositories">
            <AiFillGithub size={'32px'} />
             GitHub
            </a>
          </li>
          <li>
            <a className={`${styles.icons_container_item} ${styles.icons_container_item_phone}`} href='tel:+998949504760'>
              <BsPhone size={'32px'} />
              +998949504760
            </a>
          </li>
          <li className={styles.icons_container_item}>
              <BsPhone size={'32px'} />
              +79295109566 (только Telegram / WhatsApp)
          </li>
          <li className={styles.icons_container_item}>
            <MdAlternateEmail size={'32px'} />
              ilyakailjobmail@gmail.com
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Contacts