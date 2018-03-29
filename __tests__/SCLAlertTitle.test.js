import { SCLAlertTitle } from '../src/components'

import { View, Text } from 'react-native'

describe('<SCLAlertTitle />', () => {
  const props = {
    title: 'Lorem',
    titleContainerStyle: {
      marginTop: 10,
    },
    titleStyle: {
      fontSize: 14,
    },
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SCLAlertTitle {...props} />)
  })

  it('renders correctly', () => {
    expect(wrapper.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the label correctly', () => {
    expect(wrapper.find(Text).contains(props.title)).toBe(true)
  })

  it('renders the titleContainerStyle', () => {
    expect(
      wrapper
        .find(View)
        .first()
        .props().style[1],
    ).toEqual(props.titleContainerStyle)
  })

  it('renders the titleStyle', () => {
    expect(
      wrapper
        .find(Text)
        .first()
        .props().style[1],
    ).toEqual(props.titleStyle)
  })
})
