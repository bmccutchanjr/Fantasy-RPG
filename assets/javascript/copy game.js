alert ("JavaScript");
Boxers:
{   folder="../themes/boxers",
    bgColor="#ff0000",
    avatars=[
    {   name: "Muhammed Ali",
        health: 150,
        attack: 12,
        counter: 12
    },
    {   name: "Oscar de la Hoya",
        health: 100,
        attack: 12,
        counter: 12
    },
    {   name: "Sugar Ray Leonard",
        health: 100,
        attack: 12,
        counter: 12
    },
    {   name: "George Foreman",
        health: 150,
        attack: 12,
        counter: 12
    }]
}

ScoobyDoo:
{   folder="../themes/scooby-doo",
    bgColor="#0000ff",
    avatars=[
    {   name: "Fred",
        health: 150,
        attack: 12,
        counter: 12
    },
    {   name: "Velma",
        health: 120,
        attack: 12,
        counter: 12
    },
    {   name: "Daphne",
        health: 100,
        attack: 12,
        counter: 12
    },
    {   name: "Shaggy",
        health: 100,
        attack: 12,
        counter: 12
    }]
}

StarWars:
{   folder="../themes/star-wars",
    bgColor="#000000",
    avatars=[
    {   name: "ObiWan Kenobi",
        health: 120,
        attack: 12,
        counter: 12
    },
    {   name: "Darth Vader",
        health: 120,
        attack: 12,
        counter: 12
    },
    {   name: "Luke Skywalker",
        health: 100,
        attack: 12,
        counter: 12
    },
    {   name: "Darth Sidious",
        health: 150,
        attack: 12,
        counter: 12
    }]
}

var game = 
{   // the game is configured as an object
    //

    Avatar =
    {   // the properties of generic avatar

        selected = false,
        name = "",
        startingHealth = 100,
        currentHealth = 100,
        attack = 12,
        counter = 12
    },

    player = new this.Avatar,
    opponent = new this.Avatar,

    applyTheme (theme)
    {   // Changes the theme
        //
console.log("here i am");
        $().attr("background", "url(\"" + theme.folder + "background.jpg\)");
        $().attr("backgroundColor", theme.bgColor);
        for (var i=0; i<themes.avatars.length; i++)
        {   // initialize "#choice-box" for each of the theme avatars.  There are four,
            // one for each player option

            
            $().attr("name-" + i, theme.avatar[i].name);
            // $().attr("img-" + i, theme.avatar[i].image);
            $().attr("strength-" + i, theme.avatar[i].strength);
        }
    },

    selectedTheme = new StarWars,

    initGame()
    {   // Initialize the game.  The game starts with the Star Wars theme
        //

console.log ("here i am");
console.log (selectedTheme);
        applyTheme (selectedTheme);
    }
}

$().on("ready", function()
{   // Create the Action Listener to start the game
    //
console.log("here i am");
    game.initGame();
});
