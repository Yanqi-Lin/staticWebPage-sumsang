var nav = document.getElementById('nav');
var navExtendedClassName = 'nav-container-extended';

document.getElementById('btn-toggle').onclick = function() {
    // nav.className += ' ' + navExtendedClassName;
    if (nav.classList.contains(navExtendedClassName)) { // 收起
        nav.classList.remove(navExtendedClassName);
    } else { // 展开
        nav.classList.add(navExtendedClassName);
    }
};