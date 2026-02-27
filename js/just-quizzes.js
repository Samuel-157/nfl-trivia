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
        title: "NFL basic knowledge 2",
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
        id: "easy-teams-quiz",
        title: "Guess the name of the NFL team",
        category: "teams",
        difficulty: "easy",
        questions: [
            {
                question: "Guess the name: New England - ?",
                answers: ["Saints", "Chiefs", "Rams", "Patriots"],
                correct: 3
            },
            {
                question: "Guess the city: Seahawks?",
                answers: ["Portland", "Los Angeles", "Seattle", "Denver"],
                correct: 2
            },
            {
                question: "Guess the name: Tampa Bay - ?",
                answers: ["Pirates", "Raiders", "Seaman", "Buccaneers"],
                correct: 3
            },
            {
                question: "Guess the city: Browns?",
                answers: ["Indianapolis", "Cleveland", "Chicago", "Pittsburgh"],
                correct: 1
            },
            {
                question: "Guess the team name: Chicago - ?",
                answers: ["Grizzlies", "Lions", "Bulls", "Bears"],
                correct: 3
            },
            {
                question: "Guess the city: Cowboys?",
                answers: ["Houston", "Oklahoma City", "Dallas", "Birmingham"],
                correct: 2
            },
            {
                question: "Guess the team name: Minnesota - ?",
                answers: ["Vikings", "Timberwolves", "Bucks", "Thunder"],
                correct: 0
            },
            {
                question: "Guess the city: Chiefs?",
                answers: ["Topeka", "Las Vegas", "Little Rock", "Kansas City"],
                correct: 3
            },
            {
                question: "Guess the team name: New Orleans - ?",
                answers: ["Cougars", "Saints", "Tigers", "Pelicans"],
                correct: 1
            },
            {
                question: "Guess the city: Dolphins?",
                answers: ["Atlanta", "Savannah", "Miami", "Charlotte"],
                correct: 2
            }
        ]
    },
        {
        id: "easy-teams-quiz 2",
        title: "Guess the name of the NFL team 2",
        category: "teams",
        difficulty: "easy",
        questions: [
            {
                question: "Guess the name: Buffalo - ?",
                answers: ["Colts", "Rams", "Bills", "Bengals"],
                correct: 2
            },
            {
                question: "Guess the city: Chargers?",
                answers: ["San Francisco", "Oklahoma City", "Topeka", "Los Angeles"],
                correct: 3
            },
            {
                question: "Guess the name: Las Vegas - ?",
                answers: ["Raiders", "Sharks", "Gamblers", "Pirates"],
                correct: 0
            },
            {
                question: "Guess the city: Bengals?",
                answers: ["Akron", "Pittsburgh", "Portland", "Cincinnati"],
                correct: 3
            },
            {
                question: "Guess the team name: Indianapolis - ?",
                answers: ["Fighting Illini", "Cowboys", "Colts", "Pacers"],
                correct: 2
            },
            {
                question: "Guess the city: Texans?",
                answers: ["Las Vegas", "San Antonio", "Austin", "Houston"],
                correct: 3
            },
            {
                question: "Guess the team name: Denver - ?",
                answers: ["Saints", "Broncos", "Nuggets", "Cubs"],
                correct: 1
            },
            {
                question: "Guess the city: Jaguars?",
                answers: ["Savannah", "Jacksonville", "Orlando", "Chicago"],
                correct: 1
            },
            {
                question: "Guess the team name: Arizona - ?",
                answers: ["Cougars", "Browns", "Cardinals", "Rams"],
                correct: 2
            },
            {
                question: "Guess the city: Commanders?",
                answers: ["Washington D.C.", "New York", "Concord", "Boston"],
                correct: 0
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
        title: "Guess the NFL draft year by the QBs selected 2",
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
        title: "Guess the stadium of following NFL teams 2",
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
        id: "hard-player-quiz 2",
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
        title: "Guess where following NFL players went to college 2",
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
//#endregion
];
