import SingleComponent from '../index'
import { mount } from 'avoriaz'

describe('SingleComponent', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a simple form-input', () => {
    wrapper = mount(SingleComponent)

    expect(wrapper.hasClass('md-form-input')).to.be.true
  })
})
