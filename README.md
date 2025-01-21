FoodTuck - A Dynamic Food Marketplace
FoodTuck is a user-friendly q-commerce platform designed for food enthusiasts. It allows users to browse, filter, and purchase food items dynamically. Built using Next.js and styled with Tailwind CSS, FoodTuck integrates advanced state management, dynamic routing, and a secure checkout process to provide a seamless experience.

Features
Multiple Pages: Includes Home, About, Menu, Chef, Shop, and Contact pages.
Dynamic Product Filtering: Filter food items by category.
Search Bar: Search for food items by name.
Pagination: Browse products through multiple pages for an organized view.
Food Details Page: Displays detailed information about each product with an "Add to Cart" button.
Cart Management: Manage your cart using the use-shopping-cart library.
Quantity Adjustment: Increase or decrease food item quantities with increment/decrement buttons.
Discount Code: Apply a discount code to reduce the cart total.
Secure Checkout: Enter shipping details and place an order.
Technologies Used
Frontend
Next.js: React-based framework for dynamic rendering and routing.
Tailwind CSS: Utility-first framework for responsive design.
use-shopping-cart: State management for cart functionality.
Backend
Sanity CMS: Content management and backend data storage.
Groq: Sanity's query language for fetching and displaying data dynamically.
Setup Instructions
Clone the Repository


git clone https://github.com/Arishah-Khan/nextjs-hackathon.git
Install Dependencies

cd foodtuck  
npm install
Set up Sanity
Create a .env.local file in the root directory and add the environment variables:


NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id  
NEXT_PUBLIC_SANITY_DATASET=production  
API_KEY=your_api_key  
Run the Development Server

npm run dev
Visit http://localhost:3000 in your browser to view the website.

Pages
Page	Description
Home	Displays featured products and an overview of the website.
About	Contains information about the project and its team.
Menu	Shows a categorized list of available food items.
Chef	Features details about the chefs preparing the meals.
Shop	Lists all food items available for purchase.
Contact	Includes a contact form for user feedback and inquiries.
Deployment
The live version of FoodTuck is deployed on Vercel and can be accessed https://nextjs-hackathon-mu.vercel.app/.

Testing
Functional Testing:
All features, including product listings, cart actions, and checkout, were tested thoroughly.
Cypress was used for end-to-end testing.
Performance Testing:
Performance analysis was conducted using Lighthouse.
Reports are available in the documents/ folder.
Security Testing:
Implemented secure API calls and HTTPS connections to prevent vulnerabilities.
Documentation
The project includes detailed documentation stored in the documents/ folder, containing:

Day 1 to Day 6 reports
Test case report (CSV format)
Performance testing results
Conclusion
FoodTuck provides a dynamic and feature-rich platform for food ordering with seamless navigation, powerful filtering, and secure checkout capabilities. It leverages modern technologies to create an engaging user experience.

