import Styles from '../styles/Input.module.css'
export default function run(props){
    return (
        <input type={props.type} value={props.value} className={Styles.input}/>
    )
}