import './galleries.css';
import grid_img1 from '../../../images/img4.png';
import grid_img2 from '../../../images/img5.png';
import grid_img3 from '../../../images/img6.png';
import grid_img4 from '../../../images/img7.png';
import grid_img5 from '../../../images/img8.png';
import grid_img6 from '../../../images/img9.png';
import grid_img7 from '../../../images/img10.png';
import after_hover from '../../../images/hover_image.png';

function Galleries() {
    return (
        <div className='galleries_section'>
            <div className='galleries_title'>Foodbar Galleries</div>

            <div className='all_gallery'>
                <div className='grid_img1'>
                    <img className='grid_img' src={grid_img1} alt='img4' />
                    <img className='after_hover' src={after_hover} alt='hover_image' />
                </div>
                <div className='grid_img2'>
                    <img className='grid_img' src={grid_img2} alt='img5' />
                    <img className='after_hover' src={after_hover} alt='hover_image' />
                </div>
                <div className='grid_img3'>
                    <img className='grid_img' src={grid_img3} alt='img6' />
                    <img className='after_hover' src={after_hover} alt='hover_image' />
                </div>
                <div className='grid_img4'>
                    <img className='grid_img' src={grid_img4} alt='img7' />
                    <img className='after_hover' src={after_hover} alt='hover_image' />
                </div>
                <div className='grid_img5'>
                    <img className='grid_img' src={grid_img5} alt='img8' />
                    <img className='after_hover' src={after_hover} alt='hover_image' />
                </div>
                <div className='grid_img6'>
                    <img className='grid_img' src={grid_img6} alt='img9' />
                    <img className='after_hover' src={after_hover} alt='hover_image' />
                </div>
                <div className='grid_img7'>
                    <img className='grid_img' src={grid_img7} alt='img10' />
                    <img className='after_hover' src={after_hover} alt='hover_image' />
                </div>
            </div>
        </div>

    );
}

export default Galleries;