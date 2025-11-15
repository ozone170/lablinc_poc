# LabLinc POC - Testing Guide

## 🧪 Pre-Deployment Testing

### 1. Local Setup Test

```bash
# Install dependencies
npm install

# Create environment file
copy .env.local.example .env.local

# Add your Resend API key to .env.local
# RESEND_API_KEY=re_xxxxxxxxxxxxx

# Start development server
npm run dev
```

Expected: Server starts on http://localhost:3000

---

## 🏠 Homepage Testing

### Hero Section
- [ ] Background image loads from Hexagon URL
- [ ] Text overlay is readable
- [ ] "Explore Equipment" button works
- [ ] "Partner With Us" button works
- [ ] Parallax effect works on desktop (scroll to test)

**Test URL:** http://localhost:3000

### Equipment Categories
- [ ] All 10 categories display
- [ ] Category cards have hover effect
- [ ] Clicking category filters equipment list
- [ ] Cards are responsive on mobile

### Featured Equipment
- [ ] All 6 equipment items display
- [ ] Real images load correctly:
  - CNC Lathe Machine
  - FDM 3D Printer
  - A100 AI Server
  - RTX 4090 Workstation
  - Total Station
  - Rainwater Harvesting System
- [ ] Images have hover zoom effect
- [ ] Clicking card goes to detail page
- [ ] Lazy loading works (check Network tab)

### What We Offer - For Institutes
- [ ] Section displays with 6 offerings
- [ ] Cards show 🎓 icon
- [ ] Hover effects work
- [ ] Text is readable
- [ ] Responsive on mobile

### What We Offer - For Companies
- [ ] Section displays with 6 offerings
- [ ] Cards show 🏢 icon
- [ ] Hover effects work
- [ ] Text is readable
- [ ] Responsive on mobile

### How It Works
- [ ] 4 steps display
- [ ] Step numbers visible
- [ ] Icons/numbers styled correctly
- [ ] Responsive layout

### Final CTA
- [ ] "Contact Us" button visible
- [ ] Button links to /contact
- [ ] Hover effect works

---

## 📋 Equipment List Testing

**Test URL:** http://localhost:3000/equipment

### Page Load
- [ ] All 25 equipment items display
- [ ] Images load for featured items
- [ ] Gradient background for items without images
- [ ] Count shows "25 items found"

### Sidebar Filters
- [ ] Category dropdown works
- [ ] Availability filter works
- [ ] GPU Tier checkbox works
- [ ] Civil checkbox works
- [ ] Environmental checkbox works
- [ ] "Clear Filters" button works

### Filter Testing
1. **Category Filter**
   - Select "CNC Machines" → Should show 3 items
   - Select "3D Printers" → Should show 3 items
   - Select "AI Servers" → Should show 3 items

2. **Availability Filter**
   - Select "Available" → Should show available items
   - Select "Booked" → Should show booked items

3. **GPU Tier**
   - Check "GPU Equipment" → Should show GPU Workstations + AI Servers

4. **Specialized**
   - Check "Civil" → Should show 2 items
   - Check "Environmental" → Should show 2 items

### Equipment Cards
- [ ] Images display correctly
- [ ] Hover zoom effect works
- [ ] Category badge shows
- [ ] Institute name displays
- [ ] Availability badge colored correctly (green/red)
- [ ] Clicking card goes to detail page

---

## 🔍 Equipment Detail Testing

**Test URLs:**
- http://localhost:3000/equipment/cnc-lathe-vtu
- http://localhost:3000/equipment/fdm-3d-printer
- http://localhost:3000/equipment/a100-ai-server
- http://localhost:3000/equipment/rtx-4090-workstation
- http://localhost:3000/equipment/total-station
- http://localhost:3000/equipment/rainwater-harvesting-system

### Page Elements
- [ ] Equipment image loads (for featured items)
- [ ] Equipment name displays
- [ ] Category shows
- [ ] Institute location shows
- [ ] Availability badge displays
- [ ] Specifications list shows all specs

### Booking Form
- [ ] All 6 fields display:
  - Name
  - Email
  - Phone
  - Organization
  - Purpose
  - Preferred Date
- [ ] Required validation works
- [ ] Date picker works
- [ ] Submit button enabled

