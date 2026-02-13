import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('increments count when button is clicked', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Test' } })
    const button = wrapper.find('button')

    expect(button.text()).toContain('count is 0')

    await button.trigger('click')
    expect(button.text()).toContain('count is 1')

    await button.trigger('click')
    expect(button.text()).toContain('count is 2')
  })

  it('matches snapshot', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Snapshot Test' } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
