let sidebar = document.getElementsByTagName('ytd-guide-section-renderer');
let subscriptionMenu = sidebar[1];
let searchDIV = document.createElement('div');
let searchText = document.createTextNode('WELCOME TO KAPPA R E A L I T Y');
searchDIV.style.textAlign = "center";
searchDIV.style.padding = "0 24px";
let searchBar = document.createElement('input');
let renderedSubcriptionChannelsDIV = subscriptionMenu.querySelectorAll('div.style-scope.ytd-guide-section-renderer ytd-guide-entry-renderer');
let allChannels = [];
Array.prototype.map.call(renderedSubcriptionChannelsDIV, function (data, index) {
    if (index <= 6) {
        data.querySelector("paper-item.style-scope.ytd-guide-entry-renderer").focus();
        allChannels.push(data);
    }

    if (index == 7) {
        data.click();
        let expandListDIV = document.querySelectorAll('div#expanded div#expandable-items .style-scope.ytd-guide-collapsible-entry-renderer');
        Array.prototype.map.call(expandListDIV, function (data2, index) {
            if (index !== expandListDIV.length - 1) {
                // Get focus in order to request thumbnails
                data2.querySelector("paper-item.style-scope.ytd-guide-entry-renderer").focus();
                allChannels.push(data2);
            }
        });
    }
});
searchBar.placeholder = "Search for channel...";
searchBar.style.width = "100%";
searchBar.style.padding = "5px";
searchBar.addEventListener('keyup', (e) => {
    let filterValue = e.target.value.toUpperCase();
    for (let i = 0; i < allChannels.length; i++) {
        a = allChannels[i].querySelector('a').title.toUpperCase();
        if (a.indexOf(filterValue) > -1) {
            allChannels[i].style.display = "";
        } else {
            allChannels[i].style.display = "none";
        }
    }
});
searchDIV.appendChild(searchText);
searchDIV.appendChild(searchBar);
searchDIV.style.color = 'red';
subscriptionMenu.insertBefore(searchDIV, subscriptionMenu.childNodes[2]);


