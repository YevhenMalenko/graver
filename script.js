let textInput = document.querySelector('.item__input'),
      result = document.querySelector('.item__image-engraving'),
      itemFont = document.querySelector('.item__font'),
      itemFontSize = document.querySelector('.item__font-size'),
      itemInputDescription = document.querySelector('.item__input-description span'),
      reset = document.querySelector('.item__reset');

itemInputDescription.innerHTML = 15;

textInput.addEventListener('input', () => {
  result.innerHTML = textInput.value;
  itemInputDescription.innerHTML = 15 - textInput.value.length;
});

reset.addEventListener('click', () => {
  textInput.value = '';
  result.innerHTML = '';
  itemFont.value = '';
  itemFontSize.value = '';
} );

itemFont.addEventListener('change', function() {
  result.style.fontFamily = this.value;
});

itemFontSize.addEventListener('change', function() {
  console.log(this.value);
  result.style.fontSize = `${this.value}px`;
});