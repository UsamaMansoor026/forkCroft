/* Hero Images */
import heroBg1 from "../assets/background/bg-1.webp";
import heroBg2 from "../assets/background/bg-2.webp";
import heroBg3 from "../assets/background/bg-3.webp";

/* About Images */
import about1 from "../assets/about.webp";
import about2 from "../assets/about-1.webp";

/* Chefs Profile Images */
import chef1 from "../assets/chef/chef-1.webp";
import chef2 from "../assets/chef/chef-2.webp";
import chef3 from "../assets/chef/chef-3.webp";
import chef4 from "../assets/chef/chef-4.webp";

/* Menu Images */
import grilledBeef from "../assets/products/Grilled-Beef-Potatoes.png";
import garlicButterChicken from "../assets/products/Garlic-Butter-Chicken.png";
import applePie from "../assets/products/Apple-Pie-Ice-Cream.png";
import chocoCake from "../assets/products/Choco-Lava-Cake.png";
import paneerTikka from "../assets/products/Paneer-Tikka.png";
import greekSalad from "../assets/products/Greek-Salad.png";

/* Customers Profile Images */
import male1 from "../assets/customers/male1.jpg";
import male2 from "../assets/customers/male2.jpg";
import male3 from "../assets/customers/male3.jpg";
import female1 from "../assets/customers/female1.jpg";
import female2 from "../assets/customers/female2.jpg";
import female3 from "../assets/customers/female3.jpg";
import female4 from "../assets/customers/female4.jpg";

/* Blog Posts */
import blog1 from "../assets/blogs/image_1.webp";
import blog2 from "../assets/blogs/image_2.webp";
import blog3 from "../assets/blogs/image_3.webp";

/* Instagram Gallery */
import insta1 from "../assets/instagram/insta-1.webp";
import insta2 from "../assets/instagram/insta-2.webp";
import insta3 from "../assets/instagram/insta-3.webp";
import insta4 from "../assets/instagram/insta-4.webp";
import insta5 from "../assets/instagram/insta-5.webp";
import insta6 from "../assets/instagram/insta-6.webp";

export const heroBg_images = [heroBg1, heroBg2, heroBg3];

export const about_images = {
  about1,
  about2,
};

export const Cateringservices = [
  {
    id: 1,
    title: "Business Meetings",
    description:
      "Impress your clients and elevate your corporate events with our premium business meeting catering. Whether it’s a morning briefing, an all-day conference, or a casual networking lunch, our curated menu and seamless service ensure a sophisticated dining experience that leaves a lasting impression.",
    icon: "fa-solid fa-briefcase",
  },
  {
    id: 2,
    title: "Birthday Party",
    description:
      "Make your birthday celebrations truly unforgettable! From delightful appetizers to decadent desserts, our catering team brings vibrant flavors and festive flair to every party. Whether it’s a kid’s bash or an elegant soirée, we handle the food so you can focus on the fun.",
    icon: "fa-solid fa-cake-candles",
  },
  {
    id: 3,
    title: "Wedding Party",
    description:
      "Celebrate love with a feast to remember. Our wedding catering is crafted with elegance and passion, offering customizable menus that suit your theme and delight your guests. From intimate receptions to grand banquets, we turn your dream wedding into a tasteful reality.",
    icon: "fa-solid fa-champagne-glasses",
  },
  {
    id: 4,
    title: "Family Gathering",
    description:
      "Bring your loved ones together over a table full of warmth, laughter, and unforgettable flavors. Our family gathering catering service is designed to make every reunion feel like a celebration, with homestyle dishes, cozy ambience, and attentive service that lets you focus on the people who matter most.",
    icon: "fas fa-user-friends",
  },
  {
    id: 5,
    title: "Anniversary Dinners",
    description:
      "Celebrate love, milestones, and cherished memories with an elegant dining experience crafted just for you. Our anniversary dinner service offers a romantic setting, customized menus, and a touch of sophistication—perfect for making your special day truly unforgettable.",
    icon: "fas fa-glass-cheers",
  },
];

export const chefs = [
  {
    id: 1,
    name: "John Smooth",
    profile: chef1,
    facebookHandle: "https://www.facebook.com/John Smooth",
    inatagramHandle: "https://www.instagram.com/John Smooth",
    twitterHandle: "https://www.x.com/John Smooth",
    role: "Restaurant Owner",
  },
  {
    id: 2,
    name: "Rebeca Welson",
    profile: chef2,
    facebookHandle: "https://www.facebook.com/Rebeca Welson",
    inatagramHandle: "https://www.instagram.com/Rebeca Welson",
    twitterHandle: "https://www.x.com/Rebeca Welson",
    role: "Head Chef",
  },
  {
    id: 3,
    name: "Kharl Branyt",
    profile: chef3,
    facebookHandle: "https://www.facebook.com/Kharl Branyt",
    inatagramHandle: "https://www.instagram.com/Kharl Branyt",
    twitterHandle: "https://www.x.com/Kharl Branyt",
    role: "Chef",
  },
  {
    id: 4,
    name: "Luke Simon",
    profile: chef4,
    facebookHandle: "https://www.facebook.com/Luke Simon",
    inatagramHandle: "https://www.instagram.com/Luke Simon",
    twitterHandle: "https://www.x.com/Luke Simon",
    role: "Chef",
  },
];

