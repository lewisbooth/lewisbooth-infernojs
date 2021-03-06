const MenuItems = [
  {
    title: "Main Menu",
    pdf:
      "https://www.theorangetreebarandgrill.co.uk/wp-content/uploads/2017/05/Orange-Tree-Main-Menu-Spring-17.pdf",
    blocks: [
      {
        title: "From our Chargrill",
        description:
          "Our steaks are British farm assured highest quality and dry aged for at least 28 days",
        subheadings: [
          {
            title: "Steaks",
            items: [
              {
                title: "10oz / 8oz Rump Steak",
                price: "17.95 / 14.95",
                tags: ["gluten free"]
              },
              {
                title: "10oz / 8oz Ribeye Steak",
                price: "17.95 / 14.95",
                tags: ["gluten free"]
              },
              {
                title: "12oz / 10oz Sirloin Steak",
                price: "24.95 / 20.95",
                tags: ["gluten free"]
              },
              {
                title: "16oz T-Bone Steak",
                price: "25.95",
                tags: ["gluten free"]
              },
              {
                title: "8oz Fillet Steak",
                price: "24.95",
                tags: ["gluten free"]
              }
            ]
          },
          {
            title: "Specials",
            items: [
              {
                title: "Venison Steak",
                description:
                  "with dauphinoise potato, carrot & swede purée buttered asparagus and cherry & blackberry sauce",
                price: "17.95 / 14.95"
              },
              {
                title: "Hangar Steak",
                description:
                  "with onion bacon mash, spinach, carrot fondant and a mushroom truffle sauce",
                price: "17.95 / 14.95"
              },
              {
                title: "40oz T-Bone Steak for Two",
                description:
                  "with salt and vinegar roast potatoes,béarnaise & red wine sauce and a house salad",
                price: "17.95 / 14.95"
              }
            ]
          },
          {
            title: "Add To Your Steak",
            items: [
              {
                title: "Sautéed King & Atlantic Prawns in Garlic Butter",
                price: "4.95",
                tags: ["gluten free"]
              },
              {
                title: "Garlic Butter",
                price: "1.95",
                tags: ["gluten free"]
              },
              {
                title: "Peppercorn Sauce",
                price: "1.95"
              },
              {
                title: "Mushroom Truffle Sauce",
                price: "1.95"
              },
              {
                title: "Béarnaise Sauce",
                price: "1.95"
              },
              {
                title: "Blue Cheese Sauce",
                price: "1.95"
              },
              {
                title: "Red Wine Sauce",
                price: "1.95"
              }
            ]
          },
          {
            title: "Handmade Burgers",
            items: [
              {
                title: "Homemade Beef Burger",
                description: "with melted swiss cheese",
                price: "12.95"
              },
              {
                title: "Cajun Chicken Burger",
                description: "with emmental cheese",
                price: "12.45"
              },
              {
                title: "Smoked Lamb Burger",
                description: "with melted goats cheese",
                price: "14.95"
              },
              {
                title: "Chickpea Burger",
                description: "with avocado salsa",
                price: "11.95",
                tags: ["vegetarian"]
              },
              {
                title: "Soft Shell Crab Burger",
                description:
                  "with spinach, pickled vegetables and lobster sauce",
                price: "13.95"
              }
            ]
          },
          {
            title: "Skewer Boards",
            items: [
              {
                title: "Thai Spiced Chicken",
                description:
                  "brushed with a lime butter and served with fries and paprika mayonnaise",
                price: "14.95",
                tags: ["gluten free"]
              },
              {
                title: "Pesto Halloumi",
                description:
                  "with peppers, courgettes, aubergines and red onions served with salsa potatoes",
                price: "11.95",
                tags: ["vegetarian", "gluten free"]
              },
              {
                title: "Argentinian Style Beef Skewer",
                description:
                  "marinated in chimichurri sauce and served with salsa potatoes and garlic dip",
                price: "14.95",
                tags: ["gluten free"]
              },
              {
                title: "King Prawn, Hake & Chorizo",
                description:
                  "with peppers & onions and served with fries and paprika mayonnaise",
                price: "15.45",
                tags: ["gluten free"]
              }
            ]
          }
        ]
      },
      {
        title: "Large Plates",
        subheadings: [
          {
            title: null,
            items: [
              {
                title: "Sesame Breaded Chicken Breast",
                description:
                  "with pork stir-fry rice, pak choi and honey & soy sauce",
                price: "14.45"
              },
              {
                title: "Pan-fried Lamb Rump",
                description:
                  "with minted crushed potatoes, herb biscuit, carrot purée, silver skin onions and rosemary red wine sauce",
                price: "16.95"
              },
              {
                title: "Wild Mushroom Risotto",
                description:
                  "with chopped olives, spring onions, spinach, sweetcorn, radish and basil cream sauce",
                price: "11.95",
                tags: ["gluten free"]
              },
              {
                title: "Pan-Seared Gressingham Duck Breast",
                description:
                  "with asparagus, dauphinoise potato, parsnip purée and blueberry sauce",
                price: "15.95",
                tags: ["gluten free"]
              },
              {
                title: "Pressed Confit Belly Pork",
                description:
                  "with ham hock & sweetcorn croquette, spinach & carrots with honey & star anise sauce",
                price: "15.45"
              },
              {
                title: "Cod, Prawn and Mixed Seafood Curry",
                description: "with ginger, lemongrass & coconut rice",
                price: "15.95"
              },
              {
                title: "Goat's Cheese and Cumin Spiced Sweet Potato Wellington",
                description: "with pepper & coriander salad",
                price: "11.95"
              },
              {
                title: "Tempura Battered Sea Bass Fillets",
                description: "with lobster sauce & chips",
                price: "14.95"
              },
              {
                title: "Plaice Stuffed with Salmon Mousse",
                description:
                  "with fondant potato, strips of seasonal vegetables, mussels, clams and prawn in white wine sauce ",
                price: "15.95",
                tags: ["gluten free"]
              }
            ]
          }
        ]
      },
      {
        title: "Small Plates",
        subheadings: [
          {
            title: null,
            items: [
              {
                title: "Homemade Soup of the Day",
                price: "4.95",
                tags: ["gluten free"]
              },
              {
                title: "Hot Breads and Olive Tapenades",
                price: "4.50"
              },
              {
                title: "Mixed Olives with Herbs",
                price: "3.95"
              }
            ]
          },
          {
            title: "Meat",
            items: [
              {
                title: "Hot Sticky Wings with Sour Cream",
                price: "5.45"
              },
              {
                title: "Jerk Chicken Strips",
                price: "5.95"
              },
              {
                title: "Barbeque Baby Back Ribs",
                price: "6.45"
              },
              {
                title: "Baby Chorizo and Halloumi Skewers with Tzatziki Dip",
                price: "5.95",
                tags: ["gluten free"]
              },
              {
                title: "Crispy Beef Strips with Sticky Sauce",
                price: "5.95"
              },
              {
                title: "Lamb Koftas with Mint Yoghurt",
                price: "6.45"
              }
            ]
          },
          {
            title: "Fish",
            items: [
              {
                title: "Tempura King Prawns with Sweet Chilli Sauce",
                price: "6.45"
              },
              {
                title: "Salt and Chilli Squid with Saffron Mayo",
                price: "5.95"
              },
              {
                title: "Crispy Crab and Salmon Cakes with Lime Dip",
                price: "5.95"
              },
              {
                title: "Mackerel Pâté with Pitta Bread",
                price: "5.95",
                tags: ["gluten free"]
              },
              {
                title: "Fiery Fried Mussels with Coriander and Buttermilk Dip",
                price: "6.45"
              }
            ]
          },
          {
            title: "Vegetarian",
            items: [
              {
                title: "Sweet Potato Wedges with Sour Cream",
                price: "6.45",
                tags: ["vegetarian", "gluten free"]
              },
              {
                title: "Feta, Spinach and Mushroom Spring Rolls with Plum Dip",
                price: "5.95",
                tags: ["vegetarian"]
              },
              {
                title:
                  "Mango, Green Pepper and Chilli Risotto Balls with Basil Pesto",
                price: "5.95",
                tags: ["vegetarian"]
              },
              {
                title: "Fried Camembert with Onion Jam",
                price: "5.95",
                tags: ["vegetarian"]
              },
              {
                title: "Fig and Avocado Crostini",
                price: "6.45",
                tags: ["vegetarian"]
              }
            ]
          }
        ]
      },
      {
        title: "Dogs",
        subheadings: [
          {
            title: null,
            items: [
              {
                title: "Mac Dog",
                description: "macaroni cheese with chorizo and black pudding",
                price: "10.95"
              },
              {
                title: "Carribean Dog",
                description:
                  "crispy belly pork, pineapple salsa and cajun coleslaw",
                price: "10.95"
              },
              {
                title: "Mexican Dog",
                description:
                  "fried nachos, cheese sause, guacamole, chillies and jalapenos",
                price: "10.95"
              }
            ]
          }
        ]
      },
      {
        title: "Salads",
        subheadings: [
          {
            title: null,
            items: [
              {
                title: "House Salad",
                price: "17.95 / 14.95",
                tags: ["vegetarian", "gluten free"]
              },
              {
                title: "Caesar Salad",
                price: "17.95 / 14.95"
              },
              {
                title: "Crispy Pork & Pineapple Salad",
                price: "24.95 / 20.95"
              },
              {
                title: "Pan-Seared Fillet of Sea Bass",
                price: "25.95",
                tags: ["gluten free"]
              }
            ]
          }
        ]
      },
      {
        title: "Side Orders",
        subheadings: [
          {
            title: null,
            items: [
              {
                title: "Chips",
                price: "3.25",
                tags: ["vegan", "vegetarian"]
              },
              {
                title: "Jacket Potato",
                price: "2.95",
                tags: ["vegan", "vegetarian", "gluten free"]
              },
              {
                title: "Side Salad",
                price: "3.95",
                tags: ["vegan", "vegetarian"]
              },
              {
                title: "Seasonal Vegetables",
                price: "3.95",
                tags: ["vegetarian", "gluten free"]
              },
              {
                title: "Garlic Bread",
                price: "3.95",
                tags: ["vegetarian"]
              },
              {
                title: "Onion Rings",
                price: "3.95",
                tags: ["vegan", "vegetarian"]
              },
              {
                title: "Homemade Coleslaw",
                price: "3.95",
                tags: ["vegetarian", "gluten free"]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default MenuItems;
