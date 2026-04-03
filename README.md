# 🌳 OneTree Pakistan — Landing Page

A modern, fully-responsive landing page for the OneTree Pakistan reforestation platform.

---

## 🚀 Deploy to GitHub Pages (Free Hosting)

### Step 1 — Upload to GitHub
1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **"New repository"** (the green button)
3. Name it `onetree` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload files
1. On your new repo page, click **"uploading an existing file"**
2. **Drag and drop the entire folder contents** (index.html + css/ + js/ + data/ folders)
3. Scroll down, click **"Commit changes"**

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main`, folder to `/ (root)`
5. Click **Save**

### Step 4 — Your site is live!
After ~2 minutes, your site will be live at:
```
https://YOUR-USERNAME.github.io/onetree/
```

---

## ✏️ How to Update Content

**You only ever need to edit ONE file: `data/content.js`**

Open it in any text editor (Notepad, VS Code, etc.) and change values:

### Change hero stats
```js
stats: [
  { number: "200K+", label: "Trees Planted" },   // ← Change these
  { number: "35K+",  label: "Green Champions" },
  { number: "97%",   label: "Survival Rate" },
],
```

### Change tree price (updates ALL calculations automatically)
```js
pricePerTree: 350,   // ← Change PKR price here, everything updates
```

### Add/remove volunteer drives
```js
drives: [
  { city: "Lahore",  emoji: "🌳", location: "Jallo Park",  date: "Mar 15, 2025", slots: 24, filled: 18 },
  // Add a new drive:
  { city: "Multan",  emoji: "🌿", location: "Qasim Bagh",  date: "May 1, 2025",  slots: 20, filled: 5  },
  // Set filled === slots to mark as Full
  { city: "Lahore",  emoji: "🌳", location: "Forest Park", date: "Jun 1, 2025",  slots: 30, filled: 30 }, // FULL
],
```

### Change colors (rebrands entire site)
```js
colors: {
  primary: "#2E7D32",   // ← Main green — change to any hex color
  light:   "#66BB6A",
},
```

### Change app store links
```js
appStoreUrl:  "https://apps.apple.com/your-app",   // ← Your real link
playStoreUrl: "https://play.google.com/your-app",  // ← Your real link
```

---

## 📁 File Structure

```
onetree/
├── index.html          ← Main page (don't edit unless adding new sections)
├── css/
│   └── style.css       ← All styles (don't edit unless changing design)
├── js/
│   └── main.js         ← All interactivity (don't edit unless adding features)
├── data/
│   └── content.js      ← ✅ THE ONLY FILE YOU NEED TO EDIT
└── README.md           ← This file
```

---

## 🔄 After Making Changes

If your site is already live on GitHub Pages:
1. Go to your repo on GitHub
2. Click on the file you changed (e.g. `data/content.js`)
3. Click the **pencil icon** (Edit)
4. Make your changes directly in the browser
5. Click **Commit changes**
6. Your site updates in ~1-2 minutes automatically!

---

## 🌲 Anonymous QR Page (Production Flow)

`public-tree.html` is the dedicated anonymous QR destination and is intentionally hidden from nav/footer.

### Canonical QR format
Use this URL format when generating QR codes:
```text
https://YOUR-DOMAIN/public-tree.html?tree_code=<TREE_CODE>
```

### Does it go live automatically?
Yes. This repo uses GitHub Pages from `main` (root).  
Any commit pushed to `main` auto-deploys in about 1-2 minutes.

### Safe release flow (recommended)
1. Validate first on local/staging URL.
2. Run the test checklist below.
3. Push the same tested code to `main`.
4. Wait 1-2 minutes and run production smoke tests.

### Test checklist
1. Valid tree: `public-tree.html?tree_code=<real_code>` loads correct data.
2. Invalid code format: shows `Invalid QR Code`.
3. Unknown code: shows `Tree Not Found`.
4. Inactive tree: shows unavailable/null behavior.
5. Confirm no CTA/download buttons appear on `public-tree.html`.
6. Confirm network call is RPC only: `get_public_tree_profile`.
7. Confirm no direct table reads from frontend.

---

## 📧 Contact / Support

For help, email: hello@onetree.pk
