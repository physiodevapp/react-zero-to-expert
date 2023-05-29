
const apiKey = 'bWOOwtSzgQr1DQP7U5a93NCG5d9fos1r'

const getRandomGift = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// http.then((resp) => {
//   console.log(resp)
//   resp.json().then((data) => {
//     console.log(data)
//   })
// })
// .catch(console.error)

getRandomGift
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original
    console.log(url)

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img)
  })
  .catch(console.error)