import './menu.css';
import truck from './../../../images/truck.png';

function Menu() {
    return (
        <div className='menu_section'>
            <div className='truck_animation'>
              <img className='truck' src={truck} alt='truck'/>  
            </div>
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
    );
}

export default Menu;