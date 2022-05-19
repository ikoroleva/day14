const data = [["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg", "London"], ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"], ["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg", "New York"], ["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg", "Nova Scotia"], ["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg", "Tokio"], ["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg", "Venice"]]

console.log(data[0][0]);

const empty_div = document.querySelector('.gallery');

data.forEach((item, index) => {

    empty_div.innerHTML +=

        '<div class="image">' +
        '<img src="' + data[index][0] + '" alt="' + data[index][1] + '">' +
        '<div class="image__description">' + data[index][1] + '</div>' +
        '</div>';

})



// data.forEach((item, index) => {

//     const newDiv = document.createElement("div");
//     newDiv.setAttribute("class", "image");


//     const newImg = document.createElement("img");
//     newImg.setAttribute("src", data[index][0]);
//     newImg.setAttribute("alt", data[index][1]);



//     const newDescription = document.createElement("div");
//     newDescription.setAttribute("class", "image__description")
//     newDescription.innerHTML = data[index][1];

//     newDiv.append(newImg);
//     newDiv.append(newDescription);

//     empty_div.append(newDiv);

// })