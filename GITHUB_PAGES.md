# Deploy to GitHub Pages

This portfolio is a static HTML, CSS, and JavaScript site, so it can be deployed directly with GitHub Pages.

## 📋 Quick Setup (3 steps)

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create repository: **`username.github.io`**
   - Replace `username` with your actual GitHub username
   - Example: `yash-sharma.github.io`
3. Choose "Public"
4. Click "Create repository"

### Step 2: Push Your Portfolio Files

#### Option A: Using Git (Recommended)

```bash
cd c:\Users\Yashu\Documents\coding\portfolio

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Add remote (replace username)
git remote add origin https://github.com/username/username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Upload via GitHub Web Interface

1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop your portfolio folder contents
4. Commit changes

### Step 3: Enable GitHub Pages

1. Go to your repository Settings
2. Scroll to "GitHub Pages" section
3. Source: Select "main" branch
4. Save
5. Wait 1-2 minutes for deployment

Your site will be available at: `https://username.github.io`

## 📂 File Structure for GitHub Pages

```
username.github.io/
├── index.html                    # Main portfolio (entry point)
├── styles.css                    # Styling
├── script.js                     # Interactivity
├── README.md                     # This file
│
└── projects/
   ├── web-interfaces/
   │   ├── index.html            # ✅ Works on GitHub Pages
   │   └── README.md
   │
   ├── api-dashboard/
   │   ├── index.html            # ✅ Works on GitHub Pages
   │   └── README.md
   │
   └── e-commerce/
      ├── index.html            # ✅ Works on GitHub Pages
      └── README.md
```

## ✅ What Works on GitHub Pages

### ✅ All Three Projects are Live & Interactive

| Project | Type | Status | Link |
|---------|------|--------|------|
| Web Interfaces | HTML/CSS/JS Demo | ✅ Works | `projects/web-interfaces/` |
| API Dashboard | HTML/CSS/JS App | ✅ Works | `projects/api-dashboard/` |
| E-Commerce Template | HTML/CSS/JS/Bootstrap | ✅ Works | `projects/e-commerce/` |

### ✅ Features That Work

 ✅ Responsive design
 ✅ Hover effects and animations
 ✅ API fetching (JSONPlaceholder)
 ✅ Form interactions
 ✅ Navigation and routing
 ✅ All interactive elements

### ⚠️ What Doesn't Work (Not Needed)

- ❌ Server-side code or databases
- ❌ Databases
- ❌ File system access (intentional security feature)

**Why?** GitHub Pages is **static hosting only** - it's perfect for front-end portfolios!

## 🔧 Custom Domain (Optional)

Want to use your own domain like `yashsharma.com`?

1. Go to your registrar (GoDaddy, Namecheap, etc.)
2. Update DNS to point to GitHub Pages:
   - Create CNAME record: `username.github.io`
3. Go to repository Settings → GitHub Pages
4. Add custom domain in "Custom domain" field
5. Save and wait for SSL certificate (24-48 hours)

## 📝 Updating Your Portfolio

### Method 1: Git (Recommended)

```bash
cd c:\Users\Yashu\Documents\coding\portfolio

# Make changes to files
# Then:
git add .
git commit -m "Update portfolio content"
git push
```

Updates go live in 1-2 minutes!

### Method 2: GitHub Web Interface

1. Click any file in your repo
2. Click edit (pencil icon)
3. Make changes
4. Commit directly to main branch

## 🚨 Important Files for GitHub Pages

Make sure these files are in your **root directory** (not in a subfolder):

- ✅ `index.html` - Your main portfolio page
- ✅ `styles.css` - CSS stylesheet
- ✅ `script.js` - JavaScript file
- ✅ `projects/` folder - All project demos

## 🎯 Verify It's Working

After pushing to GitHub:

1. Wait 2-3 minutes for deployment
2. Visit `https://username.github.io`
3. Check that all pages load
4. Test all interactive features
5. Try on mobile (resize browser)

## 🔗 Sharing Your Portfolio

Share this link with employers/clients:
- **Main portfolio:** `https://username.github.io`
- **Web Interfaces:** `https://username.github.io/projects/web-interfaces/`
- **API Dashboard:** `https://username.github.io/projects/api-dashboard/`
- **E-Commerce Template:** `https://username.github.io/projects/e-commerce/`

## 🐛 Troubleshooting

### Site not showing up
- ✓ Wait 2-3 minutes after push
- ✓ Check GitHub Pages is enabled in Settings
- ✓ Verify `index.html` is in root directory

### CSS/JS not loading
- ✓ Check file paths are relative (no absolute paths)
- ✓ Verify files are committed to GitHub
- ✓ Clear browser cache (Ctrl+Shift+Delete)

### Projects not accessible
- ✓ Verify `projects/` folder structure is correct
- ✓ Check that each project has `index.html`
- ✓ Ensure relative links in portfolio are correct

### API calls not working
- ✓ Check browser console (F12) for errors
- ✓ Verify JSONPlaceholder API is accessible
- ✓ Check CORS isn't blocking requests

## 📊 GitHub Pages Features

### Free Tier Includes:
- ✅ Free hosting
- ✅ Custom domain support
- ✅ Automatic HTTPS
- ✅ Unlimited bandwidth
- ✅ 1GB storage per repo

### Limitations:
- Static files only (no backend)
- No server-side processing
- Perfect for portfolios!

## 🎓 Best Practices

1. **Keep repository public** for employers to see your code
2. **Add .gitignore** (ignore node_modules, venv, etc.)
3. **Write clear README** in root folder
4. **Update regularly** with new projects
5. **Test on mobile** before pushing
6. **Add comments** to your code
7. **Use descriptive commit messages**

## 📞 Support

If you need help:
1. Check [GitHub Pages Docs](https://docs.github.com/en/pages)
2. Check browser console for errors (F12)
3. Verify file structure matches expectations
4. Make sure all links are relative paths

## Deployment Checklist

1. Create GitHub repository
2. Push your portfolio
3. Enable GitHub Pages
4. Check the main page and all three project demos after deployment
