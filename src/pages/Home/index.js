import React from 'react'

import { Route } from "react-router-dom"
import news from '../News'
import profile from '../Profile'
import index from '../index'
import houselist from '../HouseList'
// 导入自己的样式文件
import './index.scss'
// 导入tabBar
import { TabBar } from 'antd-mobile';

const tabItems = [
    {
        title: "首页",
        icon: 'icon-ind',
        path: '/home'
    },
    {
        title: "找房",
        icon: 'icon-findHouse',
        path: '/home/list'
    },
    {
        title: "资讯",
        icon: 'icon-infom',
        path: '/home/news'
    },
    {
        title: "我的",
        icon: 'icon-my',
        path: '/home/profile'
    }
]

export default class Home extends React.Component {
    state = {
        // 默认选中菜单
        selectedTab: this.props.location.pathname,
        // 是否隐藏菜单栏
        // hidden: false,
        // // 全屏
        // fullScreen: true,
    }


    renderTabBarItem() {
        return tabItems.map(item => <TabBar.Item
            title={item.title}
            key={item.title}
            icon={<i className={`iconfont ${item.icon}`} />}
            selectedIcon={<i className={`iconfont ${item.icon}`} />}
            selected={this.state.selectedTab === item.path}
            onPress={() => {
                this.setState({
                    selectedTab: item.path
                })
                // 路由切换
                this.props.history.push(item.path)
            }}
        />)
    }

    render() {

        // console.log(this.props.location.pathname);
        return <div className="home">
            {/* 渲染子路由 */}
            <Route path="/home/news" component={news}></Route>
            <Route path="/home/profile" component={profile}></Route>
            <Route path="/home/list" component={houselist}></Route>
            <Route exact path="/home" component={index}></Route>
            {/* TabBar */}
            {/* 不需要控制全屏 */}
            <TabBar
                // unselectedTintColor="#888"
                tintColor="#21b97a"
                barTintColor="white"
                noRenderContent="true">
                {this.renderTabBarItem()}

            </TabBar>
        </div>
    }
}
