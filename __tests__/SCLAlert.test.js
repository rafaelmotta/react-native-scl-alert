import { SCLAlert, SCLAlertButton } from '../src/components'

import { View, TouchableWithoutFeedback, Text } from 'react-native'

import variables from '../src/config/variables'

describe('<SCLAlert />', () => {
  const props = {
    onRequestClose: jest.fn(),
    title: 'Hello',
    subtitle: 'Lorem ipsum',
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SCLAlert {...props} />)
  })

  it('renders correctly', () => {
    expect(wrapper.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle onPress callback after press in the opacity', () => {
    wrapper
      .find(TouchableWithoutFeedback)
      .props()
      .onPress()
    expect(props.onRequestClose).toHaveBeenCalledTimes(1)
  })

  it('should NOT handle onPress callback after press in the opacity when it is not cancellable', () => {
    wrapper = shallow(<SCLAlert {...props} cancellable={false} />)
    wrapper
      .find(TouchableWithoutFeedback)
      .props()
      .onPress()
    expect(props.onRequestClose).toHaveBeenCalledTimes(1)
  })
})
