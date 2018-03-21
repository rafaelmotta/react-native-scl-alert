import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform
} from 'react-native'

Touch.propTypes = {
  activeOpacity: PropTypes.number,
  children: PropTypes.node.isRequired
}

Touch.defaultProps = {
  activeOpacity: 0.8
}

function Touch (props) {
  let TouchComponent =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  return (
    <TouchComponent {...props}>
      <View>{props.children}</View>
    </TouchComponent>
  )
}

export default Touch
