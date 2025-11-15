# LabLinc POC - Equipment Sharing Platform

**Fully responsive** prototype website for LabLinc that lists engineering equipment and allows users to contact through Formspree email integration.

[![Version](https://img.shields.io/badge/version-1.2.3-blue.svg)](https://github.com/lablinc/poc)
[![Status](https://img.shields.io/badge/status-production%20ready-success.svg)](https://github.com/lablinc/poc)
[![Mobile](https://img.shields.io/badge/mobile-responsive-green.svg)](https://github.com/lablinc/poc)

## 🎯 Branch: ADITYA

## 🚀 Quick Links

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Mobile Responsiveness](#-mobile-responsiveness)
- [Deployment](#️-vercel-deployment)
- [Documentation](#-documentation)
- [Contact](#-contact-information)

## ✨ Features

### Pages (8 Total)
- ✅ Home page with hero background, categories, and featured equipment
- ✅ Equipment listing with filters (category, availability, GPU tier, civil, environmental)
- ✅ Equipment detail pages with booking forms
- ✅ About page with team information
- ✅ Partner page with application form
- ✅ Contact page with Formspree integration
- ✅ Thank you page after form submission
- ✅ 404 page (Next.js default)

### Equipment
- ✅ **25 equipment items** with **100% image coverage**
- ✅ 10 categories (CNC, 3D Printing, Electronics, AI Servers, etc.)
- ✅ Real product images from external URLs
- ✅ Detailed specifications for each item
- ✅ Availability status tracking

### Design & UX
- ✅ **Fully mobile-responsive** with hamburger menu
- ✅ Professional logo with brand text
- ✅ Touch-friendly interface
- ✅ Smooth animations and transitions
- ✅ Modern, clean design

### Technical
- ✅ **Formspree email integration** (no backend needed)
- ✅ **Zero configuration** (no API keys required)
- ✅ Docker support
- ✅ Vercel deployment ready
- ✅ SEO-friendly
- ✅ Fast performance

## 🛠️ Tech Stack

- **Framework:** Next.js 14.0.4
- **UI Library:** React 18.2.0
- **Styling:** CSS Modules
- **Email Service:** Formspree (no backend needed)
- **Deployment:** Vercel (recommended) or Docker
- **Images:** External URLs (no local storage)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd lablinc_poc
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

**That's it!** No environment variables needed. The contact form uses Formspree.

### 3. Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

### 4. Test Mobile View

- Press `F12` to open Chrome DevTools
- Press `Ctrl+Shift+M` to toggle device mode
- Select "iPhone 12 Pro" or "Pixel 5"
- Test the hamburger menu (☰)

## 🐳 Docker Setup

### Build and Run with Docker

```bash
# Build the image
docker build -t lablinc-poc .

# Run the container
docker run -p 3000:3000 lablinc-poc
```

**No environment variables needed!**

### Using Docker Compose

```bash
docker-compose up
```

## ☁️ Vercel Deployment

### 1. Push to GitHub

```bash
git add .
git commit -m "v1.2.3 - Production ready"
git push origin ADITYA
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Select the `ADITYA` branch
4. Click **Deploy**

**That's it!** No environment variables needed.

### 3. Test Production

- Visit your Vercel URL
- Test contact form
- Verify email delivery
- Check mobile responsiveness
- Test on real devices

## 📁 Project Structure

```
lablinc_poc/
├── components/
│   └── Layout.js              # Main layout with hamburger menu
├── data/
│   └── equipment.json         # Equipment data (25 items, 100% images)
├── pages/
│   ├── equipment/
│   │   ├── [slug].js          # Equipment detail page
│   │   └── index.js           # Equipment list page
│   ├── _app.js
│   ├── _document.js           # Viewport meta tag, favicon
│   ├── about.js               # About page
│   ├── contact.js             # Contact page (Formspree)
│   ├── index.js               # Home page
│   ├── partner.js             # Partner page
│   └── thank-you.js           # Success page
├── public/
│   └── logo.png               # LabLinc logo
├── styles/
│   ├── globals.css            # Global styles + mobile base
│   ├── Layout.module.css      # Header, footer, hamburger menu
│   ├── Home.module.css        # Home page styles
│   ├── Equipment.module.css   # Equipment list styles
│   ├── EquipmentDetail.module.css
│   ├── About.module.css
│   ├── Contact.module.css
│   ├── Partner.module.css
│   └── ThankYou.module.css
├── Documentation/             # 19 comprehensive guides
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── next.config.js
├── package.json
└── README.md
```

## 📄 Pages

### Public Pages
- **Home (/)** - Hero with background, categories, featured equipment, offerings, how it works
- **Equipment (/equipment)** - Filterable list of 25 items with images
- **Equipment Detail (/equipment/[slug])** - Individual equipment with specs and booking form
- **About (/about)** - Company info, mission, team (3 members)
- **Partner (/partner)** - Partnership benefits and application form
- **Contact (/contact)** - Contact form with Formspree integration
- **Thank You (/thank-you)** - Success confirmation after form submission

## 🏭 Equipment Categories (10)

1. **CNC Machines** (3 items) - Lathe, Milling, Plasma Cutter
2. **3D Printers** (3 items) - FDM, SLA, Metal
3. **Electronics** (4 items) - Oscilloscope, Spectrum Analyzer, PCB, Function Generator
4. **Mechanical** (3 items) - Lathe, Milling, Hydraulic Press
5. **Material Testing** (3 items) - Universal Testing, Hardness Tester, Impact Testing
6. **GPU Workstations** (2 items) - RTX 4090, RTX 3090
7. **AI Servers** (3 items) - A100, H100, V100
8. **Civil** (2 items) - Total Station, GPS Surveying
9. **Environmental** (2 items) - Rainwater Harvesting, Water Quality Analyzer
10. **Prototyping** (1 item) - Various tools

**Total: 25 equipment items with 100% image coverage**

## 📱 Mobile Responsiveness

### Features
- ✅ **Hamburger menu** for mobile navigation
- ✅ **Touch-friendly** interface (44x44px minimum tap targets)
- ✅ **Single-column layouts** on mobile
- ✅ **Full-width buttons** and forms
- ✅ **Optimized images** with lazy loading
- ✅ **Fast performance** on mobile devices

### Breakpoints
- **Mobile:** < 768px (hamburger menu, single column)
- **Tablet:** 768px - 1024px (2-column grids)
- **Desktop:** > 1024px (multi-column grids)

### Testing Mobile
```bash
# Chrome DevTools
1. Press F12
2. Press Ctrl+Shift+M (device mode)
3. Select "iPhone 12 Pro"
4. Test hamburger menu
```

---

## 🎨 Design Features

### Logo
- Professional LabLinc logo with brand text
- Displays in header and footer
- Favicon for browser tab
- Responsive sizing

### Color Scheme
- **Primary:** #4ecca3 (Teal/Green)
- **Dark:** #1a1a2e (Navy)
- **Background:** #f8f9fa (Light Gray)
- **Text:** #333333 (Dark Gray)

### Typography
- System fonts (Apple, Segoe UI, Roboto)
- Responsive font sizes
- Good line height for readability

---

## 📊 Project Statistics

- **Total Pages:** 8
- **Equipment Items:** 25
- **Equipment Images:** 25 (100% coverage)
- **Categories:** 10
- **Documentation Files:** 19
- **Total Lines of Code:** ~3,500+
- **Dependencies:** 3 (Next.js, React, React-DOM)
- **API Keys Required:** 0

---

## 📚 Documentation

Comprehensive documentation available:

1. **README.md** - This file
2. **SETUP_GUIDE.md** - Detailed setup instructions
3. **DEPLOYMENT_CHECKLIST.md** - Pre/post deployment tasks
4. **TESTING_GUIDE.md** - Testing procedures
5. **MOBILE_TESTING_GUIDE.md** - Mobile testing guide
6. **MOBILE_OPTIMIZATION.md** - Mobile optimization details
7. **CHANGELOG.md** - Version history
8. **EQUIPMENT_IMAGES.md** - Image reference
9. **FORMSPREE_INTEGRATION.md** - Email setup guide
10. **LOGO_INTEGRATION.md** - Logo implementation
11. **100_PERCENT_COMPLETE.md** - Completion celebration
12. **And more...**

---

## 📞 Contact Information

### LabLinc
- **Email:** lablinc.global@gmail.com
- **Phone:** +91 73539 57307
- **Phone:** +91 82170 76246
- **Address:** VTU, Jnana Sangama, Belagavi – 590018, Karnataka, India
- **Instagram:** [@lablinc](https://www.instagram.com/lablinc)
- **LinkedIn:** [/company/lablinc](https://www.linkedin.com/company/lablinc)

### Team
- **Niranjan Desai** - Operations
- **Narendra Hannurkar** - Operations
- **Aditya Shinde** - Technical Lead & Developer

---

## 🎯 Key Highlights

✅ **Zero Configuration** - No API keys, no environment variables  
✅ **100% Image Coverage** - All 25 equipment items have images  
✅ **Fully Mobile-Responsive** - Hamburger menu, touch-friendly  
✅ **Production Ready** - Tested, documented, optimized  
✅ **Easy Deployment** - Push to GitHub, deploy to Vercel  
✅ **Comprehensive Docs** - 19 detailed documentation files  
✅ **Fast Performance** - Optimized images, lazy loading  
✅ **Professional Design** - Modern UI, smooth animations  

---

## 🚀 Version History

- **v1.2.3** - Mobile optimization with hamburger menu
- **v1.2.2** - Complete mobile responsiveness
- **v1.2.1** - Logo integration
- **v1.2.0** - Formspree migration, 100% image coverage
- **v1.1.0** - Homepage updates, images, contact improvements
- **v1.0.0** - Initial release

---

## 📝 Notes

- Fully responsive (mobile, tablet, desktop)
- Equipment data is static (from JSON file)
- Contact form sends to lablinc.global@gmail.com via Formspree
- Booking forms show success popups (no email sent)
- All images loaded from external URLs
- No backend code required
- Free tier Formspree (50 submissions/month)

---

## 🎉 Ready to Launch!

Your LabLinc POC is **100% complete** and ready for production deployment!

**Features:**
- ✅ All pages functional
- ✅ Mobile-responsive
- ✅ Contact form working
- ✅ Professional design
- ✅ Fast performance
- ✅ Zero configuration

**Deploy now and go live!** 🚀

---

## 📄 License

Private - LabLinc POC

---

**Built with ❤️ by the LabLinc Team**
