const files = import.meta.globEager('./*.mp3')

const audios = Object.entries(files).reduce((acc, [path, file]) => {
  acc[path] = file.default
  return acc
}, {})

export default audios
