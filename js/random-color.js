//  #random-shadow id for shadow

function randomShadow() {

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    //let bordersize = Math.floor(Math.random() * 4);

 //   console.log(`RGB = ${red},${green},${blue}`)

    // sub_menu
    const getBox = document.getElementById("random-shadow");
    getBox.style.boxShadow = `0px 0px 25px 0px rgb(${red},${green},${blue})`;
    const page_container = document.getElementById("page_container").style.border = `4px solid rgb(${red},${green},${blue}`;
   // const sub_menu = document.getElementsByClassName("sub-menu").style.border = `2px solid rgb(${red},${green},${blue}`;

    
}

setInterval(randomShadow, 1000)






















