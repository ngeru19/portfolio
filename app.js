function show(shown, hidden) {
    document.getElementById(shown).style.display='flex';
    document.getElementById(hidden).style.display='none';
    return false;
};

document.querySelector('.intro').addEventListener('click', show())