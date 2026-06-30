# GreenKart - Vegetables & Fruits E-Commerce Application Test Plan

## Application Overview

GreenKart is an e-commerce application for purchasing vegetables and fruits online. The application provides users with the ability to browse a catalog of fresh produce items, search for specific products, adjust quantities, add items to a shopping cart, and view promotional deals. The application features a product grid layout displaying individual items with images, prices, quantity controls, and an "Add to Cart" button. Users can also access Top Deals, search functionality, and view cart information including item count and total price in the header.

## Test Scenarios

### 1. Home Page & Product Catalog

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify home page loads with all products displayed

**File:** `tests/home-page/verify-products-display.spec.ts`

**Steps:**
  1. Navigate to the GreenKart home page (https://rahulshettyacademy.com/seleniumPractise/#/)
    - expect: Page title shows 'GreenKart - veg and fruits kart'
    - expect: Header with logo 'GREENKART' is visible
    - expect: Search box is visible in the header
    - expect: Cart icon is visible with 'Items: 0' and 'Price: 0'
    - expect: Product grid is displayed with vegetables and fruits
    - expect: All 30 products are visible on the page
  2. Scroll through the entire product list
    - expect: All product cards load properly with images
    - expect: Each product displays: product name, price, quantity controls, and 'ADD TO CART' button
    - expect: Products include vegetables (Brocolli, Cauliflower, Cucumber, Beetroot, etc.) and fruits (Apple, Banana, Grapes, Mango, etc.)

#### 1.2. Verify product information is displayed correctly

**File:** `tests/home-page/verify-product-info.spec.ts`

**Steps:**
  1. Observe the details of any product card (e.g., Brocolli - 1 Kg)
    - expect: Product image is clearly visible
    - expect: Product name is displayed (e.g., 'Brocolli - 1 Kg')
    - expect: Price is displayed in rupees (₹)
    - expect: Quantity is displayed as '1' by default
    - expect: Increment (+) and Decrement (-) buttons are visible
    - expect: 'ADD TO CART' button is clearly visible and enabled
  2. Check pricing for multiple products
    - expect: Brocolli: ₹ 120
    - expect: Cauliflower: ₹ 60
    - expect: Cucumber: ₹ 48
    - expect: Tomato: ₹ 16
    - expect: Apple: ₹ 72

### 2. Search Functionality

**Seed:** `tests/seed.spec.ts`

#### 2.1. Search for a specific product by name

**File:** `tests/search/search-by-product-name.spec.ts`

**Steps:**
  1. Click on the search box in the header
    - expect: Search box becomes active and ready for input
  2. Type 'tomato' in the search box
    - expect: Product list filters to show only 'Tomato - 1 Kg'
    - expect: Other products are hidden/removed from view
    - expect: Tomato product card is displayed with price ₹ 16
  3. Clear the search box and type 'carrot'
    - expect: Product list filters to show only 'Carrot - 1 Kg'
    - expect: Carrot product card is displayed with price ₹ 56

#### 2.2. Search with partial product name

**File:** `tests/search/search-partial-name.spec.ts`

**Steps:**
  1. Click on search box and type 'br'
    - expect: Products matching 'br' are filtered
    - expect: Brocolli and Brinjal are shown in results

#### 2.3. Search for non-existent product

**File:** `tests/search/search-non-existent.spec.ts`

**Steps:**
  1. Click on search box and type a product name that doesn't exist (e.g., 'xyz')
    - expect: No products are displayed
    - expect: Search box still contains the typed text
    - expect: Page shows empty product grid

#### 2.4. Clear search results

**File:** `tests/search/clear-search.spec.ts`

**Steps:**
  1. Enter a search term and then clear the search box completely
    - expect: All 30 products are displayed again
    - expect: Search box is empty

### 3. Shopping Cart Operations

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add single product to cart

**File:** `tests/cart/add-single-product.spec.ts`

**Steps:**
  1. On home page, click 'ADD TO CART' button for Brocolli product
    - expect: Product is added to cart
    - expect: Cart header updates to show 'Items: 1'
    - expect: Cart header updates to show 'Price: 120'
    - expect: Product card remains on the page

#### 3.2. Add multiple different products to cart

**File:** `tests/cart/add-multiple-products.spec.ts`

**Steps:**
  1. Click 'ADD TO CART' for Brocolli (₹120), then Cauliflower (₹60), then Cucumber (₹48)
    - expect: After adding first product: Items: 1, Price: 120
    - expect: After adding second product: Items: 2, Price: 180
    - expect: After adding third product: Items: 3, Price: 228

#### 3.3. Increase product quantity before adding to cart

**File:** `tests/cart/increase-quantity-before-add.spec.ts`

**Steps:**
  1. Click the increment (+) button on Brocolli to increase quantity to 3
    - expect: Quantity field shows '3'
    - expect: Other products remain at quantity '1'
  2. Click 'ADD TO CART' for the Brocolli with quantity 3
    - expect: Cart items increase by 3
    - expect: Price calculation includes: 120 × 3 = 360 rupees
    - expect: Cart header shows updated Items and Price values

#### 3.4. Decrease product quantity using decrement button

**File:** `tests/cart/decrease-quantity.spec.ts`

**Steps:**
  1. Click the increment (+) button on Cauliflower multiple times to set quantity to 5
    - expect: Quantity field shows '5'
  2. Click the decrement (-) button twice to reduce quantity to 3
    - expect: Quantity field shows '3'

#### 3.5. Verify cart header displays correct totals

**File:** `tests/cart/verify-cart-header.spec.ts`

**Steps:**
  1. Add products to cart: Tomato (₹16) quantity 2, Carrot (₹56) quantity 1, Beans (₹82) quantity 1
    - expect: Items count: 4 (2+1+1)
    - expect: Price total: ₹ 170 (16×2 + 56 + 82)
    - expect: Cart header shows: 'Items: 4' and 'Price: 170'

### 4. Quantity Controls

**Seed:** `tests/seed.spec.ts`

#### 4.1. Increment quantity button functionality

**File:** `tests/quantity/increment-button.spec.ts`

**Steps:**
  1. Observe the Brocolli product card quantity controls
    - expect: Quantity field shows initial value of '1'
    - expect: Increment button (+) is visible and clickable
  2. Click increment button once
    - expect: Quantity increases to '2'
  3. Click increment button 3 more times
    - expect: Quantity increases to '3', then '4', then '5'
    - expect: Quantity controls respond to each click

#### 4.2. Decrement quantity button functionality

**File:** `tests/quantity/decrement-button.spec.ts`

**Steps:**
  1. Set a product quantity to 3 using increment button
    - expect: Quantity field shows '3'
  2. Click decrement button (-) once
    - expect: Quantity decreases to '2'
  3. Click decrement button again
    - expect: Quantity decreases to '1'

#### 4.3. Minimum quantity boundary condition

**File:** `tests/quantity/minimum-quantity.spec.ts`

**Steps:**
  1. Set product quantity to 1 and click decrement button
    - expect: Quantity remains at '1' (does not go below 1)
    - expect: OR quantity is not set to 0 or negative values

#### 4.4. Large quantity input

**File:** `tests/quantity/large-quantity.spec.ts`

**Steps:**
  1. Click increment button multiple times to increase quantity to 10
    - expect: Quantity field updates properly and shows '10'
    - expect: No errors or page freezes occur
  2. Add this product with quantity 10 to cart
    - expect: Cart calculates correctly: e.g., Brocolli ₹120 × 10 = ₹1200
    - expect: Cart item count increases by 10

### 5. Navigation & Links

**Seed:** `tests/seed.spec.ts`

#### 5.1. Navigate to Top Deals page

**File:** `tests/navigation/top-deals-link.spec.ts`

**Steps:**
  1. Click on 'Top Deals' link in the header navigation
    - expect: Page navigates to Top Deals section
    - expect: URL changes to '#/offers'
    - expect: Page displays a table with discount/offers information
    - expect: Columns include product details and discount information

#### 5.2. Return from Top Deals to home page

**File:** `tests/navigation/back-to-home.spec.ts`

**Steps:**
  1. Click on 'GREENKART' logo or home link
    - expect: Page navigates back to home page
    - expect: Product grid is displayed again
    - expect: All 30 products are visible

#### 5.3. Flight Booking link navigation

**File:** `tests/navigation/flight-booking-link.spec.ts`

**Steps:**
  1. Click on 'Flight Booking' link in the header
    - expect: Page navigates to external flight booking page
    - expect: URL changes to 'https://rahulshettyacademy.com/dropdownsPractise/'
    - expect: OR opens Flight Booking section in new context

#### 5.4. Verify header links remain consistent

**File:** `tests/navigation/header-consistency.spec.ts`

**Steps:**
  1. On home page, verify all header elements are visible
    - expect: GREENKART logo is visible and clickable
    - expect: Search box is visible
    - expect: Top Deals link is visible
    - expect: Flight Booking link is visible
    - expect: Cart icon is visible with item count and price

### 6. Edge Cases & Validation

**Seed:** `tests/seed.spec.ts`

#### 6.1. Page load with empty cart

**File:** `tests/edge-cases/empty-cart-load.spec.ts`

**Steps:**
  1. Load the home page without adding any items to cart
    - expect: Cart header shows 'Items: 0'
    - expect: Cart header shows 'Price: 0'

#### 6.2. Search box accepts various input types

**File:** `tests/edge-cases/search-input-validation.spec.ts`

**Steps:**
  1. Type numbers in search box (e.g., '123')
    - expect: Search box accepts the input
    - expect: Products list filters accordingly (no matches expected)
  2. Type special characters in search box (e.g., '@#$')
    - expect: Search box accepts the input
    - expect: Products list filters accordingly (no matches expected)
  3. Type mixed case search term (e.g., 'TomATo')
    - expect: Search filters products case-insensitively
    - expect: Tomato product is displayed

#### 6.3. Product card display consistency

**File:** `tests/edge-cases/product-display-consistency.spec.ts`

**Steps:**
  1. Scroll through entire product list and check each product card
    - expect: All product cards have consistent layout and styling
    - expect: All cards display image, name, price, quantity controls, and ADD TO CART button
    - expect: No missing or malformed data in product cards

#### 6.4. Rapidly add multiple items to cart

**File:** `tests/edge-cases/rapid-add-to-cart.spec.ts`

**Steps:**
  1. Quickly click 'ADD TO CART' for 5 different products in rapid succession
    - expect: All products are successfully added to cart
    - expect: Cart header correctly shows 'Items: 5'
    - expect: Price calculation is accurate
    - expect: No items are skipped or duplicated

#### 6.5. Page responsiveness after multiple operations

**File:** `tests/edge-cases/page-responsiveness.spec.ts`

**Steps:**
  1. Perform multiple operations: search, add products, adjust quantities, navigate to Top Deals and back
    - expect: Page remains responsive throughout all operations
    - expect: No lag or delays in UI updates
    - expect: All buttons and links respond immediately to clicks

### 7. Header & Layout

**Seed:** `tests/seed.spec.ts`

#### 7.1. Verify header layout and branding

**File:** `tests/header/branding-display.spec.ts`

**Steps:**
  1. Observe the header section of the home page
    - expect: GREENKART logo/text is prominently displayed
    - expect: Logo acts as a clickable link to home page
    - expect: Header is sticky and visible when scrolling (if applicable)

#### 7.2. Verify search box placeholder text

**File:** `tests/header/search-placeholder.spec.ts`

**Steps:**
  1. Look at the search box in the header
    - expect: Search box displays placeholder text 'Search for Vegetables and Fruits'
    - expect: Placeholder disappears when user starts typing

#### 7.3. Verify cart summary display

**File:** `tests/header/cart-summary.spec.ts`

**Steps:**
  1. Observe the cart summary section in the header
    - expect: Cart displays in a table format with Items and Price rows
    - expect: 'Items:' label followed by count (initially 0)
    - expect: 'Price:' label followed by total price (initially 0)
