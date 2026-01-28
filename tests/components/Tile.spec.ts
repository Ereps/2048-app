import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Tile from '../../app/components/game/Tile.vue'

describe('Tile.vue', () => {
  it('applies amber background for value 2', () => {
    const wrapper = mount(Tile, { props: { value: 2 } })
    const el = wrapper.get('.tile')
    expect(el.classes()).toContain('bg-amber-100')
  })
})
