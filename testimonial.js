const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const username = document.querySelector('.username')

const testimonials = [
  {
    name: 'Miyah Myles',
    text:
    "Timeless Beauty: Installed marble flooring in our kitchen, and it's a showstopper! The natural veining and unique patterns create an artistic statement. While it requires sealing and occasional maintenance, its durability and classic appeal make it a worthwhile investment."  },
  {
    name: 'June Cha',
    text:
    "Sophisticated Charm: Our office lobby's marble flooring exudes sophistication. Its reflective surface adds a sense of spaciousness and light to the area, making it inviting and professional. It's an ideal choice for high-traffic spaces, maintaining its allure while withstanding daily wear."  },
  {
    name: 'Iida Niskanen',
    text:
    "Stunning Durability: Recently renovated our bathroom with marble flooring, and it's both visually stunning and resilient. Its resistance to moisture and heat makes it perfect for a bathroom setting. The feeling of luxury underfoot is unparalleled, elevating the entire bathing experience."
  },
  {
    name: 'Renee Sims',
    text:
    "Versatile Elegance: The marble flooring in our dining room complements any decor style effortlessly. Whether paired with modern furniture or classic accents, its versatility shines through. It's a durable, eye-catching choice that adds an air of sophistication to the space."  },
  {
    name: 'Jonathan Nunfiez',  
    text:
    "Redefining Home Aesthetics: We upgraded to marble flooring in our living room, and it's truly transformed the space. The subtle variations in color add depth, while its cooling properties are a blessing during warmer months. It's a conversation starter, effortlessly blending luxury and practicality."  },
  {
    name: 'Sasha Ho',
    text:
    "Elevated Exteriors: Installed marble flooring in our outdoor patio area, and it's a game-changer! Despite exposure to the elements, its resilience and ability to withstand weathering have been impressive. Its natural beauty against the greenery make it an outdoor oasis worth every penny."  },
  {
    name: 'Veeti Seppanen',
    text:
    "Commercial Brilliance: As a designer, specifying marble flooring for my client's boutique was a no-brainer. The sleek, polished surface gives a high-end feel, enhancing the merchandise display. Its low maintenance nature ensures the store always looks top-notch, captivating customers effortlessly."
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
