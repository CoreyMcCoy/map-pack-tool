# Map Pack Tool

A React-based tool designed to help local businesses optimize their presence in the Google Map Pack. This project provides a checklist for tracking progress on various tactics to improve local SEO rankings.

## Features

- Built with React and Vite for fast development and performance.
- Tailwind CSS for modern, responsive, and utility-first styling.
- Persistent progress tracking using local storage.
- Customizable business name and keyword for personalized context.
- Modular and reusable components for easy customization.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CoreyMcCoy/map-pack-tool.git
   cd map-pack-tool
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Project Structure

```
map-pack-tool/
├── public/               # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── data/            # Data files (e.g., areas.js)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json         # Project metadata and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Available Scripts

- `npm run dev` - Start the development server with hot reload.
- `npm run build` - Build the app for production.
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint to check code quality.

## Customization

- Modify components in `src/components/` to fit your needs.
- Update styles in `src/index.css` or component-specific CSS files.
- Add or edit data in `src/data/` to customize the checklist.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
