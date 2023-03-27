const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    // Get the burger object from the request body
    const body = req.body;
    console.log(body);
    // Send a success response
    res.status(200).json({ message: 'Ingredients stock updated successfully.' });
  } catch (err) {
    // Send an error response if there's an error
    res.status(500).json(err);
  }
});

module.exports = router;
