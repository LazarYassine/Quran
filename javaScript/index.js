function playAyaMp3() {
    document.getElementById('myAudio').src = "mp3/aya.mp3"
    document.getElementById("myAudio").play()
}


var AllSurah = null

function getSurahs(){

    var api ="https://mp3quran.net/api/v3/suwar"
    let placeholder = document.querySelector("#surahCard")
    let card = ""
    fetch(api)
    .then( (Response) => Response.json() )
    .then( (data) => {
        AllSurah = data
        console.log(AllSurah)
        console.log()
        for( let i=0; i <= AllSurah.suwar.length; i++  ) {
               console.log(AllSurah.suwar[i].id)
            
            card += `
            <div onClick="showTitle(${AllSurah.suwar[i].id})"  class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div  class="border-2 border-gray-800 px-4 py-6 rounded-lg flex">
                <div class="flex-1 snap-center"  >
                <!--<svg  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>-->
                <img src="images/quran.png" width="80px" />
                </div>
                <div class="flex-1" >
                <h2  class="title-font font-medium text-2xl text-white">
                ${ AllSurah.suwar[i].makkia == 1 ? 'makkia' : 'maddnia' }
                </h2>
                <p id="title" class="leading-relaxed">${AllSurah.suwar[i].name}</p>
              </div>
              </div>
              </div>
            `

            placeholder.innerHTML = card

        }
       

    } )
}

getSurahs()


function showTitle(id) {
    var src = ''
    /*console.log(`https://server10.mp3quran.net//jleel//00${i}.mp3`)*/
    if( parseInt(id.toString()) >= 1 && parseInt(id.toString()) <=9 ) {
        console.log(`https://server10.mp3quran.net//jleel//00${id}.mp3`) 
        src = `https://server10.mp3quran.net//jleel//00${id}.mp3`
    }
    else if ( parseInt(id.toString()) > 9 && parseInt(id.toString()) <= 99 ) {
        console.log(`https://server10.mp3quran.net//jleel//0${id}.mp3`)
        src = `https://server10.mp3quran.net//jleel//0${id}.mp3`
    }
    else if ( parseInt(id.toString()) > 99 ) {
        console.log(`https://server10.mp3quran.net//jleel//${id}.mp3`)
        src = `https://server10.mp3quran.net//jleel//${id}.mp3`
    }

    document.getElementById('myAudio').src = src
    
    document.getElementById('myAudio').play()
}









/*if (AllSurah.suwar[i].makkia == 1 ) {
    console.log( 'Makkia' )
}
else {
    console.log( 'Maddania' )
}*/