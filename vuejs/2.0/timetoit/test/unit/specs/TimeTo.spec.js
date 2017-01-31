import Vue from 'vue'
import TimeTo from 'src/components/TimeTo'

describe('TimeTo.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(TimeTo)
    })
    expect(vm.$el.querySelector('#timeto').textContent).to.not.be.null;
  })
})
