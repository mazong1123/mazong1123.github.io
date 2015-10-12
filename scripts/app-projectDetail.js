(function () {
    window.RATCHET.Class.PageManager.enableMouseSupport();

    var rachetPageManager = new window.RATCHET.Class.PageManager();
    rachetPageManager.ready(function () {
        var projectId = getUrlParameterByName('pid', window.location.href);

        var selectedLi = document.querySelector('#projectDetailList').querySelector('li[data-project-id="' + projectId + '"]');
        var selectedProjectTitle = selectedLi.querySelector('h1').innerHTML;
        var selectedProjectDescription = selectedLi.querySelector('div').innerHTML;

        document.querySelector('.title').innerHTML = selectedProjectTitle;
        document.querySelector('.project-detail').innerHTML = selectedProjectDescription;
    });

    /**
    * Retrieve query parameter value of an url.
    * 
    * @param {String} name - the name of the query parameter to retrieve.
    * @param {String} url - url to extract the query parameter.
    * @return {String} the value of the specific query parameter.
    */
    var getUrlParameterByName = function (name, url) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(url);
        if (results == null) {
            return "";
        }
        else {
            return decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    };
})();