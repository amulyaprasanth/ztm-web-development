import React, {Component} from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn  from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import { APIKey } from './APIKey';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            ImageUrl: '',
            box : {},
            route: 'SignIn',
            isSignedIn: false,
        }
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        
        return {
            leftCol : clarifaiFace.left_col * width,
            topRow : clarifaiFace.top_row * height,
            rightCol : width - (clarifaiFace.right_col * width),
            bottomRow : height - (clarifaiFace.bottom_row * height)
        }
    }

    displayFaceBox = (box) => {
        console.log(box);
        this.setState({box : box})
    }

    onInputChange = (event) => {
        this.setState({ input: event.target.value})
        console.log('Check')
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({isSignedIn: false})
        } else if (route === 'home') {
            this.setState({isSignedIn: true})
        }

        this.setState({ route: route });
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
                            "url": this.state.input
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + APIKey
            },
            body: raw
        };

        // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
        // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
        // this will default to the latest version_id

        fetch("https://api.clarifai.com/v2/models/face-detection/versions/45fb9a671625463fa646c3523a3087d5/outputs", requestOptions)
            .then(response => response.json())
            .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
            .catch(error => console.log('error', error));
    }


    render() {
    const { isSignedIn, ImageUrl, route, box } = this.state;
    return (
    <div className="App">
        <ParticlesBg type='cobweb' bg={true}/>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' ?
            <div>
                    <Logo />
                    <Rank />
                    <ImageLinkForm
                        onInputChange={this.onInputChange}
                        onButtonSubmit={this.onButtonSubmit}
                    />
                    <FaceRecognition box={box} ImageUrl={ImageUrl}
                    /> 
                </div>
                :
                (
                    route ==='SignIn' 
                    ?
                    <SignIn onRouteChange={this.onRouteChange}/>
                    :
                    <Register onRouteChange={this.onRouteChange}/>
                )
        }
      </div>
    )
  }
}

export default App;
