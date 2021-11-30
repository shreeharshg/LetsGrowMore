import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
  
        <div className='app'>
            <Loader
            type="ThreeDots"
            color="rgb(255,255,255)"
            height={80}
            width={80}
            timeout={2000}
            />
       </div>
    );
}
export default LoaderComp
