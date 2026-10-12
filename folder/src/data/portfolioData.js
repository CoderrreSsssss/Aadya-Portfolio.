import files from './images.generated.json'

// ===== PHOTO SETTINGS =====
// Only files starting with IMG_ are shown. Photos are matched by name, so .jpg and .jpeg both work.
const includePattern = /^IMG_/i
const stem = f => f.replace(/\.[^.]+$/, '').toLowerCase()
const aboutStem = 'img_9595'   // the photo shown in "Behind the Lens"
const heroStems = ['img_6296', 'img_0200', 'img_0026', 'img_0023']   // hero slideshow photos

// Title, category and caption for each photo, keyed by filename.
const details = {
'IMG_4641.jpeg': { category: 'nature', title: 'Golden Grazing', caption: 'Quiet afternoon light on open ground.' },
'IMG_4668.jpeg': { category: 'street', title: 'Urban Appetite', caption: 'Capturing flavors under warm café lights.' },
'IMG_7371.jpeg': { category: 'creative', title: 'Matcha Motion', caption: 'Careful craft behind the barista counter.' },
'IMG_6306.jpeg': { category: 'nature', title: 'Dusk Silhouette', caption: 'Fading orange glow through leafy branches.' },
'IMG_6331.jpeg': { category: 'architecture', title: 'Rooftop Horizon', caption: 'Sun dipping low over terrace tanks.' },
'IMG_6911.jpeg': { category: 'architecture', title: 'Framed Sanctum', caption: 'Golden glow cut through marble shadow.' },
'IMG_6956.jpg': { category: 'creative', title: 'Floating Crimson', caption: 'Vibrant petals resting in dark water.' },
'IMG_6996.jpg': { category: 'creative', title: 'Quiet Bloom', caption: 'White lilies standing against empty space.' },
'IMG_6296.jpg': { category: 'nature', title: 'Amber Horizon', caption: 'Evening glow fading into cool shadows.' },
'IMG_7376.jpg': { category: 'architecture', title: 'Paved Perspective', caption: 'Modern corridor framed by tall greens.' },
'IMG_7383.jpg': { category: 'street', title: 'Sweet Arrangement', caption: 'Rich chocolate slices ready to share.' },
'IMG_7915.jpg': { category: 'travel', title: 'Ghat Currents', caption: 'Drifting gently toward illuminated ancient banks.' },
'IMG_8179.jpg': { category: 'creative', title: 'Drifting Frames', caption: 'Tortoise rims afloat on clear ripples.' },
'IMG_8827.jpg': { category: 'architecture', title: 'Warm Dusk', caption: 'Soft terrace glow beneath evening skies.' },
'IMG_9859.jpg': { category: 'street', title: 'Garden Diner', caption: 'Lively cafe night veiled in foliage.' },
'IMG_9864.jpg': { category: 'creative', title: 'Arrabbiata Twist', caption: 'Fresh tossed penne in rustic sauce.' },
'IMG_0241.jpg': { category: 'street', title: 'Chime In', caption: 'Rainy afternoon chatter outside coffee corner.' },
'IMG_4051.jpg': { category: 'street', title: 'Market Heaps', caption: 'Ripe harvest resting on wooden crates.' },
'IMG_4138.jpg': { category: 'street', title: 'Pastel Scoops', caption: 'Chilled gelato tubs lined in rows.' },
'IMG_0200.jpg': { category: 'nature', title: 'Layered Ridges', caption: 'Blue misty mountain folds stretching far.' },
'IMG_0208.jpg': { category: 'nature', title: 'Pine Canopy', caption: 'Deep green foliage framing morning fog.' },
'IMG_0199.jpg': { category: 'nature', title: 'Misty Valleys', caption: 'Rolling hills wrapped in soft haze.' },
'IMG_7584754897.jpeg': { category: 'nature', title: 'Pelican Haven', caption: 'Preening birds beside lush forest banks.' },
'IMG_0101.jpg': { category: 'creative', title: 'Color Blocks', caption: 'Vibrant painted bricks along the curb.' },
'IMG_4017.jpg': { category: 'creative', title: 'Minimal Sweet', caption: 'Delicate pastry plated with fresh fruit.' },
'IMG_0026.jpg': { category: 'nature', title: 'Sunset Tide', caption: 'Warm amber glow melting into ocean waves.' },
'IMG_6891.jpg': { category: 'nature', title: 'Midnight Canopy', caption: 'Gnarled mossy branches reaching under dark skies.' },
'IMG_8457348578.jpeg': { category: 'nature', title: 'Secret Stream', caption: 'Crystal water ripples through lush green enclosure.' },
'IMG_6892.jpg': { category: 'architecture', title: 'Illuminated Heritage', caption: 'Sprawling tree branches framing lit colonial windows.' },
'IMG_4800.jpg': { category: 'creative', title: 'Deep Cherries', caption: 'Glossy dark harvest piled in ceramic.' },
'IMG_7419.jpg': { category: 'architecture', title: 'Skyline Passage', caption: 'Golden evening framed between urban towers.' },
'IMG_3535.jpg': { category: 'creative', title: 'Open Shutter', caption: 'Quiet courtyard framed through rustic sill.' },
'IMG_3655.jpg': { category: 'street', title: 'Diner Rhythm', caption: 'Warm kitchen bustle under industrial lights.' },
'IMG_1140.jpg': { category: 'street', title: 'Pavement Prints', caption: 'Stacked stories and art on sidewalk.' },
'IMG_4678.jpg': { category: 'architecture', title: 'Shadow Loft', caption: 'Timber stairs climbing through moody shadows.' },
'IMG_4910.jpg': { category: 'creative', title: 'Dim Workspace', caption: 'Filtered daylight meeting soft screen glows.' },
'IMG_0023.jpeg': { category: 'nature', title: 'Above Clouds', caption: 'Drifting high over endless velvet horizons.' },
}
const detailMap = Object.fromEntries(Object.entries(details).map(([k, v]) => [stem(k), v]))
const photos = (files.filter(f => includePattern.test(f)).length ? files.filter(f => includePattern.test(f)) : files).filter(f => stem(f) !== aboutStem)
const find = s => photos.find(f => stem(f) === s)
const img = f => (f ? `/images/${encodeURIComponent(f)}` : '')
const heroSlides = heroStems.map(s => img(find(s))).filter(Boolean)

