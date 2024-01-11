const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) =>{
    const{username} = req.body;

    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username, secret: username, first_name: username
            },
            {headers: {"private-key":"f96e3346-a792-4358-989b-bae8ef7e279a"}}
        )
        return res.status(r.status).json(r.data)
    }catch(except){
        return res.status(except.response.status).json(except.response.data)
    }
});

app.listen(3001);