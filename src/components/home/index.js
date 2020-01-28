import React, { Component } from 'react';

import Category from './Category';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: ["posts", "albums", "todos"]
        }
    }

    render(){
        return (
            <div>
                {this.state.categories.map(cat => {
                    return <Category key={cat} category={cat} />
                })}
            </div>            
        );
    }
}

export default Home;