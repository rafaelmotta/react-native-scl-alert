import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  ViewPropTypes,
  StyleSheet,
  Text
} from 'react-native'

AlertTextField.propTypes = {
  title: PropTypes.string.isRequired,
  titleContainerStyle: ViewPropTypes.style,
  titleStyle: Text.propTypes.style
}

AlertTextField.defaultProps = {
  titleContainerStyle: {},
  titleStyle: {}
}

function AlertTextField (props) {
  return (
    <View
      style={[
        styles.container,
        props.titleContainerStyle
      ]}
    >
      <Text
        style={[
          styles.text,
          styles.titleStyle
        ]}
      >
        {props.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  titleStyle: {
    
  }
})

export default AlertTextField