import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet,
  Image
} from 'react-native'

import variables from '../config/variables'

AlertHeader.propTypes = {

}

function AlertHeader (props) {
  return (
    <View style={styles.container}>
      <View 
        style={[
          styles.inner,
          { backgroundColor: variables[`${props.theme}Theme`]}
        ]}
      >
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: variables.headerCircleSize / -2,
    left: (variables.contentWidth / 2) - (variables.headerCircleSize / 2)
  },
  inner: {
    width: variables.headerCircleSize,
    height: variables.headerCircleSize,
    borderRadius: variables.headerCircleSize,
    backgroundColor: '#00B77A',
    borderWidth: 4,
    borderColor: variables.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AlertHeader