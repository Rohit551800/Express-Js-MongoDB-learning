const { parse } = require("dotenv");
const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000 ;


//Crud Operation
//Creating Array of objects with product id's

    const products = [
  { Product_Id: 1, Product_Name: "Classic Cotton Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Black", Price: 499, stock: 120, Brand: "Zara" },
  { Product_Id: 2, Product_Name: "Slim Fit White Tee", Category: "Clothing", Type: "T-Shirt", Size: "L", Color: "White", Price: 549, stock: 90, Brand: "H&M" },
  { Product_Id: 3, Product_Name: "Printed Graphic Tee", Category: "Clothing", Type: "T-Shirt", Size: "XL", Color: "Blue", Price: 599, stock: 70, Brand: "Roadster" },
  { Product_Id: 4, Product_Name: "Round Neck Casual Tee", Category: "Clothing", Type: "T-Shirt", Size: "S", Color: "Grey", Price: 449, stock: 150, Brand: "Puma" },
  { Product_Id: 5, Product_Name: "OverSized Street Tee", Category: "Clothing", Type: "T-Shirt", Size: "XL", Color: "Green", Price: 699, stock: 60, Brand: "Nike" },

  { Product_Id: 6, Product_Name: "Formal Solid Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "White", Price: 1199, stock: 80, Brand: "Van Heusen" },
  { Product_Id: 7, Product_Name: "Checked Casual Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Red", Price: 999, stock: 65, Brand: "Allen Solly" },
  { Product_Id: 8, Product_Name: "Denim Blue Shirt", Category: "Clothing", Type: "Shirt", Size: "XL", Color: "Blue", Price: 1299, stock: 40, Brand: "Levis" },
  { Product_Id: 9, Product_Name: "Linen Summer Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Beige", Price: 1499, stock: 55, Brand: "UCB" },
  { Product_Id: 10, Product_Name: "Striped Office Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Sky Blue", Price: 1099, stock: 75, Brand: "Peter England" },

  { Product_Id: 11, Product_Name: "Slim Fit Jeans", Category: "Clothing", Type: "Pant", Size: "32", Color: "Dark Blue", Price: 1999, stock: 100, Brand: "Levis" },
  { Product_Id: 12, Product_Name: "Regular Fit Chinos", Category: "Clothing", Type: "Pant", Size: "34", Color: "Khaki", Price: 1799, stock: 85, Brand: "H&M" },
  { Product_Id: 13, Product_Name: "Cotton Formal Trousers", Category: "Clothing", Type: "Pant", Size: "36", Color: "Black", Price: 1599, stock: 60, Brand: "Arrow" },
  { Product_Id: 14, Product_Name: "Jogger Track Pants", Category: "Clothing", Type: "Pant", Size: "M", Color: "Grey", Price: 1299, stock: 95, Brand: "Adidas" },
  { Product_Id: 15, Product_Name: "Stretchable Casual Pants", Category: "Clothing", Type: "Pant", Size: "L", Color: "Olive", Price: 1699, stock: 50, Brand: "Roadster" },

  { Product_Id: 16, Product_Name: "V-Neck Cotton Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Navy", Price: 529, stock: 110, Brand: "Puma" },
  { Product_Id: 17, Product_Name: "Polo Collar Tee", Category: "Clothing", Type: "T-Shirt", Size: "L", Color: "Maroon", Price: 799, stock: 90, Brand: "U.S. Polo" },
  { Product_Id: 18, Product_Name: "Athletic Dry-Fit Tee", Category: "Clothing", Type: "T-Shirt", Size: "XL", Color: "Neon Green", Price: 899, stock: 70, Brand: "Nike" },
  { Product_Id: 19, Product_Name: "Half Sleeve Casual Tee", Category: "Clothing", Type: "T-Shirt", Size: "S", Color: "Yellow", Price: 399, stock: 140, Brand: "H&M" },
  { Product_Id: 20, Product_Name: "Minimal Logo Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Black", Price: 599, stock: 100, Brand: "Zara" },

  { Product_Id: 21, Product_Name: "Printed Casual Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Floral Blue", Price: 1099, stock: 45, Brand: "Roadster" },
  { Product_Id: 22, Product_Name: "Mandarin Collar Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "White", Price: 1299, stock: 55, Brand: "FabIndia" },
  { Product_Id: 23, Product_Name: "Relaxed Fit Shirt", Category: "Clothing", Type: "Shirt", Size: "XL", Color: "Green", Price: 999, stock: 60, Brand: "UCB" },

  { Product_Id: 24, Product_Name: "Skinny Fit Jeans", Category: "Clothing", Type: "Pant", Size: "30", Color: "Light Blue", Price: 1899, stock: 80, Brand: "Spykar" },
  { Product_Id: 25, Product_Name: "Cargo Pants", Category: "Clothing", Type: "Pant", Size: "32", Color: "Army Green", Price: 2199, stock: 65, Brand: "HRX" },
  { Product_Id: 26, Product_Name: "Classic Black Polo Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Black", Price: 799, stock: 85, Brand: "U.S. Polo" },
  { Product_Id: 27, Product_Name: "Cotton Crew Neck Tee", Category: "Clothing", Type: "T-Shirt", Size: "L", Color: "White", Price: 499, stock: 130, Brand: "H&M" },
  { Product_Id: 28, Product_Name: "Sports Training Tee", Category: "Clothing", Type: "T-Shirt", Size: "XL", Color: "Orange", Price: 899, stock: 60, Brand: "Adidas" },
  { Product_Id: 29, Product_Name: "Loose Fit OverSized Tee", Category: "Clothing", Type: "T-Shirt", Size: "XL", Color: "Brown", Price: 699, stock: 70, Brand: "Zara" },
  { Product_Id: 30, Product_Name: "Printed Summer Tee", Category: "Clothing", Type: "T-Shirt", Size: "S", Color: "Pink", Price: 449, stock: 100, Brand: "Roadster" },

  { Product_Id: 31, Product_Name: "Formal Blue Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Navy Blue", Price: 1199, stock: 75, Brand: "Arrow" },
  { Product_Id: 32, Product_Name: "Casual Denim Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Dark Blue", Price: 1399, stock: 55, Brand: "Levis" },
  { Product_Id: 33, Product_Name: "Floral Print Shirt", Category: "Clothing", Type: "Shirt", Size: "XL", Color: "MultiColor", Price: 1099, stock: 45, Brand: "Roadster" },
  { Product_Id: 34, Product_Name: "Office Wear Cotton Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Light Grey", Price: 999, stock: 90, Brand: "Peter England" },
  { Product_Id: 35, Product_Name: "Short Sleeve Casual Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Mint Green", Price: 899, stock: 65, Brand: "H&M" },

  { Product_Id: 36, Product_Name: "Regular Fit Blue Jeans", Category: "Clothing", Type: "Pant", Size: "32", Color: "Blue", Price: 1899, stock: 110, Brand: "Levis" },
  { Product_Id: 37, Product_Name: "Slim Fit Black Jeans", Category: "Clothing", Type: "Pant", Size: "34", Color: "Black", Price: 1999, stock: 85, Brand: "Spykar" },
  { Product_Id: 38, Product_Name: "Formal Office Trousers", Category: "Clothing", Type: "Pant", Size: "36", Color: "Charcoal", Price: 1699, stock: 60, Brand: "Van Heusen" },
  { Product_Id: 39, Product_Name: "Cotton Jogger Pants", Category: "Clothing", Type: "Pant", Size: "M", Color: "Grey", Price: 1299, stock: 95, Brand: "HRX" },
  { Product_Id: 40, Product_Name: "Casual Stretch Pants", Category: "Clothing", Type: "Pant", Size: "L", Color: "Navy", Price: 1599, stock: 70, Brand: "Roadster" },

  { Product_Id: 41, Product_Name: "Dry Fit Sports Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Red", Price: 899, stock: 100, Brand: "Nike" },
  { Product_Id: 42, Product_Name: "Plain Cotton Tee", Category: "Clothing", Type: "T-Shirt", Size: "L", Color: "Sky Blue", Price: 399, stock: 150, Brand: "H&M" },
  { Product_Id: 43, Product_Name: "Graphic Street Tee", Category: "Clothing", Type: "T-Shirt", Size: "XL", Color: "Black", Price: 649, stock: 80, Brand: "Zara" },
  { Product_Id: 44, Product_Name: "Polo Neck Casual Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Green", Price: 799, stock: 90, Brand: "UCB" },
  { Product_Id: 45, Product_Name: "Breathable Gym Tee", Category: "Clothing", Type: "T-Shirt", Size: "L", Color: "Grey", Price: 899, stock: 75, Brand: "Adidas" },

  { Product_Id: 46, Product_Name: "Premium Cotton Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "White", Price: 1499, stock: 55, Brand: "Louis Philippe" },
  { Product_Id: 47, Product_Name: "Vertical Stripe Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Blue", Price: 1199, stock: 60, Brand: "Allen Solly" },
  { Product_Id: 48, Product_Name: "Casual Weekend Shirt", Category: "Clothing", Type: "Shirt", Size: "XL", Color: "Olive", Price: 999, stock: 50, Brand: "Roadster" },
  { Product_Id: 49, Product_Name: "Soft Linen Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Cream", Price: 1399, stock: 40, Brand: "FabIndia" },
  { Product_Id: 50, Product_Name: "Relaxed Fit Cotton Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Brown", Price: 1099, stock: 65, Brand: "UCB" },

  { Product_Id: 51, Product_Name: "Classic Blue Jeans", Category: "Clothing", Type: "Pant", Size: "32", Color: "Indigo", Price: 1799, stock: 120, Brand: "Levis" },
  { Product_Id: 52, Product_Name: "Straight Fit Chinos", Category: "Clothing", Type: "Pant", Size: "34", Color: "Beige", Price: 1699, stock: 90, Brand: "H&M" },
  { Product_Id: 53, Product_Name: "Office Wear Formal Pant", Category: "Clothing", Type: "Pant", Size: "36", Color: "Black", Price: 1899, stock: 70, Brand: "Arrow" },
  { Product_Id: 54, Product_Name: "Athleisure Track Pant", Category: "Clothing", Type: "Pant", Size: "M", Color: "Dark Grey", Price: 1499, stock: 85, Brand: "Adidas" },
  { Product_Id: 55, Product_Name: "Stretch Slim Pants", Category: "Clothing", Type: "Pant", Size: "L", Color: "Olive Green", Price: 1599, stock: 60, Brand: "HRX" },

  { Product_Id: 56, Product_Name: "Basic Round Neck Tee", Category: "Clothing", Type: "T-Shirt", Size: "S", Color: "White", Price: 349, stock: 160, Brand: "H&M" },
  { Product_Id: 57, Product_Name: "Urban Style Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Black", Price: 599, stock: 110, Brand: "Zara" },
  { Product_Id: 58, Product_Name: "Running Performance Tee", Category: "Clothing", Type: "T-Shirt", Size: "L", Color: "Neon Blue", Price: 999, stock: 65, Brand: "Nike" },
  { Product_Id: 59, Product_Name: "Casual Everyday Tee", Category: "Clothing", Type: "T-Shirt", Size: "XL", Color: "Grey", Price: 449, stock: 140, Brand: "Roadster" },
  { Product_Id: 60, Product_Name: "Soft Cotton Polo Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Maroon", Price: 799, stock: 95, Brand: "U.S. Polo" },

  { Product_Id: 61, Product_Name: "Formal Checked Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Blue Check", Price: 1299, stock: 50, Brand: "Peter England" },
  { Product_Id: 62, Product_Name: "Casual Cotton Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Sky Blue", Price: 999, stock: 75, Brand: "H&M" },
  { Product_Id: 63, Product_Name: "Premium Office Shirt", Category: "Clothing", Type: "Shirt", Size: "XL", Color: "White", Price: 1599, stock: 45, Brand: "Louis Philippe" },
  { Product_Id: 64, Product_Name: "Printed Party Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Black Print", Price: 1199, stock: 55, Brand: "Roadster" },
  { Product_Id: 65, Product_Name: "Comfort Fit Casual Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Green", Price: 1099, stock: 70, Brand: "UCB" },

  { Product_Id: 66, Product_Name: "Slim Fit Blue Jeans", Category: "Clothing", Type: "Pant", Size: "30", Color: "Blue", Price: 1899, stock: 100, Brand: "Spykar" },
  { Product_Id: 67, Product_Name: "Classic Black Trousers", Category: "Clothing", Type: "Pant", Size: "32", Color: "Black", Price: 1799, stock: 80, Brand: "Van Heusen" },
  { Product_Id: 68, Product_Name: "Casual Cotton Chinos", Category: "Clothing", Type: "Pant", Size: "34", Color: "Brown", Price: 1599, stock: 75, Brand: "Roadster" },
  { Product_Id: 69, Product_Name: "Sports Jogger Pants", Category: "Clothing", Type: "Pant", Size: "M", Color: "Navy Blue", Price: 1399, stock: 90, Brand: "Nike" },
  { Product_Id: 70, Product_Name: "Everyday Wear Pants", Category: "Clothing", Type: "Pant", Size: "L", Color: "Grey", Price: 1499, stock: 85, Brand: "H&M" },

  { Product_Id: 71, Product_Name: "Classic Polo Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Blue", Price: 799, stock: 95, Brand: "U.S. Polo" },
  { Product_Id: 72, Product_Name: "Plain Black Tee", Category: "Clothing", Type: "T-Shirt", Size: "L", Color: "Black", Price: 399, stock: 180, Brand: "H&M" },
  { Product_Id: 73, Product_Name: "Printed Cotton Tee", Category: "Clothing", Type: "T-Shirt", Size: "XL", Color: "White", Price: 499, stock: 120, Brand: "Roadster" },
  { Product_Id: 74, Product_Name: "Athletic Training Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Red", Price: 899, stock: 70, Brand: "Adidas" },
  { Product_Id: 75, Product_Name: "Stylish Casual Tee", Category: "Clothing", Type: "T-Shirt", Size: "L", Color: "Olive", Price: 649, stock: 85, Brand: "Zara" },

  { Product_Id: 76, Product_Name: "Office Wear White Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "White", Price: 1199, stock: 90, Brand: "Arrow" },
  { Product_Id: 77, Product_Name: "Casual Checked Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Red Check", Price: 1099, stock: 65, Brand: "Allen Solly" },
  { Product_Id: 78, Product_Name: "Denim Casual Shirt", Category: "Clothing", Type: "Shirt", Size: "XL", Color: "Blue", Price: 1399, stock: 50, Brand: "Levis" },
  { Product_Id: 79, Product_Name: "Soft Cotton Weekend Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Grey", Price: 999, stock: 75, Brand: "Roadster" },
  { Product_Id: 80, Product_Name: "Relaxed Summer Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Yellow", Price: 899, stock: 60, Brand: "H&M" },

  { Product_Id: 81, Product_Name: "Dark Wash Jeans", Category: "Clothing", Type: "Pant", Size: "32", Color: "Dark Blue", Price: 1999, stock: 85, Brand: "Levis" },
  { Product_Id: 82, Product_Name: "Formal Grey Trousers", Category: "Clothing", Type: "Pant", Size: "34", Color: "Grey", Price: 1799, stock: 70, Brand: "Peter England" },
  { Product_Id: 83, Product_Name: "Casual Slim Chinos", Category: "Clothing", Type: "Pant", Size: "36", Color: "Khaki", Price: 1699, stock: 65, Brand: "H&M" },
  { Product_Id: 84, Product_Name: "Jogger Track Pants", Category: "Clothing", Type: "Pant", Size: "M", Color: "Black", Price: 1499, stock: 95, Brand: "HRX" },
  { Product_Id: 85, Product_Name: "Stretch Casual Pants", Category: "Clothing", Type: "Pant", Size: "L", Color: "Navy", Price: 1599, stock: 80, Brand: "Roadster" },

  { Product_Id: 86, Product_Name: "Everyday Cotton Tee", Category: "Clothing", Type: "T-Shirt", Size: "S", Color: "Grey", Price: 349, stock: 160, Brand: "H&M" },
  { Product_Id: 87, Product_Name: "Urban Printed Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Black", Price: 599, stock: 110, Brand: "Zara" },
  { Product_Id: 88, Product_Name: "Running Dry Fit Tee", Category: "Clothing", Type: "T-Shirt", Size: "L", Color: "Blue", Price: 899, stock: 75, Brand: "Nike" },
  { Product_Id: 89, Product_Name: "Casual Loose Tee", Category: "Clothing", Type: "T-Shirt", Size: "XL", Color: "White", Price: 449, stock: 140, Brand: "Roadster" },
  { Product_Id: 90, Product_Name: "Premium Polo Tee", Category: "Clothing", Type: "T-Shirt", Size: "M", Color: "Green", Price: 899, stock: 90, Brand: "U.S. Polo" },

  { Product_Id: 91, Product_Name: "Formal Striped Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Blue Stripe", Price: 1299, stock: 55, Brand: "Van Heusen" },
  { Product_Id: 92, Product_Name: "Casual Printed Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Black Print", Price: 1099, stock: 60, Brand: "Roadster" },
  { Product_Id: 93, Product_Name: "Office Wear Premium Shirt", Category: "Clothing", Type: "Shirt", Size: "XL", Color: "White", Price: 1599, stock: 45, Brand: "Louis Philippe" },
  { Product_Id: 94, Product_Name: "Soft Cotton Shirt", Category: "Clothing", Type: "Shirt", Size: "L", Color: "Sky Blue", Price: 999, stock: 80, Brand: "H&M" },
  { Product_Id: 95, Product_Name: "Comfort Fit Casual Shirt", Category: "Clothing", Type: "Shirt", Size: "M", Color: "Olive", Price: 1099, stock: 65, Brand: "UCB" },

  { Product_Id: 96, Product_Name: "Regular Fit Jeans", Category: "Clothing", Type: "Pant", Size: "32", Color: "Blue", Price: 1799, stock: 100, Brand: "Levis" },
  { Product_Id: 97, Product_Name: "Formal Office Trousers", Category: "Clothing", Type: "Pant", Size: "34", Color: "Black", Price: 1899, stock: 75, Brand: "Arrow" },
  { Product_Id: 98, Product_Name: "Casual Cotton Pants", Category: "Clothing", Type: "Pant", Size: "36", Color: "Brown", Price: 1599, stock: 70, Brand: "Roadster" },
  { Product_Id: 99, Product_Name: "Jogger Style Track Pants", Category: "Clothing", Type: "Pant", Size: "M", Color: "Dark Grey", Price: 1499, stock: 90, Brand: "HRX" },
  { Product_Id: 100, Product_Name: "Everyday Wear Slim Pants", Category: "Clothing", Type: "Pant", Size: "L", Color: "Navy Blue", Price: 1699, stock: 85, Brand: "H&M" }


];


//Server
app.get('/' , (req , res) => {
    res.send("Hello world");
});
//To check all the users
app.get('/product' , (req , res) => {
    res.send(products);
});


//To check for a particular product id


app.get('/product/:id' , (req , res) => {
    const productId = parseInt(req.params.id);
    const pId = products.find( item => item.Product_Id === productId);
    if(!pId){
        res.status(404).json({message :"Product is unavailable with is product id"});
    }
    res.send(pId);
});

//Server listen
app.listen(PORT , () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});