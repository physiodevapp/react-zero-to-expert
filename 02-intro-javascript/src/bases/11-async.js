// const getImageAsync = () => {
//   return new Promise((resolve, reject) => {
//     resolve('https://fdsafdsafdas.com')
//   })
// }

// getImageAsync()
// .then((resp) => {
//   console.log(resp)
// })

const getImage = async () => {

  try {
    const apiKey = 'bWOOwtSzgQr1DQP7U5a93NCG5d9fos1r'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json();
    // console.log(data)
  
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url;

    document.body.append(img);

  } catch(error) {
    // handling error
    console.error(error)
  }

}

getImage()
