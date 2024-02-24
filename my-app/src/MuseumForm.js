import React, { useState } from 'react';


const MuseumForm = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    return (
        <div style={{width: '100%', height: '100%', position: 'absolute', left: '32vw', top: '60vh'}}>
            <div style={{width: 855, height: 289, left: 0, top: 0, position: 'absolute', background: '#FDF3DE', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 20}} />
            <div style={{width: 792.91, height: 241, left: 31.55, top: 19, position: 'absolute'}}>
                <div style={{width: 292.12, height: 66, left: 0, top: 0, position: 'absolute'}}>
                    <div style={{width: 292.12, height: 37, left: 0, top: 29, position: 'absolute'}}>
                        <div style={{width: 292.12, height: 37, left: 0, top: 0, position: 'absolute', background: '#FDF3DE', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 5, border: '2px #E4622E solid'}} />
                        <div style={{width: 103.82, left: 13.23, top: 8, position: 'absolute', color: '#9B8C78', fontSize: 16, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Start Typing...</div>
                    </div>
                    <div style={{width: 138.43, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#4B4338', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '700', wordWrap: 'break-word'}}>*Museum Name</div>
                </div>
                <div style={{width: 213.75, height: 65, left: 0, top: 85, position: 'absolute'}}>
                    <div style={{width: 213.75, height: 37, left: 0, top: 28, position: 'absolute'}}>
                    <input type="date" value={selectedDate} onChange={handleDateChange} style={{width: 213.75, height: 37, left: 0, top: 0, position: 'absolute', background: '#FDF3DE', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 5, border: '2px #4B4338 solid', paddingLeft: '10px', paddingRight: '10px', fontSize: 16}} />
                    </div>
                    <div style={{width: 117.05, left: 0, top: 0, position: 'absolute', color: '#4B4338', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '700', wordWrap: 'break-word'}}>*Date Visited</div>
                </div>
                <div style={{width: 213.75, height: 65, left: 0, top: 176, position: 'absolute'}}>
                    <div style={{width: 213.75, height: 37, left: 0, top: 28, position: 'absolute'}}>
                        <div style={{width: 213.75, height: 37, left: 0, top: 0, position: 'absolute', background: '#FDF3DE', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 5, border: '2px #4B4338 solid'}} />
                        <div style={{width: 163.88, left: 12.21, top: 8, position: 'absolute', color: '#9B8C78', fontSize: 16, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Enter six-digit code</div>
                    </div>
                    <div style={{width: 177.11, left: 0, top: 0, position: 'absolute', color: '#4B4338', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '700', wordWrap: 'break-word'}}>Verification Number</div>
                    <div style={{width: 17.30, height: 17, left: 186.27, top: 4, position: 'absolute'}}>
                        <img style={{width: 17.30, height: 17, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/17x17" alt="placeholder" />
                        <div style={{width: 17.30, height: 17, left: 0, top: 0, position: 'absolute', background: '#4B4338'}} />
                    </div>
                </div>
                <div style={{width: 467.20, height: 175, left: 325.71, top: 1, position: 'absolute'}}>
                    <div style={{width: 467.20, height: 147, left: 0, top: 28, position: 'absolute'}}>
                        <div style={{width: 467.20, height: 147, left: 0, top: 0, position: 'absolute', background: '#FDF3DE', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 5, border: '2px #4B4338 solid'}} />
                        <div style={{width: 369.48, height: 66.50, left: 12.21, top: 7, position: 'absolute', color: '#9B8C78', fontSize: 16, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Write whatever you want! What did you think of the museum?</div>
                    </div>
                    <div style={{width: 154.71, left: 0, top: 0, position: 'absolute', color: '#4B4338', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '700', wordWrap: 'break-word'}}>Thoughts & Notes</div>
                </div>
                <div style={{width: 190.34, height: 40, paddingTop: 9, paddingBottom: 7, paddingLeft: 8, paddingRight: 8, left: 602.57, top: 198, position: 'absolute', background: '#499D7B', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 33, overflow: 'hidden', border: '2px #499D7B solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                    <div style={{color: '#FDF3DE', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>ADD MUSEUM</div>
                </div>
                <div style={{width: 181.18, height: 47, left: 325.71, top: 194, position: 'absolute'}}>
                    <div style={{width: 181.18, height: 20, left: 0, top: 27, position: 'absolute'}}>
                        <div style={{width: 155.73, height: 17, left: 25.45, top: 2, position: 'absolute', color: '#4B4338', fontSize: 14, fontFamily: 'Syne', fontWeight: '400', wordWrap: 'break-word'}}>Make your notes public?</div>
                        <div style={{width: 20.36, height: 20, left: 0, top: 0, position: 'absolute', background: '#E2D6C0', borderRadius: 9999, border: '2px #499D7B solid'}} />
                    </div>
                    <div style={{width: 181.18, height: 20, left: 0, top: 0, position: 'absolute'}}>
                        <div style={{width: 155.73, height: 17, left: 25.45, top: 2, position: 'absolute', color: '#4B4338', fontSize: 14, fontFamily: 'Syne', fontWeight: '400', wordWrap: 'break-word'}}>Make this stamp public?</div>
                        <div style={{width: 20.36, height: 20, left: 0, top: 0, position: 'absolute', background: '#E2D6C0', borderRadius: 9999, border: '2px #499D7B solid'}} />
                        <img style={{width: 10.56, height: 10.43, left: 5.11, top: 4.99, position: 'absolute'}} src="https://via.placeholder.com/11x10" alt="placeholder" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MuseumForm;

