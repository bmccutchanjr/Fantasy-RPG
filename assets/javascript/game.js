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
    image: "background.jpg",
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

    iconBox: [],                // An empty array of all the player choices in the game

    avatarSelected: false,
    avatar: "",                 // An empty object that will represent the player avatar during the game
    opponent: "",               // An empty object that will represent the player's opponent during the game

    numOpponents: 3,            // The number of opponents remaining.  The game defaults to 3
    themeSelected: StarWars,    // The selected theme.  The default theme is StarWars.

    // audio
    tada: new Audio("assets/audio/ta-da.mp3"),
    wahwah: new Audio("assets/audio/wah-wah.mp3"),

    applyTheme(theme)
    {   // apply the selected Theme
        //

        switch (theme)
        {   case  "boxers":
            {   this.themeSelected = Boxers;
                break;
            }
            case "scooby doo":
            {   this.themeSelected = ScoobyDoo;
                break;
            }
            default:
            {   this.themeSelected = StarWars;
                break;
            }
        }

        // set the page background
        $("body").css("background", this.themeSelected.background);
        $("body").css("background-image", "url(" + this.themeSelected.folder + this.themeSelected.image + ")");
        // these attributes appear to be lost when the background image changes
        $("body").css("background-repeat", "repeat-y");
        $("body").css("background-attachment", "fixed");
        $("body").css("background-size", "100%");
        $("body").css("color", this.themeSelected.color);

        // the header
        // remove any border
        $("header").css("border", "none");

        // add the border as spec'd in the theme
        for (var i=0; i<this.themeSelected.header.border.where.length; i++)
        {   $("header").css("border-" + this.themeSelected.header.border.where[i] + "-color", this.themeSelected.header.border.color);
            $("header").css("border-" + this.themeSelected.header.border.where[i] + "-style", this.themeSelected.header.border.style);
            $("header").css("border-" + this.themeSelected.header.border.where[i] + "-width", this.themeSelected.header.border.width);
        }
        $("header").css("border-radius", this.themeSelected.header.border.radius);

        $("header").css("background", this.themeSelected.header.background);
        $("header").css("color", this.themeSelected.header.color);
        $("header h1").text(this.themeSelected.header.text);

        // the footer
        // remove any border
        $("footer").css("border", "none");

        // add the border as spec'd in the theme
        for (var i=0; i<this.themeSelected.header.border.where.length; i++)
        {   $("footer").css("border-" + this.themeSelected.header.border.where[i] + "-color", this.themeSelected.header.border.color);
            $("footer").css("border-" + this.themeSelected.header.border.where[i] + "-style", this.themeSelected.header.border.style);
            $("footer").css("border-" + this.themeSelected.header.border.where[i] + "-width", this.themeSelected.header.border.width);
        }
        $("footer").css("border-radius", this.themeSelected.header.border.radius);
        $("footer").css("background", this.themeSelected.header.background);
        $("footer").css("color", this.themeSelected.header.color);

        // It works, but it breaks my sticky footer
        var high = document.getElementById("footer").offsetHeight + 10;
        $(".wrapper").css("margin-bottom", high * -1);
        $(".push").css("height", high);
        
        for (var i=0; i<4; i++)
        {   // change name, health and image on avatar selection boxes

            $("#name-" + (i+1)).text(this.themeSelected.avatar[i].name);
            $("#img-" + (i+1)).attr("src", this.themeSelected.folder + this.themeSelected.avatar[i].fileName);
            $("#health-" + (i+1)).text(this.themeSelected.avatar[i].health);
        }
    },

    hideTheFight()
    {   // When the page first loads, elements of the fight (class="the-fight") are hidden

        // When the fight is hidden, the choice selection boxes should be displayed

        $(".choice").css("display", "block");
        $(".choice-box").css("display", "flex");

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
    },

    newGame()
    {   // This is the code required to start a new game, either because the page has just loaded or
        // because a game has ended (wheter the player has won or lost)

        if ($(".choice-box").children.length > 0)
        {   // Only add the .icon-box ellements if .choice-box has no child elements.  They don't need
            // to be added if they are already there!  This would happen when the page is loaded -- no
            // games have been played

            for (var i=0; i<this.iconBox.length; i++)
            {   // The icon boxes were removed from choice-box during the last game.  They need to be put
                // back

                $(".choice-box").append(this.iconBox[i]);
                $("#choice-" + i).css("box-shadow", "0px 0px 0px");

                // reset attack strength

                this.themeSelected.avatar[i].attack = this.themeSelected.avatar[i].counter;
            }
        }

        // .remove() not only removes the page element, but the action listeners as well, so they have
        // to be recreated...this maybe might should be a function call
        
        $(".choice").on("click", function()
        {   game.selectAvatar($(this).attr("which"));
        })

        this.avatarSelected = false;
        this.avatar = {};
        this.opponent = {};

        this.hideTheFight();
    
        // When the page first loads, the theme buttons (class="themes") should be hidden
    
        $(".themes").css("display", "none");
    
        $("#theme-button").text("SHOW THEMES");
        $("#theme-button").css("display", "inline");
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
        
        if (!this.avatarSelected)
        {   // The player has not yet selected an avatar.  This is it...
        
            this.avatarSelected = true;
            this.avatar = this.themeSelected.avatar [selection - 1];
            this.avatar.health = this.avatar.startHealth;
            this.avatar.counter = this.avatar.attack;

            // Totally unnecessary code...move the players avatar selection to the first place in
            // selection box.

            var saveSelection = $("#choice-" + selection);
            $("#choice-" + selection).remove();
            $(".choice-box").prepend(saveSelection);

            // There is a problem here though... .remove() also remove the action listener...so this the
            // page ignores any futher clicks on the item.  Which is good for now, but after this game
            // is played, I need that action listener back so the next game can be played.  So I need to
            // move the action listener constructor to the as yet unwritten method that reinitializes the
            // game...

            // finally I need to keep the selection so I can hide this choice later
            this.avatarSelection = selection;

            $("#choice-" + selection).css("box-shadow", "0px 0px 20px white");
            $("#fighter-1").attr("src", $("#img-" + selection).attr("src"));

            $("#result-box").text("You have selected " + this.themeSelected.avatar [selection - 1].name);
            $("#prompt-box").text("Select your opponent");
            $("#player-name").text(this.themeSelected.avatar [selection - 1].name);
            $("#player-health").css("width", ((this.avatar.health / this.avatar.startHealth) * 100) + "%");
            $("#player-health").css("backgroundColor", "red");

            // And one more thing...don't let the player change themes after selecting his avatar.
            // Hide all of the theme related buttons

            $("#theme-button").css("display", "none");
            $(".themes").css("display", "none");
        }
        else
        {   // The player has selected an avatar.  This is it the opponent...
        
            this.opponentSelected = true;
            this.opponent = StarWars.avatar [selection - 1];
            this.opponent.health = this.opponent.startHealth;

            $("#fighter-2").attr("src", $("#img-" + selection).attr("src"));

            // remove the icon-box elements for the player avatar and opponent
            $("#choice-" + this.avatarSelection).remove();
            $("#choice-" + selection).remove();

            $("#prompt-box").text("ROUND 1 -- Click the FIGHT button");
            $("#opponent-name").text(this.themeSelected.avatar [selection - 1].name);
            $("#opponent-health").css("width", ((this.opponent.health / this.opponent.startHealth) * 100) + "%");
            $("#opponent-health").css("backgroundColor", "red");

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

console.log(this.avatar.name + ": " + this.avatar.health);
console.log(this.opponent.name + ": " + this.opponent.health);

        $("#avatar-box").text(this.avatar.name + " attacks " + this.opponent.name + " for " + this.avatar.attack + " points.");

        // now, calculate the player avatar's attacks on the opponent

        this.opponent.health -= this.avatar.attack;
        this.avatar.attack += this.avatar.counter;

        // If the opponents health is 0 or less, this fight is over

        if (this.opponent.health <= 0)
        {   $("#avatar-box").text("");
            $("#result-box").text(this.avatar.name + " has defeated " + this.opponent.name + "!");
            
            --this.numOpponents;

            if (this.numOpponents === 0)
            {   // If there are no opponents left to fight, the game is over.  The player has won
                //
                // Let the player know and set up for another game

                $("#game-over-text").text(this.avatar.name + " has been victorious!");
                $("#game-over").css("display", "block");

                this.tada.load();
                this.tada.play();g
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
            var percentHealth = (this.opponent.health / this.opponent.startHealth) * 100;
            $("#opponent-health").css("width", percentHealth + "px");
            
            // And now the opponent gets to counter attack
            
            // first describe the action in the play-by-play box

            $("#opponent-box").text(this.opponent.name + " counter attacks " + this.avatar.name + " for " + this.opponent.attack + " points.");

            this.avatar.health -= this.opponent.counter;
    
            // If the avatar's health is 0 or less, this fight is over
    
            if (this.avatar.health <= 0)
            {   // Game over

//                 $("#opponent-box").text("");
//                 $("#result-box").text(this.avatar.name + " has been defeated!");
                $("#game-over-text").text("Oh no, " + this.avatar.name + " has been defeated!  Game Over!");
                $("#game-over").css("display", "block");

                this.wahwah.load();
                this.wahwah.play();

                //    .newGame() assumes that all of the icon-box elements have been removed from the
                // page and appends new children to #choice-box.  Then adds an .on("click") event
                // listener.  That works fine if the player has won the game or been defeated by
                // the third opponent.  All of the icon-box elements have been removed.  But...
                //    If a player is defeated by the first or second opponent some of the icon-box
                // elements have not been removed from the page.  .newGame() still appends icon-boxes
                // to #choice-box for each of the icon-boxes that existed at the beginning of the game.
                // And adds a .on("click") event listener.  Even though no extra icon-boxes get added
                // to #choice-box, a SECOND event listener is added to those icon-boxes that have not
                // been removed from the page (.remove() removes not just the element but any event
                // listeners attacjed to it).  When the user clicks one of those icons -- both event
                // listeners fire and strange things can happen.
                //    So let's fix that.  Empty #choice-box so that no page elements or event listeners
                // exist when the player clicks on NEW GAME

                $(".choice-box").empty();
            }
            else
            {   // the game is not over...display the player's health status

                var percentHealth = (this.opponent.health / this.opponent.startHealth) * 100;
                $("#player-health").css("width", percentHealth + "px");
            }
        }
    }
}

$(document).ready (function()
{   // Create the Action Listeners for the player to interact with the game
    //

//     $(".choice").on("click", function()
//     {   // event listener for the avatar selector boxes
// 
//         game.selectAvatar($(this).attr("which"));
//     })

    $("#theme-button").on("click", function()
    {   // event listener for the avatar selector boxes

        game.themeButton();
    })

    $(".themes").on("click", function()
    {   // event listener for the theme buttons

        game.applyTheme($(this).attr("theme"));
    })

    $("#fight-button").on("click", function()
    {   // event listener for the theme buttons

        game.fight();
    })

    $("#hide-instructions").on("click", function()
    {   // event listener for the CLOSE button in #instructions

        $("#instructions").css("display", "none");
    })

    $("#show-instructions").on("click", function()
    {   // event listener for the SHOW INSTRUCTIONS button

        $("#instructions").css("display", "block");
    })

    $("#new-game").on("click", function()
    {   // event listener for the NEW GAME button

        $("#game-over").css("display", "none");
        game.newGame();
    })

    game.themeSelected = StarWars;
    game.initGame();
});
