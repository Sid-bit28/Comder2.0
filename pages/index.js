import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className="banner">
        <Image src="/banner.jpg" width={966} height={276} />
      </div>
       <h2>Welcome to Comder2.0</h2>
      <div>
        <p>Here you can find hundreds of programming problems to solve. If you're new here you're very much welcome! Just register and start solving.</p>
      </div>
    </div>
  )
}
