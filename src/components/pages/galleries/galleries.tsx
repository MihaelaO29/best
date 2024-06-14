import './galleries.css';
import grid_img1 from '../../../images/img4.png';
import grid_img2 from '../../../images/img5.png';
import grid_img3 from '../../../images/img6.png';
import grid_img4 from '../../../images/img7.png';
import grid_img5 from '../../../images/img8.png';
import grid_img6 from '../../../images/img9.png';
import grid_img7 from '../../../images/img10.png';


function Galleries() {
    return (
        <div className='galleries_section'>
            <div className='galleries_title'>Foodbar Galleries</div>

            <div className='all_gallery'>
                <div className='grid_img1'>
                    <img className='grid_img' src={grid_img1} alt='img4' />
                </div>
                <div className='grid_img2'>
                    <img className='grid_img' src={grid_img2} alt='img5' />
                </div>
                <div className='grid_img3'>
                    <img className='grid_img' src={grid_img3} alt='img6' />
                </div>
                <div className='grid_img4'>
                    <img className='grid_img' src={grid_img4} alt='img7' />
                </div>
                <div className='grid_img5'>
                    <img className='grid_img' src={grid_img5} alt='img8' />
                </div>
                <div className='grid_img6'>
                    <img className='grid_img' src={grid_img6} alt='img9' />
                </div>
                <div className='grid_img7'>
                    <img className='grid_img' src={grid_img7} alt='img10' />
                </div>
            </div>
        </div>
    );
}

export default Galleries;