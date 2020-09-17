let nowHost = window.location.host

//设置csdn烦人的【展开阅读全文】、【弹出登录】功能
if (nowHost == "blog.csdn.net") {
    setTimeout(function () {
        document.getElementById("article_content").style.height = "auto"
        let hideOpenMore = document.getElementsByClassName("hide-article-box")
        for (let i = 0; i < hideOpenMore.length; i++) {
            hideOpenMore[i].remove()
        }
        document.getElementById("passportbox").style.display = "none"
        let loginMark = document.getElementsByClassName("login-mark")
        for (let i = 0; i < loginMark.length; i++) {
            loginMark[i].remove()
        }
    }, 2000)
}

//清理百度搜索中右侧推荐，搜索广告
if (nowHost == "www.baidu.com") {
    setTimeout(function () {
        //右侧百度热榜
        let rightObj = document.getElementById("content_right")
        if (rightObj !== undefined) { rightObj.remove() }
        //左侧广告
        for (let j = 1; j < 10; j++) {
            let tempMin = j * 1000
            let tempMax = tempMin + 20
            for (let i = tempMin; i < tempMax; i++) {
                console.log(i)
                let pObj = document.getElementById('' + i + '')
                if (pObj !== undefined && pObj !== null) {
                    pObj.style.display = "none !important"
                    pObj.remove()
                }
            }
        }
    }, 1000)
    setInterval(function () {
        //左侧广告
        let tuiguangPpm = document.getElementsByClassName("EC_ppim_new_gap_bottom")
        for (let i = 0; i < tuiguangPpm.length; i++) {
            tuiguangPpm[i].remove()
        }
        let tuiGuangObj = document.getElementsByClassName("ec_tuiguang_pplink")
        for (let i = 0; i < tuiGuangObj.length; i++) {
            tuiGuangObj[i].parentNode.parentNode.remove()
        }
    }, 10)
}

//屏蔽网站的屏蔽层
if (nowHost == "www.coder55.com") {
    setTimeout(function () {
        document.getElementById("btw-mask").style.display = "none"
        document.getElementById("btw-modal").style.display = "none"
    }, 1000)
}

if (nowHost == "yq.aliyun.com") {
    setTimeout(function () {
        let hideContent = document.getElementsByClassName("article-hide-content")
        if (hideContent.length > 0) {
            console.log("block hide content")
            console.log(hideContent[0])
            hideContent[0].style.height = "auto"
            hideContent[0].style.overflow = "visible"
        }
        let mask = document.getElementsByClassName("dbl-popup-backdrop")
        if (mask.length > 0) {
            console.log("block mask")
            mask[0].style.display = "none"
        }
    }, 5000)
}