export const menuItems = [
  {
    id: 1,
    name: "Grilled Beef Potatoes",
    price: 18.99,
    discountPercent: 0,
    discountPrice: 18.99,
    image: grilledBeef,
    category: "Main Dish",
  },
  {
    id: 2,
    name: "Garlic Butter Chicken",
    price: 14.99,
    discountPercent: 0,
    discountPrice: 14.99,
    image: garlicButterChicken,
    category: "Main Dish",
  },
  {
    id: 3,
    name: "Apple Pie & Ice Cream",
    price: 7.49,
    discountPercent: 0,
    discountPrice: 7.49,
    image: applePie,
    category: "Dessert",
  },
  {
    id: 4,
    name: "Choco Lava Cake",
    price: 6.99,
    discountPercent: 0,
    discountPrice: 6.99,
    image: chocoCake,
    category: "Dessert",
  },
  {
    id: 5,
    name: "Paneer Tikka",
    price: 11.99,
    discountPercent: 0,
    discountPrice: 11.99,
    image: paneerTikka,
    category: "Main Dish",
  },
  {
    id: 6,
    name: "Greek Salad",
    price: 6.49,
    discountPercent: 0,
    discountPrice: 6.49,
    image: greekSalad,
    category: "Salad",
  },
];

export const testimonies = [
  {
    id: 1,
    name: "Ayesha Khan",
    feedback:
      "Absolutely loved the Garlic Butter Chicken! Perfectly seasoned and juicy. Will definitely be ordering again.",
    avatar: female1,
  },
  {
    id: 2,
    name: "Ali Raza",
    feedback:
      "The desserts are to die for the choco lava cake was rich, warm, and so gooey. Best I’ve had in town!",
    avatar: male1,
  },
  {
    id: 3,
    name: "Sara Rehman",
    feedback:
      "Excellent service and cozy ambiance. The food was fresh and flavorful. Highly recommend the spicy wings.",
    avatar: female2,
  },
  {
    id: 4,
    name: "Usman Tariq",
    feedback:
      "Great variety on the menu and everything we tried was top quality. Special shoutout to the Apple Pie!",
    avatar: male2,
  },
  {
    id: 5,
    name: "Fatima Noor",
    feedback:
      "Loved the packaging and presentation. The food was warm and portions were generous.",
    avatar: female3,
  },
  {
    id: 6,
    name: "Ali Zafar",
    feedback:
      "I ordered the grilled beef potatoes and it was incredible! soft, juicy, and crispy.",
    avatar: male3,
  },
  {
    id: 7,
    name: "Hira Sheikh",
    feedback:
      "Amazing vegetarian options! The grilled veggie bowl was both healthy and tasty. 10/10.",
    avatar: female4,
  },
];

export const blogs = [
  {
    id: 1,
    title: "Sweet Moments: Why Our Desserts Steal the Spotlight",
    date: "2025-04-13",
    image: blog1,
    content: `
While our savory menu gets the applause, it’s our desserts that quietly win hearts.

Whether it's the creamy *Velvet Chocolate Mousse* or the nostalgic *Warm Caramel Pudding*, we believe that a meal isn’t complete without a sweet finale.

Our pastry chef, **Sara**, blends French techniques with local inspiration, using fresh ingredients and zero shortcuts. We also offer **gluten-free** and **eggless** options — because everyone deserves dessert.

**Come hungry, but don’t forget to save room. Trust us.**
    `,
  },
  {
    id: 2,
    title: "The Secret Behind Our Signature Grilled Flavors",
    date: "2025-04-10",
    image: blog2,
    content: `
At **ForkCroft**, grilling isn’t just cooking — it’s an art.

Our chefs carefully marinate each cut of meat with a house-blend of spices passed down through generations. But what truly sets our grilled dishes apart is the way we sear them on open flames, locking in natural juices and smoky richness.

From our famous *Grilled Beef with Potatoes* to *Spicy Chicken Skewers*, every bite reflects dedication and flavor. We don’t rush the process — slow grilling brings out unmatched tenderness and depth.

**Next time you visit, ask us about the story behind your plate. Because every dish has one.**
    `,
  },
  {
    id: 3,
    title: "Gather, Celebrate, Dine: Your Events, Our Tables",
    date: "2025-04-16",
    image: blog3,
    content: `
Planning a family dinner, anniversary, or corporate gathering? **Let us make it unforgettable.**

We offer cozy private dining areas and curated menus perfect for every occasion. Our team ensures that from the first greeting to the final toast, your event feels personal and special.

Choose from pre-set packages or work with our chef to create a custom menu — featuring crowd favorites like:

- Creamy Alfredo Pasta  
- Grilled Lamb Chops  
- Tiramisu Cups

**Your memories deserve a flavorful backdrop. Let’s plan something amazing together.**
    `,
  },
];

export const instaGallery = [insta1, insta2, insta3, insta4, insta5, insta6];
