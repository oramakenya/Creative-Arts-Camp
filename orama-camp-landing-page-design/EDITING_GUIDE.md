# ORAMA Creative Arts Camp - Content Editing Guide

## How to Edit Website Content

All text content on the ORAMA Creative Arts Camp landing page is centralized in a single configuration file for easy editing.

### Location
Edit the file: `src/config/siteContent.ts`

### What You Can Edit

#### 1. Hero Section (`hero`)
- **badge**: The top badge text (e.g., "June 2026 · Hidden Gardens, Karen · Ages 7–16")
- **title**: Main headline (e.g., "The Garden of Creativity")
- **subtitle**: Description text below the title
- **tracks**: The three arts disciplines (Performing Arts, Visual Arts, Literary Arts)

#### 2. About Section (`about`)
- **subtitle, title, description**: Section header content
- **mission, vision, why**: Three content blocks with title and text
- **stats**: Four stat cards (value and label)
- **location**: When, Where, and Culmination information

#### 3. Program Schedule (`program`)
- **subtitle, title, description**: Section header
- **days**: Array of 4 days, each with:
  - `day`: Day number (1-4)
  - `title`: Day title (e.g., "Roots & Discovery")
  - `theme`: Day theme
  - `color`: Gradient color for the day badge
  - `activities`: Array of activities with time and description

#### 4. Showcase Section (`showcase`)
- **badge, title, description**: Section header
- **features**: Six feature cards for the showcase
- **invitation**: Invitation banner content

#### 5. Safety Section (`safety`)
- **badge, title, description**: Section header
- **features**: Six safety feature cards
- **trustBanner**: Trust message banner
- **stats**: Three stat cards (ratio, background check, communication)

#### 6. Testimonials (`testimonials`)
- **subtitle, title**: Section header
- **items**: Array of testimonial quotes with name and role

#### 7. Parents Section (`parents`)
- **subtitle, title, description**: Section header
- **whatsIncluded**: Six items included in the fee
- **paymentPlans**: Three payment plan options
- **faqs**: FAQ questions and answers

#### 8. Volunteers Section (`volunteers`)
- **subtitle, title, description**: Section header
- **keyInfo**: Three key info cards (time, location, requirements)
- **roles**: Four volunteer role descriptions
- **benefits**: List of volunteer benefits

#### 9. Donors Section (`donors`)
- **subtitle, title, description**: Section header
- **stats**: Four impact stat cards
- **tiers**: Three sponsorship tiers (Gold, Silver, Art Supporter)
- **transparency**: Financial breakdown information

#### 10. Footer (`footer`)
- **cta**: Call-to-action banner content
- **description**: Brand description
- **policies**: List of policy documents
- **contact**: Email, phone, address
- **copyright, tagline**: Footer text

### Editing Instructions

1. Open `src/config/siteContent.ts` in a text editor
2. Find the section you want to edit
3. Modify the text values (keep the quotes around text)
4. Save the file
5. Rebuild the project with `npm run build`

### Example: Changing the Camp Title

```typescript
hero: {
  badge: 'June 2026 · Hidden Gardens, Karen · Ages 7–16',
  title: 'The Garden of Creativity', // ← Change this
  subtitle: 'A 4-day immersive arts residency...',
  // ...
}
```

### Example: Adding a New FAQ

```typescript
faqs: [
  { q: 'What age groups are accepted?', a: 'Children aged 7–16...' },
  { q: 'Does my child need prior arts experience?', a: 'Not at all!...' },
  // Add a new FAQ:
  { q: 'Your new question?', a: 'Your answer here.' },
],
```

### Example: Updating Payment Plans

```typescript
paymentPlans: [
  {
    name: 'Full Payment',
    price: '12,000', // ← Change price
    description: 'Pay in full...',
    features: ['Immediate confirmation', ...],
    highlight: false,
  },
  // ...
],
```

### Notes

- **Do not change the structure** (keep the same keys and nesting)
- **Keep quotes** around all text values
- **Keep commas** between items in arrays
- **Numbers** (like prices) can be without quotes or with quotes - both work
- **Boolean values** (`true`/`false`) should not have quotes

### Rebuilding After Changes

After editing the content file, rebuild the project:

```bash
npm run build
```

The updated `dist/index.html` file will contain all your changes.

## Color Scheme

The ORAMA brand colors are defined in `src/index.css`:
- **Navy**: `#0c1a3a` (primary dark)
- **Blue**: `#142850` (secondary dark)
- **Orange**: `#f27a1a` (primary accent)
- **Orange Light**: `#f9a03f` (secondary accent)
- **Cream**: `#faf8f5` (light background)
- **Warm**: `#f5f0eb` (alternate background)

## Adding New Sections

To add new sections:
1. Add the content to `siteContent.ts`
2. Create a new component in `src/components/`
3. Import and add the component to `src/App.tsx`
