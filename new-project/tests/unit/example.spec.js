import { mount, shallowMount } from '@vue/test-utils'
import Calculator from '@/App.vue'

describe('Calculator', () => {
  /*it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })*/
  test('input1', () => {
    const input = 5
    const wrapper = shallowMount(Calculator)
    wrapper.setData({
      operand1: input
    })
    expect(wrapper.vm.operand1).toEqual(input)
  })
  test('input2', () => {
    const input = 10
    const wrapper = shallowMount(Calculator)
    wrapper.setData({
      operand2: input
    })
    expect(wrapper.vm.operand2).toEqual(input)
  })
  test('operator', () => {
    const op = '+'
    const wrapper = shallowMount(Calculator)
    wrapper.setData({
      operator: op
    })
    expect(wrapper.vm.operator).toEqual(op)
  })
  test('result', () => {
    const op = '-'
    const input1 = 5
    const input2 = 10
    const result = input1 - input2
    const wrapper = shallowMount(Calculator)
    wrapper.setData({
      operator: op,
      operand1: input1,
      operand2: input2
    })
    expect(wrapper.vm.result).toEqual(result)
  })
  test('result', () => {
    const op = '*'
    const input1 = 5
    const input2 = 10
    const result = input1 * input2
    const wrapper = shallowMount(Calculator)
    wrapper.setData({
      operator: op,
      operand1: input1,
      operand2: input2
    })
    expect(wrapper.vm.result).toEqual(result)
  })
  test('result', () => {
    const op = '/'
    const input1 = 5
    const input2 = 10
    const result = input1 / input2
    const wrapper = shallowMount(Calculator)
    wrapper.setData({
      operator: op,
      operand1: input1,
      operand2: input2
    })
    expect(wrapper.vm.result).toEqual(result)
  })
  test('result', () => {
    const op = '**'
    const input1 = 5
    const input2 = 10
    const result = input1 ** input2
    const wrapper = shallowMount(Calculator)
    wrapper.setData({
      operator: op,
      operand1: input1,
      operand2: input2
    })
    expect(wrapper.vm.result).toEqual(result)
  })
  test('result', () => {
    const op = '%'
    const input1 = 5
    const input2 = 10
    const result = Math.floor(input1 / input2)
    const wrapper = shallowMount(Calculator)
    wrapper.setData({
      operator: op,
      operand1: input1,
      operand2: input2
    })
    expect(wrapper.vm.result).toEqual(result)
  })
  test('result', () => {
    const op = '+'
    const input1 = 5
    const input2 = 10
    const result = input2 + input1
    const wrapper = shallowMount(Calculator)
    wrapper.setData({
      operator: op,
      operand1: input1,
      operand2: input2
    })
    expect(wrapper.vm.result).toEqual(result)
  })
  test('virtualbox', () => {
    const input1 = 5
    const wrapper = shallowMount(Calculator)
    const btn = wrapper.find('button[id="operand-button-op1"]')
    wrapper.setData({
      picked: 'operand1',
      operand1: input1,
    })
    btn.trigger('click')

    expect(wrapper.vm.operand1).toEqual(6)
  })
})
