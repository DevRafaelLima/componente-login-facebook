import Styles from '../styles/Home.module.css'
import Direito from '../components/Containerdireito'
import Esquerdo from '../components/Containeresquerdo'
export default function Home() {
  return (
    <>
    <div className={Styles.container}>
      <Direito/>
      <Esquerdo/>
    </div>
    </>
  )
}
