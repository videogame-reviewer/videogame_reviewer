const reviewFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#review-input').value.trim();
  const currentGame = 1;

  if (comment && currentGame) {
    const response = await fetch('/game/:id', {
      method: 'POST',
      body: JSON.stringify({ comment, currentGame }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to leave review.');
    }
  }
};

document
  .querySelector('.leaveReview')
  .addEventListener('submit', reviewFormHandler);