
const getButton = document.getElementById("generateLink");
const getRawLink = document.getElementById("getRawLink");
const shownewlink = document.getElementById("showLink");
const postfix = "?subcription=1";

var generateLink = () => {
    let oldlink = getRawLink.value;
    if (oldlink == "") {
        alert("Please Paste or Type Your Channel Link.");
        shownewlink.value = "";
    } else if (oldlink.length < 56) {
        alert("Broken Link ! Please Check again.");
        shownewlink.value = "";
        console.log(oldlink.length)
        console.log("Link lenght should be Larger than 55 Characters but your link is Just " + oldlink.length + ".");
        // alert(oldlink);
    } else {
        let newlink = oldlink + postfix;
        shownewlink.value = newlink;
        console.log(oldlink.length)
    }

}
var copybtn = document.getElementById("copyLink");
var copylink = () => {
    if (shownewlink.value == "") {
        alert("Please First Generate link and then click on Copy.")
    } else {
        alert("Link Copied! Thanks For using.")
    }
}
copybtn.addEventListener('click', copylink);


getButton.addEventListener('click', generateLink);