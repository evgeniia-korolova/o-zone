const getData = () => {
	return fetch('https://o-zone-52c27-default-rtdb.firebaseio.com/goods.json')
  .then(response =>{ 
    return response.json()})
  
};

export default getData;
