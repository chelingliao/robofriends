import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from '../components/robots.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    } 

    componentDidMount() {
        this.setState({ robots: robots });
    }
    

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());    
        })
        return !robots.length ? 
        <h1 className='tc'>Loading</h1> : 
        (
            <div className='tc'>
                <h1 className='f1'>RobotsFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
        }
    }

export default App;