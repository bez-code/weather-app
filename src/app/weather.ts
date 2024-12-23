export interface Weather {
  weather: weatherInfo[],
  main: {
    temp: number,
    pressure: number,
    humidity: number
  },
  wind: {
    speed: number,
  },
  sys: {
    country: string
  },
  name: string;
}
interface weatherInfo {
  main: string,
  icon: string,
}
