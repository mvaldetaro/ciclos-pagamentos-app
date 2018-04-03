export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) { // parametro rest: permite representar um número indefinido de argumentos em um array
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true);
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}