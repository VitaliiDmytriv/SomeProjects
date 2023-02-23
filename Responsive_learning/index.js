const inlineLinesStroke = document.querySelectorAll(".line__inline-stroke");
const lineBlockStroke = document.querySelector(".line__block-stroke");
const lineContainer = document.querySelector(".line");
const circle = document.querySelectorAll(".line__circle");

//vatiables of container
const lineContainerWidth = lineContainer.getBoundingClientRect().width;
const inlineLinesStrokeWith = lineContainerWidth / 2 - 13;

const card = document.querySelectorAll(".roadmap__card");

if (inlineLinesStroke[5].getBoundingClientRect().width === inlineLinesStrokeWith) {
    console.log(true);
}

window.addEventListener("scroll", function sizes() {
    if (inlineLinesStroke[5].getBoundingClientRect().width !== inlineLinesStrokeWith) {
        const { scrollTop, clientHeight } = this.document.documentElement;
        let gap = card[0].getBoundingClientRect().height;
        // console.log(clientHeight - lineBlockStroke.getBoundingClientRect().top - 519);

        // width
        if (clientHeight - inlineLinesStroke[0].getBoundingClientRect().top - 180 > 0) {
            let width = clientHeight - inlineLinesStroke[0].getBoundingClientRect().top - 180;
            inlineLinesStroke[0].style.width = `${Math.min(width * 1.3, inlineLinesStrokeWith)}px`;
        }

        // height
        if (inlineLinesStroke[0].getBoundingClientRect().width === inlineLinesStrokeWith) {
            card[0].classList.add("active");
            let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 255;
            lineBlockStroke.style.height = `${Math.min(width * 1.3, gap)}px`;
        }

        // width
        if (lineBlockStroke.getBoundingClientRect().height === gap) {
            circle[1].classList.add("active");
            let width = clientHeight - inlineLinesStroke[1].getBoundingClientRect().top - 217;
            inlineLinesStroke[1].style.width = `${Math.min(width * 1.3, inlineLinesStrokeWith)}px`;
        }

        // height
        if (inlineLinesStroke[1].getBoundingClientRect().width === inlineLinesStrokeWith) {
            card[1].classList.add("active");
            let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 351;
            lineBlockStroke.style.height = `${Math.min(width * 1.3, gap * 2)}px`;
        }

        // width
        if (lineBlockStroke.getBoundingClientRect().height === gap * 2) {
            circle[2].classList.add("active");
            let width = clientHeight - inlineLinesStroke[2].getBoundingClientRect().top - 265;
            inlineLinesStroke[2].style.width = `${Math.min(width * 1.3, inlineLinesStrokeWith)}px`;
        }

        // height
        if (inlineLinesStroke[2].getBoundingClientRect().width === inlineLinesStrokeWith) {
            card[2].classList.add("active");
            let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 444;
            lineBlockStroke.style.height = `${Math.min(width * 1.3, gap * 3)}px`;
        }

        // width
        if (Math.ceil(lineBlockStroke.getBoundingClientRect().height) === Math.ceil(gap * 3)) {
            circle[3].classList.add("active");
            let width = clientHeight - inlineLinesStroke[3].getBoundingClientRect().top - 325;
            inlineLinesStroke[3].style.width = `${Math.min(width * 1.3, inlineLinesStrokeWith)}px`;
        }

        // height
        if (inlineLinesStroke[3].getBoundingClientRect().width === inlineLinesStrokeWith) {
            card[3].classList.add("active");
            let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 537;
            lineBlockStroke.style.height = `${Math.min(width * 1.3, gap * 4)}px`;
        }

        // width
        if (Math.ceil(lineBlockStroke.getBoundingClientRect().height) === Math.ceil(gap * 4)) {
            circle[4].classList.add("active");
            let width = clientHeight - inlineLinesStroke[4].getBoundingClientRect().top - 385;
            inlineLinesStroke[4].style.width = `${Math.min(width * 1.3, inlineLinesStrokeWith)}px`;
        }

        // height
        if (inlineLinesStroke[4].getBoundingClientRect().width === inlineLinesStrokeWith) {
            card[4].classList.add("active");
            let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 640;
            lineBlockStroke.style.height = `${Math.min(width * 1.3, gap * 5)}px`;
        }

        // width
        if (lineBlockStroke.getBoundingClientRect().height == Math.floor(gap * 5)) {
            circle[5].classList.add("active");
            let width = clientHeight - inlineLinesStroke[5].getBoundingClientRect().top - 455;
            inlineLinesStroke[5].style.width = `${Math.min(width * 1.8, inlineLinesStrokeWith)}px`;
        }
        if (inlineLinesStroke[5].getBoundingClientRect().width === inlineLinesStrokeWith) {
            card[5].classList.add("active");
        }
    } else {
        return null;
    }
});
