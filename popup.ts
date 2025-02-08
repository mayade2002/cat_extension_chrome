
// const catApiUrl = "https://catapi.ct.ws/";

let consumer_unfriendly = [["lg.*refrigerator","LG Refrigerator","https:\/\/wiki.rossmanngroup.com\/wiki\/LG_refrigerator_warranty_scandal","LG refrigerator warranty scandal"],["peloton","Peloton","https:\/\/wiki.rossmanngroup.com\/wiki\/Peloton_removes_Just_Run_feature","Peloton removes Just Run feature"]];
// let consumer_unfriendly = []

// function refreshList() {
//     console.log("Refreshing the consumer unfriendly list");
//     fetch(catApiUrl).then(res => res.text()).then(result => {
//         console.log("got a new consumer unfriendly list: ", result);
//         consumer_unfriendly = JSON.parse(result);
        chrome.storage.local.set({
            'consumer_unfriendly': consumer_unfriendly
        })
//     })
// }
//
// setInterval(() => {
//     refreshList();
// }, 18000)
//
// refreshList();