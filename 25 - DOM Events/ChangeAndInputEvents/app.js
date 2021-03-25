const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// }) //change input only work if after writing we come out fromthe text area.

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
}) // as soon we type something it get trigered.