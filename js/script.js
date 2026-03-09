const personagemName = document.querySelector('.personagem_name')
const personagemNumber = document.querySelector('.personagem_number')
const personagemImage = document.querySelector('.personagem_image')
const searchInput = document.querySelector('.search_input')

const fetchNaruto = async (naruto) => {
    const APIresponse = await fetch(`https://dattebayo-api.onrender.com/characters?name=${naruto}`)

    if(APIresponse.status === 200){
        const data = await APIresponse.json()
       console.log(data)
        return data
    }

}

const renderNaruto = async (naruto) => {
    const data = await fetchNaruto(naruto)
    if(data){
        personagemName.innerHTML = data['characters']['0']['name']
        personagemNumber.innerHTML = data['characters']['0']['id']
        personagemImage.src = data['characters']['0']['images'][0]
        searchInput.value = ""
    }else{
        personagemName.innerHTML = "Nao encontrado"
        personagemNumber.innerHTML = ""
        personagemImage.src = ""
    }

}
// fetchNaruto(1)
renderNaruto('Naruto Uzumaki')

