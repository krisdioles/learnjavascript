const arrProduct = [
    { id: 1579581080923, category: 'Fast', name: "Noodle", price: 3500, stock: 9 },
    { id: 1579581081130, category: 'Electronic', name: "Headphone", price: 4300000, stock: 8 },
    { id: 1579581081342, category: 'Cloth', name: "Hoodie", price: 300000, stock: 7 },
    { id: 1579581081577, category: 'Fruit', name: "Apple", price: 10000, stock: 8 }
];

const arrCategory = ["All", "Fast", "Electronic", "Cloth", "Fruit"];

function insertData() {
    // insert category array to list category and then insert to html
    var listCategory = arrCategory.map(function(element) {
        return `<option value=${element}>${element}</option>`
    })
    
    document.getElementById('filterCategory').innerHTML = listCategory
    document.getElementById('inputCategory').innerHTML = listCategory
    // end of insert category
    
    var listProduct = arrProduct.map(function(element) {
        return `
        <tr>
            <td>${element.id}</td>
            <td>${element.category}</td>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td>${element.stock}</td>
            <td>
                <input type="button" value="Delete"/>
            </td>
            <td>
                <input type="button" value="Edit"/>
            </td>
        </tr>
        `
    })
    document.getElementById('tabelDataBody').innerHTML = listProduct.join("")
}

function filterReset() {
    document.getElementById('filterNama').value = ''
    document.getElementById('filterMin').value = ''
    document.getElementById('filterMax').value = ''
    document.getElementById('filterCategory').value = 'All'
}

function inputData() {
    let name = document.getElementById('inputNama').value
    let price = document.getElementById('inputHarga').value
    let category = document.getElementById('inputCategory').value
    let stock = document.getElementById('inputStock').value
    console.log(name,price,category,stock)

    arrProduct.push({
        id:new Date().getTime(),
        name,
        price,
        category,
        stock
    })
    console.log(arrProduct)

    document.getElementById("inputNama").value =''
    document.getElementById("inputHarga").value = ''
    document.getElementById("inputCategory").value = ''
    document.getElementById("inputStock").value = ''

    insertData()
}

insertData()

function funcFilterNama(e) {
    let keyword = e.target.value
    console.log(keyword)

    let keywordLower = keyword.toLowerCase()

    let filteredProduct = arrProduct.map(function(element) {
        let nameLowered = element.name.toLowerCase()
        return nameLowered.includes(keywordLower)
    })
    console.log(filteredProduct)
}