import './reservation.css';
import Select from 'react-select';



function Reservation() {
    const options = [
        { value: 'New York', label: 'Select event New York' },
        { value: 'Barcelona', label: 'Select event Barcelona' },
        { value: 'Ibiza', label: 'Select event Ibiza' }
    ]

    return (
        <div className='reservation_section'>
            <div className='reservation_title'>Make Reservation</div>
            <div className='reservation_form'>
                <div className='form'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div >
                            <input className='reservation_input'
                                type='text'
                                placeholder='Enter your name'
                            />
                        </div>
                        <div>
                            <input className='reservation_input'
                                type='email'
                                placeholder='Enter email address'
                            />
                        </div>
                        <div>
                            <input className='reservation_input'
                                type='tel'
                                placeholder='Phone number'
                            />
                        </div>
                        <div>
                            <input className='reservation_input'
                                type='text'
                                placeholder='City'
                            />
                        </div>

                        <Select options={options} />
                    </div>
                    <button className='reservation_btn'>Make Reservation</button>
                </div>
            </div>
        </div>
    );
}

export default Reservation;
