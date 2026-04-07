<img width="1943" height="1093" alt="image" src="https://github.com/user-attachments/assets/cc2ff955-17c2-48c7-81c8-479a0f061850" />

# Mucunguzi Moses Portfolio

I am building African-first digital solutions. With 5 years across web3, civic tech, and product development, I bridge the gap between cutting-edge technology and real-world African needs. Currently building klassapp.xyz. I am committed to open source, digital sovereignty, and a stronger Global South tech ecosystem.

🖥️ See my portfolio at mucunguzi.tech  
✉️ You can contact me at moemucu@gmail.com  
⚡ I love politics and hate politicians. I listen to country music.

## Preview

To view the live site, visit [mucunguzi.tech](https://mucunguzi.tech).

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons
- **TypeScript** - For type-safe configuration

## Updating the Template

### Configuration

The portfolio is configured through `src/config.ts`. This single file controls:

- **Personal Information**: Name, title, description
- **Accent Color**: Primary color theme (changing this will change the accent color site wide)
- **Social Links**: Email, LinkedIn, Twitter, GitHub (all optional)
- **About Section**: Personal bio/description
- **Skills**: List of technical skills
- **Projects**: Project showcase with descriptions and links
- **Experience**: Work history with bullet points
- **Education**: Educational background and achievements

If skills, projects, experience, or education are removed from the config, those sections will be hidden entirely.

### Current profile

- African-first digital solutions
- 5 years across web3, civic tech, and product development
- Currently building `klassapp.xyz`
- Focused on open source, digital sovereignty, and the Global South tech ecosystem
- Portfolio: `mucunguzi.tech`
- Contact: `moemucu@gmail.com`
- Skills: `PHP`, `Solidity`, `React`, `Next.js`

### Example structures

Here's what the config data structure looks like for each section:

#### Basic Information
```typescript
name: "Your Name",
title: "Your Job Title",
description: "Brief site description",
accentColor: "#1d4ed8", // Hex color for theme
```

#### Social Links (all optional)
```typescript
social: {
  email: "your-email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourprofile", 
  github: "https://github.com/yourusername",
}
```

#### About Section
```typescript
aboutMe: "I am building African-first digital solutions. With 5 years across web3, civic tech, and product development, I bridge the gap between cutting-edge technology and real-world African needs. Currently building klassapp.xyz. I am committed to open source, digital sovereignty, and a stronger Global South tech ecosystem."
```

#### Skills
```typescript
skills: ["PHP", "Solidity", "React", "Next.js"]
```

#### Projects
```typescript
projects: [
  {
    name: "Project Name",
    description: "Brief description of what the project does and its impact",
    link: "https://github.com/yourusername/project",
    skills: ["React", "Node.js", "AWS"], // Technologies used
  }
]
```

#### Experience
```typescript
experience: [
  {
    company: "Company Name",
    title: "Your Job Title",
    dateRange: "Jan 2022 - Present",
    bullets: [
      "Led development of microservices architecture serving 1M+ users",
      "Reduced API response times by 40% through optimization",
      "Mentored team of 5 junior developers",
    ],
  }
]
```

#### Education
```typescript
education: [
  {
    school: "University Name",
    degree: "Bachelor of Science in Computer Science",
    dateRange: "2014 - 2018",
    achievements: [
      "Graduated Magna Cum Laude with 3.8 GPA",
      "Dean's List all semesters",
      "President of Computer Science Club"
    ]
  }
]
```

### Icons

The template uses [Tabler Icons](https://tabler.io/icons) for all icons. If you wish to add more icons and have it look consistent with what's already there, you can browse through their extensive icon library.

## Project Structure

```
mucunguzi.tech/
├── public/
│   ├── CNAME                # Custom domain for GitHub Pages
│   ├── Mucu1.png            # Favicon and logo image
│   └── images/              # Gallery and profile images
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Local Development

If you'd like to run it locally:

```
git clone https://github.com/Mucunguzi256/mucunguzi.tech.git
cd mucunguzi.tech
npm install
```

After that, start up the Astro dev server with:

```
npm run dev
```

## Deployment

The site is deployed with GitHub Pages and a custom domain.

GitHub Pages setup notes:

- The repo uses Astro static output.
- The custom domain is set to `mucunguzi.tech`.
- The `public/CNAME` file is present so Pages knows the custom domain.
- The workflow in `.github/workflows/deploy.yml` deploys the `dist` folder with GitHub Actions.
- If GitHub Pages shows a 404, confirm Pages is enabled in the repository settings and the source is set to GitHub Actions.

For other hosting options, you can still deploy as a static site easily. Here are some alternatives:

- To deploy with Netlify, [click here](https://docs.astro.build/en/guides/deploy/netlify/).
- To deploy with Vercel, [click here](https://docs.astro.build/en/guides/deploy/vercel/).
- To deploy with GitHub Pages, [click here](https://docs.astro.build/en/guides/deploy/github/).
- To deploy with Cloudflare Pages, [click here](https://docs.astro.build/en/guides/deploy/cloudflare/).
- To deploy with Render, [click here](https://docs.astro.build/en/guides/deploy/render/).

Want to deploy somewhere else? Find more guides [here](https://docs.astro.build/en/guides/deploy/).

## Changelog

To view the changelog, see CHANGELOG.md.

## License

This project is fully and completely MIT. See LICENSE.md.

## Questions?

Feel free to reach out at [moemucu@gmail.com](mailto:moemucu@gmail.com) if you have any questions or need help.
