function FloorShopList(data) {
    var mlc = 12,
        fl1 = [],
        fl2 = [],
        fl3 = [],
        fl4 = [],
        fl5 = [],
        fl6 = [],
        fl7 = [],
        fl0 = [];

    for (var i = 0; i < mlc; i++) {
        fl0.push(data[i]);
    }
    for (var i = mlc; i < mlc * 2; i++) {
        fl1.push(data[i]);
    }
    for (var i = mlc * 2; i < mlc * 3; i++) {
        fl2.push(data[i]);
    }
    for (var i = mlc * 3; i < mlc * 4; i++) {
        fl3.push(data[i]);
    }
    for (var i = mlc * 4; i < mlc * 5; i++) {

        fl4.push(data[i]);
    }

    for (var i = mlc * 5; i < mlc * 6; i++) {

        fl5.push(data[i]);
    }

    for (var i = mlc * 6; i < mlc * 7; i++) {

        fl6.push(data[i]);
    }


    FloorShopAll(fl0, 'Sportswear', 1);
    FloorShopAll(fl1, 'Shoes', 2);
    FloorShopAll(fl2, 'Bag', 3);
    FloorShopAll(fl3, 'Accessories', 4);
    FloorShopAll(fl4, 'Equipments', 5);
    FloorShopAll(fl5, 'Equipments', 6);
    FloorShopAll(fl6, 'Equipments', 7);

}

function FloorShopAll(data, imgHead, id) {

    var str = '';
    for (var i = 0; i < data.length; i++) {
        var url = data[i]['链接'];
        var name = data[i]['店铺名称'];
       
        str += `<a href="${url}" class="shop-a" target="_blank" title="${name}"></a>`
    

    };




    var floor = $("#floor-" + id);

    floor.find('.floor-shop').html(str);

}