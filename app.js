
const feedDisplay_ny = document.querySelector('#feed_ny')
const tableRowDisplay = document.querySelector('#mytablerow')

fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then(data => {
        i = 0;
        
       let tablerow = `<div class="overflow-x-auto relative mt-10">
       <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-lg">
           
           <tbody>
               <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                   <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       The Guardian
                   </th>
                   <td class="py-4 px-6">
                       Link
                   </td>
                </tr>`
        data.every(article => {
            if (i == 5) {
                return false;
            }
            const articleItem = `<div><h3>` + article.title + `</h3><p>` + article.url + `</p></div>`
                       
            i++;
                   
            tablerow = tablerow.concat(`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th class="py-4 px-6">` + article.url + `</th>
            <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button onclick="window.location.href='`+ article.url + `'"; type="button" class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Zum Artikel</button>
            </td>`)
            console.log("im every)")
            return true;
        })
        tablerow = tablerow.concat(`</tbody></table></div>`)
        tableRowDisplay.insertAdjacentHTML("beforeend", tablerow)
    })
    .catch(err => console.log(err))



    fetch('http://localhost:8000/nytimes')
    .then(response => {return response.json()})
    .then(data => {
        i = 0;
        
       let tablerow = `<div class="overflow-x-auto relative mt-10">
       <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-lg">
           
           <tbody>
               <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                   <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       New York Times
                   </th>
                   <td class="py-4 px-6">
                       Link
                   </td>
                   
                </tr>`
        data.every(article => {
            if (i == 5) {
                return false;
            }
            const articleItem = `<div><h3>` + article.title + `</h3><p>` + article.url + `</p></div>`
                       
            i++;
           
            tablerow = tablerow.concat(`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th class="py-4 px-6">` + article.url + `</th>
            <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button onclick="window.location.href='`+ article.url + `'"; type="button" class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Zum Artikel</button>
            </td>`)
            return true;
        })
        tablerow = tablerow.concat(`</tbody></table></div>`)
        feedDisplay_ny.insertAdjacentHTML("beforeend", tablerow)
    })
    .catch(err => console.log(err))

