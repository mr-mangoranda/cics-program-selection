# 🎓 CICS Program Selection

Built for CICS (College of Information and Computing Sciences) freshmen at **Mindanao State University**. It will helps incoming students explore and choose the right academic program for them.

🌐 **Live App:** [cics-program-selection.vercel.app](https://cics-program-selection.vercel.app)

---

## 📸 Preview

> **Tip:** Replace the placeholder below with a real screenshot of your app.
> Take one by visiting your [live site](https://cics-program-selection.vercel.app) and pressing `Ctrl+Shift+S` (or use browser devtools → "Capture screenshot").

![App Preview](https://via.placeholder.com/900x500.png?text=CICS+Program+Selection+–+App+Screenshot)

---

## 📖 About

The **CICS Program Selection** app is designed to guide incoming freshmen at Mindanao State University's College of Information and Computing Sciences in choosing the best academic track for their goals and interests.

---

## ✨ Features

- 📚 Browse all CICS programs with descriptions and career paths
- 📄 Access program materials stored in `public/materials/`
- ⚡ Fast, responsive UI built with TypeScript + Vite
- 🚀 Deployed and accessible anytime via Vercel

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| [TypeScript](https://www.typescriptlang.org/) | Primary language (88.8%) |
| [Vite](https://vite.dev/) | Build tool & dev server |
| [Vercel](https://vercel.com/) | Hosting & deployment |
| HTML / CSS | Structure and styling |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mr-mangoranda/cics-program-selection.git

# 2. Navigate into the project
cd cics-program-selection

# 3. Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
cics-program-selection/
├── public/
│   └── materials/        # Program brochures, images, or PDFs
├── src/                  # TypeScript source files (components, logic, etc.)
├── index.html            # App entry point
├── metadata.json         # App metadata (name, description, capabilities)
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── .env.example          # Environment variable template
└── package.json          # Project scripts and dependencies
```

## ☁️ Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the project
3. Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**
4. Deploy! Vercel will auto-build and publish on every push to `main`

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m 'Add your feature'`
4. Push to your fork: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source. All rights reserved © mr-mangoranda — Mindanao State University CICS.

---

*Built with 💚 for MSU-CICS freshmen by [mr-mangoranda](https://github.com/mr-mangoranda)*
