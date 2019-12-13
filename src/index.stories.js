import MyButton from './stories/MyButtonView.svelte';

export default { title: 'MyButton' }

export const withText = () => ({
  Component: MyButton,
  props: {
    buttonText: 'some text',
  },
});

export const withEmoji = () => ({
  Component: MyButton,
  props: {
    buttonText: '😀 😎 👍 💯',
  },
});
