# 🥤 OJS Nutrition App

OJS Nutrition is a modern **Next.js + TypeScript** powered e-commerce platform designed for selling high-quality nutrition and supplement products.  
The project features **product catalog**, shopping cart, user authentication, order management, product reviews, and comprehensive account management all built with a modern, responsive design using **Shadcn/UI** components.

---

## 🚀 Live Demo & Source Code

🔗 **Live Demo:** [https://ojs-nutrition-app.vercel.app/](https://ojs-nutrition-app.vercel.app/)

💻 **GitHub Repository:** [https://github.com/aniltanriverdiler/ojs-nutrition-app.git](https://github.com/aniltanriverdiler/ojs-nutrition-app.git)

---

## ✨ Features

### 🛍️ E-Commerce System
- ✅ **Product Catalog:** Browse products by categories (Protein, Vitamin, Health, Sports Nutrition, Food)
- ✅ **Product Details:** Comprehensive product pages with variants, pricing, and specifications
- ✅ **Product Search:** Real-time search functionality to find products quickly
- ✅ **Product Filtering:** Filter products by category, price, and other criteria
- ✅ **Recently Viewed Products:** Track and display recently viewed items
- ✅ **Best Sellers:** Featured best-selling products section
- ✅ **Product Reviews:** Customer reviews and ratings system
- ✅ **Rate Statistics:** Detailed rating breakdowns for products

### 🛒 Shopping Cart & Checkout
- ✅ **Shopping Cart:** Add, remove, and update cart items
- ✅ **Cart Persistence:** Cart data persists across sessions
- ✅ **Checkout Process:** Streamlined multi-step checkout flow
- ✅ **Order Summary:** Detailed order review before purchase
- ✅ **Address Management:** Save and manage delivery addresses

### 👤 User System
- 🔑 **Authentication:** Secure user registration and login
- 📂 **User Profile:** Manage personal information and preferences
- 📦 **Order History:** View past orders and order details
- 📍 **Address Management:** Add, edit, and delete delivery addresses
- 🔐 **Account Settings:** Update profile information and preferences

### 📊 Product Management
- 🏷️ **Categories:** Organized product categories (Protein, Vitamin, Health, Sports Nutrition, Food)
- 🎯 **Product Variants:** Multiple variants with different sizes, aromas, and pricing
- 💰 **Dynamic Pricing:** Discounted prices, profit calculations, and price per servings
- 📸 **Product Images:** High-quality product images with proper media handling
- 📝 **Product Descriptions:** Detailed product information, usage instructions, and nutritional content

### 🎨 User Experience
- 📱 **Responsive Design:** Fully responsive layout for desktop, tablet, and mobile
- 🌗 **Dark/Light Mode:** Theme support with system preference detection
- 🔍 **Advanced Search:** Search products with real-time results
- ⚡ **Fast Navigation:** Optimized routing and page transitions
- 🎭 **Modern UI:** Beautiful interface built with **Shadcn/UI** components
- ✨ **Smooth Animations:** Engaging animations and transitions
- 🔔 **Toast Notifications:** User-friendly notifications for actions

### 📄 Content Pages
- 🏠 **Home Page:** Hero section, featured categories, and best sellers
- 📖 **About Page:** Company information and customer reviews
- 📞 **Contact Page:** Contact form and company information
- ❓ **FAQ Page:** Frequently asked questions section
- 📦 **Product Pages:** Category listings and individual product details

---

## 📂 Project Structure

```
ojs-nutrition-app/
├─ frontend/                 # Next.js frontend application
│  ├─ public/                # Static assets (images, icons, videos)
│  │   ├─ icons/             # App icons and logos
│  │   └─ images/            # Product and category images
│  ├─ src/
│  │  ├─ app/                # Next.js app router pages
│  │  │  ├─ (routes)/        # Main application routes
│  │  │  │  ├─ (home)/       # Home page
│  │  │  │  ├─ about/        # About page
│  │  │  │  ├─ account/      # User account pages
│  │  │  │  ├─ auth/         # Authentication pages
│  │  │  │  ├─ contact/     # Contact page
│  │  │  │  ├─ faq/          # FAQ page
│  │  │  │  └─ products/     # Product listing and detail pages
│  │  │  ├─ api/             # Next.js API routes (proxy to backend)
│  │  │  │  ├─ account/      # Account API endpoints
│  │  │  │  ├─ auth/         # Authentication API endpoints
│  │  │  │  ├─ cart/         # Cart API endpoints
│  │  │  │  └─ orders/       # Order API endpoints
│  │  │  └─ checkout/        # Checkout pages
│  │  ├─ components/         # Reusable React components
│  │  │  ├─ ui/              # Shadcn UI components
│  │  │  ├─ layout/          # Layout components (Navbar, Footer, etc.)
│  │  │  ├─ shared/          # Shared components (ProductCard, ReviewCard, etc.)
│  │  │  └─ animations/     # Animation components
│  │  ├─ features/           # Feature-based components
│  │  │  ├─ about/           # About page components
│  │  │  ├─ account/         # Account management components
│  │  │  ├─ auth/            # Authentication components
│  │  │  ├─ cart/            # Shopping cart components
│  │  │  ├─ checkout/        # Checkout flow components
│  │  │  ├─ contact/         # Contact form components
│  │  │  ├─ faq/             # FAQ components
│  │  │  ├─ home/            # Home page components
│  │  │  └─ products/        # Product-related components
│  │  ├─ lib/                # Utility libraries
│  │  │  ├─ api/             # API client functions
│  │  │  ├─ constants/       # App constants
│  │  │  └─ utils/            # Utility functions
│  │  ├─ store/              # Zustand state management
│  │  │  ├─ cartStore.ts     # Shopping cart state
│  │  │  ├─ checkoutStore.ts # Checkout state
│  │  │  ├─ productStore.ts  # Product state
│  │  │  └─ userStore.ts     # User authentication state
│  │  ├─ types/              # TypeScript type definitions
│  │  └─ hooks/              # Custom React hooks
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ next.config.ts
│  └─ tailwind.config.ts
└─ README.md
```

---

## 🛠️ Installation & Run

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/aniltanriverdiler/ojs-nutrition-app.git
cd ojs-nutrition-app
```

2️⃣ **Navigate to frontend directory:**
```bash
cd frontend
```

3️⃣ **Install dependencies:**
```bash
npm install
```

4️⃣ **Set up environment variables:**
Create a `.env.local` file in the `frontend` directory:
```env
NEXT_PUBLIC_API_URL=https://your-api-url.com/api/v1
NEXT_PUBLIC_API_KEY=your-api-key
```

5️⃣ **Run development server:**
```bash
npm run dev
```

6️⃣ **Open the app in your browser:**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🏗️ Tech Stack

### Frontend
- ⚛️ **Next.js 16** – React framework with App Router
- 🟦 **TypeScript** – Type-safe development
- 🎨 **Tailwind CSS 4** – Utility-first CSS framework
- 🧩 **Shadcn/UI** – Beautiful UI components built on Radix UI
- 🗂️ **Zustand** – Lightweight state management
- 📊 **React Hook Form** – Form handling and validation
- 🔔 **Sonner** – Toast notifications
- 🎬 **Motion (Framer Motion)** – Animation library
- 🎨 **Lucide React** – Icon library
- 📱 **Swiper** – Touch slider component

### Backend Integration
- 🔌 **RESTful API** – Backend API integration
- 🔐 **JWT Authentication** – Secure user authentication
- 🍪 **Cookie-based Sessions** – Session management

### Deployment
- ☁️ **Vercel** – Hosting and deployment platform

---

## 🎮 How to Use

1️⃣ **Browse Products** – Navigate through categories or search for specific products  
2️⃣ **View Product Details** – Click on any product to see detailed information, variants, and reviews  
3️⃣ **Add to Cart** – Add products to your shopping cart (requires login)  
4️⃣ **Manage Cart** – Update quantities or remove items from your cart  
5️⃣ **Checkout** – Complete your purchase with a streamlined checkout process  
6️⃣ **Track Orders** – View your order history in the account section  
7️⃣ **Manage Profile** – Update your personal information and delivery addresses  
8️⃣ **Leave Reviews** – Share your experience by rating and reviewing products  

---

## 🚀 Key Pages

- **🏠 Home** – Landing page with hero section, categories, and best sellers
- **🛍️ Products** – Product catalog with filtering and search
- **📦 Product Detail** – Individual product pages with variants and reviews
- **🛒 Cart** – Shopping cart management
- **💳 Checkout** – Order placement and payment process
- **👤 Account** – User profile, orders, and address management
- **🔐 Auth** – Login and registration pages
- **📖 About** – Company information and customer reviews
- **📞 Contact** – Contact form and company details
- **❓ FAQ** – Frequently asked questions

---

## 📌 Technical Notes

- **Full-Stack Application** – Frontend built with Next.js, backend API integration
- **Server-Side Rendering** – Optimized SEO and performance with SSR
- **Responsive Design** – Mobile-first approach, works on all devices
- **Type Safety** – Full TypeScript implementation for better code quality
- **State Management** – Zustand for global state, React hooks for local state
- **API Integration** – RESTful API calls with proper error handling
- **Authentication** – Secure JWT-based authentication with cookie storage
- **Performance Optimized** – Code splitting, image optimization, and lazy loading
- **Accessibility** – Keyboard navigation and screen reader support

---

## 🔧 Environment Variables

Create a `.env.local` file in the `frontend` directory with the following variables:

```env
# Backend API Configuration
NEXT_PUBLIC_API_URL=https://your-api-url.com/api/v1
NEXT_PUBLIC_API_KEY=your-api-key
```

---

## 🤝 Contributing

💡 Have an idea or found a bug?

- 🍴 **Fork the repository**
- 🌿 **Create a feature branch** (`git checkout -b feature/amazing-feature`)
- 💻 **Make your changes** and test thoroughly
- 📝 **Commit your changes** (`git commit -m 'Add amazing feature'`)
- 🚀 **Push to the branch** (`git push origin feature/amazing-feature`)
- 🔄 **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Add TypeScript types for all new code
- Ensure responsive design for all screen sizes
- Test API integrations thoroughly
- Update documentation as needed

🚀 **Let's improve OJS Nutrition together!**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** – For the incredible React framework
- **Shadcn/UI** – For the beautiful component library
- **Tailwind CSS** – For the utility-first CSS framework
- **Radix UI** – For accessible UI primitives
- **Vercel** – For hosting and deployment platform
- **All Contributors** – Who help make this project better

---

## 📧 Contact

For questions or support, please visit the [Contact Page](https://ojs-nutrition-app.vercel.app/contact) or open an issue on GitHub.

---

**Made with ❤️ for nutrition enthusiasts**