export const site = {
  theme: 'sunrise', // 'sunrise' | 'light' | 'sage' | 'night'
  name: 'Aadya Singh',
  brand: 'Aadya Singh — Photography',
  label: 'Photography Portfolio · 2026',
  headline: 'Through My Lens.',
  subline: 'Capturing the beauty of everyday moments, one frame at a time.',
  email: 'aadyakhadi@gmail.com',
  instagram: 'https://instagram.com/a.addyy_',
  society: '',
  societyName: 'College Photography Society',
  heroSlides: heroSlides.length ? heroSlides : [img(photos[0])],
  images: { about: img(files.find(f => stem(f) === aboutStem)) },
}

export const categories = [
  { key: 'all', label: 'All Work', full: 'All Work' },
  { key: 'portrait', label: 'Portraits', full: 'Portrait Photography' },
  { key: 'nature', label: 'Nature', full: 'Nature & Landscapes' },
  { key: 'street', label: 'Street', full: 'Street Photography' },
  { key: 'architecture', label: 'Architecture', full: 'Architecture & Details' },
  { key: 'creative', label: 'Creative', full: 'Creative & Experimental' },
  { key: 'travel', label: 'Travel', full: 'Travel & Places' },
]

const autoKeys = ['portrait', 'nature', 'street', 'architecture', 'creative']
const text = {
  portrait: [['The Quiet Gaze', 'A calm expression that says more than words.'], ['A Moment Unscripted', 'A natural, unposed moment.'], ['Soft Light', 'Gentle light on a familiar face.']],
  nature: [['Golden Hour', 'Warm light settling over the scene.'], ['Nature in Stillness', 'Quiet details of the natural world.'], ['Open Skies', 'Space, colour and a wide horizon.']],
  street: [['Between the Streets', 'A passing moment in a busy lane.'], ['Everyday Rhythm', 'The ordinary beat of a day.'], ['A Place in Passing', 'A scene noticed on the way.']],
  architecture: [['Lines of Silence', 'Geometry that holds its breath.'], ['Light and Perspective', 'Looking up changes everything.'], ['Structure and Shadow', 'Form revealed by contrast.']],
  creative: [['The Art of Shadows', 'Darkness shaping the frame.'], ['Reflections', 'A second world inside the first.'], ['Another Angle', 'Trying a different point of view.']],
}
export const gallery = photos.map((file, i) => {
  const o = detailMap[stem(file)] || {}
  const category = categories.some(c => c.key !== 'all' && c.key === o.category) ? o.category : autoKeys[i % autoKeys.length]
  const list = text[category] || text.creative
  const t = list[Math.floor(i / autoKeys.length) % list.length]
  const title = o.title || t[0], caption = o.caption || t[1]
  return { ...o, id: i + 1, title, category, caption, image: img(file), alt: `${title}. ${caption}` }
})

