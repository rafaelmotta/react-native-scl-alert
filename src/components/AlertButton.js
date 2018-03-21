import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  ViewPropTypes,
  StyleSheet,
  Text
} from 'react-native'

import {
  Touch
} from './'

import variables from '../config/variables'

import {
  themeType,
  defaultThemeType
} from '../config/types'

AlertButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  theme: themeType,
  onPress: PropTypes.func.isRequired
}

AlertButton.defaultProps = {
  containerStyle: {},
  textStyle: {},
  themeType: defaultThemeType
}

function AlertButton (props) {
  const childrenType = typeof props.children

  return (
    <View>
      <Touch onPress={props.onPress}>
        <View
          style={[
            styles.container,
            { backgroundColor: variables[`${props.theme}Background`] },
            props.containerStyle
          ]}
        >
          {childrenType === 'string' && (
            <Text
              style={[
                styles.text,
                { color: variables[`${props.theme}Color`] },
                props.textStyle
              ]}
            >
              {props.children}
            </Text>
          )}
          {childrenType === 'object' && (
            <View>{props.children}</View>
          )}
        </View>
      </Touch>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: variables.gutter / 2,
    padding: variables.gutter,
    borderRadius: variables.baseBorderRadius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: variables.baseFontSize,
    color: variables.white,
    fontWeight: '700'
  }
})

export default AlertButton
