const personagemName = document.querySelector('.personagem_name')
const personagemNumber = document.querySelector('.personagem_number')
const personagemImage = document.querySelector('.personagem_image')
const searchInput = document.querySelector('.search_input')



const fetchNaruto = async (naruto) => {
    // const APIresponse = await fetch(`https://dattebayo-api.onrender.com/characters?name=${naruto}`)

    let url = ""

    if(!isNaN(naruto)){
        url = `https://dattebayo-api.onrender.com/characters/${naruto}`
    }else{
        url = `https://dattebayo-api.onrender.com/characters?name=${naruto}`
    }
    const APIresponse = await fetch(url)

    if(APIresponse.status === 200){
        const data = await APIresponse.json()
       console.log(data)
        return data
    }

}

const renderNaruto = async (naruto) => {
    const data = await fetchNaruto(naruto)
    if(data){
        personagemName.innerHTML = 'Loading...'
        personagemNumber.innerHTML = '' 
        // personagemImage.style.display = "none"
        
        if(data.characters){
            //busca pelo nome
            personagemName.innerHTML = data['characters'][0]['name']
            personagemNumber.innerHTML = data['characters'][0]['id']
            personagemImage.src = data['characters'][0]['images'][0]
            searchInput.value = ""
        }else{
            //busca peo id
            personagemImage.src = data['images'][0]
            personagemName.innerHTML = data.id
            personagemNumber.innerHTML = data.name
            searchInput.value = ""
        }
        
    }else{
        personagemName.innerHTML = "Nao encontrado"
        personagemNumber.innerHTML = ""
        personagemImage.src = "none"
    }

}

addEventListener('submit', (evente)=>{
    evente.preventDefault()
    renderNaruto(searchInput.value)
})