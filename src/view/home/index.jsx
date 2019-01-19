import React from 'react';
import RouterMap from '../../router/map'

class Home extends React.Component{
    render(){
        return <div>
            this is home
            <RouterMap prop={this.props.prop}></RouterMap>
        </div>
    }
}
export default Home