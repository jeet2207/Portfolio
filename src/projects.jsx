import lightbulb1 from "./assets/my projects/Lightbulb/1.svg";
import lightbulb2 from "./assets/my projects/Lightbulb/2.svg";
import lightbulb3 from "./assets/my projects/Lightbulb/3.svg";

import craftedq1 from "./assets/my projects/Craftedq/1.svg";
import craftedq2 from "./assets/my projects/Craftedq/2.svg";
import craftedq3 from "./assets/my projects/Craftedq/3.svg";

import bloomcs1 from "./assets/my projects/Bloomcs/bloom2.png";
import bloomcs2 from "./assets/my projects/Bloomcs/bloom1.png";

export const projects = [
  {
    id: 1,
    slug: "lightbulb",
    title: "Lightbulb",
    category: "WordPress Product Launch",
    description: "A modern product landing page",
    images: [lightbulb1, lightbulb2, lightbulb3],
  },

{
  id: 2,
  slug: "craftedq",
  title: "Craftedq",
  category: "Creative Agency Website",

  overview:
    "Craftedq is a creative agency website designed to showcase services, portfolio and brand identity.",

  challenge:
    "Client needed a premium website with modern UI, strong branding and easy content management.",

  solution:
    "Built a custom WordPress solution with responsive layouts, fast loading performance and reusable Gutenberg sections.",

  results: [
    "95+ PageSpeed Score",
    "45% Faster Load Time",
    "Improved Lead Generation",
    "Mobile Optimized Experience"
  ],

  technologies: [
    "WordPress",
    "Gutenberg",
    "Custom Theme",
    "PHP",
    "CSS"
  ],

  images: [
    craftedq1,
    craftedq2,
    craftedq3
  ]
},

  {
    id: 3,
    slug: "bloomcs",
    title: "Bloomcs",
    category: "WordPress Consulting",
    description: "Consulting website",
    images: [bloomcs1, bloomcs2],
  },
];