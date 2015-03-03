/****************************************************************
* <summary>
* Used to toggle Visibility
* This is copied from Order.js it is used for the tree nav
* 
* </summary>
***************************************************************/
function toggleNode(oid, imgPath) {
    if (oid != 'undefined') {
        var parent = oid.parentNode;
        var uls = parent.getElementsByTagName("ul");
        if ((uls != 'undefined') && (uls.length > 0)) {
            if (uls[0].style.display == 'none') {
                uls[0].style.display = 'block';
            } else {
                uls[0].style.display = 'none';
            }

            // Match the image!
            if (uls[0].style.display == 'none') {
                oid.src = imgPath + '/expand.gif';
            } else {
                oid.src = imgPath + '/collapse.gif';
            }
        }
    }
}