var imgUrl;

//**ANALYTICS**//

// # of swipes right counter
var swipeRight = 0;

// all ages of profiles you matched with
var avgAge = []; 

//**MATCHES VARIABLES**/
// if they swipe right on you
var love = false;
// if you swipe right on them
var loveMatch = false;
// swipes that end up with a match 
var catMatch = 0;
var dogMatch = 0;
var totalMatch;

// # of swipes (left and right) counter 
var catSwipes = 0;
var dogSwipes = 0;
var totalSwipes;

// match ratio
var matchRatio;


//**VARIABLES CURRENTLY NOT BEING USED FOR ANAYLTICS */
// match or no match counter
var match = 0;
var nomatch = 0;

// swipes that don't end up with a match
var catNoMatch = 0;
var dogNoMatch = 0;


//**PREFERENCES VARIABLES**/
// age range
var low = 0 ;
var high = 0;

// cat, dog, or both
var interestCats = false;
var interestDogs = false;
var interestBoth = false;

// initialize empty matchProfileObj
var matchProfileObj = {};

// random names
var names = [ "Abbey","Abbie","Abby","Abel","Abigail","Ace","Adam","Addie","Admiral","Aggie","Aires","AJ","Ajax","Aldo","Alex","Alexus","Alf","Alfie","Allie","Ally","Amber","Amie","Amigo","Amos","Amy","Andy","Angel","Angus","Annie","Apollo","April","Archie","Argus","Aries","Armanti","Arnie","Arrow","Ashes","Ashley","Astro","Athena","Atlas","Audi","Augie","Aussie","Austin","Autumn","Axel","Axle","Babbles","Babe","Baby","Baby Doll","Babykins","Bacchus","Bailey","Bam-bam","Bambi","Bandit","Banjo","Barbie","Barclay","Barker","Barkley","Barley","Barnaby","Barney","Baron","Bart","Basil","Baxter","BB","Beamer","Beanie","Beans","Bear","Beau","Beauty","Beaux","Bebe","Beetle","Bella","Belle","Ben","Benji","Benny","Benson","Bentley","Bernie","Bessie","Biablo","Bibbles","Big Foot","Biggie","Billie","Billy","Bingo","Binky","Birdie","Birdy","Biscuit","Bishop","Bits","Bitsy","Bizzy","BJ","Blackie","Blackjack","Blanche","Blast","Blaze","Blondie","Blossom","Blue","Bo","Bob","Bobbie","Bobby","Bobo","Bodie","Bogey","Bones","Bongo","Bonnie","Boo","Boo-boo","Booker","Boomer","Boone","Booster","Bootie","Boots","Boozer","Boris","Bosco","Bosley","Boss","Boy","Bozley","Bradley","Brady","Braggs","Brandi","Brando","Brandy","Bridgett","Bridgette","Brie","Brindle","Brit","Brittany","Brodie","Brook","Brooke","Brownie","Bruiser","Bruno","Brutus","Bubba","Bubbles","Buck","Buckeye","Bucko","Bucky","Bud","Budda","Buddie","Buddy","Buffie","Buffy","Bug","Bugsey","Bugsy","Bullet","Bullwinkle","Bully","Bumper","Bunky","Buster","Butch","Butchy","Butter","Butterball","Buttercup","Butterscotch","Buttons","Buzzy","Caesar","Cali","Callie","Calvin","Cameo","Camille","Candy","Capone","Captain","Carley","Casey","Casper","Cassie","Cassis","Cha Cha","Chad","Chamberlain","Champ","Chance","Chanel","Chaos","Charisma","Charles","Charlie","Charmer","Chase","Chauncey","Chaz","Checkers","Chelsea","Cherokee","Chessie","Chester","Chevy","Chewie","Chewy","Cheyenne","Chi Chi","Chic","Chico","Chief","Chili","China","Chip","Chipper","Chippy","Chips","Chiquita","Chivas","Chloe","Chocolate","Chrissy","Chubbs","Chucky","Chyna","Cinder","Cindy","Cinnamon","Cisco","Claire","Clancy","Cleo","Cleopatra","Clicker","Clifford","Clover","Clyde","Coal","Cobweb","Coco","Cocoa","Coconut","Codi","Cody","Cole","Comet","Commando","Conan","Connor","Cookie","Cooper","Copper","Corky","Cosmo","Cotton","Cozmo","Crackers","Cricket","Crystal","Cubby","Cubs","Cujo","Cupcake","Curly","Curry","Cutie","Cyrus","Daffy","Daisy","Dakota","Dallas","Dandy","Dante","Daphne","Darby","Darcy","Darwin","Dash","Dave","Deacon","Dee","Dee Dee","Dempsey","Destini","Dewey","Dexter","Dharma","Diamond","Dickens","Diego","Diesel","Digger","Dillon","Dinky","Dino","Diva","Dixie","Dobie","Doc","Dodger","Doggon’","Dolly","Domino","Doodles","Doogie","Dots","Dottie","Dozer","Dragster","Dreamer","Duchess","Dude","Dudley","Duffy","Duke","Duncan","Dunn","Dusty","Dutches","Dutchess","Dylan","Earl","Ebony","Echo","Eddie","Eddy","Edgar","Edsel","Eifel","Einstein","Ellie","Elliot","Elmo","Elvis","Elwood","Ember","Emily","Emma","Emmy","Erin","Ernie","Eva","Faith","Fancy","Felix","Fergie","Ferris","Fido","Fifi","Figaro","Finnegan","Fiona","Flake","Flakey","Flash","Flint","Flopsy","Flower","Floyd","Fluffy","Fonzie","Foxy","Francais","Frankie","Franky","Freckles","Fred","Freddie","Freddy","Freedom","Freeway","Fresier","Friday","Frisco","Frisky","Fritz","Frodo","Frosty","Furball","Fuzzy","Gabby","Gabriella","Garfield","Gasby","Gator","Gavin","Genie","George","Georgia","Georgie","Giant","Gibson","Gidget","Gigi","Gilbert","Gilda","Ginger","Ginny","Girl","Gizmo","Godiva","Goldie","Goober","Goose","Gordon","Grace","Gracie","Grady","Greenie","Greta","Gretchen","Gretel","Gretta","Griffen","Gringo","Grizzly","Gromit","Grover","Gucci","Guido","Guinness","Gunner","Gunther","Gus","Guy","Gypsy","Hailey","Haley","Hallie","Hamlet","Hammer","Hank","Hanna","Hannah","Hans","Happyt","Hardy","Harley","Harpo","Harrison","Harry","Harvey","Heather","Heidi","Henry","Hercules","Hershey","Higgins","Hobbes","Holly","Homer","Honey","Hooch","Hoover","Hope","Houdini","Howie","Hudson","Huey","Hugh","Hugo","Humphrey","Hunter","India","Indy","Iris","Isabella","Isabelle","Itsy","Ivory","Ivy","Izzy","Jack","Jackie","Jackpot","Jackson","Jade","Jagger","Jags","Jaguar","Jake","Jamie","Jasmine","Jasper","Jaxson","Jazmie","Jazz","Jelly","Jellybean","Jenna","Jenny","Jerry","Jersey","Jess","Jesse","Jessie","Jester","Jet","Jethro","Jett","Jetta","Jewel","Jewels","Jimmuy","Jingles","JJ","Joe","Joey","Johnny","Jojo","Joker","Jolie","Jolly","Jordan","Josie","Joy","JR","Judy","Julius","June","Junior","Justice","Kali","Kallie","Kane","Karma","Kasey","Katie","Kato","Katz","Kayla","KC","Keesha","Kellie","Kelly","Kelsey","Kenya","Kerry","Kibbles","Kid","Kiki","Killian","King","Kipper","Kira","Kirby","Kismet","Kissy","Kitty","Kiwi","Klaus","Koba","Kobe","Koda","Koko","Kona","Kosmo","Koty","Kramer","Kujo","Kurly","Kyra","Lacey","Laddie","Lady","Ladybug","Laney","Lassie","Latte","Layla","Lazarus","Lefty","Leo","Levi","Lexi","Lexie","Lexus","Libby","Lightning","Lili","Lilly","Lily","Lincoln","Linus","Lizzy","Logan","Loki","Lola","Lou","Louie","Louis","Lovey","Lucas","Luci","Lucifer","Lucky","Lucy","Luke","Lulu","Luna","Lynx","Mac","Macho","Macintosh","Mack","Mackenzie","Macy","Maddie","Maddy","Madison","Maggie","Maggie-mae","Maggie-moo","Magic","Magnolia","Major","Mandi","Mandy","Mango","Marble","Mariah","Marley","Mary","Mary Jane","Mason","Mattie","Maverick","Max","Maximus","Maxine","Maxwell","May","Maya","Mcduff","Mckenzie","Meadow","Megan","Meggie","Mercedes","Mercle","Merlin","Mia","Miasy","Michael","Mickey","Midnight","Mikey","Miko","Miles","Miller","Millie","Milo","Mimi","Mindy","Ming","Mini","Minnie","Mischief","Misha","Miss Kitty","Missie","Missy","Mister","Misty","Mitch","Mittens","Mitzi","Mitzy","Mo","Mocha","Mojo","Mollie","Molly","Mona","Monkey","Monster","Montana","Montgomery","Monty","Moocher","Moochie","Mookie","Moonshine","Moose","Morgan","Moses","Mouse","Mr Kitty","Muffin","Muffy","Mugsy","Mulligan","Munchkin","Murphy","Nakita","Nala","Nana","Napoleon","Natasha","Nathan","Nellie","Nemo","Nena","Nero","Nestle","Newt","Newton","Nibbles","Nibby","Nick","Nickers","Nickie","Nicky","Nico","Nike","Niki","Nikita","Nikki","Niko","Nina","Nitro","Nobel","Noel","Nona","Noodles","Norton","Nosey","Nugget","Nutmeg","Oakley","Obie","Odie","Olive","Oliver","Olivia","Ollie","Onie","Onyx","Opie","Oreo","Oscar","Otis","Otto","Oz","Ozzie","Ozzy","Pablo","Paco","Paddington","Paddy","Panda","Pandora","Panther","Papa","Paris","Parker","Pasha","Patch","Patches","Patricky","Patsy","Patty","Peaches","Peanut","Peanuts","Pearl","Pebbles","Pedro","Penny","Pepe","Pepper","Peppy","Pepsi","Persy","Pete","Peter","Petey","Petie","Phantom","Phoebe","Phoenix","Picasso","Pickles","Pierre","Piggy","Piglet","Pinky","Pinto","Piper","Pippin","Pippy","Pip-squeek","Pirate","Pixie","Plato","Pluto","Pockets","Pogo","Pokey","Polly","Poncho","Pongo","Pooch","Poochie","Pooh","Pooh Bear","Pookie","Pooky","Popcorn","Poppy","Porche","Porkchop","Porky","Porter","Powder","Prancer","Precious","Presley","Pretty","Prince","Princess","Prissy","Puck","Puddles","Pudge","Puffy","Pugsley","Pumpkin","Punkin","Puppy","Purdy","Queen","Queenie","Quincy","Quinn","Rags","Raison","Ralph","Ralphie","Rambler","Rambo","Ranger","Rascal","Raven","Rebel","Red","Reggie","Reilly","Remy","Rex","Rexy","Rhett","Ricky","Rico","Riggs","Riley","Rin Tin Tin","Ringo","Ripley","Rocco","Rock","Rocket","Rocko","Rocky","Roland","Rolex","Rollie","Roman","Romeo","Rosa","Roscoe","Rosebud","Rosie","Rosy","Rover","Rowdy","Roxanne","Roxie","Roxy","Ruby","Ruchus","Rudy","Ruffe","Ruffer","Ruffles","Rufus","Ruger","Rusty","Ruthie","Ryder","Sabine","Sable","Sabrina","Sadie","Sage","Sailor","Salem","Sally","Salty","Sam","Samantha","Sammy","Sampson","Samson","Sandy","Sara","Sarah","Sarge","Sasha","Sassie","Sassy","Savannah","Sawyer","Scarlett","Schotzie","Schultz","Scoobie","Scooby","Scooby-doo","Scooter","Scottie","Scout","Scrappy","Scruffy","Sebastian","Shadow","Shady","Shaggy","Shasta","Sheba","Sheena","Shelby","Shelly","Sherman","Shiloh","Shiner","Shorty","Sienna","Sierra","Silky","Silver","Silvester","Simba","Simon","Simone","Sissy","Skeeter","Skinny","Skip","Skipper","Skippy","Skittles","Sky","Skye","Skyler","Slick","Slinky","Sly","Smarty","Smoke","Smokey","Smudge","Sneakers","Snickers","Snoop","Snoopy","Snowball","Snowflake","Snowy","Snuffles","Snuggles","Solomon","Sonny","Sophia","Sophie","Sox","Spanky","Sparkle","Sparky","Speed","Speedo","Speedy","Spencer","Spike","Spirit","Spookey","Spot","Spotty","Spud","Spunky","Squeeky","Squirt","Stanley","Star","Starr","Stella","Sterling","Stich","Stinky","Stormy","Stuart","Sugar","Summer","Sumo","Sundance","Sunday","Sunny","Sunshine","Susie","Susie Q","Suzy","Sweetie","Sweetie-pie","Sweet-pea","Sydney","Tabby","Tabetha","Taco","Taffy","Tally","Tammy","Tangles","Tango","Tank","Tanner","Tara","Tasha","Taylor","Taz","T-Bird","T-Bone","Teddy","Teddy-Bear","Tequila","Tess","Tessa","Tessie","Tex","Thelma","Thor","Thumper","Thunder","Thyme","Tiffany","Tiger","Tigger","Tiggy","Tiki","Tilly","Timber","Timmy","Tinker","Tinkerbell","Tinky","Tiny","Tippy","Tipr","Titan","Tito","Titus","Tobie","Toby","Toffee","Tom","Tommy","Toni","Tony","Toots","Tootsie","Topaz","Tori","Toto","Tracker","Tramp","Trapper","Travis","Trigger","Trinity","Tripod","Tristan","Trixie","Trooper","Trouble","Troy","Truffles","Tuck","Tucker","Tuesday","Tuffy","Turbo","Turner","Tux","Twiggy","Twinkle","Ty","Tyler","Tyson","Valinto","Vava","Vegas","Velvet","Vinnie","Vinny","Violet","Vito","Volvo","Waddles","Wags","Waldo","Wallace","Wally","Walter","Wayne","Weaver","Webster","Wesley","Westie","Whiskers","Whiskey","Whispy","Whitie","Whiz","Wiggles","Wilber","Willie","Willow","Willy","Wilson","Winnie","Winston","Winter","Wiz","Wizard","Wolfgang","Wolfie","Woody","Woofie","Wrigley","Wrinkles","Wyatt","Xena","Yaka","Yang","Yeller","Yellow","Yin","Yoda","Yogi","Yukon","Zack","Zeke","Zena","Zeus","Ziggy","Zippy","Zoe","Zoey","Zoie","Zorro"
];

