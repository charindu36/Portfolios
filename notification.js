//fetching google sheet data
 
async function loadMessages() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbyOEBehMkCrMRJ0KeIDYpgHCBMQ5GSmqg5QXa13c4fqeuXAaLZU9kmgqCzs-DHE-L2W/exec')
    const data = await res.json();
    //console.log(data.length)
    const output = data.reverse().map(row=>
        `<div class="not-box">
            <img src="noti_avatar.jpg" alt="avatar">
            <div class="o-ses">
                <div class="s-ses">
                <strong class="not-title">${row.title}</strong>
                <small class="time">${row.timestamp}</small>
                </div>
            <p class="mes">${row.message}</p>
            </div>
        </div>`
    ).join('')
    document.getElementById('not-output').innerHTML = output
}
loadMessages()



//notification count
let badgeCount
fetch('https://script.google.com/macros/s/AKfycbyOEBehMkCrMRJ0KeIDYpgHCBMQ5GSmqg5QXa13c4fqeuXAaLZU9kmgqCzs-DHE-L2W/exec').then(res=>res.json()).then(data=>{
    console.log(data.length)
    //badgeCount = data.length
    badgeCount = localStorage.getItem('badge')
    if(badgeCount === null) document.querySelector('.badge').style.display = 'none'
    else badgeCount = badgeCount
    let badge = document.querySelector('.badge')
    badge.innerText = badgeCount
    if(badgeCount > 0) badge.style.display = 'flex'
    else badge.style.display = 'none'
    setInterval(()=>{
        badgeCount = data.length
        badge.innerText = data.length
        badge.style.display = 'flex'
        localStorage.setItem('badge', badgeCount)
    },3600000)
    
    
})
document.querySelector('.icon').addEventListener('click', ()=>{
    badge.style.display = 'none'
    localStorage.setItem('badge', 0)
})




