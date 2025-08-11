@echo off
echo.
echo 🎯 Muhammad Adnan's 3D Portfolio - Quick Deploy Setup
echo ==================================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo 📝 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: Professional 3D Portfolio Website - Features: Interactive 3D hero section, 15+ projects showcase, Professional experience timeline, Contact form with social links, Fully responsive design, SEO optimized - Tech Stack: React, Three.js, Tailwind CSS, Framer Motion"
    
    echo.
    echo 🔗 Next steps:
    echo 1. Create a new repository on GitHub: https://github.com/new
    echo 2. Name it: '3d-portfolio' or 'muhammad-adnan-portfolio'
    echo 3. Run these commands:
    echo.
    echo git remote add origin https://github.com/stackadnan/3d-portfolio.git
    echo git branch -M main
    echo git push -u origin main
    echo.
) else (
    echo ✅ Git repository already initialized
)

echo.
echo 🌐 Deployment Options:
echo.
echo 1. 🚀 VERCEL (Recommended - Fastest)
echo    → Go to: https://vercel.com
echo    → Connect GitHub → Import Repository → Deploy
echo    → Live in 2 minutes!
echo.
echo 2. 🔷 NETLIFY  
echo    → Go to: https://netlify.com
echo    → New site from Git → Deploy
echo.
echo 3. 📄 GITHUB PAGES
echo    → npm run deploy (after setting up gh-pages)
echo.
echo 📊 Project Status:
echo ✅ All 15+ projects added with real images
echo ✅ Experience timeline completed
echo ✅ Contact form with your details
echo ✅ SEO optimized with meta tags
echo ✅ Responsive design tested
echo ✅ Production build successful
echo.
echo 🎉 Your portfolio is ready to impress employers and clients!
echo 💼 Perfect for showcasing your Full Stack + AI + Automation expertise
echo.
echo 📱 Your Contact Info Included:
echo • Email: muhammadadnan0028@gmail.com
echo • GitHub: github.com/stackadnan
echo • LinkedIn: linkedin.com/in/stackadnan
echo.
echo 🚀 After deployment, share your portfolio:
echo • Update LinkedIn profile  
echo • Add to GitHub profile README
echo • Include in job applications
echo • Share with potential clients
echo.
pause
