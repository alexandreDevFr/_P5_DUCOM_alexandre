main()

async function main(){
  const produits = await getProduits()
  console.log(produits)
  for (produit of produits) {
    displayProduit(produit)
  }
}

function getProduits(){
  return fetch ("http://localhost:3000/api/products")
  .then(function(httpBodyResponse){
    return httpBodyResponse.json()
  })
  .then(function(produits){
    return produits
  })
  .catch(function(error){
    alert(error)
  })
}

function displayProduit(produit){
  let img = document.createElement("img")
  let a = document.createElement("a")
  let h3 = document.createElement("h3")
  let p = document.createElement("p")
  let article = document.createElement("article")

  img.src = produit.imageUrl
  img.alt = produit.altTxt
  h3.className = "productName"
  h3.textContent = produit.name
  p.className = "productDescription"
  p.textContent = produit.description
  a.href = "./product.html?id=" + produit._id


article.appendChild(img)
article.appendChild(h3)
article.appendChild(p)

a.appendChild(article)

document.querySelector("#items").appendChild(a)


}
