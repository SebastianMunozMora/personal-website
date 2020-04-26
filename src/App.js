import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './Components/ProfileCard.js'
import AudioWave from './Components/AudioWave.js'
import TabBar from './Components/TabBar.js'
import ContactMe from './Components/ContactMe.js'
import MySkills from './Components/MySkills.js'
import AudioEngineering from './Components/AudioEngineering.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.projects =[
      {
        name:"Audio Speaker design",
        imgs:[
          './audio.png'
        ],
        desc:'Final class project during my education in Bogota Bootcamp, I\'\ts a website built for the user to be able to design their speaker system choosing casings, and drivers with color variations, the technique used to change the colors can be used for shirt or bags design',
        link:'https://sebastianmunozmora.github.io/AudioShopFront/'
      },
      {
        name:"Astronomy Picture of the Day Android Front End",
        imgs:[
          './astro1.png',
          './astro2.png'
        ],
        desc:'Built using Android Studio and Java, consumes the Nasa Api and displays the picture, the date and the description. There is a date picker to view all of the picture uploaded to the api',
        link:''
      },
      {
        name:"Music Networking",
        imgs:[
          './astro1.png',
          './astro2.png'
        ],
        desc:'Built using Android Studio and Java, consumes the Nasa Api and displays the picture, the date and the description. There is a date picker to view all of the picture uploaded to the api',
        link:''
      },
    ]
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
                    content: <AudioEngineering items={this.projects} />
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
                    name: "Contact Me", 
                    content: <ContactMe />
                  }
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