var bios = [
    "I like turtles", "I am a pirate", "What's your favorite food?", "Take me to the park", "I'm looking for my soulmate", "want a bff", "Looking for a hiking buddy", "I am well-balanced and stable, but willing to let you knock me off my feet.", "I am someone who will kiss you in the rain.", "What I am is good enough." , "I am old fashioned sometimes. I still believe in romance, in roses, in holding hands.", "I don't smoke, drink or party every weekend. I don't play around or start drama to get attention. Yes, we do still exist!" , "I'm going to make the rest of my life the best of my life. Care to share it with me?", "I am strong, kind, smart, hilarious, sweet, lovable, and amazing. Isn't that what you've been looking for?", "I'm neither especially clever nor especially gifted, except for when it comes to being your perfect other half.", "I won't run away in the storms.", "I want to inspire and be inspired.", "I am here to find love and give love in return.", "I can guarantee you won't find anybody else like me.", "WiFi, food, my bed, snuggles. Perfection.", "I am strong enough to protect you and soft enough to melt your heart.", "If I could rate my personality, I'd say good looking!", "I live my life without stress and worries.", "I am good looking (In certain lighting).", "I am not the one your mother warned you about.", "I am too positive to be doubtful, too optimistic to be fearful, and too determined to be defeated.", "Forget what hurt you in the past. It wasn't me. I'm like the opposite of that person!", "I'm not beautiful like you, but I'm beautiful like me!", "I am just one small person in this big world trying to find real love.", "Once I've found my special someone, my life will be complete.", "Being both strong and soft is a combination I have mastered.", "I'm not here to be an average partner, I'm here to be an awesome partner.", "Don't let idiots ruin your day, date me instead!", "I'm a tidy person, with a few messy habits.", "I've learned to stop rushing things that need time to grow.", "I've learned to stop rushing things that need time to grow.", "I'm loving, and I'll always look forward to seeing you at the end of each day.", "I appreciate the little things.", "I'm willing to work hard to make you happy in life.", "I want to be everything you didn't know you were looking for.", "I don't want a perfect relationship: I want someone to act silly with, who treats me well, and who loves being with me more than anything.", "I want to be the reason you look down at your phone and smile.", "I want someone I can love who will love me back.", "I want someone who will watch movies with me on lazy days.", "I want someone who will keep surprising me.", "I want someone who can make me smile for no reason.", "I want to be the reason your dreams will come true.", "I want someone loving, who can cook, and if you look good in a pair of jeans, that would be a bonus!", "I want to build a lifetime of dreams with someone special.", "I want a lasting relationship.", "I want to fall madly in love.", "I want a happily ever after.", "I want to meet someone who is afraid to lose me.", "I want to build a future with the right person.", "I want to meet someone who will text me good morning and goodnight.", "I want to meet someone who gives me compliments.", "I want to meet someone who makes me laugh.", "I want to meet someone who likes to cuddle.", "I want to meet someone wants to surprise me and hug me from behind.", "I want to meet someone who won't rush things.", "I want someone who I can be completely myself around.", "I want someone I can play Xbox with.", "I want someone who I can kiss in the pouring rain.", "I want someone who enjoys holding hands.", "I want someone who will be my best friend.", "I just want someone to throw cookie dough around in the kitchen with.", "I want someone who will remember the little things.", "I want you—So be brave and want me too!", "I want someone to love me without restriction, trust me without fear, and want me without demand!", "I want to be the best at loving you.", "I am 100% ready to invest in a long term relationship.", "I am looking for my last love.", "I believe happiness is wanting what you get.", "I believe the best time for new beginnings is now.", "I believe in true love.", "I believe in sticking around through the good and the bad times.", "I believe the right person is out there looking for me.", "I could be the person you've been dreaming of.", "Together we could make our dreams come true.", "I believe nothing is more romantic than someone who wants you as much as you want them.", "I believe an honest relationship is more important than a perfect relationship.", "I believe life is short, and I want to waste it wisely.", "I'm not going to say it's going to be easy, but I can promise it will be worth it!", "I believe I am too good a catch to be single.", "I believe I have a lot of love to give.", "I am here because I believe life begins at the end of your comfort zone.", "I believe how you make others feel about themselves says a lot about you.", "I believe something beautiful is on the horizon.", "I believe some people cross your path and change your whole direction.", "I believe good looks fade, but a good heart keeps you beautiful forever.", "Let’s just go out on a first date and talk about something random.", "I’m actually here because my family and friends think it’s weird I keep on showing up to family events, dinners, baby showers and weddings alone. So, do you want to be my plus one?", "Swipe right if you hate cold cereals or if you want to argue with me about it.", "I floss. That’s how responsible I am.", "I don’t want a partner in crime. I commit all my crimes on my own. I would never drag you into that.", "Eh, I’ll do this part when I think of something clever.", "Let’s match, chat and date!", "I always keep a loaded gun on my nightstand in the event of an intruder, so I can shoot myself to avoid meeting new people.", "Even I’d date me.", "Well, here I am. What are your other two wishes?", "Do you believe in love at first sight – or should you swipe right again?", "Last time I was someone’s type, I was donating blood.", "Not here for a long time, just for a good time.", "Swipe right if you want to find love in this hopeless place.", "I like to party. And by party I mean take naps.", "“By far my favorite grandchild.” – My Grandma", "Swipe right and I’ll promise that I’ll fight by any memes possible.", "You want a tough project? Look no further.", "Let’s go for a nice walk and see inside each other’s minds.", "I’m here to catch Pokemon, not feelings.", "I’d tell you a lengthy description about myself but that would take away from the mystery.", "Swipe right and start your free 30 day trial with me today.", "Basically, I want someone I can share my entire life with who will leave me alone most of the time.", "Am I a good person? No. But do I try and better myself everyday? Still no.", "A simple guy with some extraordinary dreams… trying to live my life to the fullest.", "The first bite of a raw carrot makes me hiccup 99% of the time, but I keep on eating it anyway. So, that should tell you enough about my perseverance.", "Some people give off the “don’t screw with me” vibe. Mine is more “you can spill a soup in my lap and I’ll probably end up apologizing to you.”", "If we match, I already told my mom about us.", "It would be a plus if you could fit into my mum’s sweater and fill in the void she left behind.", "Dating me ensures you’ll always be the better-looking one.", "For the love of God, someone please date me, so I can stop bringing my mom to parties as my plus one.", "I’m not into taking things slowly.", "Like my shirt? It’s made of boyfriend material.", " Two reasons to date me: 1. Because you’d be the good looking one 2. Please.", "Adventurer, dreamer, lover, warrior, artist, scholar.", "I’m looking for love. Real love. Ridiculous, inconvenient, consuming, can’t-live-without-each-other love.", "Ask me out, don’t chat me up.", "Badass with a heart of gold.", "Stop staring at me, woman. – Every dog ever.", "A warrior, not a worrier.", "I am the human equivalent of a 1997 Pontiac Sunfire."
];

