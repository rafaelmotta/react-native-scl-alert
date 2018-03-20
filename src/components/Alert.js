import React from 'react'
import PropTypes from 'prop-types'

import {
  Animated,
  Modal,
  View,
  ViewPropTypes,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

import {
  AlertHeader,
  AlertTitle,
  AlertSubtitle
} from '../components'

import {
  height
} from '../helpers/dimensions'

import {
  themeType,
  defaultThemeType
} from '../config/types'

import variables from './../config/variables'

class Alert extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,

    children: PropTypes.node,

    show: PropTypes.bool,

    // Indicate if when user press in the overlay, can request to close
    cancellable: PropTypes.bool,

    // User is requesting to close
    onRequestClose: PropTypes.func.isRequired,

    // Animation
    slideAnimationDuration: PropTypes.number,

    // Callbacks
    // TODO:
    beforeOpen: PropTypes.func,
    afterOpen: PropTypes.func,
    beforeClose: PropTypes.func,
    afterClose: PropTypes.func,

    // Styles
    theme: themeType,
    overlayStyle: ViewPropTypes.style
  }

  static defaultProps = {
    children: null,

    show: false,
    cancellable: true,

    // Animation
    slideAnimationDuration: 250,

    // styles
    theme: defaultThemeType,
    overlayStyle: {}
  }

  constructor (props) {
    super(props)
    this.state = { show: props.show }
    this.slideAnimation = new Animated.Value(0)
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.show !== this.state.show) {
      return this[this.props.show ? 'show' : 'hide']()
    }
  }

  /**
   * @description
   */
  get interpolationTranslate () {
    const move = this.slideAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [height, 0]
    })

    return [{ translateY: move }]
  }

  /**
   * @description
   */
  show = () => {
    this._runAnimationAsync()
    this.setState({ show: true })
  }

  /**
   * @description
   */
  hide = async () => {
    await this._runAnimationAsync()
    this.setState({ show: false })
  }

  /**
   * @description run slide animation to show action sheet contetn
   * @param { Boolean } show - Show / Hide content
   * @return { Void }
   */
  _runAnimationAsync = () => {
    return new Promise(resolve => {
      const options = {
        toValue: this.state.show ? 0 : 1,
        duration: this.props.slideAnimationDuration,
        animation: variables.translateEasing
      }

      Animated.timing(
        this.slideAnimation,
        options
      ).start(resolve)
    })
  }

  handleOnClose = () => {
    this.props.cancellable && this.props.onRequestClose()
  }

  render () {
    return (
      <Modal
        transparent
        animationType="fade"
        visible={this.state.show}
        onRequestClose={this.props.onRequestClose}
      >
        <View style={styles.inner}>
          <TouchableWithoutFeedback onPress={this.handleOnClose}>
            <View
              style={[
                styles.overlay,
                this.props.overlayStyle
              ]}
            />
          </TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.contentContainer,
              { transform: this.interpolationTranslate }
            ]}
          > 
            
            <View style={styles.innerContent}>
              <AlertHeader 
                theme={this.props.theme}
              />
              <AlertTitle title={this.props.title} />
              <AlertSubtitle subtitle={this.props.subtitle} />
              <View>
                {this.props.children}
              </View>
            </View>
          </Animated.View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  inner: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: variables.containerPadding
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: variables.overlayBackgroundColor,
    justifyContent: 'center',
    zIndex: 100
  },
  contentContainer: {
    zIndex: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContent: {
    padding: variables.gutter,
    paddingTop: variables.gutter * 4,
    borderRadius: variables.baseBorderRadius,
    backgroundColor: variables.baseBackgroundColor,
    width: variables.contentWidth,
    height: 350,
    marginBottom: variables.gutter * 5
  }
})

export default Alert