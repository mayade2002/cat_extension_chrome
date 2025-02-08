chrome.storage.local.get('consumer_unfriendly', function (items) {
    console.log("CATLOG: chrome.storage.local.get('consumer_unfriendly')", items);
    var consumer_unfriendly = items.consumer_unfriendly;
    if (consumer_unfriendly) {
        var productTitle_1 = document.querySelector("title");
        var text_1 = productTitle_1.textContent.toLowerCase();
        if (productTitle_1) {
            consumer_unfriendly.forEach(function (unfriendly_instance) {
                var regex = new RegExp(unfriendly_instance[0]);
                var productName = unfriendly_instance[1];
                var linkAddress = unfriendly_instance[2];
                var articleTitle = unfriendly_instance[3];
                if (regex.test(text_1)) {
                    var div = document.createElement("div");
                    div.style.backgroundColor = "red";
                    div.style.padding = "10px";
                    var warningMessageElement = document.createElement("p");
                    warningMessageElement.classList.add("color-secondary-text", "type--caption");
                    warningMessageElement.style.color = "#f0f0f0";
                    warningMessageElement.textContent = "Please beware that this item may be associated with '".concat(productName, "', which has an entry on the CAT wiki regarding consumer unfriendly behavior. For more information, please read the article linked below:");
                    div.appendChild(warningMessageElement);
                    var link = document.createElement("a");
                    link.classList.add("a-link-normal", "a-color-tertiary");
                    link.href = linkAddress;
                    link.textContent = articleTitle;
                    div.appendChild(link);
                    productTitle_1.insertAdjacentElement("afterend", div);
                }
            });
        }
    }
});