### Form Submission
1. Fill all fields
2. Click "Submit Request"
3. [ ] Success popup appears
4. [ ] Popup shows "✓ Request Sent!"
5. [ ] Popup auto-dismisses after 3 seconds
6. [ ] Form clears after submission

---

## ℹ️ About Page Testing

**Test URL:** http://localhost:3000/about

- [ ] "Who We Are" section displays
- [ ] Mission statement shows
- [ ] Team section displays 3 members:
  - Niranjan Desai - Operations
  - Narendra Hannurkar - Operations
  - Aditya Shinde - Technical
- [ ] Avatar placeholders show
- [ ] Responsive on mobile

---

## 🤝 Partner Page Testing

**Test URL:** http://localhost:3000/partner

### Page Sections
- [ ] Hero section displays
- [ ] "Why Partner" section shows 4 benefits
- [ ] Equipment types list shows 8 types
- [ ] Partner form displays

### Partner Form
- [ ] All 5 fields display:
  - Institute Name
  - Coordinator Name
  - Email
  - Phone
  - Message
- [ ] Required validation works
- [ ] Submit button works

### Form Submission
1. Fill all required fields
2. Click "Submit Application"
3. [ ] Success message appears
4. [ ] Message auto-dismisses
5. [ ] Form clears

---

## 📧 Contact Page Testing

**Test URL:** http://localhost:3000/contact

### Page Layout
- [ ] Two-column layout (form + info)
- [ ] Form section on left
- [ ] Contact info on right
- [ ] Responsive on mobile (stacks vertically)

### Contact Form
- [ ] All 6 fields display:
  - Full Name
  - Email
  - Phone
  - Organization
  - Equipment Needed (dropdown)
  - Message
- [ ] Equipment dropdown populated from categories
- [ ] Required validation works

### Contact Information Sidebar
- [ ] Email displays: lablinc.global@gmail.com
- [ ] Email is clickable (mailto:)
- [ ] Phone numbers display:
  - +91 73539 57307
  - +91 82170 76246
- [ ] Phone numbers are clickable (tel:)
- [ ] Address displays correctly
- [ ] Instagram link works
- [ ] LinkedIn link works

### Form Submission Test

**Important: This requires valid RESEND_API_KEY**

1. Fill all fields:
   ```
   Full Name: Test User
   Email: test@example.com
   Phone: 1234567890
   Organization: Test Company
   Equipment Needed: CNC Machines
   Message: This is a test message
   ```

2. Click "Send Message"

3. **Expected Behavior:**
   - [ ] Button shows "Sending..."
   - [ ] Button is disabled during submission
   - [ ] Success message appears: "✓ Message sent successfully!"
   - [ ] Form clears after success
   - [ ] Message auto-dismisses after 5 seconds

4. **Check Email:**
   - [ ] Email received at lablinc.global@gmail.com
   - [ ] Email contains all form data
   - [ ] Email is formatted correctly

### Error Handling Test

**Test without API key:**

1. Remove RESEND_API_KEY from .env.local
2. Restart server
3. Submit form
4. [ ] Error message appears
5. [ ] Error is user-friendly
6. [ ] Console shows detailed error

**Test with invalid email:**

1. Enter invalid email: "notanemail"
2. Submit form
3. [ ] Browser validation catches it
4. [ ] Or API returns error

---

## 🔗 Navigation Testing

### Header Navigation
- [ ] Logo links to home
- [ ] "Home" link works
- [ ] "Equipment" link works
- [ ] "About" link works
- [ ] "Partner" link works
- [ ] "Contact" link works
- [ ] Active page highlighted
- [ ] Sticky header works on scroll

### Footer Navigation
- [ ] All quick links work
- [ ] Contact info displays
- [ ] Phone numbers clickable
- [ ] Social media links work
- [ ] Links open in new tab (external)

---

## 📱 Responsive Testing

### Mobile (< 768px)
- [ ] Hero text readable
- [ ] Background image visible
- [ ] Categories stack vertically
- [ ] Featured equipment grid responsive
- [ ] Offerings cards stack
- [ ] Forms full width
- [ ] Navigation accessible
- [ ] Footer stacks properly

