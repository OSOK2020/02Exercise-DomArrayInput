const data =  [
{ namn: "Bat von Man", utbildning: "Frontend", stad: "Malmö", år: 1 },
{ namn: "Cat von Woman", utbildning: "Backend", stad: "Stockholm", år: 2 },
{ namn: "Spider McWeb", utbildning: "Frontend", stad: "Göteborg", år: 3 },
{ namn: "Iron Dev", utbildning: "Frontend", stad: "Malmö", år: 1 },
{ namn: "Hulk Code", utbildning: "Fullstack", stad: "Lund", år: 2 }, 
{ namn: "Thor Script", utbildning: "Frontend", stad: "Uppsala", år: 1 },
{ namn: "Captain Byte", utbildning: "Backend", stad: "Malmö", år: 3 },
{ namn: "Black Code", utbildning: "Frontend", stad: "Helsingborg", år: 1 },
{ namn: "Scarlet Compiler", utbildning: "Fullstack", stad: "Stockholm", år: 2 },
{ namn: "Vision Array", utbildning: "Frontend", stad: "Malmö", år: 1 }
]

const render = document.querySelector("#render");

const getData = document.querySelector("#getData");

let teacherInput = document.querySelector("input[type=checkbox][name=teacher]")
let selectCity = document.querySelectorAll("input[type=checkbox][name=city]");
let selectEducation = document.querySelectorAll("input[type=radio][name=education]");

const yearInput = document.getElementById("yearInput");

yearInput.addEventListener("change", () => {
    console.log(yearInput.value)
});

console.log(selectCity)

console.log(selectEducation)

function renderData (array) {
    render.innerHTML = "";
    teacherInput =  document.querySelector("input[type=checkbox][name=teacher]:checked")
    if (teacherInput) {

        array.forEach(element => {
            const dataItem = document.createElement("li");
            dataItem.classList.add("data-Item");
            dataItem.innerHTML = `
            Namn: ${element.namn} <br>
            Utbildning: ${element.utbildning} <br>
            Stad: ${element.stad} <br>
            År: ${element.år}
            `
            render.append(dataItem);
        });
    } else {
        alert("Please confirm that you're a teacher!")
    }
}

//Filterfunktionen på årskurserna som returnerar filteredYears || all data
function filterYears () {
    let chosenYears = [];
    let yearValue = parseFloat(yearInput.value);
    console.log("" + yearValue);

    if (!isNaN(yearValue)) {
        chosenYears.push(yearValue)
        console.log(chosenYears)
        const filteredYears = data.filter(item => chosenYears.includes(item.år));
        console.log(filteredYears)
        return filteredYears;
    } else {
        return data
    }
}

function filterData () {
    //spara selected data i en array
    let chosenData = []
    
    selectCity = document.querySelectorAll("input[type=checkbox][name=city]:checked");
    selectEducation = document.querySelectorAll("input[type=radio][name=education]:checked")
    
    console.log(selectCity, selectEducation)

    if (selectCity.length !== 0 && selectEducation.length !== 0) {
        console.log(selectCity, selectEducation)

        selectCity.forEach(pickedItem => {
                chosenData.push(pickedItem.id);
                console.log(pickedItem.id);
        })
        selectEducation.forEach(pickedItem => {
                chosenData.push(pickedItem.id);
                console.log(pickedItem.id);
        })
        console.log(chosenData)
        if (chosenData.includes("allCities") && chosenData.includes("all")) {
            //rendera ut all data
            renderData(filterYears())
        } else if (chosenData.includes("all")) {
            //filtrera på datat om det finns i chosenData baserat på städer
            
            const dataFilteredEducations = filterYears().filter(itemData => chosenData.includes(itemData.stad))
            console.log(dataFilteredEducations)
            renderData(dataFilteredEducations);
        } else if (chosenData.includes("allCities")) {
            //filtrera på datat om det finns i chosenData baserat på utbildningar
            const dataFilteredCities = filterYears().filter(itemData => chosenData.includes(itemData.utbildning))
            renderData(dataFilteredCities);
        } else {
            //filtrera på datat om det finns i chosenData
            const dataFilteredBoth = filterYears().filter(itemData => chosenData.includes(itemData.stad) && chosenData.includes(itemData.utbildning))
            renderData(dataFilteredBoth);
        }

    } else if (selectCity.length !== 0) {
        console.log(selectCity)

        selectCity.forEach(pickedItem => {
            if (pickedItem.id === "allCities") {
                renderData(filterYears())
            } else {
                chosenData.push(pickedItem.id);
                console.log(pickedItem.id);

                //filtrera på datat om det finns i chosenData
                const dataFiltered = filterYears().filter(itemData => chosenData.includes(itemData.stad))
                renderData(dataFiltered);
            }
        })
    } else if (selectEducation.length !== 0) {
        console.log(selectEducation)

        selectEducation.forEach(pickedItem => {
            if (pickedItem.id === "all") {
                renderData(filterYears())
            } else {
                chosenData.push(pickedItem.id);
                console.log(pickedItem.id);

                //filtrera på datat om det finns i chosenData
                const dataFiltered = filterYears().filter(itemData => chosenData.includes(itemData.utbildning))
                renderData(dataFiltered);
            }
        })
    
    } else {
        renderData(filterYears())
    }
}

getData.addEventListener("click", () => {
    filterData();
})

