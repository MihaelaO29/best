import './home.css';
import logo from '../../../images/logo.png'
import cupcake from '../../../images/cupcake.png';


function Home() {
    return (
        <div className='home_section'>
            <div className='navigation'>
                <img className='logo' src={logo} alt='logo' />
                <div className='navigation_menu'>
                    <div className='menu_link'>Home</div>
                    <div className='menu_link'>Dishes</div>
                    <div className='menu_link'>Menu</div>
                    <div className='menu_link'>Galleries</div>
                    <div className='menu_link'>Reservation</div>
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
                <div className='home_content_img'>
                    <img src={cupcake} alt='cupcake' />
                </div>
            </div>
        </div>
    );
}

export default Home;
