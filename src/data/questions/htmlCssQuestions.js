/**
 * CertifyCode Academy - Modern Web Architecture: Semantic HTML5 & Responsive CSS Question Bank
 * Total Questions: 50
 */

export const htmlCssQuestions = [
  // EASY (20)
  {
    id: 1,
    topic: "Semantic HTML5",
    difficulty: "Easy",
    question: "Which HTML5 semantic element should be used to wrap the primary top-level navigation links of a website?",
    options: ["<header>", "<nav>", "<section>", "<aside>"],
    correctAnswer: 1,
    explanation: "The `<nav>` element represents a section of a page intended for providing navigation links."
  },
  {
    id: 2,
    topic: "CSS Box Model & Specificity",
    difficulty: "Easy",
    question: "What are the four components of the standard CSS Box Model from inside to outside?",
    options: [
      "Content, Padding, Border, Margin",
      "Content, Margin, Border, Padding",
      "Padding, Content, Border, Margin",
      "Border, Margin, Content, Padding"
    ],
    correctAnswer: 0,
    explanation: "The CSS box model layers are: Content (innermost) -> Padding -> Border -> Margin (outermost)."
  },
  {
    id: 3,
    topic: "Modern Layout Engines",
    difficulty: "Easy",
    question: "Which CSS property value enables Flexbox layout on a container element?",
    options: ["display: flex;", "layout: flexbox;", "flex: 1;", "box-type: flex;"],
    correctAnswer: 0,
    explanation: "`display: flex;` converts a container into a flexible flex container."
  },
  {
    id: 4,
    topic: "Modern Layout Engines",
    difficulty: "Easy",
    question: "Which Flexbox property aligns flex items along the main axis of the flex container?",
    options: ["align-items", "justify-content", "align-content", "flex-direction"],
    correctAnswer: 1,
    explanation: "`justify-content` defines alignment along the main axis (e.g. `center`, `space-between`)."
  },
  {
    id: 5,
    topic: "Modern Layout Engines",
    difficulty: "Easy",
    question: "Which Flexbox property aligns flex items along the cross axis of the flex container?",
    options: ["justify-content", "align-items", "flex-wrap", "justify-items"],
    correctAnswer: 1,
    explanation: "`align-items` aligns flex items along the cross axis (perpendicular to the main axis)."
  },
  {
    id: 6,
    topic: "Responsive Design",
    difficulty: "Easy",
    question: "Which CSS feature allows styling rules to apply conditionally based on screen resolution or viewport width?",
    options: ["Media Queries (`@media`)", "CSS Animations", "Flexbox", "Grid Templates"],
    correctAnswer: 0,
    explanation: "Media queries (`@media (min-width: 768px) { ... }`) tailor CSS styles to specific viewport sizes."
  },
  {
    id: 7,
    topic: "Semantic HTML5",
    difficulty: "Easy",
    question: "What is the purpose of the `alt` attribute on an `<img>` tag?",
    options: [
      "Provides alternative textual description for screen readers and when the image fails to load",
      "Aligns the image to the right",
      "Sets image height in pixels",
      "Adds a tooltip on mouse hover"
    ],
    correctAnswer: 0,
    explanation: "`alt=\"description\"` ensures accessibility for screen readers and fallback text if image loading fails."
  },
  {
    id: 8,
    topic: "CSS Box Model & Specificity",
    difficulty: "Easy",
    question: "What CSS property setting causes an element's `width` and `height` to include padding and borders?",
    options: ["box-sizing: content-box;", "box-sizing: border-box;", "box-layout: padding-box;", "margin-sizing: include;"],
    correctAnswer: 1,
    explanation: "`box-sizing: border-box;` includes padding and border within the specified element width/height."
  },
  {
    id: 9,
    topic: "Semantic HTML5",
    difficulty: "Easy",
    question: "Which HTML5 tag is used to specify self-contained composition content (such as a blog post or news card)?",
    options: ["<section>", "<article>", "<div class=\"article\">", "<main>"],
    correctAnswer: 1,
    explanation: "`<article>` represents a self-contained, independently distributable composition."
  },
  {
    id: 10,
    topic: "Modern Layout Engines",
    difficulty: "Easy",
    question: "Which CSS property activates 2D Grid layout on a container?",
    options: ["display: grid;", "grid: enable;", "display: 2d-layout;", "layout: grid;"],
    correctAnswer: 0,
    explanation: "`display: grid;` turns an element into a 2D Grid layout container."
  },
  {
    id: 11,
    topic: "CSS Box Model & Specificity",
    difficulty: "Easy",
    question: "What selector has the highest specificity ranking in standard CSS?",
    options: ["Element selector (`p`)", "Class selector (`.btn`)", "ID selector (`#header`)", "Universal selector (`*`)"],
    correctAnswer: 2,
    explanation: "ID selectors (`#id`) carry higher specificity (1-0-0) than class selectors (0-1-0) or element selectors (0-0-1)."
  },
  {
    id: 12,
    topic: "Semantic HTML5",
    difficulty: "Easy",
    question: "Which HTML tag is used to embed a multi-line plain text input control in forms?",
    options: ["<input type=\"text\">", "<textarea>", "<textbox>", "<input type=\"textarea\">"],
    correctAnswer: 1,
    explanation: "`<textarea>` renders a multi-line plain-text editing control."
  },
  {
    id: 13,
    topic: "Web Accessibility (a11y)",
    difficulty: "Easy",
    question: "What does ARIA stand for in web accessibility?",
    options: [
      "Accessible Rich Internet Applications",
      "Automated Responsive Interface Attributes",
      "Application Resource Integration Architecture",
      "Advanced Responsive HTML Alignment"
    ],
    correctAnswer: 0,
    explanation: "ARIA (Accessible Rich Internet Applications) defines attributes to make web content accessible to assistive tech."
  },
  {
    id: 14,
    topic: "Responsive Design",
    difficulty: "Easy",
    question: "Which meta tag is required in HTML `<head>` for mobile-responsive viewports?",
    options: [
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "<meta name=\"screen\" content=\"responsive\">",
      "<meta name=\"mobile\" content=\"true\">",
      "<meta name=\"resolution\" content=\"dpi\">"
    ],
    correctAnswer: 0,
    explanation: "The viewport meta tag instructs mobile browsers to render the page at the physical device screen width."
  },
  {
    id: 15,
    topic: "CSS Box Model & Specificity",
    difficulty: "Easy",
    question: "What is the difference between `display: none;` and `visibility: hidden;` in CSS?",
    options: [
      "`display: none;` removes the element from document layout space; `visibility: hidden;` hides the element while keeping its layout space reserved",
      "`visibility: hidden;` removes element from DOM",
      "`display: none;` is for text only",
      "They behave identically"
    ],
    correctAnswer: 0,
    explanation: "`display: none` removes element layout completely; `visibility: hidden` hides visibility but reserves dimensions."
  },
  {
    id: 16,
    topic: "Responsive Design",
    difficulty: "Easy",
    question: "Which CSS unit is relative to the font-size of the root `<html>` element?",
    options: ["em", "rem", "px", "vw"],
    correctAnswer: 1,
    explanation: "`rem` (root em) units calculate size relative to the font size of the root `<html>` tag."
  },
  {
    id: 17,
    topic: "Modern Layout Engines",
    difficulty: "Easy",
    question: "What CSS property defines column gap spacing in Flexbox and Grid containers?",
    options: ["gap", "space-between", "padding-between", "margin-gap"],
    correctAnswer: 0,
    explanation: "`gap` (or `column-gap` / `row-gap`) sets row and column gutters between grid/flex child items."
  },
  {
    id: 18,
    topic: "Semantic HTML5",
    difficulty: "Easy",
    question: "Which HTML5 element represents sidebar content or content tangentially related to main content?",
    options: ["<aside>", "<sidebar>", "<section>", "<nav>"],
    correctAnswer: 0,
    explanation: "`<aside>` represents a portion of a document whose content is indirectly related to main content."
  },
  {
    id: 19,
    topic: "CSS Box Model & Specificity",
    difficulty: "Easy",
    question: "Which CSS position value positions an element relative to the browser viewport, keeping it fixed during scroll?",
    options: ["position: absolute;", "position: relative;", "position: fixed;", "position: sticky;"],
    correctAnswer: 2,
    explanation: "`position: fixed;` positions an element relative to the initial viewport containing block."
  },
  {
    id: 20,
    topic: "Semantic HTML5",
    difficulty: "Easy",
    question: "Which HTML tag is used to associate a text description label with a form `<input>` control?",
    options: ["<label>", "<caption font>", "<span label>", "<legend>"],
    correctAnswer: 0,
    explanation: "`<label for=\"inputId\">` links caption text to form input fields for usability and screen readers."
  },

  // MEDIUM (20)
  {
    id: 21,
    topic: "Modern Layout Engines",
    difficulty: "Medium",
    question: "What does `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` achieve in CSS Grid?",
    options: [
      "Creates a responsive multi-column grid layout that automatically wraps columns into rows without requiring media queries",
      "Fixes grid columns to 250px exact width",
      "Stretches all grid items into a single row",
      "Disables CSS grid alignment"
    ],
    correctAnswer: 0,
    explanation: "`repeat(auto-fit, minmax(250px, 1fr))` dynamically fits as many 250px+ fluid columns into the container as space allows."
  },
  {
    id: 22,
    topic: "CSS Box Model & Specificity",
    difficulty: "Medium",
    question: "How is CSS Specificity calculated for `div.card#header p:hover`?",
    options: ["1 ID (#header), 1 Class (.card), 2 Elements (div, p) + 1 pseudo-class (:hover) = (1, 2, 2)", "(0, 1, 1)", "(2, 0, 1)", "(1, 0, 0)"],
    correctAnswer: 0,
    explanation: "1 ID (`#header`), 2 classes/pseudo-classes (`.card`, `:hover`), and 2 elements (`div`, `p`) = Specificity score `(1, 2, 2)`."
  },
  {
    id: 23,
    topic: "Modern Layout Engines",
    difficulty: "Medium",
    question: "What is the difference between `position: absolute;` and `position: relative;`?",
    options: [
      "`position: relative;` positions element relative to its normal flow position; `position: absolute;` positions relative to nearest non-static ancestor",
      "`position: absolute;` preserves space in normal document flow",
      "`position: relative;` fixes element to screen viewport",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "`relative` moves an element offset from its normal document flow position. `absolute` removes it from normal flow, indexing to closest positioned ancestor."
  },
  {
    id: 24,
    topic: "Modern Layout Engines",
    difficulty: "Medium",
    question: "What does `position: sticky;` do in CSS?",
    options: [
      "Toggles between `relative` and `fixed` positioning depending on user scroll position relative to a threshold offset",
      "Permanently glues an element to the bottom of the page",
      "Locks z-index stack levels",
      "Fixes element width to 100%"
    ],
    correctAnswer: 0,
    explanation: "`position: sticky; top: 0;` acts as `relative` until scroll threshold is reached, then sticks in viewport like `fixed` within container bounds."
  },
  {
    id: 25,
    topic: "Web Accessibility (a11y)",
    difficulty: "Medium",
    question: "What WCAG minimum color contrast ratio is required for normal body text under Level AA compliance?",
    options: ["4.5:1", "3:1", "7:1", "2:1"],
    correctAnswer: 0,
    explanation: "WCAG 2.1 Level AA requires a minimum visual contrast ratio of 4.5:1 for standard body text (and 3:1 for large text)."
  },
  {
    id: 26,
    topic: "CSS Box Model & Specificity",
    difficulty: "Medium",
    question: "What is BEM (Block Element Modifier) methodology in CSS?",
    options: [
      "A class naming convention `block__element--modifier` aimed at creating modular, reusable component styles with flat specificity",
      "A CSS preprocessor compiler",
      "A grid framework",
      "A JavaScript layout engine"
    ],
    correctAnswer: 0,
    explanation: "BEM (e.g. `.card__title--large`) structures CSS classes cleanly, eliminating specificity collisions."
  },
  {
    id: 27,
    topic: "Modern Layout Engines",
    difficulty: "Medium",
    question: "What is the `fr` unit in CSS Grid?",
    options: [
      "A fractional unit representing a fraction of available free space in the grid container",
      "Frame rate measurement",
      "Font-relative unit",
      "Fixed pixel ratio"
    ],
    correctAnswer: 0,
    explanation: "`1fr` represents one fraction unit of remaining flexible container space."
  },
  {
    id: 28,
    topic: "Responsive Design",
    difficulty: "Medium",
    question: "What is the difference between `min-width` and `max-width` in media queries for Mobile-First design?",
    options: [
      "Mobile-First uses `min-width` queries to progressively enhance styles as screen widths grow larger",
      "Mobile-First uses `max-width` queries to scale down desktop styles",
      "Desktop-First uses `min-width` queries",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "Mobile-First writes base mobile styles first, using `@media (min-width: 768px)` queries to add layout complexity for larger screens."
  },
  {
    id: 29,
    topic: "CSS Box Model & Specificity",
    difficulty: "Medium",
    question: "What does `z-index` property control in CSS?",
    options: [
      "The vertical stacking order of positioned overlapping elements along the Z-axis",
      "Zoom scaling factors",
      "Font kerning spacing",
      "3D rotation speed"
    ],
    correctAnswer: 0,
    explanation: "`z-index` determines stacking layers for positioned (`relative`, `absolute`, `fixed`, `sticky`) or flex/grid elements."
  },
  {
    id: 30,
    topic: "CSS Box Model & Specificity",
    difficulty: "Medium",
    question: "What creates a new Stacking Context in CSS?",
    options: [
      "Setting `position: relative/absolute` with a `z-index` value other than `auto`, or `opacity` < 1, or `transform` != none",
      "Adding a padding margin",
      "Creating a div element",
      "Adding an id selector"
    ],
    correctAnswer: 0,
    explanation: "Stacking contexts isolate `z-index` hierarchies; properties like `opacity < 1`, `transform`, or `z-index` create sub-stacking contexts."
  },
  {
    id: 31,
    topic: "Semantic HTML5",
    difficulty: "Medium",
    question: "Which HTML5 attribute provides accessible description context for form controls via an element ID list?",
    options: ["aria-describedby", "aria-label", "aria-labelledby", "aria-live"],
    correctAnswer: 0,
    explanation: "`aria-describedby=\"id1 id2\"` references elements containing helper text or validation descriptions."
  },
  {
    id: 32,
    topic: "Modern Layout Engines",
    difficulty: "Medium",
    question: "What does `flex-grow: 1; flex-shrink: 0; flex-basis: 200px;` shorthand represent?",
    options: ["flex: 1 0 200px;", "flex: 200px 1 0;", "flex-flow: 1 0 200px;", "box-flex: 200px;"],
    correctAnswer: 0,
    explanation: "`flex: <grow> <shrink> <basis>` shorthand maps `flex: 1 0 200px;`."
  },
  {
    id: 33,
    topic: "CSS Box Model & Specificity",
    difficulty: "Medium",
    question: "What happens when margins collapse in CSS?",
    options: [
      "Top and bottom margins of adjacent block elements collapse into a single margin equal to the largest of the individual margins",
      "Left and right margins merge together",
      "Padding and margins cancel each other out",
      "Elements overflow their parent container"
    ],
    correctAnswer: 0,
    explanation: "Vertical block margins collapse: adjacent top/bottom margins combine into one margin equal to `max(marginA, marginB)`."
  },
  {
    id: 34,
    topic: "Web Accessibility (a11y)",
    difficulty: "Medium",
    question: "What is `tabindex=\"0\"` vs `tabindex=\"-1\"` in HTML accessibility?",
    options: [
      "`tabindex=\"0\"` adds a non-interactive element to natural keyboard tab order; `tabindex=\"-1\"` makes element focusable via JavaScript but removes from tab order",
      "`tabindex=\"-1\"` makes element tab first",
      "`tabindex=\"0\"` disables focus completely",
      "They behave identically"
    ],
    correctAnswer: 0,
    explanation: "`tabindex=\"0\"` inserts elements into natural focus flow. `tabindex=\"-1\"` allows programatic `focus()` via JS while skipping tab key sequence."
  },
  {
    id: 35,
    topic: "CSS Box Model & Specificity",
    difficulty: "Medium",
    question: "What is the pseudo-class `:nth-child(even)` used for?",
    options: [
      "Selects every even-numbered sibling element within a parent container",
      "Selects every second paragraph tag globally",
      "Selects parent elements with two children",
      "Selects even-indexed CSS classes"
    ],
    correctAnswer: 0,
    explanation: "`:nth-child(even)` or `:nth-child(2n)` matches elements at even index positions among siblings."
  },
  {
    id: 36,
    topic: "Modern Layout Engines",
    difficulty: "Medium",
    question: "What is the difference between `align-content` and `align-items` in Flexbox?",
    options: [
      "`align-content` manages spacing between multi-line flex rows when `flex-wrap: wrap` is active; `align-items` aligns individual items inside a single flex row",
      "`align-items` aligns columns; `align-content` aligns text",
      "`align-content` is for Grid only",
      "They behave identically"
    ],
    correctAnswer: 0,
    explanation: "`align-content` takes effect only on multi-line wrapped flex containers (`flex-wrap: wrap`) to distribute line spacing."
  },
  {
    id: 37,
    topic: "Responsive Design",
    difficulty: "Medium",
    question: "What does `clamp(1rem, 2.5vw, 2rem)` accomplish in modern CSS typography?",
    options: [
      "Sets fluid font size that scales with viewport width between a minimum 1rem and maximum 2rem bound",
      "Clamps text to 3 lines with ellipsis",
      "Fixes font size to 2.5vw",
      "Resets root rem calculations"
    ],
    correctAnswer: 0,
    explanation: "`clamp(min, preferred, max)` sets responsive fluid sizing constrained within minimum and maximum limits."
  },
  {
    id: 38,
    topic: "CSS Box Model & Specificity",
    difficulty: "Medium",
    question: "What does `will-change: transform;` do in CSS optimization?",
    options: [
      "Hints to the browser that an element will undergo transformation, allowing GPU hardware acceleration layer promotion ahead of time",
      "Forces instant layout reflow",
      "Disables CSS transitions",
      "Prevents DOM updates"
    ],
    correctAnswer: 0,
    explanation: "`will-change` provides browser rendering engine hints to optimize animations by pre-promoting elements to GPU layers."
  },
  {
    id: 39,
    topic: "Semantic HTML5",
    difficulty: "Medium",
    question: "Which HTML5 tag wraps explanatory caption text for a `<figure>` media element?",
    options: ["<figcaption>", "<caption text>", "<figure-title>", "<legend>"],
    correctAnswer: 0,
    explanation: "`<figcaption>` provides a caption or legend for its parent `<figure>` element."
  },
  {
    id: 40,
    topic: "Modern Layout Engines",
    difficulty: "Medium",
    question: "What is CSS Custom Properties (Variables) syntax?",
    options: [
      "Declaring with `--main-color: #3b82f6;` and consuming with `color: var(--main-color);`",
      "Declaring with `$main-color: #3b82f6;`",
      "Declaring with `@color main: #3b82f6;`",
      "Declaring inside JS window object"
    ],
    correctAnswer: 0,
    explanation: "Native CSS variables use `--var-name: value;` and `var(--var-name)` resolution."
  },

  // MODERATE (10)
  {
    id: 41,
    topic: "CSS Box Model & Specificity",
    difficulty: "Moderate",
    question: "What is a Block Formatting Context (BFC) in CSS layout rendering?",
    options: [
      "A self-contained layout region where block boxes are laid out, containing internal floats and preventing margin collapsing across BFC boundaries",
      "A grid framework container",
      "An inline text block",
      "A GPU layer"
    ],
    correctAnswer: 0,
    explanation: "Creating a BFC (via `display: flow-root;`, `overflow: hidden;`, `display: flex/grid;`) clears internal floats and stops margin collapse."
  },
  {
    id: 42,
    topic: "Web Accessibility (a11y)",
    difficulty: "Moderate",
    question: "What does `aria-live=\"polite\"` vs `aria-live=\"assertive\"` communicate to screen readers?",
    options: [
      "`polite` waits until user finishes current task to announce dynamic changes; `assertive` interrupts current speech immediately to announce updates",
      "`assertive` waits for user pause",
      "`polite` reads in whisper mode",
      "They behave identically"
    ],
    correctAnswer: 0,
    explanation: "`polite` queues announcements gracefully; `assertive` interrupts current screen reader speech for urgent updates."
  },
  {
    id: 43,
    topic: "Modern Layout Engines",
    difficulty: "Moderate",
    question: "What is the difference between `grid-template-areas` and explicit grid line placement?",
    options: [
      "`grid-template-areas` defines visual ASCII-art string layouts mapping named grid areas to child `grid-area` properties",
      "`grid-template-areas` can only be used on 1D layouts",
      "Explicit grid line placement is deprecated",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "`grid-template-areas: \"header header\" \"sidebar main\";` maps named grid areas directly to layout templates."
  },
  {
    id: 44,
    topic: "CSS Box Model & Specificity",
    difficulty: "Moderate",
    question: "What is CSS Containment (`contain: layout paint;`)?",
    options: [
      "Instructs browser layout engine that an element's DOM subtree is isolated from rest of page, optimizing rendering performance during DOM updates",
      "Contains images inside div bounds",
      "Prevents text overflow",
      "Disables flexbox wrapping"
    ],
    correctAnswer: 0,
    explanation: "`contain` property isolates element subtrees so changes don't trigger full-page layout reflows."
  },
  {
    id: 45,
    topic: "Responsive Design",
    difficulty: "Moderate",
    question: "What is the Container Queries specification (`@container`) in modern CSS?",
    options: [
      "Allows styling child elements based on the width/size of their parent container rather than whole viewport width",
      "Media queries for flexbox only",
      "Queries for server container environments",
      "JS window resize listeners"
    ],
    correctAnswer: 0,
    explanation: "Container queries (`@container (min-width: 400px)`) enable component-level responsive styling relative to parent container size."
  },
  {
    id: 46,
    topic: "CSS Box Model & Specificity",
    difficulty: "Moderate",
    question: "What is CSS `:is()` vs `:where()` pseudo-class behavior regarding specificity?",
    options: [
      "`:is()` calculates specificity based on its most specific selector argument; `:where()` always has 0 specificity `(0,0,0)`",
      "`:where()` has higher specificity than `:is()`",
      "Both have 0 specificity",
      "Both add 1 ID specificity"
    ],
    correctAnswer: 0,
    explanation: "`:where(a, b)` always scores (0,0,0) specificity making overrides easy; `:is(a, b)` takes the specificity of its strongest argument."
  },
  {
    id: 47,
    topic: "Semantic HTML5",
    difficulty: "Moderate",
    question: "What is the difference between `loading=\"lazy\"` on `<img>` tags and JS IntersectionObserver?",
    options: [
      "`loading=\"lazy\"` is a native browser engine directive deferring off-screen image network requests until scroll proximity; `IntersectionObserver` is a JS API to track element visibility",
      "`loading=\"lazy\"` requires JS libraries",
      "`IntersectionObserver` works on CSS styles only",
      "They are identical"
    ],
    correctAnswer: 0,
    explanation: "`loading=\"lazy\"` is native browser image lazy loading without JS dependency."
  },
  {
    id: 48,
    topic: "Modern Layout Engines",
    difficulty: "Moderate",
    question: "What does `subgrid` do in CSS Grid Level 2?",
    options: [
      "Allows a nested child grid to inherit and align directly with the row/column track definitions of its parent grid container",
      "Creates 3D grid layouts",
      "Subdivides grid pixels",
      "Merges grid cells automatically"
    ],
    correctAnswer: 0,
    explanation: "`grid-template-columns: subgrid;` aligns nested child grid elements with parent grid tracks."
  },
  {
    id: 49,
    topic: "Web Accessibility (a11y)",
    difficulty: "Moderate",
    question: "What is the purpose of `aria-hidden=\"true\"`?",
    options: [
      "Hides element and its children from screen readers while keeping it visually visible in DOM for decorative icons/graphics",
      "Hides element visually but reads to screen readers",
      "Removes element from DOM",
      "Disables CSS pointer events"
    ],
    correctAnswer: 0,
    explanation: "`aria-hidden=\"true\"` strips decorative elements (like decorative SVG icons) from the accessibility tree."
  },
  {
    id: 50,
    topic: "CSS Box Model & Specificity",
    difficulty: "Moderate",
    question: "What is CSS Cascade Layers (`@layer`) spec?",
    options: [
      "Allows developers to structure CSS into explicit priority layers where styles in later layers take precedence regardless of selector specificity",
      "Creates 3D canvas rendering layers",
      "Manages z-index layers automatically",
      "Combines CSS files at build time"
    ],
    correctAnswer: 0,
    explanation: "`@layer base, components, utilities;` establishes explicit cascade priority rules over selector specificity."
  }
];