// Load user profile
var loadUserData = function() {
    // load stored userProfileObj
    var storedProfile = JSON.parse(localStorage.getItem('storedProfile'));

    if (!storedProfile) {
        console.log('no profile found');
    } else {
        console.log('profile found');
        userProfileObj = storedProfile;
    };
    console.log(userProfileObj);
};

loadUserData();

var preferences = function(){
    const storedProfile = localStorage.getItem("storedProfile");
    const parsedObj = JSON.parse(storedProfile);
    low = parseInt(parsedObj.minAge);
    high = parseInt(parsedObj.maxAge);

    if (parsedObj.interest == "cats") {
        interestCats = true;
    } else if (parsedObj.interest == "dogs") {
        interestDogs = true;
    } else if (parsedObj.interest == "both") {
        interestBoth = true;
    };
};

preferences();

// hamburger menu touch events
$('#ml-about').on('touchend', function() {
    location.href = 'about.html';
});

$('#ml-profile').on('touchend', function() {
    location.href = 'my-profile.html';
});

$('#ml-matches').on('touchend', function() {
    location.href = 'matches.html';
});

$('#ml-contact').on('touchend', function() {
    location.href = 'contact-us.html';
});

new Pageable("#container", {
    childSelector: "[data-anchor]", // CSS3 selector string for the pages
    anchors: [], // define the page anchors
    pips: false, // display the pips
    animation: 300, // the duration in ms of the scroll animation
    delay: 0, // the delay in ms before the scroll animation starts
    throttle: 50, // the interval in ms that the resize callback is fired
    orientation: "vertical", // or horizontal
    swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
    freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
    navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
    navNextEl: false, // define an element to use to scroll to the next page (CSS3 selec++tor string or Element reference)
    infinite: false, // enable infinite scrolling (from 0.4.0)
    // slideshow: { // enable slideshow that cycles through your pages automatically (from 0.4.0)
    //     interval: 3000, // time in ms between page change,
    //     delay: 0 // delay in ms after the interval has ended and before changing page
    // },
    // events: {
    //     wheel: true, // enable / disable mousewheel scrolling
    //     mouse: true, // enable / disable mouse drag scrolling
    //     touch: true, // enable / disable touch / swipe scrolling
    //     keydown: true, // enable / disable keyboard navigation
    // },
    // easing: function(currentTime, startPos, endPos, interval) {
    //     // the easing function used for the scroll animation
    //     return -endPos * (currentTime /= interval) * (currentTime - 2) + startPos;
    // },
    onInit: function() {
        // do something when the instance is ready
    },
    onUpdate: function() {
        // do something when the instance updates
    },    
    onBeforeStart: function() {
        // do something before scrolling begins
    },
    onStart: function() {
        // do something when scrolling begins
    },
    onScroll: function() {
        // do something during scroll
    },
    onFinish: function() {
        // do something when scrolling ends
    },
});

