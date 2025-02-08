
chrome.storage.local.get('consumer_unfriendly', function (items) {

    console.log("CATLOG: chrome.storage.local.get('consumer_unfriendly')", items);

    const consumer_unfriendly = items.consumer_unfriendly;

    if (consumer_unfriendly) {
        const productTitle = document.querySelector("title");
        const text = productTitle.textContent.toLowerCase();

        if (productTitle) {
            consumer_unfriendly.forEach(unfriendly_instance => {
                const regex = new RegExp(unfriendly_instance[0]);
                const productName = unfriendly_instance[1];
                const linkAddress = unfriendly_instance[2];
                const articleTitle = unfriendly_instance[3];

                if (regex.test(text)) {

                    const div = document.createElement("div");

                    div.style.backgroundColor = "red";
                    div.style.padding = "10px";


                    const warningMessageElement = document.createElement("p");
                    warningMessageElement.classList.add("color-secondary-text", "type--caption");
                    warningMessageElement.style.color = "#f0f0f0";
                    warningMessageElement.textContent = `Please beware that this item may be associated with '${productName}', which has an entry on the CAT wiki regarding consumer unfriendly behavior. For more information, please read the article linked below:`;
                    div.appendChild(warningMessageElement);

                    const link = document.createElement("a");
                    link.classList.add("a-link-normal", "a-color-tertiary");
                    link.href = linkAddress;
                    link.textContent = articleTitle;
                    div.appendChild(link);

                    productTitle.insertAdjacentElement("afterend", div);
                }
            })
        }
    }
});
