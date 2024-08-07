//object for selecting songs according to genere
const songsGenre = [
    {
        genre: "All Song",
        songName: ["Zehnaseeb", "Rang Jo Lagyo", "Maahi Ve","Sajni","Shape of You"],
    },
    {
        genre: "Hip-Hop",
        songName: ["Maahi Ve", "Sajni"],

    },
    {
        genre: "Romance",
        songName: ["Zehnaseeb", "Rang Jo Lagyo"],
    },
    {
        genre: "Pop",
        songName: ["Maahi Ve", "Rang Jo Lagyo"],
    },
    {
        genre: "Rock",
        songName: ["Maahi Ve", "Rang Jo Lagyo"],
    },


];

//eachsong details with their name image artist songlink

const eachSongDetail = [
    {
        songName:"Maahi Ve",
        image:"https://tse2.mm.bing.net/th?id=OIP.MVsbETRl_ckiogCrGMcSggHaEK&pid=Api&P=0&h=180",
        artist:"Atif Aslam",
       songLink:"songlinks/Maahi Ve - Highway-(DJMaza).mp3",
    },
    {
        songName:"Zehnaseeb",
        image:"https://i.ytimg.com/vi/gjtJ4YgHiXY/maxresdefault.jpg",
        artist:"Atif Aslam",
        songLink:"songlinks/Zehnaseeb - Hasee Toh Phasee-(DJMaza).mp3",

    },
     {
        songName:"Rang Jo Lagyo",
      image:"https://tse2.mm.bing.net/th?id=OIP.qgE4w9YrkmFTS7Fzo0CHpAHaHa&pid=Api&P=0&h=180",
        artist:"Atif Aslam",
        songLink:"[Songs.PK] Atif Yours Truly - 08 - Rang Jo Lagyo.mp3",
     },
    {
        songName:"Sajni",
        image:"https://i.ytimg.com/vi/k3g_WjLCsXM/maxresdefault.jpg",
        artist:"Arijit Singh",
        songLink:"songlinks/Sajni Laapataa Ladies-(DJMaza).mp3",
    },
     {
        songName:"Shape of You",
        image:  "https://www.nickiswift.com/img/gallery/the-real-meaning-behind-shape-of-you-by-ed-sheeran/l-intro-1610309362.jpg",
      artist:"Ed Sheeran",
      songLink:"songlinks/Shape Of You - Ed Sheeran.mp3",
     },

];



// all playlist object which contain nameofplaylist and myplaylistsong;

const allPlayList = [
   {
    nameofplayList:"myplaylist",
    myplaylistsongs:["Zehnaseeb","Shape of You","Hits Direction"],
   },
   {
    nameofplayList:"Relief",
    myplaylistsongs:["Maahi Ve","Sugar - Marron"],
   },

];



//creating options for selecting genre

const select = document.querySelector("#selectGenre");
songsGenre.forEach(curr => {
    const options = document.createElement("option");
    options.className = "optionClass";
    options.style.textAlign = "center";
    options.textContent = curr.genre;
    options.style.backgroundColor="rgb(107, 184, 222)";
    options.style.padding = "5px";
    select.appendChild(options);

})

//used index for forward or backward the songs 
let currentSongIndex = 0;

//used for adding songs in current playlist using add to playlist button
let activePlaylist = null;
//create second box for all song
const allSongs = document.querySelector("#allSongs");

//ALL SONG HEADING

const heading = document.createElement("h1");
heading.className = "h1";
heading.textContent = "All Songs";

allSongs.appendChild(heading);

const div1 = document.createElement("div");
div1.className = "songList"
allSongs.appendChild(div1);

//create button  which shows songs according to selected option
select.addEventListener('change', updateDetails);

function updateDetails() {
    div1.innerHTML = '';

    const selectedgenre = select.value;
    const genreObj = songsGenre.find(curr => curr.genre === selectedgenre);
    if (genreObj) {
        const { songName } = genreObj;

        //iterate over song array;
        songName.forEach(curr => {
            const songBtn = document.createElement("button");
            songBtn.textContent = curr;
            songBtn.addEventListener('click', () => songUpdate(curr)); //will change the song when we click on this button
            div1.appendChild(songBtn);
        })

    }
}
//according to selected option the song will be changed  
//middle box;
const songCard = document.querySelector("#songsCard");

