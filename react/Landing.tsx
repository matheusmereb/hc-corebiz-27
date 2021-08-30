import React, { useState, useCallback,/* useEffect*/ } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import styles from './style-landing.css';
import ClientService from './ClientService';
import { default as UUID } from "uuid";
//import Alert from '@material-ui/lab/Alert';

interface LandingProps { }

const CSS_HANDLES = ['landing'];

const Landing: StorefrontFunctionComponent<LandingProps> = ({ }) => {
  //const alert = useAlert();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [sendMail, setSendMail] = useState('');
  const handles = useCssHandles(CSS_HANDLES)

  const handleSubmit = useCallback((_event) => {
    _event?.preventDefault();
    //console.log(name, email, tel);
    let cliente =
    {
      "TableName": "clientes",
      "Item": {
        "clienteId": UUID.v4(),
        "email": email,
        "nome": name,
        "telefone": tel
      }
    }
    ClientService.createCliente(cliente)
      .then(response => {
        console.log(response);
        setName('')
        setEmail('')
        setTel('')
      });

  }, [name, email, tel, sendMail]);

  return (
    <div className={`${handles.landing} c-muted-1 db tc`}>
      <div className={`${styles.background}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.card}`}>
            <>
              <form onSubmit={handleSubmit}>
                <input className={`${styles.input}`} type="text" name="name" id="name" value={`${name}`}
                  placeholder="Seu Nome" onChange={useCallback(e => setName(e.target.value), [setName])} required />
                <input className={`${styles.input}`} type="email" name="email" id="email" value={`${email}`}
                  placeholder="Seu E-mail" onChange={useCallback(e => setEmail(e.target.value), [setEmail])} required />
                <input className={`${styles.input}`} type="tel" name="tel" id="tel" value={`${tel}`}
                  placeholder="Seu Telefone" onChange={useCallback(e => setTel(e.target.value), [setTel])} required />
                <button className={`${styles.button}`} type="submit" onClick={useCallback(() => setSendMail('Cadastrado com sucesso!'), [setSendMail])}>Cadastrar</button>
                <br />
                <br />
                <span className={`${styles.title}`}>{`${sendMail}`}</span>
              </form>
            </>
          </div>
          <div className={`${styles.containerTextos}`}>
          <h1 className={`${styles.title}`}>
                estamos aqui para o que precisar!</h1>
                <p>Deixe seus dados com a gente que entraremos em contato.</p>
            </div> 
        </div>
      </div>
    </div >
  )
}

Landing.schema = {
  title: 'editor.landingwapp.title',
  description: 'editor.landingwapp.description',
  type: 'object',
  properties: {},
}

export default Landing
