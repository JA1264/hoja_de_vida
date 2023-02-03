import Foto from '../../assets/images/img.png'
import '../../assets/styles/Header.css'

function Header () {
    return ( 
        
      <>
          <div className='Header'>
            <img src={Foto} alt="" />
             <div className='Data'>
             <h1>Jorge Arturo Molina Gomez</h1>
            <h3>Estudinate</h3>
             </div>
          </div>

      </>
           
        
     );
}

export default Header;