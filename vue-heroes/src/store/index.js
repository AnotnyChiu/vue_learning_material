import Vue from 'vue'
import Vuex from 'vuex'
import {dataService} from '../shared'
import {GET_HEROES,ADD_HERO,DELETE_HERO,UPDATE_HERO} from './mutation-types'

Vue.use(Vuex)

const state = {
  heroes : [],
  //villians : [],
};

const mutations = {
  //mutation to ultimately change the state
  //use property syntax here to import name from mutation-type
  [GET_HEROES](state,heroes) {
    state.heroes = heroes
  },

  // all mutations takes 1.state 2.payload(input)
  [ADD_HERO](state,hero){
    state.heroes.push(hero);
  },

  [DELETE_HERO](state,hero){
    // make a copy out of the filterd arr (use spread)
    state.heroes = [...state.heroes.filter(h=> h.id !== hero.id)]
  },

  [UPDATE_HERO](state,hero){
    const index = state.heroes.findIndex(h=> h.id === hero.id)
    //replace an element in arr use splice!
    state.heroes.splice(index,1,hero);
    state.heroes = [...state.heroes];
  }
};

const actions = {
  //take context : in here we only want to take the context commit 
  async getHeroesAction({commit}){
    const heroes = await dataService.getHeroes();
    commit(GET_HEROES,heroes);
    //'getHeroes' to be local mutation file
  },

  async addHeroAction({commit},hero){
    const addedHero = await dataService.addHero(hero);
    commit(ADD_HERO,addedHero);
  },

  async deleteHeroAction({commit},hero){
    const deletedHeroId = await dataService.deleteHero(hero);
    commit(DELETE_HERO,deletedHeroId);
  },

  async updateHeroAction({commit},hero){
    const updatedHero = await dataService.updateHero(hero);
    commit(UPDATE_HERO,updatedHero);
  }

};

const getters = {
  //getHeroById: (state,id) => state.heroes.find(h => h.id === id), >> 一層function丟兩個params
  getHeroById: state => id => state.heroes.find(h => h.id === id), // >> 兩層函數
};


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
  //ES6 syntax : if a object has key and value as the same name, can use this shortcut
  //ex: getter : getter >> getter
  //好習慣把東西拉出去寫
})
