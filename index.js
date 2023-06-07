let shift = document.querySelector('.btn-7');
let toplayerBtns = document.querySelectorAll('.top');
let bottomlayerBtns = document.querySelectorAll('.bottom');
let active = false
let firstClick = null;
let secondClick = null;
const testing = [];

bottomlayerBtns.forEach(element => {
    element.addEventListener('click', iconClicked);
});

console.log(shift)

if(shift === null) {
    console.log('false')
}
else {
    // Bottom layers clicked
    shift.addEventListener('click', (e) => {
        active = !active
        console.log(active)
        // console.log('clicked')
        //     !active
        //     toplayerBtns.forEach(element => {
                
        //         element.addEventListener('click', iconClicked);
        //     });
            
            
    }) 
    
}

async function iconClicked(icon) {
    
    let thirdClick = icon.target;
    console.log("Third click:", thirdClick);
    // Remove event listener from secondClick
    // secondClick.removeEventListener('click', handleThirdClick);

}

// Icon / number
// Shift

// For each icon add fuction 
