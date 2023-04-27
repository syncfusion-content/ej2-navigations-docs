


import { Sidebar } from '@syncfusion/ej2-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);


let sidebarElement: Sidebar = new Sidebar({
    showBackdrop: true,width: '280px', created: oncreate
});
sidebarElement.appendTo('#sidebar-element');

document.getElementById('zoom').onclick = (): void => {
    sidebarElement.show();
    sidebarElement.element.classList.add("w3-animate-zoom");
}
// Opendoor Effect
document.getElementById('open_door').onclick = (): void => {
    sidebarElement.show();
    let sidebar: Element =document.getElementsByClassName("e-sidebar-overlay")[0];
    sidebar.classList.add("move");
}
//Bottom to Top
document.getElementById('bottom_top').onclick = (): void => {
    sidebarElement.show();
    sidebarElement.element.classList.add("w3-animate-bottom");
}
//Rotate Sidebar
document.getElementById('rotate').onclick = (): void => {
    sidebarElement.show();
    sidebarElement.element.classList.add("rotate");
}
//Sidebar with 3d Animation
document.getElementById('rotate_3d').onclick = (): void => {
    sidebarElement.show();
    sidebarElement.element.classList.add("rotate_3d");
}
//Reverse Slide Out
document.getElementById('reverse').onclick = (): void => {
    sidebarElement.show();
    sidebarElement.element.classList.add("reverse_slide_out");
}

// Close the Sidebar
document.getElementById('close_btn').onclick = (): void => {
    sidebarElement.element.classList.remove("sidebar");
    sidebarElement.element.classList.remove("rotate");
    sidebarElement.element.classList.remove("w3-animate-zoom");
    sidebarElement.element.classList.remove("w3-animate-bottom");
    sidebarElement.element.classList.remove("rotate_3d");
    sidebarElement.element.classList.remove("reverse_slide_out");
    sidebarElement.hide();
};
//Remove the Flickering Effect
function oncreate(): void {
     this.element.style.visibility = '';
}



