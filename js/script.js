const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const dice = document.getElementById('dice');

dice.addEventListener('click', getText);

function getText() {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      adviceId.innerHTML = data.slip.id;
      adviceText.innerHTML = '"' + data.slip.advice +'"';
  })

}