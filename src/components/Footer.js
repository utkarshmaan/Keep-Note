import React from 'react';

function Footer(){
    var y=new Date().getFullYear();
    return(
        <footer>
            <p>all rights reserved {y}</p>
        </footer>
    )
};
export default Footer;