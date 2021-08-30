import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import styles from './style.css';
import { WhatsApp, Person, EmojiEvents, ShoppingCart } from '@material-ui/icons';
interface SupportProps { }

const CSS_HANDLES = ['support'];
const Support: StorefrontFunctionComponent<SupportProps> = ({ }) => {

  const handles = useCssHandles(CSS_HANDLES)

  return (

    <div className={`${handles.support} c-muted-1 db tc`}>
      <div className={`${styles.supportAll}`}>
        <nav className={`${styles.support_nav}`}>
          <ul className={`${styles.support_ul}`}>
            <li className={`${styles.support_li}`}>
              <a className={`${styles.support_a}`} href="/landing"><Person />Entrar</a>
            </li>
            <li className={`${styles.support_li}`}>
              <a className={`${styles.support_a}`} href="/kit-upmedal"> <EmojiEvents />Desafios</a>
            </li>
            <li className={`${styles.support_li}`}>
              <a className={`${styles.support_a}`} href="/" ><ShoppingCart />Loja</a>
            </li>
            <li className={`${styles.support_li}`}>
              <a className={`${styles.support_a}`} href="https://api.whatsapp.com/send?phone=5587999887091&text=Em%20que%20posso%20ajud%C3%A1-lo%3F"> <WhatsApp />Suporte</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

Support.schema = {
  title: 'editor.supportwapp.title',
  description: 'editor.supportwapp.description',
  type: 'object',
  properties: {},
}

export default Support
