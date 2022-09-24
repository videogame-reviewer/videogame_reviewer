const reviewFormHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#review-input').value.trim();
  const currentGame = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment) {
    const response = await fetch('/game/:id', {
      method: 'POST',
      body: JSON.stringify({ comment, currentGame, user_id, game_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
       document.location.reload();
    } else {
      alert('Failed to leave review.');
    }
  }
};

document
  .querySelector('.leaveReview')
  .addEventListener('submit', reviewFormHandler);