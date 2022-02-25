
let apiBtn = document.querySelector('#api_button')




apiBtn.addEventListener('click', () => {
    var user_search = $('#search').val()
    var year_search = $('#year-search').val()
    var round_search = $('#round-search').val()
    fetch(`https://ergast.com/api/f1/${year_search}/${round_search}/driverStandings.json`,)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.MRData.StandingsTable.StandingsLists[0])
            var html =``
            for (x = 0; x < data.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; x++){
                html += `<tr>`;
                html += `<td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].position}</td>`
                html += `<td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Driver.familyName}</td>`
                html += `<td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Driver.nationality}</td>`
                html += `<td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].Constructors[0].name}</td>`
                html += `<td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[x].points}</td>`
                html += `</tr>`
            }
            $('#stats').html(html)
            
            

})
})
