# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features multiple language support, dark/light mode toggle, and smooth animations.

## Features

- **Multi-language Support**: English and Hindi language support using `next-intl`
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Smooth Animations**: Engaging animations powered by Framer Motion and React Type Animation
- **Contact Form**: Email contact form integrated with Resend service
- **3D Graphics**: 3D elements using React Three
- **Timeline Component**: Interactive timeline for showcasing work experience

## Tech Stack

- **Framework**: [Next.js 14.2.3](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**:
  - [Framer Motion](https://www.framer.com/motion/)
  - [React Type Animation](https://www.npmjs.com/package/react-type-animation)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **UI Components**: [React Icons](https://react-icons.github.io/react-icons/)
- **3D Graphics**: [@react-three/drei](https://drei.pmnd.rs/)
- **Email Service**: [Resend](https://resend.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Hosting**: [Netlify](https://www.netlify.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```


### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build for production:
```bash
npm run build
```

### Start Production Server

Start the production server:
```bash
npm start
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── [locale]/          # Locale-specific routes
├── components/            # Reusable React components
├── context/              # React context for state management
├── lib/                  # Utility functions and helpers
├── messages/             # i18n translation messages
├── public/               # Static assets
├── middleware.ts         # Next.js middleware for i18n routing
└── i18n.ts              # i18n configuration
```

## Languages Supported

- English (en)
- Hindi (hi)

Switch languages using the language selector in the UI. The selected language preference is maintained in the URL routing.

## Customization

### Adding New Languages

1. Create translation files in the `messages` directory
2. Update the `i18n.ts` configuration
3. Add the language option to your language selector component

### Styling

Customize styles using Tailwind CSS. Edit `tailwind.config.ts` or modify component classes directly.

### Colors and Theme

Adjust the color scheme in `tailwind.config.ts` or through the context-based theme management.

## Deployment

### Netlify

This project is configured for Netlify deployment:

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect to Netlify and select the repository
3. Netlify will automatically detect `next.config.js` and deploy
4. Set required environment variables in Netlify dashboard

### Vercel

To deploy on Vercel:

```bash
npm install -g vercel
vercel login
vercel
```

## Environment Variables

Create a `.env.local` file in the root directory with:

```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key

# Add other environment variables as needed
```

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Performance

The website is optimized for performance with:
- Image optimization using `next/image`
- Code splitting and lazy loading
- CSS minification with Tailwind
- Static generation where possible

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For inquiries or questions about this portfolio, please use the contact form on the website or reach out through the provided contact channels.

---

Built with ❤️ using Next.js and modern web technologies.
