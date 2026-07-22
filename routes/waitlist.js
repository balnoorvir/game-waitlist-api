
const express = require("express");

const router = express.Router();

const waitlist = require("../data/waitlist");
const xss = require("xss");
router.get("/", (req, res) => {

    if (waitlist.length === 0) {

        return res.status(200).json({
            message: "No data found"
        });

    }

   res.status(200).json({
    success: true,
    count: waitlist.length,
    data: waitlist
});

});
router.get("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const player = waitlist.find(item => item.id === id);

    if (!player) {

        return res.status(404).json({
            message: "Player not found"
        });

    }

res.status(200).json({
    success: true,
    data: player
});

});
router.post("/", (req, res) => {

  const name = xss(req.body.name?.trim());
const game = xss(req.body.game?.trim());

    if (!name || !game) {

        return res.status(400).json({
            message: "Name and Game are required"
        });

    }

    const newPlayer = {

        id: waitlist.length + 1,
        name,
        game

    };

    waitlist.push(newPlayer);

    console.log("[Analytics] User interacted with Game Waitlist CRUD API");

   res.status(201).json({
    success: true,
    message: "Player added successfully",
    data: newPlayer
});

});
router.put("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const player = waitlist.find(item => item.id === id);

    if (!player) {

        return res.status(404).json({
            message: "Player not found"
        });

    }

   const name = xss(req.body.name?.trim());
const game = xss(req.body.game?.trim());

    if (!name || !game) {

        return res.status(400).json({
            message: "Name and Game are required"
        });

    }

    player.name = name;
    player.game = game;

    console.log("[Analytics] User interacted with Game Waitlist CRUD API");

  res.status(200).json({
    success: true,
    message: "Player updated successfully",
    data: player
});

});
router.delete("/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = waitlist.findIndex(item => item.id === id);

    if (index === -1) {

        return res.status(404).json({
            message: "Player not found"
        });

    }

    const deletedPlayer = waitlist.splice(index, 1);

    console.log("[Analytics] User interacted with Game Waitlist CRUD API");

   res.status(200).json({
    success: true,
    message: "Player deleted successfully",
    data: deletedPlayer[0]
});

});
module.exports = router;