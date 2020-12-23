const data = [
    {id: 1, title: 'Google', content: '— американская транснациональная корпорация, реорганизованная 15 октября 2015 года в международный конгломерат Alphabet Inc., компания в составе холдинга Alphabet, инвестирующая в интернет-поиск, облачные вычисления и рекламные технологии.', img: './images/google.png'},
    {id: 2, title: 'Apple', content: '— американская корпорация, производитель персональных и планшетных компьютеров, аудиоплееров, смартфонов, программного обеспечения. Один из пионеров в области персональных компьютеров и современных многозадачных операционных систем с графическим интерфейсом. Штаб-квартира — в Купертино, штат Калифорния.', img: './images/apple.png'},
    {id: 3, title: 'MicroSoft', content: '— одна из крупнейших транснациональных компаний по производству проприетарного программного обеспечения для различного рода вычислительной техники — персональных компьютеров, игровых приставок, КПК, мобильных телефонов и прочего.', img: './images/microsoft.png'}
]

// const toHTML = data => `
//             <div class="col">
//                 <div class="card">
//                     <img class="card-img-top" src="${data.img}" alt="${data.title}">
//                     <div class="card-body">
//                       <h5 class="card-title">${data.title}</h5>
//                       <a href="#" class="btn btn-primary" data-id="${data.id}" data-btn="showinfo">Show info</a>
//                       <a href="#" class="btn btn-danger">Delete</a>
//                     </div>
//                   </div>
//             </div>
//             `
const toHTML = data => `
        <div class="card">
        <div class="card-top">
        <img class="card-img-top" src="${data.img}" alt="${data.title}">
        </div>
        <div class="card-bottom">
            <h2 class="card-title">${data.title}</h2>
            <a href="#" class="btn btn-primary" data-id="${data.id}" data-btn="showinfo">Show info</a>
            
        </div>
        </div>
            `

function render(){
    const html = data.map(toHTML).join('')
    document.querySelector('#myCards').innerHTML = html
}

render()

const modal = $.modal({
    title: 'Information', 
    closible: true,
    width: '600px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            // console.log('Primary btn clicked')
            modal.close()
        }},
        // {text: 'Cancel', type: 'danger', handler(){
        //     console.log('Danger btn clicked')
        //     modal.close()
        // }},
    ]
}
)

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    

    if (btnType === 'showinfo') {
        const label = data.find(f => f.id === id)
        modal.setContent(`
            <p><strong>${label.title}</strong> ${label.content}</p>
        `)
        modal.open()
    }
})