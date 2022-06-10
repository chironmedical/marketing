import React from 'react';
import Blocks from '../components/elements/Blocks';

export default {
  title: 'Blocks',
  component: Blocks,
};

export const Default = () => <Blocks _blocks={[]} builderMode={false}/>;
