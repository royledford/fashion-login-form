import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import LFswitchLink from './LFswitchLink'

describe('LFswitchLink shows correct text', () => {
  let wrapper

  it('shows login link', () => {
    wrapper = shallow(<LFswitchLink linkTo="login" />)
    expect(wrapper.find('p').text()).toBe('Have an account?<Link />')
  })

  it('shows signup link', () => {
    wrapper = shallow(<LFswitchLink linkTo="signup" />)
    expect(wrapper.find('p').text()).toBe('Need an account?<Link />')
  })
})
