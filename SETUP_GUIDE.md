# LabLinc POC - Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
cd lablinc_poc
npm install
```

### Step 2: Create Environment File
Copy the example file and add your API keys:
```bash
copy .env.local.example .env.local
```

Edit `.env.local` and add your keys:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
AI_GATEWAY_API_KEY=your_key_here
```

### Step 3: Get Resend API Key
1. Go to https://resend.com
2. Sign up for free account
3. Go to API Keys section
4. Create new API key
5. Copy and paste into `.env.local`

### Step 4: Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000 🎉

---

## 📦 What's Included

### Pages (7 total)
- ✅ Home page with hero and categories
- ✅ Equipment list with filters
- ✅ Equipment detail with booking form
- ✅ About page
- ✅ Partner application page
- ✅ Contact page with email
- ✅ Email API endpoint

### Equipment Data
- 25 equipment items across 10 categories
- CNC Machines, 3D Printers, Electronics, GPU Workstations, AI Servers, etc.
- Located in `data/equipment.json`

### Features
- Responsive design (desktop-focused)
- Filter by category, availability, GPU tier, civil, environmental
- Contact form sends emails to lablinc.global@gmail.com
- Booking form shows success popup
- Clean, modern UI

---

## 🐳 Docker Setup

### Option 1: Docker Build
```bash
docker build -t lablinc-poc .
docker run -p 3000:3000 -e RESEND_API_KEY=your_key lablinc-poc
```

### Option 2: Docker Compose
Create `.env` file with your keys:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
AI_GATEWAY_API_KEY=your_key_here
```

Then run:
```bash
docker-compose up
```

---

## ☁️ Vercel Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "LabLinc POC ready for deployment"
git push origin ADITYA
```

### Step 2: Import to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Select branch: `ADITYA`
5. Framework Preset: Next.js (auto-detected)
6. Click "Deploy"

### Step 3: Add Environment Variables
In Vercel dashboard:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add:
   - `RESEND_API_KEY` = your_resend_key
   - `AI_GATEWAY_API_KEY` = your_ai_key
4. Redeploy

### Step 4: Custom Domain (Optional)
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

---

## 📧 Email Configuration

### Development
- Uses Resend's default sender: `onboarding@resend.dev`
- Emails go to: `lablinc.global@gmail.com`
- Works immediately with any Resend API key

### Production (Recommended)
1. Add custom domain in Resend dashboard
2. Verify domain with DNS records
3. Update `from` field in `/pages/api/contact.js`:
   ```javascript
   from: 'LabLinc <contact@yourdomain.com>',
   ```

---

## 🧪 Testing

### Test Contact Form
1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check your email (lablinc.global@gmail.com)

### Test Equipment Booking
1. Go to http://localhost:3000/equipment
2. Click any equipment
3. Fill booking form
4. Submit
5. See success popup (note: doesn't send email yet)

---

## 📁 Project Structure

```
lablinc_poc/
├── components/          # React components
│   └── Layout.js       # Header, footer, navigation
├── data/               # Static data
│   └── equipment.json  # 25 equipment items
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   │   └── contact.js # Email endpoint
│   ├── equipment/     # Equipment pages
│   │   ├── [slug].js  # Detail page
│   │   └── index.js   # List page
│   ├── index.js       # Home page
│   ├── about.js       # About page
│   ├── partner.js     # Partner page
│   └── contact.js     # Contact page
├── styles/            # CSS modules
└── public/            # Static assets
```

---

## 🔧 Customization

### Add More Equipment
Edit `data/equipment.json`:
```json
{
  "id": 26,
  "slug": "new-equipment",
  "name": "New Equipment",
  "category": "CNC Machines",
  "institute": "VTU Belagavi",
  "availability": "Available",
  "specs": {
    "spec1": "value1"
  }
}
```

### Change Colors
Edit CSS files in `styles/` folder:
- Primary color: `#4ecca3` (green)
- Dark color: `#1a1a2e` (navy)
- Background: `#f8f9fa` (light gray)

### Update Contact Email
Edit `pages/api/contact.js`:
```javascript
to: ['your-email@example.com'],
```

---

## ❓ Troubleshooting

### "Module not found" error
```bash
npm install
```

### Email not sending
- Check RESEND_API_KEY in `.env.local`
- Verify API key is valid at resend.com
- Check browser console for errors

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Docker build fails
```bash
# Clear Docker cache
docker system prune -a
docker build --no-cache -t lablinc-poc .
```

---

## 📞 Support

- Email: lablinc.global@gmail.com
- Instagram: https://www.instagram.com/lablinc
- LinkedIn: https://www.linkedin.com/company/lablinc

---

## ✅ Checklist

Before deploying to production:

- [ ] Install dependencies (`npm install`)
- [ ] Create `.env.local` with API keys
- [ ] Test locally (`npm run dev`)
- [ ] Test contact form
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Add environment variables in Vercel
- [ ] Test production deployment
- [ ] Configure custom domain (optional)
- [ ] Set up custom email domain in Resend (optional)

---

**Ready to launch! 🚀**
