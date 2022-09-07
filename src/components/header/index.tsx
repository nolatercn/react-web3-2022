import { Layout, Row, Col, Avatar, Divider, Input, Button } from 'antd';
const { Header } = Layout;

import { SearchOutlined, WalletOutlined } from '@ant-design/icons';

import { observer } from 'mobx-react-lite';

function HeaderComponent(props: any) {
  return (
    <Header>
      <Row justify="space-between">
        <Col>
          <Input
            placeholder="Search you keyword"
            bordered={false}
            style={{ fontSize: 24 }}
            prefix={
              <SearchOutlined style={{ fontSize: 24, color: '#9155fd' }} />
            }
          />
        </Col>
        <Col span={3}>
          <Button icon={<WalletOutlined />} type="primary" shape="round">
            Connect Wallet
          </Button>
          {/* <Avatar src="https://joeschmoe.io/api/v1/random" /> */}
        </Col>
      </Row>
      <Divider style={{ margin: 0 }} />
    </Header>
  );
}

export default observer(HeaderComponent);
