<script>
import MyButton from './MyButton.svelte';

export let buttonText;
export let rounded = 10;
</script>



<MyButton {rounded} on:click>

</MyButton>