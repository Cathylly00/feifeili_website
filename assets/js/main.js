//@prepros-prepend aos.js



// Resize Logo when scroll

// $(document).ready(function () {
//     $(window).scroll(function () {
//       $(".main-header").toggleClass("main-header-shrink", $(this).scrollTop() > 40)
//     });
// });

$(document).ready(function () {
    $(window).scroll(function () {
        $(".logo").toggleClass("logo-shrink", $(this).scrollTop() > 20)
    });
});

/* Scroll*/

//index-01
document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('scroll-area-index');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});
//index-02
document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('scroll-area-index-projects');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});

//project-01
document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('scroll-area-1');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});
//project-02
document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('scroll-area-2');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});

/* Dropdown */
$('.dropdown li').on('click', function(){
    $('#show').text($(this).text());
});

$(document).ready(function() {
    $('#show').text("Sort by: Newest");
});

/* Sort */

// awards-Newest
$('#awards-Newest').on('click', function(){
    var awards = $(".awards-list .card");
    var temp = awards.sort(function(a,b){
        return parseInt($(b).attr("card-title")) - parseInt($(a).attr("card-title"));
    });
    $(".awards-list").html(temp);
});

//awards-Oldest
$('#awards-Oldest').on('click', function(){
    var awards = $(".awards-list .card");
    var temp = awards.sort(function(a,b){
        return parseInt($(a).attr("card-title")) - parseInt($(b).attr("card-title"));
    });
    $(".awards-list").html(temp);
});

// news-Newest
$('#news-Newest').on('click', function(){
    var awards = $(".news-list .card");
    var temp = awards.sort(function(a,b){
        return parseInt($(b).attr("news-years")) - parseInt($(a).attr("news-years")) || parseInt($(b).attr("news-month")) - parseInt($(a).attr("news-month")) || parseInt($(b).attr("news-day")) - parseInt($(a).attr("news-day"));
    });
    $(".news-list").html(temp);
});

// news-Oldest
$('#news-Oldest').on('click', function(){
    var awards = $(".news-list .card");
    var temp = awards.sort(function(a,b){
        return parseInt($(a).attr("news-years")) - parseInt($(b).attr("news-years")) || parseInt($(a).attr("news-month")) - parseInt($(b).attr("news-month")) || parseInt($(a).attr("news-day")) - parseInt($(b).attr("news-day"));
    });
    $(".news-list").html(temp);
});

/* Search By Tag */

$('#ALL').on('click', function(){
    $(".timeline_area .project-col").show();
});

$('#AI').on('click', function(){
    $(".timeline_area .project-col").show();
    $(".project-col[tag!='" + "AI" + "']").hide();
});

$('#GNN').on('click', function(){
    $(".timeline_area .project-col").show();
    $(".project-col[tag!='" + "GNN" + "']").hide();
});
$('#CV').on('click', function(){
    $(".timeline_area .project-col").show();
    $(".project-col[tag!='" + "CV" + "']").hide();
});

$('#Privacy').on('click', function(){
    $(".timeline_area .project-col").show();
    $(".project-col[tag!='" + "Privacy" + "']").hide();
});

$('#NES').on('click', function(){
    $(".timeline_area .project-col").show();
    $(".project-col[tag!='" + "NES" + "']").hide();
});

$('#iGibson').on('click', function(){
    $(".timeline_area .project-col").show();
    $(".project-col[tag!='" + "iGibson" + "']").hide();
});