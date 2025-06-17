export interface Ingredient {
  id: string;
  name: string;
  type: string;
  waterRatio: number;
  servingSize: number;
  servingUnit: string;
  cookingTime: number;
  instructions: string[];
}

export const ingredients: Ingredient[] = [
  
  {
    id: "pasta",
    name: "Pasta",
    type: "Dried",
    waterRatio: 4, // Note: This ratio for pasta means water to cook in, not fully absorbed.
    servingSize: 1,
    servingUnit: "Cup",
    cookingTime: 10, // Average cooking time, varies by shape.
    instructions: [
      "Bring a large pot of water to a rolling boil (approx. 4 cups of water per 1 cup of dried pasta).",
      "Add a generous pinch of salt to the boiling water.",
      "Add pasta and stir occasionally to prevent sticking.",
      "Cook according to package directions, typically 8-12 minutes, until al dente (tender but firm).",
      "Drain pasta well and serve as desired."
    ]
  },
  {
    id: "steel-cut-oats",
    name: "Steel Cut Oats",
    type: "Oats",
    waterRatio: 4,
    servingSize: 0.25,
    servingUnit: "Cup",
    cookingTime: 30,
    instructions: [
      "Bring water to a boil in a medium saucepan.",
      "Add steel cut oats and stir well.",
      "Reduce heat to low, cover, and simmer for 25-30 minutes.",
      "Stir occasionally to prevent sticking.",
      "Let stand for 5 minutes before serving."
    ]
  },
  {
    id: "rolled-oats",
    name: "Rolled Oats",
    type: "Oats",
    waterRatio: 2,
    servingSize: 0.5,
    servingUnit: "Cup",
    cookingTime: 5,
    instructions: [
      "Combine rolled oats and water in a medium saucepan.",
      "Bring to a boil, then reduce heat to medium-low.",
      "Simmer for 3-5 minutes, stirring occasionally.",
      "Remove from heat and let stand for 2 minutes.",
      "Stir and serve with desired toppings."
    ]
  },
  {
    id: "lentils",
    name: "Lentils",
    type: "Dried",
    waterRatio: 3, // For brown/green lentils; red lentils may need less (e.g., 2).
    servingSize: 1,
    servingUnit: "Cup",
    cookingTime: 25, // For brown/green lentils; red lentils cook faster (15-20 min).
    instructions: [
      "Rinse lentils thoroughly under cold water and remove any debris.",
      "In a medium saucepan, combine 1 cup of lentils and 3 cups of water or broth.",
      "Bring to a boil, then reduce heat to low, cover, and simmer for 20-25 minutes, or until tender.",
      "Drain any excess liquid and season as desired."
    ]
  },
  // Lentil varieties
  {
    id: 'red-lentils',
    name: 'Red Lentils',
    type: 'Lentil',
    waterRatio: 2, // Red lentils absorb less water and cook faster
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 15, // Cook for 15-20 minutes
    instructions: [
      'Rinse red lentils thoroughly; they don\'t require soaking.',
      'Combine 1 cup of red lentils and 2 cups of water or broth in a saucepan.',
      'Bring to a boil, then reduce heat to low, cover, and simmer for 15-20 minutes, or until tender and creamy.',
      'Stir occasionally to prevent sticking. Add more liquid if needed for desired consistency.'
    ]
  },
  {
    id: 'green-lentils',
    name: 'Green Lentils',
    type: 'Lentil',
    waterRatio: 2.5, // Green lentils hold their shape well
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 30, // Cook for 25-30 minutes
    instructions: [
      'Rinse green lentils thoroughly and pick out any debris.',
      'Combine 1 cup of green lentils and 2.5 cups of water or broth in a saucepan.',
      'Bring to a boil, then reduce heat to low, cover, and simmer for 25-30 minutes, or until tender but still firm.',
      'Drain any excess liquid.'
    ]
  },
  {
    id: 'black-lentils',
    name: 'Black Lentils (Beluga)',
    type: 'Lentil',
    waterRatio: 2.5, // Similar to green lentils
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 25, // Cook for 20-25 minutes
    instructions: [
      'Rinse black lentils thoroughly.',
      'Combine 1 cup of black lentils and 2.5 cups of water or broth in a saucepan.',
      'Bring to a boil, then reduce heat to low, cover, and simmer for 20-25 minutes, or until tender yet intact.',
      'Drain any excess liquid. They have a rich, earthy flavor.'
    ]
  },
  // Rice varieties
  {
    id: "rice",
    name: "Rice",
    type: "Rice", // Changed from "Precooked"
    waterRatio: 2,
    servingSize: 1,
    servingUnit: "Cup",
    cookingTime: 20,
    instructions: [
      "Rinse rice in a fine-mesh sieve until water runs clear (optional).",
      "In a medium saucepan, combine 1 cup of rice and 2 cups of water.",
      "Bring to a boil, then reduce heat to low, cover, and simmer for 18-20 minutes, or until water is absorbed.",
      "Remove from heat and let stand, covered, for 5-10 minutes before fluffing with a fork."
    ]
  },
  {
    id: 'white-rice',
    name: 'White Rice',
    type: 'Rice',
    waterRatio: 2,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 18,
    instructions: [
      'Rinse rice until water runs clear',
      'Bring water to boil, add rice',
      'Reduce heat, cover and simmer for 18 minutes',
      'Let stand 5 minutes, then fluff with fork'
    ]
  },
  {
    id: 'brown-rice',
    name: 'Brown Rice',
    type: 'Rice',
    waterRatio: 2.5,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 45,
    instructions: [
      'Rinse rice until water runs clear',
      'Bring water to boil, add rice',
      'Reduce heat, cover and simmer for 45 minutes',
      'Let stand 10 minutes, then fluff with fork'
    ]
  },
  {
    id: 'basmati-rice',
    name: 'Basmati Rice',
    type: 'Rice',
    waterRatio: 1.5,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 15,
    instructions: [
      'Soak rice for 30 minutes, then drain',
      'Bring water to boil, add rice',
      'Reduce heat, cover and simmer for 15 minutes',
      'Let stand 5 minutes, then fluff with fork'
    ]
  },
  {
    id: 'jasmine-rice',
    name: 'Jasmine Rice',
    type: 'Rice',
    waterRatio: 1.25,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 12,
    instructions: [
      'Rinse rice until water runs clear',
      'Bring water to boil, add rice',
      'Reduce heat, cover and simmer for 12 minutes',
      'Let stand 5 minutes, then fluff with fork'
    ]
  },
  // Pasta varieties
  {
    id: 'spaghetti',
    name: 'Spaghetti',
    type: 'Pasta',
    waterRatio: 4,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 10,
    instructions: [
      'Bring salted water to rolling boil',
      'Add pasta and stir occasionally',
      'Cook for 8-12 minutes until al dente',
      'Drain and serve immediately'
    ]
  },
  {
    id: 'penne',
    name: 'Penne',
    type: 'Pasta',
    waterRatio: 4,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 12,
    instructions: [
      'Bring salted water to rolling boil',
      'Add pasta and stir occasionally',
      'Cook for 10-14 minutes until al dente',
      'Drain and serve immediately'
    ]
  },
  {
    id: 'fusilli',
    name: 'Fusilli',
    type: 'Pasta',
    waterRatio: 4,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 11,
    instructions: [
      'Bring salted water to rolling boil',
      'Add pasta and stir occasionally',
      'Cook for 9-13 minutes until al dente',
      'Drain and serve immediately'
    ]
  },
  {
    id: 'macaroni',
    name: 'Macaroni',
    type: 'Pasta',
    waterRatio: 4,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 8,
    instructions: [
      'Bring salted water to rolling boil',
      'Add pasta and stir occasionally',
      'Cook for 6-10 minutes until al dente',
      'Drain and serve immediately'
    ]
  },
  // Quinoa varieties
  {
    id: "quinoa",
    name: "Quinoa",
    type: "Quinoa",
    waterRatio: 2,
    servingSize: 1,
    servingUnit: "Cup",
    cookingTime: 15,
    instructions: [
      "Rinse quinoa thoroughly in a fine-mesh sieve under cold water.",
      "In a medium saucepan, combine 1 cup of quinoa and 2 cups of water or broth.",
      "Bring to a boil, then reduce heat to low, cover, and simmer for about 15 minutes, or until water is absorbed.",
      "Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork before serving."
    ]
  },
  {
    id: 'white-quinoa',
    name: 'White Quinoa',
    type: 'Quinoa',
    waterRatio: 2,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 15,
    instructions: [
      'Rinse quinoa in fine mesh strainer',
      'Bring water to boil, add quinoa',
      'Reduce heat, cover and simmer for 15 minutes',
      'Let stand 5 minutes, then fluff with fork'
    ]
  },
  {
    id: 'red-quinoa',
    name: 'Red Quinoa',
    type: 'Quinoa',
    waterRatio: 2,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 18,
    instructions: [
      'Rinse quinoa in fine mesh strainer',
      'Bring water to boil, add quinoa',
      'Reduce heat, cover and simmer for 18 minutes',
      'Let stand 5 minutes, then fluff with fork'
    ]
  },
  {
    id: 'black-quinoa',
    name: 'Black Quinoa',
    type: 'Quinoa',
    waterRatio: 2,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 20,
    instructions: [
      'Rinse quinoa in fine mesh strainer',
      'Bring water to boil, add quinoa',
      'Reduce heat, cover and simmer for 20 minutes',
      'Let stand 5 minutes, then fluff with fork'
    ]
  },
  
  // Couscous varieties
  {
    id: 'regular-couscous',
    name: 'Regular Couscous',
    type: 'Couscous',
    waterRatio: 1,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 5,
    instructions: [
      'Bring water to boil with a pinch of salt',
      'Remove from heat, add couscous',
      'Cover and let stand for 5 minutes',
      'Fluff with fork before serving'
    ]
  },
  {
    id: 'pearl-couscous',
    name: 'Pearl Couscous',
    type: 'Couscous',
    waterRatio: 1.25,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 12,
    instructions: [
      'Toast couscous in dry pan for 2 minutes',
      'Add boiling water and salt',
      'Simmer covered for 10-12 minutes',
      'Drain if needed and fluff with fork'
    ]
  },
  {
    id: 'israeli-couscous',
    name: 'Israeli Couscous',
    type: 'Couscous',
    waterRatio: 1.5,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 10,
    instructions: [
      'Toast couscous in oil for 2-3 minutes',
      'Add boiling water and salt',
      'Simmer covered for 8-10 minutes',
      'Drain if needed and fluff with fork'
    ]
  },
  {
    id: 'whole-wheat-couscous',
    name: 'Whole Wheat Couscous',
    type: 'Couscous',
    waterRatio: 1.25,
    servingSize: 1,
    servingUnit: 'Cup',
    cookingTime: 8,
    instructions: [
      'Bring water to boil with a pinch of salt',
      'Remove from heat, add couscous',
      'Cover and let stand for 6-8 minutes',
      'Fluff with fork before serving'
    ]
  },
  // Legumes
  {
    id: 'chickpeas',
    name: 'Chickpeas (Dried)',
    type: 'Legume',
    waterRatio: 3, // After soaking. Soaking is highly recommended.
    servingSize: 1,
    servingUnit: 'Cup', // Dried chickpeas, which will yield ~3 cups cooked
    cookingTime: 90, // 1.5 - 2 hours after soaking; 3-4 hours without soaking
    instructions: [
      'Sort and rinse 1 cup of dried chickpeas.',
      'Soak chickpeas: Quick soak (boil for 5 mins, let stand 1 hour) OR Long soak (cover with 3-4 inches of cold water, soak 8 hours or overnight). Drain and rinse.',
      'In a large pot, combine soaked chickpeas with 3 cups of fresh water or broth.',
      'Bring to a boil, then reduce heat to low, cover, and simmer for 1.5 - 2 hours (or until tender). Add more water if needed.',
      'Skim any foam that rises to the surface. Season as desired.'
    ]
  },
  {
    id: 'peanuts-raw',
    name: 'Peanuts (Raw, for boiling)',
    type: 'Legume',
    waterRatio: 2, // Water for boiling, peanuts absorb some.
    servingSize: 1,
    servingUnit: 'Cup', // Raw, shelled peanuts
    cookingTime: 120, // 2-3 hours for soft boiled peanuts, can be much longer.
    instructions: [
      'Rinse 1 cup of raw, shelled peanuts thoroughly.',
      'In a large pot, combine peanuts with 2 cups of water and salt (e.g., 1-2 tbsp per cup of peanuts, or to taste).',
      'Ensure peanuts are fully submerged; add more water if necessary.',
      'Bring to a boil, then reduce heat to low, cover, and simmer for 2-3 hours, or until peanuts reach desired tenderness.',
      'Check water level occasionally and add more if needed. For softer peanuts, soak overnight before boiling.'
    ]
  },
  // Vegetables
  {
    id: 'carrots',
    name: 'Carrots',
    type: 'Vegetable',
    waterRatio: 0.5, // Just enough water to steam/boil
    servingSize: 1,
    servingUnit: 'Cup', // 1 cup chopped carrots
    cookingTime: 8, // 8-10 minutes for tender carrots
    instructions: [
      'Wash and peel carrots, then cut into desired size (coins, sticks, or chunks).',
      'In a medium saucepan, add carrots with about 1/2 cup of water.',
      'Bring to a boil, then reduce heat to medium, cover, and steam for 8-10 minutes.',
      'Test with a fork - carrots should be tender but not mushy.',
      'Drain any remaining water and season as desired.'
    ]
  },
  {
    id: 'cauliflower',
    name: 'Cauliflower',
    type: 'Vegetable',
    waterRatio: 0.25, // Minimal water for steaming
    servingSize: 1,
    servingUnit: 'Cup', // 1 cup florets
    cookingTime: 5, // 5-7 minutes for tender-crisp
    instructions: [
      'Cut cauliflower into uniform florets, about 1-2 inches in size.',
      'In a large saucepan with a steamer insert, add about 1/4 cup of water.',
      'Bring water to a boil, add cauliflower florets to steamer.',
      'Cover and steam for 5-7 minutes until tender-crisp.',
      'Remove from heat and season as desired.'
    ]
  },
  {
    id: 'broccolini',
    name: 'Broccolini',
    type: 'Vegetable',
    waterRatio: 0.25, // Minimal water for steaming
    servingSize: 1,
    servingUnit: 'Cup', // 1 cup trimmed broccolini
    cookingTime: 4, // 3-4 minutes for tender-crisp
    instructions: [
      'Trim the bottom inch of broccolini stems and rinse well.',
      'In a large saucepan, add about 1/4 cup of water.',
      'Bring to a boil, add broccolini.',
      'Cover and steam for 3-4 minutes until stems are tender and bright green.',
      'Remove immediately to prevent overcooking and season as desired.'
    ]
  },
  {
    id: 'potatoes',
    name: 'Potatoes',
    type: 'Vegetable',
    waterRatio: 1, // Enough water to cover
    servingSize: 1,
    servingUnit: 'Cup', // 1 cup cubed potatoes
    cookingTime: 15, // 15-20 minutes depending on size
    instructions: [
      'Wash potatoes thoroughly. Peel if desired, then cut into uniform cubes (about 1-inch).',
      'Place potatoes in a pot and add enough water to cover by about 1 inch.',
      'Add a pinch of salt to the water.',
      'Bring to a boil, then reduce heat and simmer for 15-20 minutes.',
      'Test with a fork - potatoes should be easily pierced but not falling apart.',
      'Drain well before serving or using in recipes.'
    ]
  },
  {
    id: 'sweet-potatoes',
    name: 'Sweet Potatoes',
    type: 'Vegetable',
    waterRatio: 1, // Enough water to cover
    servingSize: 1,
    servingUnit: 'Cup', // 1 cup cubed sweet potatoes
    cookingTime: 12, // 12-15 minutes for cubes
    instructions: [
      'Wash sweet potatoes thoroughly, peel, and cut into uniform cubes (about 1-inch).',
      'Place sweet potatoes in a pot and add enough water to cover by about 1 inch.',
      'Add a pinch of salt to the water.',
      'Bring to a boil, then reduce heat and simmer for 12-15 minutes.',
      'Test with a fork - sweet potatoes should be tender but still hold their shape.',
      'Drain well. Sweet potatoes cook faster than regular potatoes, so watch carefully.'
    ]
  }
];
