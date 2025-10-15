# Information Security with HelmetJS

## Project Overview
This is a FreeCodeCamp boilerplate project for learning Information Security with HelmetJS. The project teaches security best practices for Node.js/Express applications using the Helmet library.

## Project Structure
```
├── myApp.js          # Main application file (students work here)
├── server.js         # Testing/verification server (DO NOT EDIT)
├── views/
│   └── index.html    # Frontend HTML page
├── public/
│   └── style.css     # Stylesheet
├── package.json      # Dependencies and scripts
└── README.md         # Original project README
```

## Technologies
- **Runtime**: Node.js
- **Framework**: Express.js
- **Security**: Helmet.js (v3.21.3)
- **Port**: 5000 (configured for Replit)

## Key Configuration
- Server binds to `0.0.0.0:5000` for Replit compatibility
- Static files served from `/public` directory
- API routes mounted at `/_api`
- Main route `/` serves the HTML page

## Current State
- ✅ Dependencies installed
- ✅ Server running on port 5000
- ✅ Frontend accessible and working
- ✅ API endpoints responding correctly
- ✅ Deployment configured (autoscale)

## Recent Changes (Oct 15, 2025)
- Imported from GitHub
- Updated port from 3000 to 5000 for Replit
- Configured server to bind to 0.0.0.0
- Set up workflow for automatic server start
- Configured deployment settings

## Development
The main development work happens in `myApp.js` where students implement security features using Helmet.js as part of the FreeCodeCamp curriculum.

## Links
- Original curriculum: https://www.freecodecamp.org/learn/information-security/information-security-with-helmetjs/
