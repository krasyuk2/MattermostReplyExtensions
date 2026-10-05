class ContentService {
    constructor() {
        this.buttonSelector = "button[class = 'post-menu__item post-menu__item--wide pull-right']";
        this.inputId = "post_textbox";
    }
    getOptionsObserver() {
        return {childList: true, subtree: true};
    }

    start() {
        let observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                let buttonMessageElement = document.body.querySelector(this.buttonSelector);
                let cloneElement = this.cloneElement(buttonMessageElement);
                if(cloneElement) {
                    buttonMessageElement.after(cloneElement);
                }
            })
        });

       observer.observe(document.body, this.getOptionsObserver());
    }
    cloneElement(element) {
        if(element && !element.hasAttribute("clone")) {
            element.setAttribute("clone", "1");
            return element.cloneNode(true);
        }
    }

    insertTextInput(text) {
        let inputText = document.getElementById(this.inputId);
        inputText.value = `> ${text}\n\n`;
    }
}
let contentService = new ContentService();
contentService.start();