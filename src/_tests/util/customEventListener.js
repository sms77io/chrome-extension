export const customEventListener = (type, _page = page) => _page.evaluateHandle(type => {
    document.addEventListener(type, ({detail}) => {
        console.log({type, detail});

        window.onCustomEvent({type, detail});
    });
}, type);