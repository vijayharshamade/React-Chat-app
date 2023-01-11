import './index.css'
import { FaUserFriends } from "react-icons/fa";

const Header = () => (
    <>

        <div className='header-container'>
            <div className='header-content-container'>
                <div className='introduction-container'>
                    <h1 className='heading'>Introductions</h1>
                    <p className='paragraph'>This Channel is For Company Wide Chatter</p>
                </div>
                <div className='number-container'>
                    <p className='paragraph'>3</p>
                    <p className='paragraph'>|</p>
                    <p className='paragraph'>100</p>
                    <FaUserFriends className='icon' />

                </div>
            </div>
        </div>

    </>
)

export default Header