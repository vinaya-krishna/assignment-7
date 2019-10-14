//STEP 1
var favoriteMovies = ["Joker", "Shutter Island", "Unstopabble", "Shwashank Redemption", "Iron Man"];
window.console.log(favoriteMovies[1]);

//STEP 2

var movies = new Array(5);
movies[0] = "Joker";
movies[1] = "Shutter Island";
movies[2] = "Unstopabble";
movies[3] = "Shwashank Redemption";
movies[4] = "Iron Man";
window.console.log(movies[0]);

//STEP 3

var movies = new Array(5);
movies[0] = "Joker";
movies[1] = "Shutter Island";
movies[2] = "Unstopabble";
movies[3] = "Shwashank Redemption";
movies[4] = "Iron Man";
window.console.log(movies[0]);

movies.splice(2, 0, "Race");
window.console.log(movies.length);

//STEP 4

var movies = [];
movies[0] = "Joker";
movies[1] = "Shutter Island";
movies[2] = "Unstopabble";
movies[3] = "Shwashank Redemption";
movies[4] = "Iron Man";

delete movies[0];
window.console.log(movies);

//STEP 5

var movies = [];
movies[0] = "Joker";
movies[1] = "Shutter Island";
movies[2] = "Unstopabble";
movies[3] = "Shwashank Redemption";
movies[4] = "Iron Man";
movies[5] = "Narasimham";
movies[6] = "Nagarahavu";

for(var i = 0; i < movies.length; i++){
    window.console.log(movies[i]);
}

//STEP 6

var movies = [];
movies[0] = "Joker";
movies[1] = "Shutter Island";
movies[2] = "Unstopabble";
movies[3] = "Shwashank Redemption";
movies[4] = "Iron Man";
movies[5] = "Narasimham";
movies[6] = "Nagarahavu";

for(index in movies){
    window.console.log(movies[index]);
}
//STEP 7

var movies = [];
movies[0] = "Joker";
movies[1] = "Shutter Island";
movies[2] = "Unstopabble";
movies[3] = "Shwashank Redemption";
movies[4] = "Iron Man";
movies[5] = "Narasimham";
movies[6] = "Nagarahavu";

movies.sort();

for(index in movies){
    window.console.log(movies[index]);
}

//STEP 8

var movies = [];
movies[0] = "Joker";
movies[1] = "Shutter Island";
movies[2] = "Unstopabble";
movies[3] = "Shwashank Redemption";
movies[4] = "Iron Man";
movies[5] = "Narasimham";
movies[6] = "Nagarahavu";

var leastFavMovies = [];
leastFavMovies[0] = "Alone in the Dark";
leastFavMovies[1] = "Aag";
leastFavMovies[2] = "Meet the Spartans";

var str = "";
str += ("Movies I like:" + "\n\n");
for(var i = 0; i < movies.length; i++){
    str += (movies[i] + "\n");
}

str += ("\n\n");

str += ("Movies I regret watching:" + "\n\n");
for(var i = 0; i < leastFavMovies.length; i++){
    str += (leastFavMovies[i] + "\n");
}


window.console.log(str);

//STEP 9

var movies = [];
movies[0] = "Joker";
movies[1] = "Shutter Island";
movies[2] = "Unstopabble";
movies[3] = "Shwashank Redemption";
movies[4] = "Iron Man";
movies[5] = "Narasimham";
movies[6] = "Nagarahavu";

var leastFavMovies = [];
leastFavMovies[0] = "Alone in the Dark";
leastFavMovies[1] = "Aag";
leastFavMovies[2] = "Meet the Spartans";

var allMovies = movies.concat(leastFavMovies);
(allMovies.sort()).reverse();
window.console.log(allMovies);


//STEP 10

var movies = [];
movies[0] = "Joker";
movies[1] = "Shutter Island";
movies[2] = "Unstopabble";
movies[3] = "Shwashank Redemption";
movies[4] = "Iron Man";
movies[5] = "Narasimham";
movies[6] = "Nagarahavu";

var leastFavMovies = [];
leastFavMovies[0] = "Alone in the Dark";
leastFavMovies[1] = "Aag";
leastFavMovies[2] = "Meet the Spartans";

var allMovies = movies.concat(leastFavMovies);
(allMovies.sort()).reverse();
window.console.log(allMovies.pop());

