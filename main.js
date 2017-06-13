const PROXY = '.proxy.library.uu.nl';

browser.browserAction.onClicked.addListener(tab => {
    if (!tab.url || tab.url.endsWith(PROXY))
        return;
    var url = new URL(tab.url);
    url.hostname += PROXY;
    browser.tabs.update(tab.id, {
        url: url.toString()
    });
})
