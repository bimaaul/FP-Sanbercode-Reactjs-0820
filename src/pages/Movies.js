import React from 'react';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;
// const { SubMenu } = Menu;

const Movies = () => {
    
    return(
        <>
            <h1>Filter Here</h1>
            <Layout>
                <Sider>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            Movie 1
                        </Menu.Item>
                        <Menu.Item key="2">
                            Movie 2
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    List Movie Goes Here
                </Content>
            </Layout>
        </>
    )
}

export default Movies