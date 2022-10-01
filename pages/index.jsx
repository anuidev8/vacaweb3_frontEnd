
import Link from 'next/link'
import { MainLogo } from '../components/brand/MainLogo'
import { Character } from '../components/svg'
import MainLayout from  '../layouts/MainLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
      <MainLayout userDetail={false}>
          <section className={styles.grid}>
              <div className={`d-flex  flex-column  ${styles.grid_item} ${styles.grid_item_text}`}>
             
                  <MainLogo size={'17rem'} />
             
                  <h1 className='text-medium '>
                    A different way to support your
                    developers through a centralized network
                  </h1>
                  <div className={`d-flex ${styles.buttons}`}>
                  <button className="w-btn w-btn-white">Join Us</button>
                  <Link href={'/dashboard/projects'}>
                    <button className="w-btn w-btn-primary">Aportar</button>
                  </Link>
                  </div>
              </div>
              <div className={styles.grid_item}>
                  <Character />
              </div>
              <div className={styles.cover}></div>
          </section>
      </MainLayout>
  )
}
