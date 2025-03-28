const mediaContainer = document.querySelector('.media-container');

const mediaItems = [
  {
    type: 'image',
    src: 'https://via.placeholder.com/300',
    alt: 'Image 1',
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/VIDEO_ID',
    title: 'Video 1',
  },
  {
    type: 'infographic',
    src: 'https://via.placeholder.com/300',
    alt: 'Infographic 1',
  },
];

mediaItems.forEach((mediaItem) => {
  const mediaElement = document.createElement(mediaItem.type === 'video' ? 'iframe' : 'img');
  mediaElement.src = mediaItem.src;
  mediaElement.alt = mediaItem.alt;
  mediaElement.title = mediaItem.title;

  const mediaItemElement = document.createElement('div');
  mediaItemElement.classList.add('media-item');
  mediaItemElement.appendChild(mediaElement);
  mediaContainer.appendChild(mediaItemElement);
});
