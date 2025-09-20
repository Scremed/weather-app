# Weather App

A modern weather application built with TypeScript and React, leveraging the Next.js framework to deliver real-time weather data, air quality, and forecasts for any city worldwide.

## Features

- **Current Weather:** See real-time weather conditions (temperature, description, icon) for your selected city.
- **Five-Day Forecast:** Detailed 5-day weather outlook with min/max temperatures and weather icons.
- **Feels Like:** Insight into how the temperature feels compared to actual readings.
- **Air Quality:** Up-to-date air pollution metrics.
- **UV Index:** Current UV index for the location.
- **Wind, Humidity, Pressure, Visibility, Sunset:** Comprehensive meteorological parameters.
- **Daily Forecasts:** Carousel view of today's hourly weather.
- **Popular Cities:** Quick selection of pre-defined major cities.
- **Interactive Map:** OpenStreetMap integration to visualize the selected city.
- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Debounced City Search:** Efficient city search with input debouncing to minimize API calls.

## Technologies Used

- **TypeScript** & **React** (with functional components and hooks)
- **Next.js** (App Router & API routes)
- **Axios** for API requests
- **Moment.js** for date and time formatting
- **OpenWeatherMap API** for weather and forecast data
- **OpenStreetMap** (via React-Leaflet) for interactive mapping
- **Lodash** for utility functions (debounce)
- **TailwindCSS** for styling
- **Context API** for global state management

## Getting Started

1. **Clone this repository:**
   ```sh
   git clone https://github.com/Scremed/weather-app.git
   cd weather-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up your environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```
     OPENWEATHERMAP_API_KEY=your_api_key_here
     ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/Components/` — Reusable UI components (Temperature, DailyForecast, FeelsLike, etc.)
- `app/api/` — Next.js API routes for backend logic (fetching weather, air quality, etc.)
- `app/context/` — Context providers for global state.
- `app/page.tsx` — Main application page.

## API Reference

- Uses the [OpenWeatherMap API](https://openweathermap.org/api) — you need a free API key.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

---

**Author:** [Scremed](https://github.com/Scremed)
