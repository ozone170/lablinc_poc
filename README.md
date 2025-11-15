# LabLinc POC - Equipment Sharing Platform

Desktop-only prototype website for LabLinc that lists engineering equipment and allows users to contact through a secure email API.

## Branch: ADITYA

## Features

- ✅ Home page with hero, categories, and featured equipment
- ✅ Equipment listing with filters (category, availability, GPU tier, civil, environmental)
- ✅ Equipment detail pages with booking forms
- ✅ About page with team information
- ✅ Partner page with application form
- ✅ Contact page with email integration
- ✅ Serverless email API using Resend
- ✅ Docker support
- ✅ Vercel deployment ready

## Tech Stack

- Next.js 14
- React 18
- Resend API for emails
- Docker & Docker Compose

## Setup Instructions

### 1. Install Dependencies

```bash
cd lablinc_poc
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
AI_GATEWAY_API_KEY=your_ai_gateway_api_key_here
```

**Important:** Never commit `.env.local` to Git. It's already in `.gitignore`.

### 3. Get Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add it to your `.env.local` file

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Setup

### Build and Run with Docker

```bash
# Build the image
docker build -t lablinc-poc .

# Run the container
docker run -p 3000:3000 -e RESEND_API_KEY=your_key -e AI_GATEWAY_API_KEY=your_key lablinc-poc
```

### Using Docker Compose

Create a `.env` file with your keys, then:

```bash
docker-compose up
```

## Vercel Deployment

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin ADITYA
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Select the `ADITYA` branch
4. Add environment variables:
   - `RESEND_API_KEY`
   - `AI_GATEWAY_API_KEY`
5. Deploy

### 3. Configure Resend Domain (Optional)

For production emails, configure a custom domain in Resend:
1. Add your domain in Resend dashboard
2. Update DNS records
3. Update the `from` field in `/pages/api/contact.js`

## Project Structure

```
lablinc_poc/
├── components/
│   └── Layout.js          # Main layout with header/footer
├── data/
│   └── equipment.json     # Equipment data (25 items)
├── pages/
│   ├── api/
│   │   └── contact.js     # Email API endpoint
│   ├── equipment/
│   │   ├── [slug].js      # Equipment detail page
│   │   └── index.js       # Equipment list page
│   ├── _app.js
│   ├── _document.js
│   ├── about.js           # About page
│   ├── contact.js         # Contact page
│   ├── index.js           # Home page
│   └── partner.js         # Partner page
├── styles/
│   ├── globals.css
│   ├── Layout.module.css
│   ├── Home.module.css
│   ├── Equipment.module.css
│   ├── EquipmentDetail.module.css
│   ├── About.module.css
│   ├── Contact.module.css
│   └── Partner.module.css
├── .env.local.example     # Example env file
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── next.config.js
├── package.json
└── README.md
```

## Pages

- **Home (/)** - Hero, categories, featured equipment, how it works
- **Equipment (/equipment)** - Filterable equipment list
- **Equipment Detail (/equipment/[slug])** - Individual equipment with booking form
- **About (/about)** - Company info and team
- **Partner (/partner)** - Partnership application form
- **Contact (/contact)** - Contact form with email integration

## Equipment Categories

- CNC Machines
- 3D Printers
- Electronics
- Mechanical
- Material Testing
- GPU Workstations
- AI Servers
- Civil
- Environmental

## Contact Information

- **Email:** lablinc.global@gmail.com
- **Address:** VTU, Jnana Sangama, Belagavi – 590018, Karnataka
- **Instagram:** https://www.instagram.com/lablinc
- **LinkedIn:** https://www.linkedin.com/company/lablinc

## Team

- Niranjan Desai - Operations
- Narendra Hannurkar - Operations
- Aditya Shinde - Technical

## Notes

- This is a desktop-only POC
- No institution pages or filtering by institution
- Equipment data is static (from JSON file)
- Email API sends to lablinc.global@gmail.com
- All forms show success popups (booking form doesn't send emails yet)

## License

Private - LabLinc POC
