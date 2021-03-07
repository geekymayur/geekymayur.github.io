var content = document.getElementById("content");
var author = document.getElementById("author");
var getQuotes = async () => {
    try {
        var url = `https://api.quotable.io/random?minLength=100&maxLength=140`;
        var response = await fetch(`${url}`);
        data = await response.json();
        let shareContent, shareAuthor;
        content.innerText = data.content;
        author.innerText = data.author;

    } catch (error) {
    console.log("Error" + error);
}
}
getQuotes();
document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {

        case 39:
            getQuotes();
            // alert('right');
            break;
        default:
            // getQuotes();
            // alert('down');
            break;
    }
});

