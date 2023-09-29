/****menu hamburguesa**** */
const open = document.getElementById('open')
const close = document.getElementById('close')
const menu = document.getElementById('menu')
const menuHamburguesa = document.getElementById('menu-hamburguesa')
const header = document.getElementById('header')


open.addEventListener('click', () => menuHamburguesa.style.display = 'flex' )
open.addEventListener('click', () => header.style.position = 'fixed')
open.addEventListener('click', () => close.style.display = 'block')
open.addEventListener('click', () => open.style.display = 'none' )
close.addEventListener('click', ()=> close.style.display = 'none' )
close.addEventListener('click', ()=> menuHamburguesa.style.display = 'none' )
close.addEventListener('click', ()=> open.style.display = 'block' )
close.addEventListener('click', () => header.style.position = 'static')


