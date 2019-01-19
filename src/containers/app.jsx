import React from "react";
import Header from "comp/header";
import Layout from "comp/layout";
import RouterMap from '../router/map'
import {BrowserRouter as Router} from 'react-router-dom'

import "common/css/bootstrap.min.css";
import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return <div className="wraper">
            <Header></Header>
            <Layout>
                <Router>
                      <RouterMap prop={this.props.prop}></RouterMap>
                </Router>
            </Layout>
        </div>
    }
}
export default App;