import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </SmoothScroll>
  );
}
