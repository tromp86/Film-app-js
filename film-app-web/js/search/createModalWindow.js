"use strict";
import { ModalWindow } from '../classSearch/classModalWindow.js';
import { Poster } from '../classSearch/classPoster.js';
import { Content } from '../classSearch/classContent.js';
import { ButtonClose } from '../classSearch/classButtonClose.js';
import { ButtonAdd } from '../classSearch/classButtonAdd.js';
import { Title } from '../classSearch/classTitle.js';
import { Video } from '../classSearch/classVideo.js';
import { Overview } from '../classSearch/classOverview.js';
import { Genres } from '../classSearch/classGenres.js';
import { ProductionCompanies } from '../classSearch/classProductionCompanies.js';
import { Budget } from '../classSearch/classBudget.js';
import { addFilmToFavoritesMain } from '../mainJs/addFilmToFavoritesMain.js';

//export let arrWindow = [];
// const { ModalWindow } = require('../classSearch/classModalWindow');
// const { Poster } = require('../classSearch/classPoster');
// const { Content } = require('../classSearch/classContent');
// const { ButtonClose } = require('../classSearch/classButtonClose');
// const { ButtonAdd } = require('../classSearch/classButtonAdd');
// const { Title } = require('../classSearch/classTitle');
// const { Video } = require('../classSearch/classVideo');
// const { Overview } = require('../classSearch/classOverview');
// const { Genres } = require('../classSearch/classGenres');
// const { ProductionCompanies } = require('../classSearch/classProductionCompanies');
// const { Budget } = require('../classSearch/classBudget');




export class CreateModalWindow {
    name;
    modalWindow;
    poster;
    content;
    buttonClose;
    buttonAdd;
    title;
    video;
    overview;
    genres;
    productionCompanies;
    budget;
    constructor(obj) {
        this.name = { title: obj.title, id: obj.id };
        this.modalWindow = new ModalWindow();
        this.poster = new Poster(obj);
        this.content = new Content();
        this.buttonClose = new ButtonClose();
        this.buttonAdd = new ButtonAdd();
        this.buttonAdd.addEventListener('click', () => {
            addFilmToFavoritesMain(this.name);
        });
        this.title = new Title(obj);
        this.video = new Video(obj);
        this.overview = new Overview(obj);
        this.genres = new Genres(obj);
        this.productionCompanies = new ProductionCompanies(obj);
        this.budget = new Budget(obj);
        this.content.append(this.title, this.video, this.overview, this.genres, this.productionCompanies, this.budget);
        this.modalWindow.append(this.poster, this.content, this.buttonClose, this.buttonAdd);
        //arrWindow.push(this.name);
    }
    getModalWindow() {
        return this.modalWindow;
    }
}

