# Simple Website Angular

A simple, responsive Angular web application that displays a gallery of images. The application is designed to be fully functional across all devices and includes features for fetching and navigating images from an external source.

## Features

1. **Responsive Design**: Works seamlessly across mobile, tablet, and desktop devices.
2. **Image Gallery**: Fetches images from an external API and displays them in a gallery format.
3. **Popup Navigation**: Allows users to click on an image to view it in a popup, with navigation options to view other images.
4. **Zoneless Change Detection**: The application utilizes Angular’s zoneless mode for optimized performance.
5. **Server-Side Rendering (SSR)**: Implemented using Angular SSR with signals for enhanced performance.

## Project Structure

The project is organized as follows:

```plaintext
src/
│
├── app/
│   ├── features/
│   │   ├── article/                # Components related to articles
│   │   └── image-gallery/          # Components for the image gallery
│   │
│   ├── layout/
│   │   ├── footer/                 # Footer components
│   │   └── main/                   # Main layout components
│   │
│   ├── models/                     # Data models used in the app (e.g., image.ts)
│   │
│   ├── pages/
│   │   └── button/                 # Button components used in pages
│   │
│   ├── utils/
│   │   └── constants/              # Utility constants for text display
│   │   └── date.ts                 # Helper functions for date manipulation
│   │
│   └── styles.scss                 # Global styles
│
├── assets/                         # Static assets like images and styles
│
└── angular.json                    # Angular configuration file
```

## Installation

To set up and run the application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/simple-website-angular.git
   ```
2. Navigate to the project directory:
   ```bash
   cd simple-website-angular
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. To build the application for production:
   ```bash
   npm run build
   ```

## Key Packages

- **Angular**: `^18.2.0`
- **Angular CLI**: `^18.2.0`
- **RxJS**: `~7.8.0`
- **Zone.js**: `~0.14.10` (Note: This package is loaded but not used due to zoneless configuration)
- **Express**: `^4.18.2`
- **Typescript**: `~5.5.2`

## API Integration

The application integrates with the following API for fetching images:

- **Picsum Photos**: `https://picsum.photos/v2/list?limit=10`

## Usage

- The user can click on an image to open it in a popup window.
- Users can navigate between images using the provided navigation controls.

## SSR Instructions

To run the server-side rendered (SSR) version of the application:

1. Build the SSR application:
   ```bash
   npm run build
   ```
2. Serve the SSR version:
   ```bash
   npm run serve:ssr:simple-website-angular
   ```
