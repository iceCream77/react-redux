'use strict';

import React,{Component} from 'react';
import 'antd/dist/antd.less'; 
import { Menu, Icon , Row, Col } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;

const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
		
    render() {
        return (
          <header id="header" className="clearfix">
          <Row className="ant-row">
			      
			      
			      <Col span={21}  push={3}>
			      	<Menu onClick={this.handleClick}
				        mode="horizontal" 
				        defaultSelectedKeys={[this.props.pageName]}
				        >
				        <Menu.Item key="home">
				          <Link to="home"><Icon type="home" />首页</Link>
				        </Menu.Item>
				        <Menu.Item key="order">
				          <Icon type="file-text" />订单中心
				        </Menu.Item>
				        <Menu.Item key="app">
				          <Icon type="file-text" />业务中心
				        </Menu.Item>
				        <Menu.Item key="product">
				         <Link to="product">商品管理</Link>
				        </Menu.Item>
				        <Menu.Item key="datacener">
				          数据统计
				        </Menu.Item>
				        <Menu.Item key="finance">
				          财务中心
				        </Menu.Item>
				        <Menu.Item key="alipay">
				          <a href="http://www.alipay.com/" target="_blank">59社区</a>
				        </Menu.Item>
				      </Menu>
			      </Col>
			      <Col span={3}  pull={21}><img height="60" src="/reduxIndex/images/logo.png"/></Col>
			    </Row>
			    
          </header>
        )
    }
}
export default Header


