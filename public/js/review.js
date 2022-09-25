const reviewFormHandler = async (event) => {
  event.preventDefault();
  const review = document.querySelector('#review-input').value.trim();
  const gameId = document.querySelector('[data-game-id]').getAttribute('data-game-id');
  // const currentGame = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  console.log('gameId', gameId, review)
  if (review) {
    const response = await fetch(`/api/reviews/${gameId}`, {
      method: 'POST',
      body: JSON.stringify({
        comment: review
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('hello', response.json());
    if (response.ok) {
      document.location.replace('/');
      console.log('hello2', response.json())
    } else {
      alert('Failed to leave review.');
    }
  }
};

document
  .querySelector('.leaveReview')
  .addEventListener('submit', reviewFormHandler);