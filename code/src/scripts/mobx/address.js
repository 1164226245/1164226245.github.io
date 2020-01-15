//地址增删改
//引入mobx的主文件  并进行相关验证
import { observable, action, computed, } from "mobx";

import { axios } from "&";
import Item from "antd-mobile/lib/popover/Item";

class address {
    @observable addressList = []    //地址列表

    @observable defaultAddressList = {}   //默认的地址

    @observable  num =0

    //action执行动作  得到商品列表
    @action getAddrList = async (url) => {
        const res = await axios.get(url);
        this.addressList = res.data.result;
    }
    //得到一个默认地址
    @action getDefaultAddrList = async (url) => {
        const res = await axios.get(url);
        console.log(res.data.result);
        // console.log(res.data.result.addresobj.checked);
        this.defaultAddressList = res.data.result;
    }
    //修改地址
    //新增地址
    //删除地址
    // @action  deleteOneAddr=()=>{
    //     axios.post("/react/deleteoneaddress").then(res=>{
    //         this.addressList=this.addressList.filter(item=>item._id);
    //     })
    // }

    @action deleteOneAddr = (mobile, id) => {
        axios.post("/react/deleteoneaddress", {
            mobile,
            id
        }).then(res => {
            console.log(res);
            this.num=res.data.code;
        })
    }

    //设置默认地址  选中弹框后就是默认地址
    @action setDefaultAddre = (mobile, id, checked) => {
        axios.post("/react/defaultChecked", {
            mobile,
            id,
            checked
        }).then(res => {
            // this.addressList=this.addressList.map((item)=>{
            //     // if(item._id==id){
            //     //     console.log("999")
            //     //     item.checked=true
            //     //     // return item.checked;
            //     // }else{
            //     //     console.log("888");
            //     //     item.checked=false
            //     // }
            //     // return item


            // })  
            this.addressList = res.data.result
        })
    }
    //原来的
    // @action setDefaultAddre =(mobile,id)=>{
    //     axios.post("/react/defaultChecked",{
    //         mobile,
    //         id
    //     }).then(res=>{
    //         this.addressList=this.addressList.map((item)=>{
    //             if(item._id==id){
    //                 item.checked=true
    //             }else{
    //                 item.checked=false
    //             }
    //             return item;
    //         })  
    //     })
    // }
    //取消设置默认地址
    @action calcelDefault = (mobile, id, checked) => {
        axios.post("/react/canceldefault", {
            mobile,
            id,
            checked
        }).then(res => {
            this.addressList = this.addressList.map((item) => {
                if (item._id == id) {
                    if (checked === true) {
                        item.checked = false;
                    } else {
                        item.checked = true;
                    }
                }
                return item;
            })
        })
    }
    //修改地址
    // @action modifyaddress = (mobile, id, province, town, district, specific) => {
    //     axios.post("/react/modifyaddress", {
    //         mobile,
    //         id,
    //         province,
    //         town,
    //         district,
    //         specific
    //     }).then(res => {
    //         console.log(res);
    //     })
    // }

    @action modifyaddress = (mobile, id, addresobj) => {
        axios.post("/react/modifyaddress", {
            mobile,
            id,
            addresobj
           
        }).then(res => {
            console.log(res);
        })
    }
    //数据监听
    // @computed  
}


export default new address();   //