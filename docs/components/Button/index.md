import { Button } from './index';

# Button 按钮

触发操作或跳转的按钮组件。

## 代码演示

### 基础用法

最基础的按钮用法。

<div style={{ display: 'flex', gap: '12px', padding: '24px', border: '1px solid #eee', borderRadius: '8px' }}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
</div>

import { Button } from './index';

export default () => (
  <>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
  </>
);### 不同尺寸

提供大、中、小三种尺寸。

<div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '24px', border: '1px solid #eee', borderRadius: '8px', marginTop: '16px' }}>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>

import { Button } from './index';

export default () => (
  <>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </>
);## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| children | 按钮内容 | `ReactNode` | - |
| variant | 按钮变体 | `'primary' \| 'secondary' \| 'outline'` | `'primary'` |
| size | 按钮尺寸 | `'sm' \| 'md' \| 'lg'` | `'md'` |
| onClick | 点击时的回调 | `(event: React.MouseEvent) => void` | - |
| disabled | 是否禁用 | `boolean` | `false` |