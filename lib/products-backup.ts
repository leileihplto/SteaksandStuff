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
  // ===== BEEF =====
  {
    id: "aus-mb2-striploin",
    name: "Australian MB2 Striploin",
    price: 1650,
    weight: "500g",
    category: "Beef",
    image: "/assets/BEEF/aus mb2 striploin.png",
    description:
      "Premium Australian grass-fed striploin with excellent marbling (MB2). Known for its robust beef flavor and tender texture, perfect for grilling or pan-searing.",
    features: [
      "Australian grass-fed beef",
      "MB2 marbling grade",
      "Tender and flavorful",
      "Perfect for grilling",
    ],
    storage:
      "Keep frozen at -18°C or below. Once thawed, consume within 2 days. Do not refreeze after thawing.",
    preparation:
      "Bring to room temperature 30 minutes before cooking. Season with salt and pepper. Sear in hot pan for 3-4 minutes per side for medium-rare.",
    nutritional:
      "Per 100g: Energy 240 kcal, Protein 26g, Fat 15g (Saturated 6g), Carbohydrates 0g. High in iron and vitamin B12.",
  },
  {
    id: "aus-mb6-7-ribeye-tomahawk",
    name: "Australian MB6-7 Ribeye Tomahawk",
    price: 3800,
    weight: "800g",
    category: "Beef",
    image: "/assets/BEEF/aus mb6-7 ribeye tomahawk.png",
    description:
      "Spectacular Australian Tomahawk Ribeye with exceptional MB6-7 marbling. This show-stopping cut features the long bone intact for dramatic presentation and incredible flavor.",
    features: [
      "MB6-7 premium marbling",
      "Long bone for presentation",
      "Incredibly tender and juicy",
      "Perfect for special occasions",
    ],
    storage:
      "Keep frozen at -18°C. Thaw slowly in refrigerator for 24 hours before cooking. Use immediately after thawing.",
    preparation:
      "Bring to room temperature. Season generously. Sear all sides in hot pan, then finish in oven at 200°C for 15-20 minutes for medium-rare.",
    nutritional:
      "Per 100g: Energy 290 kcal, Protein 24g, Fat 21g (Saturated 9g), Carbohydrates 0g. Rich in protein and healthy fats.",
  },
  {
    id: "aus-shortribs-bone-in",
    name: "Australian Short Ribs Bone-In",
    price: 1450,
    weight: "700g",
    category: "Beef",
    image: "/assets/BEEF/aus shortribs bone in.png",
    description:
      "Rich, flavorful Australian short ribs with bone-in for extra depth. Perfect for slow-cooking, braising, or Korean BBQ style grilling.",
    features: [
      "Bone-in for maximum flavor",
      "Perfect for slow cooking",
      "Great for Korean BBQ",
      "Grass-fed Australian beef",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Can be frozen for up to 6 months.",
    preparation:
      "For braising: sear all sides, then cook low and slow at 160°C for 3-4 hours. For BBQ: marinate and grill over medium heat.",
    nutritional:
      "Per 100g: Energy 280 kcal, Protein 25g, Fat 20g (Saturated 8g), Carbohydrates 0g. Excellent source of collagen.",
  },
  {
    id: "canadian-prime-ribeye-bone-in",
    name: "Canadian Prime Ribeye Bone-In",
    price: 2200,
    weight: "600g",
    category: "Beef",
    image: "/assets/BEEF/canadian prime ribeye bone in.png",
    description:
      "Premium Canadian Prime ribeye with bone-in for enhanced flavor and moisture. Exceptional marbling ensures a buttery, tender eating experience.",
    features: [
      "Canadian Prime grade",
      "Bone-in for extra flavor",
      "Excellent marbling",
      "Aged for tenderness",
    ],
    storage:
      "Store at 0-4°C and use within 3 days. Freeze for up to 6 months. Thaw in refrigerator overnight.",
    preparation:
      "Remove from fridge 30 minutes before cooking. Season simply. Grill or pan-sear for 4-5 minutes per side for medium-rare.",
    nutritional:
      "Per 100g: Energy 260 kcal, Protein 26g, Fat 18g (Saturated 7g), Carbohydrates 0g. High in protein and zinc.",
  },
  {
    id: "f1-japanese-wagyu-tenderloin",
    name: "F1 Japanese Wagyu Tenderloin",
    price: 5200,
    weight: "300g",
    category: "Beef",
    image: "/assets/BEEF/f1 japanese wagyu tenderloin.png",
    description:
      "Exquisite F1 Japanese Wagyu tenderloin - the pinnacle of beef excellence. Extraordinary marbling creates an unmatched melt-in-your-mouth texture and rich, buttery flavor.",
    features: [
      "F1 Japanese Wagyu genetics",
      "Most tender cut",
      "Exceptional marbling",
      "Limited availability",
    ],
    storage:
      "Keep frozen at -18°C. Thaw slowly in refrigerator for 24 hours. Use immediately after thawing.",
    preparation:
      "Bring to room temperature. Season lightly with salt only. Sear in very hot pan for 2-3 minutes per side for rare to medium-rare.",
    nutritional:
      "Per 100g: Energy 380 kcal, Protein 21g, Fat 32g (Saturated 13g), Carbohydrates 0g. Rich in omega-3 and omega-6 fatty acids.",
  },

  // ===== U.S BEEF =====
  {
    id: "prime-ribeye-boneless",
    name: "USDA Prime Ribeye Boneless",
    price: 2400,
    weight: "500g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/Prime Ribeye boneless.png",
    description:
      "USDA Prime boneless ribeye - America's finest beef. Rich marbling throughout ensures exceptional flavor and tenderness. Perfect for the discerning steak enthusiast.",
    features: [
      "USDA Prime certified",
      "Premium marbling",
      "Dry-aged for flavor",
      "Boneless for easy preparation",
    ],
    storage:
      "Keep refrigerated at 0-4°C. Use within 3 days or freeze for up to 6 months.",
    preparation:
      "Room temperature for 30 minutes. Season with salt and pepper. Sear in cast iron for 4 minutes per side for medium-rare. Rest 5 minutes.",
    nutritional:
      "Per 100g: Energy 270 kcal, Protein 25g, Fat 19g (Saturated 8g), Carbohydrates 0g. Excellent source of protein and B vitamins.",
  },
  {
    id: "srf-gold-wagyu-striploin",
    name: "SRF Gold Wagyu Striploin",
    price: 4500,
    weight: "400g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/SRF gold wagyu striploin.png",
    description:
      "Snake River Farms Gold Grade Wagyu striploin - American Wagyu excellence. Intense marbling creates incredible tenderness and a rich, complex flavor profile.",
    features: [
      "SRF Gold Grade Wagyu",
      "American Wagyu",
      "Intense marbling",
      "Award-winning quality",
    ],
    storage:
      "Freeze at -18°C. Thaw in refrigerator 24 hours before cooking. Do not refreeze.",
    preparation:
      "Bring to room temperature. Light seasoning only. High heat sear for 3 minutes per side for medium-rare. Let rest.",
    nutritional:
      "Per 100g: Energy 350 kcal, Protein 23g, Fat 28g (Saturated 12g), Carbohydrates 0g. Rich in monounsaturated fats.",
  },
  {
    id: "srf-wagyu-franks",
    name: "SRF Wagyu Franks (Sausage)",
    price: 950,
    weight: "500g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/SRF wagyu franks (sausage).png",
    description:
      "Premium hot dogs made from Snake River Farms Wagyu beef. Elevate your BBQ with these gourmet franks featuring rich Wagyu flavor in a classic format.",
    features: [
      "Made from Wagyu beef",
      "Gourmet hot dogs",
      "Natural casings",
      "Perfect for grilling",
    ],
    storage:
      "Refrigerate at 0-4°C. Use within 5 days. Can be frozen for up to 2 months.",
    preparation:
      "Grill over medium heat for 8-10 minutes, turning frequently. Or pan-fry until browned. Serve in toasted buns with your favorite toppings.",
    nutritional:
      "Per 100g: Energy 320 kcal, Protein 14g, Fat 28g (Saturated 11g), Carbohydrates 3g. Rich flavor profile.",
  },
  {
    id: "srf-wagyu-gourmet-burger",
    name: "SRF Wagyu Gourmet Burger",
    price: 850,
    weight: "400g (2 patties)",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/SRF wagyu gourmet burger.png",
    description:
      "Premium burger patties made from Snake River Farms Wagyu beef. Experience the ultimate burger with incredible juiciness and rich, complex beef flavor.",
    features: [
      "100% Wagyu beef",
      "Pre-formed patties",
      "Exceptional marbling",
      "Restaurant-quality burgers",
    ],
    storage:
      "Keep frozen until ready to use. Thaw in refrigerator. Use within 24 hours of thawing.",
    preparation:
      "Don't overwork the meat. Grill or pan-sear over high heat for 4 minutes per side for medium. Season during cooking. Rest 2 minutes.",
    nutritional:
      "Per 100g: Energy 310 kcal, Protein 18g, Fat 26g (Saturated 11g), Carbohydrates 0g. High in protein and iron.",
  },
  {
    id: "cab-burger-patties",
    name: "CAB Burger Patties",
    price: 680,
    weight: "500g (4 patties)",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/cab burger patties.png",
    description:
      "Certified Angus Beef burger patties - premium quality at everyday prices. Perfect for family BBQs and weeknight dinners without compromising on flavor.",
    features: [
      "Certified Angus Beef",
      "Pre-portioned patties",
      "Great value",
      "Consistent quality",
    ],
    storage:
      "Keep frozen. Thaw in refrigerator before cooking. Use within 24 hours of thawing. Do not refreeze.",
    preparation:
      "Grill or pan-fry over medium-high heat for 4-5 minutes per side for medium. Season generously with salt and pepper.",
    nutritional:
      "Per 100g: Energy 250 kcal, Protein 20g, Fat 19g (Saturated 7g), Carbohydrates 0g. Good source of protein and iron.",
  },
  {
    id: "high-choice-flat-iron-steak",
    name: "High Choice Flat Iron Steak",
    price: 1350,
    weight: "400g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/high choice flat iron steak.png",
    description:
      "USDA High Choice flat iron steak - incredibly tender and flavorful. This underrated cut rivals tenderloin in tenderness at a fraction of the price.",
    features: [
      "USDA High Choice",
      "Second most tender cut",
      "Excellent value",
      "Rich beef flavor",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Freeze for up to 6 months.",
    preparation:
      "Bring to room temperature. Season well. Grill or pan-sear over high heat for 3-4 minutes per side for medium-rare. Slice against the grain.",
    nutritional:
      "Per 100g: Energy 220 kcal, Protein 28g, Fat 12g (Saturated 5g), Carbohydrates 0g. High protein, leaner cut.",
  },
  {
    id: "high-choice-shortribs-galbi",
    name: "High Choice Short Ribs (Galbi Cut)",
    price: 1550,
    weight: "600g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/high choice shortribs bone in (galbi cut).png",
    description:
      "USDA High Choice short ribs cut in the traditional Korean Galbi style. Thinly sliced across the bone for quick grilling and maximum flavor absorption.",
    features: [
      "Korean Galbi cut",
      "USDA High Choice",
      "Perfect for Korean BBQ",
      "Quick-cooking style",
    ],
    storage:
      "Refrigerate at 0-4°C. Use within 2 days. Can be frozen for up to 4 months.",
    preparation:
      "Marinate for 2-24 hours in your favorite Korean BBQ marinade. Grill over high heat for 2-3 minutes per side. Serve with lettuce wraps.",
    nutritional:
      "Per 100g: Energy 270 kcal, Protein 24g, Fat 19g (Saturated 8g), Carbohydrates 0g. Rich in protein and minerals.",
  },
  {
    id: "high-choice-shortribs-yaki",
    name: "High Choice Short Ribs Boneless (Yaki Cut)",
    price: 1650,
    weight: "600g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/high choice shortribs boneless (yaki cut).png",
    description:
      "USDA High Choice boneless short ribs in Japanese Yakiniku style. Perfect thin slicing for quick grilling and ideal for hot pot or BBQ.",
    features: [
      "Boneless for easy eating",
      "Japanese Yaki cut",
      "Quick cooking",
      "Versatile preparation",
    ],
    storage:
      "Store at 0-4°C. Use within 2 days. Freeze for up to 4 months. Thaw in refrigerator.",
    preparation:
      "Slice thinly if not pre-sliced. Marinate briefly or season simply. Grill over high heat for 1-2 minutes per side. Perfect for yakiniku or shabu-shabu.",
    nutritional:
      "Per 100g: Energy 265 kcal, Protein 25g, Fat 18g (Saturated 7g), Carbohydrates 0g. Excellent protein source.",
  },

  // ===== LAMB =====
  {
    id: "new-z-lamb-chops",
    name: "New Zealand Lamb Chops",
    price: 1850,
    weight: "500g",
    category: "Lamb",
    image: "/assets/LAMB/new Z lamb chops.png",
    description:
      "Premium New Zealand grass-fed lamb chops. Tender, flavorful, and versatile. Perfect for quick grilling or pan-searing for an elegant dinner.",
    features: [
      "100% grass-fed",
      "New Zealand lamb",
      "Quick-cooking",
      "Individually portioned",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Can be frozen for up to 6 months.",
    preparation:
      "Bring to room temperature. Season with rosemary, garlic, salt and pepper. Grill or pan-sear for 3-4 minutes per side for medium-rare.",
    nutritional:
      "Per 100g: Energy 260 kcal, Protein 26g, Fat 17g (Saturated 7g), Carbohydrates 0g. Rich in iron and zinc.",
  },
  {
    id: "us-lamb-riblets",
    name: "U.S Lamb Riblets",
    price: 1450,
    weight: "600g",
    category: "Lamb",
    image: "/assets/LAMB/u.s lamb riblets.png",
    description:
      "Tender U.S lamb riblets, perfect for slow-cooking or braising. These flavorful cuts become incredibly tender and are great for Mediterranean or Asian-style preparations.",
    features: [
      "U.S sourced lamb",
      "Perfect for slow cooking",
      "Rich, savory flavor",
      "Great value cut",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Freeze for up to 6 months.",
    preparation:
      "Season generously. Braise at 160°C for 2-3 hours until tender. Or slow cook with aromatics and liquid for 4-6 hours on low.",
    nutritional:
      "Per 100g: Energy 290 kcal, Protein 24g, Fat 21g (Saturated 9g), Carbohydrates 0g. High in protein and B vitamins.",
  },

  // ===== PORK =====
  {
    id: "pork-bacon-endcuts",
    name: "Pork Bacon End Cuts",
    price: 450,
    weight: "500g",
    category: "Pork",
    image: "/assets/PORK/pork bacon endcuts.png",
    description:
      "Premium bacon end cuts - perfect for cooking and adding smoky flavor to dishes. Great value for the quality, ideal for recipes requiring diced or chopped bacon.",
    features: [
      "Premium quality bacon",
      "Great for cooking",
      "Excellent value",
      "Versatile use",
    ],
    storage:
      "Refrigerate at 0-4°C. Use within 7 days of opening. Can be frozen for up to 3 months.",
    preparation:
      "Dice or chop as needed. Pan-fry over medium heat until crispy. Perfect for carbonara, salads, or breakfast dishes.",
    nutritional:
      "Per 100g: Energy 540 kcal, Protein 37g, Fat 42g (Saturated 14g), Carbohydrates 1g. High in protein and flavor.",
  },
  {
    id: "pork-belly-bone-in",
    name: "Pork Belly Bone-In",
    price: 950,
    weight: "1kg",
    category: "Pork",
    image: "/assets/PORK/pork belly bone in.png",
    description:
      "Premium pork belly with ribs attached. Ideal meat-to-fat ratio ensures tender, flavorful results. Perfect for lechon kawali, slow roasting, or Asian preparations.",
    features: [
      "Ribs attached for flavor",
      "Skin-on for crispy crackling",
      "Ideal for roasting",
      "Filipino favorite",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Can be frozen for up to 3 months.",
    preparation:
      "Score skin. Boil until tender, then air-dry. Deep fry or roast at 220°C until skin is crispy. Perfect for lechon kawali or crispy pork belly.",
    nutritional:
      "Per 100g: Energy 520 kcal, Protein 9g, Fat 53g (Saturated 19g), Carbohydrates 0g. Rich indulgent cut.",
  },
  {
    id: "pork-belly-boneless",
    name: "Pork Belly Boneless",
    price: 850,
    weight: "1kg",
    category: "Pork",
    image: "/assets/PORK/pork belly boneless.png",
    description:
      "Boneless pork belly with beautiful layers of meat and fat. Incredibly versatile - perfect for braising, roasting, or slicing for bacon. Skin-on for crispy results.",
    features: [
      "Boneless for easy preparation",
      "Skin-on option",
      "Versatile cut",
      "Perfect meat-to-fat ratio",
    ],
    storage:
      "Store at 0-4°C and use within 3 days. Freeze for up to 3 months. Thaw in refrigerator.",
    preparation:
      "For crispy: score skin, dry thoroughly, season, and roast at 220°C then 160°C. For braising: simmer in flavorful liquid for 2-3 hours.",
    nutritional:
      "Per 100g: Energy 518 kcal, Protein 9g, Fat 53g (Saturated 19g), Carbohydrates 0g. Rich in vitamins B1 and B2.",
  },

  // ===== U.S PORK =====
  {
    id: "us-pork-chop",
    name: "U.S Pork Chop",
    price: 750,
    weight: "600g",
    category: "U.S Pork",
    image: "/assets/U.S PORK/pork chop.png",
    description:
      "Premium U.S pork chops with excellent marbling. Bone-in for extra flavor and moisture. Perfect for grilling, pan-frying, or baking.",
    features: [
      "U.S premium pork",
      "Bone-in for flavor",
      "Excellent marbling",
      "Quick-cooking",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 3 days. Can be frozen for up to 3 months.",
    preparation:
      "Brine for 2 hours (optional). Bring to room temperature. Season well. Grill or pan-sear for 4-5 minutes per side until internal temp reaches 63°C.",
    nutritional:
      "Per 100g: Energy 235 kcal, Protein 25g, Fat 14g (Saturated 5g), Carbohydrates 0g. Good source of protein and thiamine.",
  },
  {
    id: "srf-kuro-porkchop",
    name: "SRF Kurobuta Pork Chop",
    price: 1350,
    weight: "500g",
    category: "U.S Pork",
    image: "/assets/U.S PORK/srf kuro porkchop.png",
    description:
      "Snake River Farms Kurobuta pork chop - the 'Wagyu of pork'. Exceptional marbling creates incredibly juicy, tender, and flavorful chops. A true premium experience.",
    features: [
      "Kurobuta heritage breed",
      "Exceptional marbling",
      "Incredibly tender",
      "Rich, sweet flavor",
    ],
    storage:
      "Store at 0-4°C and use within 3 days. Freeze for up to 3 months. Thaw slowly in refrigerator.",
    preparation:
      "Bring to room temperature. Season simply with salt and pepper. Pan-sear for 4 minutes per side. Rest 3 minutes before serving.",
    nutritional:
      "Per 100g: Energy 270 kcal, Protein 23g, Fat 19g (Saturated 7g), Carbohydrates 0g. Rich in protein and minerals.",
  },
  {
    id: "srf-kuro-sinigang-rib",
    name: "SRF Kurobuta Sinigang Rib",
    price: 1250,
    weight: "700g",
    category: "U.S Pork",
    image: "/assets/U.S PORK/srf kuro sinigang rib.png",
    description:
      "Premium Kurobuta pork ribs cut perfectly for Filipino sinigang. The exceptional marbling of Kurobuta pork elevates this classic Filipino dish to new heights.",
    features: [
      "Kurobuta heritage pork",
      "Cut for sinigang",
      "Exceptional flavor",
      "Filipino favorite cut",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 2 days. Can be frozen for up to 3 months.",
    preparation:
      "Boil until tender, then add to sinigang broth with vegetables and tamarind. Simmer until flavors meld. The marbling keeps meat tender and flavorful.",
    nutritional:
      "Per 100g: Energy 290 kcal, Protein 22g, Fat 22g (Saturated 8g), Carbohydrates 0g. Rich in protein and collagen.",
  },

  // ===== POULTRY =====
  {
    id: "chicken-breast-boneless",
    name: "Chicken Breast Boneless",
    price: 420,
    weight: "500g",
    category: "Poultry",
    image: "/assets/POULTRY/chick breast boneless.png",
    description:
      "Premium boneless chicken breast - lean, tender, and versatile. Perfect for healthy meals, grilling, baking, or stir-frying. Consistently high quality.",
    features: [
      "Boneless and skinless",
      "High protein, low fat",
      "Versatile cooking",
      "Consistent quality",
    ],
    storage:
      "Refrigerate at 0-4°C. Use within 2 days. Freeze immediately if not using. Keep frozen up to 6 months.",
    preparation:
      "Pound to even thickness. Season as desired. Grill for 6-8 minutes per side or bake at 180°C for 20-25 minutes until internal temp reaches 74°C.",
    nutritional:
      "Per 100g: Energy 165 kcal, Protein 31g, Fat 3.6g (Saturated 1g), Carbohydrates 0g. Excellent lean protein source.",
  },
  {
    id: "chicken-leg",
    name: "Chicken Leg Quarters",
    price: 350,
    weight: "600g",
    category: "Poultry",
    image: "/assets/POULTRY/chicken leg.png",
    description:
      "Juicy chicken leg quarters with thigh and drumstick attached. More flavorful and forgiving than breast meat. Perfect for roasting, grilling, or braising.",
    features: [
      "Thigh and drumstick",
      "More flavorful than breast",
      "Budget-friendly",
      "Great for families",
    ],
    storage:
      "Store at 0-4°C and use within 2 days. Can be frozen for up to 6 months.",
    preparation:
      "Season generously. Roast skin-side up at 200°C for 40-45 minutes until skin is crispy and internal temperature reaches 74°C.",
    nutritional:
      "Per 100g: Energy 215 kcal, Protein 26g, Fat 12g (Saturated 3g), Carbohydrates 0g. Rich in iron and zinc.",
  },

  // ===== SEAFOOD =====
  {
    id: "breaded-squid-rings",
    name: "Breaded Squid Rings",
    price: 680,
    weight: "500g",
    category: "Seafood",
    image: "/assets/SEAFOOD/breaded squid rings.png",
    description:
      "Premium squid rings coated in crispy breading. Pre-breaded and ready to fry for quick, delicious calamari. Perfect appetizer or snack.",
    features: [
      "Pre-breaded",
      "Ready to fry",
      "Restaurant quality",
      "Quick preparation",
    ],
    storage:
      "Keep frozen at -18°C. Do not refreeze once thawed. Use within 24 hours of thawing.",
    preparation:
      "Deep fry frozen at 180°C for 3-4 minutes until golden brown. Do not overcook. Serve immediately with lemon and aioli.",
    nutritional:
      "Per 100g: Energy 180 kcal, Protein 15g, Fat 8g (Saturated 1g), Carbohydrates 12g. Good source of protein and selenium.",
  },
  {
    id: "nori-salt-squid-spiral",
    name: "Nori Salt Squid Spiral",
    price: 750,
    weight: "500g",
    category: "Seafood",
    image: "/assets/SEAFOOD/nori salt squid spiral.png",
    description:
      "Unique squid spirals seasoned with nori and sea salt. Pre-seasoned and ready to cook. Offers a delicious umami flavor profile perfect for Asian-inspired dishes.",
    features: [
      "Nori and sea salt seasoned",
      "Unique spiral cut",
      "Ready to cook",
      "Japanese-inspired",
    ],
    storage:
      "Keep frozen at -18°C. Thaw in refrigerator before cooking. Use within 24 hours of thawing.",
    preparation:
      "Stir-fry in hot wok for 2-3 minutes. Do not overcook or squid will become tough. Perfect over rice or noodles.",
    nutritional:
      "Per 100g: Energy 95 kcal, Protein 18g, Fat 1.5g, Carbohydrates 3g. High protein, low fat.",
  },
  {
    id: "popcorn-shrimp",
    name: "Popcorn Shrimp",
    price: 850,
    weight: "500g",
    category: "Seafood",
    image: "/assets/SEAFOOD/popcorn shrimp.png",
    description:
      "Bite-sized breaded shrimp perfect for snacking or appetizers. Pre-breaded and ready to fry for quick, delicious results. Kids and adults love these!",
    features: [
      "Bite-sized pieces",
      "Pre-breaded",
      "Quick cooking",
      "Family favorite",
    ],
    storage:
      "Keep frozen at -18°C. Do not thaw before cooking. Use directly from freezer.",
    preparation:
      "Deep fry frozen at 180°C for 2-3 minutes until golden. Or bake at 200°C for 12-15 minutes, turning once. Serve with cocktail sauce.",
    nutritional:
      "Per 100g: Energy 200 kcal, Protein 16g, Fat 9g (Saturated 1.5g), Carbohydrates 15g. Good protein source.",
  },
  {
    id: "salt-pep-squid",
    name: "Salt & Pepper Squid",
    price: 720,
    weight: "500g",
    category: "Seafood",
    image: "/assets/SEAFOOD/salt and pep squid.png",
    description:
      "Classic salt and pepper squid, pre-seasoned and ready to cook. A popular Chinese restaurant favorite that's easy to make at home.",
    features: [
      "Pre-seasoned",
      "Restaurant favorite",
      "Quick cooking",
      "Crispy texture",
    ],
    storage:
      "Keep frozen at -18°C. Thaw in refrigerator 4-6 hours before cooking. Use within 24 hours.",
    preparation:
      "Deep fry at 180°C for 3-4 minutes until crispy and golden. Garnish with fresh chili and spring onions. Serve immediately.",
    nutritional:
      "Per 100g: Energy 100 kcal, Protein 17g, Fat 2g, Carbohydrates 4g. High protein, low fat.",
  },
  {
    id: "tempura-fish-fillet",
    name: "Tempura Fish Fillet",
    price: 650,
    weight: "500g",
    category: "Seafood",
    image: "/assets/SEAFOOD/tempura fish fillet.png",
    description:
      "Premium white fish fillets in light, crispy tempura batter. Pre-battered and ready to fry for restaurant-quality fish at home.",
    features: [
      "Light tempura batter",
      "White fish fillets",
      "Pre-battered",
      "Restaurant quality",
    ],
    storage:
      "Keep frozen at -18°C. Cook from frozen for best results. Do not refreeze once thawed.",
    preparation:
      "Deep fry frozen at 180°C for 5-6 minutes until golden and crispy. Or bake at 200°C for 15-18 minutes. Serve with tartar sauce or soy dipping sauce.",
    nutritional:
      "Per 100g: Energy 190 kcal, Protein 14g, Fat 8g (Saturated 1g), Carbohydrates 16g. Good source of omega-3.",
  },

  // ===== SAUSAGE =====
  {
    id: "cheesy-beef-chipotle",
    name: "Cheesy Beef Chipotle Sausage",
    price: 780,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/cheesy beef chipotle.png",
    description:
      "Bold beef sausage with melted cheese and smoky chipotle peppers. Perfect for grilling or pan-frying. A spicy, cheesy treat for sausage lovers.",
    features: [
      "Cheese-filled",
      "Smoky chipotle flavor",
      "Premium beef",
      "Perfect for BBQ",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 5 days. Can be frozen for up to 2 months.",
    preparation:
      "Pierce with fork. Grill over medium heat for 12-15 minutes, turning frequently. Or pan-fry until browned and cooked through.",
    nutritional:
      "Per 100g: Energy 320 kcal, Protein 15g, Fat 27g (Saturated 12g), Carbohydrates 4g. Rich and indulgent.",
  },
  {
    id: "cheesy-hungarian",
    name: "Cheesy Hungarian Sausage",
    price: 750,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/cheesy hungarian.png",
    description:
      "Traditional Hungarian-style sausage with melted cheese center. Paprika-spiced with a creamy cheese surprise in every bite.",
    features: [
      "Cheese-filled center",
      "Hungarian paprika spice",
      "Premium pork",
      "Natural casings",
    ],
    storage:
      "Store at 0-4°C and use within 5 days. Freeze for up to 2 months. Thaw in refrigerator.",
    preparation:
      "Grill or pan-fry over medium heat for 12-15 minutes. Turn frequently to ensure even cooking and melted cheese center.",
    nutritional:
      "Per 100g: Energy 310 kcal, Protein 16g, Fat 26g (Saturated 11g), Carbohydrates 3g. Good source of protein.",
  },
  {
    id: "choco-chili",
    name: "Chocolate Chili Sausage",
    price: 820,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/choco chili.png",
    description:
      "Adventurous gourmet sausage combining rich cocoa with spicy chili. A unique flavor profile inspired by Mexican mole. Perfect for adventurous eaters.",
    features: [
      "Unique chocolate-chili blend",
      "Gourmet specialty sausage",
      "Premium ingredients",
      "Conversation starter",
    ],
    storage:
      "Refrigerate at 0-4°C. Use within 5 days. Can be frozen for up to 2 months.",
    preparation:
      "Grill or pan-fry over medium heat. The chocolate adds depth without sweetness. Perfect with caramelized onions and artisan buns.",
    nutritional:
      "Per 100g: Energy 295 kcal, Protein 15g, Fat 24g (Saturated 9g), Carbohydrates 5g. Unique flavor profile.",
  },
  {
    id: "hungarian-sausage",
    name: "Hungarian Sausage",
    price: 680,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/hungarian.png",
    description:
      "Traditional Hungarian sausage seasoned with paprika and garlic. A classic European sausage perfect for grilling, adding to stews, or enjoying on its own.",
    features: [
      "Traditional recipe",
      "Paprika and garlic",
      "Natural casings",
      "Versatile use",
    ],
    storage:
      "Refrigerate at 0-4°C and use within 5 days. Freeze for up to 2 months.",
    preparation:
      "Pierce sausages. Grill over medium heat for 12-15 minutes or simmer in water for 10 minutes then brown. Serve with mustard and sauerkraut.",
    nutritional:
      "Per 100g: Energy 285 kcal, Protein 14g, Fat 24g (Saturated 9g), Carbohydrates 2g. Traditional flavor.",
  },
  {
    id: "snack-sausage",
    name: "Snack Sausage",
    price: 420,
    weight: "400g",
    category: "Sausage",
    image: "/assets/SAUSAGE/snack.png",
    description:
      "Bite-sized cocktail sausages perfect for snacking, parties, or kids' meals. Quick-cooking and always a crowd-pleaser.",
    features: [
      "Bite-sized portions",
      "Quick cooking",
      "Party favorite",
      "Kid-friendly",
    ],
    storage:
      "Refrigerate at 0-4°C. Use within 7 days. Can be frozen for up to 3 months.",
    preparation:
      "Pan-fry for 5-7 minutes until browned. Or simmer in sauce. Perfect for spaghetti, as appetizers, or kids' lunchboxes.",
    nutritional:
      "Per 100g: Energy 280 kcal, Protein 13g, Fat 24g (Saturated 9g), Carbohydrates 3g. Quick energy source.",
  },

  // ===== POTATO =====
  {
    id: "black-pepper-waves",
    name: "Black Pepper Waves",
    price: 280,
    weight: "500g",
    category: "Potato",
    image: "/assets/POTATO/black pepper waves.png",
    description:
      "Crispy wave-cut potato fries seasoned with black pepper. Pre-seasoned and frozen for convenience. Perfect side dish or snack with bold, peppery flavor.",
    features: [
      "Wave-cut for texture",
      "Black pepper seasoned",
      "Ready to cook",
      "Restaurant quality",
    ],
    storage:
      "Keep frozen at -18°C. Do not thaw before cooking. Store for up to 12 months.",
    preparation:
      "Deep fry frozen at 180°C for 3-4 minutes until golden. Or bake at 220°C for 18-20 minutes, turning once. Season extra if desired.",
    nutritional:
      "Per 100g: Energy 180 kcal, Protein 3g, Fat 8g (Saturated 1g), Carbohydrates 24g. Good source of potassium.",
  },
  {
    id: "crispy-french-fries",
    name: "Crispy French Fries",
    price: 250,
    weight: "1kg",
    category: "Potato",
    image: "/assets/POTATO/crispy french fries.png",
    description:
      "Classic crispy French fries. Perfectly cut and blanched, ready to fry to golden perfection. The essential side dish for any meal.",
    features: [
      "Classic straight cut",
      "Pre-blanched",
      "Stays crispy longer",
      "Family size pack",
    ],
    storage:
      "Keep frozen at -18°C until ready to cook. Do not refreeze once thawed.",
    preparation:
      "Deep fry frozen at 180°C for 3-4 minutes until golden brown and crispy. Season with salt immediately after frying.",
    nutritional:
      "Per 100g: Energy 160 kcal, Protein 3g, Fat 5g (Saturated 0.5g), Carbohydrates 26g. Classic comfort food.",
  },
  {
    id: "jul-french-fries",
    name: "Julienne French Fries",
    price: 260,
    weight: "1kg",
    category: "Potato",
    image: "/assets/POTATO/jul french fries.png",
    description:
      "Extra thin julienne-cut French fries for maximum crispiness. These ultra-thin fries cook quickly and deliver exceptional crunch in every bite.",
    features: [
      "Extra thin cut",
      "Extra crispy",
      "Quick cooking",
      "Restaurant style",
    ],
    storage:
      "Store frozen at -18°C. Keep frozen until cooking. Use within 12 months for best quality.",
    preparation:
      "Deep fry frozen at 180°C for 2-3 minutes until golden. These thin fries cook fast, so watch carefully. Season immediately.",
    nutritional:
      "Per 100g: Energy 165 kcal, Protein 3g, Fat 6g (Saturated 0.5g), Carbohydrates 26g. Light and crispy.",
  },
  {
    id: "oven-croq",
    name: "Oven Croquettes",
    price: 320,
    weight: "500g",
    category: "Potato",
    image: "/assets/POTATO/oven croq.png",
    description:
      "Crispy potato croquettes with creamy interior. Pre-formed and breaded, ready to bake or fry. Perfect side dish or appetizer with elegant presentation.",
    features: [
      "Pre-formed croquettes",
      "Creamy center",
      "Oven-ready",
      "Party perfect",
    ],
    storage:
      "Keep frozen at -18°C. Can be cooked from frozen. Store up to 12 months.",
    preparation:
      "Bake from frozen at 200°C for 15-18 minutes, turning halfway. Or deep fry at 180°C for 4-5 minutes until golden brown.",
    nutritional:
      "Per 100g: Energy 195 kcal, Protein 4g, Fat 9g (Saturated 1.5g), Carbohydrates 24g. Indulgent side dish.",
  },
  {
    id: "pot-pockets-cream",
    name: "Potato Pockets with Cream",
    price: 350,
    weight: "500g",
    category: "Potato",
    image: "/assets/POTATO/pot pockets w cream.png",
    description:
      "Crispy potato pockets filled with creamy sauce. A delicious appetizer or side dish with a surprise center. Kids and adults love these!",
    features: [
      "Cream-filled",
      "Crispy coating",
      "Ready to cook",
      "Unique format",
    ],
    storage:
      "Keep frozen at -18°C. Cook from frozen. Do not refreeze once thawed.",
    preparation:
      "Deep fry frozen at 180°C for 4-5 minutes until golden and hot throughout. Or bake at 200°C for 18-20 minutes.",
    nutritional:
      "Per 100g: Energy 210 kcal, Protein 4g, Fat 11g (Saturated 2g), Carbohydrates 24g. Creamy and indulgent.",
  },
  {
    id: "pot-pockets-spinach",
    name: "Potato Pockets with Spinach",
    price: 360,
    weight: "500g",
    category: "Potato",
    image: "/assets/POTATO/pot pockets w spinch.png",
    description:
      "Crispy potato pockets filled with savory spinach filling. A healthier option that doesn't compromise on taste. Great for vegetable lovers.",
    features: [
      "Spinach filling",
      "Crispy exterior",
      "Healthier option",
      "Restaurant quality",
    ],
    storage:
      "Store frozen at -18°C. Cook directly from frozen for best results.",
    preparation:
      "Deep fry at 180°C for 4-5 minutes or bake at 200°C for 18-20 minutes. Serve hot with your favorite dipping sauce.",
    nutritional:
      "Per 100g: Energy 190 kcal, Protein 4g, Fat 9g (Saturated 1.5g), Carbohydrates 23g. Added vegetable nutrition.",
  },
  {
    id: "potato-dippers",
    name: "Potato Dippers",
    price: 290,
    weight: "500g",
    category: "Potato",
    image: "/assets/POTATO/potato dippers.png",
    description:
      "Fun wedge-shaped potato dippers with crispy coating. Perfect for dipping in sauces. A family-friendly snack or side dish.",
    features: [
      "Wedge shape",
      "Great for dipping",
      "Crispy coating",
      "Kid-friendly",
    ],
    storage:
      "Keep frozen at -18°C. Store up to 12 months. Cook from frozen.",
    preparation:
      "Bake from frozen at 220°C for 18-20 minutes or deep fry at 180°C for 3-4 minutes. Serve with ketchup, aioli, or cheese sauce.",
    nutritional:
      "Per 100g: Energy 185 kcal, Protein 3g, Fat 8g (Saturated 1g), Carbohydrates 25g. Fun and tasty.",
  },
  {
    id: "steak-cut",
    name: "Steak Cut Fries",
    price: 270,
    weight: "1kg",
    category: "Potato",
    image: "/assets/POTATO/steak cut.png",
    description:
      "Thick-cut steak fries with soft interior and crispy exterior. Perfect alongside steaks and grilled meats. The hearty cut that satisfies.",
    features: [
      "Thick steak cut",
      "Fluffy interior",
      "Perfect with steak",
      "Hearty portions",
    ],
    storage:
      "Keep frozen at -18°C until ready to cook. Do not thaw before cooking.",
    preparation:
      "Deep fry frozen at 180°C for 4-5 minutes until golden. Or bake at 220°C for 20-25 minutes. Season generously with salt.",
    nutritional:
      "Per 100g: Energy 170 kcal, Protein 3g, Fat 6g (Saturated 0.5g), Carbohydrates 27g. Hearty and filling.",
  },

  // ===== SAUCES =====
  {
    id: "aceto-classic",
    name: "Aceto Classic Balsamic",
    price: 380,
    weight: "250ml",
    category: "Sauces",
    image: "/assets/SAUCES/ACETO CLASSIC (1).png",
    description:
      "Premium balsamic vinegar with rich, complex flavor. Perfect for salads, marinades, or drizzling over grilled meats. A kitchen essential for any chef.",
    features: [
      "Classic balsamic",
      "Rich, sweet-tart flavor",
      "Versatile use",
      "Premium quality",
    ],
    storage:
      "Store in cool, dark place. No refrigeration needed. Use within 2 years of opening for best quality.",
    preparation:
      "Drizzle over salads, grilled vegetables, or meats. Use in marinades. Reduce to create glaze. Pairs perfectly with olive oil.",
    nutritional:
      "Per 15ml: Energy 15 kcal, Protein 0g, Fat 0g, Carbohydrates 3g, Sodium 5mg. Low calorie flavor enhancer.",
  },
  {
    id: "smoked-honey-bbq",
    name: "Smoked Honey BBQ Sauce",
    price: 420,
    weight: "350ml",
    category: "Sauces",
    image: "/assets/SAUCES/smoked honey bbq.png",
    description:
      "Rich BBQ sauce with smoky flavor and sweet honey notes. Perfect for grilling, glazing, or dipping. The ultimate BBQ companion.",
    features: [
      "Smoky and sweet",
      "Honey-based",
      "Perfect for grilling",
      "All-natural ingredients",
    ],
    storage:
      "Refrigerate after opening. Use within 6 months. Shake well before use.",
    preparation:
      "Brush on meats during grilling. Use as dipping sauce. Mix into pulled pork or chicken. Perfect for ribs, wings, and burgers.",
    nutritional:
      "Per 30ml: Energy 60 kcal, Protein 0g, Fat 0.5g, Carbohydrates 14g, Sodium 280mg. Sweet and savory.",
  },

  // ===== SPICES =====
  {
    id: "chili-flakes",
    name: "Premium Chili Flakes",
    price: 180,
    weight: "50g",
    category: "Spices",
    image: "/assets/SPICES/chili flakes.png",
    description:
      "Premium dried chili flakes with perfect heat level. Add a spicy kick to any dish. Essential for Italian cuisine, pizzas, and Asian cooking.",
    features: [
      "Premium quality",
      "Perfect heat level",
      "Versatile seasoning",
      "Long-lasting flavor",
    ],
    storage:
      "Store in airtight container in cool, dark place. Keeps for up to 2 years. Avoid moisture.",
    preparation:
      "Sprinkle on pizzas, pasta, stir-fries, or any dish needing heat. Add to marinades and rubs. Use sparingly - a little goes a long way.",
    nutritional:
      "Per 1g: Energy 3 kcal, Protein 0.1g, Fat 0.2g, Carbohydrates 0.5g. Adds flavor and metabolism boost.",
  },
  {
    id: "italia-style",
    name: "Italian Style Herb Blend",
    price: 220,
    weight: "40g",
    category: "Spices",
    image: "/assets/SPICES/italia style.png",
    description:
      "Authentic Italian herb blend with oregano, basil, rosemary, and thyme. Brings the taste of Italy to your kitchen. Perfect for pasta, pizza, and grilled meats.",
    features: [
      "Authentic Italian blend",
      "Premium dried herbs",
      "Versatile seasoning",
      "No artificial flavors",
    ],
    storage:
      "Store in airtight container away from light and heat. Use within 1 year for best flavor.",
    preparation:
      "Use in pasta sauces, on pizzas, with grilled meats, or in marinades. Perfect for Italian and Mediterranean dishes. Add to olive oil for dipping.",
    nutritional:
      "Per 1g: Energy 3 kcal, Protein 0.1g, Fat 0.1g, Carbohydrates 0.6g. Adds authentic flavor without calories.",
  },
  {
    id: "wild-herbs",
    name: "Wild Herbs Blend",
    price: 240,
    weight: "40g",
    category: "Spices",
    image: "/assets/SPICES/wild herbs.png",
    description:
      "Artisanal blend of wild herbs including thyme, sage, and marjoram. Brings rustic, earthy flavors to your cooking. Perfect for roasted meats and vegetables.",
    features: [
      "Wild herb blend",
      "Earthy, rustic flavor",
      "Artisanal quality",
      "No preservatives",
    ],
    storage:
      "Keep in sealed container in cool, dry place. Best used within 1 year of opening.",
    preparation:
      "Rub on roasted meats, especially lamb and pork. Add to roasted vegetables. Mix into butter for compound butter. Perfect with Mediterranean cuisine.",
    nutritional:
      "Per 1g: Energy 3 kcal, Protein 0.1g, Fat 0.1g, Carbohydrates 0.5g. Natural flavor enhancer.",
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
  return Array.from(categories).sort()
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
