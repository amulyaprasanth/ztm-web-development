import React, {Component} from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            ImageUrl: '',
        }
    }

    onInputChange = (event) => {
        this.setState({ input: event.target.value})
        console.log('Check')
    }

    onButtonSubmit = () => {
        this.setState({ImageUrl: this.state.input})
        
        
        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": "amulyaprasanth",
                "app_id": "my-first-application"
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg/800px-IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg"
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key d4a25ab1de8d469dac58785b8e1c6cc9'
            },
            body: raw
        };

        // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
        // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
        // this will default to the latest version_id

        fetch("https://api.clarifai.com/v2/models/face-detection/versions/45fb9a671625463fa646c3523a3087d5/outputs", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result.outputs[0].data.regions[0].region_info.bounding_box))
            .catch(error => console.log('error', error));
       console.log('click')
        console.log(raw);
    }


  render() {
    return (
      <div className="App">
        <ParticlesBg type='cobweb' bg={true}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
        />
      <FaceRecognition ImageUrl={this.state.ImageUrl}/>
      </div>
    )
  }
}

export default App;
