//UKOL 1
console.log('funguju')

// const renderEmails = (emails) => {
//     const emailsBox = document.querySelector('#inbox')

//     emailsBox.innerHTML = emails.map(
//         (email) => {
//             return `
//                 <div class="email">
//                     <div class="email__head">
//                         <button class="email__icon email__icon--closed"></button>
//                         <div class="email__info">
//                             <div class="email__sender">${email.sender.name}</div>
//                             <div class="email__subject">${email.subject}</div>
//                         </div>
//                         <div class="email__time">${email.time}</div>
//                     </div>
//                     <div class="email__body"></div>
//                 </div>
//             `
//         }
//     ).join('')


// }


// fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
// .then(response => response.json())
// .then((data) => {
//     console.log(data)
//     renderEmails(data.emails)
// })

//UKOL 2
const renderEmails2 = (emails) => {
    //console.log(emails. map((email) => {console.log(email.subject)}))
    const readEmailsBox = document.querySelector('#readinbox')
    const unreadEmailsBox = document.querySelector('#unreadinbox')

    unreadEmailsBox.innerHTML = emails.map((email) => {
        //console.log(email)

        if (email.unread === true) {
            console.log(email.sender.name)
            return `
                    <div class="email">
                        <div class="email__head">
                            <button class="email__icon email__icon--closed"></button>
                            <div class="email__info">
                                <div class="email__sender">${email.sender.name}</div>
                                <div class="email__subject">${email.subject}</div>
                            </div>
                            <div class="email__time">${email.time}</div>
                        </div>
                        <div class="email__body"></div>
                    </div>

            `
            }
        }).join('')
        
    
        readEmailsBox.innerHTML = emails.map((email) => {
        if (email.unread === false) {
            console.log(email.sender.name)

            return `
                    <div class="email">
                        <div class="email__head">
                            <button class="email__icon email__icon--opened"></button>
                            <div class="email__info">
                                <div class="email__sender">${email.sender.name}</div>
                                <div class="email__subject">${email.subject}</div>
                            </div>
                            <div class="email__time">${email.time}</div>
                        </div>
                        <div class="email__body"></div>
                    </div>
            `
            }  
        }).join('')
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails')
.then(response => response.json())
.then((data) => {
    console.log(data)
    renderEmails2(data.emails)
})


