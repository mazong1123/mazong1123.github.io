(function () {
    var rachetPageManager = new window.RATCHET.Class.PageManager();
    rachetPageManager.ready(function () {
        var projectId = 1;

        var selectedLi = document.querySelector('#projectDetailList').querySelector('li["data-project-id"=' + projectId + ']');
        var selectedProjectTitle = selectedLi.querySelector('h1').innerHtml;
        var selectedProjectDescription = selectedLi.querySelector('p').innerHtml;
    });
})();