// import React from 'react';
import Footer from '../components/footer';
import SideBar from '../components/sideBar';
import React, { useState } from 'react';
function Contact() {
  const [selectedDate, setSelectedDate] = useState('');
    const [selectedMuseum, setSelectedMuseum] = useState('');
    const [showForm, setShowForm] = useState(true);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const museums = [
        { id: 1, name: "Museum 1" },
        { id: 2, name: "Museum 2" },
        // Add more museums as needed
    ];

    const handleAddMuseum = () => {
        setShowForm(false);
        // change the ADD A MUSEUM button to say ADD STAMP
        
        // Add museum to database and trigger the abality to add the stamp
    };

    const handleMuseumChange = (event) => {
        setSelectedMuseum(event.target.value);
    };
  return (
    <div className="App" style={{ backgroundColor: '#E2D6C0', width: '100%', height: '100%'}}>
    <div style={{ width: '100%', height:'30px',  backgroundColor: '#FDF3DE'}}></div>
    <div style={{ backgroundColor: '#FDF3DE' }}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '82vh', borderRadius: '50px', background: '#E2D6C0', marginRight: '40px', marginLeft: '170px', paddingTop:'20px', overflow:'hidden'}}>
    <form
      // action={FORM_ENDPOINT}
      // onSubmit={handleSubmit}
      // method="POST"
    >
      <div style={{transform: 'scale(1.5)', position: 'absolute', left: '16%', top: '18%', fontFamily: 'Kumbh Sans'}}>
            {showForm && (
                <div style={{width: 855, height: 289, left: 0, top: 0, position: 'absolute', background: '#FDF3DE', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 20}} >
                <div style={{width: 792.91, height: 241, left: 31.55, top: 19, position: 'absolute'}}>
                    <div style={{width: 292.12, height: 66, left: 0, top: 0, position: 'absolute'}}>
                        <div style={{width: 292.12, height: 37, left: 0, top: 29, position: 'absolute'}}>
                            <input type="text" placeholder="John Doe"
                                value={selectedMuseum}
                                onChange={handleMuseumChange}
                                style={{
                                    width: 213.75,
                                    height: 37,
                                    left: 0,
                                    top: 0,
                                    position: 'absolute',
                                    background: '#FDF3DE',
                                    boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)',
                                    borderRadius: 5,
                                    border: '2px #4B4338 solid',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    fontSize: 16,
                                    outlineColor: '#FF6E34'
                                }}
                            >
                                
                            </input>
                        </div>
                        <div style={{width: 138.43, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#4B4338', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '700', wordWrap: 'break-word'}}>Name</div>
                    </div>
                    <div style={{width: 213.75, height: 65, left: 0, top: 85, position: 'absolute'}}>
                    <div style={{width: 213.75, height: 37, left: 0, top: 28, position: 'absolute'}}>
                            <input type="text" placeholder="johndoe@example.com" style={{width:  292.12, height: 37, left: 0, top: 0, position: 'absolute', background: '#FDF3DE', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 5, border: '2px #4B4338 solid', fontSize: 18, paddingLeft: '10px', outlineColor: '#FF6E34'}} />
                        </div> 
                        <div style={{width: 177.11, left: 10, top: 0, position: 'absolute', color: '#4B4338', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '700', wordWrap: 'break-word'}}>
                            Email
                        </div>
                    </div>
                    
                    <div style={{width: 467.20, height: 175, left: 325.71, top: 1, position: 'absolute'}}>
                        <textarea placeholder="Write whatever you want! What did you think of the museum?" style={{width: 450, height: 147, left: 0, top: 28, position: 'absolute', background: '#FDF3DE', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 5, border: '2px #4B4338 solid', outlineColor: '#FF6E34', paddingTop:'5px', paddingLeft: '10px', paddingRight:'10px',resize: "none"}}> </textarea>
                        <div style={{width: 154.71, left: 0, top: 0, position: 'absolute', color: '#4B4338', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '700', wordWrap: 'break-word'}}>Message</div>
                    </div>
                    <button onClick={handleAddMuseum} style={{width: 190.34, height: 50, paddingTop: 9, paddingBottom: 7, paddingLeft: 8, paddingRight: 8, left: 602.57, top: 198, position: 'absolute', background: '#499D7B', boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)', borderRadius: 33, overflow: 'hidden', border: '2px #499D7B solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex', color: '#FDF3DE', fontSize: 18, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>
                        Submit
                    </button>
                    <div style={{width: 181.18, height: 47, left: 325.71, top: 194, position: 'absolute'}}>
                        <div style={{width: 181.18, height: 20, left: 0, top: 30, position: 'absolute'}}>
                            <div style={{width: 155.73, height: 17, left: 25.45, top: 4, position: 'absolute',textAlign: 'left', color: '#4B4338', fontSize: 13, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Send confirmation to email?</div>
                            <input type="checkbox" style={{width: 20.36, height: 20, left: 0, top: 0, position: 'absolute', background: '#E2D6C0', borderRadius: 9999, border: '2px #499D7B solid'}} />
                        </div>
                        <div style={{width: 181.18, height: 20, left: 0, top: 0, position: 'absolute'}}>
                            <div style={{width: 155.73, height: 17, left: 25.45, top: 4, textAlign: 'left', position: 'absolute', color: '#4B4338', fontSize: 13, fontFamily: 'Kumbh Sans', fontWeight: '400', wordWrap: 'break-word'}}>Do you wish for extra news from Museo?</div>
                            <input type="checkbox" style={{width: 20.36, height: 20, left: 0, top: 0, position: 'absolute', background: '#E2D6C0', borderRadius: 9999, border: '2px #499D7B solid'}} />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
      
      
    </form>
    </div>
    </div>
    <div style={{ position: 'fixed', top: 0, left: 0 }}>
     
      <SideBar />
    </div>
    <Footer />
  </div>
  );
}
export default Contact;