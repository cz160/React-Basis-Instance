const Datasource = {
    data : {
        comments : [
            {id: 1, title: '今天是个好日子'},
            {id: 2, title: '心想的事儿都能成'}
        ],
        blogList: [
            {id: 1, title: '床前明月光'},
            {id: 2, title: '疑是地上霜'},
        ]
    },
    getComments(){
        return this.data.comments
    },
    getBlogList(){
        return this.data.blogList
    },
    handlers:[], //模拟事件队列
    //发布订阅模式
    addChangeListener(handler){
        this.handlers.push(handler)
    },
    removeChangeListener(handler){
        this.handlers=this.handlers.filter(item=>item!==handler)
    },
    emit(){
       this.handlers.forEach(handler =>handler()) 
    },
    //点击按钮数据发生改变
    changeComments(){
        this.data.comments.push({
            id: 3, title: '今个老百姓真开心'
        })
        //发布
        this.emit()
    }
}
//发布订阅模式：将所有用户的放到一个数组中，当被订阅者都新数据时，遍历数据通知所有用户
Datasource.changeComments = Datasource.changeComments.bind(Datasource)

export default Datasource