import './App.css';
import logo from './images/logo.png';
import cupcake from './images/cupcake.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';


function App() {
  return (
    <div className='App'>
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


      <div className='dishes_section'>
        <div className='dishes_title'>Our Top Rated Dishes</div>

        <div className='dishes_products'>

          <div className='dishes_products_details' >
            <img className='dishes_image' src={img1} alt='img1' />
            <div className='product_title'>Bread Fruit Cheese Sandwich</div>
            <div className='product_text'>Bread/Potato/Cheese</div>
            <div className='product_price'>$5.59</div>
          </div>

          <div className='dishes_products_details'>
            <img className='dishes_image' src={img2} alt='img2' />
            <div className='product_title'>Bread Fruit Cheese Sandwich</div>
            <div className='product_text'>Bread/Potato/Cheese</div>
            <div className='product_price'>$5.59</div>
          </div>

          <div className='dishes_products_details'>
            <img className='dishes_image' src={img3} alt='img3' />
            <div className='product_title'>Bread Fruit Cheese Sandwich</div>
            <div className='product_text'>Bread/Potato/Cheese</div>
            <div className='product_price'>$5.59</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
