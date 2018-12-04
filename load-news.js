document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".load-more-news-btn").addEventListener("click", event => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "news-1.html");
        xhr.responseType = "document";

        xhr.onload = () => {
            if (xhr.status != 200) {
                alert('Error occurred! Please refresh the page.');
            } else {
                document.querySelector('article:last-of-type').append(...xhr.responseXML.body.children);
            }
        };

        xhr.send();
    });

    document.querySelector(".more-news-btn").addEventListener("click", event => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "news-2.html");
        xhr.responseType = "document";

        xhr.onload = () => {
            if (xhr.status != 200) {
                alert('Error occurred! Please refresh the page.');
            } else {
                document.querySelector('.news-container').append(...xhr.responseXML.body.children);
            }
        };

        xhr.send();
    });
});