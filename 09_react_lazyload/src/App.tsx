// import LazyLoad from 'react-lazyload';
import LazyLoad from './hooks/useLazyLoad';
import Img1 from './assets/test1.png';
import Img2 from './assets/test2.png';
import Comp2 from './comp/Comp2';
import { lazy } from 'react';

function App() {

  /**
   * 动态加载组件
   */
  const Comp1WithLazy = lazy(() => import('./comp/Comp1'));

  return (
    <>
      <div style={{ height: '50vh', overflow: 'scroll', border: '1px solid #000', }}>
        <h1>React Lazyload</h1>
        <div>
          <p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p>
          <p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p>
          <p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p>
          <p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p><p>i</p>
          <p>i</p>
        </div>
        {/* 图片优化 */}
        <LazyLoad placeholder={<div>Loading...</div>} offset={300}>
          <img src={Img1} alt="" style={{ height: 150, width: 150 }} />
        </LazyLoad>
        <img src={Img2} alt="" style={{ height: 150, width: 150 }} />
        {/* 组件优化 */}
        <LazyLoad placeholder={<div>Loading...</div>} offset={300}>
          <Comp1WithLazy />
        </LazyLoad>
        <Comp2 />
      </div>
    </>
  )
}

export default App
