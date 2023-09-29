let show_container = document.getElementById("show-container")
let input_show = document.getElementById("input-show")
let submit_button = document.getElementById("submit-data")
const url = "https://api.tvmaze.com/search/shows?q="

submit_button.addEventListener("click", function(e){
    e.preventDefault()
    show_container.innerHTML = ""
    getTVshow()
})

async function getTVshow() {
    let dataPromise = await fetch(url+input_show.value)
    let dataJSON = await dataPromise.json()
    /* console.log(dataJSON) */

    dataJSON.forEach((data) => {
        let show_data_element = document.createElement("div")
        show_data_element.className = "show-data"
        let show_img = document.createElement("img")
        if (data.show.image != null) {
            show_img.src = data.show.image.medium
            /* console.log(data) */
        }
        let show_info = document.createElement("div")
        show_info.className = "show-info"
        let title = document.createElement("h1")
        title.innerHTML = data.show.name
        let summary = document.createElement("p")
        summary.innerHTML = data.show.summary
        show_info.appendChild(title)
        show_info.appendChild(summary)
        show_data_element.appendChild(show_img)
        show_data_element.appendChild(show_info)
        show_container.appendChild(show_data_element)
    })
}