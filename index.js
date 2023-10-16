const updateAll = () => {
    document.querySelectorAll('div').forEach(el => {
        if(el.classList.contains('active')){
            el.classList.remove('active')
        } else {
            el.classList.add('active')
        }
        
    })
}

document.querySelectorAll('.card').forEach(el => {
    el.addEventListener('click', event => {  
        updateAll()
    })
})
