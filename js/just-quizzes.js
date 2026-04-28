// just-quizzes.js
// Single source for ALL quiz data

window.quizzes = [
//#region EASY
    {
        id: "easy-players-player-stats-1",
        title: "NFL basic knowledge",
        category: "players",
        difficulty: "easy",
        questions: [
            {
                question: "What position does Tom Brady play?",
                answers: ["RB", "QB", "WR", "TE"],
                correct: 1
            },
            {
                question: "How long is a football field (end zones excluded)?",
                answers: ["200 yards", "100 feet", "110 yards", "100 yards"],
                correct: 3
            },
            {
                question: "Which NFL player is famous for the one-handed catch?",
                answers: ["Odell Beckham Jr.", "Jerry Rice", "DeAndre Hopkins", "Julio Jones"],
                correct: 0
            },
            {
                question: "How many yards are needed for a first down?",
                answers: ["5", "10", "15", "20"],
                correct: 1
            },
            {
                question: "Which player has won the most Super Bowls?",
                answers: ["Joe Montana", "Tom Brady", "Peyton Manning", "Terry Bradshaw"],
                correct: 1
            },
            {
                question: "What does QB stand for?",
                answers: ["Quick Back", "Quarterback", "Quarter Base", "Qualified Back"],
                correct: 1
            },
            {
                question: "Which position usually catches passes?",
                answers: ["Quarterback", "Running Back", "Wide Receiver", "Linebacker"],
                correct: 2
            },
            {
                question: "Which NFL team did Tom Brady play for most of his career?",
                answers: ["New England Patriots", "Tampa Bay Buccaneers", "San Francisco 49ers", "Green Bay Packers"],
                correct: 0
            },
            {
                question: "What piece of equipment do all NFL players wear?",
                answers: ["Helmet", "Gloves", "Cleats", "Visor"],
                correct: 0
            },
            {
                question: "Which player position snaps the ball?",
                answers: ["Center", "Guard", "Quarterback", "Tackle"],
                correct: 0
            }
        ]
    },
        {
        id: "easy-players-player-stats-2",
        title: "NFL basic knowledge - 2",
        category: "players",
        difficulty: "easy",
        questions: [
            {
                question: "How many players are on the field for each team?",
                answers: ["5", "8", "11", "15"],
                correct: 2
            },
            {
                question: "How many players are on an NFL roster?",
                answers: ["11", "53", "80", "100"],
                correct: 1
            },
            {
                question: "On which side of the ball does the quarterback play?",
                answers: ["Offense", "Defense", "Special teams", "Coaching"],
                correct: 0
            },
            {
                question: "Which of the following actions is a penalty in the NFL?",
                answers: ["Running", "Holding", "Catching", "Interception"],
                correct: 1
            },
            {
                question: "How many points does a team get for a field goal?",
                answers: ["6", "7", "2", "3"],
                correct: 3
            },
            {
                question: "How many points does a team get for a touchdown?",
                answers: ["6", "7", "10", "1"],
                correct: 0
            },
            {
                question: "How does an NFL game start?",
                answers: ["Touchdown", "Kick off", "Field Goal", "Safety"],
                correct: 1
            },
            {
                question: "How many downs does the offense have to get a first down?",
                answers: ["1", "2", "3", "4"],
                correct: 3
            },
            {
                question: "How long is a football field (End zones included)?",
                answers: ["100 yards", "110 yards", "120 yards", "100 feet"],
                correct: 2
            },
            {
                question: "How many points does a team get for a safety?",
                answers: ["1", "2", "3", "6"],
                correct: 1
            }

        ]
    },

    
            {
        id: "easy-players-player-stats-3",
        title: "Guess the positions of current NFL star players",
        category: "players",
        difficulty: "easy",
        questions: [
            {
                question: "What position does Patrick Mahomes play?",
                answers: ["Wide receiver", "Cornerback", "Running back", "Quarterback"],
                correct: 3
            },
            {
                question: "What position does Justin Jefferson play?",
                answers: ["Linebacker", "Wide receiver", "Quarterback", "Cornerback"],
                correct: 1
            },
            {
                question: "What position does Ja'Marr Chase play?",
                answers: ["Safety", "Wide receiver", "Running back", "Cornerback"],
                correct: 1
            },
            {
                question: "What position does Myles Garrett play?",
                answers: ["Defensive end", "Offensive tackle", "Defensive tackle", "Tight end"],
                correct: 0
            },
            {
                question: "What position does Josh Allen play?",
                answers: ["Defensive end", "Safety", "Quarterback", "Running back"],
                correct: 2
            },
            {
                question: "What position does Sauce Gardner play?",
                answers: ["Wide receiver", "Cornerback", "Safety", "Running back"],
                correct: 1
            },
            {
                question: "What position does Saquon Barkley play?",
                answers: ["Defensive tackle", "Wide receiver", "Cornerback", "Running back"],
                correct: 3
            },
            {
                question: "What position does Travis Kelce play?",
                answers: ["Safety", "Wide receiver", "Tight end", "Quarterback"],
                correct: 2
            },
            {
                question: "What position does Trent Williams play?",
                answers: ["Offensive tackle", "Defensive tackle", "Offensive guard", "Quarterback"],
                correct: 0
            },
            {
                question: "What position does Joe Burrow play?",
                answers: ["Cornerback", "Tight end", "Wide receiver", "Quarterback"],
                correct: 3
            }

        ]
    },

        {
        id: "easy-players-player-stats-4",
        title: "Guess the positions of current NFL star players - 2",
        category: "players",
        difficulty: "easy",
        questions: [
            {
                question: "What position does Jaxon Smith-Njigba play?",
                answers: ["Cornerback", "Kicker", "Wide receiver", "Running back"],
                correct: 2
            },
            {
                question: "What position does Sam Darnold play?",
                answers: ["Quarterback", "Running back", "Safety", "Linebacker"],
                correct: 0
            },
            {
                question: "What position does Fred Warner play?",
                answers: ["Quarterback", "Safety", "Defensive end", "Linebacker"],
                correct: 3
            },
            {
                question: "What position does Trent McDuffie play?",
                answers: ["Safety", "Cornerback", "Wide receiver", "Running back"],
                correct: 1
            },
            {
                question: "What position does Drake Maye play?",
                answers: ["Running back", "Quarterback", "Wide receiver", "Linebacker"],
                correct: 1
            },
            {
                question: "What position does Kenneth Walker III play?",
                answers: ["Running back", "Wide receiver", "Defensive tackle", "Offensive tackle"],
                correct: 0
            },
            {
                question: "What position does Creed Humphrey play?",
                answers: ["Linebacker", "Defensive tackle", "Offensive guard", "Center"],
                correct: 3
            },
            {
                question: "What position does Quenton Nelson play?",
                answers: ["Defensive tackle", "Offensive tackle", "Offensive guard", "Center"],
                correct: 2
            },
            {
                question: "What position does Nico Collins play?",
                answers: ["Running back", "Wide receiver", "Cornerback", "Tight end"],
                correct: 1
            },
            {
                question: "What position does Aidan Hutchinson play?",
                answers: ["Defensive end", "Defensive tackle", "Center", "Linebacker"],
                correct: 0
            }

        ]
    },
    
    {
        id: "easy-draft-quiz",
        title: "NFL Draft Basics",
        category: "draft",
        difficulty: "easy",
        questions: [
            {
                question: "How many rounds are in the NFL draft?",
                answers: ["2", "4", "6", "7"],
                correct: 3
            },
            {
                question: "Which team normally gets the first pick in the draft?",
                answers: ["The best team", "The worst team", "The draft lottery winner", "A random selected team"],
                correct: 1
            },
            {
                question: "What is the nickname for the last player selected in every draft?",
                answers: ["Mr. Cool", "Mr. Relevant", "Mr. Last", "Mr. Irrelevant"],
                correct: 3
            },
            {
                question: "Where was the traditional venue of the NFL draft?",
                answers: ["New York City", "Dallas", "Kansas City", "Seattle"],
                correct: 0
            },
            {
                question: "How are players notified when they are drafted?",
                answers: ["By phone", "By an Instagram message", "By mail", "By post"],
                correct: 0
            },
            {
                question: "What position gets drafted as the first pick the most?",
                answers: ["Wide Receivers", "Quarterback", "Running Backs", "Kickers"],
                correct: 1
            },
            {
                question: "What do most players attend before getting drafted?",
                answers: ["College", "Prison", "High School", "Middle School"],
                correct: 0
            },
            {
                question: "In which year was Tom Brady drafted?",
                answers: ["2005", "2006", "2010", "2000"],
                correct: 3
            },
            {
                question: "How many players get selected in the first round of the draft?",
                answers: ["30", "28", "35", "32"],
                correct: 3
            },
            {
                question: "Which team normally gets the last pick of the first round?",
                answers: ["The worst team", "The Super Bowl winner", "A random selected team", "The 49ers"],
                correct: 1
            }
        ]
    },
        {
        id: "easy-draft-quiz-2",
        title: "Guess where following NFL players went to college - Easy version",
        category: "draft",
        difficulty: "easy",
        questions: [
            {
                question: "Where did Patrick Mahomes go to college?",
                answers: ["LSU", "Colorado", "Texas Tech", "Oklahoma"],
                correct: 2
            },
            {
                question: "Where did Joe Burrow go to college?",
                answers: ["LSU", "Alabama", "Texas", "Florida State"],
                correct: 0
            },
            {
                question: "Where did Josh Allen go to college?",
                answers: ["Washington", "USC", "Florida", "Wyoming"],
                correct: 3
            },
            {
                question: "Where did Justin Jefferson go to college?",
                answers: ["Alabama", "Oregon", "Kansas", "LSU"],
                correct: 3
            },
            {
                question: "Where did Tom Brady go to college?",
                answers: ["Minnesota", "Missouri", "Michigan", "Rutgers"],
                correct: 2
            },
            {
                question: "Where did Derrick Henry go to college?",
                answers: ["Colorado", "Alabama", "Miami", "Virginia Tech"],
                correct: 1
            },
            {
                question: "Where did Odell Beckham Jr. go to college?",
                answers: ["Texas A&M", "Vanderbilt", "Ohio State", "LSU"],
                correct: 3
            },
            {
                question: "Where did Travis Hunter go to college?",
                answers: ["Colorado", "UNC", "Florida State", "Boston College"],
                correct: 0
            },
            {
                question: "Where did Trevor Lawrence go to college?",
                answers: ["Texas", "Kansas State", "Clemson", "Washington State"],
                correct: 2
            },
            {
                question: "Where did Lamar Jackson go to college?",
                answers: ["Wisconsin", "Louisville", "Penn State", "TCU"],
                correct: 1
            }
        ]
    },

    {
        id: "easy-draft-quiz-3",
        title: "Guess the positions of the first 10 picks of the 2026 NFL draft",
        category: "draft",
        difficulty: "easy",
        questions: [
            {
                question: "Which position does pick #1 Fernando Mendoza play (Las Vegas Raiders)?",
                answers: ["Quarterback", "Wide receiver", "Cornerback", "Linebacker"],
                correct: 0
            },
            {
                question: "Which position does pick #2 David Bailey play (NY Jets)?",
                answers: ["Quarterback", "Defensive tackle", "EDGE rusher", "Linebacker"],
                correct: 2
            },
            {
                question: "Which position does pick #3 Jeremiyah Love play (Arizona Cardinals)?",
                answers: ["Wide receiver", "Linebacker", "Center", "Runningback"],
                correct: 3
            },
            {
                question: "Which position does pick #4 Carnell Tate play (Tennessee Titans)?",
                answers: ["Quarterback", "Cornerback", "Wide receiver", "Linebacker"],
                correct: 2
            },
            {
                question: "Which position does pick #5 Arvell Reese play (NY Giants)?",
                answers: ["Linebacker", "Defensive tackle", "Safety", "Tight end"],
                correct: 0
            },
            {
                question: "Which position does pick #6 Mansoor Delane play (Kansas City Chiefs)?",
                answers: ["Wide receiver", "Cornerback", "Linebacker", "Safety"],
                correct: 1
            },
            {
                question: "Which position does pick #7 Sonny Styles play (Washington Commanders)?",
                answers: ["Linebacker", "EDGE rusher", "Center", "Guard"],
                correct: 0
            },
            {
                question: "Which position does pick #8 Jordyn Tyson play (New Orleans Saints)?",
                answers: ["Quarterback", "Cornerback", "Wide receiver", "Tight end"],
                correct: 2
            },
            {
                question: "Which position does pick #9 Spencer Fano play (Cleveland Browns)?",
                answers: ["Safety", "Defensive tackle", "Center", "Offensive tackle"],
                correct: 3
            },
            {
                question: "Which position does pick #10 Francis Mauigoa play (NY Giants)?",
                answers: ["EDGE rusher", "Defensive tackle", "Tight end", "Offensive tackle"],
                correct: 3
            }
        ]
    },

    {
        id: "easy-teams-quiz",
        title: "Guess the name of the NFL team",
        category: "teams",
        difficulty: "easy",
        questions: [
            {
                question: "Guess the team name: New England - ?",
                answers: ["Saints", "Chiefs", "Rams", "Patriots"],
                correct: 3
            },
            {
                question: "Which city are the Seahawks from?",
                answers: ["Portland", "Los Angeles", "Seattle", "Denver"],
                correct: 2
            },
            {
                question: "Guess the team name: Tampa Bay - ?",
                answers: ["Pirates", "Raiders", "Sailors", "Buccaneers"],
                correct: 3
            },
            {
                question: "Which city are the Browns from?",
                answers: ["Indianapolis", "Cleveland", "Chicago", "Pittsburgh"],
                correct: 1
            },
            {
                question: "Guess the team name: Chicago - ?",
                answers: ["Grizzlies", "Lions", "Bulls", "Bears"],
                correct: 3
            },
            {
                question: "Which city are the Cowboys from?",
                answers: ["Houston", "Oklahoma City", "Dallas", "Birmingham"],
                correct: 2
            },
            {
                question: "Guess the team name: Minnesota - ?",
                answers: ["Vikings", "Timberwolves", "Bucks", "Thunder"],
                correct: 0
            },
            {
                question: "Which city are the Chiefs from?",
                answers: ["Topeka", "Las Vegas", "Little Rock", "Kansas City"],
                correct: 3
            },
            {
                question: "Guess the team name: New Orleans - ?",
                answers: ["Cougars", "Saints", "Tigers", "Pelicans"],
                correct: 1
            },
            {
                question: "Which city are the Dolphins from?",
                answers: ["Atlanta", "Savannah", "Miami", "Charlotte"],
                correct: 2
            }
        ]
    },
        {
        id: "easy-teams-quiz 2",
        title: "Guess the name of the NFL team - 2",
        category: "teams",
        difficulty: "easy",
        questions: [
            {
                question: "Guess the team name: Buffalo - ?",
                answers: ["Colts", "Rams", "Bills", "Bengals"],
                correct: 2
            },
            {
                question: "Which city are the Chargers from?",
                answers: ["San Francisco", "Oklahoma City", "Topeka", "Los Angeles"],
                correct: 3
            },
            {
                question: "Guess the team name: Las Vegas - ?",
                answers: ["Raiders", "Sharks", "Gamblers", "Pirates"],
                correct: 0
            },
            {
                question: "Which city are the Bengals from?",
                answers: ["Akron", "Pittsburgh", "Portland", "Cincinnati"],
                correct: 3
            },
            {
                question: "Guess the team name: Indianapolis - ?",
                answers: ["Fighting Illini", "Cowboys", "Colts", "Pacers"],
                correct: 2
            },
            {
                question: "Which city are the Texans from?",
                answers: ["Las Vegas", "San Antonio", "Austin", "Houston"],
                correct: 3
            },
            {
                question: "Guess the team name: Denver - ?",
                answers: ["Saints", "Broncos", "Nuggets", "Cubs"],
                correct: 1
            },
            {
                question: "Which city are the Jaguars from?",
                answers: ["Savannah", "Jacksonville", "Orlando", "Chicago"],
                correct: 1
            },
            {
                question: "Guess the team name: Arizona - ?",
                answers: ["Cougars", "Browns", "Cardinals", "Rams"],
                correct: 2
            },
            {
                question: "Which city are the Commanders from?",
                answers: ["Washington D.C.", "New York", "Concord", "Boston"],
                correct: 0
            }
        ]
    },

    {
        id: "easy-teams-quiz 3",
        title: "Guess the name of the NFL team - 3",
        category: "teams",
        difficulty: "easy",
        questions: [
            {
                question: "Guess the team name: Baltimore - ?",
                answers: ["Chiefs", "Ravens", "Thunders", "Browns"],
                correct: 1
            },
            {
                question: "Which city are the Steelers from?",
                answers: ["San Diego", "Des Moines", "Philadelphia", "Pittsburgh"],
                correct: 3
            },
            {
                question: "Guess the team name: Philadelphia - ?",
                answers: ["Red Jackets", "Wolverines", "Pirates", "Eagles"],
                correct: 3
            },
            {
                question: "Which city are the Giants from?",
                answers: ["New York", "Toronto", "Seattle", "Olympia"],
                correct: 0
            },
            {
                question: "Guess the team name: San Francisco - ?",
                answers: ["Browns", "76ers", "49ers", "Pistons"],
                correct: 2
            },
            {
                question: "Which city are the Rams from?",
                answers: ["Los Angeles", "Las Vegas", "St. Louis", "Richmond"],
                correct: 0
            },
            {
                question: "Guess the team name: Detroit - ?",
                answers: ["Fighters", "Cars", "Cowboys", "Lions"],
                correct: 3
            },
            {
                question: "Which city are the Packers from?",
                answers: ["St. Paul", "Green Bay", "Wichita", "Milwaukee"],
                correct: 1
            },
            {
                question: "Guess the team name: Atlanta - ?",
                answers: ["Astros", "Falcons", "Hurricanes", "Ravens"],
                correct: 1
            },
            {
                question: "Which city are the Jets from?",
                answers: ["Austin", "Jackson", "New York", "Dallas"],
                correct: 2
            }
        ]
    },

            {
        id: "easy-teams-quiz-4",
        title: "Fun general knowledge quiz on NFL teams",
        category: "teams",
        difficulty: "easy",
        questions: [
            {
                question: "What was the name of the Washington Commanders before they changed it?",
                answers: ["Washington Elefants", "Washington Redskins", "Washington Capitals", "Washington Thieves"],
                correct: 1
            },
            {
                question: "How many US cities have 2 NFL teams?",
                answers: ["0 cities", "1 city", "2 cities", "5 cities"],
                correct: 2
            },
            {
                question: "Where did the Las Vegas Raiders play before relocating to Las Vegas?",
                answers: ["Portland", "Fresno", "Sacramento", "Oakland"],
                correct: 3
            },
            {
                question: "What NFL stadium recorded the loudest crowd noise in NFL history?",
                answers: ["Lumen Field", "Highmark Stadium", "Arrowhead Stadium", "Caesars Superdome"],
                correct: 2
            },
            {
                question: "How many NFL teams have domes as their stadiums?",
                answers: ["4 teams", "5 teams", "7 teams", "8 teams"],
                correct: 3
            },
            {
                question: "Which NFL team's fanbase has the nickname: Cheeseheads?",
                answers: ["Green Bay Packers", "Tampa Bay Buccaneers", "Detroit Lions", "Pittsburgh Steelers"],
                correct: 0
            },
            {
                question: "Where did the LA Rams play before relocating to Los Angeles?",
                answers: ["St. Louis", "Kansas City", "Raleigh", "El Paso"],
                correct: 0
            },
            {
                question: "Which NFL team has won the most Super Bowls?",
                answers: ["Green Bay Packers", "Tampa Bay Buccaneers", "New England Patriots", "Seattle Seahawks"],
                correct: 2
            },
            {
                question: "Which US state has the most NFL teams?",
                answers: ["Texas", "Florida & California", "New York & California", "Ohio & Texas"],
                correct: 1
            },
            {
                question: "Which of the following US states has no NFL team?",
                answers: ["Louisiana", "New Jersey", "Wisconsin", "Virginia"],
                correct: 3
            }
        ]
    },
    
//#endregion

//#region MEDIUM
    {
        id: "medium-draft-quiz",
        title: "Guess the NFL draft year by the QBs selected",
        category: "draft",
        difficulty: "medium",
        questions: [
            {
                question: "In which year was Patrick Mahomes drafted?",
                answers: ["2016", "2021", "2017", "2018"],
                correct: 2
            },
            {
                question: "In which year was Tom Brady drafted?",
                answers: ["2006", "2003", "2001", "2000"],
                correct: 3
            },
            {
                question: "In which year was Joe Burrow drafted?",
                answers: ["2021", "2024", "2018", "2020"],
                correct: 3
            },
            {
                question: "In which year was Josh Allen drafted?",
                answers: ["2016", "2021", "2018", "2019"],
                correct: 2
            },
            {
                question: "In which year was Aaron Rodgers drafted?",
                answers: ["2008", "2015", "2007", "2005"],
                correct: 3
            },
            {
                question: "In which year was Bo Nix drafted?",
                answers: ["2024", "2020", "2025", "2022"],
                correct: 0
            },
            {
                question: "In which year was Jared Goff drafted?",
                answers: ["2010", "2016", "2018", "2014"],
                correct: 1
            },
            {
                question: "In which year was Andrew Luck drafted?",
                answers: ["2010", "2012", "2015", "2008"],
                correct: 1
            },
            {
                question: "In which year was Philip Rivers drafted?",
                answers: ["2004", "2008", "2000", "2002"],
                correct: 0
            },
            {
                question: "In which year was Shedeur Sanders drafted?",
                answers: ["2023", "2024", "2025", "2026"],
                correct: 2
            }
        ]
    },

        {
        id: "medium-draft-quiz 2",
        title: "Guess the NFL draft year by the QBs selected - 2",
        category: "draft",
        difficulty: "medium",
        questions: [
            {
                question: "In which year was Kyler Murray drafted?",
                answers: ["2018", "2019", "2017", "2021"],
                correct: 1
            },
            {
                question: "In which year was Matt Ryan drafted?",
                answers: ["2007", "2003", "2008", "2005"],
                correct: 2
            },
            {
                question: "In which year was Mitch Trubisky drafted?",
                answers: ["2017", "2015", "2014", "2018"],
                correct: 0
            },
            {
                question: "In which year was Trevor Lawrence drafted?",
                answers: ["2020", "2019", "2021", "2023"],
                correct: 2
            },
            {
                question: "In which year was Matthew Stafford drafted?",
                answers: ["2010", "2012", "2007", "2009"],
                correct: 3
            },
            {
                question: "In which year was Sam Darnold drafted?",
                answers: ["2017", "2018", "2016", "2020"],
                correct: 1
            },
            {
                question: "In which year was Lamar Jackson drafted?",
                answers: ["2017", "2020", "2019", "2018"],
                correct: 3
            },
            {
                question: "In which year was Drew Brees drafted?",
                answers: ["2000", "2001", "2004", "2006"],
                correct: 1
            },
            {
                question: "In which year was Jameis Winston drafted?",
                answers: ["2015", "2016", "2017", "2018"],
                correct: 0
            },
            {
                question: "In which year was Caleb Williams drafted?",
                answers: ["2020", "2022", "2023", "2024"],
                correct: 3
            }
        ]
    },

        {
        id: "medium-draft-quiz 3",
        title: "Guess the First Overall Pick of the following NFL Drafts",
        category: "draft",
        difficulty: "medium",
        questions: [
            {
                question: "Who was the first overall pick in the 2021 NFL Draft?",
                answers: ["Ja'Marr Chase", "Zach Wilson", "Micah Parsons", "Trevor Lawrence"],
                correct: 3
            },
            {
                question: "Who was the first overall pick in the 2014 NFL Draft?",
                answers: ["Jadeveon Clowney", "Blake Bortles", "Khalil Mack", "Derek Carr"],
                correct: 0
            },
            {
                question: "Who was the first overall pick in the 2022 NFL Draft?",
                answers: ["Kenny Pickett", "Travon Walker", "Aidan Hutchinson", "Drake London"],
                correct: 1
            },
            {
                question: "Who was the first overall pick in the 2016 NFL Draft?",
                answers: ["Carson Wentz", "Jared Goff", "Joey Bosa", "DeForest Buckner"],
                correct: 1
            },
            {
                question: "Who was the first overall pick in the 2018 NFL Draft?",
                answers: ["Sam Darnold", "Josh Allen", "Baker Mayfield", "Lamar Jackson"],
                correct: 2
            },
            {
                question: "Who was the first overall pick in the 2025 NFL Draft?",
                answers: ["Shedeur Sanders", "Travis Hunter", "Ashton Jeanty", "Cam Ward"],
                correct: 3
            },
            {
                question: "Who was the first overall pick in the 2012 NFL Draft?",
                answers: ["Ryan Tannehill", "Robert Griffin III", "Andrew Luck", "Luke Kuechly"],
                correct: 2
            },
            {
                question: "Who was the first overall pick in the 2017 NFL Draft?",
                answers: ["Myles Garrett", "Patrick Mahomes", "Deshaun Watson", "Mitchell Trubisky"],
                correct: 0
            },
            {
                question: "Who was the first overall pick in the 2010 NFL Draft?",
                answers: ["Ndamukong Suh", "Sam Bradford", "Trent Williams", "Tim Tebow"],
                correct: 1
            },
            {
                question: "Who was the first overall pick in the 2013 NFL Draft?",
                answers: ["EJ Manuel", "Björn Werner", "Eric Fisher", "Luke Joeckel"],
                correct: 2
            }
        ]
    },

            {
        id: "medium-draft-quiz 4",
        title: "Guess where the following NFL players went to college",
        category: "draft",
        difficulty: "medium",
        questions: [
            {
                question: "Where did Rashee Rice go to college?",
                answers: ["Alabama", "Washington", "Oklahoma", "SMU"],
                correct: 3
            },
            {
                question: "Where did Drake Maye go to college?",
                answers: ["USC", "UNC", "Clemson", "Ohio State"],
                correct: 1
            },
            {
                question: "Where did Drake London go to college?",
                answers: ["USC", "Ohio State", "Ohio", "Virginia Tech"],
                correct: 0
            },
            {
                question: "Where did Cam Bynum go to college?",
                answers: ["Oregon State", "California", "Colorado", "North Dakota State"],
                correct: 1
            },
            {
                question: "Where did Chris Jones go to college?",
                answers: ["Alabama", "Michigan", "Jackson State", "Mississippi State"],
                correct: 3
            },
            {
                question: "Where did Brian Robinson Jr. go to college?",
                answers: ["Alabama", "Georgia", "Northwestern", "Kansas State"],
                correct: 0
            },
            {
                question: "Where did Harrison Phillips go to college?",
                answers: ["Arkansas", "Oklahoma State", "Stanford", "Utah State"],
                correct: 2
            },
            {
                question: "Where did Tristan Wirfs go to college?",
                answers: ["Nebraska", "Iowa", "Indiana", "Colorado State"],
                correct: 1
            },
            {
                question: "Where did Treveyon Henderson go to college?",
                answers: ["UNC", "Michigan State", "Ohio State", "Florida"],
                correct: 2
            },
            {
                question: "Where did Trent McDuffie go to college?",
                answers: ["Alabama", "BYU", "Cincinnati", "Washington"],
                correct: 3
            }
        ]
    },

       {
        id: "medium-draft-quiz-5",
        title: "Guess where the top 10 2026 NFL Draft prospects went to college",
        category: "draft",
        difficulty: "medium",
        questions: [
            {
                question: "Prospect #1: Where did Arvell Reese go to college?",
                answers: ["UFC", "Colorado", "Ohio State", "Penn State"],
                correct: 2
            },
            {
                question: "Prospect #2: Where did Fernando Mendoza go to college?",
                answers: ["Miami", "Indiana", "Ohio State", "Rutgers"],
                correct: 1
            },
            {
                question: "Prospect #3: Where did David Bailey go to college?",
                answers: ["Texas Tech", "BYU", "Miami", "Clemson"],
                correct: 0
            },
            {
                question: "Prospect #4: Where did Jeremiyah Love go to college?",
                answers: ["Florida", "Penn State", "Notre Dame", "Indiana"],
                correct: 2
            },
            {
                question: "Prospect #5: Where did Francis Mauigoa go to college?",
                answers: ["Miami", "Alabama", "Iowa", "Florida State"],
                correct: 0
            },
            {
                question: "Prospect #6: Where did Caleb Downs go to college?",
                answers: ["Oregon", "Notre Dame", "Kansas", "Ohio State"],
                correct: 3
            },
            {
                question: "Prospect #7: Where did Sonny Styles go to college?",
                answers: ["Penn State", "Tennessee", "Arizona State", "Ohio State"],
                correct: 3
            },
            {
                question: "Prospect #8: Where did Mansoor Delane go to college?",
                answers: ["Texas A&M", "LSU", "Nebraska", "Clemson"],
                correct: 1
            },
            {
                question: "Prospect #9: Where did Rueben Bain Jr. go to college?",
                answers: ["Miami", "Georgia", "Texas", "Washington"],
                correct: 0
            },
            {
                question: "Prospect #10: Where did Makai Lemon go to college?",
                answers: ["Oregon", "USC", "Ohio State", "Washington"],
                correct: 1
            }
        ]
    },

    {
        id: "medium-draft-quiz-6",
        title: "Guess the first 10 picks of the 2026 NFL draft",
        category: "draft",
        difficulty: "medium",
        questions: [
            {
                question: "Which player was selected first overall by the Las Vegas Raiders?",
                answers: ["Fernando Mendoza", "Arvell Reese", "David Bailey", "Ty Simpson"],
                correct: 0
            },
            {
                question: "Which player was selected second overall by the NY Jets?",
                answers: ["Sonny Styles", "Arvell Reese", "David Bailey", "Jeremiyah Love"],
                correct: 2
            },
            {
                question: "Which player was selected third overall by the Arizona Cardinals?",
                answers: ["Carnell Tate", "Jeremiyah Love", "Sonny Styles", "Arvell Reese"],
                correct: 1
            },
            {
                question: "Which player was selected fourth overall by the Tennessee Titans?",
                answers: ["Arvell Reese", "Sonny Styles", "Carnell Tate", "Francis Mauigoa"],
                correct: 2
            },
            {
                question: "Which player was selected fifth overall by the NY Giants?",
                answers: ["Arvell Reese", "Francis Mauigoa", "Sonny Styles", "Caleb Downs"],
                correct: 0
            },
            {
                question: "Which player was selected sixth overall by the Kansas City Chiefs?",
                answers: ["Caleb Downs", "Francis Mauigoa", "Spencer Fano", "Mansoor Delane"],
                correct: 3
            },
            {
                question: "Which player was selected seventh overall by the Washington Commanders?",
                answers: ["Francis Mauigoa", "Sonny Styles", "Caleb Downs", "Jordyn Tyson"],
                correct: 1
            },
            {
                question: "Which player was selected eighth overall by the New Orleans Saints?",
                answers: ["Francis Mauigoa", "Caleb Downs", "Kadyn Proctor", "Jordyn Tyson"],
                correct: 3
            },
            {
                question: "Which player was selected ninth overall by the Cleveland Browns?",
                answers: ["Kadyn Proctor", "Francis Mauigoa", "Spencer Fano", "Caleb Downs"],
                correct: 2
            },
            {
                question: "Which player was selected tenth overall by the NY Giants?",
                answers: ["Kadyn Proctor", "Francis Mauigoa", "Caleb Downs", "Ty Simpson"],
                correct: 1
            }
        ]
    },
    
    {
        id: "medium-player-quiz",
        title: "Guess the NFL player by the teams he played for",
        category: "players",
        difficulty: "medium",
        questions: [
            {
                question: "New England Patriots - Tampa Bay Buccaneers",
                answers: ["Jameis Winston", "Vita Vea", "Julian Edelman", "Tom Brady"],
                correct: 3
            },
            {
                question: "NY Giants - Cleveland Browns - LA Rams - Baltimore Ravens - Miami Dolphins",
                answers: ["Jarvis Landry", "Odell Beckham Jr.", "Davante Adams", "Jalen Ramsey"],
                correct: 1
            },
            {
                question: "NY Jets - Carolina Panthers - San Francisco 49ers - Minnesota Vikings - Seattle Seahawks",
                answers: ["Sam Darnold", "Joe Flacco", "Jamal Adams", "Cooper Kupp"],
                correct: 0
            },
            {
                question: "Arizona Cardinals - Houston Texans - Kansas City Chiefs - New Orleans Saints",
                answers: ["Budda Baker", "Tyrann Mathieu", "DeAndre Hopkins", "Zane Gonzalez"],
                correct: 1
            },
            {
                question: "Kansas City Chiefs - Cleveland Browns - Kansas City Chiefs",
                answers: ["Mitchell Schwartz", "Dustin Hopkins", "Nick Chubb", "Kareem Hunt"],
                correct: 3
            },
            {
                question: "LA Rams - Atlanta Falcons",
                answers: ["Todd Gurley", "Younghoe Koo", "Steven Jackson", "Darnell Mooney"],
                correct: 0
            },
            {
                question: "Green Bay Packers - NY Jets - Pittsburgh Steelers",
                answers: ["Davante Adams", "Mercedes Lewis", "Aaron Rodgers", "Jaylen Warren"],
                correct: 2
            },
            {
                question: "LA Rams - Detroit Lions",
                answers: ["Jared Goff", "Matthew Stafford", "David Montgomery", "Josh Lambo"],
                correct: 0
            },
            {
                question: "Carolina Panthers - New England Patriots - Carolina Panthers",
                answers: ["Christian McCaffrey", "Dont'a Hightower", "Nick Folk", "Cam Newton"],
                correct: 3
            },
            {
                question: "Cleveland Browns - Houston Texans",
                answers: ["Dameon Pierce", "Ka'imi Fairbairn", "Greg Newsome", "Nick Chubb"],
                correct: 3
            }
        ]
    },
            {
        id: "medium-player-quiz-2",
        title: "The Tom Brady Quiz - How well do you know this NFL legend",
        category: "players",
        difficulty: "medium",
        questions: [
            {
                question: "Where did Tom Brady go to college?",
                answers: ["Ohio State", "Michigan", "Notre Dame", "Florida", ],
                correct: 1
            },
            {
                question: "How many Super Bowl rings did Tom Brady win?",
                answers: ["3", "4", "6", "7"],
                correct: 3
            },
            {
                question: "Which team did Tom Brady join after leaving the New England Patriots?",
                answers: ["Tampa Bay Buccaneers", "Kansas City Chiefs", "Miami Dolphins", "Las Vegas Raiders"],
                correct: 0
            },
            {
                question: "Which player caught the most receiving yards from Tom Brady?",
                answers: ["Randy Moss", "Rob Gronkowski", "Wes Welker", "Mike Evans"],
                correct: 1
            },
            {
                question: "How many Super Bowl rings did Tom Brady win with the New England Patriots?",
                answers: ["2", "3", "6", "8"],
                correct: 2
            },
            {
                question: "Tom Brady is now a minority owner of which NFL team?",
                answers: ["New England Patriots", "NY Jets", "Tampa Bay Buccaneers", "Las Vegas Raiders"],
                correct: 3
            },
            {
                question: "How many years did Tom Brady play in the NFL?",
                answers: ["18", "20", "23", "25"],
                correct: 2
            },
            {
                question: "In which round was Tom Brady selected in the 2000 NFL Draft?",
                answers: ["1st round", "2nd round", "5th round", "6th round"],
                correct: 3
            },
            {
                question: "Which team did Tom Brady defeat in his first Super Bowl victory?",
                answers: ["St. Louis Rams", "Denver Broncos", "Green Bay Packers", "Indianapolis Colts"],
                correct: 0
            },
            {
                question: "Which team did Tom Brady defeat in his last Super Bowl victory?",
                answers: ["Cincinnati Bengals", "Kansas City Chiefs", "Philadelphia Eagles", "San Francisco 49ers"],
                correct: 1
            }
        ]
    },
    
                 {
        id: "medium-player-quiz-3",
        title: "The Aaron Rodgers Quiz - How well do you know this NFL superstar?",
        category: "players",
        difficulty: "medium",
        questions: [
            {
                question: "Where did Aaron Rodgers go to college?",
                answers: ["California (Cal)", "USC", "Ohio State", "Michigan State"],
                correct: 0
            },
            {
                question: "How many Super Bowl rings did Aaron Rodgers win?",
                answers: ["0", "1", "2", "4"],
                correct: 1
            },
            {
                question: "How many MVP awards has Aaron Rodgers won",
                answers: ["1", "2", "3", "4"],
                correct: 3
            },
            {
                question: "Which team drafted Aaron Rodgers?",
                answers: ["NY Jets", "Green Bay Packers", "Philadelphia Eagles", "LA Rams"],
                correct: 1
            },
            {
                question: "Which team did Aaron Rodgers join after leaving the Green Bay Packers?",
                answers: ["NY Jets", "Kansas City Chiefs", "Pittsburgh Steelers", "LA Rams"],
                correct: 0
            },
            {
                question: "Which receiver caught the most receiving yards from Aaron Rodgers?",
                answers: ["Randall Cobb", "Marcedes Lewis", "Davante Adams", "Jordy Nelson"],
                correct: 2
            },
            {
                question: "Which receiver caught the most touchdown passes from Aaron Rodgers?",
                answers: ["Jordy Nelson", "Allen Lazard", "James Jones", "Davante Adams"],
                correct: 3
            },
            {
                question: "Which team did Aaron Rodgers defeat to win Super Bowl XLV?",
                answers: ["Kansas City Chiefs", "Pittsburgh Steelers", "Carolina Panthers", "Denver Broncos"],
                correct: 1
            },
            {
                question: "Before becoming the Packers' starting quarterback, Aaron Rodgers spent several seasons as the backup to which quarterback?",
                answers: ["Matt Hasselbeck", "Don Majkowski", "Tom Brady", "Brett Favre"],
                correct: 3
            },
            {
                question: "Which number did Aaron Rodgers wear while playing for the Green Bay Packers?",
                answers: ["8", "10", "12", "15"],
                correct: 2
            }
        ]
    },

                {
        id: "medium-player-quiz-4",
        title: "The Patrick Mahomes Quiz – How well do you know this NFL superstar?",
        category: "players",
        difficulty: "medium",
        questions: [
            {
                question: "Which number does Patrick Mahomes wear for the Kansas City Chiefs?",
                answers: ["5", "12", "15", "18", ],
                correct: 2
            },
            {
                question: "How many MVP awards has Patrick Mahomes won?",
                answers: ["1", "2", "3", "5"],
                correct: 1
            },
            {
                question: "How many Super Bowl MVP awards has Patrick Mahomes won?",
                answers: ["1", "2", "3", "4"],
                correct: 2
            },
            {
                question: "Where did Patrick Mahomes go to college?",
                answers: ["Texas", "Texas A&M", "Georgia", "Texas Tech"],
                correct: 3
            },
            {
                question: "Where is Patrick Mahomes from?",
                answers: ["Tyler (TX)", "Lubbock (TX)", "Los Angeles (CA)", "New Orleans (LA)"],
                correct: 0
            },
            {
                question: "Which receiver caught the most receiving yards from Patrick Mahomes?",
                answers: ["Tyreek Hill", "Travis Kelce", "Sammy Watkins", "Rashee Rice"],
                correct: 1
            },
            {
                question: "Which defender has intercepted Patrick Mahomes the most?",
                answers: ["Derwin James Jr.", "Jalen Ramsey", "Buddah Baker", "Justin Simmons"],
                correct: 3
            },
            {
                question: "Which team did Patrick Mahomes lose to in his first Super Bowl loss?",
                answers: ["Tampa Bay Buccaneers", "LA Rams", "Philadelphia Eagles", "Green Bay Packers"],
                correct: 0
            },
            {
                question: "Which team did Patrick Mahomes defeat in his first Super Bowl victory?",
                answers: ["Seattle Seahawks", "Tampa Bay Buccaneers", "San Francisco 49ers", "LA Rams"],
                correct: 2
            },
            {
                question: "How many times has Patrick Mahomes played in the Super Bowl?",
                answers: ["3", "4", "5", "7"],
                correct: 2
            }
        ]
    },

     {
        id: "medium-player-quiz-5",
        title: "2026 NFL Free Agency Quiz",
        category: "players",
        difficulty: "medium",
        questions: [
            {
                question: "Which team signed Jonathan Allen during the 2026 NFL free agency?",
                answers: ["Minnesota Vikings", "Washington Commanders", "Cleveland Browns", "Cincinnati Bengals"],
                correct: 3
            },
            {
                question: "Which team signed Bradley Chubb during the 2026 NFL free agency?",
                answers: ["Denver Broncos", "Buffalo Bills", "Kansas City Chiefs", "Las Vegas Raiders"],
                correct: 1
            },
            {
                question: "Which team signed Rico Dowdle during the 2026 NFL free agency?",
                answers: ["Carolina Panthers", "Pittsburgh Steelers", "Cleveland Browns", "LA Rams"],
                correct: 1
            },
            {
                question: "Which team signed Tua Tagovailoa during the 2026 NFL free agency?",
                answers: ["Las Vegas Raiders", "Pittsburgh Steelers", "Atlanta Falcons", "Minnesota Vikings"],
                correct: 2
            },
            {
                question: "Which team signed Mike Evans during the 2026 NFL free agency?",
                answers: ["Tampa Bay Buccaneers", "Cleveland Browns", "LA Chargers", "San Francisco 49ers"],
                correct: 3
            },
            {
                question: "Which team signed Michael Pittman Jr. during the 2026 NFL free agency?",
                answers: ["Pittsburgh Steelers", "Las Vegas Raiders", "Indianapolis Colts", "San Francisco 49ers"],
                correct: 0
            },
            {
                question: "Which team signed Tyler Linderbaum during the 2026 NFL free agency?",
                answers: ["Las Vegas Raiders", "Pittsburgh Steelers", "Seattle Seahawks", "New England Patriots"],
                correct: 0
            },
            {
                question: "Which team signed Marcus Mariota during the 2026 NFL free agency?",
                answers: ["Atlanta Falcons", "Washington Commanders", "Philadelphia Eagles", "Dallas Cowboys"],
                correct: 1
            },
            {
                question: "Which team signed Kenneth Walker during the 2026 NFL free agency?",
                answers: ["Green Bay Packers", "Seattle Seahawks", "Minnesota Vikings", "Kansas City Chiefs"],
                correct: 3
            },
            {
                question: "Which team signed Minkah Fitzpatrick during the 2026 NFL free agency?",
                answers: ["Arizona Cardinals", "Baltimore Ravens", "NY Jets", "NY Giants"],
                correct: 2
            }
        ]
    },

    {
        id: "medium-player-quiz-6",
        title: "Guess the leaders in the following 2025 NFL season statistics – Offense",
        category: "players",
        difficulty: "medium",
        questions: [
            {
                question: "Which player led the NFL in passing yards this season (2025)?",
                answers: ["Josh Allen", "Matthew Stafford", "Jared Goff", "Drake Maye"],
                correct: 1
            },
            {
                question: "Which player led the NFL in rushing yards this season (2025)?",
                answers: ["Jonathan Taylor", "Derrick Henry", "De'Von Achan", "James Cook"],
                correct: 3
            },
            {
                question: "Which player led the NFL in receiving yards this season (2025)?",
                answers: ["Trey McBride", "Puca Nacua", "Jaxon Smith-Njigba", "George Pickens"],
                correct: 1
            },
            {
                question: "Which player led the NFL in passing touchdowns this season (2025)?",
                answers: ["Matthew Stafford", "Jared Goff", "Dak Prescott", "Patrick Mahomes"],
                correct: 0
            },
            {
                question: "Which player led the NFL in rushing touchdowns this season (2025)?",
                answers: ["Jahmyr Gibbs", "Derrick Henry", "Jonathan Taylor", "Josh Jacobs"],
                correct: 2
            },
            {
                question: "Which player led the NFL in receiving touchdowns this season (2025)?",
                answers: ["Puca Nacua", "Davante Adams", "Tee Higgins", "Dallas Goedert"],
                correct: 1
            },
            {
                question: "Which player led the NFL in interceptions thrown this season (2025)?",
                answers: ["Geno Smith", "Sam Darnold", "Josh Allen", "Justin Herbert"],
                correct: 0
            },
            {
                question: "Which player led the NFL in fumbles lost this season (2025)?",
                answers: ["Cam Ward", "Baker Mayfield", "James Cook", "Derrick Henry"],
                correct: 1
            },
            {
                question: "Which player led the NFL in dropped passes this season (2025)?",
                answers: ["Amon-Ra St. Brown", "Jerry Jeudy", "Courtland Sutton", "Jameson Williams"],
                correct: 3
            },
            {
                question: "Which player led the NFL in penalties this season (2025)?",
                answers: ["Orlando Browns", "Patrick Surtain", "JC Latham", "Creed Humphrey"],
                correct: 2
            }
        ]
    },
    
    {
        id: "medium-teams-quiz",
        title: "Guess the stadium of following NFL teams",
        category: "teams",
        difficulty: "medium",
        questions: [
            {
                question: "Where do the Philadelphia Eagles play?",
                answers: ["Acrisure Stadium", "Lincoln Financial Field", "MetLife Stadium", "Falcon Stadium"],
                correct: 1
            },
            {
                question: "Where do the Kansas City Chiefs play?",
                answers: ["David Booth Kansas Memorial Stadium", "Northwest Stadium", "State Farm Stadium", "Arrowhead Stadium"],
                correct: 3
            },
            {
                question: "Where do the New England Patriots play?",
                answers: ["Gillette Stadium", "Alumni Stadium", "Ford Field", "Lucas Oil Stadium"],
                correct: 0
            },
            {
                question: "Where do the Los Angeles Rams & Los Angeles Chargers play?",
                answers: ["Allegiant Stadium", "EverBank Stadium", "SoFi Stadium", "U.S. Bank Stadium"],
                correct: 2
            },
            {
                question: "Where do the Seattle Seahawks play?",
                answers: ["Lumen Field", "Caesars Superdome", "Alaska Airlines Field at Husky Stadium", "Ford Field"],
                correct: 0
            },
            {
                question: "Where do the Buffalo Bills play?",
                answers: ["Hard Rock Stadium", "UB Stadium", "Soldier Field", "Highmark Stadium"],
                correct: 3
            },
            {
                question: "Where do the Miami Dolphins play?",
                answers: ["Allianz Arena", "Hard Rock Stadium", "Pitbull Stadium", "Huntington Bank Field"],
                correct: 1
            },
            {
                question: "Where do the Baltimore Ravens play?",
                answers: ["M&T Bank Stadium", "Nissan Stadium", "Paycor Stadium", "SECU Stadium"],
                correct: 0
            },
            {
                question: "Where do the Carolina Panthers play?",
                answers: ["Kidd Brewer Stadium", "U.S. Bank Stadium", "Bank of America Stadium", "NRG Stadium"],
                correct: 2
            },
            {
                question: "Where do the Cincinnati Bengals play?",
                answers: ["NRG Stadium", "AT&T Stadium", "Paycor Stadium", "Lucas Oil Stadium"],
                correct: 2
            }
        ]
    },
            {
        id: "medium-teams-quiz-2",
        title: "Guess the stadium of following NFL teams - 2",
        category: "teams",
        difficulty: "medium",
        questions: [
            {
                question: "Where do the Dallas Cowboys play?",
                answers: ["NRG Stadium", "Amon G. Carter Stadium", "AT&T Stadium", "State Farm Stadium"],
                correct: 2
            },
            {
                question: "Where do the Chicago Bears play?",
                answers: ["Soldier Field", "Paycor Stadium", "Lincoln Financial Field", "Arrowhead Stadium"],
                correct: 0
            },
            {
                question: "Where do the Atlanta Falcons play?",
                answers: ["Center Parc Stadium", "Ford Field", "Mercedes-Benz Stadium", "Nissan Stadium"],
                correct: 2
            },
            {
                question: "Where do the Las Vegas Raiders play?",
                answers: ["Allegiant Stadium", "Caesars Superdome", "SoFi Stadium", "Dix Stadium"],
                correct: 0
            },
            {
                question: "Where do the Cleveland Browns play?",
                answers: ["Arrowhead Stadium", "Huntington Bank Field", "Doyt L. Perry Stadium", "Nissan Stadium"],
                correct: 1
            },
            {
                question: "Where do the NY Jets & NY Giants play?",
                answers: ["JMA Wireless Dome", "MetLife Stadium", "U.S. Bank Stadium", "Highmark Stadium"],
                correct: 1
            },
            {
                question: "Where do the Tennessee Titans play?",
                answers: ["Neyland Stadium", "Lucas Oil Stadium", "Levi's Stadium", "Nissan Stadium"],
                correct: 3
            },
            {
                question: "Where do the Minnesota Vikings play?",
                answers: ["M&T Bank Stadium", "Northwest Stadium", "U.S. Bank Stadium", "Levi's Stadium"],
                correct: 2
            },
            {
                question: "Where do the Indianapolis Colts play?",
                answers: ["Lucas Oil Stadium", "Glass Bowl", "Hard Rock Stadium", "State Farm Stadium"],
                correct: 0
            },
            {
                question: "Where do the San Francisco 49ers play?",
                answers: ["Lambeau Field", "Raymond James Stadium", "Kinnick Stadium", "Levi's Stadium"],
                correct: 3
            }
        ]
    },

                {
        id: "medium-teams-quiz-3",
        title: "Fun general knowledge quiz on NFL teams",
        category: "teams",
        difficulty: "medium",
        questions: [
            {
                question: "Where did the Kansas City Chiefs play before relocating to Kansas City?",
                answers: ["Tallahassee", "St. Louis", "Boston", "Dallas"],
                correct: 3
            },
            {
                question: "Guess the northernmost team in the NFL (geographically)?",
                answers: ["New England Patriots", "Cleveland Browns", "Denver Broncos", "Seattle Seahawks"],
                correct: 3
            },
            {
                question: "Guess the southernmost team in the NFL (geographically)?",
                answers: ["Los Angeles Chargers", "Miami Dolphins", "Tampa Bay Buccaneers", "Arizona Cardinals"],
                correct: 1
            },
            {
                question: "How many NFL teams share its stadium with a college football team?",
                answers: ["1", "2", "3", "6"],
                correct: 3
            },
            {
                question: "Which of the following 4 NFL teams does not share their stadium with a college football team?",
                answers: ["Houston Texans", "Miami Dolphins", "Pittsburgh Steelers", "Las Vegas Raiders"],
                correct: 0
            },
            {
                question: "Guess the easternmost team in the NFL (geographically)?",
                answers: ["Miami Dolphins", "Jacksonville Jaguars", "New England Patriots", "Buffalo Bills"],
                correct: 2
            },
            {
                question: "Guess the westernmost team in the NFL (geographically)?",
                answers: ["San Francisco 49ers", "Seattle Seahawks", "Los Angeles Rams", "Arizona Cardinals"],
                correct: 1
            },
            {
                question: "Guess the biggest NFL stadium (by capacity)?",
                answers: ["SoFi Stadium", "Arrowhead Stadium", "MetLife Stadium", "Lambeau Field"],
                correct: 2
            },
            {
                question: "Guess the smallest NFL stadium (by capacity)?",
                answers: ["Soldier Field", "Ford Field", "Hard Rock Stadium", "Highmark Stadium"],
                correct: 0
            },
            {
                question: "How many NFL teams have a bird as their logo?",
                answers: ["1", "4", "5", "7"],
                correct: 2
            }
        ]
    },
    
//#endregion

//#region HARD
    {
        id: "hard-player-quiz",
        title: "Guess the NFL player by jersey number",
        category: "players",
        difficulty: "hard",
        questions: [
            {
                question: "Which number does Brandon Aubrey wear?",
                answers: ["1", "20", "7", "17"],
                correct: 3
            },
            {
                question: "Which number did Derek Carr wear?",
                answers: ["4", "1", "14", "12"],
                correct: 0
            },
            {
                question: "Which number does Cam Skattebo wear?",
                answers: ["33", "30", "40", "44"],
                correct: 3
            },
            {
                question: "Which number does Brandon Aiyuk wear?",
                answers: ["10", "11", "15", "18"],
                correct: 1
            },
            {
                question: "Which number does Vita Vea wear?",
                answers: ["40", "65", "50", "55"],
                correct: 2
            },
            {
                question: "Which number does Matt Milano wear?",
                answers: ["65", "58", "52", "55"],
                correct: 1
            },
            {
                question: "Which number does Rashee Rice wear?",
                answers: ["4", "6", "8", "12"],
                correct: 0
            },
            {
                question: "Which number did Andrew Luck wear?",
                answers: ["15", "10", "11", "12"],
                correct: 3
            },
            {
                question: "Which number does Aaron Jones wear?",
                answers: ["20", "23", "33", "30"],
                correct: 2
            },
            {
                question: "Which number did John Elway wear?",
                answers: ["7", "15", "12", "21"],
                correct: 0
            }
        ]
    },

                {
        id: "hard-player-quiz-2",
        title: "Guess the NFL player by jersey number - 2",
        category: "players",
        difficulty: "hard",
        questions: [
            {
                question: "Which number does Jonathan Allen wear?",
                answers: ["0", "50", "93", "99"],
                correct: 2
            },
            {
                question: "Which number did T.Y. Hilton wear?",
                answers: ["3", "13", "18", "88"],
                correct: 1
            },
            {
                question: "Which number does Colston Loveland wear?",
                answers: ["9", "80", "84", "89"],
                correct: 2
            },
            {
                question: "Which number did Ryan Jensen wear?",
                answers: ["66", "69", "74", "75"],
                correct: 0
            },
            {
                question: "Which number did Tyrann Mathieu wear?",
                answers: ["1", "3", "21", "32"],
                correct: 3
            },
            {
                question: "Which number does Tyler Allgeier wear?",
                answers: ["8", "25", "28", "32"],
                correct: 1
            },
            {
                question: "Which number did Pat McAfee wear?",
                answers: ["1", "5", "15", "21"],
                correct: 0
            },
            {
                question: "Which number does Harrison Butker wear?",
                answers: ["4", "7", "17", "19"],
                correct: 1
            },
            {
                question: "Which number does Tua Tagovailoa wear?",
                answers: ["0", "1", "4", "8"],
                correct: 1
            },
            {
                question: "Which number did Colin Kaepernick wear?",
                answers: ["1", "5", "7", "15"],
                correct: 2
            }
        ]
    },
    
    {
        id: "hard-player-quiz-3",
        title: "Guess the NFL player by teams he played for",
        category: "players",
        difficulty: "hard",
        questions: [
            {
                question: "LA Rams - Dallas Cowboys - San Francisco 49ers - Green Bay Packers - Jacksonville Jaguars - Buffalo Bills",
                answers: ["Cole Beasley", "Jalen Ramsey", "Tavon Austin", "Deion Sanders"],
                correct: 2
            },
            {
                question: "Atlanta Falcons - Green Bay Packers - NY Jets - Minnesota Vikings",
                answers: ["Aaron Rodgers", "Brett Favre", "Randall Cunningham", "Vinny Testaverde"],
                correct: 1
            },
            {
                question: "St.Louis Rams - Cincinnati Bengals - Buffalo Bills - Tennessee Titans - Houston Texans - NY Jets - Tampa Bay Buccaneers - Miami Dolphins - Washington Commanders",
                answers: ["Nick Foles", "Ryan Fitzpatrick", "Josh McCown", "Matt Cassel"],
                correct: 1
            },
            {
                question: "Miami Dolphins - Jacksonville Jaguars - Kansas City Chiefs",
                answers: ["Gardner Minshew", "Tyreek Hill", "Blake Bortles", "Chade Henne"],
                correct: 3
            },
            {
                question: "San Francisco 49ers - Kansas City Chiefs - Washington Redskins",
                answers: ["Jeff Garcia", "Joe Montana", "Alex Smith", "Andrew Wylie"],
                correct: 2
            },
            {
                question: "Denver Broncos - Houston Texans - Miami Dolphins - Indianapolis Colts",
                answers: ["Phillip Lindsay", "C.J Anderson", "Royce Freeman", "Phillip Dorsett II"],
                correct: 0
            },
            {
                question: "Cincinnati Bengals - Dallas Cowboys - Chicago Bears - New Orleans Saints - Carolina Panthers",
                answers: ["Chad Johnson", "Tyler Eifert", "Andy Dalton", "Tarik Cohen"],
                correct: 2
            },
            {
                question: "Dallas Cowboys - NY Jets - Tampa Bay Buccaneers - New England Patriots - Tennessee Titans - NY Jets",
                answers: ["Tyron Smith", "Josh Brown", "Josh Reynolds", "Nick Folk"],
                correct: 3
            },
            {
                question: "San Francisco 49ers - Denver Broncos",
                answers: ["Garett Wallow", "Dre Greenlaw", "Nik Bonitto", "Brandon Allen"],
                correct: 1
            },
            {
                question: "Denver Broncos - Los Angeles Rams - Buffalo Bills - Washington Commanders",
                answers: ["Leondard Floyd", "Case Keenum", "Von Miller", "Jeff Driskel"],
                correct: 2
            }
        ]
    },

    {
        id: "hard-player-quiz-4",
        title: "2026 NFL Free Agency Quiz",
        category: "players",
        difficulty: "hard",
        questions: [
            {
                question: "Which team signed Chig Okonkwo during the 2026 NFL free agency?",
                answers: ["Tennessee Titans", "NY Giants", "Washington Commanders", "NY Jets"],
                correct: 2
            },
            {
                question: "Which team signed Leo Chenal during the 2026 NFL free agency?",
                answers: ["Seattle Seahawks", "New Orleans Saints", "Washington Commanders", "Kansas City Chiefs"],
                correct: 2
            },
            {
                question: "Which team signed Elgton Jenkins during the 2026 NFL free agency?",
                answers: ["Cleveland Browns", "Carolina Panthers", "Green Bay Packers", "Arizona Cardinals"],
                correct: 0
            },
            {
                question: "Which team signed Ka'imi Fairbairn during the 2026 NFL free agency?",
                answers: ["NY Giants", "Houston Texans", "Las Vegas Raiders", "Atlanta Falcons"],
                correct: 1
            },
            {
                question: "Which team signed Alijah Vera-Tucker during the 2026 NFL free agency?",
                answers: ["NY Jets", "Las Vegas Raiders", "Cincinnati Bengals", "New England Patriots"],
                correct: 3
            },
            {
                question: "Which team signed Charlie Kolar during the 2026 NFL free agency?",
                answers: ["NY Jets", "LA Chargers", "Tennessee Titans", "Seattle Seahawks"],
                correct: 1
            },
            {
                question: "Which team signed Tyquan Thornton during the 2026 NFL free agency?",
                answers: ["Indianapolis Colts", "Las Vegas Raiders", "Kansas City Chiefs", "Green Bay Packers"],
                correct: 2
            },
            {
                question: "Which team signed Kendrick Bourne during the 2026 NFL free agency?",
                answers: ["Pittsburgh Steelers", "Kansas City Chiefs", "NY Jets", "Arizona Cardinals"],
                correct: 3
            },
            {
                question: "Which team signed Alex Anzalone during the 2026 NFL free agency?",
                answers: ["Tampa Bay Buccaneers", "Detroit Lions", "Jacksonville Jaguars", "New Orleans Saints"],
                correct: 0
            },
            {
                question: "Which team signed Jaylen Watson during the 2026 NFL free agency?",
                answers: ["Chicago Bears", "LA Rams", "Seattle Seahawks", "Kansas City Chiefs"],
                correct: 1
            }
        ]
    },
    
    {
        id: "hard-player-quiz-5",
        title: "The John Elway Quiz – How Well Do You Know This NFL Legend?",
        category: "players",
        difficulty: "hard",
        questions: [
            {
                question: "For which NFL team did John Elway play his whole career?",
                answers: ["Kansas City Chiefs", "Denver Broncos", "Arizona Cardinals", "St. Louis Rams"],
                correct: 1
            },
            {
                question: "Where did John Elway go to college?",
                answers: ["Harvard", "Ohio State", "USC", "Stanford"],
                correct: 3
            },
            {
                question: "Which number did John Elway wear in the NFL?",
                answers: ["5", "7", "15", "17"],
                correct: 1
            },
            {
                question: "In how many Super Bowls did John Elway play?",
                answers: ["2", "4", "5", "8"],
                correct: 2
            },
            {
                question: "How many Super Bowls did John Elway win?",
                answers: ["1", "2", "3", "5"],
                correct: 1
            },
            {
                question: "How many MVP awards did John Elway win?",
                answers: ["1", "2", "4", "6"],
                correct: 0
            },
            {
                question: "How many Super Bowl MVP awards did John Elway win?",
                answers: ["1", "2", "3", "5"],
                correct: 0
            },
            {
                question: "Which receiver caught the most passing touchdowns from John Elway?",
                answers: ["Rod Smith", "Ed McCaffrey", "Shannon Sharpe", "Vance Johnson"],
                correct: 2
            },
            {
                question: "How many passing touchdowns did John Elway throw in his NFL career?",
                answers: ["234", "273", "300", "329"],
                correct: 2
            },
            {
                question: "How many years did John Elway play in the NFL?",
                answers: ["13", "16", "18", "21"],
                correct: 1
            },
        ]
    },

    {
        id: "hard-player-quiz-6",
        title: "The Troy Aikman Quiz – How Well Do You Know This NFL Legend?",
        category: "players",
        difficulty: "hard",
        questions: [
            {
                question: "Where did Troy Aikman go to college (1986-1989)?",
                answers: ["USC", "Ohio State", "UCLA", "Oregon"],
                correct: 2
            },
            {
                question: "Which number did Troy Aikman wear in college that was later retired?",
                answers: ["5", "7", "8", "12"],
                correct: 2
            },
            {
                question: "By which team was Troy Aikman drafted?",
                answers: ["New England Patriots", "LA Rams", "NY Jets", "Dallas Cowboys"],
                correct: 3
            },
            {
                question: "How many MVP awards has Troy Aikman won?",
                answers: ["0", "1", "2", "5"],
                correct: 0
            },
            {
                question: "How many Super Bowl MVP awards has Troy Aikman won?",
                answers: ["0", "1", "3", "4"],
                correct: 1
            },
            {
                question: "How many Super Bowls has Troy Aikman won?",
                answers: ["1", "2", "3", "6"],
                correct: 2
            },
            {
                question: "Which receiver caught the most passing yards from Troy Aikman?",
                answers: ["Rocket Ismail", "Emmitt Smith", "Alvin Harper", "Michael Irvin"],
                correct: 3
            },
            {
                question: "Which receiver caught the most passing touchdowns from Troy Aikman?",
                answers: ["David LaFleur", "Emmitt Smith", "Jay Novacek", "Michael Irvin"],
                correct: 3
            },
            {
                question: "How many seasons did Troy Aikman play in the NFL?",
                answers: ["10", "12", "15", "18"],
                correct: 1
            },
            {
                question: "After retiring from the NFL, what job does Troy Aikman pursue now?",
                answers: ["NFL Head Coach", "College Football Head Coach", "NFL commentator", "NFL referee"],
                correct: 2
            },
        ]
    },
    
    {
        id: "hard-draft-quiz",
        title: "Guess where following NFL players went to college",
        category: "draft",
        difficulty: "hard",
        questions: [
            {
                question: "Where did Isiah Pacheco go to college",
                answers: ["Michigan", "LSU", "Iowa State", "Rutgers"],
                correct: 3
            },
            {
                question: "Where did Hunter Henry go to college?",
                answers: ["Arkansas", "Alabama", "Western Michigan", "FIU"],
                correct: 0
            },
            {
                question: "Where did Tariq Woolen go to college?",
                answers: ["Oregon", "TCU", "Oklahoma", "UTSA"],
                correct: 3
            },
            {
                question: "Where did Diontae Johnson go to college?",
                answers: ["Ohio State", "Toledo", "Akron", "Purdue"],
                correct: 1
            },
            {
                question: "Where did Jack Sawyer go to college?",
                answers: ["Ohio State", "Wake Forest", "Michigan State", "Florida State"],
                correct: 0
            },
            {
                question: "Where did Taylor Heinicke go to college?",
                answers: ["Kansas", "Georgia State", "Old Dominion", "Miami"],
                correct: 2
            },
            {
                question: "Where did Mason Rudolph go to college?",
                answers: ["Oklahoma", "Oklahoma State", "Texas Tech", "Syracuse"],
                correct: 1
            },
            {
                question: "Where did Danny Amendola go to college?",
                answers: ["Oregon", "Kansas State", "Florida", "Texas Tech"],
                correct: 3
            },
            {
                question: "Where did Cole Beasley go to college?",
                answers: ["Arizona State", "TCU", "SMU", "Georgia"],
                correct: 2
            },
            {
                question: "Where did Nick Chubb go to college?",
                answers: ["Georgia", "Colorado", "Colorado State", "LSU"],
                correct: 0
            }
        ]
    },
     {
        id: "hard-draft-quiz 2",
        title: "Guess where following NFL players went to college - 2",
        category: "draft",
        difficulty: "hard",
        questions: [
            {
                question: "Where did Tyler Lockett go to college?",
                answers: ["Nebraska", "Kansas State", "Iowa", "Florida"],
                correct: 1
            },
            {
                question: "Where did Sebastian Janikowski go to college?",
                answers: ["Georgia", "Texas A&M", "Florida State", "Miami"],
                correct: 2
            },
            {
                question: "Where did Tyrod Taylor go to college?",
                answers: ["Clemson", "Virginia Tech", "Syracuse", "Ohio State"],
                correct: 1
            },
            {
                question: "Where did Victor Cruz go to college?",
                answers: ["Syracuse", "Rutgers", "Michigan", "UMass"],
                correct: 3
            },
            {
                question: "Where did Walter Payton go to college?",
                answers: ["Grambling State", "Alabama", "Jackson State", "Georgia"],
                correct: 2
            },
            {
                question: "Where did Dameon Pierce go to college?",
                answers: ["Florida", "Georgia", "Texas Tech", "Texas State"],
                correct: 0
            },
            {
                question: "Where did Carson Wentz go to college?",
                answers: ["South Dakota State", "Wyoming", "Missouri State", "North Dakota State"],
                correct: 3
            },
            {
                question: "Where did Josh Lambo go to college?",
                answers: ["Oklahoma", "New Mexico", "Sam Houston", "Texas A&M"],
                correct: 3
            },
            {
                question: "Where did Alex Smith go to college?",
                answers: ["Utah", "Kansas State", "UCLA", "Maryland"],
                correct: 0
            },
            {
                question: "Where did Zay Flowers go to college?",
                answers: ["Miami (OH)", "Boston College", "Virginia Tech", "LSU"],
                correct: 1
            }
        ]
    },

            {
        id: "hard-draft-quiz 3",
        title: "Guess the NFL draft year by the selected players",
        category: "draft",
        difficulty: "hard",
        questions: [
            {
                question: "In which year was Khalil Mack drafted?",
                answers: ["2010", "2012", "2014", "2015"],
                correct: 2
            },
            {
                question: "In which year was Dalton Kincaid drafted?",
                answers: ["2019", "2021", "2022", "2023"],
                correct: 3
            },
            {
                question: "In which year was Patrick Queen drafted?",
                answers: ["2018", "2019", "2020", "2022"],
                correct: 2
            },
            {
                question: "In which year was Marcedes Lewis drafted?",
                answers: ["2005", "2006", "2008", "2009"],
                correct: 1
            },
            {
                question: "In which year was Ezekiel Elliott drafted?",
                answers: ["2014", "2016", "2017", "2018"],
                correct: 1
            },
            {
                question: "In which year was D.J. Moore drafted?",
                answers: ["2018", "2019", "2020", "2021"],
                correct: 0
            },
            {
                question: "In which year was Cooper Dejean drafted?",
                answers: ["2021", "2023", "2024", "2025"],
                correct: 2
            },
            {
                question: "In which year was Henry Ruggs drafted?",
                answers: ["2018", "2020", "2021", "2022"],
                correct: 1
            },
            {
                question: "In which year was Cameron Jordan drafted?",
                answers: ["2011", "2012", "2014", "2015"],
                correct: 0
            },
            {
                question: "In which year was Vita Vea drafted?",
                answers: ["2014", "2015", "2016", "2018"],
                correct: 3
            }
        ]
    },

                 {
        id: "hard-draft-quiz-4",
        title: "Guess the NFL draft year by the selected players - 2",
        category: "draft",
        difficulty: "hard",
        questions: [
            {
                question: "In which year was Todd Gurley drafted?",
                answers: ["2011", "2013", "2014", "2015"],
                correct: 3
            },
            {
                question: "In which year was Trent McDuffie drafted?",
                answers: ["2019", "2021", "2022", "2024"],
                correct: 2
            },
            {
                question: "In which year was Joe Flacco drafted?",
                answers: ["2005", "2006", "2008", "2009"],
                correct: 0
            },
            {
                question: "In which year was Ryan Fitzpatrick drafted?",
                answers: ["2003", "2005", "2007", "2008"],
                correct: 1
            },
            {
                question: "In which year was T.J. Watt drafted?",
                answers: ["2015", "2016", "2017", "2019"],
                correct: 2
            },
            {
                question: "In which year was Brian Cushing drafted?",
                answers: ["2005", "2008", "2009", "2010"],
                correct: 2
            },
            {
                question: "In which year was Najee Harris drafted?",
                answers: ["2017", "2018", "2020", "2021"],
                correct: 3
            },
            {
                question: "In which year was Jake Matthews drafted?",
                answers: ["2012", "2014", "2015", "2016"],
                correct: 1
            },
            {
                question: "In which year was Ladd McConkey drafted?",
                answers: ["2020", "2022", "2023", "2024"],
                correct: 3
            },
            {
                question: "In which year was Marcus Trufant drafted?",
                answers: ["2003", "2004", "2006", "2007"],
                correct: 0
            }
        ]
    },

    {
        id: "hard-draft-quiz-5",
        title: "Guess picks 11-20 of the 2026 NFL draft",
        category: "draft",
        difficulty: "hard",
        questions: [
            {
                question: "Which player was selected eleventh overall by the Dallas Cowboys?",
                answers: ["Kadyn Proctor", "Mansoor Delane", "Caleb Downs", "Olaivavega Ioane"],
                correct: 2
            },
            {
                question: "Which player was selected twelfth overall by the Miami Dolphins?",
                answers: ["Olaivavega Ioane", "Kadyn Proctor", "Rueben Bain Jr.", "Blake Miller"],
                correct: 1
            },
            {
                question: "Which player was selected thirteenth overall by the LA Rams?",
                answers: ["KC Concepcion", "Rueben Bain Jr.", "Makai Lemon", "Ty Simpson"],
                correct: 3
            },
            {
                question: "Which player was selected fourteenth overall by the Baltimore Ravens?",
                answers: ["Rueben Bain Jr.", "Olaivavega Ioane", "Makai Lemon", "Kenyon Sadiq"],
                correct: 1
            },
            {
                question: "Which player was selected fifteenth overall by the Tampa Bay Buccaneers?",
                answers: ["Rueben Bain Jr.", "Kenyon Sadiq", "Makai Lemon", "Omar Cooper Jr."],
                correct: 0
            },
            {
                question: "Which player was selected sixteenth overall by the NY Jets?",
                answers: ["Omar Cooper Jr.", "Makai Lemon", "Akheem Mesidor", "Kenyon Sadiq"],
                correct: 3
            },
            {
                question: "Which player was selected seventeenth overall by the Detroit Lions?",
                answers: ["Caleb Banks", "Dillon Thieneman", "Blake Miller", "Akheem Mesidor"],
                correct: 2
            },
            {
                question: "Which player was selected eighteenth overall by the Minnesota Vikings?",
                answers: ["Dillon Thieneman", "Caleb Banks", "Makai Lemon", "Chris Johnson"],
                correct: 1
            },
            {
                question: "Which player was selected nineteenth overall by the Carolina Panthers?",
                answers: ["Monroe Freeling", "Dillon Thieneman", "Caleb Lomu", "Jadarian Price"],
                correct: 0
            },
            {
                question: "Which player was selected twentieth overall by the Philadelphia Eagles?",
                answers: ["Makai Lemon", "Caleb Lomu", "Akheem Mesidor", "KC Concepcion"],
                correct: 0
            }
        ]
    },

    {
        id: "hard-draft-quiz-6",
        title: "Guess picks 21-32 of the 2026 NFL draft",
        category: "draft",
        difficulty: "hard",
        questions: [
            {
                question: "Which player was selected twenty-first overall by the Pittsburgh Steelers?",
                answers: ["Max Iheanachor", "Kadyn Proctor", "De'Zhaun Stribling", "Keldric Faulk"],
                correct: 0
            },
            {
                question: "Which player was selected twenty-second overall by the LA Chargers?",
                answers: ["Malachi Lawrence", "Dillon Thieneman", "Akheem Mesidor", "Omar Cooper Jr."],
                correct: 2
            },
            {
                question: "Which player was selected twenty-third overall by the Dallas Cowboys?",
                answers: ["Malachi Lawrence", "Dillon Thieneman", "Denzel Boston",  "Keylan Rutledge"],
                correct: 0
            },
            {
                question: "Which player was selected twenty-fourth overall by the Cleveland Browns?",
                answers: ["Denzel Boston", "KC Concepcion", "Keldric Faulk", "Peter Woods"],
                correct: 1
            },
            {
                question: "Which player was selected twenty-fifth overall by the Chicago Bears?",
                answers: ["Chris Johnson", "Peter Woods", "Denzel Boston", "Dillon Thieneman"],
                correct: 3
            },
            {
                question: "Which player was selected twenty-sixth overall by the Houston Texans?",
                answers: ["Chris Johnson", "Peter Woods", "Keylon Rutledge", "Jadarian Price"],
                correct: 2
            },
            {
                question: "Which player was selected twenty-seventh overall by the Miami Dolphins?",
                answers: ["Denzel Boston", "De'Zhaun Stribling", "Keldric Faulk", "Chris Johnson"],
                correct: 3
            },
            {
                question: "Which player was selected twenty-eighth overall by the New England Patriots?",
                answers: ["Caleb Lomu", "Jadarian Price", "Kayden McDonald", "Omar Cooper Jr."],
                correct: 0
            },
            {
                question: "Which player was selected twenty-ninth overall by the Kansas City Chiefs?",
                answers: ["R Mason Thomas", "Colton Hood", "Kayden McDonald", "Peter Woods"],
                correct: 3
            },
            {
                question: "Which player was selected thirtieth overall by the NY Jets?",
                answers: ["Omar Cooper Jr.", "Jadarian Price", "Chase Bisontis", "Treydan Stukes"],
                correct: 0
            },
            {
                question: "Which player was selected thirty-first overall by the Tennessee Titans?",
                answers: ["Chase Bisontis", "Keldric Faulk", "Denzel Boston", "Zion Young"],
                correct: 1
            },
            {
                question: "Which player was selected thirty-second overall by the Seattle Seahawks?",
                answers: ["Colton Hood", "Jadarian Price", "Kayden McDonald", "Jacob Rodriguez"],
                correct: 1
            },
        ]
    },
    
    {
        id: "hard-teams-quiz",
        title: "NFL franchise history quiz",
        category: "teams",
        difficulty: "hard",
        questions: [
            {
                question: "What is the oldest team still playing in the NFL?",
                answers: ["Patriots", "Steelers", "Cardinals", "Browns"],
                correct: 2
            },
            {
                question: "Which team won the first ever Super Bowl?",
                answers: ["Ravens", "Packers", "Cardinals", "Chiefs"],
                correct: 1
            },
            {
                question: "Which team lost the first ever Super Bowl?",
                answers: ["Browns", "Lions", "Cardinals", "Chiefs"],
                correct: 3
            },
            {
                question: "Which team has the most wins in NFL history?",
                answers: ["Cowboys", "Chiefs", "Patriots", "Packers"],
                correct: 3
            },
            {
                question: "Which franchise never played in a Super Bowl?",
                answers: ["Ravens", "Lions", "Bills", "Vikings"],
                correct: 1
            },
            {
                question: "Which is the youngest NFL franchise?",
                answers: ["Lions", "Jaguars", "Rams", "Texans"],
                correct: 3
            },
            {
                question: "How many NFL franchises never made the Super Bowl?",
                answers: ["2", "5", "6", "4"],
                correct: 3
            },
            {
                question: "For which team did Björn Werner play?",
                answers: ["Colts", "Chargers", "Seahawks", "Giants"],
                correct: 0
            },
            {
                question: "Which team won a Super Bowl in their home stadium first?",
                answers: ["Packers", "Buccaneers", "Chiefs", "49ers"],
                correct: 1
            },
            {
                question: "Which is the richest NFL franchise?",
                answers: ["Rams", "Raiders", "Broncos", "Cowboys"],
                correct: 3
            }
        ]
    },

            {
        id: "hard-teams-quiz-2",
        title: "Guess the Owner of the following NFL Franchises (2026)",
        category: "teams",
        difficulty: "hard",
        questions: [
            {
                question: "Who is the current owner of the Dallas Cowboys?",
                answers: ["Dean Spanos", "Tom Gaglardi", "Steve Ballmer", "Jerry Jones"],
                correct: 3
            },
            {
                question: "Who is the current owner of the Las Vegas Raiders?",
                answers: ["John Madden", "Robert Kraft", "Mark Davis", "Gayle Benson"],
                correct: 2
            },
            {
                question: "Who is the current owner of the Kansas City Chiefs?",
                answers: ["Clark Hunt", "Patrick Mahomes", "Mark Walter", "Gayle Benson"],
                correct: 0
            },
            {
                question: "Who is the current owner of the Minnesota Vikings?",
                answers: ["Alex Rodriguez", "Jeremy Jacobs", "Zygi Wilf", "Shahid Khan"],
                correct: 2
            },
            {
                question: "Who is the current owner of the New England Patriots?",
                answers: ["Robert Kraft", "Tom Brady", "Rob Walton", "Tom Gores"],
                correct: 0
            },
            {
                question: "Who is the current owner of the Indianapolis Colts?",
                answers: ["John Mara", "Carlie Irsay-Gordon", "Dean Spanos", "Herbert Simon"],
                correct: 1
            },
            {
                question: "Who is the current owner of the Tampa Bay Buccaneers?",
                answers: ["Jeffrey Vinik", "Shahid Khan", "Ray Davis", "Bryan Glazer"],
                correct: 3
            },
            {
                question: "Who is the current owner of the New Orleans Saints?",
                answers: ["John Mara", "Alvin Kamara", "Josh Harris", "Gayle Benson"],
                correct: 3
            },
            {
                question: "Who is the current owner of the Denver Broncos?",
                answers: ["Rob Walton", "Jimmy Haslam", "Peyton Manning", "John Sherman"],
                correct: 0
            },
            {
                question: "Who is the current owner of the Buffalo Bills?",
                answers: ["Clark Hunt", "Terry Pegula", "Steve Bisciotti", "Mark Cuban"],
                correct: 1
            }
        ]
    },

    {
        id: "hard-teams-quiz-3",
        title: "Guess the best NFL team based on the following 2025 season statistics",
        category: "teams",
        difficulty: "hard",
        questions: [
            {
                question: "Which team led the NFL in total offensive yards this season (2025)?",
                answers: ["Kansas City Chiefs", "LA Rams", "New England Patriots", "Buffalo Bills"],
                correct: 1
            },
            {
                question: "Which team led the NFL in passing yards this season (2025)?",
                answers: ["San Francisco 49ers", "LA Rams", "Dallas Cowboys", "Buffalo Bills"],
                correct: 1
            },
            {
                question: "Which team led the NFL in rushing yards this season (2025)?",
                answers: ["Chicago Bears", "LA Rams", "Buffalo Bills", "NY Giants"],
                correct: 2
            },
            {
                question: "Which NFL team scored the most points per game this season (2025)?",
                answers: ["Seattle Seahawks", "Buffalo Bills", "LA Rams", "Jacksonville Jaguars"],
                correct: 2
            },
            {
                question: "Which team led the NFL in penalties this season (2025)?",
                answers: ["Minnesota Vikings", "Jacksonville Jaguars", "NY Giants", "Dallas Cowboys"],
                correct: 3
            },
            {
                question: "Which NFL team received the fewest penalties this season (2025)?",
                answers: ["Kansas City Chiefs", "San Francisco 49ers", "LA Rams", "Buffalo Bills"],
                correct: 2
            },
            {
                question: "Which NFL team allowed the fewest yards this season (2025)?",
                answers: ["Houston Texans", "Minnesota Vikings", "Los Angeles Chargers", "Denver Broncos"],
                correct: 0
            },
            {
                question: "Which NFL team allowed the fewest points per game this season (2025)?",
                answers: ["Houston Texans", "Seattle Seahawks", "Kansas City Chiefs", "New England Patriots"],
                correct: 1
            },
            {
                question: "Which NFL team recorded the most Sacks this season (2025)?",
                answers: ["Cleveland Browns", "Pittsburgh Steelers", "Atlanta Falcons", "Denver Broncos"],
                correct: 3
            },
            {
                question: "Which NFL team recorded the most Interceptions this season (2025)?",
                answers: ["Jacksonville Jaguars", "Houston Texans", "NY Jets", "Seattle Seahawks"],
                correct: 0
            }
        ]
    },
//#endregion
];








