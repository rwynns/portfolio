# NeoBrutalism Style Guide
## Panduan Desain Landing Page Portfolio

---

## 🎨 Overview

NeoBrutalism adalah gaya desain yang menggabungkan kesederhanaan brutalism klasik dengan warna-warna cerah dan elemen playful. Style ini menonjolkan border tebal, bayangan yang jelas, dan tata letak yang bold namun fungsional.

### Karakteristik Utama
- **Bold borders** (garis tepi tebal hitam 3-5px)
- **Flat colors** (warna solid tanpa gradien)
- **Hard shadows** (bayangan tegas, bukan blur)
- **Geometric shapes** (bentuk-bentuk geometris sederhana)
- **Playful illustrations** (ilustrasi kartun sederhana)
- **High contrast** (kontras tinggi untuk readability)

---

## 🎨 Color Palette

### Primary Colors
```
Pink Magenta:    #E94B8C | rgb(233, 75, 140)
Teal/Cyan:       #20B2AA | rgb(32, 178, 170)
Purple:          #9D4EDD | rgb(157, 78, 221)
Yellow:          #FFD60A | rgb(255, 214, 10)
```

### Secondary Colors
```
Orange:          #FF9800 | rgb(255, 152, 0)
Coral Red:       #FF6B6B | rgb(255, 107, 107)
Light Yellow:    #FFF3B0 | rgb(255, 243, 176)
Mint Green:      #7FFFD4 | rgb(127, 255, 212)
Lime:            #00FF00 | rgb(0, 255, 0)
```

### Neutrals
```
Black:           #000000 | rgb(0, 0, 0)
Off-White:       #FFF8F0 | rgb(255, 248, 240)
Cream:           #F5F5DC | rgb(245, 245, 220)
Light Gray:      #F0F0F0 | rgb(240, 240, 240)
```

