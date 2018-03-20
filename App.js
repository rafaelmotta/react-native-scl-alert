import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text
} from 'react-native';

import {
  Alert,
  AlertButton,
  AlertTextField
} from './src/components'

export default class App extends React.Component {

  state = {
    show: false
  }

  handleOpen = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show" onPress={this.handleOpen} />
        <Alert
          show={this.state.show}
          theme="success"
          icon="image / component"
          title="Congratulations"
          subtitle="You`ve just displayed this awesome Pop Up Views"
          onRequestClose={this.handleClose}
        >
          <AlertButton>First Button</AlertButton>
          <AlertButton>Second Button</AlertButton>
          <AlertButton>Done Button</AlertButton>
        </Alert>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
