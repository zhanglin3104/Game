var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        var cacheKey = "_cache" + propertyName;
        if (this[cacheKey] == 0 || this["flag"]) {
            this[cacheKey] = getter.apply(this);
            this["flag"] = true;
        }
        else
            console.log("老子不算");
        return this[cacheKey];
    };
    return desc;
};
var User = (function () {
    function User() {
        this.Gold = 0;
        this.Lv = 1;
        this.flag = false;
        this.myHero = [];
        this._cachemyPower = 0;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "myPower"
        ,function () {
            var add = 0;
            for (var _i = 0, _a = this.myHero; _i < _a.length; _i++) {
                var h = _a[_i];
                add += h.myPower;
            }
            return add;
        }
    );
    p.addHero = function (H) {
        this.myHero.push(H);
        this.flag = true;
        this.myPower;
    };
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero(ID, player) {
        this.Lv = 1;
        this.HP = 1;
        this.flag = false;
        this.myEquipments = [];
        this.pros = new Propertys();
        this.basicP = new Propertys();
        this.basicP = ThingsFactory.makeAEuqe(ID);
        this.pros = ThingsFactory.makeAEuqe(ID);
        this.myplay = player;
    }
    var d = __define,c=Hero,p=c.prototype;
    p.Lvup = function () {
        this.Lv++;
        this.myPower;
    };
    d(p, "maxHP"
        ,function () {
            var _this = this;
            this.pros.all[3].value = 0;
            this.pros.all[3].value += this.Lv * 10;
            this.pros.all[3].value += this.basicP.all[3].value;
            this.myEquipments.forEach(function (Eq) { return _this.pros.all[3].value += Eq.maxHP; });
            return this.pros.all[3].value;
        }
    );
    ;
    d(p, "Att"
        ,function () {
            var _this = this;
            this.pros.all[0].value = 0;
            this.pros.all[0].value += this.Lv * 10;
            this.pros.all[0].value += this.basicP.all[0].value;
            this.myEquipments.forEach(function (Eq) { return _this.pros.all[0].value += Eq.Att; });
            return this.pros.all[0].value;
        }
    );
    d(p, "Def"
        ,function () {
            var _this = this;
            this.pros.all[2].value = 0;
            this.pros.all[2].value += this.Lv * 10;
            this.pros.all[2].value += this.basicP.all[2].value;
            this.myEquipments.forEach(function (Eq) { return _this.pros.all[2].value += Eq.Def; });
            return this.pros.all[2].value;
        }
    );
    ;
    d(p, "Cri"
        ,function () {
            var _this = this;
            this.pros.all[1].value = 0;
            this.pros.all[1].value += this.Lv * 1;
            this.pros.all[1].value += this.basicP.all[1].value;
            this.myEquipments.forEach(function (Eq) { return _this.pros.all[1].value += Eq.Cri; });
            //     console.log("hero的攻击"+this.pros.all[1].value);
            return this.pros.all[1].value;
        }
    );
    ;
    d(p, "myPower"
        ,function () {
            return this.maxHP + this.Att + this.Def + this.Cri;
        }
    );
    p.addEquipment = function (E) {
        this.myEquipments.push(E);
        this.flag = true;
        this.myPower;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment(ID) {
        this.flag = false;
        this.pros = new Propertys();
        this.basicP = new Propertys();
        this.myGams = [];
        this.basicP = ThingsFactory.makeAEuqe(ID);
        this.pros = ThingsFactory.makeAEuqe(ID);
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "maxHP"
        ,function () {
            var _this = this;
            this.pros.all[3].value = 0;
            this.pros.all[3].value += this.basicP.all[3].value;
            this.myGams.forEach(function (Eq) { return _this.pros.all[3].value += Eq.basicP.all[3].value; });
            return this.pros.all[3].value;
        }
    );
    ;
    d(p, "Att"
        ,function () {
            var _this = this;
            this.pros.all[0].value = 0;
            this.pros.all[0].value += this.basicP.all[0].value;
            this.myGams.forEach(function (Eq) { return _this.pros.all[0].value += Eq.basicP.all[0].value; });
            return this.pros.all[0].value;
        }
    );
    ;
    d(p, "Def"
        ,function () {
            var _this = this;
            this.pros.all[2].value = 0;
            this.pros.all[2].value += this.basicP.all[2].value;
            this.myGams.forEach(function (Eq) { return _this.pros.all[2].value += Eq.basicP.all[2].value; });
            return this.pros.all[2].value;
        }
    );
    ;
    d(p, "Cri"
        ,function () {
            var _this = this;
            this.pros.all[1].value = 0;
            this.pros.all[1].value += this.basicP.all[1].value;
            this.myGams.forEach(function (Eq) { return _this.pros.all[1].value += Eq.basicP.all[1].value; });
            //     console.log("zb的攻击"+this.pros.all[1].value);
            return this.pros.all[1].value;
        }
    );
    ;
    p.addGem = function (G) {
        this.myGams.push(G);
        this.flag = true;
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var gem = (function () {
    function gem(ID) {
        this.ID = 0;
        this.basicP = new Propertys();
        this.pros = new Propertys();
        this.basicP = ThingsFactory.makeAEuqe(ID);
        this.pros = ThingsFactory.makeAEuqe(ID);
    }
    var d = __define,c=gem,p=c.prototype;
    return gem;
}());
egret.registerClass(gem,'gem');
var Property = (function () {
    function Property(na, va, is) {
        this.name = na;
        this.value = va;
        if (is)
            this.isDate = is;
    }
    var d = __define,c=Property,p=c.prototype;
    return Property;
}());
egret.registerClass(Property,'Property');
var Propertys = (function () {
    function Propertys(n1, n2, n3, n4, n5, n6) {
        this.all = [
            new Property("攻击", 0),
            new Property("暴击", 0, true),
            new Property("防御", 0),
            new Property("生命", 0)
        ];
        if (n1) {
            this.img = n5;
            this.name = n6;
            this.all = [
                new Property("攻击", n1),
                new Property("暴击", n2, true),
                new Property("防御", n3),
                new Property("生命", n4)
            ];
        }
    }
    var d = __define,c=Propertys,p=c.prototype;
    return Propertys;
}());
egret.registerClass(Propertys,'Propertys');
var Euqconfig = [
    { id: 1001, name: "床头的那把红色的弓", atk: 120, def: 0, maxHP: 10, crit: 10, img: "武器_03_png" },
    { id: 1002, name: "隔壁老王的火炬", atk: 220, def: 0, maxHP: 0, crit: 0, img: "武器_07_png" },
    { id: 1003, name: "充话费送的法杖", atk: 320, def: 200, maxHP: 100, crit: 50, img: "武器_11_png" },
    { id: 1004, name: "村头李师傅的剪刀", atk: 400, def: 0, maxHP: 0, crit: 0, img: "武器_15_png" },
    { id: 1005, name: "被当做炒菜锅的传说级盾", atk: 2333, def: 3200, maxHP: 40000, crit: 20, img: "武器_17_png" },
    { id: 2001, name: "父亲的布甲", atk: 20, def: 200, maxHP: 200, crit: 0, img: "盔甲_03_png" },
    { id: 2002, name: "爷爷的铁甲", atk: 80, def: 300, maxHP: 300, crit: 0, img: "盔甲_06_png" },
    { id: 2003, name: "祖父的圣甲", atk: 2333, def: 3600, maxHP: 10000, crit: 20, img: "盔甲_011_png" },
    { id: 2004, name: "我的帽子（我不穿衣服就出门吗）", atk: 200, def: 50, maxHP: 20, crit: 0, img: "盔甲_14_png" },
    { id: 3001, name: "攻击宝石", atk: 300, def: 0, maxHP: 0, crit: 0, img: "宝石_25_png" },
    { id: 3002, name: "防御宝石", atk: 20, def: 400, maxHP: 400, crit: 0, img: "宝石_27_png" },
    { id: 3003, name: "生命宝石", atk: 20, def: 400, maxHP: 400, crit: 0, img: "宝石_30_png" },
    { id: 4001, name: "别人家的小狐狸", atk: 1000, def: 600, maxHP: 1400, crit: 30, img: "1_png" },
];
//# sourceMappingURL=Uesr.js.map