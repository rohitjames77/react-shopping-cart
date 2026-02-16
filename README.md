# React Shopping Cart

A mock e-commerce application built with React that demonstrates routing, state management, and API integration. This project is about building a multi-page application with a functional shopping cart system.

## 🎥 Live Demo


https://github.com/user-attachments/assets/2a81cd79-180b-4cae-a59a-2fd58eb2c422


**Live Site:** [[react-shopping-cart](https://react-shopping-cart-three-weld.vercel.app/)]

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Challenges I Faced](#challenges-i-faced)
- [Testing Approach](#testing-approach)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)

---

## Overview

This was my second major React project, focused on building a functional shopping cart application. The goal was to practice React Router for navigation, manage cart state across multiple components, and work with external APIs to fetch product data.

I built three main pages - a home page, a shop with products from the FakeStore API, and a cart page where users can manage their selected items.

---

## Features

- **Multi-page Navigation**
  - Three distinct pages with React Router
  - Persistent navigation bar across all pages
  - Cart badge showing item count in real-time

- **Product Shop**
  - Products fetched from FakeStore API
  - Individual product cards with images and details
  - Quantity selector with increment/decrement buttons
  - Manual input for precise quantity selection
  - Add to cart functionality

- **Shopping Cart**
  - View all items added to cart
  - Adjust quantities for each item
  - Remove items from cart
  - Real-time total calculation
  - Persistent cart state across page navigation

---

## Technologies Used

- **React.js** - Component-based UI
- **React Router** - Client-side routing
- **React Testing Library** - Component testing
- **FakeStore API** - Product data
- **Vite** - Build tool
- **Vercel** - Deployment
- **Tailwindcss** - CSS Framework
- **react-icons** - Icon library

---

## Installation

```bash
# Clone the repository
git clone https://github.com/rohitjames77/react-shopping-cart.git

# Navigate to project directory
cd shopping-cart

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```
---

### Shop Page
This is where most of the functionality lives. Each product is displayed as a card with:
- Product image and title
- Price information
- Quantity controls (buttons and manual input)
- Add to cart button

I fetch the products from the FakeStore API when the page loads, which gave me good practice with useEffect and async operations.

### Cart Page
Users can review their selections here. I implemented:
- List of all cart items with quantities
- Ability to increase/decrease quantities
- Remove items completely
- Running total of the cart

The tricky part was keeping everything synchronized - when you change a quantity in the cart, the navbar badge needs to update immediately.

---

## Challenges I Faced

**Managing Cart State Across Pages**
The cart needs to be accessible from multiple pages, which meant lifting state up and passing it through React Router. I used context to avoid prop drilling, though it took me a while to set up correctly.

**Handling Route Configuration for Deployment**
My routes worked fine locally but broke when I deployed. I learned that SPAs need special configuration to handle client-side routing. Adding the `_redirects` file for Netlify solved this, but it wasn't immediately obvious why it was needed.

**Quantity Input Validation**
Users can manually type quantities, which means they could enter negative numbers or non-numeric values. I had to add validation logic to handle edge cases and keep the cart state clean.

**API Loading States**
The FakeStore API takes a moment to respond, so I needed to handle loading states properly. Users shouldn't see an empty page or broken layout while data is being fetched.

---

## Testing Approach

I tested the application using React Testing Library, focusing on:

- Component rendering with correct props
- User interactions (clicking buttons, typing in inputs)
- Cart state updates when items are added/removed
- Quantity adjustments are working correctly
- Navigation between pages
---

## What I Learned

**React Router configuration**
Understanding how routing works in SPAs versus traditional multi-page apps was important. The deployment configuration files made more sense once I understood what problem they were solving.

**State management is complex**
Even a simple shopping cart involves coordinating state across multiple components. This project showed me why state management libraries are used for larger applications.

**API integration**
Handling loading states, errors, and keeping the UI responsive while waiting for data is just as important as the fetch itself.

**Testing**
When I wanted to reorganize my components, having tests gave me confidence that I wasn't breaking existing functionality.

**Props validation**
Cleaning up those ESLint warnings about missing prop validation forced me to think more carefully about component interfaces.

**Deployment configuration varies by platform**
Each hosting service handles SPAs differently. Understanding why these configurations are needed helped me debug issues faster.

---

## Future Improvements

- Add product filtering and sorting options
- Add product detail pages with more information
- Include user authentication
- Add wishlist functionality

---

## Backend Development (In Progress)
  
**I'm planning to move beyond the FakeStore API and build a proper backend for this application using Ruby on Rails**

**Database:** Setting up PostgreSQL to store products, user data, and order history.
**Backend Framework:** Building an MVC architecture with Ruby on Rails to handle business logic and data flow.
**User Authentication:** Implementing secure user authentication with Devise.
**User Accounts:** Allow users to create accounts, save their carts, and view order history.
**Admin Panel:** Create an interface for managing products and inventory.

---

## Contact

**Rohit James**

- GitHub: [@rohitjames77](https://github.com/rohitjames77)
- LinkedIn:(www.linkedin.com/in/rohitjames77)

---
