const initComponents = () => {  

    //////////////////////////////////////////////////////////////////////////////////
    // STACK-ICON
    // Note: Firefox has shitty support for this. The icon bars eat the click events.
    [].forEach.call(document.querySelectorAll('.stack-icon'), element => {
        element.addEventListener('click', e => {
            if (element.classList.contains('stack-icon--close')) {
                element.classList.remove('stack-icon--close');
            } else {
                element.classList.add('stack-icon--close');
            }
        })
    }); 
};

export { initComponents };



