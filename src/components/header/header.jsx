
import { Search, BellRing,UserRound } from 'lucide-react';
import './style.css';
const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src="/eduwire-white-logo.png" alt="" />
        </div>
        <div className='header-right'>
            {/* <div className='search-btn'>
                <input type="text" placeholder='search...' />
                <Search />
            </div> */}
            
               <BellRing />
               {/* <span>2</span> */}
           
            <span>Hello, John</span>
             <div className='profile-user'>
              <UserRound />
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
