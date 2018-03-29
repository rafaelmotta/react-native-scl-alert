import { SCLAlertSubtitle } from '../src/components'

import { View, Text } from 'react-native'

describe('<SCLAlertSubtitle />', () => {
  const props = {
    subtitle: 'Lorem',
    subtitleContainerStyle: {
      marginTop: 10,
    },
    subtitleStyle: {
      fontSize: 14,
    },
  }

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SCLAlertSubtitle {...props} />)
  })

  it('renders correctly', () => {
    expect(wrapper.length).toBe(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the label correctly', () => {
    expect(wrapper.find(Text).contains(props.subtitle)).toBe(true)
  })

  it('renders the subtitleContainerStyle', () => {
    expect(
      wrapper
        .find(View)
        .first()
        .props().style[1],
    ).toEqual(props.subtitleContainerStyle)
  })

  it('renders the subtitleStyle', () => {
    expect(
      wrapper
        .find(Text)
        .first()
        .props().style[1],
    ).toEqual(props.subtitleStyle)
  })
})
