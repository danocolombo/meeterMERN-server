const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');

const Groups = require('../../models/Groups');

// @route    GET api/groups/:mid
// @desc     Get groups for meeting ID
// @access   Private
router.get('/:mid', auth, async (req, res) => {
    try {
        console.log(req.params.mid);
        const groups = await Groups.find({ mid: req.params.mid });

        // Check for ObjectId format and post
        if (!req.params.mid.match(/^[0-9a-fA-F]{24}$/) || !groups) {
            return res.status(404).json({ msg: 'MID value unsupported' });
        }

        res.json(groups);
    } catch (err) {
        console.error(err.message);

        res.status(500).send('Server Error');
    }
});

module.exports = router;