/***************/
/* API FETCHES */
/***************/

function dogApi() {
    var dogFetchUrl = "https://dog.ceo/api/breeds/image/random";
    
    return fetch(dogFetchUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // random dog image URL
        // console.log(data.message);
        imgUrl = data.message;
        console.log("dog fetched");
        dogSwipes++;
    });
};

function catApi() {
    var catApiKey = "6239a053-498a-49cb-ac5c-e7a746598576";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", catApiKey);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    return fetch("https://api.thecatapi.com/v1/images/search?format=json", requestOptions)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      imgUrl = data[0].url;
      console.log("cat fetched");
      catSwipes++;
    });
};

/************/
/* CAROUSEL */
/************/

class Carousel {
    constructor(element) {
        this.board = element

        // add first two cards programmatically
        this.push()
        this.push()

        // handle gestures
        this.handle()
    };

    handle() {
        // list all cards
        this.cards = this.board.querySelectorAll('.card');

        // get top card
        this.topCard = this.cards[this.cards.length - 1];

        // get next card
        this.nextCard = this.cards[this.cards.length - 2];

        // if at least one card is present
        if (this.cards.length > 0) {

            // set default top card position and scale
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)';

            // destroy previous Hammer instance, if present
            if (this.hammer) this.hammer.destroy();

            // listen for tap and pan gestures on top card
            this.hammer = new Hammer(this.topCard);
            this.hammer.add(new Hammer.Tap());
            this.hammer.add(new Hammer.Pan({
                position: Hammer.position_ALL,
                threshold: 0
            }));

            // pass events data to custom callbacks
            this.hammer.on('tap', (e) => {
                this.onTap(e);
            });
            this.hammer.on('pan', (e) => {
                this.onPan(e);
            });
        };
    };

    onTap(e) {
        // get finger position on top card
        let propX = (e.center.x - e.target.getBoundingClientRect().left) / e.target.clientWidth;

        // get rotation degrees around Y axis (+/- 15) based on finger position
        let rotateY = 15 * (propX < 0.05 ? -1 : 1);

        // enable transform transition
        this.topCard.style.transition = 'transform 100ms ease-out';

        // apply rotation around Y axis
        this.topCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(' + rotateY + 'deg) scale(1)';

        // wait for transition end
        setTimeout(() => {
            // reset transform properties
            this.topCard.style.transform =
                'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)'
        }, 100);
    };

    onPan(e) {
        if (!this.isPanning) {
            this.isPanning = true;

            // remove transition properties
            this.topCard.style.transition = null;
            if (this.nextCard) this.nextCard.style.transition = null;

            // get top card coordinates in pixels
            let style = window.getComputedStyle(this.topCard);
            let mx = style.transform.match(/^matrix\((.+)\)$/);
            this.startPosX = mx ? parseFloat(mx[1].split(', ')[4]) : 0;
            this.startPosY = mx ? parseFloat(mx[1].split(', ')[5]) : 0;

            // get top card bounds
            let bounds = this.topCard.getBoundingClientRect();

            // get finger position on top card, top (1) or bottom (-1)
            this.isDraggingFrom =
                (e.center.y - bounds.top) > this.topCard.clientHeight / 2 ? -1 : 1;
        };

        // get new coordinates
        let posX = e.deltaX + this.startPosX;
        let posY = e.deltaY + this.startPosY;

        // get ratio between swiped pixels and the axes
        let propX = e.deltaX / this.board.clientWidth;
        let propY = e.deltaY / this.board.clientHeight;

        // get swipe direction, left (-1) or right (1)
        let dirX = e.deltaX < 0 ? -1 : 1;

        // get degrees of rotation, between 0 and +/- 45
        let deg = this.isDraggingFrom * dirX * Math.abs(propX) * 45;

        // get scale ratio, between .95 and 1
        let scale = (95 + (5 * Math.abs(propX))) / 100;

        // move and rotate top card
        this.topCard.style.transform =
            'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg) rotateY(0deg) scale(1)';

        // scale up next card
        if (this.nextCard) this.nextCard.style.transform =
            'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(' + scale + ')';

        if (e.isFinal) {
            this.isPanning = false;
            let successful = false;

            // set back transition properties
            this.topCard.style.transition = 'transform 200ms ease-out';
            if (this.nextCard) this.nextCard.style.transition = 'transform 100ms linear';

            // check threshold and movement direction
            if (propX > 0.25 && e.direction == Hammer.DIRECTION_RIGHT) {

                successful = true;
                // get right border position
                posX = this.board.clientWidth;
                
                love = true;
                swipeRight++;

            } else if (propX < -0.25 && e.direction == Hammer.DIRECTION_LEFT) {

                successful = true;
                // get left border position
                posX = -(this.board.clientWidth + this.topCard.clientWidth);

                love = false;

            } else if (propY < -0.25 && e.direction == Hammer.DIRECTION_UP) {

                successful = true;
                // get top border position
                posY = -(this.board.clientHeight + this.topCard.clientHeight);
                
                love = false;
            };

            if (successful) {
                // if you have swiped right, and they swiped right,
                // send a match alert before the card is removed
                if (love == true && loveMatch == true) {
                    match++;
                    loveAlert(this.topCard);
                } else {
                    nomatch++;
                };

                // throw card in the chosen direction
                this.topCard.style.transform =
                    'translateX(' + posX + 'px) translateY(' + posY + 'px) rotate(' + deg + 'deg)';

                // wait transition end
                setTimeout(() => {
                    // remove swiped card
                    this.board.removeChild(this.topCard);

                    // add new card
                    this.push();

                    // handle gestures on new top card
                    this.handle();
                }, 0);

                saveAnalytics();
            } else {

                // reset cards position and size
                this.topCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(1)';
                if (this.nextCard) this.nextCard.style.transform =
                    'translateX(-50%) translateY(-50%) rotate(0deg) rotateY(0deg) scale(0.95)';
            };
        };
    };

    push() {
        // Make frame for background photo to append
        let cardFrame = document.createElement('div');
        cardFrame.classList.add('card-frame');

        // entirety of card
        let card = document.createElement('div');
        let nameAge = document.createElement('div');
        card.classList.add('card');

        // text info
        nameAge.classList.add('name-age');
        cardFrame.appendChild(nameAge);

        //append frame to card
        card.appendChild(cardFrame);

        // get random name
        let name = document.createElement('p');
        var randomName = names[Math.floor(Math.random() * names.length)];
        name.innerHTML = randomName;
        name.classList.add('name');
        nameAge.appendChild(name);

        // get random age
        let age = document.createElement('span');
        var randomAge = Math.floor(Math.random() * (high - low + 1)) + low;
        age.innerHTML = randomAge;
        age.classList.add('age');
        nameAge.appendChild(age);

        // get random bio
        let bio = document.createElement('p');
        var randombio = bios[Math.floor(Math.random() * bios.length)];
        bio.innerHTML = randombio;
        bio.classList.add('bio');
        nameAge.appendChild(bio);

        //cat only scenario
        if (interestCats == true) {
            console.log("meow only!");
            // call Api for background image
            catApi().then(()=> {
                cardFrame.style.backgroundImage =
                "url('" + imgUrl + "')";
            });

            // assign true or false value on their swipe right
            if( Math.round(Math.random()) == 0 ) {
                loveMatch = true;
                catMatch++;
            } else {
                loveMatch = false;
                catNoMatch++;
            };

            // dog only senario
        } else if (interestDogs == true) {
            console.log("Woof only!");
            // call Api for background image
            dogApi().then(() => {
                cardFrame.style.backgroundImage =
                "url('" + imgUrl + "')";
            });

            // assign true or false value on their swipe right
            if( Math.round(Math.random()) == 0 ) {
                loveMatch = true;
                dogMatch++;
            } else {
                loveMatch = false;
                dogNoMatch++;
            };

            // both scenario
        } else if (interestBoth == true) {
            console.log("meows and woofs go crazy");
            if( Math.round(Math.random()) == 0 ) {
                console.log("Woof");
                // call Api for background image
                dogApi().then(() => {
                    cardFrame.style.backgroundImage =
                    "url('" + imgUrl + "')";
                });
                
                // assign true or false value on their swipe right
                if( Math.round(Math.random()) == 0 ) {
                    loveMatch = true;
                    dogMatch++;
                } else {
                    loveMatch = false;
                    dogNoMatch++;
                };

            } else {
                console.log("meow");
                // call Api for background image
                catApi().then(()=> {
                    cardFrame.style.backgroundImage =
                    "url('" + imgUrl + "')";
                });
    
                // assign true or false value on their swipe right
                if( Math.round(Math.random()) == 0 ) {
                    loveMatch = true;
                    catMatch++;
                } else {
                    loveMatch = false;
                    catNoMatch++;
                }; 
            };
        };

        this.board.insertBefore(card, this.board.firstChild)
    };
};

