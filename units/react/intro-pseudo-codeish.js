// get our data to go to props
const btnGetImages = document.getElementById('btnGetImages')
btnGetImages.on('click', () => getImageData(3))

function getImageData(galleryNumber) {
  return [
    {
      src: 'https://google.com/images/dog.jpg',
      altText: 'image stuff',
      width: 300,
      height: 300,
    },
    {
      src: 'https://facebook.com/images/cat.jpg',
      altText: 'image stuff',
      width: 300,
      height: 300,
    },
  ]
}

// const imageList = getImageComponent()

// react component say coming from a gallery page
const images = imageList.map((image) => {
  return (
    <Image
      src={image.src}
      altText={image.altText}
      width={image.width}
      height={image.height}
    />
  )
})

// compiled react/jsx
const images = imageList.map((image) => {
  return createElement(type, props, ...children)
})

// output of component we declared
// this is my component source code
function Image(props) {
  return (
    <img
      src={props.src}
      altText={props.altText}
      width={props.width}
      height={props.height}
    />
  )
}
