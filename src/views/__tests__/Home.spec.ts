import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../Home.vue'

describe('Home', () => {
  it('renders welcome message', () => {
    const wrapper = mount(Home, {
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    })
    expect(wrapper.text()).toContain('Welcome to Your Vue App')
  })

  it('displays all features', () => {
    const wrapper = mount(Home, {
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    })
    const features = [
      '⚡️ Vite 7',
      '🎯 Vue 3',
      '📘 TypeScript',
      '🛣️ Vue Router 5',
      '🚀 GitHub Actions',
      '📦 pnpm',
    ]
    features.forEach((feature) => {
      expect(wrapper.text()).toContain(feature)
    })
  })

  it('has a link to about page', () => {
    const wrapper = mount(Home, {
      global: {
        stubs: ['RouterLink'],
      },
    })
    const link = wrapper.findComponent({ name: 'RouterLink' })
    expect(link.exists()).toBe(true)
  })

  it('matches snapshot', () => {
    const wrapper = mount(Home, {
      global: {
        stubs: {
          RouterLink: true,
        },
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
