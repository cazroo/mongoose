const fs = require("fs");
const Movie = require("../models/models")

const addMovie = async (movieObj) => {
    try {
        const newMovie = new Movie(movieObj)
        await newMovie.save()
        console.log(`New movie: `, newMovie)
    } catch (error) {
        console.log(error)
    }
}

const listMovies = async (collections) => {
    try {
        const movieArr = await collections
        .find({})
        .project({_id:0})
        .toArray()
        console.log(movieArr) 
    } catch (error) {
        console.log(error)
    }
}

const editMovie = (filterObj, newObj, movieArr) => {
    try {
        let newMovieArr = movieArr
        for (movie in newMovieArr) {
            if (newMovieArr[movie].title === filterObj.title) {
                newMovieArr[movie] = newObj;
                collections.updateOne(filterObj, newObj)
                console.log(newMovieArr)
            } else {
                console.log(error)
            }
        } 
    } catch(error) {
        console.log(error)
    }
}


module.exports = {
    addMovie,
    listMovies,
    editMovie
}