import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () =>{
    const GoGitHub =()=>{
        window.location = "http://github.com/Kushal1302"
    }
    const goInsta = () =>{
        window.location = "https://www.instagram.com/kushal_malviy/"
    }
    const goFace =() =>{
        window.location = "https://www.facebook.com/profile.php?id=100069476738565"
    }
    return (<>
    <div className="container mb-0 mt-5">
        <div className="row">
            <div className="col-md-4 col-10 mx-auto">
                <div className='d-flex justify-content-around'>
                    <GitHubIcon className='footer-icon'  onClick={GoGitHub} />
                    <InstagramIcon className='footer-icon' onClick={goInsta}/>
                    <FacebookIcon className='footer-icon' onClick={goFace}/>

                    </div>

            </div>
        </div>
    </div>
    
    </>)

}
export default Footer;