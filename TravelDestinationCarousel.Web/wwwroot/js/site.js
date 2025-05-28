const destinationsData = [
  {
    Id: 1,
    Name: "Somnath Temple",
    ImageName:
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/dwarkadhish-temple/gallery/DwarkadhishTemple5.jpg",
    Description:
      "One of the twelve Jyotirlinga shrines of Shiva, where spirituality meets the Arabian Sea. Experience divine tranquility at this sacred temple that has witnessed centuries of devotion and architectural marvel.",
    Location: "Somnath, Gujarat",
    LinkUrl:
      "https://www.gujarattourism.com/saurashtra/gir-somnath/somnath-temple.html",
    IsActive: true,
    DisplayOrder: 1,
    IsHero: true,
  },
  {
    Id: 2,
    Name: "Rann of Kutch",
    ImageName:
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/gallery/Great%20Rann%20Of%20Kutch%20(14).jpg",
    Description:
      "Enter a magical white salt desert that transforms into a cultural wonderland during the Rann Utsav. Witness breathtaking sunsets, vibrant handicrafts, and traditional folk performances under the starlit sky.",
    Location: "Kutch, Gujarat",
    LinkUrl: "https://www.gujarattourism.com/kutch-zone/kutch.html",
    IsActive: true,
    DisplayOrder: 2,
    IsHero: true,
  },
  {
    Id: 3,
    Name: "Dwarka",
    ImageName:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&h=800&fit=crop",
    Description:
      "Step into the ancient city of Krishna, one of the four sacred Hindu pilgrimage sites. Explore magnificent temples, coastal beauty, and immerse yourself in timeless spiritual heritage.",
    Location: "Dwarka, Gujarat",
    LinkUrl: "https://www.gujarattourism.com/saurashtra/devbhoomi-dwarka.html",
    IsActive: true,
    DisplayOrder: 3,
    IsHero: true,
  },
  {
    Id: 4,
    Name: "Gir National Park",
    ImageName:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&h=800&fit=crop",
    Description:
      "Embark on a thrilling safari to meet the majestic Asiatic Lions in their natural habitat. This premier wildlife sanctuary offers unforgettable encounters with India's rarest big cats.",
    Location: "Gir Forest, Gujarat",
    LinkUrl:
      "https://www.gujarattourism.com/saurashtra/gir-somnath/gir-national-park1.html",
    IsActive: true,
    DisplayOrder: 4,
    IsHero: true,
  },
  {
    Id: 5,
    Name: "Statue of Unity",
    ImageName:
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/opti/SOU.jpg",
    Description:
      "Marvel at the world's tallest statue, a tribute to Sardar Vallabhbhai Patel. Experience panoramic views, world-class facilities, and learn about India's Iron Man through interactive exhibitions.",
    Location: "Kevadia, Gujarat",
    LinkUrl:
      "https://www.gujarattourism.com/central-zone/narmada/statue-of-unity.html",
    IsActive: true,
    DisplayOrder: 5,
    IsHero: true,
  },
  {
    Id: 6,
    Name: "Ahmedabad Heritage",
    ImageName:
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/sarkhej-roza/Sarkhej-Roza-Banner.jpg",
    Description:
      "Explore India's first UNESCO World Heritage city with stunning Indo-Islamic architecture, vibrant markets, and rich cultural heritage spanning over 600 years.",
    Location: "Ahmedabad, Gujarat",
    LinkUrl:
      "https://www.gujarattourism.com/central-zone/ahmedabad/ahmedabad-world-heritage-city.html",
    IsActive: true,
    DisplayOrder: 6,
    IsHero: true,
  },
  {
    Id: 7,
    Name: "Palitana Temples",
    ImageName:
      "https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/palitana-and-shatrunjaya-hill/Palitana-And-Shatrunjaya-Hill-Thumbnail.jpg",
    Description:
      "Climb the sacred Shatrunjaya Hill to discover over 900 exquisite Jain temples. This spiritual journey offers breathtaking architecture and panoramic views.",
    Location: "Palitana, Gujarat",
    LinkUrl:
      "https://www.gujarattourism.com/saurashtra/bhavnagar/palitana-and-shatrunjaya-hill.html",
    IsActive: true,
    DisplayOrder: 7,
    IsHero: true,
  },
  {
    Id: 8,
    Name: "Saputara Hill Station",
    ImageName:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    Description:
      "Escape to Gujarat's only hill station with cool climate, lush forests, and scenic beauty. Perfect for nature lovers and adventure enthusiasts.",
    Location: "Saputara, Gujarat",
    LinkUrl: "https://en.wikipedia.org/wiki/Saputara",
    IsActive: true,
    DisplayOrder: 8,
    IsHero: true,
  },
];

function fetchDestinations() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const activeDestinations = destinationsData
        .filter((dest) => dest.IsActive)
        .sort((a, b) => a.DisplayOrder - b.DisplayOrder);
      resolve(activeDestinations);
    }, 1500);
  });
}
// function fetchDestinations() {
//   return $.ajax({
//     url: "Home/GetActiveDestinations",
//     method: "GET",
//     dataType: "json",
//   });
// }

function createHeroSlide(destination) {
  return `
        <div class="hero-slide">
            <div class="hero-background" style="background-image: url('${destination.ImageName}')"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <div class="hero-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${destination.Location}
                </div>
                <h1 class="hero-title">${destination.Name}</h1>
                <p class="hero-description">${destination.Description}</p>
                <div class="hero-actions">
                    <a href="${destination.LinkUrl}" target="_blank" class="btn-primary">
                        Explore Now <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function createFeaturedCard(destination) {
  return `
        <div class="destination-card">
            <div class="card-image" style="background-image: url('${
              destination.ImageName
            }')"></div>
            <div class="card-content">
                <h3 class="card-title">${destination.Name}</h3>
                <p class="card-description">${destination.Description.substring(
                  0,
                  120
                )}...</p>
                <a href="${
                  destination.LinkUrl
                }" target="_blank" class="card-link">
                    Learn More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}

function initializeHeroCarousel(destinations) {
  const heroCarousel = $("#heroCarousel");
  const heroDestinations = destinations.filter((dest) => dest.IsHero);

  heroCarousel.empty();

  heroDestinations.forEach((destination) => {
    heroCarousel.append(createHeroSlide(destination));
  });

  heroCarousel.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    onInitialized: function () {
      $("#loading").fadeOut();
      heroCarousel.fadeIn();
    },
  });
}

function initializeFeaturedGrid(destinations) {
  const featuredGrid = $("#featuredGrid");
  featuredGrid.empty();

  destinations.forEach((destination) => {
    featuredGrid.append(createFeaturedCard(destination));
  });
}

$(document).ready(function () {
  fetchDestinations()
    .then((destinations) => {
      initializeHeroCarousel(destinations);
      initializeFeaturedGrid(destinations);
    })
    .catch((error) => {
      console.error("Error fetching destinations:", error);
      $("#loading").html(
        "<p>Error loading destinations. Please refresh the page.</p>"
      );
    });
});

$('a[href^="#"]').on("click", function (event) {
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - 80,
        },
        1000
      );
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
});

$(document).on("error", "img", function () {
  $(this).attr(
    "src",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop"
  );
});
$(document).ready(function () {
  fetchDestinations()
    .done(function (destinations) {
      initializeHeroCarousel(destinations);
      initializeFeaturedGrid(destinations);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error("Error fetching destinations:", textStatus, errorThrown);
      $("#loading").html(
        "<p>Error loading destinations. Please refresh the page.</p>"
      );
    });
});
