const btn = document.getElementById('toggleBtn');
const greeting = document.getElementById('greeting');

btn.addEventListener('click', () => {
  greeting.textContent =
    greeting.textContent.trim() === 'Hello, World!' ? 'Hello, FEFU!' : 'Hello, World!';
});
