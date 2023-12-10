const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const username = document.querySelector('.username')

const testimonials = [
  {
    name: 'Jhon Smith',
    text:
    "Unbelievable comfort! The TempFlex flooring transformed my home. The heating and cooling feature is a game-changer, ensuring warmth in winter and cool relief in summer. It's like walking on a temperature-controlled cloud!"},
  {
    name: 'Yehuda Goldberg',
    text:
    "Effortless installation and superior functionality! I was skeptical about heated flooring until I experienced TempFlex. It's not just a floor; it's a cozy, climate-controlled haven. My mornings are now a pleasure with warm floors greeting me!"},  {
    name: 'Natasha Susunkin',
    text:
    "Five-star luxury! The versatility of TempFlex is unmatched. The ability to regulate room temperature through the flooring is a revelation. It's energy-efficient, practical, and adds an undeniable touch of luxury to any space."
  },
  {
    name: 'Renee Sims',
    text:
    "Say goodbye to cold feet! TempFlex flooring is the answer to chilly winters. No more need for thick socks or slippers—the heated floors ensure a comfortable environment throughout the house. I'm in love!" },
  {
    name: 'Jonathan Nunfiez',  
    text:
    "Incredible innovation! TempFlex flooring is a modern marvel. The cooling feature in summer is a true blessing, especially in warmer climates. It's a silent operator, seamlessly blending comfort and style." },
  {
    name: 'Sasha Ho',
    text:
    "The epitome of smart living! I appreciate how TempFlex adapts to my needs. The ability to control temperatures room by room is a game-changer. Plus, its sleek design fits effortlessly into any decor." },
  {
    name: 'Veeti Seppanen',
    text:
    "Investment-worthy! TempFlex flooring isn't just a floor; it's an investment in year-round comfort. The heating and cooling capabilities make it a standout choice for anyone seeking a functional and luxurious home upgrade."
  },
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
