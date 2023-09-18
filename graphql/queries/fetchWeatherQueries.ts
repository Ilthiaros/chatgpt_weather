import { gql } from "@apollo/client";

const fetchWeatherQuery= gql`  
query myQuery(
  $current_weather: String, 
  $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,uv_index_clear_sky_max,sunrise,sunset,time", 
  $hourly: String = "temperature_2m, relativehumidity_2m, apparent_temperature, precipitation, snowfall, snow_depth, windgusts_10m, winddirection_10m, windspeed_10m, windchill, weathercode, time, uv_index, uv_index_clear_sky, visibility, cloudcover, lifted_index, cape, gust_surface", 
  $latitude: String!, 
  $longitude: String!, 
  $timezone: String!
  ) {
  myQuery(
    daily: $daily
    hourly: $hourly
    latitude: $latitude
    longitude: $longitude
    timezone: $timezone
    current_weather: $current_weather
  ) {
    current_weather {
      is_day
      temperature
      time
      weathercode
      winddirection
      windspeed
    }
    daily {
      apparent_temperature_max
      apparent_temperature_min
      sunrise
      sunset
      temperature_2m_max
      temperature_2m_min
      time
      uv_index_clear_sky_max
      uv_index_max
      weathercode
    }
    daily_units {
      apparent_temperature_max
      apparent_temperature_min
      sunrise
      sunset
      temperature_2m_max
      temperature_2m_min
      time
      uv_index_clear_sky_max
      uv_index_max
      weathercode
    }
    elevation
    generationtime_ms
    hourly {
      apparent_temperature
      precipitation
      rain
      relativehumidity_2m
      showers
      snow_depth
      snowfall
      temperature_2m
      time
      uv_index
      uv_index_clear_sky
      windgusts_10m
    }
    hourly_units {
      precipitation
      rain
      relativehumidity_2m
      showers
      snow_depth
      snowfall
      temperature_2m
      time
      uv_index
      uv_index_clear_sky
      windgusts_10m
      apparent_temperature
    }
    latitude
    longitude
    timezone
    timezone_abbreviation
    utc_offset_seconds
  }
}`;