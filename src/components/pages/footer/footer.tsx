import './footer.css';
import submit from '../../../images/submit.png';



function Footer() {
    return (
        <div className='footer_section'>
            <div className='footer_details'>

                <div className='footer_element'>
                    <div className='footer_title'>Top Products</div>
                    <div className='footer_text'>Managed Website</div>
                    <div className='footer_text'>Manage Reputation</div>
                    <div className='footer_text'>Power Tools</div>
                    <div className='footer_text'>Marketing Service</div>
                </div>

                <div className='footer_element'>
                    <div className='footer_title'>Quick Links</div>
                    <div className='footer_text'>Jobs</div>
                    <div className='footer_text'>Brand Assets</div>
                    <div className='footer_text'>Investor Relations</div>
                    <div className='footer_text'>Terms of Service</div>
                </div>

                <div className='footer_element'>
                    <div className='footer_title'>Features</div>
                    <div className='footer_text'>Jobs</div>
                    <div className='footer_text'>Brand Assets</div>
                    <div className='footer_text'>Investor Relations</div>
                    <div className='footer_text'>Terms of Service</div>
                </div>


                <div className='footer_element'>
                    <div className='footer_title'>Resources</div>
                    <div className='footer_text'>Guides</div>
                    <div className='footer_text'>Research</div>
                    <div className='footer_text'>Experts</div>
                    <div className='footer_text'>Agencies</div>
                </div>

                <div className='newsletter_section'>
                    <div className='newsletter_title'>Newsletter</div>
                    <div className='newsletter_text'>Stay updated with our latest trends</div>
                    <div className='newsletter_input_submit'>
                        <input
                            className='newsletter_input'
                            type='text'
                            placeholder='Enter your email address'
                        />
                        <button className='submit_btn'>
                            <img  className='submit' src={submit} alt='submit' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;