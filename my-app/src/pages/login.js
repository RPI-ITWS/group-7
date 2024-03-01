import React from 'react';
import Footer from '../components/footer';
import SideBar from '../components/sideBar';
import MuseamImage from '../images/Museam.png';
function LogIn() {
  return (
    <div className="App" style={{ backgroundColor: '#E2D6C0', width: '100%', height: '100%' }}>
      <div style={{ width: '100%', height: '30px', backgroundColor: '#FDF3DE' }}></div>
      <div style={{ backgroundColor: '#FDF3DE' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '82vh', borderRadius: '50px', background: '#E2D6C0', marginRight: '40px', marginLeft: '170px', paddingTop: '20px', overflow: 'hidden' }}>
          <div>
            <h1 style={{ fontFamily: 'Della Respira, serif', color: '#E4622E' }}>Create your Museo Account</h1>
            <p style={{ fontFamily: 'Della Respira, serif' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
            <div style={{ display: 'flex', fontFamily: 'Della Respira, serif' }}>
              <div style={{ margin: '8%', marginTop: '0px' }}>
                <form>
                  <label for="username">Username:</label><br></br>
                  <input type="text" id="username" name="username" style={{backgroundColor: '#FDF3DE', borderRadius: '15px', border: 'none', marginBottom: '10px'}}></input><br></br>
                  <label for="email">Email:</label><br></br>
                  <input type="text" id="email" name="email" style={{backgroundColor: '#FDF3DE', borderRadius: '15px', border: 'none', marginBottom: '10px'}}></input><br></br>
                  <label for="password">Password:</label><br></br>
                  <input type="text" id="password" name="password" style={{backgroundColor: '#FDF3DE', borderRadius: '15px', border: 'none', marginBottom: '10px'}}></input><br></br>
                  <label for="confirmPassword">Confirm Password:</label><br></br>
                  <input type="text" id="confirmPassword" name="confirmPassword" style={{backgroundColor: '#FDF3DE', borderRadius: '15px', border: 'none', marginBottom: '10px'}}></input><br></br>
                  <input type="checkbox" name="rememberMe"/>
                  <label> Remember Me </label>
                  
                  
                </form>

                <p style={{ fontSize: '10px' }}>By creating an account you agree to our Terms & Privacy</p>
                <button style={{ backgroundColor: '#E4622E', color: 'white', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', borderRadius: '12px' }}>Create Account</button>

              </div>

              <img src={MuseamImage} alt="Museam" width="500" height="333"></img>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}
export default LogIn;