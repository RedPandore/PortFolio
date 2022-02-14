var buttonList = [
    ...document.getElementsByClassName('inner-left')[0].children[1].children,
];
buttonList.forEach((child) => {
    child.addEventListener('click', function () {
        var projects = [
            ...document.getElementsByClassName('inner-right')[0].children,
        ];
        projects.forEach((project) => {
            if (project.dataset['project'] !== this.dataset['project']) {
                    fadeOut(project);
            } else {
                window.setTimeout(() => {
                    fadeIn(project);
                }, 500);
            }
        });

        function fadeIn(element) {
            var op = 0.1; // initial opacity
            element.style.display = 'block';
            var timer = setInterval(function () {
                if (op >= 1) {
                    clearInterval(timer);
                    element.style.zIndex = '1';
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ')';
                op += op * 0.1;
            }, 10);
        }

        function fadeOut(element) {
            var op = 1; // initial opacity
            var timer = setInterval(function () {
                if (op <= 0.1) {
                    clearInterval(timer);
                    element.style.display = 'none';
                    element.style.zIndex = '0'
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ')';
                op -= op * 0.1;
            }, 50);
        }
    });
});