### Color Usage Guidelines
- **Background**: Cream, Off-White, atau Light Gray
- **Cards/Components**: Pink, Yellow, Teal, Purple
- **Borders**: Selalu Black (#000000)
- **Text**: Black untuk semua text (high contrast)
- **Accents**: Gunakan warna cerah untuk highlight dan CTA buttons

---

## 📝 Typography

### Font Families

#### Headings
```css
font-family: 'Space Grotesk', 'Poppins', 'Montserrat', sans-serif;
font-weight: 700-900 (Bold to Black);
```

#### Body Text
```css
font-family: 'Inter', 'DM Sans', 'Work Sans', sans-serif;
font-weight: 400-600 (Regular to Semibold);
```

#### Special/Display Text
```css
font-family: 'Fredoka', 'Nunito', 'Comic Neue', cursive;
font-weight: 700;
```

### Font Sizes

```css
/* Headings */
h1: 48-72px (3-4.5rem)
h2: 36-48px (2.25-3rem)
h3: 24-32px (1.5-2rem)
h4: 20-24px (1.25-1.5rem)

/* Body */
body: 16-18px (1-1.125rem)
small: 14px (0.875rem)
```

### Typography Rules
- **Line Height**: 1.4-1.6 untuk body text
- **Letter Spacing**: -0.02em untuk headings besar
- **Text Transform**: Gunakan uppercase untuk labels/tags
- **Text Color**: Selalu hitam (#000000) untuk maksimal contrast
- **Bold Usage**: Gunakan bold untuk emphasis, bukan italic

---

## 🔲 Components

### 1. Cards

```css
.card {
  background: [bright color];
  border: 4px solid #000000;
  border-radius: 24px;
  box-shadow: 8px 8px 0px #000000;
  padding: 32px;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0px #000000;
}
```

**Variasi Cards:**
- **Service Card**: Icon + Title + Description + CTA
- **Project Card**: Image + Title + Tags
- **Profile Card**: Avatar + Name + Bio + Stats

### 2. Buttons

```css
/* Primary Button */
.btn-primary {
  background: #FFD60A;
  color: #000000;
  border: 3px solid #000000;
  border-radius: 50px;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 18px;
  box-shadow: 4px 4px 0px #000000;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #000000;
}

.btn-primary:active {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #000000;
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #000000;
  border: 3px solid #000000;
  /* rest same as primary */
}
```

**Button States:**
- Default: Yellow background, black shadow
- Hover: Lift up (transform)
- Active: Press down
- Disabled: Grayscale + reduced opacity

### 3. Input Fields

```css
.input {
  background: #FFFFFF;
  border: 3px solid #000000;
  border-radius: 12px;
  padding: 16px 20px;
  font-size: 16px;
  box-shadow: 4px 4px 0px #000000;
}

.input:focus {
  outline: none;
  border-color: #E94B8C;
  box-shadow: 4px 4px 0px #E94B8C;
}
```

### 4. Icons & Illustrations

**Style:**
- Line weight: 3-4px
- Style: Cartoon/doodle, minimalis
- Colors: Solid fills, no gradients
- Border: Black outline pada semua shapes

**Icon Examples:**
- Lightbulb (ideas)
- Target (goals)
- Rocket (growth)
- Monitor/Screen (design)
- Dribbble logo
- Figma logo

### 5. Badges/Tags

```css
.badge {
  display: inline-block;
  background: #20B2AA;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 2px 2px 0px #000000;
}
```

### 6. Navigation

```css
.navbar {
  background: transparent or #FFF8F0;
  border-bottom: 4px solid #000000;
  padding: 20px 40px;
}

.nav-link {
  color: #000000;
  font-weight: 600;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.nav-link:hover {
  background: #FFD60A;
}
```

---

## 📐 Layout Guidelines

### Grid System
- **Container Max Width**: 1280px
- **Padding**: 40-80px horizontal
- **Gap**: 40-60px between sections

### Spacing Scale
```
xs: 8px
sm: 16px
md: 24px
lg: 40px
xl: 64px
xxl: 96px
```

### Section Structure

#### Hero Section
```
- Full viewport height (100vh) atau min 600px
- Large heading (h1)
- Subheading/tagline
- CTA button(s)
- Visual element (photo/illustration)
- Playful decorative elements
```

#### Services/What I Do Section
```
- Section heading
- 3-column grid (desktop) / 1-column (mobile)
- Icon + Title + Description per card
- CTA per card
```

#### Portfolio/Work Section
```
- Section heading
- Grid layout (2-3 columns)
- Project cards with images
- Hover effects
- Tags/categories
```

#### Contact/CTA Section
```
- Bold heading
- Simple form or contact methods
- Social media links
- CTA button
```

---

## 🎭 Design Elements

### Decorative Blobs
```css
.blob {
  position: absolute;
  background: [bright color];
  border: 4px solid #000000;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  width: 200px;
  height: 200px;
  z-index: -1;
}
```

**Penggunaan:**
- Corner decorations
- Section dividers
- Background accents

### Arrows & Pointers
- Hand-drawn style
- 3-4px line weight
- Black outlines
- Digunakan untuk mengarahkan attention

### Geometric Shapes
- Circles, squares, triangles
- Bold borders (4px)
- Solid fills
- Digunakan sebagai containers atau decorations

---

## 🖼️ Images & Media

### Image Treatment
```css
.img-neobrutalism {
  border: 4px solid #000000;
  border-radius: 24px;
  box-shadow: 8px 8px 0px #000000;
}
```

**Guidelines:**
- Semua images harus punya border hitam tebal
- Border-radius: 16-32px
- Shadow: Hard shadow, no blur
- Optional: Colorful background di belakang image

### Avatar/Profile Photo
- Hexagonal atau rounded square shape
- 4px black border
- Colorful background (pink, yellow, teal)
- Size: 300-400px untuk hero section

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
xs: 0-575px
sm: 576-767px
md: 768-991px
lg: 992-1199px
xl: 1200px+
```

### Mobile Adjustments
- Stack cards vertically
- Reduce font sizes (20-30%)
- Reduce padding/margins (50%)
- Simplify decorative elements
- Hamburger menu untuk navigation

---

## ✨ Animations & Interactions

### Hover Effects
```css
/* Lift and enhance shadow */
.card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 12px 12px 0px #000000;
}

/* Color change */
.button:hover {
  background: #FF9800;
}
```

### Transitions
```css
transition: all 0.2s ease-in-out;
```

**Prinsip:**
- Fast transitions (0.2-0.3s)
- Easing: ease, ease-in-out
- Subtle movements
- No complex animations

---

## 🎯 Landing Page Structure

### Recommended Sections

1. **Hero Section**
   - Headline besar
   - Subheadline
   - CTA button
   - Profile image/illustration
   - Decorative elements

2. **About/Introduction**
   - Short bio
   - Key skills atau services
   - Personality showcase

3. **Services/What I Do**
   - 3 main services
   - Icon + description per service
   - CTA untuk masing-masing

4. **Portfolio/Work Showcase**
   - Featured projects (4-6)
   - Project cards dengan thumbnails
   - Tags/categories
   - "View All" CTA

5. **Testimonials (Optional)**
   - Client quotes
   - Card layout

6. **Contact/CTA**
   - Contact form atau methods
   - Social media links
   - Final CTA

7. **Footer**
   - Links
   - Copyright
   - Social icons

---

## 💡 Best Practices

### Do's ✅
- Gunakan warna cerah dan kontras tinggi
- Border tebal pada semua components
- Hard shadows (no blur)
- Bold typography
- Playful illustrations
- Simple geometric shapes
- High readability (black text on light bg)
- Consistent spacing
- Clear visual hierarchy

### Don'ts ❌
- Jangan gunakan gradients
- Jangan gunakan blur/soft shadows
- Jangan gunakan terlalu banyak warna sekaligus
- Jangan gunakan typography yang terlalu kompleks
- Jangan membuat layout yang terlalu crowded
- Jangan gunakan low contrast text
- Jangan lupakan accessibility

---

## 🔧 Tech Stack Recommendations

### CSS Framework
- **Tailwind CSS** (ideal untuk NeoBrutalism)
- Custom CSS dengan utility classes

### Fonts
- Google Fonts: Space Grotesk, Inter, Fredoka
- Font Awesome atau Feather Icons untuk icons

### Libraries
- Framer Motion (untuk animations)
- React (jika menggunakan framework)
- GSAP (untuk advanced animations)

---

## 📚 Resources & Inspiration

### Design Inspiration
- Dribbble (search: "neobrutalism")
- Awwwards
- Behance
- Gumroad creator pages

### Similar Styles
- Neo-brutalism
- Flat design 2.0
- Memphis design
- Y2K aesthetic

---

## 🎨 Example Color Combinations

### Combo 1: Energetic
```
Background: #FFF8F0
Primary: #FFD60A (Yellow)
Secondary: #E94B8C (Pink)
Accent: #20B2AA (Teal)
```

### Combo 2: Playful
```
Background: #F0F0F0
Primary: #9D4EDD (Purple)
Secondary: #7FFFD4 (Mint)
Accent: #FF9800 (Orange)
```

### Combo 3: Bold
```
Background: #FFFFFF
Primary: #FF6B6B (Coral)
Secondary: #FFD60A (Yellow)
Accent: #20B2AA (Teal)
```

---

## 🚀 Quick Start Checklist

- [ ] Pilih color palette (2-3 main colors)
- [ ] Set up typography (2 fonts max)
- [ ] Create reusable components (buttons, cards, inputs)
- [ ] Apply borders (3-4px) ke semua elements
- [ ] Add hard shadows (no blur)
- [ ] Test contrast ratios (WCAG AA minimum)
- [ ] Add playful illustrations/icons
- [ ] Implement hover states
- [ ] Test responsive design
- [ ] Add decorative elements

---

## 📝 Notes

**File ini adalah style guide comprehensive untuk membangun landing page portfolio dengan style NeoBrutalism. Gunakan sebagai referensi untuk memastikan consistency dalam desain.**

**Last Updated:** November 2025
**Version:** 1.0

---

Selamat mendesain! 🎨✨
