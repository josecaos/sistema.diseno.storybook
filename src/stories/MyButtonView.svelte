<script>
  import MyButton from "./MyButton.svelte";

  export let buttonText;
  export let rounded;

</script>

<MyButton {rounded} {buttonText} on:click />
