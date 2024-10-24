# Weather Monitoring Application

This project is a real-time weather monitoring application using the MERN stack. It fetches and displays weather data, including dominant weather conditions, temperature, and other metrics using data from the OpenWeatherMap API.

## Deployed Application

You can access the live version of this application here:
- [Weather App - Deployed Link](https://weather-app-bay-alpha.vercel.app)

## Features

- Displays real-time weather data using the OpenWeatherMap API.
- Shows dominant weather conditions, minimum, maximum, and average temperatures.
- User-friendly interface for searching and displaying weather information.
- Hosted on Vercel.

## Technologies Used

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express
- **API:** OpenWeatherMap API for weather data.
- **Deployment:** Vercel

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- API Key for OpenWeatherMap (sign up at [OpenWeatherMap](https://openweathermap.org/)).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AyushPrakash123/weather-app.git
   cd weather-app

Install dependencies:

```bash
npm install
```

Start the application:
```bash
npm run dev
```

Open the application in your browser at:
```bash
http://localhost:3000
```

Usage
Enter a city name to fetch the latest weather data.
View the dominant weather condition, along with min, max, and average temperatures.
Refresh data as needed for updated weather information.

Example
City: Lucknow
Temperature Range: Min: 28°C, Max: 33°C, Avg: 30°C
Dominant Weather: Clear Sky

Design Choices
React with Vite: Chosen for faster development and build process.
Tailwind CSS: For quick styling and responsive design.
OpenWeatherMap API: Provides reliable and real-time weather data.
Vercel Deployment: Ensures a seamless deployment experience.

Known Issues
Rate Limiting: The OpenWeatherMap API has rate limits, which can affect multiple requests in a short period.
No Database: Currently, no historical data storage as the app does not use a database.

License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
