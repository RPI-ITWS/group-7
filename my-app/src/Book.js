import HTMLFlipBook from 'react-pageflip';
import bookLeft from './images/bookLeft.png';
import bookRight from './images/bookRight.png';
import Pencil from './images/Pencil.png';
import Inkpad from './images/InkPad.png';
import Circle from './images/Circle.png';
import MuseumForm from './MuseumForm.js';
import { useState } from 'react';
function MyBook(props) {
    const [showForm, setShowForm] = useState(false);

    const handleCircleClick = () => {
        setShowForm(!showForm);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '82vh', borderRadius: '50px', background: '#E2D6C0', marginRight: '40px', marginLeft: '170px', paddingTop:'20px'}}>
            <div style={{width: '20vw', height: '20vw', position: 'absolute', left: '67vw', top: '35vh'}}>
                <img src={Pencil} alt="Pencil" style={{width: '100%', height: '100%'}} />
            </div>
            <div style={{width: '12vw', height: '12vw', position: 'absolute', left: '13vw', top: '60vh'}}>
                <img src={Circle} alt="Circle" style={{width: '100%', height: '100%'}} onClick={handleCircleClick} />
            </div>
            <div style={{width: '12vw', height: '12vw', position: 'absolute', left: '24vw', top: '64vh'}}>
                <img src={Inkpad} alt="Inkpad" style={{width: '100%', height: '100%'}} />
            </div>
            
            <HTMLFlipBook width={515} height={590}>
                <div className="demoPage">
                    <img src={bookLeft} alt="Page 1" />
                    <p></p>
                </div>
                <div className="demoPage">
                    <img src={bookRight} alt="Page 2" />
                    <p></p>
                </div>
                <div className="demoPage">
                    <img src={bookLeft} alt="Page 3" />
                    <p></p>
                </div>
                <div className="demoPage">
                    <img src={bookRight} alt="Page 4" />
                    <p></p>
                </div>
            </HTMLFlipBook>
            {showForm && <MuseumForm />}
        </div>
    );
}

export default MyBook;
