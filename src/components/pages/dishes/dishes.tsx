import './dishes.css';
import img1 from '../../../images/img1.png';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.png';



function Dishes() {
    return (
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
    );
}

export default Dishes;