const songCardinnerdiv = document.createElement("div");
songCardinnerdiv.className = "songsCardinnerclass";



const innerdiv2 = document.createElement("div");
innerdiv2.className = "div2class"
songCardinnerdiv.appendChild(innerdiv2);


const innerdiv3 = document.createElement("div");
innerdiv3.className = "div3class";
innerdiv2.appendChild(innerdiv3);

const songheadingdiv = document.createElement("div");
innerdiv2.appendChild(songheadingdiv);
songheadingdiv.className = "songheading";
songheadingdiv.textContent = "Shape of You"

const singerheadingdiv = document.createElement("div");
innerdiv2.appendChild(singerheadingdiv);
singerheadingdiv.className = "singerheadingname";
singerheadingdiv.textContent = "Ed Sheeran";


songCard.appendChild(songCardinnerdiv);

const imagediv = document.createElement("div");
imagediv.className = "imagestyle";
innerdiv3.appendChild(imagediv);

const imgElement1 = document.createElement("img");
imgElement1.src = "https://www.nickiswift.com/img/gallery/the-real-meaning-behind-shape-of-you-by-ed-sheeran/l-intro-1610309362.jpg";
imagediv.appendChild(imgElement1);

//all about audio
const audioDiv = document.createElement("div");
audioDiv.className = "audioDiv";
songCard.appendChild(audioDiv);
const audio = document.createElement("audio");
audio.id = "audio";
const source = document.createElement("source");
audio.controls = true;
source.type = "audio/mp3";
source.src = "songlinks/Shape Of You - Ed Sheeran.mp3";

audio.appendChild(source);
audioDiv.appendChild(audio);

//creating div which contains both forward and backward button 

const divforwback =  document.createElement("div");
songCard.appendChild(divforwback);
divforwback.className = "divforbackclass";

//backward button

const backBtn = document.createElement("button");
divforwback.appendChild(backBtn);
backBtn.className = "forbackclass";
backBtn.style.backgroundColor="rgb(145, 91, 253)";
backBtn.textContent = "<="

//added event listener in backward button

backBtn.addEventListener("click",handlebackwardClick);

//forward button

const forwardBtn = document.createElement("button");
divforwback.appendChild(forwardBtn);
forwardBtn.className = "forbackclass";
forwardBtn.style.backgroundColor="rgb(145, 91, 253)";
forwardBtn.textContent = "=>";

//added event listener in forward button
forwardBtn.addEventListener('click',handleforwardClick);
 
//Add to PlayList -> button

const addtoplaylst = document.createElement("button");
divforwback.appendChild(addtoplaylst);
addtoplaylst.className = "forbackclass";

addtoplaylst.textContent = "Add to PlayList";
addtoplaylst.style.backgroundColor = "rgb(145, 91, 253)";

//global variable which will stores current song name

let currentSongName='';



function songUpdate(selectedsong) {

    imagediv.innerHTML = '';
  
    const detailofsongobj =   eachSongDetail.find(items=> items.songName===selectedsong);

    currentSongIndex = eachSongDetail.findIndex(items => items.songName === selectedsong);

    const{songName,image,artist,songLink} = detailofsongobj;
  
    const imgElement = document.createElement("img");
  
    imgElement.src = image;
  
    imgElement.alt = songName;
  
    imagediv.appendChild(imgElement);
   
    currentSongName = songName;
  
    songheadingdiv.textContent = songName;
  
    singerheadingdiv.textContent = artist;

     audioDiv.innerHTML = "";
    const audio = document.createElement("audio");
    audio.id = "audio";
    const source = document.createElement("source");
    audio.controls = true;
    source.type = "audio/mp3";
    source.src = songLink;

    audio.appendChild(source);
    audioDiv.appendChild(audio);

    backBtn.removeEventListener("click", handlebackwardClick); 
    backBtn.addEventListener("click",handlebackwardClick);

    forwardBtn.removeEventListener('click',handleforwardClick);
    forwardBtn.addEventListener('click',handleforwardClick);

    addtoplaylst.removeEventListener('click',handleAddToPlaylist);
    addtoplaylst.addEventListener('click',handleAddToPlaylist);
}

