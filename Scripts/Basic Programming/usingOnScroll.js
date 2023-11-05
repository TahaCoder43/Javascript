window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const mainDiv = document.getElementById("main");
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrolled == scrollable) {
        window.alert(
            "You have reached the end of the document which tells us that your a really lame and boring person with no purpose in life"
            );
    }
    console.log(scrolled, scrollable, mainDiv.scrollHeight - mainDiv.clientHeight);
    mainDiv.scrollTop = (mainDiv.scrollHeight - mainDiv.clientHeight) * (scrolled / scrollable);
});
