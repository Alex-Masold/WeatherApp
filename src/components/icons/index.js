const src =  ['clear.png', 'cloud.png', 'drizzle.png', 'humidity.png', 'mist.png', 'rain.png', 'search.png', 'snow.png', 'wind.png'];

const images = [];

src.forEach(image => {
    let img = new Image();
    img.src = image;
    images.push(img);
})

export default images;