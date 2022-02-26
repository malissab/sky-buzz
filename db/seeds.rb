
airlines = Airline.create([
    { 
        name: "Southwest",
        image_url: "/images/southwest.png"
      },
    { 
      name: "United Airlines",
      image_url: "/images/united.png"
    }, 
    { 
      name: "Delta",
      image_url: "/images/delta.png" 
    }, 
    { 
      name: "Alaska Airlines",
      image_url: "/images/alaska.jpeg" 
    }, 
    { 
      name: "Spirit Airlines",
      image_url: "/images/spirit.png" 
    }, 
    { 
      name: "American Airlines",
      image_url: "/images/aa.png" 
    },
    { 
        name: "Emirates Airlines",
        image_url: "/images/emirates.jpeg" 
    }
  ])


reviews = Review.create([
    { 
        title: "Awesome airline",
        description:  "Great experience on this airline.",
        rating: 5,
        airline: airlines.first
    },
    { 
        title: "Worst airline",
        description: "The greyhound of the skies, terrible experience. 😤",
        rating: 1,
        airline: airlines.fifth
    }
    
  ])
