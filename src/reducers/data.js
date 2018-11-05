import { FETCH_DATA } from '../actions/index';

export default function(state = [], action){
  switch(action.type) {
    case FETCH_DATA:
      let retail = [], wholesale = [];
      let data = JSON.parse(JSON.stringify(action.payload.data));
      data[0].sales.map((item, index) => {
        retail[index] = wholesale[index] = {};
        retail[index].x = wholesale[index].x = new Date(item.weekEnding);
        [retail[index].y, wholesale[index].y] = [item.retailSales, item.wholesaleSales];
      });
      return {... data[0], ...{ retailData: retail }, ...{ wholesaleData: wholesale }};
    default: 
      return state;
  }
}