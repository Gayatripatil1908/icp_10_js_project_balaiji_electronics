
        const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('comments-list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const comment = commentInput.value.trim();
  if (comment) {
    const newComment = document.createElement('li');
    newComment.textContent = comment;
    commentsList.appendChild(newComment);
    commentInput.value = '';
  }
});

const newsletterSignupForm = document.getElementById('newsletter-signup-form');
const emailInput = document.getElementById('email');

newsletterSignupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (email) {
    // Call API to subscribe user to newsletter
    console.log('User subscribed to newsletter');
    emailInput.value = '';
  }
});

// Social sharing buttons
const socialSharingButtons = document.getElementById('social-sharing-list');
const facebookButton = socialSharingButtons.children[0].children[0];
const twitterButton = socialSharingButtons.children[1].children[0];
const linkedinButton = socialSharingButtons.children[2].children[0];

facebookButton.addEventListener('click', () => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`;
  window.open(shareUrl, '_blank');
});

twitterButton.addEventListener('click', () => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
  window.open(shareUrl, '_blank');
});
linkedinButton.addEventListener('click', () => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  const shareUrl = `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`;
  window.open(shareUrl, '_blank');
});

  