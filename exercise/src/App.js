
   
import React, { Component } from 'react'
import './App.css'
import DisplaySupers from './Components/DisplaySupers';

class App extends Component {
    constructor(props){
        super(props);
        this.nameAll = [
            'Mike',
            'Nevin', 
            'Aaron', 
            'Tory', 
            'Kelly'
        ]

    
        this.state = { 
          firstName: 'Reggie',
          lastName: 'White',
          names: ["Batman", "Superman", "Spiderman" ],         
          superheroes: [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            }
          ],
          superName: '',
        }
    }

    handleChange = (event) =>{
        this.setState({
            superName: event.target.value
        });

    }

    render() {
        return ( 
            <React.Fragment>
                <DisplaySupers superList={this.state.names} />
                <form>
                    <label>Super Name
                        <input />
                        <input onChange={this.handleChange} />
                        <button type='button'>Click Me!</button>
                    </label>
                </form>
            </React.Fragment>
        );
    }
}
export default App;
        