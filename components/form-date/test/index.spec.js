import SingleComponent from '../index'
import { mount } from 'avoriaz'

describe('SingleComponent', () => {
  let wrapper

  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a simple form-date', () => {
    wrapper = mount(SingleComponent)

    expect(wrapper.hasClass('md-form-date')).to.be.true
  })
})
