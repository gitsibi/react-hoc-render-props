import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageHoc from './components/hoc/LikeImageHoc';
import LikePostHoc from './components/hoc/LikePostHoc';
import LikeImageRender from './components/render-props/LikeImageRender';
import LikePostRender from './components/render-props/LikePostRender';

function App() {
  return (
    <div>
      <div className='buttons'>
        <div>
          <h1>Some Blog</h1>
          <LikeImage />
          <LikePost />
        </div>
        <div>
          <h1>Using HOC</h1>
          <LikeImageHoc />
          <LikePostHoc />
        </div>
        <div>
          <h1>Using Render Props</h1>
          <LikeImageRender />
          <LikePostRender/>
        </div>
      </div>
    </div>
  );
}

export default App;
