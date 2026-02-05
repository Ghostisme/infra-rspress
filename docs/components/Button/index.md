---
title: Button 按钮
---

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Ant Design 中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。

## 代码演示

### 按钮类型

按钮有五种类型：主按钮、默认按钮、虚线按钮、文本按钮和链接按钮。

import { Button } from '@/components/Button';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </div>
);

### 按钮尺寸

按钮有大、中、小三种尺寸。通过设置 `size` 为 `large` `middle` `small` 分别把按钮设为大、中、小尺寸。若不设置 `size`，则尺寸为中。

import { Button } from '@/components/Button';

export default () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <Button type="primary" size="large">Large</Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="small">Small</Button>
  </div>
);### 禁用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

import { Button } from '@/components/Button';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(disabled)</Button>
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(disabled)</Button>
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(disabled)</Button>
    <Button type="link">Link</Button>
    <Button type="link" disabled>Link(disabled)</Button>
  </div>
);

### 加载中状态

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

import { Button } from '@/components/Button';
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState(false);
  const [iconLoading, setIconLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleIconClick = () => {
    setIconLoading(true);
    setTimeout(() => setIconLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button type="primary" loading>
        Loading
      </Button>
      <Button type="primary" size="small" loading>
        Loading
      </Button>
      <Button type="primary" loading={loading} onClick={handleClick}>
        Click me!
      </Button>
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={iconLoading}
        onClick={handleIconClick}
      >
        Click me!
      </Button>
    </div>
  );
};

### 图标按钮

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。

import { Button } from '@/components/Button';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Button shape="circle" icon={<SearchOutlined />} />
    <Button type="primary" shape="round" icon={<DownloadOutlined />}>
      Download
    </Button>
    <Button type="primary" icon={<DownloadOutlined />} />
  </div>
);

### 按钮形状

按钮有四种形状：默认、圆形、圆角、方形，可以通过设置 `shape` 为 `circle`、`round` 来设置。

import { Button } from '@/components/Button';
import { SearchOutlined } from '@ant-design/icons';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button type="primary">Default</Button>
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    <Button type="primary" shape="round">Round</Button>
    <Button type="primary" shape="round" icon={<SearchOutlined />}>
      Search
    </Button>
  </div>
);

### 危险按钮

危险按钮用于需要用户确认的高风险操作，比如删除、清空等。

import { Button } from '@/components/Button';

export default () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </div>
);

### Block 按钮

`block` 属性将使按钮适合其父宽度。

import { Button } from '@/components/Button';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </div>
);

### 幽灵按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

import { Button } from '@/components/Button';

export default () => (
  <div style={{ padding: '26px 16px 16px', background: 'rgb(190, 200, 200)' }}>
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
      <Button type="primary" danger ghost>
        Danger
      </Button>
    </div>
  </div>
);

## API

### Button

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |  |
| danger | 设置危险按钮 | boolean | false |  |
| disabled | 设置按钮失效状态 | boolean | false |  |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | 设置按钮的图标组件 | ReactNode | - |  |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |  |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |  |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 设置按钮类型 | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` |  |
| onClick | 点击按钮时的回调 | (event: MouseEvent) => void | - |  |

支持原生 button 的其他所有属性。

## 设计指引

### 按钮类型

- **主按钮**：高亮显示，突出操作的主要性，一个操作区域只能有一个主按钮。
- **默认按钮**：用于没有主次之分的一组行动点。
- **虚线按钮**：常用于添加操作。
- **文本按钮**：用于最次级的行动点，如列表中的操作。
- **链接按钮**：一般用于链接，即导航至某位置。

### 按钮尺寸

按钮分为大、中、小三种尺寸。中号按钮是最常用的尺寸。

### 危险按钮

危险按钮应该谨慎使用，仅在需要用户确认的高风险操作时使用。

import { Button } from './button';
import { CodePreview } from '../_components/CodePreview';

# Button 按钮

## 代码演示

<CodePreview 
  title="基础用法"
  code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>`}
>
  <div style={{ display: 'flex', gap: '12px' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
  </div>
</CodePreview>