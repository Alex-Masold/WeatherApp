const src =  ['clear', 'cloud', 'drizzle', 'mist', 'rain', 'snow'];

const images = new Map();

src.forEach(image => {
    images.set(image, image+'.png');
})
// console.log(images.get('clear'));
export default images