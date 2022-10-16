import React from "react";
import Table from './Table';
import {characters} from "./characters";

class App extends React.Component {
    state ={
        characters: {characters}
    }
}

const removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
        characters: characters.filter((character, i) => {
            return i !== index
        })
    })
}

    render()
    {
        const { characters } = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
export default App;