### Tablet (768px - 1024px)
- [ ] 2-column grids work
- [ ] Images scale properly
- [ ] Forms readable
- [ ] Navigation works

### Desktop (> 1024px)
- [ ] Full layout displays
- [ ] Parallax effect works
- [ ] Multi-column grids
- [ ] Hover effects smooth

---

## 🌐 Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## ⚡ Performance Testing

### Page Load Speed
- [ ] Homepage loads < 3 seconds
- [ ] Equipment list loads < 3 seconds
- [ ] Detail pages load < 2 seconds

### Image Loading
- [ ] Images lazy load
- [ ] No layout shift
- [ ] Smooth loading

### Network Tab Check
- [ ] No 404 errors
- [ ] No CORS errors
- [ ] API calls successful
- [ ] Images load from external URLs

---

## 🐛 Error Testing

### API Errors
1. **Missing API Key**
   - Remove RESEND_API_KEY
   - Submit contact form
   - [ ] User-friendly error shows

2. **Network Error**
   - Disconnect internet
   - Submit form
   - [ ] Network error message shows

3. **Invalid Data**
   - Submit form with invalid email
   - [ ] Validation error shows

### 404 Testing
- [ ] Visit /invalid-page → Shows 404
- [ ] Visit /equipment/invalid-slug → Shows "not found"

---

## 🔐 Security Testing

### Form Validation
- [ ] Required fields enforced
- [ ] Email format validated
- [ ] Phone format accepted
- [ ] XSS protection (try entering `<script>alert('test')</script>`)

### API Security
- [ ] POST only accepted
- [ ] OPTIONS handled (CORS)
- [ ] Invalid methods rejected
- [ ] Missing fields rejected

---

## ✅ Pre-Deployment Checklist

### Code Quality
- [x] No console errors
- [x] No syntax errors
- [x] All imports correct
- [x] CSS modules linked

### Functionality
- [ ] All pages load
- [ ] All links work
- [ ] All forms work
- [ ] All images load
- [ ] Navigation works

### Content
- [ ] Text is correct
- [ ] Contact info accurate
- [ ] Equipment data complete
- [ ] Images display

### Performance
- [ ] Fast load times
- [ ] Smooth animations
- [ ] No lag
- [ ] Optimized images

### Responsive
- [ ] Mobile works
- [ ] Tablet works
- [ ] Desktop works
- [ ] All breakpoints tested

---

## 🚀 Deployment Testing

### After Vercel Deployment

1. **Environment Variables**
   - [ ] RESEND_API_KEY added in Vercel
   - [ ] AI_GATEWAY_API_KEY added in Vercel

2. **Production URL Test**
   - [ ] Homepage loads
   - [ ] All pages accessible
   - [ ] Images load from external URLs
   - [ ] Contact form works
   - [ ] Email received

3. **Performance**
   - [ ] Lighthouse score > 90
   - [ ] Fast load times
   - [ ] No errors in console

4. **Final Checks**
   - [ ] Custom domain works (if configured)
   - [ ] SSL certificate active
   - [ ] Analytics tracking (if enabled)

---

## 📊 Testing Report Template

```
Date: _______________
Tester: _______________
Environment: [ ] Local [ ] Staging [ ] Production

Homepage: [ ] Pass [ ] Fail
Equipment List: [ ] Pass [ ] Fail
Equipment Detail: [ ] Pass [ ] Fail
About: [ ] Pass [ ] Fail
Partner: [ ] Pass [ ] Fail
Contact: [ ] Pass [ ] Fail
Contact Form Email: [ ] Pass [ ] Fail

Issues Found:
1. _______________
2. _______________
3. _______________

Notes:
_______________
_______________
```

---

## 🆘 Common Issues & Solutions

### Images Not Loading
- Check external URLs accessible
- Check browser console for CORS errors
- Verify network connection

### Contact Form Not Working
- Check RESEND_API_KEY in environment
- Check browser console for errors
- Test API endpoint directly

### Styles Not Applied
- Clear browser cache
- Check CSS file loaded
- Verify CSS module imports

### Slow Performance
- Check network speed
- Optimize images
- Enable caching

---

**Testing Complete! Ready for deployment when all checks pass.** ✅
