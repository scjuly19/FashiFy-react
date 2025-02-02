import { useNavigate } from 'react-router-dom';
import '../Auth.css';
const Logout = () => {
  const navigate = useNavigate();
  return (
    <div class='logout-container'>
      <main class='logout-main-container'>
        <div class='logout-text'>
          <h1>You are currently logged Out</h1>
          <p>Don't miss out on latest deals.</p>
          <button
            class='btn btn-link-primary background-primary brd-rd-semi-sq'
            onClick={() => navigate('/products')}
          >
            See products
          </button>
        </div>
        <div class='img-responsive-container obj-pos-tp-ct logout-img-container'>
          <img
            class='img-responsive'
            // src="https://res.cloudinary.com/donqbxlnc/image/upload/v1647812850/logout_re_pfrpun.png"
            src='https://blog-www.pods.com/wp-content/uploads/2019/10/29_4_Clothes_Drawer-1-1024x711.jpg'
            alt='logout image'
          />
        </div>
      </main>
    </div>
  );
};
export default Logout;
