import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import { Text } from '@iso/shared';

const IndexPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <Text />
      {isClient && <View />}
    </div>
  );
};

export default IndexPage;