function handleAddToPlaylist(){
    updateplaylistsongs(currentSongName);
}

function handlebackwardClick(){
    backwardSong(currentSongIndex - 1);
}

function backwardSong(index) {
    if(index<0){
        index = eachSongDetail.length-1;
    }
    if (index >= 0 && index < eachSongDetail.length) {
        songUpdate(eachSongDetail[index].songName);
    }
}

function handleforwardClick(){
      forwardsong(currentSongIndex+1);
}
function forwardsong(index){
    if(index >=eachSongDetail.length){
        index=0;
    }
    if (index >= 0 && index < eachSongDetail.length) {
        songUpdate(eachSongDetail[index].songName);
    } 
}
//right most box among three box
 

// for input 

const input = document.createElement("input");
input.className = "inputClass";
input.placeholder="Enter PlayList Name"
const search = document.querySelector("#search");
search.appendChild(input);

//search button

const searchbutton = document.createElement('button');
search.appendChild(searchbutton);
searchbutton.className = "createplaylistbtnstyle";
searchbutton.addEventListener('click',searchAction);
searchbutton.textContent = "Create Playlist"

//searchAction will add newplaylist in allplaylist array of objects
const playListdiv = document.createElement("div");

function searchAction(){

    if(input.value){

        const newplaylistobj = {
            nameofplayList:input.value,
            myplaylistsongs:[],

        };
        input.value = "";
        allPlayList.push(newplaylistobj);
        updatePlayList();

    }

}

const searchResult  = document.querySelector("#searchResult");


// all playlist button

const allPlayListbtn = document.createElement("button");
allPlayListbtn.className = "playlistbtn";
allPlayListbtn.textContent = "All Playlist";
searchResult.appendChild(allPlayListbtn);

allPlayListbtn.addEventListener('click',updatePlayList);
playListdiv.className = "listofPlaylist"
searchResult.appendChild(playListdiv);

function updatePlayList(){
    playListdiv.innerHTML = '';

    //here curr is the objects of allplaylist objects

   allPlayList.forEach(curr=>{
    const playlistbutton =  document.createElement("button");
    playlistbutton.className = "designbtn";
    playlistbutton.addEventListener('click',()=>playlistSongs(curr));
    playlistbutton.textContent = curr.nameofplayList;
    playListdiv.appendChild(playlistbutton);
   })
}
const searchid = document.querySelector("#searchresultinerid");
const searchinnerdiv = document.createElement("div");
searchinnerdiv.id = "currentplaylistdiv";
searchid.appendChild(searchinnerdiv);

function playlistSongs(curr){
    const headingdiv = document.querySelector(".currentplaylistheading");
    headingdiv.textContent = ""; 
    headingdiv.textContent = curr.nameofplayList;
    searchinnerdiv.innerHTML="";
    const{myplaylistsongs} = curr;
    activePlaylist = curr;
    myplaylistsongs.forEach(curr1=>{
        const div3 = document.createElement("button");
        div3.className = "designbtn";
        searchinnerdiv.appendChild(div3);
        div3.textContent = curr1;
      
    })
    // button.className.remove("active-playlist");

}
function updateplaylistsongs(songname){
    if(!activePlaylist.myplaylistsongs.includes(songname)){
    activePlaylist.myplaylistsongs.push(songname);
    playlistSongs(activePlaylist);
    }
}

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("theme-btn");
    const themebtn = document.querySelector(".theme");
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            document.body.classList.add("dark-mode");
             themebtn.textContent = "Dark";
        } else {
            document.body.classList.remove("dark-mode");
            themebtn.textContent = "Light";
        }
    });
});

