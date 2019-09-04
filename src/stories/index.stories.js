/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import Nav from '../components/Nav.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { Nav },
    template: '<Nav></Nav>'
  }))
  // .add('with JSX', () => ({
  //   components: { MyButton },
  //   render () {
  //     return <my-button onClick={this.action}>With JSX</my-button>
  //   },
  //   methods: { action: linkTo('Button', 'with some emoji') }
  // }))
  // .add('with some emoji', () => ({
  //   components: { MyButton },
  //   template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
  //   methods: { action: action('clicked') }
  // }))
