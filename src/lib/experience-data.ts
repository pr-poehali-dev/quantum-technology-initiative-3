export interface Experience {
  id: string
  title: string
  company: string
  location: {
    city: string
    country: string
    lat: number
    lng: number
    isRemote: boolean
  }
  startDate: string
  endDate: string
  color: "pink" | "yellow" | "green" | "blue"
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Берлинская техно-сцена",
    company: "Клубы, лейблы и андеграунд",
    location: {
      city: "Берлин",
      country: "Германия",
      lat: 52.52,
      lng: 13.405,
      isRemote: false,
    },
    startDate: "2020-01-15",
    endDate: "2024-12-27",
    color: "pink",
  },
  {
    id: "2",
    title: "Хаус-сцена Лондона",
    company: "UK garage, bass и андеграунд",
    location: {
      city: "Лондон",
      country: "Великобритания",
      lat: 51.5072,
      lng: -0.1276,
      isRemote: false,
    },
    startDate: "2020-06-20",
    endDate: "2024-12-27",
    color: "blue",
  },
  {
    id: "3",
    title: "Электронная сцена Москвы",
    company: "Рейвы, лейблы и резиденты",
    location: {
      city: "Москва",
      country: "Россия",
      lat: 55.7558,
      lng: 37.6173,
      isRemote: false,
    },
    startDate: "2021-03-10",
    endDate: "2024-12-27",
    color: "yellow",
  },
  {
    id: "4",
    title: "Танцевальная сцена Детройта",
    company: "Родина техно и хауса",
    location: {
      city: "Детройт",
      country: "США",
      lat: 42.3314,
      lng: -83.0458,
      isRemote: false,
    },
    startDate: "2021-09-05",
    endDate: "2024-12-27",
    color: "green",
  },
  {
    id: "5",
    title: "Клубная сцена Ибицы",
    company: "Столица мировых рейвов",
    location: {
      city: "Ибица",
      country: "Испания",
      lat: 38.9067,
      lng: 1.4206,
      isRemote: false,
    },
    startDate: "2022-02-18",
    endDate: "2024-12-27",
    color: "pink",
  },
]