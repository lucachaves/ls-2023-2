function list(count) {
  return [...Array(count)].map((_, key) => `<li>Item ${key + 1}</li>`).join('');
}

function handleClick() {
  const input = document.querySelector('input');

  const count = Number(input.value);

  document.querySelector('ul').innerHTML = list(count);
}

// document.querySelector('#generatorListBtn');
generatorListBtn.addEventListener('click', handleClick);

document.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    handleClick();
  }
});
