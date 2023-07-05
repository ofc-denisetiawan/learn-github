document.addEventListener("DOMContentLoaded", () => {

    // custom functions
    let checkDomain = (inputDomain) => {
        let domainNotAvb = ['stwn.dev', 'dummy.com', 'git.com', 'google.com', 'facebook.com', 'pasrah.com'];
        
        return domainNotAvb.indexOf(inputDomain);
    };

    // event
    document.getElementById('btnCheck').addEventListener('click', () => {
        let domain = document.getElementById('inputCheckDomain').value;

        if (domain === '') return;
        
        if (checkDomain(domain) === -1){
            alert(`Your domain ${domain} is available, grab it fast, before someone took it.`);
        } else {
            alert(`Your domain ${domain} is not available, sorry.`);
        }
    });

});