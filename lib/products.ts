export interface Product {
  id: string
  name: string
  price: number
  weight: string
  category: string
  image: string
  description: string
  features: string[]
  storage: string
  preparation: string
  nutritional: string
}

export const products: Product[] = [
  {
    id: "ribeye-steak",
    name: "Premium Ribeye Steak",
    price: 1850,
    weight: "500g",
    category: "Beef",
    image: "/assets/BEEF/raw-premium-beef-steak-marb.jpg",
    description:
      "Experience the ultimate in beef luxury with our Premium Ribeye Steak. Known for its exceptional marbling and rich, buttery flavor, this cut is perfect for grilling or pan-searing. Each steak is carefully selected for optimal tenderness and taste.",
    features: [
      "USDA Prime Grade",
      "Exceptional marbling throughout",
      "Aged for 21 days for maximum flavor",
      "Hand-cut by expert butchers",
    ],
    storage:
      "Keep frozen at -18°C or below. Once thawed, consume within 2 days. Do not refreeze after thawing. For best results, thaw slowly in the refrigerator overnight.",
    preparation:
      "Remove from refrigerator 30 minutes before cooking to bring to room temperature. Pat dry with paper towels. Season generously with salt and pepper. Sear in a hot pan or grill for 3-4 minutes per side for medium-rare.",
    nutritional:
      "Per 100g: Energy 250 kcal, Protein 26g, Fat 17g (Saturated 7g), Carbohydrates 0g, Sodium 60mg. High in iron, zinc, and vitamin B12.",
  },
  {
    id: "lamb-rack",
    name: "French Lamb Rack",
    price: 2200,
    weight: "600g",
    category: "Lamb",
    image: "/assets/LAMB/raw-lamb-chops-premium.jpg",
    description:
      "Our French Lamb Rack is an elegant centerpiece for any special occasion. Expertly trimmed and French-cut for presentation, this premium cut features tender, flavorful meat with just the right amount of fat for incredible taste.",
    features: [
      "French-trimmed for elegant presentation",
      "New Zealand grass-fed lamb",
      "8 ribs per rack",
      "Perfectly trimmed and ready to cook",
    ],
    storage:
      "Store in the coldest part of your refrigerator at 0-4°C. Use within 3 days of purchase or freeze immediately. When frozen, use within 6 months for best quality.",
    preparation:
      "Bring to room temperature before cooking. Season with herbs and spices. Roast at 200°C for 20-25 minutes for medium-rare. Let rest for 10 minutes before carving between the bones.",
    nutritional:
      "Per 100g: Energy 280 kcal, Protein 24g, Fat 20g (Saturated 9g), Carbohydrates 0g. Excellent source of protein, iron, and vitamin B12.",
  },
  {
    id: "pork-belly",
    name: "Premium Pork Belly",
    price: 850,
    weight: "1kg",
    category: "Pork",
    image: "/assets/PORK/raw-pork-chops-premium-cuts.jpg",
    description:
      "Indulge in our Premium Pork Belly, featuring layers of succulent meat and rich fat that renders beautifully when cooked. Perfect for braising, roasting, or slow-cooking to achieve crispy skin and tender meat.",
    features: [
      "Skin-on for crispy crackling",
      "Ideal meat-to-fat ratio",
      "Ethically raised pork",
      "Perfect for Asian and Western cuisines",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Can be frozen for up to 3 months. Thaw in refrigerator before cooking.",
    preparation:
      "Score the skin in a crosshatch pattern. Dry thoroughly and season with salt. For crispy skin, roast at 220°C for 30 minutes, then reduce to 160°C for 1.5-2 hours until tender.",
    nutritional:
      "Per 100g: Energy 518 kcal, Protein 9g, Fat 53g (Saturated 19g), Carbohydrates 0g. Rich in vitamins B1, B2, and selenium.",
  },
  {
    id: "chicken-breast",
    name: "Organic Chicken Breast",
    price: 450,
    weight: "500g",
    category: "Poultry",
    image: "/assets/POULTRY/raw-chicken-breast-premium-.jpg",
    description:
      "Our Organic Chicken Breast is sourced from free-range farms, ensuring superior quality and flavor. Lean, tender, and versatile, it's perfect for healthy meals and can be grilled, baked, or pan-fried.",
    features: [
      "100% organic and free-range",
      "No antibiotics or hormones",
      "Skinless and boneless",
      "High protein, low fat",
    ],
    storage:
      "Store in the coldest part of refrigerator at 0-4°C. Use within 2 days of purchase. Freeze immediately if not using within this time.",
    preparation:
      "Pound to even thickness for uniform cooking. Season as desired. Cook to internal temperature of 74°C. Grill for 6-8 minutes per side or bake at 180°C for 20-25 minutes.",
    nutritional:
      "Per 100g: Energy 165 kcal, Protein 31g, Fat 3.6g (Saturated 1g), Carbohydrates 0g. Excellent source of lean protein and vitamin B6.",
  },
  {
    id: "salmon-fillet",
    name: "Norwegian Salmon Fillet",
    price: 1200,
    weight: "400g",
    category: "Seafood",
    image: "/assets/SEAFOOD/raw-fresh-salmon-fillet-premiu.jpg",
    description:
      "Premium Norwegian Salmon Fillet from the cold waters of Norway, known for its rich omega-3 content and delicate flavor. The firm texture and beautiful color make it perfect for grilling, baking, or enjoying as sashimi.",
    features: [
      "Sustainably farmed in Norway",
      "High in omega-3 fatty acids",
      "Skin-on for extra flavor",
      "Sashimi-grade quality",
    ],
    storage:
      "Keep refrigerated at 0-2°C. Use within 1-2 days for best quality. Can be frozen for up to 2 months. Store on ice in refrigerator for optimal freshness.",
    preparation:
      "Pat dry and bring to room temperature. Season with salt, pepper, and lemon. Grill skin-side down for 4-5 minutes, then flip for 2-3 minutes. Or bake at 200°C for 12-15 minutes.",
    nutritional:
      "Per 100g: Energy 208 kcal, Protein 20g, Fat 13g (Saturated 3g), Omega-3 2.3g. Rich in vitamin D, B12, and selenium.",
  },
  {
    id: "italian-sausage",
    name: "Italian Sausage",
    price: 650,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/raw-sausages-premium-butch.jpg",
    description:
      "Authentic Italian Sausage made with premium pork and traditional herbs and spices including fennel, garlic, and paprika. Perfect for pasta dishes, grilling, or adding flavor to your favorite recipes.",
    features: [
      "Traditional Italian recipe",
      "Premium pork with natural casings",
      "Seasoned with fennel and herbs",
      "No artificial preservatives",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Can be frozen for up to 2 months. Do not refreeze once thawed.",
    preparation:
      "Pierce sausages with a fork. Pan-fry over medium heat for 12-15 minutes, turning frequently. Or grill for 10-12 minutes until golden brown and cooked through (internal temp 71°C).",
    nutritional:
      "Per 100g: Energy 310 kcal, Protein 16g, Fat 26g (Saturated 9g), Carbohydrates 2g. Good source of protein and vitamin B12.",
  },
  {
    id: "wagyu-beef",
    name: "A5 Wagyu Beef",
    price: 4500,
    weight: "300g",
    category: "Beef",
    image: "/assets/BEEF/raw-premium-beef-steak-marb.jpg",
    description:
      "The pinnacle of beef excellence. Our A5 Wagyu features extraordinary marbling that melts in your mouth, delivering an unparalleled dining experience. This is the highest grade of Japanese Wagyu, renowned worldwide for its exceptional quality.",
    features: [
      "Authentic A5 Japanese Wagyu",
      "BMS score 10-12 (highest marbling)",
      "Melt-in-your-mouth texture",
      "Limited availability",
    ],
    storage:
      "Keep frozen at -18°C or below. Thaw slowly in refrigerator for 24 hours before cooking. Use immediately after thawing.",
    preparation:
      "Bring to room temperature for 30 minutes. Season lightly with salt only. Sear in very hot pan for 1-2 minutes per side for rare to medium-rare. Do not overcook.",
    nutritional:
      "Per 100g: Energy 390 kcal, Protein 22g, Fat 32g (Saturated 13g), Carbohydrates 0g. Rich in monounsaturated fats and conjugated linoleic acid.",
  },
  {
    id: "lamb-shoulder",
    name: "Lamb Shoulder",
    price: 1650,
    weight: "800g",
    category: "Lamb",
    image: "/assets/LAMB/raw-lamb-chops-premium.jpg",
    description:
      "Tender and flavorful Lamb Shoulder, perfect for slow-cooking and braising. This cut becomes incredibly tender when cooked low and slow, making it ideal for stews, roasts, and pulled lamb dishes.",
    features: [
      "Bone-in for extra flavor",
      "Grass-fed New Zealand lamb",
      "Perfect for slow cooking",
      "Rich, savory flavor",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Can be frozen for up to 6 months. Thaw in refrigerator for 24 hours before cooking.",
    preparation:
      "Season generously with herbs and spices. Sear all sides in hot pan. Braise at 160°C for 3-4 hours with liquid until fork-tender. Or slow cook for 6-8 hours on low.",
    nutritional:
      "Per 100g: Energy 294 kcal, Protein 25g, Fat 21g (Saturated 9g), Carbohydrates 0g. Excellent source of iron, zinc, and B vitamins.",
  },
  {
    id: "sirloin-steak",
    name: "USDA Prime Sirloin",
    price: 1550,
    weight: "500g",
    category: "Beef",
    image: "/assets/U.S%20BEEF/premium-raw-ribeye-steak-ma.jpg",
    description:
      "USDA Prime Sirloin combines excellent flavor with a leaner profile. This versatile cut is perfect for grilling and offers great beef taste with less marbling than ribeye, making it a healthier option without sacrificing flavor.",
    features: ["USDA Prime certified", "Lean yet flavorful", "Perfect for grilling", "Consistent tenderness"],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Freeze for up to 6 months. Thaw in refrigerator overnight before cooking.",
    preparation:
      "Bring to room temperature. Season with salt and pepper. Grill over high heat for 4-5 minutes per side for medium-rare. Let rest 5 minutes before slicing.",
    nutritional:
      "Per 100g: Energy 201 kcal, Protein 29g, Fat 9g (Saturated 3.5g), Carbohydrates 0g. High in protein, iron, and vitamin B12.",
  },
  {
    id: "beef-tenderloin",
    name: "Beef Tenderloin",
    price: 2200,
    weight: "400g",
    category: "Beef",
    image: "/assets/BEEF/raw-premium-beef-steak-marb.jpg",
    description:
      "The most tender cut of beef, our Beef Tenderloin (filet mignon) is prized for its buttery texture and mild flavor. This premium cut requires minimal seasoning and is perfect for special occasions.",
    features: [
      "Most tender cut of beef",
      "Center-cut premium portion",
      "Mild, delicate flavor",
      "Perfect for special occasions",
    ],
    storage: "Store at 0-4°C and use within 2 days. Can be frozen for up to 6 months. Thaw slowly in refrigerator.",
    preparation:
      "Tie with kitchen twine for even cooking. Season simply with salt and pepper. Sear all sides, then roast at 200°C for 15-20 minutes for medium-rare.",
    nutritional:
      "Per 100g: Energy 227 kcal, Protein 26g, Fat 13g (Saturated 5g), Carbohydrates 0g. Excellent source of complete protein and iron.",
  },
  {
    id: "lamb-chops",
    name: "Lamb Chops",
    price: 1800,
    weight: "500g",
    category: "Lamb",
    image: "/assets/LAMB/raw-lamb-chops-premium.jpg",
    description:
      "Premium Lamb Chops cut from the loin, offering tender meat with excellent flavor. These chops are perfect for quick grilling or pan-searing, making them ideal for weeknight dinners or entertaining guests.",
    features: ["Loin chops for tenderness", "Grass-fed lamb", "Quick-cooking cut", "Individually portioned"],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Freeze for up to 6 months. Thaw in refrigerator before cooking.",
    preparation:
      "Bring to room temperature. Season with rosemary, garlic, salt, and pepper. Grill or pan-sear for 3-4 minutes per side for medium-rare.",
    nutritional:
      "Per 100g: Energy 258 kcal, Protein 26g, Fat 17g (Saturated 7g), Carbohydrates 0g. Rich in protein, iron, and zinc.",
  },
  {
    id: "pork-chops",
    name: "Pork Chops",
    price: 650,
    weight: "600g",
    category: "Pork",
    image: "/assets/PORK/raw-pork-chops-premium-cuts.jpg",
    description:
      "Juicy, bone-in Pork Chops with excellent marbling for maximum flavor. These versatile chops are perfect for grilling, baking, or pan-frying, and the bone adds extra moisture and flavor during cooking.",
    features: [
      "Bone-in for extra flavor",
      "Center-cut for tenderness",
      "Excellent marbling",
      "Perfect thickness for grilling",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Can be frozen for up to 3 months. Thaw in refrigerator overnight.",
    preparation:
      "Brine for 2 hours for extra juiciness (optional). Season well. Grill or pan-sear for 4-5 minutes per side until internal temperature reaches 63°C. Let rest 3 minutes.",
    nutritional:
      "Per 100g: Energy 231 kcal, Protein 25g, Fat 14g (Saturated 5g), Carbohydrates 0g. Good source of protein and thiamine.",
  },
  {
    id: "pork-loin",
    name: "Pork Loin",
    price: 750,
    weight: "800g",
    category: "Pork",
    image: "/assets/PORK/raw-pork-chops-premium-cuts.jpg",
    description:
      "Lean and tender Pork Loin, perfect for roasting whole or slicing into medallions. This versatile cut is lean yet flavorful, making it an excellent choice for healthy meals without compromising on taste.",
    features: [
      "Lean, healthy cut",
      "Boneless for easy preparation",
      "Consistent texture",
      "Perfect for roasting or slicing",
    ],
    storage: "Refrigerate at 0-4°C and use within 3 days. Freeze for up to 3 months. Thaw in refrigerator overnight.",
    preparation:
      "Season with herbs and spices. Roast at 180°C for 25-30 minutes per 500g until internal temperature reaches 63°C. Let rest 10 minutes before slicing.",
    nutritional:
      "Per 100g: Energy 143 kcal, Protein 26g, Fat 4g (Saturated 1.3g), Carbohydrates 0g. High in protein, low in fat.",
  },
  {
    id: "chicken-thighs",
    name: "Chicken Thighs",
    price: 380,
    weight: "600g",
    category: "Poultry",
    image: "/assets/POULTRY/raw-chicken-breast-premium-.jpg",
    description:
      "Juicy, flavorful Chicken Thighs that stay moist during cooking. More forgiving than chicken breast, thighs are perfect for grilling, roasting, or braising, and their rich flavor makes them a family favorite.",
    features: [
      "Bone-in, skin-on for maximum flavor",
      "Free-range chicken",
      "Juicier than breast meat",
      "Budget-friendly option",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 2 days. Freeze for up to 6 months. Thaw in refrigerator for 24 hours.",
    preparation:
      "Season generously. Roast skin-side up at 200°C for 35-40 minutes until skin is crispy and internal temperature reaches 74°C. Or grill for 8-10 minutes per side.",
    nutritional:
      "Per 100g: Energy 209 kcal, Protein 26g, Fat 11g (Saturated 3g), Carbohydrates 0g. Rich in iron and zinc.",
  },
  {
    id: "whole-chicken",
    name: "Whole Chicken",
    price: 550,
    weight: "1.2kg",
    category: "Poultry",
    image: "/assets/POULTRY/raw-chicken-breast-premium-.jpg",
    description:
      "Premium Whole Chicken, perfect for roasting, rotisserie, or breaking down into parts. Free-range and raised without antibiotics, our whole chickens offer exceptional flavor and value for feeding the whole family.",
    features: ["Free-range, no antibiotics", "Perfect roasting size", "Giblets included", "Great value for families"],
    storage:
      "Refrigerate at 0-4°C and use within 2 days. Can be frozen for up to 9 months. Thaw in refrigerator for 24 hours.",
    preparation:
      "Pat dry inside and out. Season cavity and skin. Roast at 200°C for 20 minutes per 500g plus 20 minutes extra. Internal temperature should reach 74°C.",
    nutritional:
      "Per 100g: Energy 239 kcal, Protein 27g, Fat 14g (Saturated 4g), Carbohydrates 0g. Complete protein source with B vitamins.",
  },
  {
    id: "tuna-steak",
    name: "Yellowfin Tuna Steak",
    price: 950,
    weight: "400g",
    category: "Seafood",
    image: "/assets/SEAFOOD/raw-fresh-salmon-fillet-premiu.jpg",
    description:
      "Premium Yellowfin Tuna Steak with a meaty texture and rich flavor. Perfect for searing rare, grilling, or enjoying as sashimi. This sustainable choice is packed with protein and omega-3 fatty acids.",
    features: ["Sashimi-grade quality", "Sustainably caught", "Rich in protein and omega-3", "Firm, meaty texture"],
    storage:
      "Keep at 0-2°C on ice. Use within 1 day for sashimi, 2 days for cooked preparations. Can be frozen for up to 2 months.",
    preparation:
      "Pat dry and season with salt and pepper. Sear in very hot pan for 1-2 minutes per side for rare. Or grill over high heat. Do not overcook.",
    nutritional:
      "Per 100g: Energy 144 kcal, Protein 23g, Fat 5g (Saturated 1.3g), Omega-3 1.3g. Excellent source of selenium and vitamin B12.",
  },
  {
    id: "prawns",
    name: "Tiger Prawns",
    price: 1100,
    weight: "500g",
    category: "Seafood",
    image: "/assets/SEAFOOD/raw-fresh-salmon-fillet-premiu.jpg",
    description:
      "Large, succulent Tiger Prawns with sweet, firm meat. Perfect for grilling, stir-frying, or adding to pasta dishes. These premium prawns are flash-frozen to preserve freshness and quality.",
    features: [
      "Large size (16-20 count per kg)",
      "Shell-on for maximum flavor",
      "Flash-frozen for freshness",
      "Wild-caught",
    ],
    storage:
      "Keep frozen at -18°C. Thaw in refrigerator for 4-6 hours before cooking. Do not refreeze once thawed. Use within 24 hours of thawing.",
    preparation:
      "Devein if desired. Leave shell on for grilling, or peel for stir-frying. Cook until pink and opaque, about 2-3 minutes per side. Do not overcook.",
    nutritional:
      "Per 100g: Energy 99 kcal, Protein 24g, Fat 0.3g, Carbohydrates 0.2g. High in protein, low in calories, rich in selenium.",
  },
  {
    id: "chorizo",
    name: "Spanish Chorizo",
    price: 700,
    weight: "450g",
    category: "Sausage",
    image: "/assets/SAUSAGE/raw-sausages-premium-butch.jpg",
    description:
      "Authentic Spanish Chorizo seasoned with smoked paprika for a distinctive flavor and vibrant color. Perfect for adding depth to paellas, stews, or enjoying sliced as part of a charcuterie board.",
    features: [
      "Traditional Spanish recipe",
      "Smoked paprika seasoning",
      "Semi-cured for easy slicing",
      "No artificial colors",
    ],
    storage: "Refrigerate at 0-4°C. Use within 2 weeks of opening. Can be frozen for up to 2 months.",
    preparation:
      "Slice into rounds. Can be eaten raw or cooked. Pan-fry for 2-3 minutes until oil releases. Add to paellas, stews, or pasta dishes for authentic Spanish flavor.",
    nutritional:
      "Per 100g: Energy 455 kcal, Protein 24g, Fat 38g (Saturated 14g), Carbohydrates 2g. Rich in vitamin B12 and iron.",
  },
  {
    id: "bratwurst",
    name: "German Bratwurst",
    price: 720,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/raw-sausages-premium-butch.jpg",
    description:
      "Traditional German Bratwurst made with premium pork and veal, seasoned with nutmeg, white pepper, and marjoram. Perfect for grilling or pan-frying, these sausages are a taste of authentic German cuisine.",
    features: ["Traditional German recipe", "Pork and veal blend", "Natural casings", "Perfect for grilling"],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Can be frozen for up to 2 months. Thaw in refrigerator before cooking.",
    preparation:
      "Grill over medium heat for 15-20 minutes, turning frequently. Or simmer in beer or water for 10 minutes, then grill for 5 minutes to brown. Serve with mustard and sauerkraut.",
    nutritional:
      "Per 100g: Energy 297 kcal, Protein 13g, Fat 26g (Saturated 9g), Carbohydrates 1g. Good source of protein and B vitamins.",
  },
]

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

export function getAllCategories(): string[] {
  const categories = new Set(products.map((product) => product.category))
  return Array.from(categories)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery),
  )
}
