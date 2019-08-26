let data
const table = document.getElementById('table')
const response = fetch('https://swapi.co/api/planets/')
.then(response => {
    return response.json()
})
.then( ({ results }) => {
    data = results
    data.forEach(({name,created,diameter,climate,population}) => {
        let newRow = document.createElement('tr')
        var tdName = newRow.insertCell(0)
        var tdCreated = newRow.insertCell(1)
        var tdDiameter = newRow.insertCell(2)
        var tdClimate = newRow.insertCell(3)
        var tdPopulation = newRow.insertCell(4)
        tdName.innerHTML = name
        tdCreated.innerHTML = created
        tdDiameter.innerHTML = diameter
        tdClimate.innerHTML = climate
        tdPopulation.innerHTML = population
        table.appendChild(newRow)
    });
})
const filter = document.getElementById('input-filter')
filter.addEventListener('change',function(e){
    console.log(e.target.value)
})