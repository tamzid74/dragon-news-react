import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <img className='mx-auto' src={logo} alt="Dragon News" />
            <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-lg'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;