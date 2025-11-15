# LabLinc POC - Quick Reference Card

## 🚀 Quick Start (3 Steps)

```bash
# 1. Install
npm install

# 2. Setup environment
copy .env.local.example .env.local
# Add your RESEND_API_KEY

# 3. Run
npm run dev
```

Visit: http://localhost:3000

---

## 📞 Contact Information

**Email:** lablinc.global@gmail.com  
**Phone:** +91 73539 57307 | +91 82170 76246  
**Address:** VTU, Jnana Sangama, Belagavi – 590018, Karnataka  
**Instagram:** @lablinc  
**LinkedIn:** /company/lablinc

---

## 🌐 Pages & Routes

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, categories, featured equipment, offerings |
| Equipment List | `/equipment` | 25 items with filters |
| Equipment Detail | `/equipment/[slug]` | Individual equipment with booking |
| About | `/about` | Company info and team |
| Partner | `/partner` | Partnership application |
| Contact | `/contact` | Contact form with email |
| API | `/api/contact` | Email endpoint |

---

## 🖼️ Featured Equipment Images

| Equipment | Image URL |
|-----------|-----------|
| CNC Lathe | https://www.focus-cnc.com/... |
| FDM 3D Printer | https://zbotic.in/... |
| A100 AI Server | https://www.nvidia.com/... |
| RTX 4090 Workstation | https://wp-cdn.pugetsystems.com/... |
| Total Station | https://www.topconpositioning.com/... |
| Rainwater Harvesting | https://www.svl.com/... |

---

## 🎯 What We Offer

### For Institutes (6 Services)
1. CNC Lathe Machine Training
2. Additive Manufacturing (3D Printing)
3. AI Computing Lab Setup
4. Surveying & Geomatics
5. Sustainability Labs
6. Industry 4.0 Training

### For Companies (6 Services)
1. Custom Manufacturing & Prototyping
2. Production Process Automation
3. AI/ML Compute Support
4. CAD/CAM Design Assistance
5. Product Development R&D
6. On-site CNC Machining Support

---

## 🔑 Environment Variables

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
AI_GATEWAY_API_KEY=your_key_here
```

**Get Resend Key:** https://resend.com

---

## 📊 Equipment Categories (10)

1. CNC Machines (3 items)
2. 3D Printers (3 items)
3. Electronics (4 items)
4. Mechanical (2 items)
5. Material Testing (3 items)
6. GPU Workstations (2 items)
7. AI Servers (3 items)
8. Civil (2 items)
9. Environmental (2 items)
10. Prototyping (1 item)

**Total:** 25 equipment items

---

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server

# Docker
docker build -t lablinc-poc .
docker run -p 3000:3000 lablinc-poc
docker-compose up

# Git
git add .
git commit -m "message"
git push origin ADITYA

# Deployment
vercel --prod            # Deploy to Vercel
```

---

## 🎨 Design System

**Colors:**
- Primary: `#4ecca3` (Teal/Green)
- Dark: `#1a1a2e` (Navy)
- Background: `#f8f9fa` (Light Gray)
- Text: `#333333` (Dark Gray)

**Fonts:**
- System fonts (Apple, Segoe UI, Roboto)

---

## 📁 Key Files

```
pages/
  index.js              # Home page
  equipment/
    index.js            # Equipment list
    [slug].js           # Equipment detail
  about.js              # About page
  partner.js            # Partner page
  contact.js            # Contact page
  api/
    contact.js          # Email API

components/
  Layout.js             # Header + Footer

data/
  equipment.json        # Equipment data

styles/
  *.module.css          # Page styles
```

---

## ✅ Testing Checklist

- [ ] Homepage loads with background image
- [ ] Featured equipment images display
- [ ] Offerings sections render
- [ ] Equipment list shows all items
- [ ] Filters work correctly
- [ ] Equipment detail pages load
- [ ] Contact form sends email
- [ ] Phone numbers are clickable
- [ ] All navigation links work
- [ ] Mobile responsive

---

## 🐛 Troubleshooting

### Images Not Loading
- Check external URLs accessible
- Check browser console for errors
- Verify network connection

### Contact Form Error
- Check RESEND_API_KEY in .env.local
- Verify API key is valid
- Check browser console

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Main documentation |
| SETUP_GUIDE.md | Setup instructions |
| DEPLOYMENT_CHECKLIST.md | Deployment tasks |
| TESTING_GUIDE.md | Testing procedures |
| UPDATES.md | Recent updates |
| CHANGELOG.md | Version history |
| COMMANDS.md | Command reference |
| PROJECT_SUMMARY.md | Project overview |
| PROJECT_STRUCTURE.txt | File structure |
| QUICK_START.txt | Quick start guide |
| QUICK_REFERENCE.md | This file |

---

## 🚀 Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git push origin ADITYA
   ```

2. **Import to Vercel**
   - Go to vercel.com
   - Import repository
   - Select ADITYA branch

3. **Add Environment Variables**
   - RESEND_API_KEY
   - AI_GATEWAY_API_KEY

4. **Deploy**
   - Click Deploy button
   - Wait 2-3 minutes
   - Test production URL

---

## 📊 Project Stats

- **Total Files:** 35+
- **Total Pages:** 7
- **Equipment Items:** 25
- **Categories:** 10
- **Lines of Code:** ~3,000+
- **Documentation:** 11 files

---

## 🎯 Key Features

✅ Desktop-focused responsive design  
✅ Real equipment images from external URLs  
✅ Email integration via Resend API  
✅ Filter by category, availability, GPU tier  
✅ Booking request forms  
✅ Docker support  
✅ Vercel deployment ready  
✅ Comprehensive documentation  

---

## 🔄 Version Info

**Current Version:** 1.1.0  
**Branch:** ADITYA  
**Last Updated:** November 16, 2024  
**Status:** ✅ Ready for Deployment

---

## 🆘 Need Help?

1. Check documentation files
2. Review TESTING_GUIDE.md
3. Check browser console
4. Contact support:
   - Email: lablinc.global@gmail.com
   - Phone: +91 73539 57307
   - Phone: +91 82170 76246

---

## 🎉 Quick Tips

💡 **Tip 1:** Use `npm run dev` for development  
💡 **Tip 2:** Check .env.local for API keys  
💡 **Tip 3:** Test contact form with real email  
💡 **Tip 4:** Clear browser cache if styles don't update  
💡 **Tip 5:** Use Chrome DevTools for debugging  

---

**Keep this card handy for quick reference!** 📌
