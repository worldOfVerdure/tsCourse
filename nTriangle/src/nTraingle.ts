const numberInput: HTMLInputElement | null = document.querySelector("input");
const triangleBox: HTMLDivElement | null = document.querySelector("div");

function generateTriangle (triangleHeight: number) {

}

numberInput?.addEventListener("input", (event: Event | null) => {
  const numInputValue: number = event?.currentTarget?.value as number;
});

generateTriangle(numberInput.value);

// https://stackoverflow.com/questions/42066421/property-value-does-not-exist-on-type-eventtarget
