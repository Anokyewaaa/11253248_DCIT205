function showTab(tabName) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Deactivate all tabs
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // Show the selected tab content
    document.getElementById(tabName + "-content").classList.add("active");

    // Activate the selected tab
    document.getElementById(tabName).classList.add("active");
}
