import { Layout, Row, Col, Avatar, Divider, Input, Button } from 'antd';
import { useEffect, useState } from 'react';
import { SearchOutlined, WalletOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import _ from 'lodash';
const { Header } = Layout;

function HeaderComponent(props: any) {
  const [wAddress, setWaddres] = useState('');

  const { address = '', isWalletStatus = '' } = {};
  useEffect(() => {
    const sliceStr = address.slice(6, address.length - 6);
    setWaddres(_.replace(address, sliceStr, '...'));
  }, [address]);

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
        <Col span={7} className="children-button-right">
          {isWalletStatus ? (
            <Button type="link" className="user-wallet-wrapper" shape="round">
              <span className="fn-lh38">{wAddress}</span>
              <Avatar
                src="https://joeschmoe.io/api/v1/random"
                className="fn-fr"
              />
            </Button>
          ) : (
            <Button icon={<WalletOutlined />} type="primary" shape="round">
              Connect Wallet
            </Button>
          )}
        </Col>
      </Row>
      <Divider style={{ margin: 0 }} />
    </Header>
  );
}

export default observer(HeaderComponent);
