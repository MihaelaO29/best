import './home.css';
import logo from '../../../images/logo.png'
import cupcake from '../../../images/cupcake.png';
import icon1 from '../../../images/icon1.png';
import icon2 from '../../../images/icon2.png';
import icon3 from '../../../images/icon3.png';
import icon4 from '../../../images/icon4.png';
import icon5 from '../../../images/icon5.png';
import icon6 from '../../../images/icon6.png';



function Home() {

    return (
        <div className='home_section'>
            <div className='navigation'>
                <div className='nav'>
                    <img className='logo' src={logo} alt='logo' />
                    <div className='navigation_menu'>
                        <div className='menu_link'>Home</div>
                        <div className='menu_link'>Dishes</div>
                        <div className='menu_link'>Menu</div>
                        <div className='menu_link'>Galleries</div>
                        <div className='menu_link'>Reservation</div>
                    </div>
                </div>
            </div>

            <div className='home_content'>
                <div className='home_content_details'>
                    <div className='home_title'>Delicious Cupcakes</div>
                    <div className='home_text'>At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident
                    </div>
                    <button className='home_btn'>Check Our Menu</button>
                </div>

                <div className='cupcake-container'>
                    <img src={cupcake} alt='Cupcake' className='cupcake-image' />
                    <img src={icon1} alt='Icon 1' className='icon icon1' />
                    <img src={icon2} alt='Icon 2' className='icon icon2' />
                    <img src={icon3} alt='Icon 3' className='icon icon3' />
                    <img src={icon4} alt='Icon 4' className='icon icon4' />
                    <img src={icon5} alt='Icon 5' className='icon icon5' />
                    <img src={icon6} alt='Icon 6' className='icon icon6' />
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Home;
