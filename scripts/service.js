const UNIVERSITY_API = `http://universities.hipolabs.com/search?country=`;

const getResource = async (url) => {
    try {
        const res = await fetch(url);
        return res.json();
    } 
    catch(err) {
        throw new Error(`!!!!!!!!!!!! ${err}`)
    }
}

const getListUniversity = async (countryName = 'Austria') => {
    const listByCountry = await getResource(`${UNIVERSITY_API}${countryName}`);
    console.log(listByCountry);
    return listByCountry;
} 
// getListUniversity('Spain');

const getUniversityItem = async (countryName = 'Austria', universityName = 'Fachhochschulstudiengänge Hagenberg') => {
    const itemUniversity =
    await getResource(`${UNIVERSITY_API}${countryName}&name${universityName}`);
    console.log(itemUniversity);
    return itemUniversity;
}