export const about = {
  heading: 'Behind the Lens',
  intro: "Hello, I'm Aadya Singh. Photography is my way of noticing the little things that often go unseen: the way light falls across a face, the character of a place, or the emotion hidden in an ordinary moment. Through my photographs, I hope to tell stories, experiment with perspectives, and continue discovering my own creative voice.",
  paragraphs: [
    { title: 'My approach', text: 'I wait for the light. Golden hours, rainy afternoons and warm café evenings give me my best frames, and I try to keep every photograph simple, warm and honest.' },
    { title: 'What it means to me', text: 'Photography slows my day down. It turns small things, like a cup of matcha or a misty hillside, into moments I can keep.' },
    { title: 'Why the Photography Society', text: 'I want to learn from other photographers, work on shared projects, and get honest feedback that pushes my work further.' },
  ],
}

export const interests = [
  { title: 'Golden Hour & Natural Light', text: 'Warm skies, long shadows and evening glow.' },
  { title: 'Hills, Water & Skies', text: 'Misty valleys, coastlines and open horizons.' },
  { title: 'Café & Food Stories', text: 'The colour and craft behind everyday meals.' },
  { title: 'Streets & Everyday Life', text: 'Markets, corners and unposed moments.' },
  { title: 'Architecture & Terraces', text: 'Lines, windows and rooftops at dusk.' },
  { title: 'Flowers & Small Details', text: 'Quiet textures worth a closer look.' },
]

export const journey = {
  heading: 'My Journey',
  entries: [
    { when: 'Beginning', title: 'Noticing the light', text: 'It started with small things: stopping to see how evening light changed a familiar place, and wanting to keep that feeling.' },
    { when: 'Exploring', title: 'Following curiosity', text: 'From café tables and market crates to misty hills and riverside ghats, I began photographing whatever made me pause.' },
    { when: 'Learning', title: 'Learning to see', text: 'I am practising composition, patience with natural light, and editing that keeps a photograph true to the moment.' },
    { when: 'Next', title: 'Growing with the Society', text: 'I would love to learn from fellow photographers, join shared projects and keep building a body of work.' },
  ],
}

export const toolkit = {
  heading: 'What I Look For',
  items: [
    { title: 'Light', text: 'Soft, warm and natural, wherever I find it.' },
    { title: 'Mood', text: 'The quiet feeling a place or moment carries.' },
    { title: 'Details', text: 'Small textures and colours most people walk past.' },
  ],
}

export const process = {
  heading: 'Every Frame Tells a Story',
  steps: [
    { title: 'Observe', text: 'Finding beauty, emotion, and stories in ordinary moments.' },
    { title: 'Compose', text: 'Exploring framing, light, perspective, colour, and balance.' },
    { title: 'Capture', text: 'Preserving a fleeting moment through a thoughtful photograph.' },
  ],
}

export const featured = {
  image: img(find('img_0026') || photos[2]),
  alt: 'Featured photograph by Aadya Singh',
  heading: 'One moment. A thousand stories.',
  caption: 'Warm amber light melting into the waves, the kind of moment I always look for.',
}
