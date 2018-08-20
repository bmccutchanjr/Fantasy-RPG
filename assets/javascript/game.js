var Boxers = 
{   //  Professional Prize Fighters theme

    folder: "assets/images/boxers/",
    bgColor: "#0000ff",
    avatar:
    [   {   name: "Muhammad Ali",
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
            health: 120,
            attack: 12,
            counter: 12
        },
        {   name: "George Foreman",
            health: 100,
            attack: 12,
            counter: 12
        }
    ],
}

var ScoobyDoo = 
{   //  Scooby Doo theme

    folder: "assets/images/scoobydoo/",
    bgColor: "#ffffff",
    avatar:
    [   {   name: "Fred",
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
        }
    ],
}

var StarWars = 
{   //  Star Wars theme

    folder: "assets/images/starwars/",
    bgColor: "#000000",
    avatar:
    [   {   name: "ObiWan Kenobi",
            health: 120,
            attack: 12,
            counter: 12
        },
        {   name: "Darth Vader",
            health: 180,
            attack: 25,
            counter: 25
        },
        {   name: "Luke Skywalker",
            health: 100,
            attack: 5,
            counter: 5
        },
        {   name: "Darth Sidious",
            health: 150,
            attack: 20,
            counter: 20
        }
    ],
}

var game = 
{   // The game is implemented as an object...
    //

    avatarSelected: false,
    avatar: "",
    playerHealth: 0,
    opponentSelected: false,
    opponent: "",
    opponentHealth: 0,
    themeSelected: StarWars,

    applyTheme(theme)
    {   // apply the selected Theme
        //

        if (theme == "boxers") this.themeSelected = Boxers;
        else if (theme == "scooby doo") this.themeSelected = ScoobyDoo;
        else this.themeSelected = StarWars;

        $("body").css("backgroundColor", this.themeSelected.bgColor);
        $("body").css("background", this.themeSelected.folder + "background.jpg");
    
        for (var i=0; i<4; i++)
        {   // change name, health and image on avatar selection boxes

            $("#name-" + (i+1)).text(this.themeSelected.avatar[i].name);
            $("#img-" + (i+1)).attr("src", this.themeSelected.folder + this.themeSelected.avatar[i].name + ".jpg");
            $("#health-" + (i+1)).text(this.themeSelected.avatar[i].health);
        }
    },

    initGame()
    {   // Initialize the game.  The game starts with the Star Wars theme
        //

        this.avatarSelected = false;
        this.opponentSelected = false;

        this.themeSelected = StarWars;
        this.applyTheme("star wars");

        // When the page first loads, elements of the fight (class="the-fight") are hidden

        $(".the-fight").css("display", "none");

        // When the page first loads, the theme buttons (class="themes") should be hidden

        $(".themes").css("display", "none");

        $("#theme-button").text("SHOW THEMES");
        $("#theme-button").css("display", "inline");
    },

    selectAvatar(selection)
    {   // select the avatar the player has clicked on.  This selection becomes the player's avatar
        // or opponent depending on whether a player avatar has already been selected
    
        if (!this.avatarSelected)
        {   // The player has not yet selected an avatar.  This is it...
        
            this.avatarSelected = true;
            this.avatar = this.themeSelected.avatar [selection - 1];

            $("#choice-" + selection).css("backgroundColor", "green");
            $("#fighter-1").attr("src", $("#img-" + selection).attr("src"));

            $("#prompt-box").text("Select your opponent");
            $("#player-name").text(this.themeSelected.avatar [selection - 1].name);
            this.playerHealth = this.avatar.health;
            $("#player-health").css("width", ((this.playerHealth / this.avatar.health) * 100) + "%");
            $("#player-health").css("backgroundColor", "red");

            // And one more thing...don't let the player change themes after selecting his avatar.
            // Hide all of the theme related buttons

            $("#theme-button").css("display", "none");
            $(".themes").css("display", "none");
        }
        else
        {   // The player has not yet selected an avatar.  This is it...
        
            this.opponentSelected = true;
            this.opponent = StarWars.avatar [selection - 1];

            $("#choice-" + selection).css("backgroundColor", "red");

            $("#fighter-2").attr("src", $("#img-" + selection).attr("src"));

            // hide the avatar selection boxes and display the fight elements

            $(".choice-box").css("display", "none");

            $("#prompt-box").text("ROUND 1 -- Click the FIGHT button");
            $("#opponent-name").text(this.themeSelected.avatar [selection - 1].name);
            this.opponentHealth = this.opponent.health;
            $("#opponent-health").css("width", ((this.opponentHealth / this.opponent.health) * 100) + "%");
            $("#opponent-health").css("backgroundColor", "red");

            $(".the-fight").css("display", "block");
            $(".fight-box").css("display", "flex");
        }
    },

    themeButton()
    {   // the event handler for "SHOW/HIDE THEMES" button
        
        // First, what is the state of the "SHOW/HIDE THEMES" button

        if ($("#theme-button").text() === "SHOW THEMES")
        {   $("#theme-button").text("HIDE THEMES");
            $(".themes").css("display", "inline");
        }
        else
        {   $("#theme-button").text("SHOW THEMES");
            $(".themes").css("display", "none");
        }
    }
}

$(document).ready (function()
{   // Create the Action Listeners for the player to interact with the game
    //

    $(".choice").on("click", function()
    {   // event listener for the avatar selector boxes

        game.selectAvatar($(this).attr("which"));
    })

    $("#theme-button").on("click", function()
    {   // event listener for the avatar selector boxes

        game.themeButton();
    })

    $(".themes").on("click", function()
    {   // event listener for the theme buttons

        game.applyTheme($(this).attr("which"));
    })

    game.themeSelected = StarWars;
    game.initGame();
});
