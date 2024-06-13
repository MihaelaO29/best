import './App.css';
import logo from './images/logo.png';
import cupcake from './images/cupcake.png';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import grid_img1 from './images/img4.png';
import grid_img2 from './images/img5.png';
import grid_img3 from './images/img6.png';
import grid_img4 from './images/img7.png';
import grid_img5 from './images/img8.png';
import grid_img6 from './images/img9.png';
import grid_img7 from './images/img10.png';
import after_hover from './images/hover_image.png';


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

      <div className='menu_section'>
        <div className='menu_title'>Our Favourite Menu</div>
        <div className='all_meniu'>
          <div className='menu_1'>
            <div className='menu_description'>

              <div className='menu_list'>
                <div className='menu_list_product'>
                  <div className='menu_product'>Wonton with french fries</div>
                  <div className='product_price'>$5.00</div>
                </div>
                <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
              </div>

              <div className='menu_list'>
                <div className='menu_list_product'>
                  <div className='menu_product'>Roasted Red Potatoes with Rosemary</div>
                  <div className='product_price'>$5.00</div>
                </div>
                <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
              </div>


              <div className='menu_list'>
                <div className='menu_list_product'>
                  <div className='menu_product'>Bacon-Wrapped Shrimp with Garlic</div>
                  <div className='product_price'>$5.00</div>
                </div>
                <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
              </div>

              <div className='menu_list'>
                <div className='menu_list_product'>
                  <div className='menu_product'>Apple Smoked Chicken with White Sauce</div>
                  <div className='product_price'>$5.00</div>
                </div>
                <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
              </div>

              <div className='menu_list'>
                <div className='menu_list_product'>
                  <div className='menu_product'>Imported Oysters Grill (5 Pieces)</div>
                  <div className='product_price'>$5.00</div>
                </div>
                <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
              </div>

              <div className='menu_list'>
                <div className='menu_list_product'>
                  <div className='menu_product'>Apple Smoked Chicken with White Sauce</div>
                  <div className='product_price'>$5.00</div>
                </div>
                <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
              </div>
            </div>
          </div>


          <div className='menu_2'>
            <div className='menu_description'>

              <div className='menu_list'>
                <div className='menu_list_product'>
                  <div className='menu_product'>Wonton with french fries</div>
                  <div className='product_price'>$5.00</div>
                </div>
                <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>

                <div className='menu_list'>
                  <div className='menu_list_product'>
                    <div className='menu_product'>Roasted Red Potatoes with Rosemary</div>
                    <div className='product_price'>$5.00</div>
                  </div>
                  <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
                </div>


                <div className='menu_list'>
                  <div className='menu_list_product'>
                    <div className='menu_product'>Bacon-Wrapped Shrimp with Garlic</div>
                    <div className='product_price'>$5.00</div>
                  </div>
                  <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
                </div>

                <div className='menu_list'>
                  <div className='menu_list_product'>
                    <div className='menu_product'>Apple Smoked Chicken with White Sauce</div>
                    <div className='product_price'>$5.00</div>
                  </div>
                  <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
                </div>

                <div className='menu_list'>
                  <div className='menu_list_product'>
                    <div className='menu_product'>Imported Oysters Grill (5 Pieces)</div>
                    <div className='product_price'>$5.00</div>
                  </div>
                  <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
                </div>

                <div className='menu_list'>
                  <div className='menu_list_product'>
                    <div className='menu_product'>Apple Smoked Chicken with White Sauce</div>
                    <div className='product_price'>$5.00</div>
                  </div>
                  <div className='menu_ingredients'>Wonthon/Potato/Fries/Sauce</div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='galleries_section'>
<div className='galleries_title'>Foodbar Galleries</div>

<div className='all_gallery'>
  
  <div className='grid_img1'>
  <img className='grid_img' src={grid_img1} alt='img4'/>
  <img className='after_hover' src={after_hover} alt='hover_image'/>
  </div>

  <div className='grid_img2'>
  <img className='grid_img' src={grid_img2} alt='img5'/>
  <img className='after_hover' src={after_hover} alt='hover_image'/>
  </div>

<div className='grid_img3'>
  <img className='grid_img' src={grid_img3} alt='img6'/>
  <img className='after_hover' src={after_hover} alt='hover_image'/>
  </div>

<div className='grid_img4'>
  <img className='grid_img' src={grid_img4} alt='img7'/>
  <img className='after_hover' src={after_hover} alt='hover_image'/>
  </div>

  <div className='grid_img5'>
  <img className='grid_img' src={grid_img5} alt='img8'/>
  <img className='after_hover' src={after_hover} alt='hover_image'/>
  </div>

  <div className='grid_img6'>
  <img className='grid_img' src={grid_img6} alt='img9'/>
  <img className='after_hover' src={after_hover} alt='hover_image'/>
  </div>

  <div className='grid_img7'>
  <img className='grid_img' src={grid_img7} alt='img10'/>
  <img className='after_hover' src={after_hover} alt='hover_image'/>
</div>

</div>
      </div>

      <div className='reservation_section'>
        <div>Make Reservation</div>
        <div>

          <div>

            <input 
     type='text'
     placeholder='Enter your name'
            />
    <input 
     type='email'
     placeholder='Enter email address'
            />
              <input 
     type='number'
     placeholder='Phone number'
            />

          </div>
        </div>
  
      </div>
    </div>
  );
}

export default App;
