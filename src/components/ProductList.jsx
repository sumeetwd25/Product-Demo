import React, { useState,useRef,useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import '../css/styles.css';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('priceAsc');
  const productDetailsRef = useRef(null);

  const products = [
    {
      name: 'Spiderman 2',
      imageUrl: 'https://m.media-amazon.com/images/I/51VG4qrXSRL._SX300_SY300_QL70_FMwebp_.jpg',
      miniDescription: 'PS5 game (2023)',
      description: 'Swing, jump and utilise the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.',
      price: 4999,
      category: 'ps5',
    },
    {
      name: 'Ghost of Tsushima',
      imageUrl: 'https://m.media-amazon.com/images/I/51IAYQuCN9S._SX300_SY300_QL70_FMwebp_.jpg',
      miniDescription: 'PS5 game (2020)',
      description: 'In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan. As the island burns in the wake of the first wave of the Mongol assault, courageous samurai warrior Jin Sakai stands resolute. As one of the last surviving members of his clan, Jin is resolved to do whatever it takes, at any cost, to protect his people and reclaim his home. He must set aside the traditions that have shaped him as a warrior to forge a new path, the path of the Ghost, and wage an unconventional war for the freedom of Tsushima.',
      price: 2449,
      category: 'ps5',
    },
    {
      name: 'Forza Horizon 5',
      imageUrl: 'https://m.media-amazon.com/images/I/716ej6hzPbL._AC_UY327_FMwebp_QL65_.jpg',
      miniDescription: 'Xbox game (2021)',
      description: "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the fifth Forza Horizon title and twelfth main instalment in the Forza series. The game is set in a fictionalised representation of Mexico.",
      price: 2499,
      category: 'xbox',
    }, 
    {
      name: 'The Last of Us Part II',
      imageUrl: 'https://m.media-amazon.com/images/I/51xdx3EtmuL._SX300_SY300_QL70_FMwebp_.jpg',
      miniDescription: 'PS4 game (2020)',
      description: 'Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors.',
      price: 1818,
      category: 'ps4',
    },
    {
      name: 'Horizon Zero Dawn',
      imageUrl: 'https://m.media-amazon.com/images/I/81rWhbu6z+L._AC_UY327_FMwebp_QL65_.jpg',
      miniDescription: 'PS4 game (2017)',
      description: "Horizon Zero Dawn is an exhilarating action role playing game exclusively for the PlayStation 4 System, developed by the award winning Guerrilla Games, creators of PlayStation's venerated Killzone franchise. Take on the role of skilled hunter Aloy as you explore a vibrant and lush world inhabited by mysterious mechanized creatures. Embark on a compelling, emotional journey and unravel mysteries of tribal societies, ancient artifacts and advanced technologies that will determine the fate of this planet, and of life itself.",
      price: 933,
      category: 'ps4',
    },
    {
      name: 'Spiderman: Miles Morales',
      imageUrl: 'https://m.media-amazon.com/images/I/61R01dtOg4L._AC_UY327_FMwebp_QL65_.jpg',
      miniDescription: 'PS5 game (2020)',
      description: "Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. Based on the Marvel Comics character Miles Morales, it is inspired by both the character's decade-long comic book mythology and appearances in other media. ",
      price: 1999,
      category: 'ps5',
    }, 
    {
      name: 'Hades',
      imageUrl: 'https://m.media-amazon.com/images/I/51mw1cmniUL._SX300_SY300_QL70_FMwebp_.jpg',
      miniDescription: 'Xbox game (2018)',
      description: "Battle out of hell: As the immortal Prince of the Underworld, you'll wield the powers and mythic weapons of Olympus to break free from the clutches of the god of the dead himself, while growing stronger and unraveling more of the story with each unique escape attempt. Unleash the fury of Olympus: The Olympians have your back! Meet Zeus, Athena, Poseidon, and many more, and choose from their dozens of powerful Boons that enhance your abilities. There are thousands of viable character builds to discover as you go. Befriend gods, ghosts, and monsters: A fully-voiced cast of colorful, larger-than-life characters is waiting to meet you! Grow your relationships with them, and experience thousands of unique story events as you learn about what's really at stake for this big, dysfunctional family.",
      price: 2499,
      category: 'xbox',
    }, 
    {
      name: 'Xbox Series S',
      imageUrl: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UY327_FMwebp_QL65_.jpg',
      miniDescription: 'Xbox Gaming Console',
      description: "Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point. Get started with an instant library of 100+ high quality games, including all new Xbox Game Studios titles like Halo Infinite the day they release, when you add Xbox Game Pass Ultimate (membership sold separately). Seamlessly move between multiple games in a flash with Quick Resume. At the heart of Series S is the Xbox Velocity Architecture, which pairs a custom-SSD with integrated software for faster, streamlined gameplay with significantly reduced load times.",
      price: 31799,
      category: 'xbox',
    },
    {
      name: 'Xbox Series X',
      imageUrl: 'https://m.media-amazon.com/images/I/61-jjE67uqL._AC_UY327_FMwebp_QL65_.jpg',
      miniDescription: 'Xbox Gaming Console',
      description: `Introducing Xbox series X, the fastest, most powerful Xbox ever. Play thousands of titles from four generations of consoles—all games look and play best on Xbox series X.
      Experience next-gen speed and performance with the Xbox velocity architecture, powered by a custom SSD and integrated software.
      Play thousands of games from four generations of Xbox with backward compatibility, including optimized titles at launch.
      Xbox game Pass ultimate includes over 100 high-quality games, online multiplayer, and an EA play membership for one low monthly price (membership sold separately).
      Xbox Smart delivery ensures you play the best available version of your game no matter which console you're playing on.`,
      price: 47990,
      category: 'xbox',
    },
    {
      name: 'Xbox Game Pass',
      imageUrl: 'https://m.media-amazon.com/images/I/51pikoc-ViL._AC_UY327_FMwebp_QL65_.jpg',
      miniDescription: 'Xbox Membership (1 month)',
      description: "Enjoy hundreds of high-quality games with Xbox Game Pass Ultimate. Play new games on day one like Starfield from Bethesda Softworks as well as iconic franchises like Halo from Xbox Game Studios, indie games, blockbusters, and more. Includes online multiplayer so you can play together with friends on console and PC. Plus, an EA Play membership gives you access to top titles on console and PC, including best-loved series like Battlefield and STAR WARS. Get more from the games you love, including exclusive in-game challenges and rewards, special member-only content, and early trials of select new EA titles. With Xbox Game Pass Ultimate, you also get exclusive Perks including in-game content, consumables, and more. Get additional benefits on select games in the Xbox Game Pass library and related game add-ons. Tap into the heart of the Xbox community and join millions of players ready and waiting to play together.",
      price: 549,
      category: 'xbox',
    },
    {
      name: 'Playstation 5',
      imageUrl: 'https://m.media-amazon.com/images/I/51wPWj--fAL._AC_UY327_FMwebp_QL65_.jpg',
      miniDescription: 'PS5 Gaming Console',
      description: `Maximize your play sessions with near instant load times for installed PS5 games.
      The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible.
      Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5 games.
      Play your favorite PS5 games on your stunning 4K TV.
      Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.
      With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors.
      PS5 consoles support 8K Output, so you can play games on your 4320p resolution display.
      Immerse yourself in soundscapes where it feels as if the sound comes from every direction. Through your headphones or TV speakers your surroundings truly come alive with Tempest 3D AudioTech in supported games.
      Experience haptic feedback via the DualSense wireless controller in select PS5 titles and feel the effects and impact of your in-game actions through dynamic sensory feedback.
      Get to grips with immersive adaptive triggers, featuring dynamic resistance levels which simulate the physical impact of in-game activities in select PS5 games.`,
      price: 44990,
      category: 'ps5',
    },
    {
      name: 'God of War',
      imageUrl: 'https://m.media-amazon.com/images/I/81emBOJxExL._AC_UY327_FMwebp_QL65_.jpg',
      miniDescription: 'PS4 game (2018)',
      description: `It is a new beginning for Kratos. Living as a man outside the shadow of the gods, he ventures into the brutal Norse wilds with his son Atreus, fighting to fulfil a deeply personal quest.
      God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released for the PlayStation 4 in April 2018, with a Windows port in January 2022.`,
      price: 899,
      category: 'ps4',
    },
  ];

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    // Scroll to the ProductDetails component when selectedProduct changes
    if (selectedProduct && productDetailsRef.current) {
      productDetailsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [selectedProduct]);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Sort products based on the selected sorting option
  filteredProducts.sort((a, b) => {
    if (selectedSort === 'priceAsc') {
      return a.price - b.price;
    } else if (selectedSort === 'priceDesc') {
      return b.price - a.price;
    } else if (selectedSort === 'nameAsc') {
      return a.name.localeCompare(b.name);
    } else if (selectedSort === 'nameDesc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  // Calculate the range of products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <h1>Products List</h1>

      {/* Filter and Sort Dropdowns */}
      <div className="filter-sort" >
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="ps5">PS5</option>
          <option value="ps4">PS4</option>
          <option value="xbox">Xbox</option>
        </select>
        <select
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="nameAsc">Name: A to Z</option>
          <option value="nameDesc">Name: Z to A</option>
        </select>
      </div>

      <div className="product-list" >
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onDetailsClick={handleDetailsClick}
          />
        ))}
      </div>

      {/* ProductDetails ref */}
      <div ref={productDetailsRef} />

      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastProduct >= filteredProducts.length}
        >
          Next
        </button>
      </div>

      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default ProductList;
