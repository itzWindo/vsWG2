setTimeout(function() {
    const videoSection = document.getElementById("video-section");
    if (videoSection) {
        videoSection.classList.add("show");
    }
}, 4200);

(function() {
    const widos = document.getElementById("widos");
    const audio = document.getElementById("msaa");
    if (!widos || !audio) return;

    const COOKIE_NAME = "widos_vanished";

    function hasVanishedCookie() {
        return document.cookie.split("; ").some((row) => row.startsWith(COOKIE_NAME + "=1"));
    }

    function setVanishedCookie() {
        document.cookie = `${COOKIE_NAME}=1; max-age=31536000; path=/; SameSite=Lax`;
    }

    if (hasVanishedCookie()) {
        widos.classList.add("widos-locked", "widos-hidden");
        return;
    }

    let isTriggered = false;

    widos.addEventListener("click", function() {
        if (isTriggered) return;
        isTriggered = true;

        widos.classList.add("widos-playing");
        widos.style.cursor = "default";

        audio.currentTime = 0;
        audio.play().catch(() => {
        });
    });

    audio.addEventListener("ended", function() {
        widos.classList.remove("widos-playing");
        widos.classList.add("widos-locked");
        setVanishedCookie();

        setTimeout(function() {
            widos.classList.add("widos-hidden");
        }, 1000);
    });
})();