import React, { Component } from 'react';
import './LoadingPage.css';
import LandingPage from './LandingPage';
class LoadingPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.displayLandingPage = this.displayLandingPage.bind(this);
     
    }

    displayLandingPage() {
        this.setState({ visible: true });
    
    }

   

    render() {
      return (
        
        
          <div className="LoadingPage">
          
              <div className="FlexLoadingPage">
              <button className="buttonTchiTcha" onClick={this.displayLandingPage}><div id="text"></div>TCHITCHA</button>
                    {/* <h1 id="typeWriting">Tchi Tcha, a major place of french cinema</h1> */}
                    
              </div>
              
              {this.state.visible ? <LandingPage /> : true} 
              

          </div>
            
          );
        }

}

export default LoadingPage;