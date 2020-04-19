function Page(el, option) {
    this.ele = document.querySelector(el);
    this.option = option;
    this.pageIndex = 1; //默认显示第一页
    this.create(); //生成结构
    this.bindData(); //绑定数据默认绑定的是第一页的效果
    // this.bindEvent(); //上下页事件的绑定;
}
Page.prototype.bindEvent = function() {
    var that = this;
    this.nextBtn.className = "num prev";
    this.nextBtn.onclick = function() {
        that.pageIndex++;
        that.bindData();
    }
    this.prevBtn.className = "num next";
    this.prevBtn.onclick = function() {
        that.pageIndex--;
        that.bindData();
    }
    if (this.pageIndex == 1) {
        this.prevBtn.className = "num prev disabled";
        this.prevBtn.onclick = null;
    }
    if (this.pageIndex == this.maxPage) {
        this.nextBtn.className = "num next disabled";
        this.nextBtn.onclick = null;
    }


}

Page.prototype.bindData = function() {
    var that = this;
    this.maxPage = Math.ceil(this.option["count"] / this.option["shownum"]);
    var middleNum = Math.floor(this.option["showpage"] / 2);
    var start = 1;
    var end = this.maxPage > this.option["showpage"] ? this.option["showpage"] : this.maxPage;
    this.content.innerHTML = "";

    if (this.pageIndex > middleNum) {
        start = this.pageIndex - middleNum;
        end = this.pageIndex + middleNum;
    }
    if (this.pageIndex > this.maxPage - middleNum) {
        end = this.maxPage;
        start = this.maxPage - this.option.showpage + 1;
    }

    start = start < 1 ? 1 : start;

    for (var i = start; i <= end; i++) {
        var span = document.createElement("span");
        var a = document.createElement("a");
        a.innerHTML = i;
        if (this.pageIndex == i) {
            span.className = "num curr";
        } else {
            a.setAttribute("href", "javascript:void(0)");
            a.className = "num";
        }
        span.appendChild(a);
        this.content.appendChild(span);

        a.onclick = function() { //点击页码 要记录页码
            that.pageIndex = this.innerHTML * 1;
            that.bindData();
        }
    }

    that.bindEvent(); //重新的绑定事件
    if (this.option.callBack) {
        this.option.callBack(this.pageIndex);
    }


}
Page.prototype.create = function() {
    this.ele.className = "page";
    this.ele.innerHTML = "";

    this.pageWrap = document.createElement('div');
    this.pageWrap.className = "page-wrap fr";

    this.total = document.createElement('div');
    this.total.className = "total";
    this.total.innerHTML = "共" + this.option["count"] + "条记录";
    this.pageWrap.appendChild(this.total);
    this.ele.appendChild(this.pageWrap);

    this.pageNum = document.createElement('div');
    this.pageNum.className = "page-num fr";

    this.prevSpan = document.createElement('span');
    this.prevBtn = document.createElement('a');
    this.prevBtn.className = "num prev";
    this.prevBtn.innerHTML = "上一页";
    this.prevSpan.appendChild(this.prevBtn);
    this.pageNum.appendChild(this.prevSpan);

    this.content = document.createElement('span');
    this.pageNum.appendChild(this.content);

    this.nextSpan = document.createElement('span');
    this.nextBtn = document.createElement('a');
    this.nextBtn.className = "num next";
    this.nextBtn.innerHTML = "下一页";
    this.nextSpan.appendChild(this.nextBtn);
    this.pageNum.appendChild(this.nextSpan);

    this.ele.appendChild(this.pageNum);
}