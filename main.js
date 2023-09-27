import './style.css'


const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch('http://localhost:8080/dream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
})