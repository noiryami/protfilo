import Me from '../../assets/me.png';
import CV from "../../assets/Muhammad_Kamel_CV.pdf"; 
import HomeSocials from './HomeSocials';



import styles from './styles.module.css';

const {home, home_container,btns,me,scrollDown}  = styles;
const Home = () => {
  return (
    <div className={home} >
      <div className=' container' >
      <div className={home_container}>
      
        <h4>Hello I'm</h4>
        <h1>Muhammad Kamel</h1>
        <h4 className='text-light'> Frontend Developer</h4>
        <div className={btns}>
          <a href={CV} className='btn' download >Download CV</a>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        <div className={me}>
            <img src={Me} alt='me' />
          </div>

          <a href="#about" className={scrollDown} >Scroll Down</a>
        <HomeSocials />
      </div>
      </div>
    </div>
  )
}

export default Home