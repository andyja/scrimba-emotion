
import { catsData } from './data.js';
const emotionRadios = document.getElementById('emotion-radios');

function getEmotionsArray(cats){
    // let emotionsArray = [];
    // cats.forEach(cat => { 
    //     cat.emotionTags.forEach(emotion => {
    //         if(!emotionsArray.includes(emotion)){
    //             emotionsArray.push(emotion);
    //         }
    //     })
    // });   
    // console.log(emotionsArray)
    const emotionsArray = [];
    for (let cat of cats){ 
        for (let emotion of cat.emotionTags) {
            emotionsArray.push(emotion);
        }
    }
    console.log(emotionsArray)
    return emotionsArray;
    
}

function renderEmotionsRadios(cats){
    let radioItems = ``;
    const emotions = getEmotionsArray(cats);
    for (let emotion of emotions){
        radioItems += `<p>${emotion}</p>`
    }
    emotionRadios.innerHTML = radioItems;
}
renderEmotionsRadios(catsData);


