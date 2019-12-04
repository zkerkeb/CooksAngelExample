import axios from 'axios';

export const DISPLAY_CHARACTERS = 'DISPLAY_CHARACTERS';


export const displayCharacters = characters => ({
  type: DISPLAY_CHARACTERS,
  payload: characters
});


export const getCharacters = (school = 'gryffindor') => dispatch => {
   axios({
    method: 'GET',
    url: `http://hp-api.herokuapp.com/api/characters/house/${school}`
  }).then(({ data, ...response }) => {
    dispatch(displayCharacters(data));
  }).catch(err => { console.log(err);});
};