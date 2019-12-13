import SingleComponent from '../index'
import { mount } from 'avoriaz'

describe('SingleComponent', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a simple item-wapper', () => {
    wrapper = mount(SingleComponent)

    expect(wrapper.hasClass('md-item-wapper')).to.be.true
  })
})
