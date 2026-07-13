"use strict";
        const HERO = [{ cap: "Paradise Found", sub: "Crystal waters &amp; endless horizons" }, { cap: "Wild &amp; Untamed", sub: "Where the earth meets the sea" }, { cap: "Luxury Awaits", sub: "Your perfect coastal retreat" }, { cap: "Golden Hour", sub: "Chasing sunsets across the world" }];
        const ZONES = {
            North: [{ name: "Reynisfjara Beach", location: "Iceland", desc: "Dramatic black volcanic sand with towering basalt columns and powerful Atlantic waves crashing against the shore.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format", rating: 4.8, temp: "10°C", best: "Jun – Aug",activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"] },

            { name: "Lofoten Islands Beach", location: "Norway", desc: "Pristine white sands framed by jagged peaks and turquoise arctic waters beneath the midnight sun.", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&auto=format", rating: 4.9, temp: "8°C", best: "Jul – Aug",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"]},
            

            { name: "Whitehaven Beach", location: "Queensland, Australia", desc: "World-renowned for 98% pure silica sand that stays cool underfoot and gleams brilliant white from space.", img: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=600&h=400&fit=crop&auto=format", rating: 4.7, temp: "24°C", best: "May – Oct",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"] }],


            South: [{ name: "Bondi Beach", location: "Sydney, Australia", desc: "Iconic crescent-shaped beach with world-class surf, a vibrant promenade, and the famous Icebergs pool.", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop&auto=format", rating: 4.6, temp: "22°C", best: "Dec – Feb",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"] },


            { name: "Boulders Beach", location: "Cape Town, South Africa", desc: "Home to a resident colony of African penguins nestled among ancient granite boulders beside turquoise coves.", img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&h=400&fit=crop&auto=format", rating: 4.5, temp: "18°C", best: "Nov – Mar",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"] },
            

            { name: "Phuket Beach", location: "Thailand", desc: "Palm-fringed shores with crystal-clear emerald waters, vivid coral reefs, and legendary Thai hospitality.", img: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf4?w=600&h=400&fit=crop&auto=format", rating: 4.7, temp: "28°C", best: "Nov – Apr",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"] }],


            East: [{ name: "Kuta Beach", location: "Bali, Indonesia", desc: "Legendary surf destination with breathtaking sunsets, vibrant beach culture, and warm welcoming waters.", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&auto=format", rating: 4.5, temp: "29°C", best: "Apr – Oct",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"]  },


            { name: "Railay Beach", location: "Krabi, Thailand", desc: "Accessible only by longtail boat, this limestone-karst-framed jewel is Southeast Asia's most dramatic beach.", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop&auto=format", rating: 4.9, temp: "30°C", best: "Nov – Apr",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"]  },


            { name: "El Nido Beach", location: "Palawan, Philippines", desc: "Secret lagoons, soaring limestone cliffs, vibrant coral gardens, and electric-blue waters in untouched paradise.", img: "https://images.unsplash.com/photo-1573843981267-be1480aee507?w=600&h=400&fit=crop&auto=format", rating: 4.9, temp: "27°C", best: "Dec – May",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"] }],


            West: [{ name: "Miami Beach", location: "Florida, USA", desc: "Art Deco pastel architecture, turquoise Atlantic waters, year-round sunshine, and the world's most famous boulevard.", img: "https://images.unsplash.com/photo-1533760881669-80db4d7b341d?w=600&h=400&fit=crop&auto=format", rating: 4.4, temp: "26°C", best: "Mar – May",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"] }, 
            

            { name: "Cancún", location: "Mexico", desc: "Brilliant turquoise Caribbean waters, powdery white sand, and world-class resort amenities in the Hotel Zone.", img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&h=400&fit=crop&auto=format", rating: 4.6, temp: "27°C", best: "Dec – Apr",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"] },


            { name: "Copacabana Beach", location: "Rio de Janeiro, Brazil", desc: "The world's most famous urban beach — 4 km of golden sand backed by the iconic Sugarloaf Mountain.", img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=600&h=400&fit=crop&auto=format", rating: 4.5, temp: "25°C", best: "Dec – Mar",
            activities:["Swimming","Snorkeling","Photography","Boa Cruise"],
            facilities:["Hotels","Restaurants","Parking","WiFi"] }]
        };
        const GALLERY = [{ 
            type:"image",
             url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format",
             cap: "Tropical Paradise — Maldives" },

            { 
                type:"image", 
                url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&auto=format",
                cap: "Ocean Waves — Lofoten, Norway" },

            { 
                type:"image", 
                url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop&auto=format", 
                cap: "Resort Heaven — Bora Bora" },
                    
            { 
                type:"image",
                url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format", cap: "Dramatic Shores — Iceland" },

            {
                type:"video",
                url:"videos/122312-725067639.mp4",
                cap:"Phuket Drone View"
            },
                
            {
                type:"image", 
                url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&h=600&fit=crop&auto=format", 
                cap: "Caribbean Sunset — Cancún" },

            { 
                type:"image", 
                url: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?w=800&h=600&fit=crop&auto=format", 
                cap: "Crystal Clear — Whitehaven" }, 
            
            {
                type:"video",
                url:"videos/103316-662525618.mp4",
                cap:"Bali Beach Resort"},
                
            { 
                type:"image", 
                url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf4?w=800&h=600&fit=crop&auto=format", 
                cap: "Emerald Waters — Thailand" }, 

            { 
                type:"image", 
                url: "https://images.unsplash.com/photo-1533760881669-80db4d7b341d?w=800&h=600&fit=crop&auto=format", 
                cap: "Urban Beach — Miami" },

            {
                 type:"image", 
                 url: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=600&fit=crop&auto=format", 
                 cap: "Golden Surf — Bondi Beach" },
            {
                type:"video",
                url:"videos/102361-659985595.mp4",
                cap:"Maldives Resort Tour"
                },

            {
                type:"video",
                url:"videos/76265-558378077.mp4",
                cap:"Miami Beach Hotel"
            }
            ];

        const FLIGHTS = [
            { from: "New York (JFK)", to: "Cancún (CUN)", price: "$189", airline: "AeroSun", dur: "4h 20m",departure:"09:30 AM",arrival:"01:50 PM",terminal:"Terminal 3",baggage:"23kg Checked + 7kg Cabin",class:"Economy",seats:"18 Seats Left",url:"https://i.pinimg.com/736x/1e/7f/96/1e7f96de4d2b91edcf0c9c1fff51e4b8.jpg" }, 

            { from: "London (LHR)", to: "Phuket (HKT)", price: "£420", airline: "OceanAir", dur: "11h 45m", departure:"07:20 AM",arrival:"07:05 PM",terminal:"Terminal 5",baggage:"30kg Checked",class:"Business",seats:"6 Seats Left", url:"https://i.pinimg.com/736x/5f/29/e1/5f29e1df612bdcced3241df87b0731a8.jpg"}, 
            
            { from: "Sydney (SYD)", to: "Bali (DPS)", price: "AUD 310", airline: "CoralWings", dur: "6h 10m",departure:"12:10 PM",arrival:"06:20 PM", terminal:"Terminal 1",baggage:"25kg",class:"Economy",seats:"22 Seats Left",url:"https://i.pinimg.com/736x/a0/02/87/a002878b84701b784e06e653e18eadd2.jpg" }
        ];
        const BUSES = [
            { from: "Miami",to: "Key West", company: "SunLine Express", dur: "3h 30m", price: "$29", dep: "Daily 7:00 AM",seats:"14 Seats Left",url:"https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/metrobus-1440x9000-e6d3ed285056a36_e6d3ee16-5056-a36a-0bd4231eb6508fa5.jpg" },

            { from:"Bangkok",to:"Phuket", company:"ThaiBus Gold", dur:"12h", dep:"8:30 PM", price:"฿650",seats:"10 Seats Left",url:"https://media.istockphoto.com/id/1299124278/photo/bus-in-bangkok.jpg?s=612x612&w=0&k=20&c=8Mit-2a3qWr3D7DEsnLW52ksnY39ntQ1F8rjoyz5vk8=" }, 

            { from:"Sydney",to:"Bondi Beach",company:"BeachLink", dur:"45 min",dep:"Every 15 mins",price:"AUD 4.80",seats:"Unlimited",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mRp-wTs0ArjPPY6k2BkgIji-3oypi0R61XTwJ2ViuBDSYPCgBiJfKQ8&s=10" }
        ];

        // ── HERO ──
        let cs = 0,
            ht;

        function showSlide(n) {
            document.querySelectorAll('.hslide').forEach((s, i) => s.classList.toggle('active', i === n));
            document.querySelectorAll('.hdot').forEach((d, i) => d.classList.toggle('active', i === n));
            document.getElementById('hcap').innerHTML = HERO[n].cap;
            document.getElementById('hsub').innerHTML = HERO[n].sub;
            cs = n
        }

        function chSlide(d) { clearInterval(ht);
            showSlide((cs + d + 4) % 4);
            startHT() }

        function goSlide(n) { clearInterval(ht);
            showSlide(n);
            startHT() }

        function startHT() { ht = setInterval(() => showSlide((cs + 1) % 4), 5000) }
        startHT();

        // ── NAV ──
        function goTo(id, el) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            if (el) { document.querySelectorAll('.nl').forEach(l => l.classList.remove('active'));
                el.classList.add('active') }
        }

        function gotoZone(z) {
            document.getElementById('zones').scrollIntoView({ behavior: 'smooth' });
            const zo = ['North', 'South', 'East', 'West'];
            document.querySelectorAll('.ztab').forEach((t, i) => t.classList.toggle('active', zo[i] === z));
            renderB(z)
        }
        let mo = false;

        function toggleM() {
            mo = !mo;
            document.getElementById('mnav').classList.toggle('open', mo);
            document.getElementById('micon').innerHTML = mo ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>' : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>'
        }

        function mgo(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            mo = false;
            document.getElementById('mnav').classList.remove('open');
            document.getElementById('micon').innerHTML = '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>'
        }

        // ── BEACH CARDS ──

        function starH(r) {
            return [1, 2, 3, 4, 5].map(s => {
                const c = s <= Math.round(r) ? 'var(--secondary)' : '#ddd';
                return `<svg class="star" viewBox="0 0 24 24" fill="${c}" style="color:${c}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
            }).join('')
        }

        let currentBeaches = [];
        function renderB(zoneName) {
            currentBeaches = ZONES[zoneName];
            const grid = document.getElementById("bgrid");
            grid.innerHTML = "";
            for (let i = 0; i < currentBeaches.length; i++) {
                let beach = currentBeaches[i];
                let card = document.createElement("div");
                card.className = "bcard fade-in-up";
                card.innerHTML = `
        <div class="bimg">
            <img src="${beach.img}" alt="${beach.name}" loading="lazy">
            <div class="tmp-badge">${beach.temp}</div>
        </div>
        <div class="bbody">
        <div class="btitle">${beach.name}</div>
        <div class="bloc">
        <svg viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
        </svg>
        ${beach.location}
        </div>
        <div class="stars">
        ${starH(beach.rating)}
        <span class="star-v">${beach.rating}</span>
        </div>
        <div class="bdesc">
        ${beach.desc}
        </div>
        <div class="bfoot">
        <div class="bbest">
        Best:
        <strong>${beach.best}</strong>
        </div>
        <span class="ltravel">
        Book Travel
        </span>
        </div>
        </div>
        `;
                card.addEventListener("click", function () {
                    openBeachModal(i);
                });
        
                grid.appendChild(card);
            }
        }

        function switchZ(zoneName, button){
            let buttons = document.querySelectorAll(".ztab");
            for(let i=0;i<buttons.length;i++){
                buttons[i].classList.remove("active");
            }
            button.classList.add("active");
            renderB(zoneName);
        }

        function openBeachModal(index){
            // Get selected beach
            let beach = currentBeaches[index];
            // Show image
            document.getElementById("modalImage").src = beach.img;
            // Beach name
            document.getElementById("modalTitle").innerHTML = beach.name;
            // Location
            document.getElementById("modalLocation").innerHTML =
            "Location : " + beach.location;
            // Temperature
            document.getElementById("modalTemp").innerHTML =
            "Temperature : " + beach.temp;
            // Rating
            document.getElementById("modalRating").innerHTML =
            "Rating : " + beach.rating;
            // Best time
            document.getElementById("modalBest").innerHTML =
            "Best Time : " + beach.best;
            // Description
            document.getElementById("modalDescription").innerHTML =
            beach.desc;
            // Activities
            let activityList = document.getElementById("modalActivities");
            activityList.innerHTML = "";
            for(let i = 0; i < beach.activities.length; i++){
                activityList.innerHTML +=
                "<li>" + beach.activities[i] + "</li>";
            }
            // Facilities
            let facilityList = document.getElementById("modalFacilities");
        
            facilityList.innerHTML = "";

            for(let i = 0; i < beach.facilities.length; i++){
                facilityList.innerHTML +=
                "<li>" + beach.facilities[i] + "</li>";
            }
            // Show modal
            document.getElementById("beachModal").style.display = "block";
        
        }
        let closeButton = document.querySelector(".close-modal");

        closeButton.addEventListener("click",function(){

            document.getElementById("beachModal").style.display="none";
            
        
        });
        // Display cards
        renderB("North");

        window.addEventListener("click",function(event){

            let modal = document.getElementById("beachModal");
        
            if(event.target == modal){
        
                modal.style.display="none";
        
            }
        
        });

        // ── GALLERY ──
const gallery = document.getElementById("ggrid");

gallery.innerHTML = "";

for(let i=0;i<GALLERY.length;i++){

    let item = GALLERY[i];

    let card = document.createElement("div");

    card.className="gthumb";

    if(item.type=="image"){

        card.innerHTML=`
            <img src="${item.url}" alt="${item.cap}">
            <div class="gcap">
                <span>${item.cap}</span>
            </div>
            <div class="gcam">
                <i class="fa fa-camera" style="font-size:24px; color:#0e4d6e"></i>
            </div>
        `;
        card.onclick=function(){
            openLightbox(i);
        }

    }

    else{
        card.innerHTML=`
            <video muted loop autoplay playsinline >
                <source src="${item.url}" type="video/mp4">
            </video>
            <div class="video-icon">
                <i class="fa fa-play-circle" style="font-size:38px"></i>
            </div>

            <div class="gcap">
                <span>${item.cap}</span>
            </div>

        `;

        card.onclick=function(){
            openVideo(i);
        }
       
    }

    gallery.appendChild(card);
}

// open  the image modal
function openLightbox(index) {
    let item = GALLERY[index];
    document.getElementById("lightboxImage").src = item.url;
    document.getElementById("lightboxImage").alt = item.cap;
    document.getElementById("lightboxCaption").innerHTML = item.cap;
    document.getElementById("imageLightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("imageLightbox").style.display = "none";
}

document.querySelector("#imageLightbox .close-modal")
    .addEventListener("click", closeLightbox);

window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("imageLightbox")) {
        closeLightbox();
    }
});

// open the video modal
function openVideo(index){
    let item=GALLERY[index];
    let video=document.getElementById("galleryVideo");

    video.src=item.url;
    video.load();
    video.play();

    document.getElementById("videoTitle").innerHTML=item.cap;

    document.getElementById("videoModal").style.display="block";

}

// close the video modal
document.querySelector("#videoModal .close-modal")
.addEventListener("click",function(){

    let video=document.getElementById("galleryVideo");

    video.pause();
    video.currentTime = 0;

    video.src = "";

    document.getElementById("videoModal").style.display="none";

});

// close the image modal
document.querySelector("#beachModal .close-modal")
    .addEventListener("click", function () {
        document.getElementById("beachModal").style.display = "none";
    });
    // ── TRAVEL ──
    const fc = document.getElementById('fcon');
    FLIGHTS.forEach((f,index) => {
        fc.innerHTML +=
            `<div class="acard"><div class="frow"><div class="finfo"><div class="froute"><span>${f.from}</span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2l-1.6 1.6 6.7 3.1L7.5 13H4l-2 2 4 2 2 4 2-2v-3.5l3.3-2.5 3.1 6.7z"/></svg><span>${f.to}</span></div><div class="fmeta">${f.airline} · ${f.dur}</div></div><div class="fright"><div class="fprice">${f.price}</div>
            <button class="book-btn"onclick="openTravelModal('flight',${index})">Book</button></div></div></div>`
    });
    const bc = document.getElementById('bcon');
    BUSES.forEach((b,index)=> {
        bc.innerHTML +=
            `<div class="acard">
                <div class="brow1">
                    <div class="broute">
                        ${b.from} → ${b.to}
                    </div>
                    <div class="bprice">
                        ${b.price}
                    </div>
                </div>
                <div class="brow2">
                    <div class="bmeta">
                        ${b.company} · ${b.dur} · ${b.dep}
                    </div>
                    <button
                        class="book-btn"
                        onclick="openTravelModal('bus', ${index})">
                        Reserve
                    </button>
                </div>
            </div>`
    });
    function openTravelModal(type,index){
        let data;
    
        if(type=="flight"){
            data=FLIGHTS[index];
        }
        else{
            data=BUSES[index];
        }
        document.getElementById("travelImage").src=data.url;
    
        document.getElementById("travelTitle").innerHTML=data.from+" → "+data.to;
    
        document.getElementById("travelCompany").innerHTML=data.airline || data.company;
    
        document.getElementById("travelDeparture").innerHTML=data.departure;
    
        document.getElementById("travelArrival").innerHTML=data.arrival || "Destination";
    
        document.getElementById("travelDuration").innerHTML=data.dur;
    
        document.getElementById("travelPrice").innerHTML=data.price;
    
        document.getElementById("travelBaggage").innerHTML=data.baggage || "N/A";
    
        document.getElementById("travelClass").innerHTML=data.class || "Standard";
    
        document.getElementById("travelSeats").innerHTML=data.seats;

        document.getElementById("travelModal").style.display="flex";
    }
    
    document.querySelector(".travel-close").onclick=function(){
        document.getElementById("travelModal").style.display="none";
    }
    
    window.onclick=function(e){
        if(e.target==document.getElementById("travelModal")){
            document.getElementById("travelModal").style.display="none";
        }
    }

        // ── FEEDBACK ──
        let cr = 4;
        document.querySelectorAll('.rstar').forEach(s => {
            s.addEventListener('click', function() { cr = parseInt(this.getAttribute('data-v'));
                updS() });
            s.addEventListener('mouseenter', function() {
                const v = parseInt(this.getAttribute('data-v'));
                document.querySelectorAll('.rstar').forEach(x => x.classList.toggle('on', parseInt(x
                    .getAttribute('data-v')) <= v))
            });
            s.addEventListener('mouseleave', updS);
        });

        function updS() { document.querySelectorAll('.rstar').forEach(s => s.classList.toggle('on', parseInt(s
                .getAttribute('data-v')) <= cr)) }
        updS();

        function subFB(){
            const name=document.getElementById("fbN");
            const email=document.getElementById("fbE");
            const message=document.getElementById("fbM");
            let valid=true;
        
            // clear previous errors
            document.getElementById("errName").innerHTML="";
            document.getElementById("errEmail").innerHTML="";
            document.getElementById("errRating").innerHTML="";
            document.getElementById("errMessage").innerHTML="";
            name.classList.remove("invalid","valid");
            email.classList.remove("invalid","valid");
            message.classList.remove("invalid","valid");
        
            // ---------------- NAME ----------------
        
            if(name.value.trim()==""){
                document.getElementById("errName").innerHTML="Please enter your name.";
                name.classList.add("invalid");
                valid=false;
            }
        
            else if(!/^[A-Za-z ]+$/.test(name.value.trim())){
                document.getElementById("errName").innerHTML="Only letters and spaces are allowed.";
                name.classList.add("invalid");
                valid=false;
            }
            else{
                name.classList.add("valid");
            }
            // ---------------- EMAIL ----------------
        
            const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(email.value.trim()==""){
                document.getElementById("errEmail").innerHTML="Email is required.";
                email.classList.add("invalid");
                valid=false;
            }
            else if(!emailPattern.test(email.value.trim())){
                document.getElementById("errEmail").innerHTML="Enter a valid email address.";
                email.classList.add("invalid");
                valid=false;
            }
            else{
                email.classList.add("valid");
            }
        
            // ---------------- RATING ----------------
        
            if(cr==0){
                document.getElementById("errRating").innerHTML="Please select a rating.";
                valid=false;
            }
            // ---------------- MESSAGE ----------------
        
            if(message.value.trim()==""){
                document.getElementById("errMessage").innerHTML="Please enter your feedback.";
                message.classList.add("invalid");
                valid=false;
            }
            else if(message.value.trim().length<20){
                document.getElementById("errMessage").innerHTML="Message must contain at least 20 characters.";
                message.classList.add("invalid");
                valid=false;
        
            }
            else{
                message.classList.add("valid");
            }
        
            if(!valid){
                return;
            }
            document.getElementById("fform").classList.add("hidden");
        
            document.getElementById("fthanks").classList.add("show");
        }

        function resetFB() {
            document.getElementById('fform').classList.remove('hidden');
            document.getElementById('fthanks').classList.remove('show');
            document.getElementById('fbN').value = '';
            document.getElementById('fbE').value = '';
            document.getElementById('fbM').value = '';
            cr = 4;
            updS()
        }

        // ── VISITOR COUNT ──
        const vc = parseInt(localStorage.getItem('bob_v') || '0') + 1;
        localStorage.setItem('bob_v', String(vc));
        document.getElementById('visBadge').textContent = vc.toLocaleString() + ' visitors';

        // ── CLOCK + TICKER ──
        let uloc = 'Detecting location…';
        function ft(d) { return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }

        function fd(d) { return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long',
                day: 'numeric' }) }
        document.getElementById('fyr').textContent = '© ' + new Date().getFullYear() +
            ' BeautyOfBeaches. All rights reserved.';

        function buildTicker() {
            const n = new Date();
            const parts = ['🕐 ' + ft(n), '📅 ' + fd(n), '📍 Your Location: ' + uloc,
                '🌊 Welcome to BeautyOfBeaches — Your Global Coastal Guide',
                '✈️  Featured: Railay Beach, Thailand  ·  El Nido, Philippines  ·  Whitehaven Beach, Australia',
                '🏖️  Discover 850+ beaches across North, South, East &amp; West zones',
                '📞 Contact us: info@beautyofbeaches.com  ·  +1 (800) 555-BEACH'
            ];
            const rep = [...parts, ...parts].join('&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;');
            document.getElementById('ticker').innerHTML = rep
        }
        buildTicker();
        setInterval(buildTicker, 1000);
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async p => {
                try {
                    const r = await fetch('https://nominatim.openstreetmap.org/reverse?lat=' + p.coords
                        .latitude + '&lon=' + p.coords.longitude + '&format=json');
                    const d = await r.json();
                    const city = d.address?.city || d.address?.town || d.address?.village || 'Unknown City';
                    const cty = d.address?.country || '';
                    uloc = city + ', ' + cty
                } catch { uloc = p.coords.latitude.toFixed(2) + '°N, ' + p.coords.longitude.toFixed(2) + '°E' }
            }, () => { uloc = 'Location unavailable' })
        }

        // ── SCROLL SPY ──
        const secs = ['home', 'zones', 'gallery', 'travel', 'feedback', 'about', 'contact', 'sitemap'];
        window.addEventListener('scroll', () => {
            const sy = window.scrollY + 80;
            let act = 'home';
            secs.forEach(id => {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= sy) act = id
            });
            document.querySelectorAll('.nl').forEach(l => l.classList.toggle('active', l.textContent.toLowerCase()
                .replace(' ', '') === act || l.getAttribute('data-id') === act))
        }, { passive: true });