# Muhammad Adnan - 3D Portfolio Website

A modern, professional 3D portfolio website built with React, Three.js, and Tailwind CSS showcasing my skills as a Full Stack Developer specializing in automation, AI, and web development.

## 🌟 Features

- **Interactive 3D Elements**: Powered by Three.js and React Three Fiber
- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean design with smooth animations
- **Professional Sections**:
  - Hero section with 3D animated elements
  - About me with technical expertise
  - Work experience timeline
  - Projects showcase with filtering
  - Contact form with social links

## 🚀 Technologies Used

- **Frontend**: React 18, Vite
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Navigation bar with social links
│   ├── Hero.jsx           # Hero section with 3D elements
│   ├── About.jsx          # About section with services
│   ├── Experience.jsx     # Work experience timeline
│   ├── Projects.jsx       # Projects showcase with filtering
│   ├── Contact.jsx        # Contact form and information
│   ├── LoadingSpinner.jsx # Loading component
│   └── CanvasLoader.jsx   # 3D canvas loader
├── App.jsx                # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/stackadnan/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📞 Contact Information

- **Email**: muhammadadnan0028@gmail.com
- **GitHub**: [stackadnan](https://github.com/stackadnan)
- **LinkedIn**: [stackadnan](https://www.linkedin.com/in/stackadnan/)

## 🎨 Customization

### Adding New Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```javascript
{
  name: "Your Project Name",
  description: "Project description...",
  tags: ["React", "Node.js", "MongoDB"],
  image: "/path/to/image",
  source_code_link: "https://github.com/...",
  live_demo_link: "https://...",
  icon: YourIcon,
  category: "web" // web, automation, ai, trading, game
}
```

### Updating Experience

Modify the `experiences` array in `src/components/Experience.jsx` to add new work experiences.

### Changing Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: '#0a0a0a',
  secondary: '#1a1a1a',
  accent: '#3b82f6',
  text: '#ffffff',
  'text-secondary': '#a3a3a3',
}
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (320px - 767px)

## ⚡ Performance

- Lazy loading for 3D components
- Optimized bundle size with Vite
- Efficient rendering with React Three Fiber
- Compressed assets and code splitting

## 🌐 Deployment

The website can be deployed on:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/stackadnan/3d-portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

**Built with ❤️ by Muhammad Adnan**
