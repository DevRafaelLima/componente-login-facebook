import Styles from '../styles/Containeresquerdo.module.css'
import Input from './Inputemail'
import Btn from './Btn'
import BtnCriarConta from './BtnCriarConta'
export default function run(){
    return(
        <div className={Styles.esquerdo}>
            <Input value="Email ou Telefone" type="email"/>
            <Input value="Senha" type="password"/>
            <Btn/>
            <a href="" className={Styles.link}>Esqueceu a senha?</a>
            <hr></hr>
            <BtnCriarConta/>
        </div>
    )
}