class ContentService {
    constructor() {
        this.buttonSelector = "button[class = 'post-menu__item post-menu__item--wide pull-right']";
        this.trimStartString = ""
    }
    getOptionsObserver() {
        return {childList: true, subtree: true};
    }

    start() {
        let observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                let buttonMessageElement = document.body.querySelector(this.buttonSelector);
                this.cloneElement(buttonMessageElement);
            })
        });

       observer.observe(document.body, this.getOptionsObserver());
    }
    cloneElement(element) {
        if(element && !element.hasAttribute("clone")) {
            element.setAttribute("clone", "1");
        }
    }

}
let contentService = new ContentService();
contentService.start();