const router = require('express').Router();
const Blog = require('../models/Blog')


// Your routing code goes here

router.get('/blog', async (req, res) => {
    const { search, page } = req.query; // Extract query parameters
    try {
      let query = {}; // Initialize an empty query
  
      // If search parameter is provided, filter by topic
      if (search) {
        query.topic = { $regex: search, $options: 'i' }; // Case-insensitive search
      }
  
      // Pagination
      const perPage = 5; // Number of blogs per page
      const currentPage = page ? parseInt(page) : 1; // Default to page 1
  
      const skipCount = (currentPage - 1) * perPage;
  
      // Find blogs that match the query and apply pagination
      const users = await Blog.find(query)
        .skip(skipCount)
        .limit(perPage);
  
      // Send the result as JSON response
      res.json({ status: 'success', result: users });
    } catch (err) {
      // Handle errors
      res.status(500).json({ message: err.message });
    }
  });

router.post("/blog",async (req, res) => {
    try {
       
        const users = await Blog.create(req.body);
        res.json({
            status: "success",
            users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})
router.put("blog/:id", async (req, res) => {
    try {
        const users = await Blog.updateOne({_id:req.params.id},{description:req.body.description},{runValidators:true});
        res.json({
            status: "success",
            users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})
router.delete("blog/:id", async (req, res) => {
    try {
        const users = await Blog.deleteOne({_id:req.params.id});
        res.json({
            status: "success",
            users
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }

})
module.exports = router;

