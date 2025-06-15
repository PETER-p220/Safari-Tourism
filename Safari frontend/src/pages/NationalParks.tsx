import React from 'react';

const NationalParks: React.FC = () => {
  const parks = [
    
        
    {
      name: "Serengeti National Park",
      description: "Serengeti National Park is one of the most famous wildlife reserves in the world, located in northern Tanzania. Renowned for its vast savannahs, diverse ecosystems, and abundant wildlife, the park is best known for the Great Migration, where millions of wildebeest, zebras, and gazelles move in search of fresh grazing. Covering approximately 14,750 square kilometers, Serengeti is home to the Big Five—lion, leopard, elephant, buffalo, and rhino—as well as cheetahs, hyenas, and over 500 bird species. ",
      image:"https://images.pexels.com/photos/15821221/pexels-photo-15821221/free-photo-of-leopard-on-tree.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: [
        "Annual Wildebeest Migration",
        "Big Five Wildlife",
        "Endless Plains",
        "Hot Air Balloon Safaris"
      ],
      location: "Northern Tanzania"
    },
    {
      name: "Ngorongoro Conservation Area",
      description: "Ngorongoro National Park, located in northern Tanzania, is famous for the Ngorongoro Crater, the world’s largest intact volcanic caldera. The crater forms a natural enclosure rich in wildlife, including lions, elephants, rhinos, buffaloes, and flamingos. It offers one of the best opportunities to see the Big Five in a single day. The park is part of the larger Ngorongoro Conservation Area, a UNESCO World Heritage Site, where wildlife and the Maasai people coexist. Its stunning landscapes and high wildlife density make it a top safari destination in Africa",
      image:"https://images.pexels.com/photos/30705116/pexels-photo-30705116/free-photo-of-lioness-yawning-in-the-kenyan-savanna.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: [
        "Volcanic Crater",
        "Dense Wildlife Population",
        "Maasai Culture",
        "Ancient Hominid Footprints"
      ],
      location: "Arusha Region"
    },
    {
      name: "Tarangire National Park",
      description: "Tarangire National Park, located in northern Tanzania, is known for its large herds of elephants and iconic baobab trees. The park covers about 2,850 square kilometers and is especially vibrant during the dry season when animals gather around the Tarangire River, the park’s main water source. It is home to a rich variety of wildlife, including lions, leopards, zebras, giraffes, wildebeest, and over 500 bird species, making it a paradise for birdwatchers and nature lovers. Tarangire offers a quieter, less crowded safari experience compared to nearby parks.",
      image: "https://images.pexels.com/photos/4577147/pexels-photo-4577147.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights: [
        "Elephant Herds",
        "Baobab Trees",
        "River Valley",
        "Bird Watching"
      ],
      location: "Manyara Region"
    },
    {
      name:"Lake manyara national park",
      description :"is a scenic wildlife reserve located in northern Tanzania, at the base of the Great Rift Valley escarpment. The park is renowned for its diverse ecosystems, ranging from groundwater forests and acacia woodlands to the alkaline Lake Manyara itself. Despite its relatively small size, the park is rich in biodiversity and is famous for its tree-climbing lions, large flocks of flamingos, and elephant herds. It's a popular stop on the northern safari circuit, offering excellent birdwatching, game drives, and beautiful views.",
      image:"https://images.pexels.com/photos/18117633/pexels-photo-18117633/free-photo-of-baby-monkey-on-tree.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights:[
        "Tree climbing lions",
      "Lake Manyara",
    "birdwatchersparadise",],
        location:"Manyara"
    },
    {
      name:"Mt kilimanjaro",
      description:"Mount Kilimanjaro is the tallest mountain in Africa, standing at 5,895 meters (19,341 feet) above sea level. Located in northeastern Tanzania, it is a dormant stratovolcano with three peaks: Kibo (the highest), Mawenzi, and Shira. Kilimanjaro is world-famous as the highest free-standing mountain in the world and a UNESCO World Heritage Sitee.",
      
      
      image:"https://images.pexels.com/photos/31121292/pexels-photo-31121292/free-photo-of-majestic-view-of-mount-kilimanjaro-under-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights:[
        "Africa’s Highest Peak",
        "World’s Tallest Free-Standing Mountain",
        "Diverse Climate Zones ",
        "Uhuru Peak "
      ],
      location:"Kilimanjaro Region"
    },
    {
      name:"Ruaha National Park",
      description:
        "Ruaha National Park is the largest national park in Tanzania and one of the most remote and unspoiled wilderness areas in East Africa. Located in the heart of the country, Ruaha covers over 20,000 square kilometers and is known for its rugged landscapes, vast savannahs, and dramatic river systems.",
      
      
      image:"https://images.pexels.com/photos/789628/pexels-photo-789628.jpeg?auto=compress&cs=tinysrgb&w=600",
      highlights:[
        "Largest National Park in Tanzania ",
        "Rich Predator Population",
        "Greater Kudu and Rare Antelope Species ",
        "Over 570 Bird Species"
      ],
      location:"Iringa region"
    }
  ];

  return (
    <div className="container px-4 py-8 mx-auto ">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
          Tanzania National Parks
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the natural wonders of Tanzania's most beautiful national parks
        </p>
      </div>

      {/* Map Section */}
      <div className="mb-12">
        <h2 className="flex mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Park Locations
        </h2>
        <div className="overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
          <img 
            src="https://uniquesafaris.com/wp-content/uploads/2022/07/tanzania-map.jpg" 
            alt="Tanzania National Parks Map"
            className="object-cover w-full h-full"
            loading='lazy'
          />
        </div>
      </div>

      {/* Parks Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {parks.map((park, index) => (
          <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img 
              src={park.image} 
              alt={park.name}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {park.name}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {park.description}
              </p>
              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Highlights:
                </h4>
                <ul className="text-gray-600 list-disc list-inside dark:text-gray-300">
                  {park.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Location: {park.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Wildlife Gallery */}
      
      </div>
    
  );
};

export default NationalParks;