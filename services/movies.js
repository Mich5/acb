import api from "./api";
export function featured() {
    return {
        id: "471754308",
        title: "Halcyon Days",
        year: "2019",
        rated: "PG-13",
        genre: ["Drama", "Adventure", "Fantasy"],
        duration: "1h 35min",
        production: "Diamond Studios",
        director: "Anthony Mwanza, Joe Russo",
        writer: "Christopher Chungu",
        cast: [
            "Bradley Cooper",
            "Brie Larson",
            "Chris Hemsworth",
            "Chris Evans",
        ],
        plot: "After a series of devastating events, the village is in ruins but Catherine has strong hope for the future.",
        language: "English",
        country: "ZM",
        awards: "N/A",
        poster: "https://images.unsplash.com/photo-1505421031134-e57263cae630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=728&q=80",
        ratings: [],
        type: "movie"
    }
}

export function getMovie(id) {
    return api().find(movie => {
        return movie.id === id
    })
}
export function allMovies() {
    return api()
}
export function popular() {
    return []
}
export function latest() {
    return []
}
export function series() {
    return []
}
export function related() {
    return []
}