// Match Profile Object Constructor
function MatchProfile (name, age, bio, matchImg) {
    this.name = name;
    this.age = age;
    this.bio = bio;
    this.matchImg = matchImg;
};

function loveAlert (topCard) {
    // get match data
    var name = $(topCard).find('.name').text();
    var age = $(topCard).find('.age').text();
    var bio = $(topCard).find('.bio').text();
    var matchImg = $(topCard).find('.card-frame').css('background-image').split("\"")[1];
    console.log(matchImg);

    //animation container div
    var animation = document.createElement('div');
    animation.classList.add("animation");

    //Heart div
    var heart = document.createElement('div');
    heart.classList.add("heart-shape");
    
    // Alert div
    var matchAlert = document.createElement('div');
    matchAlert.classList.add("alert");
    matchAlert.style.backgroundImage =
    "url('" + matchImg + "')";

    // Alert text
    var matchText = document.createElement('p');
    matchText.textContent = "It's a Match!";
    matchText.classList.add("match-text");

    matchAlert.appendChild(matchText);
    heart.appendChild(matchAlert);
    animation.appendChild(heart);

    // construct matchProfileObj
    matchProfileObj = new MatchProfile (
        name,
        age,
        bio,
        matchImg
    );

    // add matchProfileObj to matches array in userProfileObj
    userProfileObj.matchData.matches.push(matchProfileObj);
    
    // save to localStorage
    localStorage.setItem('storedProfile', JSON.stringify(userProfileObj));
    console.log(userProfileObj);

    avgAge.push(age);
    localStorage.setItem("ages", JSON.stringify(avgAge));

    var board = document.getElementById("board");
    board.append(animation);
    setTimeout(function(){
        $('.animation').remove();
   }, 1000);
};

function saveAnalytics() {
    totalSwipes = catSwipes + dogSwipes;
    totalMatch = catMatch + dogMatch;
    matchRatio = totalMatch/swipeRight;

    var analyticsObj = {
        totalSwipes,
        totalMatch,
        matchRatio
    };

    localStorage.setItem('analytics', JSON.stringify(analyticsObj));
    console.log(analyticsObj);   
};

let board = document.querySelector('#board');
let carousel = new Carousel(board);