var movies = [
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false,
    },
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: true,
    },
    {
        title: "Mad Max Fury",
        rating: 5,
        hasWatched: true,
    }
]

movies.forEach(function(dict){
    if (dict.hasWatched) {
        console.log("You have watched " + dict.title + " - " + dict.rating + " stars")
    }
    else {
        console.log("You have not seen " + dict.title + " - " + dict.rating + " stars")
    }
});