const data = [
    {
        name: 'camila',
        age: 24,
        city: 'Mumbai',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },
    {
        name: 'niyasha',
        age: 22,
        city: 'Delhi',
        language: 'javaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/56.jpg'
    },
    {
        name: 'Jaydev',
        age: 26,
        city: 'kolkata',
        language: 'Go',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
    },
    {
        name: 'Nikhil',
        age: 21,
        city: 'varanasi',
        language: 'python',
        framework: false,
        image: 'https://randomuser.me/api/portraits/men/60.jpg'
    },
    {
        name: 'Sakhshi',
        age: 24,
        city: 'Pune',
        language: 'java',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
        name: 'Abhimanyu',
        age: 23,
        city: 'Jharkhand',
        language: 'java',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    }
]

//Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length
                ?
                {
                    value: profiles[nextIndex++],
                    done: false
                }
                :
                {
                    done: true
                }
        }
    }
}
const candidates = cvIterator(data);
nextCV();

const next = document.getElementById("next");
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    if(currentCandidate != undefined){
    image.innerHTML=`<img src='${currentCandidate.image}' >`
    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">uses ${currentCandidate.framework} framework</li>
  </ul>`
    }
    else{
        alert('No more applications exist');
        window.location.reload();
    }
}