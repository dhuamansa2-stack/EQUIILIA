let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let comments = [];

function login(){
    let name = document.getElementById("name").value;
    if(!name) return alert("Escribe tu nombre");

    document.getElementById("login").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");

    document.getElementById("welcome").innerText = "Hola, " + name;

    // avatar automático
    document.getElementById("avatar").src =
    "https://api.dicebear.com/7.x/initials/svg?seed=" + name;

    renderCalendar();
    weeklyMessage();
}

function addTask(){
    let text = taskInput.value;
    let date = dateInput.value;

    if(!text || !date) return;

    tasks.push({text,date});
    localStorage.setItem("tasks",JSON.stringify(tasks));

    renderCalendar();
}

function renderCalendar(){
    let cal = document.getElementById("calendar");
    cal.innerHTML="";

    for(let i=1;i<=30;i++){
        let day = document.createElement("div");
        day.className="day";
        let d = "2026-06-"+String(i).padStart(2,"0");

        day.innerHTML="<b>"+i+"</b>";

        tasks.forEach(t=>{
            if(t.date===d){
                let el=document.createElement("div");
                el.className="task";
                el.innerText=t.text;
                day.appendChild(el);
            }
        });

        cal.appendChild(day);
    }
}

function addComment(){
    let text = forumInput.value;
    if(!text) return;

    comments.push(text);

    // IA simple
    let response = "IA: intenta organizar mejor tu tiempo 👍";

    let div = document.getElementById("forum");
    div.innerHTML += `<p>${text}</p><p>${response}</p>`;
}

function jobs(){
    document.getElementById("jobs").innerText =
    "Trabajos cercanos encontrados 🔎";
}

function weeklyMessage(){
    let msgs=[
        "Sigue así 🔥",
        "Confía en ti 💪",
        "Vas mejorando 🚀"
    ];
    document.getElementById("motivation").innerText =
    msgs[Math.floor(Math.random()*msgs.length)];
}

function logout(){
    location.reload();
}
