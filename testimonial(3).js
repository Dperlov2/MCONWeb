const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const username = document.querySelector('.username')

const testimonials = [
  {
    name: 'Ivan Ivanovitch',
    text:
    "Timeless Charm and Durability: This wood flooring epitomizes enduring elegance. With its rich tones and intricate grains, it brings a timeless charm to any space. Its adaptability effortlessly complements diverse decor styles, ensuring a lasting sophistication. The promise of durability makes it not just a visual delight but a practical investment, standing resilient against wear and tear, guaranteeing a touch of refined grace for years to come."},
  {
    name: 'Gedalia Stien',
    text:
    "Natural Beauty Indoors: Transforming interiors into serene sanctuaries, this wood flooring captures the tranquility of nature. Its earthy hues and textured surfaces resonate with the calmness of woodlands. It's not merely a flooring choice but an invitation to embrace the peaceful essence of the outdoors within the comforts of your home, creating an environment that breathes tranquility."},  {
    name: 'Natasha Susunkin',
    text:
    "Versatile Styling and Timeless Appeal: This wood flooring effortlessly blends elegance and adaptability. Its timeless appeal fits snugly into various decor schemes, from traditional to contemporary settings. The versatility ensures an evolving style, promising a statement of sophistication that remains relevant and stylish no matter how trends may shift."
  },
  {
    name: 'Shimmy Shimshisharoo',
    text:
    "Luxurious Sustainability: Crafted with a commitment to the environment, this wood flooring symbolizes opulence with a conscience. Its exquisite aesthetics speak of impeccable craftsmanship while reflecting a sustainable ethos. Choosing this flooring isn't just a style statement; it's a conscious decision to merge luxury with environmental responsibility, adding a layer of pride to your home."},
  {
    name: 'Anonymous Pickle',  
    text:
    "Seamless Installation and Elegant Finish: These precision-cut planks redefine simplicity in installation without compromising on sophistication. Whether you're a DIY enthusiast or a professional, the user-friendly design ensures a flawless finish. It's about effortless elegance that transforms spaces, offering a professional touch without the hassle." },
  {
    name: 'The Reviewest',
    text:
    "Comfortable Sophistication: Embracing both elegance and warmth, this wood flooring isn't just about appearances. Its natural insulation creates a cozy underfoot experience, enhancing the comfort of your living space. It's a flooring choice that doesn't just look good; it feels inviting and snug, making every step a delightful experience." },
]

let idx = 1

function updateTestimonial() {
  const { name, text } = testimonials[idx]

  testimonial.innerHTML = text

  username.innerHTML = name


  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
