﻿function MenuHtc_GetElementPosition(element, relativeToElement)
{
    var result=new Object();
    result.x=0;
    result.y=0;
    result.width=0;
    result.height=0;
    if (element.offsetParent) {
        var parent=element;
        while (parent !=null &&
            parent !=relativeToElement)
        {
            result.x+=parent.offsetLeft;
            result.y+=parent.offsetTop;
            AdjustScrollPosition(parent, relativeToElement, result);
            var parentTagName=parent.tagName.toLowerCase();
            if (parentTagName !="body" &&
                parentTagName !="html" &&
                parent.clientTop !=null &&
                parent.clientLeft !=null &&
                parent !=element) {
                result.x+=parent.clientLeft;
                result.y+=parent.clientTop;
            }
            parent=parent.offsetParent;
        }
 
        //This is the custom code added to account for scrolling
        //when the code has been customized to not use
        //overflows in the s4-workspace
        result.x -= document.documentElement.scrollLeft;
        result.y -= document.documentElement.scrollTop;
    }
    else if (element.offsetLeft || element.offsetTop) {
        result.x=element.offsetLeft;
        result.y=element.offsetTop;
    }
    else {
        if (element.x) {
            result.x=element.x;
        }
        if (element.y) {
            result.y=element.y;
        }
    }
    if (element.offsetWidth && element.offsetHeight) {
        result.width=element.offsetWidth;
        result.height=element.offsetHeight;
    }
    else if (element.style && element.style.pixelWidth && element.style.pixelHeight) {
        result.width=element.style.pixelWidth;
        result.height=element.style.pixelHeight;
    }
    return result;
}