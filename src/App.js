import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard.js'
import AudioWave from './AudioWave.js'
import TabBar from './TabBar.js'
import ContactMe from './ContactMe.js'
import MySkills from './MySkills.js'
class App extends React.Component {
  constructor(props){
    super(props)
    
    
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
                    content: <p>My Data</p>
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
