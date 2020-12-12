import React, { Component } from 'react';
import Header from './Header';
import Info from './Info';
import Player from './Player';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            albums: [
                {
                    id:0,
                    name:'Divide',
                    artist:'Ed Sheeran',
                    image:'assets/images/vibe_logo.png',
                },
            ],
        };
    }
    render(){
        return (
            <>
                <Header/>
                <Info/>
                <Player/>
            </>
        );
    }
}
export default Main;