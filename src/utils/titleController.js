//网站标题控制

var routerTitle= "", siteTitle= "";

function setTitle(){
    if(!routerTitle && !siteTitle){
        document.title = "loading....";
    }else if(routerTitle && !siteTitle){
        document.title = routerTitle;
    }else if(!routerTitle && siteTitle){
        document.title = siteTitle;
    }else{
        document.title = `${routerTitle}-${siteTitle}`;
    }
}


export default {
//设置路由标题
    setRouterTitle(title){
        routerTitle = title;
        setTitle();
    },
    //设置网站标题
    setSiteTitle(title){
        siteTitle = title;
        setTitle();
    }
}