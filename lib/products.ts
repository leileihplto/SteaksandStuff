// Real product data from S&S November 2025 Pricelist
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
  // ===== U.S BEEF =====
  {
    id: "us-wagyu-striploin-gold-grade",
    name: "U.S. Wagyu Striploin, Gold Grade",
    price: 1850,
    weight: "300g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/SRF gold wagyu striploin.png",
    description: "Snake River Farms Gold Grade Wagyu striploin featuring exceptional marbling and rich, buttery flavor. American Wagyu excellence perfect for special occasions.",
    features: ["SRF Gold Grade", "American Wagyu", "Exceptional marbling", "300g portion"],
    storage: "Keep frozen at -18°C. Thaw in refrigerator 24 hours before cooking.",
    preparation: "Bring to room temperature 30 minutes before cooking. Season with salt. Sear 3-4 minutes per side for medium-rare.",
    nutritional: "Per 100g: Energy 350 kcal, Protein 23g, Fat 28g. High in monounsaturated fats."
  },
  {
    id: "us-ribeye-boneless-cab-prime-grade",
    name: "U.S. Ribeye Boneless, CAB Prime Grade",
    price: 1260,
    weight: "350g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/Prime Ribeye boneless.png",
    description: "Certified Angus Beef Prime ribeye with premium marbling. Tender, flavorful, and perfect for grilling or pan-searing.",
    features: ["CAB Prime Grade", "Premium marbling", "Boneless", "350g cut"],
    storage: "Refrigerate at 0-4°C, use within 3 days. Freeze for up to 6 months.",
    preparation: "Season generously. Sear in hot pan 4-5 minutes per side for medium-rare. Rest 5 minutes.",
    nutritional: "Per 100g: Energy 270 kcal, Protein 25g, Fat 19g."
  },
  {
    id: "us-ribeye-bone-in-prime-grade",
    name: "U.S. Ribeye Bone In, Prime Grade",
    price: 1100,
    weight: "350g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/prime ribeye boneless (2).png",
    description: "USDA Prime ribeye with bone for enhanced flavor. Excellent marbling ensures juicy, tender results every time.",
    features: ["USDA Prime", "Bone-in for flavor", "Excellent marbling", "350g portion"],
    storage: "Store at 0-4°C, use within 3 days. Can be frozen for up to 6 months.",
    preparation: "Bring to room temperature. Grill or pan-sear 4-5 minutes per side. Let rest before serving.",
    nutritional: "Per 100g: Energy 260 kcal, Protein 26g, Fat 18g."
  },
  {
    id: "us-beef-shortribs-boneless-yakiniku",
    name: "U.S. Beef Shortribs Boneless (Yakiniku Cut)",
    price: 3000,
    weight: "1kg",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/high choice shortribs boneless (yaki cut).png",
    description: "High Choice boneless short ribs sliced for Japanese yakiniku style. Perfect for hot pot, BBQ, or quick grilling.",
    features: ["Yakiniku cut", "Boneless", "Quick cooking", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 2 days. Freeze for up to 4 months.",
    preparation: "Marinate briefly. Grill over high heat 1-2 minutes per side. Perfect for yakiniku or shabu-shabu.",
    nutritional: "Per 100g: Energy 265 kcal, Protein 25g, Fat 18g."
  },
  {
    id: "us-beef-ribeye-tomahawk",
    name: "U.S. Beef Ribeye Bone In Tomahawk",
    price: 2500,
    weight: "1.2-1.3kg",
    category: "U.S Beef",
    image: "/assets/BEEF/aus mb6-7 ribeye tomahawk.png",
    description: "Spectacular tomahawk ribeye with long bone for dramatic presentation. A showstopper perfect for special celebrations.",
    features: ["Tomahawk cut", "Long bone presentation", "1.2-1.3kg", "Special occasion cut"],
    storage: "Keep frozen at -18°C. Thaw in refrigerator 24-36 hours before cooking.",
    preparation: "Sear all sides in hot pan, then roast at 200°C for 15-20 minutes for medium-rare. Rest 10 minutes.",
    nutritional: "Per 100g: Energy 280 kcal, Protein 24g, Fat 20g."
  },
  {
    id: "us-beef-flat-iron-steak",
    name: "U.S. Beef Flat Iron Steak",
    price: 1100,
    weight: "1kg",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/high choice flat iron steak.png",
    description: "High Choice flat iron steak - incredibly tender and flavorful. Second most tender cut at excellent value.",
    features: ["High Choice grade", "Extremely tender", "Great value", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 3 days. Freeze for up to 6 months.",
    preparation: "Season well. Grill or pan-sear 3-4 minutes per side for medium-rare. Slice against the grain.",
    nutritional: "Per 100g: Energy 220 kcal, Protein 28g, Fat 12g."
  },
  {
    id: "us-beef-shortribs-galbi",
    name: "U.S. Beef Shortribs (Galbi Cut)",
    price: 1850,
    weight: "1kg",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/high choice shortribs bone in (galbi cut).png",
    description: "High Choice short ribs cut in traditional Korean Galbi style. Perfect for Korean BBQ with quick-cooking format.",
    features: ["Galbi cut", "Korean BBQ style", "High Choice", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 2 days. Freeze for up to 4 months.",
    preparation: "Marinate 2-24 hours in Korean BBQ marinade. Grill over high heat 2-3 minutes per side.",
    nutritional: "Per 100g: Energy 270 kcal, Protein 24g, Fat 19g."
  },
  {
    id: "us-beef-ground-cab",
    name: "U.S. Beef Ground Chub, CAB",
    price: 520,
    weight: "525-575g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/cab burger patties.png",
    description: "Certified Angus Beef ground chuck - perfect for burgers, meat sauce, or any recipe requiring quality ground beef.",
    features: ["CAB certified", "81% lean", "Versatile use", "525-575g pack"],
    storage: "Refrigerate at 0-4°C, use within 2 days. Freeze for up to 3 months.",
    preparation: "Form into patties or use as ground. Cook thoroughly to internal temp of 71°C.",
    nutritional: "Per 100g: Energy 250 kcal, Protein 20g, Fat 19g."
  },
  {
    id: "us-wagyu-beef-sausage",
    name: "U.S. Wagyu Beef Sausage (Frankfurters)",
    price: 750,
    weight: "454g",
    category: "U.S Beef",
    image: "/assets/U.S BEEF/SRF wagyu franks (sausage).png",
    description: "Premium hot dogs made from Snake River Farms Wagyu beef. Elevate your BBQ with these gourmet franks.",
    features: ["SRF Wagyu", "Gourmet frankfurters", "Natural casings", "454g pack"],
    storage: "Refrigerate at 0-4°C, use within 5 days. Freeze for up to 2 months.",
    preparation: "Grill over medium heat 8-10 minutes, turning frequently. Or pan-fry until browned.",
    nutritional: "Per 100g: Energy 320 kcal, Protein 14g, Fat 28g."
  },

  // ===== BEEF =====
  {
    id: "f1-wagyu-tenderloin",
    name: "F1 Japanese Wagyu Tenderloin",
    price: 2500,
    weight: "500g (2x250g)",
    category: "Beef",
    image: "/assets/BEEF/f1 japanese wagyu tenderloin.png",
    description: "Exquisite F1 Japanese Wagyu tenderloin - the pinnacle of beef excellence. Extraordinary marbling creates melt-in-your-mouth texture.",
    features: ["F1 Japanese Wagyu", "Most tender cut", "Exceptional marbling", "2 x 250g portions"],
    storage: "Keep frozen at -18°C. Thaw slowly in refrigerator for 24 hours.",
    preparation: "Bring to room temperature. Season lightly with salt. Sear 2-3 minutes per side for rare to medium-rare.",
    nutritional: "Per 100g: Energy 380 kcal, Protein 21g, Fat 32g."
  },
  {
    id: "canadian-ribeye-bone-in",
    name: "Canadian Ribeye Bone In, Prime Grade",
    price: 1050,
    weight: "400g",
    category: "Beef",
    image: "/assets/BEEF/canadian prime ribeye bone in.png",
    description: "Premium Canadian Prime ribeye with bone for enhanced flavor. Exceptional marbling and tender texture.",
    features: ["Canadian Prime", "Bone-in", "Excellent marbling", "400g portion"],
    storage: "Refrigerate at 0-4°C, use within 3 days. Freeze for up to 6 months.",
    preparation: "Season simply. Grill or pan-sear 4-5 minutes per side for medium-rare. Rest 5 minutes.",
    nutritional: "Per 100g: Energy 260 kcal, Protein 26g, Fat 18g."
  },
  {
    id: "australian-striploin-mb2",
    name: "Australian Beef Striploin, MB2",
    price: 800,
    weight: "500g (2x250g)",
    category: "Beef",
    image: "/assets/BEEF/aus mb2 striploin.png",
    description: "Australian grass-fed striploin with MB2 marbling grade. Robust beef flavor and tender texture perfect for grilling.",
    features: ["Australian grass-fed", "MB2 marbling", "2 x 250g portions", "Great value"],
    storage: "Refrigerate at 0-4°C, use within 3 days. Freeze for up to 6 months.",
    preparation: "Bring to room temperature. Season well. Sear 3-4 minutes per side for medium-rare.",
    nutritional: "Per 100g: Energy 240 kcal, Protein 26g, Fat 15g."
  },
  {
    id: "beef-shortribs-kaldereta",
    name: "Beef Shortribs Bone In (Kaldereta Cut)",
    price: 950,
    weight: "1kg",
    category: "Beef",
    image: "/assets/BEEF/aus shortribs bone in.png",
    description: "Rich, flavorful short ribs cut perfect for Filipino kaldereta or slow-cooking. Bone-in for maximum flavor.",
    features: ["Kaldereta cut", "Bone-in", "Perfect for stews", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 3 days. Freeze for up to 6 months.",
    preparation: "Sear all sides. Braise in sauce at 160°C for 3-4 hours until fork-tender.",
    nutritional: "Per 100g: Energy 280 kcal, Protein 25g, Fat 20g."
  },

  // ===== U.S PORK =====
  {
    id: "us-kurobuta-rack-ribs",
    name: "U.S Kurobuta Rack of Ribs (Sliced)",
    price: 1600,
    weight: "1kg",
    category: "U.S Pork",
    image: "/assets/U.S PORK/srf kuro sinigang rib.png",
    description: "Premium Kurobuta pork ribs - the 'Wagyu of pork'. Exceptional marbling creates incredibly juicy, tender ribs.",
    features: ["Kurobuta heritage", "Exceptional marbling", "Cut per bone", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 2 days. Freeze for up to 3 months.",
    preparation: "Slow cook or braise for 2-3 hours. Perfect for sinigang or BBQ. Marbling keeps meat tender.",
    nutritional: "Per 100g: Energy 290 kcal, Protein 22g, Fat 22g."
  },
  {
    id: "us-pork-chop",
    name: "U.S. Pork Chop (1/2 IN)",
    price: 475,
    weight: "1kg",
    category: "U.S Pork",
    image: "/assets/U.S PORK/pork chop.png",
    description: "Premium U.S. pork chops cut to 1/2 inch thickness. Perfect for grilling, pan-frying, or baking.",
    features: ["1/2 inch thick", "Bone-in", "U.S. pork", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 3 days. Freeze for up to 3 months.",
    preparation: "Season well. Grill or pan-sear 4-5 minutes per side until internal temp reaches 63°C.",
    nutritional: "Per 100g: Energy 235 kcal, Protein 25g, Fat 14g."
  },

  // ===== PORK =====
  {
    id: "pork-bacon-endcuts",
    name: "Pork Bacon Endcuts",
    price: 500,
    weight: "2kg",
    category: "Pork",
    image: "/assets/PORK/pork bacon endcuts.png",
    description: "Premium bacon endcuts - perfect for cooking and adding smoky flavor. Great value for recipes requiring diced bacon.",
    features: ["Bacon endcuts", "Great for cooking", "Excellent value", "2kg pack"],
    storage: "Refrigerate at 0-4°C, use within 7 days. Freeze for up to 3 months.",
    preparation: "Dice or chop as needed. Pan-fry until crispy. Perfect for carbonara, soups, or breakfast.",
    nutritional: "Per 100g: Energy 540 kcal, Protein 37g, Fat 42g."
  },
  {
    id: "pork-belly-liempo",
    name: "Pork Belly Boneless (Liempo Cut)",
    price: 450,
    weight: "1kg",
    category: "Pork",
    image: "/assets/PORK/pork belly boneless.png",
    description: "Boneless pork belly sliced for Filipino inihaw/liempo. Perfect for grilling or roasting with beautiful layers of meat and fat.",
    features: ["Liempo/Inihaw cut", "Boneless", "Skin-on", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 3 days. Freeze for up to 3 months.",
    preparation: "Marinate as desired. Grill over medium heat until crispy and cooked through. Or roast until skin is crispy.",
    nutritional: "Per 100g: Energy 518 kcal, Protein 9g, Fat 53g."
  },
  {
    id: "pork-belly-sinigang",
    name: "Pork Belly (Sinigang/Nilaga Cut)",
    price: 500,
    weight: "1kg",
    category: "Pork",
    image: "/assets/PORK/pork belly bone in.png",
    description: "Pork belly cut specifically for Filipino sinigang and nilaga. Ideal meat-to-fat ratio for flavorful soups and stews.",
    features: ["Sinigang/Nilaga cut", "Skin-on", "Perfect for soups", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 3 days. Freeze for up to 3 months.",
    preparation: "Boil until tender, then add to sinigang or nilaga broth. Simmer with vegetables until flavors meld.",
    nutritional: "Per 100g: Energy 520 kcal, Protein 9g, Fat 53g."
  },
  {
    id: "pork-boneless-cubes",
    name: "Pork Boneless Cubes",
    price: 500,
    weight: "1kg",
    category: "Pork",
    image: "/assets/PORK/pork belly boneless.png",
    description: "Pre-cubed boneless pork for convenient cooking. Perfect for adobo, menudo, or any dish requiring cubed pork.",
    features: ["Pre-cubed", "Boneless", "Ready to cook", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 2 days. Freeze for up to 3 months.",
    preparation: "Ready to use. Perfect for adobo, sinigang, menudo, or stir-fries. Cook as recipe requires.",
    nutritional: "Per 100g: Energy 240 kcal, Protein 26g, Fat 14g."
  },

  // ===== LAMB =====
  {
    id: "us-lamb-riblets",
    name: "U.S. Lamb Riblets",
    price: 1000,
    weight: "1kg",
    category: "Lamb",
    image: "/assets/LAMB/u.s lamb riblets.png",
    description: "Tender U.S. lamb riblets perfect for slow-cooking or braising. Rich, savory flavor ideal for stews and Mediterranean dishes.",
    features: ["U.S. lamb", "Perfect for slow cooking", "Rich flavor", "1kg pack"],
    storage: "Refrigerate at 0-4°C, use within 3 days. Freeze for up to 6 months.",
    preparation: "Season generously. Braise at 160°C for 2-3 hours or slow cook 4-6 hours on low.",
    nutritional: "Per 100g: Energy 290 kcal, Protein 24g, Fat 21g."
  },
  {
    id: "nz-lamb-chops",
    name: "New Zealand Lamb Chops",
    price: 1450, // You can adjust this price
    weight: "500g",
    category: "Lamb",
    image: "/assets/LAMB/new Z lamb chops.png",
    description: "Premium New Zealand lamb chops known for their tender texture and delicate flavor. Grass-fed and all-natural.",
    features: ["New Zealand sourced", "Grass-fed", "Tender loin chops", "500g pack"],
    storage: "Keep frozen at -18°C. Thaw in refrigerator overnight.",
    preparation: "Season with rosemary and garlic. Sear in a hot pan for 3-4 minutes per side for medium-rare.",
    nutritional: "Per 100g: Energy 250 kcal, Protein 25g, Fat 17g."
  },

  // ===== POULTRY =====
  {
    id: "chicken-leg-boneless",
    name: "Chicken Leg (Boneless, Skin on)",
    price: 500,
    weight: "2kg",
    category: "Poultry",
    image: "/assets/POULTRY/chicken leg.png",
    description: "Juicy boneless chicken legs with skin on. More flavorful than breast meat and stays moist during cooking.",
    features: ["Boneless", "Skin-on", "Juicier than breast", "2kg pack"],
    storage: "Refrigerate at 0-4°C, use within 2 days. Freeze for up to 6 months.",
    preparation: "Season generously. Roast or grill skin-side up until internal temp reaches 74°C and skin is crispy.",
    nutritional: "Per 100g: Energy 215 kcal, Protein 26g, Fat 12g."
  },
  {
    id: "chicken-breast",
    name: "Chicken Breast",
    price: 600,
    weight: "2kg",
    category: "Poultry",
    image: "/assets/POULTRY/chick breast boneless.png",
    description: "Premium chicken breast - lean, tender, and versatile. Perfect for healthy meals, grilling, or stir-frying.",
    features: ["Boneless", "Skinless", "High protein, low fat", "2kg pack"],
    storage: "Refrigerate at 0-4°C, use within 2 days. Freeze for up to 6 months.",
    preparation: "Pound to even thickness. Grill 6-8 minutes per side or bake at 180°C for 20-25 minutes to 74°C.",
    nutritional: "Per 100g: Energy 165 kcal, Protein 31g, Fat 3.6g."
  },

  // ===== POTATO =====
  {
    id: "crispy-french-fries",
    name: "Crispy French Fries",
    price: 150,
    weight: "600g",
    category: "Potato",
    image: "/assets/POTATO/crispy french fries.png",
    description: "Classic crispy coated French fries. Pre-coated and ready to fry for restaurant-quality results at home.",
    features: ["Crispy coating", "Ready to fry", "Restaurant quality", "600g pack"],
    storage: "Keep frozen at -18°C. Do not thaw before cooking.",
    preparation: "Deep fry frozen at 180°C for 3-4 minutes until golden. Season with salt immediately.",
    nutritional: "Per 100g: Energy 180 kcal, Protein 3g, Fat 8g, Carbohydrates 24g."
  },
  {
    id: "black-pepperwaves",
    name: "Black Pepperwaves",
    price: 180,
    weight: "600g",
    category: "Potato",
    image: "/assets/POTATO/black pepper waves.png",
    description: "Wave-cut potato fries seasoned with black pepper. Unique texture and bold flavor for adventurous snackers.",
    features: ["Wave-cut", "Black pepper seasoned", "Unique texture", "600g pack"],
    storage: "Keep frozen at -18°C until cooking.",
    preparation: "Deep fry frozen at 180°C for 3-4 minutes or bake at 220°C for 18-20 minutes.",
    nutritional: "Per 100g: Energy 180 kcal, Protein 3g, Fat 8g, Carbohydrates 24g."
  },
  {
    id: "potato-dippers",
    name: "Potato Dippers",
    price: 150,
    weight: "600g",
    category: "Potato",
    image: "/assets/POTATO/potato dippers.png",
    description: "Fun wedge-shaped potato dippers perfect for dipping in sauces. Family-friendly snack or side dish.",
    features: ["Wedge shape", "Perfect for dipping", "Crispy coating", "600g pack"],
    storage: "Keep frozen at -18°C. Cook from frozen.",
    preparation: "Bake at 220°C for 18-20 minutes or deep fry at 180°C for 3-4 minutes.",
    nutritional: "Per 100g: Energy 185 kcal, Protein 3g, Fat 8g, Carbohydrates 25g."
  },
  {
    id: "oven-croquettes",
    name: "Oven Croquettes",
    price: 120,
    weight: "600g",
    category: "Potato",
    image: "/assets/POTATO/oven croq.png",
    description: "Crispy potato croquettes with creamy interior. Pre-formed and breaded, oven-ready for easy preparation.",
    features: ["Pre-formed", "Creamy center", "Oven-ready", "600g pack"],
    storage: "Keep frozen at -18°C. Cook from frozen.",
    preparation: "Bake from frozen at 200°C for 15-18 minutes or deep fry 4-5 minutes.",
    nutritional: "Per 100g: Energy 195 kcal, Protein 4g, Fat 9g, Carbohydrates 24g."
  },
  {
    id: "potato-pockets-cream",
    name: "Potato Pockets with Cream Cheese and Herbs",
    price: 275,
    weight: "600g",
    category: "Potato",
    image: "/assets/POTATO/pot pockets w cream.png",
    description: "Crispy potato pockets filled with creamy cheese and herbs. A delicious appetizer with a surprise center.",
    features: ["Cream cheese filling", "Crispy coating", "Ready to cook", "600g pack"],
    storage: "Keep frozen at -18°C. Do not thaw.",
    preparation: "Deep fry frozen at 180°C for 4-5 minutes or bake at 200°C for 18-20 minutes.",
    nutritional: "Per 100g: Energy 210 kcal, Protein 4g, Fat 11g, Carbohydrates 24g."
  },
  {
    id: "potato-pockets-spinach",
    name: "Potato Pockets with Spinach and Mozzarella",
    price: 275,
    weight: "600g",
    category: "Potato",
    image: "/assets/POTATO/pot pockets w spinch.png",
    description: "Crispy potato pockets with savory spinach and mozzarella filling. A healthier option that doesn't compromise on taste.",
    features: ["Spinach & mozzarella", "Crispy exterior", "Healthier choice", "600g pack"],
    storage: "Store frozen at -18°C. Cook from frozen.",
    preparation: "Deep fry at 180°C for 4-5 minutes or bake at 200°C for 18-20 minutes.",
    nutritional: "Per 100g: Energy 190 kcal, Protein 4g, Fat 9g, Carbohydrates 23g."
  },
  {
    id: "steakcut-fries",
    name: "Steakcut Fries Uncoated",
    price: 350,
    weight: "2.5kg",
    category: "Potato",
    image: "/assets/POTATO/steak cut.png",
    description: "Thick-cut steak fries with fluffy interior and crispy exterior. Perfect alongside steaks and grilled meats.",
    features: ["Thick steak cut", "Fluffy interior", "Family size", "2.5kg pack"],
    storage: "Keep frozen at -18°C until cooking.",
    preparation: "Deep fry frozen at 180°C for 4-5 minutes or bake at 220°C for 20-25 minutes.",
    nutritional: "Per 100g: Energy 170 kcal, Protein 3g, Fat 6g, Carbohydrates 27g."
  },
  {
    id: "julienne-fries",
    name: "Julienne French Fries (1kg)",
    price: 150,
    weight: "1kg",
    category: "Potato",
    image: "/assets/POTATO/jul french fries.png",
    description: "Extra thin julienne-cut fries for maximum crispiness. Quick-cooking and delivers exceptional crunch.",
    features: ["Extra thin cut", "Extra crispy", "Quick cooking", "1kg pack"],
    storage: "Store frozen at -18°C. Keep frozen until cooking.",
    preparation: "Deep fry frozen at 180°C for 2-3 minutes. Watch carefully as these cook fast.",
    nutritional: "Per 100g: Energy 165 kcal, Protein 3g, Fat 6g, Carbohydrates 26g."
  },

  // ===== SPICES =====
  {
    id: "chili-flakes",
    name: "Chili Flakes",
    price: 200,
    weight: "40g",
    category: "Spices",
    image: "/assets/SPICES/chili flakes.png",
    description: "Premium dried chili flakes with perfect heat level. Essential for Italian cuisine, pizzas, and adding spice to any dish.",
    features: ["Premium quality", "Perfect heat", "Versatile", "40g jar"],
    storage: "Store in airtight container in cool, dark place. Keeps for up to 2 years.",
    preparation: "Sprinkle on pizzas, pasta, or any dish needing heat. Use sparingly - a little goes a long way.",
    nutritional: "Per 1g: Energy 3 kcal. Adds flavor and metabolism boost."
  },
  {
    id: "italia-style",
    name: "Italia Style",
    price: 200,
    weight: "43g",
    category: "Spices",
    image: "/assets/SPICES/italia style.png",
    description: "Authentic Italian herb blend with oregano, basil, rosemary. Brings the taste of Italy to your kitchen.",
    features: ["Italian herb blend", "Premium dried herbs", "No artificial flavors", "43g jar"],
    storage: "Store in airtight container away from light and heat. Use within 1 year.",
    preparation: "Use in pasta sauces, on pizzas, with grilled meats. Add to olive oil for dipping bread.",
    nutritional: "Per 1g: Energy 3 kcal. Adds authentic flavor without calories."
  },
  {
    id: "wild-herbs",
    name: "Wild Herbs",
    price: 200,
    weight: "60g",
    category: "Spices",
    image: "/assets/SPICES/wild herbs.png",
    description: "Artisanal blend of wild herbs including thyme, sage, and marjoram. Brings rustic, earthy flavors to cooking.",
    features: ["Wild herb blend", "Earthy, rustic flavor", "Artisanal quality", "60g jar"],
    storage: "Keep in sealed container in cool, dry place. Best within 1 year of opening.",
    preparation: "Rub on roasted meats, especially lamb and pork. Perfect with Mediterranean cuisine.",
    nutritional: "Per 1g: Energy 3 kcal. Natural flavor enhancer."
  },

  // ===== SAUCES =====
  {
    id: "aceto-classic",
    name: "Aceto Classic",
    price: 600,
    weight: "610g",
    category: "Sauces",
    image: "/assets/SAUCES/ACETO CLASSIC (1).png",
    description: "Premium balsamic vinegar with rich, complex flavor. Perfect for salads, marinades, or drizzling over meats.",
    features: ["Classic balsamic", "Rich, sweet-tart", "Versatile", "610g bottle"],
    storage: "Store in cool, dark place. No refrigeration needed. Use within 2 years.",
    preparation: "Drizzle over salads, grilled vegetables, or meats. Reduce to create glaze.",
    nutritional: "Per 15ml: Energy 15 kcal, Carbohydrates 3g. Low calorie flavor enhancer."
  },
  {
    id: "smoked-bbq-honey",
    name: "Smoked BBQ Honey Sauce",
    price: 600,
    weight: "750g",
    category: "Sauces",
    image: "/assets/SAUCES/smoked honey bbq.png",
    description: "Rich BBQ sauce with smoky flavor and sweet honey notes. The ultimate BBQ companion for grilling.",
    features: ["Smoky and sweet", "Honey-based", "All-natural", "750g bottle"],
    storage: "Refrigerate after opening. Use within 6 months. Shake well before use.",
    preparation: "Brush on meats during grilling. Perfect for ribs, wings, burgers. Use as dipping sauce.",
    nutritional: "Per 30ml: Energy 60 kcal, Carbohydrates 14g, Sodium 280mg."
  },

  // ===== SEAFOOD =====
  {
    id: "tempura-fish-fillet",
    name: "Tempura Fish Fillet",
    price: 180,
    weight: "325g",
    category: "Seafood",
    image: "/assets/SEAFOOD/tempura fish fillet.png",
    description: "Premium white fish in light, crispy tempura batter. Pre-battered and ready to fry for restaurant-quality fish.",
    features: ["Light tempura batter", "White fish", "Ready to fry", "325g pack"],
    storage: "Keep frozen at -18°C. Cook from frozen for best results.",
    preparation: "Deep fry frozen at 180°C for 5-6 minutes until golden. Serve with tartar or soy sauce.",
    nutritional: "Per 100g: Energy 190 kcal, Protein 14g, Fat 8g, Carbohydrates 16g."
  },
  {
    id: "popcorn-shrimp",
    name: "Popcorn Shrimp",
    price: 1100,
    weight: "1kg",
    category: "Seafood",
    image: "/assets/SEAFOOD/popcorn shrimp.png",
    description: "Bite-sized breaded shrimp perfect for snacking or appetizers. Pre-breaded and ready to fry. Family favorite!",
    features: ["Bite-sized", "Pre-breaded", "Quick cooking", "1kg pack"],
    storage: "Keep frozen at -18°C. Cook directly from freezer.",
    preparation: "Deep fry frozen at 180°C for 2-3 minutes or bake at 200°C for 12-15 minutes.",
    nutritional: "Per 100g: Energy 200 kcal, Protein 16g, Fat 9g, Carbohydrates 15g."
  },
  {
    id: "nori-salt-pepper-spiral",
    name: "Nori Himalayan Salt & Pepper Spiral",
    price: 750,
    weight: "1kg",
    category: "Seafood",
    image: "/assets/SEAFOOD/nori salt squid spiral.png",
    description: "Unique squid spirals seasoned with nori and Himalayan salt. Pre-seasoned with delicious umami flavor.",
    features: ["Nori & salt seasoned", "Spiral cut", "Japanese-inspired", "1kg pack"],
    storage: "Keep frozen at -18°C. Thaw before cooking.",
    preparation: "Stir-fry in hot wok for 2-3 minutes. Don't overcook. Perfect over rice or noodles.",
    nutritional: "Per 100g: Energy 95 kcal, Protein 18g, Fat 1.5g, Carbohydrates 3g."
  },
  {
    id: "salt-pepper-squid",
    name: "Salt & Pepper Squid",
    price: 840,
    weight: "1kg",
    category: "Seafood",
    image: "/assets/SEAFOOD/salt and pep squid.png",
    description: "Classic salt and pepper squid, pre-seasoned and ready to cook. Popular Chinese restaurant favorite.",
    features: ["Pre-seasoned", "Restaurant favorite", "Quick cooking", "1kg pack"],
    storage: "Keep frozen at -18°C. Thaw 4-6 hours before cooking.",
    preparation: "Deep fry at 180°C for 3-4 minutes. Garnish with chili and spring onions.",
    nutritional: "Per 100g: Energy 100 kcal, Protein 17g, Fat 2g, Carbohydrates 4g."
  },
  {
    id: "breaded-squid-rings",
    name: "Breaded Squid Rings",
    price: 720,
    weight: "1kg",
    category: "Seafood",
    image: "/assets/SEAFOOD/breaded squid rings.png",
    description: "Premium squid rings coated in crispy breading. Pre-breaded and ready to fry for quick, delicious calamari.",
    features: ["Pre-breaded", "Restaurant quality", "Ready to fry", "1kg pack"],
    storage: "Keep frozen at -18°C. Do not refreeze once thawed.",
    preparation: "Deep fry frozen at 180°C for 3-4 minutes until golden. Serve with lemon and aioli.",
    nutritional: "Per 100g: Energy 180 kcal, Protein 15g, Fat 8g, Carbohydrates 12g."
  },

  // ===== SAUSAGE =====
  {
    id: "hungarian-sausage",
    name: "Steaks & Stuff Hungarian Sausage",
    price: 250,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/hungarian.png",
    description: "Traditional Hungarian sausage seasoned with paprika and garlic. Classic European sausage for grilling or stews.",
    features: ["Traditional recipe", "Paprika & garlic", "Natural casings", "500g pack"],
    storage: "Refrigerate at 0-4°C, use within 5 days. Freeze for up to 2 months.",
    preparation: "Pierce sausages. Grill 12-15 minutes or simmer then brown. Serve with mustard.",
    nutritional: "Per 100g: Energy 285 kcal, Protein 14g, Fat 24g, Carbohydrates 2g."
  },
  {
    id: "cheesy-hungarian",
    name: "Steaks & Stuff Cheesy Hungarian Sausage",
    price: 250,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/cheesy hungarian.png",
    description: "Hungarian-style sausage with melted cheese center. Paprika-spiced with creamy surprise in every bite.",
    features: ["Cheese-filled", "Hungarian paprika", "Premium pork", "500g pack"],
    storage: "Store at 0-4°C, use within 5 days. Freeze for up to 2 months.",
    preparation: "Grill or pan-fry over medium heat 12-15 minutes. Turn frequently for melted cheese center.",
    nutritional: "Per 100g: Energy 310 kcal, Protein 16g, Fat 26g, Carbohydrates 3g."
  },
  {
    id: "snack-sausage",
    name: "Steaks & Stuff Snack Sausage",
    price: 250,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/snack.png",
    description: "Bite-sized cocktail sausages perfect for snacking, parties, or kids' meals. Quick-cooking crowd-pleaser.",
    features: ["Bite-sized", "Quick cooking", "Party favorite", "500g pack"],
    storage: "Refrigerate at 0-4°C, use within 7 days. Freeze for up to 3 months.",
    preparation: "Pan-fry 5-7 minutes or simmer in sauce. Perfect for spaghetti or as appetizers.",
    nutritional: "Per 100g: Energy 280 kcal, Protein 13g, Fat 24g, Carbohydrates 3g."
  },
  {
    id: "cheesy-beef-chipotle",
    name: "Steaks & Stuff Cheesy Beef Chipotle Sausage",
    price: 250,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/cheesy beef chipotle.png",
    description: "Bold beef sausage with cheese and smoky chipotle peppers. A spicy, cheesy treat for sausage lovers.",
    features: ["Cheese-filled", "Smoky chipotle", "Premium beef", "500g pack"],
    storage: "Refrigerate at 0-4°C, use within 5 days. Freeze for up to 2 months.",
    preparation: "Pierce with fork. Grill 12-15 minutes, turning frequently, or pan-fry until cooked through.",
    nutritional: "Per 100g: Energy 320 kcal, Protein 15g, Fat 27g, Carbohydrates 4g."
  },
  {
    id: "choco-chili-sausage",
    name: "Steaks & Stuff Choco Chili Sausage",
    price: 455,
    weight: "500g",
    category: "Sausage",
    image: "/assets/SAUSAGE/choco chili.png",
    description: "Adventurous gourmet sausage combining rich cocoa with spicy chili. Unique flavor inspired by Mexican mole.",
    features: ["Chocolate-chili blend", "Gourmet specialty", "Unique flavor", "500g pack"],
    storage: "Refrigerate at 0-4°C, use within 5 days. Freeze for up to 2 months.",
    preparation: "Grill or pan-fry over medium heat. Chocolate adds depth. Perfect with caramelized onions.",
    nutritional: "Per 100g: Energy 295 kcal, Protein 15g, Fat 24g, Carbohydrates 5g."
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