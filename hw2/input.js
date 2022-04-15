let CLICKED_STATE = false;


/* mouse-click on a div  */
document.querySelectorAll('.target').forEach(item => {
    if ( item.style.backgroundColor == 'blue') {
        CLICKED_STATE = true;
        item.style.backgroundColor = 'red';
    }
    item.addEventListener('click', () => {
        console.log("Clicked on div");

        // var itemStyle = item.style;
        // var computedStyle = window.getComputedStyle(item, null);

        // for (prop in itemStyle) {
        //     if (itemStyle.hasOwnProperty(prop)) {
        //         console.log(itemStyle[prop] + "' > '" + computedStyle[prop] + "'\n");
        //     }
        // }
        // console.log(out)
        if (CLICKED_STATE == false) {
            item.style.backgroundColor = 'blue';
            CLICKED_STATE = true;
        }
        else {
            item.style.backgroundColor = 'red';
        }
        console.log(item.style.backgroundColor);
    })
})
