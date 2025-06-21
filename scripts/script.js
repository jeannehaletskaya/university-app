const togglePreLoader = () => {
    const preloader = document.querySelector('.wrap-preloader');
    preloader.classList.toggle('.preloader-show');
}

const renderUniversityList = async () => {
    togglePreLoader();
    const selectCountry = document.querySelector('#current-tour').value;
    const dataUniversity = await getListUniversity(selectCountry);
    const containerList = document.querySelector('#list-matches');

    containerList.innerHTML = '';

    dataUniversity.forEach((item) => {
        const websiteLink = item.web_pages && item.web_pages.length > 0 ? item.web_pages[0] : '#';

        containerList.innerHTML += `
        <a href="${websiteLink}" target="_blank" rel="noopener noreferrer" class="collection-item">
            ${item.name}
        </a>
    `;
    });

    togglePreLoader();
}

renderUniversityList();

document.querySelector('#current-tour').addEventListener('change', renderUniversityList);
