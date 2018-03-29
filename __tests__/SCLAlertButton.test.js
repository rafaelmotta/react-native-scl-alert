import { SCLAlertButton } from '../src/components'

import { View, TouchableOpacity, Text } from 'react-native'

import variables from '../src/config/variables'

describe('<SCLAlertButton />', () => {
  const props = {
    children: 'Lorem',
    containerStyle: {
      marginTop: 50,
    },
    textStyle: {
      fontSize: 20,
    },
    onPress: jest.fn(),
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SCLAlertButton {...props} />)
  })

  it('renders correctly', () => {
    console.log(wrapper.find(View).first())
    expect(wrapper.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the right content when the value is a string', () => {
    expect(
      wrapper
        .find(Text)
        .first()
        .contains(props.children),
    ).toBe(true)
  })

  it('handles onPress', () => {
    wrapper
      .find(TouchableOpacity)
      .props()
      .onPress()
    expect(props.onPress).toHaveBeenCalledTimes(1)
  })

  it('renders the default background theme when itt is not defined', () => {
    const style = { backgroundColor: variables.defaultBackground }
    expect(
      wrapper
        .find(View)
        .first()
        .props().style[1],
    ).toEqual(style)
  })

  it('renders the default color theme when it its not defined', () => {
    const style = { color: variables.defaultColor }
    expect(
      wrapper
        .find(Text)
        .first()
        .props().style[1],
    ).toEqual(style)
  })

  it('renders the containerStyle', () => {
    expect(
      wrapper
        .find(View)
        .first()
        .props().style[2],
    ).toEqual(props.containerStyle)
  })

  it('renders the textStyle', () => {
    expect(
      wrapper
        .find(Text)
        .first()
        .props().style[2],
    ).toEqual(props.textStyle)
  })
})
