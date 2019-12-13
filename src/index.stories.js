import MyButton from './stories/MyButtonView.svelte';

export default { title: 'Mi Botón' }

export const Texto = () => ({
    Component: MyButton,
    props: {
        buttonText: 'Agenda digital de cultura',
        rounded: 3,
    },
});

export const Emoji = () => ({
    Component: MyButton,
    props: {
        buttonText: '😀 😎 👍 💯',
        rounded: 3,
    },
});
