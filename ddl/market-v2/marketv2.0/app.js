// select element: document.getElementById()/ document.querySelector()
// write in HTML : element.innerHTML

const arrProduct = [
  { id: 1579581080923,category: 'Fast' , name: "Noodle", price: 3500, stock : 9},
  { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
  { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
  { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];

const arrCategory = ["All", "Fast", "Electronic", "Cloth", "Fruit"];

function funShow(){
  var listProduct = arrProduct.map(val=>{
    return (`
      <tr>
        <td>${val.id}</td>
        <td>${val.category}</td>
        <td>${val.name}</td>
        <td>${val.price}</td>
        <td>${val.stock}</td>
      </tr>
    `)
  })

  var listCategory = arrCategory.map(el=>{
    return `<option value=${el}>${el}</option>`
  })

  document.getElementById("render").innerHTML = listProduct.join("")
  document.getElementById("categoryFilter").innerHTML = listCategory.join("")
  document.getElementById("categoryInput").innerHTML = listCategory.join("")
}

function funShowFilter(filterResult){
  let list = filterResult.map(val=>{
    return (`
      <tr>
        <td>${val.id}</td>
        <td>${val.category}</td>
        <td>${val.name}</td>
        <td>${val.price}</td>
        <td>${val.stock}</td>
      </tr>
    `)
  })
  console.log(list)
  document.getElementById("render").innerHTML = list.join("")
}

function funInputData(){
  let name = document.getElementById("nameInput").value
  let price = document.getElementById("priceInput").value
  let category = document.getElementById("categoryInput").value
  let stock = document.getElementById("stockInput").value

  arrProduct.push({
    id:new Date().getTime(),
    name,
    price,
    category,
    stock
  })

  document.getElementById("nameInput").value =''
  document.getElementById("priceInput").value = ''
  document.getElementById("categoryInput").value = ''
  document.getElementById("stockInput").value = ''

  funShow()
}

let keyword = document.getElementById('keyword')
keyword.addEventListener('keyup',funFilterName)

function funFilterName(e){
  let keys = e.target.value
  let filterLow = keys.toLowerCase()

  let filterResult = arrProduct.filter(el=>{
    let nameLow = el.name.toLowerCase()
    return nameLow.includes(filterLow)
  })

  funShowFilter(filterResult)
}

function funFilterPrice(){
  let min = document.getElementById('min').value;
  let max = document.getElementById('max').value;
  let filterResult

  if(!(min == "" || max == "")){
    filterResult = arrProduct.filter(val=>{
      return val.price >=min && val.price <= max
    })
  }else{
    filterResult = arrProduct
  }

  funShowFilter(filterResult)
}

function funFilterCategory(){
  let selectedCategory = document.getElementById("categoryFilter").value;
  let filterResult

  if(selectedCategory == "All"){
    filterResult = arrProduct
  }else{
    filterResult = arrProduct.filter(el=>{
      return el.category == selectedCategory
    })
  }

  funShowFilter(filterResult)
}

funShow()