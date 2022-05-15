import express from 'express';
import {genres} from './genresData';
import Genre from './genreModel';


const router = express.Router(); 
router.get('/', (req, res) => {
    res.json(genres);
});

// Get genre details
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (genres.id == id) {
        res.status(200).json(genres);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});


// Get all genres
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});


export default router;