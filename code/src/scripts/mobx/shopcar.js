//引入mobx的主文件  并进行相关验证
import { observable, action, computed, } from "mobx";

import { axios } from "&";

class Shopcar {
    //显示购物车列表
    @observable carList = []   //定义购物车的列表数据

    //action执行动作  得到商品列表
    @action getCarList = async (url) => {
        const res = await axios.get(url);
        this.carList = res.data.result;
    }
     //删除选中
     @action delSelect=()=>{
        axios.post("/react/delSelect").then(res=>{
            this.carList=this.carList.filter(item=>!item.checked);
            //将没有选中的商品过滤出来
        })
    }
    //单选
    @action  changeOneChecked=(checked,goodsid)=>{
        axios.post("/react/changeChecked",{
            goodsid,
            checked

        }).then(res=>{
            this.carList=this.carList.map((item)=>{
                if(item.goodsid==goodsid){
                    item.checked=checked
                }
                return item;   //每一个商品
            })
        })
    }
    //全选
    @action changeQuan=(checked)=>{
        axios.post("/react/changeChecked",{
            checked
        }).then(res=>{
            this.quan=checked
        })
    }
    //选中单个数量  包含加和减    利用flag的正负
    @action changeOneCount=(goodsid,flag)=>{
            axios.post("/react/changeCount",{
                goodsid,
                flag

            }).then(res=>{
                this.carList=this.carList.map((item)=>{
                    if(item.goodsid==goodsid){
                        item.count+=flag?1:-1;
                    }
                    return item;   //每一个商品
                })
            })
    }
    //通过输入数值直接修改购物车里面的具体数值
    @action changeOneCountNum=(goodsid,count)=>{
        axios.post("/react/changeCount",{
            goodsid,
            count
        }).then(res=>{
            this.carList=this.carList.map((item)=>{
                if(item.goodsid==goodsid){
                    item.count=count
                }
                return item;        //具体修改多少就数据库有插入多少
            })
        })
    }

   
    //得到总数
    @computed get carTotal() {
        var carTotal = 0;   //设置默认值
        this.carList.forEach((item) => {
            carTotal += item.count
        })
        return carTotal;
    }
    //得到购物车选中的数量数量
    @computed get carNum() {
        var carNum = 0;
        this.carList.forEach((item) => {
            if (item.checked) {
                carNum += item.count
            }

        })
        return carNum;
    }
    //得到选中的商品去订单页面
    @computed  get checkedGood(){
        var checkedGood=[]
        this.carList.forEach((item) => {
            if (item.checked) {
                // checkedGood += item
                checkedGood.push(item);
            }

        });
        return checkedGood
    }
    //得到总价  等于数量乘以价格
    @computed get total() {
        var total = 0;
        this.carList.forEach((item) => {
            if (item.checked) {
                total += item.count * item.good.jiage
            }
        })
        return total;
    }
    //全选事件
    @computed get quan(){
        var quan = true;
        this.carList.forEach(item=>{
            if(!item.checked){
                quan = false;
            }
        })
        return quan;
    }
    //监听并改变全选事件
    set quan(newVal) {
        this.carList = this.carList.map((item) => {
            item.checked = newVal;
            return item;
        })
    }
}

//底下以构造函数的方式暴露
export default new Shopcar();