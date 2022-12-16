const jjEl = document.querySelector(".jj");
const ulEl = document.querySelector(".ul");

function jj(a) {
const li = document.createElement(`li`)
const span = document.createElement(`span`)

span.textContent = `- ${a}`;

li.appendChild(span)
ulEl.appendChild(li)
jjEl.appendChild(ulEl)
}


jj(`OK, is not problem!`)
jj(`jj function is working..`)
jj(`jj function is working..`)
jj(`jj function is working..`)
jj(`jj function is working..`)
jj(`jj function is working..`)
jj(`jj function is working..`)
// jj(`New Console is perfect, New Console is perfect, New Console is perfect, New Console is perfect, New Console is perfect, New Console is perfect, New Console is perfect, New Console is perfect, New Console is perfect, New Console is perfect, New Console is perfect, New Console is perfect, `)


