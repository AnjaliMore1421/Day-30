# Day 30 - Frontend Task 

## Deep Theory

---

## 1. UI System Architecture

UI system architecture defines how the UI is structured and organized for scalability and maintainability.

### Key Points:

- **Component-Based Architecture**
  - UI is divided into reusable components (Button, Card, Navbar, Modal)

- **Layered Structure (Atomic Design)**
  - Atoms (Input, Button)
  - Molecules (Form Group)
  - Organisms (Navbar, Sections)
  - Templates
  - Pages

- **Separation of Concerns**
  - UI, business logic, and API logic are separated

- **State Management Integration**
  - Local state (useState)
  - Global state (Redux, Zustand)

- **Scalability**
  - Supports large applications and team collaboration

---

## 2. Reusability Patterns for Design Systems

Reusability helps reduce code duplication and improves efficiency.

### Key Patterns:

- **Reusable Components**
  - Use props for flexibility

- **Composition Pattern**
  - Combine smaller components into larger ones

- **Props-Based Configuration**
  - Dynamic UI instead of hardcoded values

- **Custom Hooks**
  - Reuse logic across components

- **Design Tokens**
  - Store reusable values like colors, spacing, fonts

- **Utility-Based Styling**
  - Use Tailwind or utility classes

---

## 3. Typography & Spacing Scale

Maintains consistency and readability in UI.

### Typography:

- **Font Sizes**
  - Small: 12px
  - Base: 16px
  - Heading: 24px+
  - Large: 32px+

- **Font Weights**
  - 300 (Light)
  - 400 (Regular)
  - 500 (Medium)
  - 700 (Bold)

- **Line Height**
  - Typically 1.4 to 1.6

- **Font Family**
  - Consistent across application

---

### Spacing:

- **Use Scale System**
  - Based on 4px or 8px

- **Example (8px Scale)**
  - 8px, 16px, 24px, 32px, 40px

- **Consistent Margin & Padding**
  - Avoid random spacing

- **Layout Spacing**
  - Maintain gaps between sections and elements

---

## 4. Color Palette & Theme Strategy

Defines consistent color usage across the UI.

### Color Palette:

- **Primary Color**
  - Main brand color

- **Secondary Color**
  - Supporting elements

- **Neutral Colors**
  - Text, background, borders

- **Semantic Colors**
  - Success (Green)
  - Error (Red)
  - Warning (Yellow)
  - Info (Blue)

---

### Theme Strategy:

- **Light & Dark Mode**
  - Separate themes

- **Design Tokens**
  ```css
  --primary-color: #4CAF50;
  --text-color: #333;

Dynamic Theming

theme = "light" | "dark";

Consistency
Same colors across UI components
