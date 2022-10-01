
import Image from 'next/image'
import styles from './Header.module.css'


//NAVIGATION
import { navigation } from '../../utils/navigationLinks'
import Link from 'next/link'
import { Fragment } from 'react'
import { MainLogo } from '../brand/MainLogo'
const Header = ({userDetail = true}) =>{

    return(
        <header className={styles.header}>
            <nav className={styles.navbar}>
                    <Link href={'/'}>
                        <a className='d-flex justify-content'>
                        <MainLogo />
                        </a>
                    </Link>
                    <ul className={`d-flex align-items ${styles.navigation}`}>
                        {
                            navigation.map((item,key)=>(
                                <Link  href={`${item.route}`} key={key}>
                                    <span className={`text-bold ${styles.navbar_items}`} >
                                      {item.name}      
                                    </span>
                                </Link>
                            ))
                        }
                        {
                            userDetail &&
                            <Fragment >
                            <li className='text-1xl d-flex justify-center align-items'>
                            0x14DFbA... 
                            </li>
                            <li>
                                <figure className={styles.profile}>
                                    <Image
                                        alt='profile'
                                        width={100}
                                        height={100}
                                        objectFit="cover"
                                        layout="responsive"
                                        src={'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__340.jpg'}
                                    />
                                </figure>
                            </li>
                            </Fragment>
                        }
                        {
                             !userDetail &&
                             <li>
                                  <button className="w-btn w-btn-primary">Aportar</button>
                             </li>

                        }
                        
                    </ul>
            </nav>
        </header>
    )

}

export default Header