import React from 'react';
import { Flex, Progress } from 'antd';

const ProgressBar = () => (
  <Flex gap="small" wrap>
    <Progress type="circle" percent={10} status={'exception'} />
  </Flex>
);

export default ProgressBar;