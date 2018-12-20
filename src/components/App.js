import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Counter from './Counter';

class App extends Component {
    static defaultProps={
        
        
     };

    render() {
        return (
            <div>
                <Counter/>
            </div>
        ); 
    }
}

// App.PropTypes = {
//     name:PropTypes.number.isRequired,   // 객체는 뒤에 ; 안넣음
//     word:PropTypes.name.isRequired,
//     // fun:PropTypes.func.isRequired            
// };

export default App;