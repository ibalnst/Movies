const fetchData = async () => {
    const res = await axios.get( 'http://www.omdbapi.com/', {
        params: {
            apikey: 'd6a48442',
            i:'tt0848228'
        }
    } );
    console.log(res.data);
};

fetchData();