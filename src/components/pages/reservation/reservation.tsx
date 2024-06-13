import './reservation.css';



function Reservation() {
    return (
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
    );
}

export default Reservation;
