var Boxers = 
{   //  Professional Prize Fighters theme

    header:
    {   background: "#000000",
        border:
        {   where: ["top", "right", "bottom", "left"],
            color: "white",
            radius: "2px",
            style: "solid",
            width: "2px"
        },
        text:   "CLASSIC FISTICUFFS",
        color: "white"
    },
    folder: "assets/themes/boxers/",
    background: "black",
    image: "background.jpg",
    color: "white",
    avatar:
    [   {   name: "Muhammad Ali",
            fileName: "ali.jpg",
            health: 150,
            startHealth: 150,
            attack: 12,
            counter: 12
        },
        {   name: "Oscar de la Hoya",
            fileName: "delahoya.jpg",
            health: 100,
            startHealth: 100,
            attack: 12,
            counter: 12
        },
        {   name: "Sugar Ray Leonard",
            fileName: "leonard.jpg",
            health: 120,
            startHealth: 120,
            attack: 12,
            counter: 12
        },
        {   name: "George Foreman",
            fileName: "foreman.jpg",
            health: 180,
            startHealth: 180,
            attack: 12,
            counter: 12
        }
    ],
}

var ScoobyDoo = 
{   //  Scooby Doo theme

    header:
    {   background: "#ff0000",
        border:
        {   where: ["top", "right", "bottom", "left"],
            color: "pink",
            radius: "10px",
            style: "solid",
            width: "2px"
        },
        text:   "Scooby Doo Smackdown",
        color: "white"
    },
    folder: "assets/themes/scoobydoo/",
    background: "#ffffff",
    image: "background.jpg",
    color: "black",
    avatar:
    [   {   name: "Fred",
            fileName: "fred.jpg",
            health: 150,
            startHealth: 150,
            attack: 15,
            counter: 15
        },
        {   name: "Velma",
            fileName: "velma.jpg",
            health: 120,
            startHealth: 120,
            attack: 12,
            counter: 12
        },
        {   name: "Daphne",
            fileName: "daphne.jpg",
            health: 95,
            startHealth: 95,
            attack: 10,
            counter: 10
        },
        {   name: "Shaggy",
            fileName: "shaggy.jpg",
            health: 105,
            startHealth: 105,
            attack: 8,
            counter: 8
        }
    ],
}

var StarWars = 
{   //  Star Wars theme

    header:
    {   background: "black",
        border:
        {   where: ["top", "bottom"],
            color: "gold",
            radius: "0px",
            style: "double",
            width: "4px"
        },
        text:   "STAR WARS RPG",
        color: "gold"
    },
    folder: "assets/themes/starwars/",
    background: "black",
    image: "none",
    color: "gold",
    avatar:
    [   {   name: "ObiWan Kenobi",
            fileName: "obiwan.jpg",
            health: 120,
            startHealth: 120,
            attack: 12,
            counter: 12
        },
        {   name: "Darth Vader",
            fileName: "vader.jpg",
            health: 180,
            startHealth: 180,
            attack: 20,
            counter: 20
        },
        {   name: "Luke Skywalker",
            fileName: "luke.jpg",
            health: 100,
            startHealth: 100,
            attack: 5,
            counter: 5
        },
        {   name: "Darth Sidious",
            fileName: "sidious.jpg",
            health: 150,
            startHealth: 150,
            attack: 25,
            counter: 25
        }
    ],
}

