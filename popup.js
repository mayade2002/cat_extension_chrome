// var catApiUrl = "https://catapi.ct.ws/";
var consumer_unfriendly = [["lg.*refrigerator","LG Refrigerator","https:\/\/wiki.rossmanngroup.com\/wiki\/LG_refrigerator_warranty_scandal","LG refrigerator warranty scandal"],["peloton","Peloton","https:\/\/wiki.rossmanngroup.com\/wiki\/Peloton_removes_Just_Run_feature","Peloton removes Just Run feature"]];
// function refreshList() {
//     console.log("Refreshing the consumer unfriendly list");
//     fetch(catApiUrl).then(function (res) { return res.text(); }).then(function (result) {
//         console.log("got a new consumer unfriendly list: ", result);
//         consumer_unfriendly = JSON.parse(result);
        chrome.storage.local.set({
            'consumer_unfriendly': consumer_unfriendly
        });
//     });
// }
// setInterval(function () {
//     refreshList();
// }, 180000);
// refreshList();
