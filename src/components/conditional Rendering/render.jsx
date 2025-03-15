import { useState } from "react"
import './render.css'
function Render () {
    const users = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Leanne",
          "email": "Leanne@april.biz",
          "isFemale": true,
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Ervin",
          "email": "Ervin@melissa.tv",
          "isFemale": false,
        },
        {
          "id": 3,
          "name": "Samantha Bauch",
          "username": "Samantha",
          "email": "Samantha@yesenia.net",
          "isFemale": true,
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Patricia",
          "email": "Patricia.OConner@kory.org",
          "isFemale": false,
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Chelsey",
          "email": "Chelsey@annie.ca",
          "isFemale": true,
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Dennis",
          "email": "Dennis@jasper.info",
          "isFemale": true,
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "username": "Kurtis",
          "email": "Kurtis@billy.biz",
          "isFemale": false,
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "username": "Nicholas",
          "email": "Nicholas@rosamond.me",
          "isFemale": false,
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "isFemale": true,
        },
        {
          "id": 10,
          "name": "Rey Padberg",
          "username": "Rey",
          "email": "Rey.Padberg@karina.biz",
          "isFemale": false,
        }
    ]
    return (
        <div className="org-div">
            {
                users.map((user, ind)=>{
                    return (
                        <section key={user.id} className="my-div">
                            <h3>{user.name}</h3>
                            <h2>{user.username}</h2>
                            <span>{user.email}</span>
                            <p>{user.isFemale? "Female": "Male"}</p>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default Render;