var game = 
{   // The game is implemented as an object...
    //

    iconBox: [],                // An empty array of all the children of .chooser.  These elements
                                // represent the player's choices in the game
    avatarSelected: false,
    Avatar: "",                 // An empty object that will represent the player avatar during the game
    Opponent: "",               // An empty object that will represent the player's opponent during the game
    round: 0,

    numOpponents: 3,            // The number of opponents remaining.  The game defaults to 3
    Theme: StarWars,            // The selected theme.  The default theme is StarWars.

    // audio
    tada: new Audio("assets/audio/ta-da.mp3"),
    wahwah: new Audio("assets/audio/wah-wah.mp3"),

    applyTheme(theme)
    {   // apply the selected Theme
        //

        switch (theme)
        {   case  "boxers":
            {   this.Theme = Boxers;
                break;
            }
            case "scooby doo":
            {   this.Theme = ScoobyDoo;
                break;
            }
            default:
            {   this.Theme = StarWars;
                break;
            }
        }

        // set the page background
        $("body").css("background", this.Theme.background);
        $("body").css("background-image", "url(" + this.Theme.folder + this.Theme.image + ")");
        // these attributes appear to be lost when the background image changes
        $("body").css("background-repeat", "repeat-y");
        $("body").css("background-attachment", "fixed");
        $("body").css("background-size", "100%");

        $("body").css("color", this.Theme.color);

        $("button").css("background", this.Theme.header.background);
        $("button").css("border-color", this.Theme.header.border.color);
        $("button").css("color", this.Theme.header.color);

        // the header
        // remove any border
        $("header").css("border", "none");

        // add the border as spec'd in the theme
        for (var i=0; i<this.Theme.header.border.where.length; i++)
        {   $("header").css("border-" + this.Theme.header.border.where[i] + "-color", this.Theme.header.border.color);
            $("header").css("border-" + this.Theme.header.border.where[i] + "-style", this.Theme.header.border.style);
            $("header").css("border-" + this.Theme.header.border.where[i] + "-width", this.Theme.header.border.width);
        }
        $("header").css("border-radius", this.Theme.header.border.radius);

        $("header").css("background", this.Theme.header.background);
        $("header").css("color", this.Theme.header.color);
        $("header h1").text(this.Theme.header.text);

        // the footer
        // remove any border
        $("footer").css("border", "none");

        // add the border as spec'd in the theme (the same as the header)
        for (var i=0; i<this.Theme.header.border.where.length; i++)
        {   $("footer").css("border-" + this.Theme.header.border.where[i] + "-color", this.Theme.header.border.color);
            $("footer").css("border-" + this.Theme.header.border.where[i] + "-style", "solid");
            $("footer").css("border-" + this.Theme.header.border.where[i] + "-width", "1px");
        }
        $("footer").css("border-radius", this.Theme.header.border.radius);
        $("footer").css("background", this.Theme.header.background);
        $("footer").css("color", this.Theme.header.color);

        // It works, but it breaks my sticky footer
        var high = document.getElementById("footer").offsetHeight + 10;
        $(".wrapper").css("margin-bottom", high * -1);
        $(".push").css("height", high);
        
        // the instructions
        // remove any border
        $("#instructions").css("border", "none");

        // add the border as spec'd in the theme (the same as the header)
        for (var i=0; i<this.Theme.header.border.where.length; i++)
        {   $("#instructions").css("border-" + this.Theme.header.border.where[i] + "-color", this.Theme.header.border.color);
            $("#instructions").css("border-" + this.Theme.header.border.where[i] + "-style", this.Theme.header.border.style);
            $("#instructions").css("border-" + this.Theme.header.border.where[i] + "-width", this.Theme.header.border.width);
        }
        $("#instructions").css("border-radius", this.Theme.header.border.radius);

        $("#instructions").css("background", this.Theme.header.background);
        $("#instructions").css("color", this.Theme.header.color);

        // the game-over dialog
        // remove any border
        $("#game-over").css("border", "none");

        // add the border as spec'd in the theme (the same as the header)
        for (var i=0; i<this.Theme.header.border.where.length; i++)
        {   $("#game-over").css("border-" + this.Theme.header.border.where[i] + "-color", this.Theme.header.border.color);
            $("#game-over").css("border-" + this.Theme.header.border.where[i] + "-style", this.Theme.header.border.style);
            $("#game-over").css("border-" + this.Theme.header.border.where[i] + "-width", this.Theme.header.border.width);
        }
        $("#game-over").css("border-radius", this.Theme.header.border.radius);

        $("#game-over").css("background", this.Theme.header.background);
        $("#game-over").css("color", this.Theme.header.color);

        for (var i=0; i<4; i++)
        {   // change name, health and image on avatar selection boxes

            $("#name-" + (i+1)).text(this.Theme.avatar[i].name);
            $("#img-" + (i+1)).attr("src", this.Theme.folder + this.Theme.avatar[i].fileName);
            $("#health-" + (i+1)).text(this.Theme.avatar[i].startHealth);
        }
    },

    hideTheFight()
    {   // When the page first loads, elements of the fight (class="the-fight") are hidden

        // When the fight is hidden, the choice selection boxes should be displayed

        $(".choice").css("display", "block");
        $(".chooser").css("display", "flex");

        // now hide the fight elements
        $(".the-fight").css("display", "none");
    },

    showTheFight()
    {   // When the page first loads, elements of the fight (class="the-fight") are hidden

        // When the fight is displayed, the choice selection boxes should not be

        $(".choice").css("display", "none");

        // now display the fight elements

        $(".the-fight").css("display", "block");
        $(".fight-box").css("display", "flex");
        $(".fight-bar").css("display", "flex");
        $("#fight-button").text("ROUND " + ++this.round);
    },

    newGame()
    {   // This is the code required to start a new game, either because the page has just loaded or
        // because a game has ended (wheter the player has won or lost)

        // .remove() not only removes the page element, but the event listeners as well, so they have
        // to be added back.  But if the player lost the last game, some of the icon boxes (and their
        // event listeners) may still be on the page.  If I don't handle it, I could end up with two
        // or more .on("click") event listeners on a single page element.  And both will fire when the
        // player clicks on that element.  So any existing event listeners have to go away.
        //
        // The easiest way I know of to do that is...

        $(".chooser").empty();

        // No children -- no event listeners...

        // Now I have to put them back

        for (var i=0; i<this.iconBox.length; i++)
        {   // The icon boxes were removed from choice-box during the last game.  They need to be put
            // back

            $(".chooser").append(this.iconBox[i]);
            $("#choice-" + (i + 1)).css("box-shadow", "0px 0px 0px");

            // reset attack strength

            this.Theme.avatar[i].attack = this.Theme.avatar[i].counter;
        }
        
        // and the event listeners
        
        $(".choice").on("click", function()
        {   game.selectAvatar($(this).attr("avatar"));
        })

        this.avatarSelected = false;
        this.avatar = {};
        this.Opponent = {};
        this.numOpponents = 3;

        this.hideTheFight();
    
        // When the page first loads, the theme buttons (class="themes") should be hidden
    
        $(".themes").css("display", "none");
    
        $("#theme-button").text("SHOW THEMES");
        $("#theme-button").css("display", "inline");

        $("#player-box").text("");
        $("#opponent-box").text("");
        $("#prompt-box").text("Select your avatar");
        $("#result-box").text("");
    },

    initGame()
    {   // Initialize the game.  The game starts with the Star Wars theme
        //

        // save all of the icon-box page elements -- as the game is played these elements
        // will be removed from the page.  I have to have some way to put them back without
        // reloading the page
        
        this.iconBox.push ($("#choice-1"));
        this.iconBox.push ($("#choice-2"));
        this.iconBox.push ($("#choice-3"));
        this.iconBox.push ($("#choice-4"));

        // The default theme is Star Wars...

        this.applyTheme("star wars");

        this.tada.volume = 0.25;
        this.wahwah.volume = 0.25;

        this.newGame();
    },

    selectAvatar(selection)
    {   // select the avatar the player has clicked on.  This selection becomes the player's avatar
        // or opponent depending on whether a player avatar has already been selected

        this.round = 0;

        if (!this.avatarSelected)
        {   // The player has not yet selected an avatar.  This is it...
        
            this.avatarSelected = true;
            this.Avatar = this.Theme.avatar [selection - 1];
            this.Avatar.health = this.Avatar.startHealth;
            this.Avatar.counter = this.Avatar.attack;

            // Totally unnecessary code...move the players avatar selection to the first place in
            // selection box.

            var saveSelection = $("#choice-" + selection);
            $("#choice-" + selection).remove();
            $(".chooser").prepend(saveSelection);

            // finally I need to keep the selection so I can hide this choice later
            this.avatarSelection = selection;

            $("#choice-" + selection).css("box-shadow", "0px 0px 20px white");
            $("#fighter-1").attr("src", $("#img-" + selection).attr("src"));
            $("#game-over-image").attr("src", $("#img-" + selection).attr("src"));

            $("#result-box").text("You have selected " + this.Theme.avatar [selection - 1].name);
            $("#prompt-box").text("Select your opponent");
            $("#player-name").text(this.Theme.avatar [selection - 1].name);
            $("#player-health").text(this.Avatar.health);

            // And one more thing...we don't want Darth Vader fighting Shaggy so don't let the player change
            // themes after selecting his avatar.

            // Hide all of the theme related buttons

            $("#theme-button").css("display", "none");
            $(".themes").css("display", "none");
        }
        else
        {   // The player has selected an avatar.  This is it the opponent...
        
            this.Opponent = this.Theme.avatar [selection - 1];
            this.Opponent.health = this.Opponent.startHealth;

            $("#fighter-2").attr("src", $("#img-" + selection).attr("src"));

            // remove the icon-box elements for the player avatar and opponent
            $("#choice-" + this.avatarSelection).remove();
            $("#choice-" + selection).remove();

            $("#prompt-box").text("Click the FIGHT button");
            $("#opponent-name").text(this.Theme.avatar [selection - 1].name);
            $("#opponent-health").text(this.Opponent.health);

            this.showTheFight();
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
    },

    fight()
    {   // This is the meat and potatoes of the game
        //
        // First, describe the action in the play-by-play box

        $("#avatar-box").text(this.Avatar.name + " attacks " + this.Opponent.name + " for " + this.Avatar.attack + " points.");

        // now, calculate the player avatar's attacks on the opponent

        this.Opponent.health -= this.Avatar.attack;
        this.Avatar.attack += this.Avatar.counter;

        // If the opponents health is 0 or less, this fight is over

        if (this.Opponent.health <= 0)
        {   $("#avatar-box").text("");
            $("#result-box").text(this.Avatar.name + " has defeated " + this.Opponent.name + "!");
            
            --this.numOpponents;

            if (this.numOpponents === 0)
            {   // If there are no opponents left to fight, the game is over.  The player has won
                //
                // Let the player know and set up for another game

                $("#game-over-text").text(this.Avatar.name + " has been victorious!");
                $("#game-over").css("display", "block");

                this.tada.load();
                this.tada.play();
            }
            else
            {   // The game continues until there are no opponents left to fight.  So, hide the fight box
                // and redisplay the choice-boxes for the next round

                $("#opponent-box").text("");

                $("#prompt-box").text("Select your opponent");
                this.hideTheFight();
            }
        }
        else
        {   // The opponent has not been defeated

            // display opponent's health status
            $("#opponent-health").text(this.Avatar.health);
            
            // And now the opponent gets to counter attack
            
            // first describe the action in the play-by-play box

            $("#opponent-box").text(this.Opponent.name + " counters " + this.Avatar.name + " for " + this.Opponent.attack + " points.");

            this.Avatar.health -= this.Opponent.counter;
    
            // If the avatar's health is 0 or less, this fight is over
    
            if (this.Avatar.health <= 0)
            {   // Game over

                $("#game-over-text").text("Oh no, " + this.Avatar.name + " has been defeated!  Game Over!");
                $("#game-over").css("display", "block");

                this.wahwah.load();
                this.wahwah.play();
            }
            else
            {   // the game is not over...display the player's health status

                $("#player-health").text(this.Avatar.health);
            }

            $("#fight-button").text("ROUND " + ++this.round);
        }
    }
}

$(document).ready (function()
{   // Create the event listeners for the player to interact with the game

    $("#theme-button").on("click", function()
    {   // the SHOW THEMES button

        game.themeButton();
    })

    $(".themes").on("click", function()
    {   // and the theme buttons

        game.applyTheme($(this).attr("theme"));
    })

    $("#fight-button").on("click", function()
    {   // the FIGHT button

        game.fight();
    })

    $("#show-instructions").on("click", function()
    {   // the SHOW INSTRUCTIONS button

        $("#instructions").css("display", "block");
    })

    $("#hide-instructions").on("click", function()
    {   // the CLOSE button in #instructions

        $("#instructions").css("display", "none");
    })

    $("#new-game").on("click", function()
    {   // event listener for the NEW GAME button

        $("#game-over").css("display", "none");
        game.newGame();
    })

    game.initGame();
});
