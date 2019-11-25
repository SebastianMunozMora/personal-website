import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard.js'
import AudioWave from './AudioWave.js'
import TabBar from './TabBar.js'
import ContactMe from './ContactMe.js'
import MySkills from './MySkills.js'
import AudioEngineering from './AudioEngineering.js'

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.audio = [
      {
        name: "Anechoic Chamber",
        imgs: [
            './an1.jpg',
            './an2.jpg',
            './an3.jpg'
          ],
          desc: "Created as a class project, it was built for testing small, high frequency range audio speakers or wave guides, it works for 1kHz and above. It's equipped with an XLR input, microphone base, speaker base, and a 360° rotation lever for the speaker, built with Black theater, 10 cm Wedges and MDF",
        },
        {
          name: "Midi Controller",
          imgs:[
            "./mid1.png",
            "./mid2.png",
            "./mid3.png"
          ],
          desc: "A tool built in Android Studio in Java for users to control their MIDI devices over the usb with their smartphone"
        },
        
      ]
    
    this.items = [{
                    name: "About", 
                    content: <ProfileCard />
                  }, 
                  {
                    name: "Web Projects", 
                    content: <p>My Projects</p>
                  },
                  {
                    name: "Skills", 
                    content: <MySkills />
                  },
                  {
                    name: "Audio Engineering", 
                    content: <AudioEngineering items={this.audio} />
                  },
                  {
                    name: "Hobbies", 
                    content: <p>My Hobbies</p>
                  },
                  {
                    name: "Contact Me", 
                    content: <ContactMe />
                  },
                ]
  }
  render (){
    return( <div className="App">
      <header className="App-header">
        <AudioWave Amplitude = {1} f = {2} color="#acaaaa85" />
        <h1>Sebastián Muñoz Mora</h1>
        <TabBar items = {this.items} />
        
      
      </header>
    </div>
    )
  }
}

export default App;
