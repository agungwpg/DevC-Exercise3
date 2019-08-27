const table = document.getElementById('table').getElementsByTagName('tbody')[0]
const inputFilter = document.getElementById('input-filter')
const labelStatus = document.getElementById('status')

labelStatus.innerHTML = 'Fetching...'

async function getApiData(){
    let response = await fetch('https://swapi.co/api/planets/')
    let data = await response.json()
    return data
}

function setTableData(results){
    table.innerHTML = ''
    results.forEach( ({name,created,diameter,climate,population}) => {
        let newRow = table.insertRow(-1)
        newRow.insertCell(-1).innerHTML = name
        newRow.insertCell(-1).innerHTML = created
        newRow.insertCell(-1).innerHTML = diameter
        newRow.insertCell(-1).innerHTML = climate
        newRow.insertCell(-1).innerHTML = population
    })
}

(async function() {
    let { results } = await getApiData();
    if(results){
        labelStatus.innerHTML = 'Done ...'
        setTableData(results)

        inputFilter.addEventListener('change',function(event) {
            let { value } = event.target
            let filtered = results.filter(({name,created,diameter,climate,population}) => {
                return (
                    name.toUpperCase().indexOf(value.toUpperCase()) >= 0 ||
                    created.toUpperCase().indexOf(value.toUpperCase()) >= 0 ||
                    diameter.toUpperCase().indexOf(value.toUpperCase()) >= 0 ||
                    climate.toUpperCase().indexOf(value.toUpperCase()) >= 0 ||
                    population.toUpperCase().indexOf(value.toUpperCase()) >= 0 
                )
            })
            setTableData(filtered)
        })
    }else{
        labelStatus.innerHTML = 'Failed to fetch ... please refresh the page'
    }
})()

