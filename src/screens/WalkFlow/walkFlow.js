import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import WorkThrough from 'WorkThrough';
import {icons} from '../../../assets';

// example data
const flowData = {
    bgColor: "#788eec", 
    fgColor: "white", 
    screens:
    [
        {icon: "react-native.png", title: "Momma Bakes", description: "Welcome to the best app to find recepies from the baker herself; Manon"},
        {icon: "educate.png", title: "Educate", description: "Showcase features to new users so that they get to love your app."},
        {icon: "bell.png", title: "Get Notified", description: "Describe the value proposition of each core feature."},
    ]
}

export default class TestPage extends Component {
    
    componentDidMount(){
        
        StatusBar.setHidden(true);
        this.setState({loggedIn: false})
        // setTimeout(() => {
        //     this.props.navigation.navigate('Home');
        // }, 10000);
    }

    _onWorkFlowFinished = () => {
        console.log('conooo',this.state);
        this.props.navigation.navigate('Home',this.state);
    }
    render() {
        return (
            <View style={styles.container}>
                <WorkThrough
                    iconpackage = {icons}
                    data={flowData}
                    onFinished = {this._onWorkFlowFinished}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});
