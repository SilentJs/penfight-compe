
let sortDirection = false;
let personData = [
    {name:"Mohit", rr:0},
    {name:"Nikhilesh", rr:0},
    {name:"Shreyas", rr:0},
    {name:"Pathikrit", rr:0},
    {name:"Tanishk", rr:0},
    {name:"Bhuvnesh", rr:0},
    {name:"Santosh", rr:0},
];

window.onload=()=>{  
    loadLeaderboardData(personData);
}

function loadLeaderboardData(personData){
    const listBody=document.getElementById('flushData');
    let htmlInject = ' ';

    for(let person of personData){
        if(person.rr<1){
        htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-bar" min="0" max="1050" value="${person.rr}"></progress><br><p>Unranked</p></li>`;   
        }
        else if(person.rr>1&&person.rr<50){
        htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-iron" min="0" max="1050" value="${person.rr}"></progress><br><p>Iron I</p></li>`;
        }
        else if(person.rr>49&&person.rr<100){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-iron" min="0" max="1050" value="${person.rr}"></progress><br><p>Iron II</p></li>`;
        }
        else if(person.rr>99&&person.rr<150){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-iron" min="0" max="1050" value="${person.rr}"></progress><br><p>Iron III</p></li>`;
        }
        else if(person.rr>149&&person.rr<200){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-bronze" min="0" max="1050" value="${person.rr}"></progress><br><p>Bronze I</p></li>`;
        }
        else if(person.rr>199&&person.rr<250){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-bronze" min="0" max="1050" value="${person.rr}"></progress><br><p>Bronze II</p></li>`;
        }
        else if(person.rr>249&&person.rr<300){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-bronze" min="0" max="1050" value="${person.rr}"></progress><br><p>Bronze III</p></li>`;
        }
        else if(person.rr>299&&person.rr<350){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-silver" min="0" max="1050" value="${person.rr}"></progress><br><p>Silver I</p></li>`;
        }
        else if(person.rr>349&&person.rr<400){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-silver" min="0" max="1050" value="${person.rr}"></progress><br><p>Silver II</p></li>`;
        }
        else if(person.rr>399&&person.rr<450){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-silver" min="0" max="1050" value="${person.rr}"></progress><br><p>Silver III</p></li>`;
        }
        else if(person.rr>449&&person.rr<500){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-gold" min="0" max="1050" value="${person.rr}"></progress><br><p>Gold I</p></li>`;
        }
        else if(person.rr>499&&person.rr<550){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-gold" min="0" max="1050" value="${person.rr}"></progress><br><p>Gold II</p></li>`;
        }
        else if(person.rr>549&&person.rr<600){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-gold" min="0" max="1050" value="${person.rr}"></progress><br><p>Gold III</p></li>`;
        }
        else if(person.rr>599&&person.rr<650){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-platinum" min="0" max="1050" value="${person.rr}"></progress><br><p>Platinum I</p></li>`;
        }
        else if(person.rr>649&&person.rr<700){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-platinum" min="0" max="1050" value="${person.rr}"></progress><br><p>Platinum II</p></li>`;
        }
        else if(person.rr>699&&person.rr<750){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-platinum" min="0" max="1050" value="${person.rr}"></progress><br><p>Platinum III</p></li>`;
        }
        else if(person.rr>749&&person.rr<800){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-diamond" min="0" max="1050" value="${person.rr}"></progress><br><p>Diamond I</p></li>`;
        }
        else if(person.rr>799&&person.rr<850){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-diamond" min="0" max="1050" value="${person.rr}"></progress><br><p>Diamond II</p></li>`;
        }
        else if(person.rr>849&&person.rr<900){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-diamond" min="0" max="1050" value="${person.rr}"></progress><br><p>Diamond III</p></li>`;
        }
        else if(person.rr>899&&person.rr<950){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-immortal" min="0" max="1050" value="${person.rr}"></progress><br><p>Immortal I</p></li>`;
        }
        else if(person.rr>949&&person.rr<1000){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-immortal" min="0" max="1050" value="${person.rr}"></progress><br><p>Immortal II</p></li>`;
        }
        else if(person.rr>999&&person.rr<1050){
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-immortal" min="0" max="1050" value="${person.rr}"></progress><br><p>Immortal III</p></li>`;
        }else{
            htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress class="progress-radiant" min="0" max="1050" value="${person.rr}"></progress><br><p>Radiant</p></li>`;
        }

    }
    listBody.innerHTML=htmlInject;
    console.log(htmlInject);
}
function sortColumn(columnName) {
    const dataType = typeof personData[0][columnName];
    console.log(dataType)
    sortDirection = !sortDirection;

    switch(dataType){
        case 'number':
            sortNumberColumn(sortDirection,columnName);
            break;
    }
    console.log(personData);
    
}
function sortNumberColumn(sort,columnName){
    personData=personData.sort((p1,p2)=>{
        return sort ? p2[columnName] - p1[columnName] : p1[columnName]
        - p2[columnName]

    })
}

// function loadLeaderboardData(personData){
//     const listBody=document.getElementById('flushData');
//     let htmlInject = ' ';

//     for(let person of personData){
//         htmlInject += `<li>${person.name} - ${person.rr} RR<br><progress min="0" max="1050" value="${person.rr}"></progress></li>`;
//     }
//     listBody.innerHTML=htmlInject;
//     console.log(htmlInject);
// }
sortColumn('rr')