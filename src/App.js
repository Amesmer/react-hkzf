import React from 'react';

// 安装yarn add react-router-dom
// 导入路由组件: Router/route /Link
// 在pages 文件夹中创建Home/index.js和Citylist/index.js 两个组件
// 使用Route组件配置首页和城市选择页面
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 导入组件
import home from './pages/Home'
import citylist from './pages/CityList'
// 导入要使用的组件
import { Button } from "antd-mobile"


function App() {
  return (
    <Router>
      <div className="App">
        {/* 配置导航菜单
        <ul>
          <li>  <Link to="/home">首页</Link></li>
          <li>  <Link to="/citylist">城市选择</Link></li>
        </ul> */}

        {/* 配置路由 */}
        <Route path="/home" component={home}></Route>
        <Route path="/citylist" component={citylist}></Route>
      </div>
    </Router>

  );
}

export default App;
