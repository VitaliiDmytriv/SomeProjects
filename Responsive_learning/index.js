const inlineLinesStroke = document.querySelectorAll(".line__inline-stroke");
const lineBlockStroke = document.querySelector(".line__block-stroke");
const lineContainer = document.querySelector(".line");

//vatiables of container
const lineContainerWidth = lineContainer.getBoundingClientRect().width;
const inlineLinesStrokeWith = lineContainerWidth / 2 - 13;

const card = document.querySelectorAll(".roadmap__card");

window.addEventListener("scroll", () => {
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
        let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 255;
        lineBlockStroke.style.height = `${Math.min(width * 1.3, gap)}px`;
    }

    // width
    if (lineBlockStroke.getBoundingClientRect().height === gap) {
        let width = clientHeight - inlineLinesStroke[1].getBoundingClientRect().top - 217;
        inlineLinesStroke[1].style.width = `${Math.min(width * 1.3, inlineLinesStrokeWith)}px`;
    }

    // height
    if (inlineLinesStroke[1].getBoundingClientRect().width === inlineLinesStrokeWith) {
        let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 351;
        lineBlockStroke.style.height = `${Math.min(width * 1.3, gap * 2)}px`;
    }

    // width
    if (lineBlockStroke.getBoundingClientRect().height === gap * 2) {
        let width = clientHeight - inlineLinesStroke[2].getBoundingClientRect().top - 265;
        inlineLinesStroke[2].style.width = `${Math.min(width * 1.3, inlineLinesStrokeWith)}px`;
    }

    // height
    if (inlineLinesStroke[2].getBoundingClientRect().width === inlineLinesStrokeWith) {
        let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 444;
        lineBlockStroke.style.height = `${Math.min(width * 1.3, gap * 3)}px`;
    }

    // width
    if (Math.ceil(lineBlockStroke.getBoundingClientRect().height) === Math.ceil(gap * 3)) {
        let width = clientHeight - inlineLinesStroke[3].getBoundingClientRect().top - 325;
        inlineLinesStroke[3].style.width = `${Math.min(width * 1.3, inlineLinesStrokeWith)}px`;
    }

    // height
    if (inlineLinesStroke[3].getBoundingClientRect().width === inlineLinesStrokeWith) {
        let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 537;
        lineBlockStroke.style.height = `${Math.min(width * 1.3, gap * 4)}px`;
    }

    // width
    if (Math.ceil(lineBlockStroke.getBoundingClientRect().height) === Math.ceil(gap * 4)) {
        let width = clientHeight - inlineLinesStroke[4].getBoundingClientRect().top - 385;
        inlineLinesStroke[4].style.width = `${Math.min(width * 1.3, inlineLinesStrokeWith)}px`;
    }

    // height
    if (inlineLinesStroke[4].getBoundingClientRect().width === inlineLinesStrokeWith) {
        let width = clientHeight - lineBlockStroke.getBoundingClientRect().top - 640;
        lineBlockStroke.style.height = `${Math.min(width * 1.3, gap * 5)}px`;
    }

    // width
    if (Math.ceil(lineBlockStroke.getBoundingClientRect().height) <= Math.ceil(gap * 5)) {
        console.log(true);
        let width = clientHeight - inlineLinesStroke[5].getBoundingClientRect().top - 455;
        inlineLinesStroke[5].style.width = `${Math.min(width * 1.8, inlineLinesStrokeWith)}px`;
    }
});
