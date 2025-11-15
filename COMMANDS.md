# LabLinc POC - Command Reference

## 📦 NPM Commands

### Installation
```bash
npm install                 # Install all dependencies
npm install --legacy-peer-deps  # If you encounter peer dependency issues
```

### Development
```bash
npm run dev                 # Start development server (http://localhost:3000)
npm run dev -- -p 3001      # Start on different port
```

### Production
```bash
npm run build               # Build for production
npm start                   # Start production server
npm run lint                # Run ESLint
```

---

## 🐳 Docker Commands

### Build
```bash
docker build -t lablinc-poc .                    # Build image
docker build --no-cache -t lablinc-poc .         # Build without cache
```

### Run
```bash
# Basic run
docker run -p 3000:3000 lablinc-poc

# With environment variables
docker run -p 3000:3000 \
  -e RESEND_API_KEY=your_key \
  -e AI_GATEWAY_API_KEY=your_key \
  lablinc-poc

# Run in background
docker run -d -p 3000:3000 lablinc-poc

# Run with name
docker run --name lablinc -p 3000:3000 lablinc-poc
```

### Docker Compose
```bash
docker-compose up           # Start services
docker-compose up -d        # Start in background
docker-compose down         # Stop services
docker-compose logs         # View logs
docker-compose ps           # List services
```

### Management
```bash
docker ps                   # List running containers
docker ps -a                # List all containers
docker images               # List images
docker stop <container>     # Stop container
docker rm <container>       # Remove container
docker rmi <image>          # Remove image
docker system prune -a      # Clean up everything
```

---

## 🔧 Git Commands

### Initial Setup
```bash
git init                    # Initialize repository (already done)
git status                  # Check status
git branch                  # List branches
```

### Committing
```bash
git add .                   # Stage all changes
git add <file>              # Stage specific file
git commit -m "message"     # Commit changes
git commit -am "message"    # Stage and commit
```

### Branching
```bash
git branch ADITYA           # Create branch
git checkout ADITYA         # Switch to branch
git checkout -b ADITYA      # Create and switch
```

### Remote
```bash
git remote add origin <url> # Add remote
git push origin ADITYA      # Push to branch
git pull origin ADITYA      # Pull from branch
git push -u origin ADITYA   # Push and set upstream
```

### Viewing
```bash
git log                     # View commit history
git log --oneline           # Compact log
git diff                    # View changes
git show                    # Show last commit
```

---

## ☁️ Vercel CLI Commands

### Installation
```bash
npm install -g vercel       # Install Vercel CLI
```

### Deployment
```bash
vercel                      # Deploy to preview
vercel --prod               # Deploy to production
vercel login                # Login to Vercel
vercel logout               # Logout
```

### Management
```bash
vercel ls                   # List deployments
vercel env ls               # List environment variables
vercel env add              # Add environment variable
vercel env rm               # Remove environment variable
vercel logs                 # View logs
vercel domains              # Manage domains
```

---

## 🔍 Debugging Commands

### Check Ports
```bash
# Windows
netstat -ano | findstr :3000

# Kill process on port
taskkill /PID <pid> /F
```

### Check Node/NPM
```bash
node --version              # Check Node version
npm --version               # Check NPM version
npm list                    # List installed packages
npm outdated                # Check for updates
```

### Clear Cache
```bash
npm cache clean --force     # Clear NPM cache
rm -rf node_modules         # Remove node_modules
rm package-lock.json        # Remove lock file
npm install                 # Reinstall
```

### Next.js Specific
```bash
rm -rf .next                # Remove build folder
npm run build               # Rebuild
```

---

## 📧 Testing Email API

### Using cURL
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "organization": "Test Org",
    "equipmentNeeded": "CNC Machines",
    "message": "Test message"
  }'
```

### Using PowerShell
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/api/contact" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "organization": "Test Org",
    "equipmentNeeded": "CNC Machines",
    "message": "Test message"
  }'
```

---

## 🔐 Environment Variables

### Create .env.local
```bash
# Windows
copy .env.local.example .env.local

# Edit with notepad
notepad .env.local
```

### View Environment Variables
```bash
# Windows
set                         # View all
echo %RESEND_API_KEY%       # View specific

# PowerShell
$env:RESEND_API_KEY         # View specific
Get-ChildItem Env:          # View all
```

---

## 📊 Project Information

### File Counts
```bash
# Count files
dir /s /b | find /c /v ""

# Count lines of code (PowerShell)
Get-ChildItem -Recurse -Include *.js,*.json,*.css | 
  Get-Content | 
  Measure-Object -Line
```

### Disk Usage
```bash
# Windows
dir /s

# Get folder size
dir /s lablinc_poc
```

---

## 🧪 Testing Commands

### Manual Testing Checklist
```bash
# 1. Start server
npm run dev

# 2. Open pages
start http://localhost:3000
start http://localhost:3000/equipment
start http://localhost:3000/about
start http://localhost:3000/partner
start http://localhost:3000/contact

# 3. Test specific equipment
start http://localhost:3000/equipment/cnc-lathe-vtu
```

---

## 🚀 Deployment Commands

### Pre-Deployment
```bash
# 1. Clean install
rm -rf node_modules
npm install

# 2. Build test
npm run build

# 3. Production test
npm start

# 4. Commit and push
git add .
git commit -m "Ready for deployment"
git push origin ADITYA
```

### Vercel Deployment
```bash
# Option 1: CLI
vercel --prod

# Option 2: Git (automatic)
git push origin ADITYA
# Then deploy via Vercel dashboard
```

---

## 🔄 Update Commands

### Update Dependencies
```bash
npm outdated                # Check for updates
npm update                  # Update all
npm update <package>        # Update specific
npm install <package>@latest # Install latest
```

### Update Next.js
```bash
npm install next@latest react@latest react-dom@latest
```

---

## 📝 Useful Shortcuts

### Quick Commands
```bash
# Full reset and restart
rm -rf node_modules .next && npm install && npm run dev

# Quick commit
git add . && git commit -m "Update" && git push

# Build and start
npm run build && npm start

# Docker rebuild
docker-compose down && docker-compose up --build
```

---

## 🆘 Troubleshooting Commands

### Port Already in Use
```bash
# Find process
netstat -ano | findstr :3000

# Kill process
taskkill /PID <pid> /F

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
rm -rf .next
npm run build
```

### Docker Issues
```bash
docker system prune -a
docker-compose down -v
docker-compose up --build
```

---

## 📚 Documentation Commands

### View Documentation
```bash
# Windows
start README.md
start SETUP_GUIDE.md
start DEPLOYMENT_CHECKLIST.md
start PROJECT_SUMMARY.md
```

---

## 🎯 Common Workflows

### Daily Development
```bash
git pull origin ADITYA      # Get latest changes
npm run dev                 # Start development
# ... make changes ...
git add .                   # Stage changes
git commit -m "message"     # Commit
git push origin ADITYA      # Push changes
```

### Before Deployment
```bash
npm run build               # Test build
npm start                   # Test production
git add .                   # Stage all
git commit -m "Deploy"      # Commit
git push origin ADITYA      # Push
# Deploy via Vercel dashboard
```

### After Deployment
```bash
# Test production URL
start https://your-app.vercel.app

# Check logs
vercel logs

# Monitor
vercel inspect <deployment-url>
```

---

**Quick Reference Complete! 🎉**

For more details, see:
- README.md
- SETUP_GUIDE.md
- DEPLOYMENT_CHECKLIST.md
