import ScrollSuave from './modules/ScrollSuave.js';
import Accordion from './modules/Accordion.js';
import TabNav from './modules/TabNav.js';
import Modal from './modules/Modal.js';
import ToolTip from './modules/ToolTip.js';
import ScrollAnima from './modules/Scroll-anima.js';
import endOfTheSite from './modules/endOfTheSite.js';
import MenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchFilmes from './modules/fetch-filmes.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import DropdownMenu from './modules/dropDownMenu.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

fetchFilmes(' ../../filmesapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

endOfTheSite();
initFuncionamento();
